<script>
	// Basic template to show how to interact with the proxcryptor Parent component
	import { createEventDispatcher } from 'svelte';

	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	// Component props passed in from Parent Component
	// will also reactively update if updated in parent
	export let decryptedData;

	const dispatch = createEventDispatcher();

	const tag = 'Profile';
	let schema;
	let value;
</script>

<div transition:slide={{ delay: 100, duration: 400, easing: quintOut }}>
	<h3>{tag}</h3>
	<slot>
		<textarea bind:value />
	</slot>

	<div class="submit">
		<button
			on:click|preventDefault={() => dispatch('handleSubmit', { tag, data: { value, schema } })}
			>Post</button
		>
	</div>
</div>

{#if decryptedData}
	{@html JSON.stringify(decryptedData, null, 2)}
{/if}
