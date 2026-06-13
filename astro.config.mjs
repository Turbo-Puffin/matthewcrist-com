// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://matthewcrist.com',
  integrations: [sitemap()],
  redirects: {
    '/playbook': '/uncluttah',
    '/products/playbook': '/uncluttah',
  },
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
