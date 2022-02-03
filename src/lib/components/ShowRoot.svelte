<script>
	export let rootCID;
</script>

{#if rootCID}
	✔️ IPLD Data Saved to: <a href="https://dweb.link/api/v0/dag/get?arg={rootCID}" target="_blank">
		{rootCID}</a
	>
	<br />
{/if}
