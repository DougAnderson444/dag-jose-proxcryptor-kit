<script lang="ts">
	import { onMount } from 'svelte';

	import QRCode from './QRCode.svelte';

	import { bufftoHex } from './utils/index';
	import { goto } from '$app/navigation';

	import Modal from '$lib/graphics/Modal.svelte';
	import QrCodeIcon from '$lib/graphics/QRCodeIcon.svelte';

	export let rootCID;
	export let wallet; // use the same wallet object that the proxcryptor is using, for convenience

	let hypnsNode;
	let HyPNSComponent, latestHypns;
	let hypnsInstance, publish;

	let myPublicKeyHex;
	let connectKeyPhrase = 'letsConnect';
	let showQR;

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
		myPublicKeyHex = bufftoHex(pk);

		// take the wallet and pass it into hypns
		console.log('Opening ', { myPublicKeyHex });

		const onUpdate = (val) => {
			console.log('Update from ', { hypnsInstance });
			latestHypns = val.ipld;
		};

		// handle message on my channel from others who have added me
		const onMessage = async (msg) => {
			// offer to add as contact
			// contacts.pubKey = msg.pubkeyHex
			console.log(`redirect to ${location.origin + location.pathname}?add=${msg.pubKeyHex}`);
			await goto(`${location.origin + location.pathname}?add=${msg.pubKeyHex}`);
		};

		hypnsInstance = await openHypns({ pubKeyHex: myPublicKeyHex, wallet, onUpdate, onMessage });
		latestHypns = hypnsInstance.latest;

		// since we passed in a wallet, we can write
		publish = () => {
			hypnsInstance.publish({ ipld: rootCID.toV1().toString() });
		};
		console.log('Opened ', { hypnsInstance });
	}

	// an open fn we can use everywhere
	export const openHypns = async function ({
		pubKeyHex,
		wallet = null,
		onUpdate = (val) => {},
		onMessage = (val) => {
			console.log('Default onMessage');
		}
	}) {
		console.log('open Hypns', pubKeyHex);
		const hypnsInstance = await hypnsNode.open({ keypair: { publicKey: pubKeyHex }, wallet });
		hypnsInstance.on('update', onUpdate);

		await hypnsInstance.ready();

		// use p2p extensions
		// https://github.com/hypercore-protocol/hypercore#ext--feedregisterextensionname-handlers
		const extension = hypnsInstance.network.networker.registerExtension(connectKeyPhrase, {
			// Set the encoding type for messages
			encoding: 'json',
			onmessage: (message, peer) => {
				// Recieved messages will be automatically decoded
				console.log('Got msg from peer!', { message }, { peer });
				console.log({ onMessage });
				// join their swarm
				// add to contacts
				// replicate core
				onMessage(message);
				if (message.pubKeyHex && !hypnsNode.instances.has(message.pubKeyHex)) {
					openHypns({ pubKeyHex: message.pubKeyHex, onUpdate });
				} else {
					console.log('Already connected to ', message.pubKeyHex);
				}
			}
		});

		hypnsInstance.network.networker.once('peer-add', (peer) => {
			console.log('Added a peer! Sending', myPublicKeyHex, { peer });
			extension.send({ pubKeyHex: myPublicKeyHex }, peer);
		});

		return hypnsInstance;
	};

	async function handlePublish() {
		publish();
	}
</script>

{#if HyPNSComponent}
	<svelte:component this={HyPNSComponent} bind:hypnsNode {opts} />
	<div class="main">
		{#if !hypnsNode}
			Loading Hypns...
		{:else if hypnsInstance}
			{#await hypnsInstance}
				Loading instance...
			{:then hypnsInstance}
				<div style="display:flex; flex-direction:row; align-items: center;">
					<h3>✔️ Connected to PiperNet</h3>
					<div class="scan-icon">
						<QrCodeIcon bind:showQR>
							<Modal bind:modal={showQR}>
								<QRCode value={JSON.stringify({ pubKeyHex: myPublicKeyHex })}
									>Others Scan this from their PeerPiper to Connect to You</QRCode
								>
							</Modal>
						</QrCodeIcon>
					</div>
				</div>
				<div>
					{latestHypns ? 'Last Pinned: ' + latestHypns : ''}
				</div>
				{#if rootCID && rootCID?.toV1().toString() === latestHypns}
					<h3>✔️ PiperNet up to date</h3>
				{:else if rootCID}
					<h3>
						⚠️ PiperNet needs updating <button
							on:click={handlePublish}
							disabled={!rootCID || !publish}>Update</button
						>
					</h3>
				{/if}

				<!-- <smaller>hypns://{publicKeyHex?.toUpperCase()}</smaller><br /> 
					Connect with others: [<a href="{location.origin + location.pathname}?add={myPublicKeyHex}"
						>Link</a
					>] <QRCode value={`${location.origin + location.pathname}?add=${myPublicKeyHex}`}>
						[ Add to Contacts]
					</QRCode>-->
			{/await}
		{/if}
	</div>
{/if}

<slot />

<style>
	div.main {
		display: block;
		border: 1px solid rgb(196, 196, 196);
		background-color: rgb(15, 15, 15);
		overflow-wrap: break-word;
		word-break: break-word;
		width: 100%;
		padding: var(--column-margin-top);
		color: aliceblue;
	}

	button {
		margin: 1.62em;
		padding: 1.62em;
		background-color: green;
	}
	.scan-icon {
		margin: 0.1em 0.5em;
	}
</style>
