import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';

const picomatchCompat = fileURLToPath(new URL('./scripts/picomatch-esm.mjs', import.meta.url));

export default defineConfig({
  output: 'static',
  site: 'https://zypc.example.com',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  vite: {
    resolve: {
      alias: {
        picomatch: picomatchCompat,
      },
    },
    build: {
      cssMinify: true,
    },
  },
});
