// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://matthewcrist.com',
  redirects: {
    '/playbook': '/products/playbook',
  },
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
