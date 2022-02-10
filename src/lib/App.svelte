<script lang="ts">
	import { onMount, setContext } from 'svelte';

	import DagJose from './DAGJose.svelte';
	import HypnsManager from './HypnsManager.svelte';

	import { Components } from '$lib/components/index';

	export let wallet = null;
	export let rootCID = null;

	let active = Components['Contacts']; // needs to open on contacts so that they are loaded into the svelte store $contacts

	let inputUrl = 'https://peerpiper.github.io/iframe-wallet-engine/'; // = 'https://wallet.peerpiper.io/'; // can be changed by any user

	let ipfsNode, CID;
	let nodeId;

	let hypnsNode;

	let Web3WalletMenu;

	let start = Date.now();

	let onSubmitted; // only here to pass from svelte:component to DAGJose component

	onMount(async () => {
		// load asyncs in parallel
		if (!wallet) loadWallet();
		if (!ipfsNode) loadIPFS();

		async function loadWallet() {
			// @ts-ignore
			({ Web3WalletMenu } = await import('@peerpiper/svelte-web3-wallet-connector'));
		}

		async function loadIPFS() {
			// setup IPFS
			const IPFSmodule = await import('../modules/ipfs-core-0.14.0/ipfs-core.js');
			const IPFS = IPFSmodule.default;

			CID = IPFS.CID;

			ipfsNode = await IPFS.create({
				// repo: 'dag-jose-proxcryptor'
			});

			console.log(`Loaded in ${(Date.now() - start) / 1000}s`, { ipfsNode });

			const identity = await ipfsNode.id();
			nodeId = identity.id;
			console.info('NodeId', nodeId);
		}

		return () => ipfsNode.stop();
	});
</script>

<div class="">
	<!-- First, you need a wallet -->
	{#if Web3WalletMenu}
		<svelte:component this={Web3WalletMenu} bind:wallet {inputUrl} />
	{:else}
		Loading Web3 Wallet...<br />
	{/if}

	<div>
		<select bind:value={active} class="form-control">
			{#each Object.entries(Components) as [key, value]}
				<option {value}>{key}</option>
			{/each}
		</select>
	</div>

	<!-- Then you need a way to encrypt/decrypt the data to IPLD  -->
	{#if wallet && wallet.proxcryptor && ipfsNode && CID}
		<DagJose
			proxcryptor={wallet.proxcryptor}
			{ipfsNode}
			{CID}
			bind:rootCID
			tag={active.tag}
			{onSubmitted}
			let:decryptedData
			let:getTagNodes
			let:checkAccess
			let:setAccess
			let:handleSubmit
			let:decryptFromTagNode
		>
			<svelte:component
				this={active.component}
				on:handleSubmit={handleSubmit}
				bind:onSubmitted
				{decryptedData}
				{getTagNodes}
				{checkAccess}
				{setAccess}
				{hypnsNode}
				{decryptFromTagNode}
			/>
		</DagJose>
	{:else}
		Loading IPFS...<br />
	{/if}

	<!-- When there is data saved to ILPD, why not save it to PipeNet?  -->
	{#if rootCID}
		<HypnsManager {wallet} {rootCID} bind:hypnsNode />
	{:else}
		<!-- No Data saved yet. -->
	{/if}
</div>

<style>
	.main {
		width: 80%;
		max-width: var(--column-width);
		margin: var(--column-margin-top);
		line-height: 1;
	}
</style>
