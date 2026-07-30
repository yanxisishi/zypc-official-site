import { createRequire } from 'node:module';

// Vite 8's module runner can evaluate Picomatch's CommonJS entry as ESM on
// Windows. Loading it through Node's native CommonJS bridge keeps Astro's
// content loader portable without patching files inside node_modules.
const picomatch = createRequire(import.meta.url)('picomatch');

export default picomatch;
