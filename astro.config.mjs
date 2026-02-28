import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://anydebtcollections.co.za',
  outDir: 'docs',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/privacy-policy') && !page.includes('/terms'),
    }),
  ],
  vite: { plugins: [tailwindcss()] },
});
