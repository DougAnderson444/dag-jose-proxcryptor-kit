<script>
	import ShareTagWith from '$lib/templates/ShareTagWith.svelte';
	import { contacts } from '$lib/stores';

	export let getTagNode;
	export let decrypt;
	export let tag;
	export let rootCID;
	export let setAccess;

	let tagNode;
	let decryptedData = [];
	let currentRoodCID;
	let ready;

	// refresh on changes in tag or rootCID
	$: if (tag || (rootCID && currentRoodCID !== rootCID)) refreshedRootCID(); // trigger refresh whenever rootCID changes

	export async function refreshedRootCID() {
		ready = false;
		console.log('Common refreshedRootCID for ', tag);
		currentRoodCID = rootCID;
		tagNode = await getTagNode(tag);
		console.log({ tagNode });
		if (tagNode && tagNode.hasOwnProperty('encryptedData')) decryptedData = await decrypt(tagNode);
		console.log({ decryptedData });
		ready = true;
	}
</script>

{#if ready && tagNode && decryptedData}
	{#await decryptedData}
		Decrypting...
	{:then decryptedData}
		<!-- TODO: if no contacts, redirect to Contacts component so they can be decrypted  -->
		<ShareTagWith {tag} {setAccess} contacts={$contacts} />

		<slot {decryptedData} />
	{/await}
{:else}
	<!-- No existing {tag} data yet: just show data entry portion, no data display (there's nothing to display yet) -->
	<slot decryptedData={null} />
{/if}
