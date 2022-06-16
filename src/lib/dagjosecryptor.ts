import { randomBytes } from '@stablelib/random';
// import * as hash from 'hash.js';
import { hexDigestMessage } from './utils/index';

// JWT & utilities
import { xc20pDirEncrypter, xc20pDirDecrypter, decryptJWE, createJWE } from 'did-jwt';
import { decodeCleartext, prepareCleartext } from 'dag-jose-utils';
// import * as dagJose from 'dag-jose';
import * as dagJson from '@ipld/dag-json';

const textEncoder = new TextEncoder();
const textDecoder = new TextDecoder();

const REKEYS = 'reKeys';

import type { EncryptedPackage } from './types';

export class DagJoseCryptor {
	constructor(ipfs, proxcryptor, cid?: CID) {
		this.ipfs = ipfs;
		this.proxcryptor = proxcryptor;
		this.rootCID = cid;
	}

	async updateDag(currentRootCID, tag, newEntry): CID {
		// new Entry CID
		const newCID = await this.ipfs.dag.put(newEntry, {
			pin: true,
			format: dagJson.code // only dagCbor gets served via go-ipfs http right now
		});

		// get current object from given root
		const exisitingData = currentRootCID ? await this.ipfs.dag.get(currentRootCID) : {};

		let data = {
			...exisitingData.value, // keep exisiting data
			[tag]: newCID, // push new data onto this object, overwriting if necessary
			prev: currentRootCID || false // link to previous data, if existed
		};

		// save it to the DAG rollup
		const newRootCID = await this.ipfs.dag.put(data, {
			format: dagJson.code // isnt this the default now anyway?
		});

		return newRootCID;
	}

	async getHashedTags(tag: string, targetPublicKey: Uint8Array): Uint8Array {
		// get senders publicKey
		const senderPubKey: Uint8Array = await this.proxcryptor.getPublicKey(); // get current/active proxcryptor publicKey

		const tagArray: Uint8Array = textEncoder.encode(tag);

		// TODO: asymmetrically encrypt for their public key instead? Lookup will be longer though
		const input = new Uint8Array([...tagArray, ...targetPublicKey, ...senderPubKey]);

		// const hashedPubkeys = hash.sha256().update(input).digest('hex');
		// crypto.subtle.digest('SHA-256', input);
		const hashedPubkeys = await hexDigestMessage(input);
		return hashedPubkeys;
	}

	async getTagReKeysNode(tag) {
		if (!tag) return;
		// get current list of rekeys
		const resTagNode = await this.ipfs.dag.get(this.rootCID, { path: `/${tag}` });
		let tagNode = resTagNode.value;
		const reKeyNode = tagNode[REKEYS];
		return { reKeyNode, tagNode };
	}

	async setTagReKeys(tag: string, targetPublicKey: Uint8Array) {
		// put key is special because it is not encrypted
		// but gets added to rootCID
		// so targets can access their decryption keys
		// key = hash(target public key + tag) <-- would be the same across apps, correlation possible
		// key = hash(sender public key + target public key + tag) <-- unique across apps
		if (!tag) return;

		const hashedPubkeys = await this.getHashedTags(tag, targetPublicKey); // hex string

		let { reKeyNode, tagNode } = await this.getTagReKeysNode(tag);

		// generate a re-encryption key for this targetPublicKey
		const targetsReKey = await this.proxcryptor.generateReKey(targetPublicKey, tag);

		// now reencrypt using the encrypted msg + reKey
		const targetsReEncryptedKey = await this.proxcryptor.reEncrypt(
			targetPublicKey,
			tagNode.encryptedKey,
			targetsReKey
		);

		// lookup dictionary: Map of (key=hash, value=reEncrKey)
		reKeyNode[hashedPubkeys] = targetsReEncryptedKey;

		// update reKeyNode in Tag object
		tagNode = { ...tagNode, [REKEYS]: reKeyNode };

		// update CID rollup
		this.rootCID = await this.updateDag(this.rootCID, tag, tagNode);
		return this.rootCID;
	}

	async checkAccess(tag: string, targetPublicKey: Uint8Array) {
		if (!tag) return;

		// check if this target is on the ReKey list
		const hashedPubkeys = await this.getHashedTags(tag, targetPublicKey); // hex string
		let { reKeyNode, tagNode } = await this.getTagReKeysNode(tag);

		// lookup in dictionary: Map of (key=hash, value=reEncrKey)
		if (hashedPubkeys in reKeyNode) return reKeyNode[hashedPubkeys]; // access was granted
		// else
		return false;
	}

