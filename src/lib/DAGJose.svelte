<script lang="ts">
	/*
	All this component does is connect IPLD + proxcryptor + Saving Component Template so they can work together
	*/
	import { onMount, setContext } from 'svelte';
	import Basic from './templates/Basic/Basic.svelte';
	import Contacts from './templates/Contacts/Contacts.svelte';

	import ShowRoot from './components/ShowRoot.svelte';
	import { setAccess } from './stores';

	export let rootCID;
	export let proxcryptor; // pass in a proxy re-encryptor prop
	export let ipfsNode; // pass in an instance of ipfs
	export let CID; // pass in https://github.com/multiformats/js-multiformats#interfaces

	const ROOT_CID = '__ROOT_CID__'; // Database key

	let loaded = false;

	// functions
	let handleRootCIDUpdate;
	let loadRootCID;

	let joseCryptor;
	let setJoseCryptor;

	//  onSubmitted gets bound to, and overwritten by active component
	let onSubmitted = () => {}; // optional callback by child component to run after tx submitted

	// set the cryptor once the proxcryptor is connected and available
	$: if (proxcryptor && setJoseCryptor) setJoseCryptor();

	onMount(async () => {
		const { ImmortalDB } = await import('immortal-db');

		const { DagJoseCryptor } = await import('./dagjosecryptor');

		// parse and use cached root CIDs, if saved
		loadRootCID = async () => {
			await ipfsNode;
			if (rootCID) return true;
			let res = await ImmortalDB.get(ROOT_CID);

			if (!res) {
				rootCID = false;
				return true;
			}

			rootCID = CID.asCID(res) || CID.parse(res);
			return true;
		};

		loaded = await loadRootCID();

		// use the portal proxcryptor to encrypt the DAG JOSEs
		setJoseCryptor = async () => {
			await ipfsNode;
			joseCryptor = new DagJoseCryptor(ipfsNode, proxcryptor, rootCID); //refesh when updated
		};

		handleRootCIDUpdate = async () => {
			rootCID = joseCryptor.rootCID;
			// console.log('Updating rootCID', { rootCID: rootCID.toString() });
			ImmortalDB.set(ROOT_CID, rootCID.toString());
		};
	});

	$: if (joseCryptor && joseCryptor.rootCID && handleRootCIDUpdate) handleRootCIDUpdate();

	let decrypt = async (data) => await joseCryptor.selfDecrypt(data);

	const handleSubmit = async function (event) {
		let tag = event.detail.tag || null;
		let schema = event.detail.data.schema || '';
		let value = event.detail.data.value || null;

		if (!tag || !value) return; // TODO: Handle missing vals better

		// console.log('Put: ', { tag, value });

		await joseCryptor.put(value, tag, schema);
		joseCryptor = joseCryptor; // refresh UI?

		onSubmitted(); // update selected component
	};

	// save access function to a svelte store so it can be used by any component, any time
	// allows access to tag by someone's PublicKey
	$setAccess = async (tag: string, targetPublicKey: Uint8Array) => {
		// allow access to this tag by this public key
		await joseCryptor.setTagReKeys(tag, targetPublicKey);
		joseCryptor = joseCryptor; // triggers this.rootCID to fire
	};

	async function getTagNode(tag) {
		if (!rootCID || !ipfsNode || !tag) return;

		try {
			const cid = (await ipfsNode.dag.get(rootCID, { path: `/${tag}`, localResolve: true })).value;
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
			<ShowRoot {rootCID} />

			<!-- <Basic on:handleSubmit={handleSubmit} {getTagNode} {decrypt} /> -->
			<Contacts on:handleSubmit={handleSubmit} {getTagNode} {decrypt} {rootCID} bind:onSubmitted />
		</div>

		<!-- TODO: slots -->
		<slot />
	{:else}
		Connect with the Wallet to save encrypted messages.
	{/if}
</div>

<style>
	.main {
		width: 80%;
		max-width: var(--column-width);
		margin: var(--column-margin-top);
		padding: var(--column-margin-top);
		line-height: 1;
		background-color: #e0ede0;
	}
</style>
