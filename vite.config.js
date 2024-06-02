import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [svelte()],
  build: {
    sourcemap: true,
    minify: true,
  },
  css: {
    postcss: './postcss.config.js' // Update to postcss.config.js
  },
});
