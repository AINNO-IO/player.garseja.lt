import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  // `base: './'` keeps all built asset URLs relative, which
  // works reliably on GitHub Pages (custom domain or repo pages).
  base: './',
  plugins: [tailwindcss(), react()],
  build: {
    rollupOptions: {
      input: {
        root: resolve(__dirname, 'index.html'),
        en: resolve(__dirname, 'en/index.html'),
        lt: resolve(__dirname, 'lt/index.html'),
        cs: resolve(__dirname, 'cs/index.html'),
        sk: resolve(__dirname, 'sk/index.html'),
        hu: resolve(__dirname, 'hu/index.html'),
        ro: resolve(__dirname, 'ro/index.html'),
        bg: resolve(__dirname, 'bg/index.html'),
        hr: resolve(__dirname, 'hr/index.html'),
        sr: resolve(__dirname, 'sr/index.html'),
        sl: resolve(__dirname, 'sl/index.html'),
        de: resolve(__dirname, 'de/index.html'),
        es: resolve(__dirname, 'es/index.html'),
        da: resolve(__dirname, 'da/index.html'),
        sv: resolve(__dirname, 'sv/index.html'),
        no: resolve(__dirname, 'no/index.html'),
        fi: resolve(__dirname, 'fi/index.html'),
      },
    },
  },
})
