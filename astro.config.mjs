// @ts-check

import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    build: {
      // Optimización: tree shaking más agresivo
      rollupOptions: {
        output: {
          manualChunks: {
            // Separar vendor chunks para mejor caching
            aos: ['aos'],
            vendor: ['astro'],
          },
        },
      },
      // Minificación más agresiva
      minify: 'terser',
      terserOptions: {
        compress: {
          dead_code: true,
          drop_console: true, // Remover console.logs en producción
          drop_debugger: true,
          pure_funcs: ['console.log', 'console.info', 'console.warn'],
        },
      },
    },
  },

  build: {
    // Inlining de scripts pequeños
    inlineStylesheets: 'auto',
    // Optimización de assets
    assets: '_astro',
  },

  // Optimización: prefetch inteligente
  prefetch: {
    prefetchAll: false, // Solo prefetch manual para mejor control
    defaultStrategy: 'hover', // Prefetch al hacer hover
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },

  integrations: [icon()],
});
