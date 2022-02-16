<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import QRCode from 'qrcode';

	export let value;

	let canvas;
	let visible = false;

	async function showQR() {
		QRCode.toCanvas(canvas, value); // Draws qr code symbol to canvas.
		visible = true;
	}

	onMount(() => showQR());
</script>

<div class="wrapper">
	<div class="qr-slot">
		<slot>[QR Code]</slot>
	</div>
	<canvas hidden={!visible} transition:fade bind:this={canvas} />
</div>

<style>
	.wrapper {
		display: flex;
		align-items: center;
		flex-direction: column;
	}
	canvas {
		border: 1px solid black;
		z-index: 1;
		margin: 10% auto;
	}
	div.qr-slot {
		display: inline-block;
		color: black;
	}
</style>
