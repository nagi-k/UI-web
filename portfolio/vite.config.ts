import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// 部署到腾讯云静态托管等子路径时，将 base 改为对应路径，例如 '/portfolio/'
export default defineConfig({
  base: '/',
  plugins: [react()],
});
