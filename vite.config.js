import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Abrir el navegador por defecto
  server: {
    open: '/',
    port: 3300,
  }

})
