<script>
	import { contacts } from '$lib/stores';

	import ContactCard from './ContactCard.svelte';
	$: $contacts && console.log($contacts);
	$: decryptedData = $contacts;
</script>

decryptedData : {decryptedData}
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
			</ContactCard>
		</div>
	{/each}
{/if}
