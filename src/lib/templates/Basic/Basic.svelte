<script>
	// Basic template to show how to interact with the proxcryptor Parent component
	import { createEventDispatcher } from 'svelte';

	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	import ExpandCIDs from './ExpandCIDs.svelte';

	// Component props passed in from Parent Component
	// will also reactively update if updated in parent
	export let rootCID;
	export let ipfsNode;
	export let decrypt;

	const dispatch = createEventDispatcher();

	let tag;
	let schema;
	let value;
</script>

<div transition:slide={{ delay: 100, duration: 400, easing: quintOut }}>
	<div class="tag">
		<input bind:value={tag} placeholder="Tag, like 'address' " />
	</div>
	<div class="tag keywords">
		<input bind:value={schema} placeholder="address postal zip street" />
	</div>
	<slot>
		<textarea bind:value />
	</slot>

	<div class="submit">
		<label for="preview">
			<!-- <input type="checkbox" bind:checked={preview} /> Preview Final -->
		</label>
		<!-- <button on:click|preventDefault={mde.externalUpdate}>Clear</button> -->
		<button
			on:click|preventDefault={() => dispatch('handleSubmit', { tag, data: { value, schema } })}
			>Post</button
		>
	</div>
</div>

{#if rootCID && ipfsNode}
	<ExpandCIDs {ipfsNode} {rootCID} let:data>
		<!-- Only decrypts on hover (TODO: longpress for mobile) -->
		{#await decrypt(data)}
			Decrypting...
		{:then raw}
			{raw}
		{/await}
	</ExpandCIDs>
{/if}
