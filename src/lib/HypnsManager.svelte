<script lang="ts">
	import { onMount } from 'svelte';

	import QRCode from '../lib/QRCode.svelte';

	import { bufftoHex } from './utils/index';

	export let rootCID;
	export let wallet; // use the same wallet object that the proxcryptor is using, for convenience
	export let hypnsNode;

	let HyPNSComponent, latestHypns;
	let hypnsInstance, instanceReady, publish;

	let publicKeyHex;

	let opts = {
		persist: true,
		swarmOpts: {
			announceLocalAddress: true,
			wsProxy: [
				// 'ws:localhost:3001/proxy', // try localhost first, checking for local hypns-super-peer
				// 'wss://hypns-super-peer.douganderson444.repl.co/proxy',
				// "wss://super.peerpiper.io:49777",
				'wss://hyperswarm.mauve.moe',
				'wss://geut-webrtc-signal-v3.glitch.me',
				'wss://geut-webrtc-signal-v3.herokuapp.com'
			]
		}
	};

	onMount(async () => {
		// wake up REPL
		// try {
		// 	fetch('https://hypns-super-peer.douganderson444.repl.co', {
		// 		method: 'POST'
		// 	}).then((response) => console.log('2 ', response));
		// } catch (error) {}

		import('hypns-svelte-component').then((module) => {
			HyPNSComponent = module.default;
		});
	});

	$: wallet && hypnsNode && initHypns();

	async function initHypns() {
		// open a HyPNS feed using the hex encoding of this users Ed25519 key
		const pk: Uint8Array = await wallet.proxcryptor.getPublicKey();
		// convert to hex for hypercore-protocol
		publicKeyHex = bufftoHex(pk);
	}

	async function handleOpen() {
		// take the wallet and pass it into hypns
		console.log('Opening ', { publicKeyHex });
		hypnsInstance = await hypnsNode.open({ keypair: { publicKey: publicKeyHex }, wallet });
		instanceReady = await hypnsInstance.ready();

		console.log({ instanceReady });

		publish = () => {
			hypnsInstance.publish({ ipld: rootCID.toV1().toString() });
		};

		// should update you whenever the other guy publishes an updated value
		hypnsInstance.on('update', (val) => {
			latestHypns = val.ipld;
		});
	}

	async function handlePublish() {
		publish();
	}
</script>

{#if HyPNSComponent}
	<svelte:component this={HyPNSComponent} bind:hypnsNode {opts} />
	<div class="main">
		{#if !hypnsNode}
			Loading Hypns...
		{:else}
			{latestHypns ? 'Last Saved Root: ' + latestHypns : 'Connect to Pin to PiperNet'}
			{#if !hypnsInstance}
				<button on:click={handleOpen}>Pin to PiperNet</button>
			{:else if instanceReady}
				{#await instanceReady}
					Loading instance...
				{:then}
					<h3>✔️ Connected to PiperNet</h3>
					{#if latestHypns === rootCID.toV1().toString()}
						<h3>✔️ PiperNet up to date</h3>
					{:else}
						<h3>⚠️ PiperNet needs updating</h3>
						<button on:click={handlePublish} disabled={!rootCID || !publish}>Publish Latest</button>
					{/if}

					<!-- <smaller>hypns://{publicKeyHex?.toUpperCase()}</smaller><br /> -->
					Connect with others: [<a href="{location.origin + location.pathname}?add={publicKeyHex}"
						>Link</a
					>] <QRCode value={`${location.origin + location.pathname}?add=${publicKeyHex}`} />
				{/await}
			{:else}
				Sign message to write to PiperNet...
			{/if}
		{/if}
	</div>
{/if}

<style>
	.main {
		width: 80%;
		max-width: var(--column-width);
		margin: var(--column-margin-top);
		line-height: 1;
	}

	div.main {
		border: 1px solid rgb(196, 196, 196);
		border-radius: 4px;
		background-color: lightgreen;
		padding: 1.62em;
		overflow-wrap: break-word;
		word-break: break-word;
	}

	button {
		margin: 1.62em;
		padding: 1.62em;
		background-color: green;
	}
</style>
