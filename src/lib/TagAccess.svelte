<script>
	import { onMount } from 'svelte';

	export let tag;
	export let pubKey;
	export let checkAccess;

	let accessCode;
	let checked;

	$: if (!!tag && !!pubKey) doCheck();

	async function doCheck() {
		console.log(`Checking access to ${tag} for `, { pubKey });
		accessCode = await checkAccess(tag, pubKey);
		checked = true;
	}

	onMount(async () => {});
</script>

<div>
	{#if checked && accessCode}
		✔️ You have has access to their {tag}
	{:else}
		✖️ You have no access to {tag}
	{/if}
</div>
