<script>
	import { onMount } from 'svelte';

	let SNSWrapper;

	onMount(async () => {
		// const Buffer = await import('buffer'); // Solana Web3.js uses Buffers instead of UInt8Array =/
		// global.Buffer = Buffer.Buffer;

		({ SNSWrapper } = await import('@douganderson444/svelte-solana-name-service'));
	});

	export let handle = 'DougAnderson444';
	export let pubKey;
</script>

{#if SNSWrapper}
	<!-- Pass in handle, get pubKey back  -->
	<svelte:component this={SNSWrapper} {handle} bind:pubKey />
{/if}

<input bind:value={handle} placeholder="@handle" />
{pubKey}
