import adapter from '@sveltejs/adapter-auto';
import wasm from "vite-plugin-wasm";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		vite: {
			plugins: [wasm()]
		},
		adapter: adapter()
	}
};

export default config;
