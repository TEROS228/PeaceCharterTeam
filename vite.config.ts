import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Используем относительные пути для Vercel
  publicDir: 'public', // Ensure public directory is copied
})
