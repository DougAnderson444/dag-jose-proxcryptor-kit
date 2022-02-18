<script lang="ts">
	/*
	All this component does is connect IPLD + proxcryptor + Saving Component Template so they can work together
	*/
	import { onMount, setContext } from 'svelte';
	import Basic from './templates/Basic/Profile.svelte';
	import Contacts from './templates/Contacts/_Contacts.svelte';

	import Common from './Common.svelte';

	export let rootCID;
	export let proxcryptor; // pass in a proxy re-encryptor prop
	export let ipfsNode; // pass in an instance of ipfs
	export let CID; // pass in https://github.com/multiformats/js-multiformats#interfaces
	export let tag;

	const ROOT_CID = '__ROOT_CID__'; // Database key

	let loaded = false;

	// functions
	let handleRootCIDUpdate;
	let loadRootCID;

	let joseCryptor;
	let setJoseCryptor;
	let decryptFromTagNode;

	let setAccess, checkAccess;

	let getTagNodes;

	export let refreshedRootCID;

	//  onSubmitted gets bound to, and overwritten by active component
	export let onSubmitted = () => {}; // optional callback by child component to run after tx submitted

	onMount(async () => {
		const { ImmortalDB } = await import('immortal-db');

		const { DagJoseCryptor } = await import('./dagjosecryptor');

		// parse and use cached root CIDs, if saved
		loadRootCID = async () => {
			if (rootCID) return true;
			let res = await ImmortalDB.get(ROOT_CID);

			if (!res) {
				rootCID = false;
				return true;
			}

			rootCID = CID.asCID(res) || CID.parse(res);
			console.log('rootCID set in loadRootCID');
			return true;
		};

		await loadRootCID();

		// use the portal proxcryptor to encrypt the DAG JOSEs
		setJoseCryptor = async () => {
			joseCryptor = new DagJoseCryptor(ipfsNode, proxcryptor, rootCID); //refesh when updated
			if (!rootCID) loaded = true;
		};

		handleRootCIDUpdate = async () => {
			rootCID = joseCryptor.rootCID;
			console.log('Updating rootCID', { rootCID: rootCID.toString() });
			ImmortalDB.set(ROOT_CID, rootCID.toString());
			loaded = true;
		};
	});

	// set the cryptor once the proxcryptor is connected and available
	$: if (proxcryptor && setJoseCryptor) setJoseCryptor();

	// update the rootCID as req'd
	$: if (joseCryptor && joseCryptor.rootCID && handleRootCIDUpdate) handleRootCIDUpdate();

	let decrypt = async (data) => await joseCryptor.selfDecrypt(data);

	const handleSubmit = async function (event) {
		let tag = event.detail.tag || null;
		let schema = event.detail.data.schema || '';
		let value = event.detail.data.value || null;

		if (!tag || !value) return; // TODO: Handle missing vals better

		console.log('Put: ', { tag, value });

		await joseCryptor.put(value, tag, schema);
		joseCryptor = joseCryptor; // refresh UI?

		onSubmitted(); // update selected component
		refreshedRootCID();
	};

	// save access function to a svelte store so it can be used by any component, any time
	// allows access to tag by someone's PublicKey
	setAccess = async (tag: string, targetPublicKey: Uint8Array) => {
		// allow access to this tag by this public key
		await joseCryptor.setTagReKeys(tag, targetPublicKey);
		joseCryptor = joseCryptor; // triggers this.rootCID to fire
	};

	checkAccess = async (tag: string, targetPublicKey: Uint8Array) => {
		// pass in someone's pubkey to see if they've got access to this tag data
		return await joseCryptor.checkAccess(tag, targetPublicKey);
	};

	decryptFromTagNode = async (tagNode) => {
		return await joseCryptor.decryptFromTagNode(tagNode);
	};

	getTagNodes = async () => {
		if (!ipfsNode || !rootCID) return;

		const root = await ipfsNode.dag.get(rootCID);
		const promises = Object.entries(root.value).map(async ([key, val]) => {
			if (key === 'prev' || !val) return null;
			let fields = await ipfsNode.dag.get(val);
			return fields.value; // https://github.com/ipfs/js-ipfs/blob/master/docs/core-api/DAG.md#ipfsdaggetcid-options
		});

		const result = await Promise.all(promises);
		return result.filter((r) => r); // filter out null values
	};

	async function getTagNode(tag, root = rootCID) {
		if (!root || !ipfsNode || !tag) return;

		try {
			const cid = (await ipfsNode.dag.get(root, { path: `/${tag}`, localResolve: true })).value;
			let tagNode = (await ipfsNode.dag.get(cid, { localResolve: true })).value;
			return tagNode;
		} catch (error) {
			// tag may not exist yet, or maybe the user is typing
			console.warn(`${tag} no DAG data`);
		}
	}
</script>

<svelte:head>
	<script>
		global = globalThis; // for solana web3 repo
	</script>
</svelte:head>

<div class="main">
	{#if proxcryptor && loaded}
		<div class="">
			<slot
				{handleSubmit}
				{decrypt}
				{getTagNodes}
				{getTagNode}
				{checkAccess}
				{setAccess}
				{decryptFromTagNode}
			/>
		</div>
	{:else}
		Connect with the Wallet to save encrypted messages.
	{/if}
</div>

<style>
	.main {
		width: 100%;
		/* max-width: var(--column-width); */
		margin-top: var(--column-margin-top);
		padding: var(--column-margin-top);
		line-height: 1;
		background-color: #e0ede0;
	}
</style>
