<script lang="ts">
	import Menu from '$lib/components/nav/Menu.svelte';

	import '../app.css';
</script>

<main class="relative flex flex-col h-screen">
	<slot />
</main>

<!-- <footer>
	<Menu />
	<div class="tagline">
		<p>
			visit <a href="https://peerpiper.io">http://peerpiper.io</a> to learn more
		</p>
	</div>
</footer> -->
