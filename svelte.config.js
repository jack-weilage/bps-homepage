import adapter from '@sveltejs/adapter-static'
import preprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
export default {
	preprocess: preprocess({
		scss: {
			prependData: `@import './src/lib/css/vars.scss';@import './src/lib/css/global.scss';`
		}
	}),

	kit: {
		adapter: adapter()
	}
}