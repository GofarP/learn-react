import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';
import tailwindcss from '@tailwindcss/vite';
import { profile } from 'console';


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        practice: resolve(__dirname,'index-practice.html'),
        contact:resolve(__dirname, 'contact.html'),
        task:resolve(__dirname, 'task.html'),
        counter:resolve(__dirname,'counter.html'),
        note:resolve(__dirname,'note.html'),
        profile:resolve(__dirname,'profile.html'),
        
      }
    }
  }
})
