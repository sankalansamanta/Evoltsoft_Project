import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],

  // ⚡ Development server settings
  server: {
    proxy: {
      // Everything that starts with /api → https://evoltsoft-project-self.vercel.app
      '/api': {
        target: 'https://evoltsoft-project-self.vercel.app',
        changeOrigin: true,          // sets the Host header on the proxy request
        secure: true,                // if your backend uses HTTPS (it does)
        rewrite: (path) => path.replace(/^\/api/, '/api'), // keep the /api prefix
        // optional: control which headers are forwarded / removed here if needed
      },
    },
  },
});
