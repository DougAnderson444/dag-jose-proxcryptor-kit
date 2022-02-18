<script>
	import { onMount } from 'svelte';
	import '$lib/search.css';
	import ShareIcon from '$lib/graphics/ShareIcon.svelte';

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
	<div class="share">
		<div class="share-item">
			<ShareIcon />
		</div>

		<input class="share-item" bind:value placeholder="Share {tag} with:" />
	</div>
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
	.share {
		padding: 1em 0;
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.share-item {
		margin: 0.5em;
	}
	input {
		width: 100%;
	}
</style>
