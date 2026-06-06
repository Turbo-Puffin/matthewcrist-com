// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://matthewcrist.com',
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
