import { sveltekit } from '@sveltejs/kit/vite';
import wasm from "vite-plugin-wasm";
import path from 'path';

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit(), wasm()],
  build: {
    target: 'esnext'
  },
};

export default config;
