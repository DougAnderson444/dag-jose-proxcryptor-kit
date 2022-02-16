<script lang="ts">
	import Menu from '$lib/components/nav/Menu.svelte';

	import '../app.css';
</script>

<main>
	<slot />
</main>

<footer>
	<Menu />
	<div class="tagline">
		<p>
			visit <a href="https://peerpiper.io">http://peerpiper.io</a> to learn more
		</p>
	</div>
</footer>

<style>
	:root {
		--column-width: 42rem;
		--column-margin-top: 4rem;
	}
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer,
	footer p {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		background-color: black;
		color: #2ec73d;
	}

	footer a {
		font-weight: bold;
		margin: auto 0.4em;
		display: contents;
	}
	.tagline {
		display: flex;
	}
	@media (min-width: 480px) {
		:root {
			--column-margin-top: 1.1rem;
		}

		footer {
			/* padding: 40px 0; */
		}
	}
</style>
