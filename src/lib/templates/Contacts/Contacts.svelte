<script>
	// Basic template to show how to add Contact with the proxcryptor Parent component
	import { page } from '$app/stores';

	import { onMount, tick, createEventDispatcher } from 'svelte';

	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	import { validatePubKey } from '$lib/utils/index';

	import ContactCard from './ContactCard.svelte';
	import PiperNet from '../Hypns/PiperNet.svelte';
	import GetTags from './GetTags.svelte';
	import TagAccess from '$lib/TagAccess.svelte';

	import { contacts } from '$lib/stores';
	import TagValue from '$lib/TagValue.svelte';

	import { Scanner } from 'qrcode-scanner-svelte';
	import ScanIcon from '$lib/graphics/scanIcon.svelte';
	import Modal from '$lib/graphics/Modal.svelte';
	import Search from '$lib/components/nav/Search.svelte';
	import ShowContacts from './ShowContacts.svelte';

	// Component props passed in from Parent Component
	// will also reactively update if updated in parent
	export let getTagNodes;
	export let openHypns;
	export let checkAccess;
	export let decryptedData;
	export let decryptFromTagNode;

	$: if (decryptedData) $contacts = decryptedData;
	$: $contacts && console.log($contacts);

	const dispatch = createEventDispatcher();

	const tag = 'Contacts';

	let schema;
	let handle, pubKey, pubKeyInput;
	let tagNode;
	let submitting;
	let mounted;
	let scan;
	let stopMediaStream;
	$: selected = scan ? Scanner : null;
	$: selected && console.log({ selected });
	$: scan && console.log({ scan });

	onMount(async () => {
		// check if this is a search params loaded page
		let params = new URLSearchParams(location.search);
		if ($page.url.searchParams.has('add')) {
			pubKey = $page.url.searchParams.get('add');
			await tick();
			pubKeyInput.focus();
		} else if (params.has('add')) {
			pubKey = params.get('add');
			await tick();
			pubKeyInput.focus();
		}

		mounted = true;
	});

	export function onSubmitted() {
		submitting = false;
		handle = '';
		pubKey = '';
	}

	async function handleAddContact(pK = pubKey, name = handle) {
		console.log('Adding ', { name }, { pK });
		if (!name || !pK) return; // TODO: Handle better
		// <!-- defined by schema -->
		const bytes = validatePubKey(pK);
		console.log('Adding bytes', { bytes });

		let value;

		if (decryptedData && decryptedData.length)
			value = [...decryptedData, { handle: name, pubKey: new Uint8Array(bytes) }];
		else value = [{ handle: name, pubKey: new Uint8Array(bytes) }];

		console.log('Adding value', { value });
		submitting = true;
		dispatch('handleSubmit', { tag, data: { value, schema } });
	}

	function handleConnect(key) {
		pubKey = key;
	}
	function handleMessenger(event) {
		console.log("Setting pubKey to rx'd msg value", { event });
		pubKey = event.detail.pubKeyHex;
	}
	function handleModalClose() {
		console.log('Got close modal');
		scan = false;
		// selected?.stopMediaStream();
		// selected = null;
		console.log({ scan }, { selected });
	}
</script>

{#if decryptedData}
	<ShowContacts
		{decryptedData}
		{getTagNodes}
		{openHypns}
		{checkAccess}
		{decryptFromTagNode}
		on:incomingPubKey={handleMessenger}
	/>
{/if}
<div class="searchBar">
	<div class="scan-icon" style="width: 100%">
		<Search bind:handle bind:pubKey {handleAddContact} />
	</div>
	<div class="scan-icon">
		<ScanIcon
			{scan}
			on:click={() => {
				console.log('scan clicked');
				scan = true;
			}}
		>
			<Modal modal={scan} on:closeModal={handleModalClose}>
				<svelte:component
					this={selected}
					bind:result={pubKey}
					on:successfulScan={(data) => {
						const parsed = JSON.parse(data.detail);
						console.log(`Scanned `, { parsed });
						handleConnect(parsed.pubKeyHex);
						scan = false;
					}}
				/>
			</Modal>
		</ScanIcon>
	</div>
</div>

<style>
	.searchBar {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		flex-wrap: nowrap;
	}
	.card-container {
		margin: 1em 0;
	}
	.data-entry {
		display: flex;
		padding: 0.5em;
		flex-direction: column;
		margin: 1.62em;
	}
	.item {
		flex: 1;
		margin: 0.5em 0;
		padding: 0.5em 0;
	}
	input {
		padding: 1.62em;
		margin: 1.62em 0;
		width: 100%;
	}
	.entry-item {
		display: inline-flex;
		flex-wrap: nowrap;
		align-items: center;
		flex-direction: row;
		width: 100%;
		justify-content: space-between;
	}
	.scan-icon {
		margin: 1em 0 1em 1em;
	}
</style>
