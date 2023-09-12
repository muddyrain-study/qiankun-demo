import { defineConfig } from 'vite'
import qiankun from 'vite-plugin-qiankun'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    qiankun('vite', {
      // 微应用名字，与主应用注册的微应用名字保持一致
      useDevMode: true,
    }),
  ],
  resolve: {
    extensions: ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json', '.less', '.css'],
    alias: {
      '@': '/src',
    },
  },
  server: {
    proxy: {
      '/dog': {
        target: 'https://dog.ceo/api/breeds/image/random/',
        changeOrigin: true,
      },
    },
    origin: 'http://localhost:5173/',
  },
})
