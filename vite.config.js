import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import { terser } from 'rollup-plugin-terser';
import viteCompression from 'vite-plugin-compression';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';

export default defineConfig({
  plugins: [
    svelte(),
    viteCompression({ algorithm: 'brotliCompress' }), // Use gzip if preferred
    {
      ...terser(),
      apply: 'build',
    }
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
    minify: 'terser',
    // Enable tree-shaking
    rollupOptions: {
      output: {
        manualChunks: undefined, // Disable manual chunking
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      },
      treeshake: true,
      plugins: [
        terser({
          compress: {
            drop_console: true, // Drop console.* statements in production
          },
        }),
      ],
    },
  },
});
