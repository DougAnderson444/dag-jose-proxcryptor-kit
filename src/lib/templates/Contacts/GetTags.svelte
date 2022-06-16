<script>
	import { getTagNodes } from '$lib/utils';

	export let rootCID;

	let tagNodes;

	$: if (rootCID) processRootCID();

	async function processRootCID() {
		tagNodes = await getTagNodes({ rootCID, ipfsNode: globalThis.ipfsNode });
	}
</script>

{#if tagNodes}
	{#await tagNodes}
		Loading tags
	{:then tagNodes}
		{#each tagNodes as tagNode}
			<slot {tagNode} />
		{/each}
	{/await}
{/if}
