import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import siteConfig from './src/data/site-config';

// https://astro.build/config
export default defineConfig({
  // Si estás en local (development), base = '/'
  // Si estás en producción (GitHub Pages), base = '/nombre-repo/'
  base: import.meta.env.PROD ? '/felipefullstackdev.github.io' : '/',
  
  site: 'https://felipefullstackdev.github.io',
  
  vite: {
    plugins: [tailwindcss()]
  },
  
  integrations: [mdx(), sitemap()]
});