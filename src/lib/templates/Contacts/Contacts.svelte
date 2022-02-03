<script>
	// Basic template to show how to add Contact with the proxcryptor Parent component
	import { createEventDispatcher } from 'svelte';

	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	import Search from './Search.svelte';

	import b64 from 'base64-js';
	import bs58 from 'bs58';

	// Component props passed in from Parent Component
	// will also reactively update if updated in parent
	export let getTagNode;
	export let decrypt;
	export let rootCID;

	const PUBLIC_KEY_BYTES = 32;

	const dispatch = createEventDispatcher();

	const tag = 'Contacts';

	let schema;
	let handle, pubKey;
	let tagNode;
	let valid;
	let decryptedData = [];
	let submitting;

	$: if (rootCID) onSubmitted(); // trigger refresh whenever rootCID changes

	export async function onSubmitted() {
		tagNode = await getTagNode(tag);
		decryptedData = await decrypt(tagNode);
		submitting = false;
		handle = '';
		pubKey = '';
	}

	async function handleAddContact() {
		if (!handle || !pubKey) return; // TODO: Handle better
		// <!-- defined by schema -->
		const value = [...decryptedData, { handle, pubKey }];
		submitting = true;
		dispatch('handleSubmit', { tag, data: { value, schema } });
	}

	function validatePubKey() {
		if (!pubKey) return;

		// base64 / base64URL
		let pubKeyBytes = b64.toByteArray(pubKey);

		if (pubKeyBytes.length === PUBLIC_KEY_BYTES) {
			valid = true;
			return;
		}

		// base58 / base58BTC
		try {
			let b58 = bs58.decode(pubKey);
			if (b58.length === PUBLIC_KEY_BYTES) {
				valid = true;
				return;
			}
		} catch (error) {
			console.log('not base58');
		}

		// hex
		const fromHexString = (hexString) =>
			new Uint8Array(hexString.match(/.{1,2}/g).map((byte) => parseInt(byte, 16)));
		let hex = fromHexString(pubKey);

		if (hex.length === PUBLIC_KEY_BYTES) {
			valid = true;
			return;
		}
	}
</script>

<div transition:slide={{ delay: 100, duration: 400, easing: quintOut }}>
	<div class="data-entry">
		<h1 class="tag">{tag}</h1>
		<div class="tag keywords">
			<input bind:value={schema} placeholder="publicKey friends contacts" disabled />
		</div>

		<div class="item">
			<input
				bind:value={pubKey}
				placeholder="Paste their Public Key"
				on:input={validatePubKey}
				on:focus={validatePubKey}
			/>
			<!-- <Search bind:handle bind:pubKey /> -->
		</div>
		{#if valid}
			<h1>Add Contact Details</h1>
			<label for="handle"> Handle: </label>
			<input bind:value={handle} id="handle" />
		{/if}
		<div class="submit">
			<label for="preview">
				<!-- <input type="checkbox" bind:checked={preview} /> Preview Final -->
			</label>
			<!-- <button on:click|preventDefault={mde.externalUpdate}>Clear</button> -->
			<button on:click|preventDefault={handleAddContact} disabled={!handle || !pubKey || submitting}
				>Save</button
			>
		</div>
	</div>
</div>

{#if tagNode && decryptedData}
	{#await decryptedData}
		Decrypting...
	{:then decryptedData}
		<ul>
			<!-- defined by schema -->
			{#each decryptedData as { handle, pubKey }}
				<li>{handle} {pubKey}</li>
			{/each}
		</ul>
	{/await}
{:else}
	No {tag} yet.
{/if}

<style>
	.data-entry {
		display: flex;
		padding: 0.5em;
		flex-direction: column;
		width: 90vw;
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
		width: 50%;
	}
</style>
