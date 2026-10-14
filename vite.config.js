import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  server: {
    port: 4173,
    host: '0.0.0.0',
    cors: true
  },
  preview: {
    port: 4173,
    host: '0.0.0.0',
    cors: true
  }
});
