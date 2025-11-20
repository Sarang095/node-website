import { defineConfig } from 'vite'

export default defineConfig({
  root: '.',          // entry is index.html
  build: {
    outDir: 'dist',   // output folder for Tomcat
  }
})
