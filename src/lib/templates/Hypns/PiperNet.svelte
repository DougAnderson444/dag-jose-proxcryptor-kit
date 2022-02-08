<script>
	// open a Hypns instance for this public key and show the latest

	import { bufftoHex } from '../../utils/index';

	export let pubKey;
	export let hypnsNode;

	let hypnsInstance;
	let instanceReady;
	let latestHypns;

	$: if (!!pubKey && hypnsNode) handleOpen(pubKey);

	async function handleOpen(pubKey) {
		let publicKeyHex = bufftoHex(pubKey);
		// take the wallet and pass it into hypns
		hypnsInstance = await hypnsNode.open({ keypair: { publicKey: publicKeyHex } });

		// should update you whenever the other guy publishes an updated value
		hypnsInstance.on('update', (val) => {
			latestHypns = val.ipld;
		});

		instanceReady = await hypnsInstance.ready();
	}
</script>

{#if !hypnsInstance}
	Loading hypnsInstance...
{:else if instanceReady}
	{#await instanceReady}
		Getting instance ready...
	{:then}
		<h3>✔️ Connected to PiperNet</h3>
		{#if latestHypns}
			✔️ Lastest Saved Root: {latestHypns}
		{:else}
			⚠️ No latest value available.
		{/if}
	{/await}
{:else}
	Sign message to write to PiperNet...
{/if}
