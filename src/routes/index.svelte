<script lang="ts">
	import { onMount } from 'svelte';

	import App from '$lib/App.svelte';

	onMount(async () => {});
</script>

<svelte:head>
	<script>
		global = globalThis; // for solana web3 repo
	</script>
</svelte:head>

<App />

<style>
</style>
