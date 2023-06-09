/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsConfigPaths from 'vite-tsconfig-paths';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import postcssPresetEnv from 'postcss-preset-env';
import checker from 'vite-plugin-checker';
import process from 'node:process';
export default defineConfig({
  cacheDir: '../../node_modules/.vite/admin',

  server: {
    port: 4200,
    host: 'localhost',
  },

  preview: {
    port: 4300,
    host: 'localhost',
  },

  plugins: [
    vanillaExtractPlugin(),
    react(),
    viteTsConfigPaths({
      root: '../../',
    }),
    checker({
      typescript: {
        root: `${process.cwd()}/apps/admin`,
        tsconfigPath: 'tsconfig.app.json',
      },
    }),
  ],
  css: {
    postcss: {
      plugins: [postcssPresetEnv()],
    },
  },
  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [
  //    viteTsConfigPaths({
  //      root: '../../',
  //    }),
  //  ],
  // },

  test: {
    globals: true,
    cache: {
      dir: '../../node_modules/.vitest',
    },
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
});
