<script>
	import { onMount } from 'svelte';
	import SearchResults from './SearchResults.svelte';
	import { validatePubKey } from '$lib/utils/index';

	export let handle = 'DougAnderson44';
	export let value = 'DougAnderson44';
	export let pubKey;
	export let handleAddContact;

	let SNSWrapper;
	let valid;
	let inputElement;

	$: value && handleInput();
	$: pubKey && handleValidate(pubKey);

	onMount(async () => {
		const Buffer = await import('buffer'); // Solana Web3.js uses Buffers instead of UInt8Array =/
		global.Buffer = Buffer.Buffer;

		const process = await import('process');
		global.process = process;

		({ SNSWrapper } = await import('@douganderson444/svelte-solana-name-service'));

		let params = new URLSearchParams(location.search);
		if (params.has('add')) {
			pubKey = params.get('add');
			inputElement.focus();
		}
	});

	function handleInput() {
		handle = value; // trigger check registry
		// in the meantime, check whether this is a valid public key
		handleValidate(value);
	}

	function handleValidate(value) {
		// console.log(`Validating`, { value });

		if (!value) return; // TODO: Handle better
		// <!-- defined by schema -->
		const valBytes = validatePubKey(value.toString());
		// console.log({ valBytes });
		if (valBytes) {
			// console.log('Valid', { value: value.toString() });
			valid = true;
			pubKey = value.toString();
		} else valid = false;
	}
</script>

<svelte:head>
	<!-- font awesome css  -->
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
		integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
		crossorigin="anonymous"
		referrerpolicy="no-referrer"
	/>
</svelte:head>
{#if SNSWrapper}
	<!-- Pass in handle, get pubKey back  -->
	<svelte:component this={SNSWrapper} {handle} bind:pubKey />
{/if}

<div class="sb-example-1">
	<div class="search">
		<input
			class="searchTerm"
			bind:value
			placeholder="@handle or Public Key"
			bind:this={inputElement}
			on:input={handleInput}
			on:change={handleInput}
			on:focus={handleInput}
		/>
		<button type="submit" class="searchButton" on:click={() => {}}>
			<i class="fa fa-search" />
		</button>
	</div>
	<div class="validity">
		{valid ? '✔️ Valid ' + pubKey.toString() : ''}
	</div>
</div>

{#if pubKey && valid}
	<SearchResults {handle} {pubKey} source={null} {handleAddContact} />
{/if}

<style>
	.validity {
		margin: 0.25em 0;
	}
	input {
		padding: 0.3em;
		border-radius: 3px;
	}
	.sb-example-1 {
		width: 100%;
	}
	.sb-example-1 .search {
		width: 100%;
		position: relative;
		display: flex;
	}
	.sb-example-1 .searchTerm {
		width: 100%;
		border: 3px solid #2ec73d;
		border-right: none;
		padding: 5px;
		border-radius: 5px 0 0 5px;
		outline: none;
		color: #9dbfaf;
	}
	.sb-example-1 .searchTerm:focus {
		color: #2ec73d;
	}
	.sb-example-1 .searchButton {
		width: 40px;
		height: 50px;
		border: 1px solid #2ec73d;
		background: #2ec73d;
		text-align: center;
		color: #fff;
		border-radius: 0 5px 5px 0;
		cursor: pointer;
		font-size: 20px;
	}
</style>
