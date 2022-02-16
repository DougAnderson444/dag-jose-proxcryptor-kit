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
	let pubKeyInput;

	$: value ? (handle = value) : null;
	$: pubKey && console.log({ pubKey });

	onMount(async () => {
		const Buffer = await import('buffer'); // Solana Web3.js uses Buffers instead of UInt8Array =/
		global.Buffer = Buffer.Buffer;

		({ SNSWrapper } = await import('@douganderson444/svelte-solana-name-service'));

		let params = new URLSearchParams(location.search);
		if (params.has('add')) {
			pubKey = params.get('add');
			pubKeyInput.focus();
		}
	});

	function handleValidate() {
		console.log(`Validating ${value}`);

		if (!value) return; // TODO: Handle better
		// <!-- defined by schema -->
		const valBytes = validatePubKey(value);
		if (valBytes) {
			console.log('Valid', { value });
			valid = true;
			pubKey = value;
		} else valid = false;
	}
</script>

<svelte:head>
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
			bind:this={pubKeyInput}
			on:input={handleValidate}
			on:change={handleValidate}
			on:focus={handleValidate}
		/>
		<button type="submit" class="searchButton" on:click={() => {}}>
			<i class="fa fa-search" />
		</button>
	</div>
	{valid ? '✔️ Valid Public Key' : ''}
</div>

{#if pubKey && valid}
	<SearchResults {handle} {pubKey} source={null} {handleAddContact} />
{/if}

<style>
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
