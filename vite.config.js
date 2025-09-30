import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/demo-clase-deploy/',
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    https: false, // fuerza HTTP en dev
    proxy: {
      '/api': {
        target: 'http://185.218.124.154:8800/api',
        changeOrigin: true,
      }
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
})
