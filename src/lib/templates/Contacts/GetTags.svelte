<script>
	export let rootCID;
	export let getTagNodes;

	let tagNodes;

	$: rootCID && processRootCID();

	async function processRootCID() {
		tagNodes = await getTagNodes(rootCID);
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
