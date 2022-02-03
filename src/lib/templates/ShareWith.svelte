<script>
	import { onMount } from 'svelte';
	import { setAccess } from '../stores';

	//pass in props about what is being shared
	export let tag;
	// export let contacts = []; // a @handle: pubkey mapping

	let targetPublicKey;
	let value;
	let promiseToAllow;
	let shared;

	function handleGrantAccess(_event) {
		// take value and add to this tag's reKey list
		promiseToAllow = $setAccess(tag, targetPublicKey);
	}
</script>

<div>
	Share {tag} With: <input bind:value placeholder="Public Key" />
	{#if promiseToAllow}
		{#await promiseToAllow}
			Granting access...
		{:then _}
			Access Granted to {value}
		{/await}
	{/if}
</div>

<style>
</style>
