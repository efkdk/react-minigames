import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'entities': path.resolve(__dirname, './src/entities'),
      'features': path.resolve(__dirname, './src/features'),
      'shared': path.resolve(__dirname, './src/shared'),
      'pages': path.resolve(__dirname, './src/pages'),
      'widgets': path.resolve(__dirname, './src/widgets'),
    },
  },
})
