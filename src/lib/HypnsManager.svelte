<script lang="ts">
	import { onMount } from 'svelte';

	import QRCode from '../lib/QRCode.svelte';

	import { bufftoHex } from './utils/index';

	export let rootCID;
	export let wallet; // use the same wallet object that the proxcryptor is using, for convenience

	let HyPNSComponent, hypnsNode, latestHypns;
	let hypnsInstance, publish;

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
		handleOpen();
	}

	async function handleOpen() {
		// take the wallet and pass it into hypns
		hypnsInstance = await hypnsNode.open({ keypair: { publicKey: publicKeyHex }, wallet });

		await hypnsInstance.ready();

		publish = () => {
			hypnsInstance.publish({ ipld: rootCID.toV1().toString() });
		};

		// should update you whenever the other guy publishes an updated value
		hypnsInstance.on('update', (val) => {
			latestHypns = val.ipld;
		});
	}

	$: if (rootCID && publish) publish();
</script>

{#if HyPNSComponent}
	<svelte:component this={HyPNSComponent} bind:hypnsNode {opts} />
	<div class="enclosure">
		{#if !hypnsNode}
			Loading Hypns...
		{:else}
			<p>{latestHypns && 'Last Saved Root: ' + latestHypns}</p>
			{#if publicKeyHex}
				<h3>✔️ Connected to PiperNet @</h3>
				<!-- <smaller>hypns://{publicKeyHex?.toUpperCase()}</smaller><br /> -->
				QR Code to
				<a href="{location.host}/?contactid={publicKeyHex}"
					>{location.host}/?contactid={publicKeyHex}</a
				>
				<QRCode value={`${location.host}/?contactid=${publicKeyHex}`} />
			{/if}
		{/if}
	</div>
{/if}

<style>
	.enclosure {
		border: 1px solid grey;
		border-radius: 4px;
		background-color: lightgreen;
		margin: 1.62em;
		padding: 1.62em;
		width: 80vw;
		overflow-wrap: break-word;
		word-break: break-word;
	}
</style>
