<script>
	import { onMount } from 'svelte';

	export let decryptFromTagNode;
	export let tagNode;

	let data;
	let checked;

	$: if (tagNode) getData();

	async function getData() {
		console.log(`Decrypting data on ${tagNode.tag} `);
		data = await decryptFromTagNode(tagNode);
		checked = true;
	}

	onMount(async () => {});
</script>

<div>
	{#if data}
		{#await data}
			accessing tagNode...
		{:then data}
			{data}
		{/await}
	{:else}
		✖️ You have no access to {tagNode.tag}
	{/if}
</div>
