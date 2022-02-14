<script>
	// Basic template to show how to add Contact with the proxcryptor Parent component
	import { page } from '$app/stores';

	import { onMount, tick, createEventDispatcher } from 'svelte';

	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	import Search from './Search.svelte';

	import { validatePubKey } from '$lib/utils/index';

	import ContactCard from './ContactCard.svelte';
	import PiperNet from '../Hypns/PiperNet.svelte';
	import GetTags from './GetTags.svelte';
	import TagAccess from '$lib/TagAccess.svelte';

	import { contacts } from '$lib/stores';
	import TagValue from '$lib/TagValue.svelte';

	import { Scanner } from 'qrcode-scanner-svelte';
	import ScanIcon from '$lib/graphics/scanIcon.svelte';
	import Modal from '$lib/graphics/Modal.svelte';
	import QrCodeIcon from '$lib/graphics/QRCodeIcon.svelte';
	import QRCode from '../../QRCode.svelte';

	// Component props passed in from Parent Component
	// will also reactively update if updated in parent
	export let getTagNodes;
	export let openHypns;
	export let checkAccess;
	export let decryptedData;
	export let decryptFromTagNode;

	$: if (decryptedData) $contacts = decryptedData;

	const dispatch = createEventDispatcher();

	const tag = 'Contacts';

	let schema;
	let handle, pubKey, pubKeyInput;
	let tagNode;
	let valid;
	let submitting;
	let mounted;
	let scan;
	let showQR;

	onMount(async () => {
		// check if this is a search params loaded page
		let params = new URLSearchParams(location.search);
		if ($page.url.searchParams.has('add')) {
			pubKey = $page.url.searchParams.get('add');
			await tick();
			pubKeyInput.focus();
		} else if (params.has('add')) {
			pubKey = params.get('add');
			await tick();
			pubKeyInput.focus();
		}

		mounted = true;
	});

	export function onSubmitted() {
		submitting = false;
		handle = '';
		pubKey = '';
		valid = false;
	}

	function handleValidate() {
		console.log(`Validating ${pubKey}`);

		if (!pubKey) return; // TODO: Handle better
		// <!-- defined by schema -->
		if (validatePubKey(pubKey)) valid = true;
		else valid = false;
	}

	async function handleAddContact() {
		console.log('Adding ', { handle }, { pubKey });
		if (!handle || !pubKey) return; // TODO: Handle better
		// <!-- defined by schema -->
		const bytes = validatePubKey(pubKey);
		console.log('Adding bytes', { bytes });

		let value;

		if (decryptedData && decryptedData.length)
			value = [...decryptedData, { handle, pubKey: new Uint8Array(bytes) }];
		else value = [{ handle, pubKey: new Uint8Array(bytes) }];

		console.log('Adding value', { value });
		submitting = true;
		dispatch('handleSubmit', { tag, data: { value, schema } });
	}

	function handleConnect(key) {
		pubKey = key;
	}
	function handleMessenger(event) {
		console.log("Setting pubKey to rx'd msg value");
		pubKey = event.detail.pubKeyHex;
	}
</script>

<div transition:slide={{ delay: 100, duration: 400, easing: quintOut }}>
	<div class="data-entry">
		<h1 class="tag">{tag}</h1>
		<div class="tag keywords">
			<input bind:value={schema} placeholder="publicKey friends contacts" disabled />
		</div>

		<div class="item">
			<div class="entry-item">
				<input
					placeholder="Paste or Scan Public Key"
					bind:this={pubKeyInput}
					bind:value={pubKey}
					on:input={handleValidate}
					on:change={handleValidate}
					on:focus={handleValidate}
				/>{valid ? '✔️ Valid Public Key' : ''}
				<div class="scan-icon">
					<ScanIcon bind:scan>
						<Modal bind:modal={scan}>
							<Scanner
								bind:result={pubKey}
								on:successfulScan={(data) => {
									scan = false;
									const parsed = JSON.parse(data.detail);
									console.log(`Scanned `, { parsed });
									handleConnect(parsed.pubKeyHex);
								}}
							>
								<!-- null -->
								<div />
							</Scanner>
						</Modal>
					</ScanIcon>
				</div>
				<div class="scan-icon">
					<QrCodeIcon bind:showQR>
						<Modal bind:modal={showQR}>
							<QRCode value={JSON.stringify({ connectJson: 'test' })}
								>Others Scan this from their PeerPiper to Connect to You</QRCode
							>
						</Modal>
					</QrCodeIcon>
				</div>
			</div>
			<!-- <Search bind:handle bind:pubKey /> -->
		</div>
		{#if valid}
			<h1>Add Nickname</h1>
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

{#if decryptedData}
	<!-- defined by schema -->
	{#each decryptedData as { handle, pubKey }}
		<div class="card-container">
			<ContactCard>
				<span slot="handle">
					{handle}
				</span>

				<span slot="publicKey">
					PubKey: <small>{pubKey}</small>
				</span>

				<span slot="latest">
					<PiperNet {pubKey} {openHypns} let:latestHypns on:onMessage={handleMessenger}>
						<!-- once root CID appears, get tag details then show tag access -->
						<GetTags rootCID={latestHypns} {getTagNodes} let:tagNode>
							{#if tag}
								<TagAccess tag={tagNode.tag} {pubKey} {checkAccess} />
							{/if}
							{#if tagNode.tag === 'Profile'}
								<TagValue {tagNode} {decryptFromTagNode} />
							{/if}
						</GetTags>
					</PiperNet>
				</span>
			</ContactCard>
		</div>
	{/each}
{/if}

<style>
	.card-container {
		margin: 1em 0;
	}
	.data-entry {
		display: flex;
		padding: 0.5em;
		flex-direction: column;
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
		width: 100%;
	}
	.entry-item {
		display: inline-flex;
		flex-wrap: nowrap;
		align-items: center;
		flex-direction: row;
	}
	.scan-icon {
		margin: 1em 0 1em 1em;
	}
</style>
