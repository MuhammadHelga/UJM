// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://apps-jsi.ub.ac.id',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '/jsiapps/public/api'),
      },
      '/skripsi_kinerja_utama': {
      target: 'https://apps-jsi.ub.ac.id',
      changeOrigin: true,
      secure: false,
      rewrite: (path) => path.replace(/^\/skripsi_kinerja_utama/, '/jsiapps/public/api/skripsi_kinerja_utama'),
    }
    },
  },
});
