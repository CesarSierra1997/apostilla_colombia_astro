import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from '@astrojs/react';
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap"; // 

export default defineConfig({
  base: "/v2",
  integrations: [
    tailwind(),
    react(),
    robotsTxt(),
    sitemap() // 
  ],
  site: 'https://apostillacolombia.com.co/v2', // 

  vite: {
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  },
});
