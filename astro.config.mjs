import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';

const picomatchCompat = fileURLToPath(new URL('./scripts/picomatch-esm.mjs', import.meta.url));

const codeLineNumbers = {
  name: 'zypc:code-line-numbers',
  line(node, line) {
    node.properties['data-line'] = line;
  },
};

export default defineConfig({
  output: 'static',
  site: 'https://zypc.xupt.edu.cn',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  markdown: {
    shikiConfig: {
      themes: {
        light: 'one-light',
        dark: 'github-dark-high-contrast',
      },
      transformers: [codeLineNumbers],
    },
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