	async decryptFromTagNode(tagNode) {
		/**
		Just need to decrypt it using the de-proxcryptor, here's how:
		1. Get the reKey from the tagNode that matches the hashTag of this pubkey
		hashTag comes from proxcryptor.getHashedTags()
		2. Take that reKey together with the cid of the Tag and call proxcryptor.get(cid, reKey)
		3. Result is the decrypted data
		*/
		const pubKey = await this.proxcryptor.getPublicKey();
		const hashTag = await this.getHashedTags(tagNode.tag, pubKey);

		// validate
		if (!(hashTag in tagNode[REKEYS])) return false; // no reKey avaialble to decrypt for this prox public_key

		// lookUp
		const reKey = tagNode[REKEYS][hashTag];
		return await this.get(tagNode.encryptedData, reKey);
	}

	async put(secretz: object, tag: string, schema = {}) {
		// cleanse input object of undefined values, IPLD doesnt like undefined properies
		secretz = Object.fromEntries(
			Object.entries(secretz).map(([k, v]) => (v === undefined ? [k, null] : [k, v]))
		);

		// Create a key, encrypt and store a block, then load and decrypt it:
		const symmetricKey = randomBytes(32); // our random secret key
		const selfEncryptedSymmetricKey = await this.proxcryptor.selfEncrypt(symmetricKey, tag);
		const cid = await this.storeDAGEncrypted(secretz, symmetricKey); // for when arweave can put DAG objects, see https://github.com/ArweaveTeam/arweave/pull/338
		// const cid = await this.storeIPFSEncrypted(secretz, symmetricKey);

		// pin encryptedData cid
		let pinned = await this.ipfs.pin.add(cid, { recursive: true });

		let prev = false;
		try {
			let res = await this.ipfs.dag.resolve(`${this.rootCID}/${tag}`);
			prev = res.cid;
		} catch (error) {
			prev = false;
		}
		const newEntry = {
			tag,
			schema,
			timestamp: +new Date(), // unary to milliseconds string
			encryptedData: cid, // link to the encryptedData saved in IPLD/IPFS
			encryptedKey: selfEncryptedSymmetricKey, // the tranform reCryptable symmetric key
			[REKEYS]: {}, // new blank map for reCryptabled keys
			prev
		};

		this.rootCID = await this.updateDag(this.rootCID, tag, newEntry);
	}

	async get(cid, re_encrypted_message) {
		// decrypt
		const symmetricKey = await this.proxcryptor.reDecrypt(re_encrypted_message);
		const decoded = await this.loadEncrypted(cid, symmetricKey);
		return decoded;
	}

	async selfDecrypt(data) {
		try {
			const symmetricKey = await this.proxcryptor.selfDecrypt(data.encryptedKey);
			const decoded = await this.loadEncrypted(data.encryptedData, symmetricKey); // waits until arweave supports DAG put
			// const decoded = await this.loadIPFSEncrypted(data.encryptedData, symmetricKey);
			return decoded;
		} catch (error) {
			console.error('In selfDecrypt', error);
			return false;
		}
	}

	// Encrypt and store a payload using a secret key:
	storeDAGEncrypted = async (payload, key) => {
		const jwe = await this.makeJWE(payload, key);
		/* Let IPFS store the bytes using the DAG-JOSE codec and return a CID
		 * Note: here it is format: codecName
		 * In ipfs.create({ipld: { codecs: codec }}) (used to be format, but name changed)
		 * Changes to storeCodec/inputCodec in upcomign chg  https://github.com/ipfs/js-ipfs/blob/a960d28d4689c794889f91c9307f0aeb0d6a45f3/docs/core-api/DAG.md
		 */
		const cid = await this.ipfs.dag.put(jwe, {
			// TODO: Wait until ipfs-go codec lands? https://github.com/ipfs/js-ipfs/pull/3917
			// format: 'dag-jose' // dagJose.code, // codec code ensures this jose CID is saved
			hashAlg: 'sha2-256'
		});
		return cid;
	};

	storeIPFSEncrypted = async (payload, key) => {
		const jwe = await this.makeJWE(payload, key);
		const res = await this.ipfs.add(JSON.stringify(jwe), {
			cidVersion: 1,
			pin: true
		});
		return res.cid;
	};

	makeJWE = async (payload, key) => {
		// self enct
		const dirEncrypter = xc20pDirEncrypter(key);
		// prepares a cleartext object to be encrypted in a JWE
		const cleartext = await prepareCleartext(payload);
		// encrypt into JWE container layout using secret key
		const jwe = await createJWE(cleartext, [dirEncrypter]);
		return jwe;
	};

	// Load an encrypted block from a CID and decrypt the payload using a secret key:
	loadEncrypted = async (cid, key) => {
		const dirDecrypter = xc20pDirDecrypter(key);
		const retrieved = await this.ipfs.dag.get(cid);
		const decryptedData = await decryptJWE(retrieved.value, dirDecrypter);
		return decodeCleartext(decryptedData);
	};
}
