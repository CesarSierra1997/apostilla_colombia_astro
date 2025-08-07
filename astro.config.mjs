import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from '@astrojs/react';
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  base: "",
  integrations: [
    tailwind(),
    react(),
    robotsTxt(),
    sitemap()
  ],
  site: 'https://apostillacolombia.com.co',

  vite: {
    resolve: {
      alias: {
        '@': '/src',
      },
    },
    build: {
      // Configuraciones para evitar false positivos de antivirus
      minify: 'terser', // Usar terser en lugar de esbuild
      terserOptions: {
        compress: {
          // Evitar optimizaciones agresivas que pueden parecer sospechosas
          drop_console: false,
          drop_debugger: false,
          pure_funcs: [],
        },
        mangle: {
          // Reducir la ofuscación de nombres
          keep_fnames: true,
          keep_classnames: true,
        },
        format: {
          // Mantener algunos comentarios
          comments: /license|copyright|author/i,
        }
      },
      // Dividir el código en chunks más pequeños
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor-gsap': ['gsap'],
            'vendor-swiper': ['swiper'],
            'vendor-react': ['react', 'react-dom'],
          }
        }
      }
    }
  },
});
