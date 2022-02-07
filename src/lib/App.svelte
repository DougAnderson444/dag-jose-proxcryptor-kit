<script lang="ts">
	import { onMount, setContext } from 'svelte';

	import DagJose from './DAGJose.svelte';
	import HypnsManager from './HypnsManager.svelte';

	export let wallet;
	export let rootCID;

	let inputUrl = 'https://peerpiper.github.io/iframe-wallet-engine/'; // = 'https://wallet.peerpiper.io/'; // can be changed by any user

	let ipfsNode, CID;
	let nodeId;

	let Web3WalletMenu;

	let start = Date.now();

	onMount(async () => {
		// load asyncs in parallel
		if (!wallet) loadWallet();
		if (!ipfsNode) loadIPFS();

		async function loadWallet() {
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

	<!-- Then you need a way to encrypt/decrypt the data to IPLD  -->
	{#if wallet && ipfsNode && CID}
		<DagJose proxcryptor={wallet.proxcryptor} {ipfsNode} {CID} bind:rootCID>
			<!-- TODO: slots -->
			<slot />
		</DagJose>
	{:else}
		Loading IPFS...<br />
	{/if}

	<!-- When there is data saved to ILPD, why not save it to PipeNet?  -->
	{#if rootCID}
		<HypnsManager {wallet} {rootCID} />
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
