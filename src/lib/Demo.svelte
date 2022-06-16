<script>
	import Gateway, { FetchComponent } from '@douganderson444/svelte-component-gateway';
	import Proxcryptor from './Proxcryptor.svelte';
	import IPFSManager from './IPFSManager.svelte';

	import { onMount } from 'svelte';
	export let wallet = null; // possible the user has their own wallet?

	//props
	let Web3WalletMenu;
	let ipfsNode, rootCID;

	let url =
		'https://raw.githubusercontent.com/PeerPiper/awesome-peerpiper-components/master/compiled/@peerpiper/ContactCard.svelte.js';

	let start = Date.now();

	onMount(async () => {
		if (!wallet) {
			// @ts-ignore
			({ Web3WalletMenu } = await import('@peerpiper/svelte-web3-wallet-connector'));
		}

		return () => globalThis.ipfsNode.stop();
	});
</script>

<svelte:head>
	<link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet" />
</svelte:head>

<div class="m-2 p-2 border bg-slate-400 rounded text-slate-300">
	Data: All the data in a Component needs to be saved encrypted under a Tag name. So the user must
	choose which Tag this component's data will be saved under. If Multiple Components save data to
	the same tag, it's up to them to update the object sent to the proxcryptor, as the proxcryptor
	will only write Tag:Value that it is given.
</div>
<!-- First, you need a wallet -->
{#if Web3WalletMenu}
	<svelte:component this={Web3WalletMenu} bind:wallet />
{/if}

<IPFSManager bind:ipfsNode bind:rootCID let:tag>
	<!-- <DataDisplay {ipfsNode} {rootCID} /> -->
	<!-- Fetch gets the component from the interwebs and passes it back up here through let:component  -->
	<FetchComponent {url} let:component>
		{!!component} && {!!ipfsNode} && {!!wallet}

		<div class="border flex-auto h-96">
			{#if component && ipfsNode && wallet}
				<!-- on:change bubbles the emited 'change' event to the parent component, if bind:props isn't avail -->
				<Proxcryptor
					proxcryptor={wallet?.proxcryptor}
					{tag}
					{ipfsNode}
					{rootCID}
					let:props
					let:handleSubmit
					on:rootCID={(e) => (rootCID = e.detail)}
				>
					<Gateway esModule={component} {props} on:change={handleSubmit} />
				</Proxcryptor>
			{/if}
		</div>
	</FetchComponent>
</IPFSManager>
