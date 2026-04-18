import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Configuración para GitHub Pages
  site: 'https://felipefullstackdev.github.io',
  base: '/felipefullstackdev.github.io',
  
  vite: {
    plugins: [tailwindcss()]
  },
  
  integrations: [mdx(), sitemap()],
  
  // Esto es importante para las imágenes
  build: {
    assets: 'assets'
  }
});