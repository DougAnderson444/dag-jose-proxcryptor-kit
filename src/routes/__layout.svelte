<script lang="ts">
	import '../app.css';
</script>

<main>
	<slot />
</main>

<footer>
	<p>
		visit <a href="https://peerpiper.io">http://peerpiper.io</a> to learn more about PeerPiper.io
	</p>
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
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		:root {
			--column-margin-top: 1.1rem;
		}

		footer {
			padding: 40px 0;
		}
	}
</style>
