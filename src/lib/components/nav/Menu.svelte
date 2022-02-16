<script>
	import HouseSolid from '$lib/graphics/HouseSolid.svelte';

	export let handle;
	export let pubKey;
</script>

<div class="menu">
	<div class="menu-item">
		<HouseSolid />
	</div>
	<div class="menu-item" />
</div>

<style>
	.menu {
		display: flex;
		flex-direction: row;
		background-color: black;
		justify-content: space-evenly;
		align-items: center;
		padding: 0.7em 0.2em;
	}
	.menu-item {
		margin: 0.25em;
	}
</style>
