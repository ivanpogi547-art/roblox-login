import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/roblox-login/', // 👈 this line fixes the blank page
  plugins: [react()],
})
