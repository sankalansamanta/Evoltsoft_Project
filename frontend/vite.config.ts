import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/dashboard': {
        target: 'https://evoltsoft-project.onrender.com', 
        changeOrigin: true,
        rewrite: path => path.replace(/^\/dashboard/, '/api/dashboard'),
      }
    }
  }
})

