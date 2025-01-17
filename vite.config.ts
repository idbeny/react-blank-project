import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  base: './',
  server: {
    port: 4200,
    host: '0.0.0.0',
    open: true,
    proxy: {
      '/bridge': {
        target: 'http://127.0.0.1:5610',
        changeOrigin: true,
        secure: true,
        // rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
    fs: {
      allow: ['../..'],
    },
  },
  plugins: [react()],
});
