// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';

import preprocess from 'svelte-preprocess';
import mm from 'micromatch';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter({
			pages: 'docs',
			assets: 'docs'
		}),
		paths: {
			// change below to your repo name
			base: dev ? '' : '/dag-jose-proxcryptor-kit'
		},
		vite: () => ({
			build: {
				rollupOptions: {}
			},
			server: {
				fs: {
					// Allow serving files from levels up to the project root
					allow: ['../../../']
				}
			}
		}),
		package: {
			dir: 'dist',
			exports: (filepath) => {
				if (filepath.endsWith('.d.ts')) return false;
				if (filepath == 'index.js') return true;
				return mm.isMatch(filepath, ['!**/_*', '!**/internal/**']);
				// return mm.isMatch(filepath, ['App.svelte', 'Portal.svelte']);
			},
			files: mm.matcher('!**/build.*')
		}
	}
};

export default config;
