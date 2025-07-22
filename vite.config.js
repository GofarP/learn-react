import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        practice: resolve(__dirname,'index-practice.html'),
        contact:resolve(__dirname, 'contact.html'),
        task:resolve(__dirname, 'task.html')
      }
    }
  }
})
