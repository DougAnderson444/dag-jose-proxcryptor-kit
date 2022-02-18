<script>
	import { onMount, tick, createEventDispatcher } from 'svelte';

	import { contacts } from '$lib/stores';

	import ContactCard from './ContactCard.svelte';
	import PiperNet from '../Hypns/PiperNet.svelte';
	import GetTags from './GetTags.svelte';
	import TagAccess from '$lib/TagAccess.svelte';
	import TagValue from '$lib/TagValue.svelte';

	export let decryptedData;
	export let openHypns;
	export let getTagNodes;
	export let checkAccess;
	export let decryptFromTagNode;

	console.log('ShowContacts', { decryptedData });
	$: decryptedData && console.log({ decryptedData });

	const dispatch = createEventDispatcher();

	function handleMessenger(event) {
		console.log("handleMessenger pubKey to rx'd msg value", { event });
		dispatch('incomingPubKey', { pubKeyHex: event.detail.pubKeyHex });
	}
</script>

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
							{#if tagNode.tag}
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
