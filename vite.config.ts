import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://app-cms.server1.dev.crestin.de', // Your Directus server
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Remove the "/api" prefix
      },
    },
  },
})
