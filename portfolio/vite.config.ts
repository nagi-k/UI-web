import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// 部署到腾讯云 CloudBase 根路径
export default defineConfig({
  base: '/',
  plugins: [react()],
});
