import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import viteCompression from 'vite-plugin-compression';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';

export default defineConfig({
  plugins: [
    svelte(),
    viteCompression({ algorithm: 'brotliCompress' }), // Use gzip if preferred
  ],
  css: {
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer,
      ],
    },
  },
  build: {
    minify: true, // Enable built-in minification with ESBuild
    rollupOptions: {
      output: {
        manualChunks: undefined,
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
      treeshake: true,
    },
  },
});