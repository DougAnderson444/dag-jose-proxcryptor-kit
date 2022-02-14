<script>
	// open a Hypns instance for this public key and show the latest

	import { bufftoHex } from '../../utils/index';

	export let pubKey;
	export let openHypns;

	let latestHypns;

	let hypnsInstance;
	let instanceReady;

	$: if (!!pubKey && openHypns) handleOpen(pubKey);

	async function handleOpen(pubKey) {
		console.log('Opening ', pubKey);
		let publicKeyHex = bufftoHex(pubKey);

		// should update you whenever the other guy publishes an updated value
		const onUpdate = (val) => {
			console.log('Update from ', { hypnsInstance });
			latestHypns = val.ipld;
		};

		hypnsInstance = await openHypns({ publicKeyHex, onUpdate });
		console.log('Opened ', hypnsInstance);

		latestHypns = hypnsInstance.latest; // intialize
	}
</script>

{#if !hypnsInstance}
	Loading hypnsInstance...
{:else}
	{#await hypnsInstance}
		Getting instance ready...
	{:then}
		<h3>✔️ Connected to PiperNet</h3>
		{#if latestHypns}
			✔️ Lastest Saved Root: {latestHypns}
			<slot {latestHypns} />
		{:else}
			⚠️ No latest value available.
		{/if}
	{:catch error}
		Problem connecting to Pipernet
	{/await}
{/if}
