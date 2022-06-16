<script>
	// Proxcryptor.svelte
	import { onMount, createEventDispatcher } from 'svelte';
	import { getTagNode } from '$lib/utils';

	export let rootCID = null;
	export let tag;
	export let proxcryptor;
	export let ipfsNode; // pass in an instance of ipfs

	//  onSubmitted gets bound to, and overwritten by active component
	export let onSubmitted = () => {}; // optional callback by child component to run after tx submitted

	const dispatch = createEventDispatcher();

	let joseCryptor;
	let setJoseCryptor;
	let timeoutID = null;
	let loaded;
	let decryptedData = {};

	onMount(async () => {
		const { DagJoseCryptor } = await import('./dagjosecryptor');

		setJoseCryptor = async () => {
			joseCryptor = new DagJoseCryptor(ipfsNode, proxcryptor, rootCID); //refesh when updated
			console.log({ rootCID });

			if (!rootCID) {
				loaded = true;
				return;
			}

			// check this ipfsNode for this tag, see if there are any existing values for props
			let tagNode = await getTagNode({ tag, rootCID, ipfsNode });
			console.log({ tagNode });

			if (tagNode && tagNode.hasOwnProperty('encryptedData')) {
				decryptedData = await decrypt(tagNode);
				console.log({ decryptedData });
			}
			loaded = true;
		};
	});

	let decrypt = async (data) => await joseCryptor.selfDecrypt(data);

	// TODO: Save spinner
	const handleSubmit = async function (event) {
		if (!tag || !event.detail) return; // TODO: Handle missing vals better
		if (
			JSON.stringify(Object.values(event.detail)[0]) ==
			JSON.stringify(Object.values(decryptedData)[0])
		)
			return; // skip if props are unchanged

		if (timeoutID) clearTimeout(timeoutID); // cancel any exisitng waiting

		timeoutID = setTimeout(async () => {
			timeoutID = false;

			let schema = '';
			console.log('Put: ', { tag, value: event.detail });

			await joseCryptor.put(event.detail, tag, schema);
			joseCryptor = joseCryptor; // refresh UI?

			onSubmitted(); // update selected component
		}, 5000);
	};

	$: if (proxcryptor && setJoseCryptor) setJoseCryptor();

	// update the rootCID as req'd
	$: if (joseCryptor && joseCryptor.rootCID && handleRootCIDUpdate) handleRootCIDUpdate();

	function handleRootCIDUpdate() {
		console.log('Updating rootCID', { rootCID: joseCryptor.rootCID.toString() });
		dispatch('rootCID', joseCryptor.rootCID);
	}
</script>

{#if joseCryptor}
	<div class="">
		Tag: {tag}
		Encrypted Data:
		<!-- {JSON.stringify(props)} -->
	</div>
	{#if loaded}
		<slot {handleSubmit} props={decryptedData} />
	{/if}
{:else}
	Log into a wallet to encrypt your data/.
{/if}
