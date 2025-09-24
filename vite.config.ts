import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Для собственного домена используем корневой путь
  publicDir: 'public', // Ensure public directory is copied
})
