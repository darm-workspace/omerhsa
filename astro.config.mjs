// astro.config.mjs
import { defineConfig } from 'astro/config';
import { passthroughImageService } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import vue from '@astrojs/vue';
import svelte from '@astrojs/svelte';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://omerhsa.com',
  output: 'static',
  
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssCodeSplit: true,
    }
  },

  integrations: [
    react(),
    vue(),
    svelte(),
    sitemap(),
  ],

  image: {
    service: passthroughImageService(),
    domains: ['randomuser.me'],
  },
});