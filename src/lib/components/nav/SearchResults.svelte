<script>
	import Modal from '$lib/graphics/Modal.svelte';
	import { validatePubKey } from '$lib/utils/index';

	export let handle;
	export let pubKey;
	export let source;

	export let handleAddContact;
</script>

<Modal modal={true}>
	<div class="SearchResults">
		<h1 contenteditable="true" bind:innerHTML={handle}>{handle}</h1>
		<div class="pubkey" style="font-size: .6em">
			{pubKey}
		</div>
		<div class="buttons" />
		<button on:click={handleAddContact(pubKey.toString(), handle)}>Add Contact</button>
		<button>Grant Access to Tag(s)</button>
		<button>Request Access</button>
	</div>
</Modal>

<style>
	h1 {
		border: 1px dashed grey;
		padding: 0.5em;
		background-color: antiquewhite;
	}
	.pubkey {
		padding: 0px;
	}
	div.SearchResults {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		margin: 1.62em;
		align-items: stretch;
	}
	.buttons {
	}
	button {
		padding: 1.62em;
		margin: 1.62em;
		background-color: rgb(46, 199, 61);
		width: auto;
	}
</style>
