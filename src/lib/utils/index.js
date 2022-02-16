import b64 from 'base64-js';
import bs58 from 'bs58';

const ROOT_CID = '__ROOT_CID';
const PUBLIC_KEY_BYTES = 32;

// Pre-Init
const LUT_HEX_4b = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
const LUT_HEX_8b = new Array(0x100);
for (let n = 0; n < 0x100; n++) {
	LUT_HEX_8b[n] = `${LUT_HEX_4b[(n >>> 4) & 0xf]}${LUT_HEX_4b[n & 0xf]}`;
}
// End Pre-Init
export function bufftoHex(buffer) {
	let out = '';
	for (let idx = 0, edx = buffer.length; idx < edx; idx++) {
		out += LUT_HEX_8b[buffer[idx]];
	}
	return out;
}

export function validatePubKey(pubKey) {
	console.log('Validating', { pubKey });

	if (!pubKey) return;

	// base64 / base64URL
	try {
		let pubKeyBytes = b64.toByteArray(pubKey);

		if (pubKeyBytes.length === PUBLIC_KEY_BYTES) {
			return pubKeyBytes;
		}
	} catch (error) {
		console.log('Not base 64');
	}

	// base58 / base58BTC
	try {
		let b58Bytes = bs58.decode(pubKey);
		if (b58Bytes.length === PUBLIC_KEY_BYTES) {
			return b58Bytes;
		}
	} catch (error) {
		console.log('Not base 58');
	}

	// hex
	const fromHexString = (hexString) =>
		new Uint8Array(hexString.match(/.{1,2}/g).map((byte) => parseInt(byte, 16)));
	let hexb58Bytes = fromHexString(pubKey);

	if (hexb58Bytes.length === PUBLIC_KEY_BYTES) {
		return hexb58Bytes;
	}

	console.warn('Not any supported encodings :( ');

	return false;
}

export async function hexDigestMessage(message) {
	const msgUint8 = new TextEncoder().encode(message); // encode as (utf-8) Uint8Array
	const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8); // hash the message
	const hashArray = Array.from(new Uint8Array(hashBuffer)); // convert buffer to byte array
	const hashHex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join(''); // convert bytes to hex string
	return hashHex;
}
