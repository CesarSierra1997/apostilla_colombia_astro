import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from '@astrojs/react';
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap"; // 

export default defineConfig({
  integrations: [
    tailwind(),
    react(),
    robotsTxt(),
    sitemap() // 
  ],
  site: 'https://apostillacolombia.com.co', // 

  vite: {
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  },
});
