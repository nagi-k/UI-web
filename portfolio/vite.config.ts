import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// 部署到腾讯云 CloudBase /portfolio/ 子路径
export default defineConfig({
  base: '/portfolio/',
  plugins: [react()],
});
