<script>
	import { onMount } from 'svelte';

	//pass in props about what is being shared
	export let tag;
	export let setAccess;
	export let contacts;

	// export let contacts = []; // a @handle: pubkey mapping

	let target;
	let value;
	let promiseToAllow;
	let shared;

	$: if (value && contacts && contacts.length) {
		console.log({ contacts });
		let match = contacts?.find((contact) => contact.handle === value);
		target = match || null;
	}
	function handleGrantAccess(_event) {
		// take value and add to this tag's reKey list
		promiseToAllow = setAccess(tag, target.pubKey);
	}
</script>

<div>
	Share {tag} With: <input bind:value placeholder="Enter Handle or Public Key" />
	<div>
		{#if target}
			✔️ Matched {target.handle} <button on:click={handleGrantAccess}>Grant Access</button>
		{:else if value}
			✖️ No matches for {value}
		{/if}
	</div>

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
