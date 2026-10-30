import { defineConfig } from 'tsdown';

export default defineConfig([
  {
    entry: './src/index.ts',
    format: ['esm', 'cjs'],
    fixedExtension: false, // Use .js extension for ESM output (instead of .mjs)
  },
  {
    entry: './src/index.ts',
    format: 'umd',
    globalName: 'tstemplate', // The global variable name for UMD build
    outputOptions: {
      entryFileNames: 'umd.js',
    },
  },
]);
