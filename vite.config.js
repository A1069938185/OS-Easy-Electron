import { defineConfig } from 'vite'

export default defineConfig({
   server: {
    hmr:true,
    port:3000,
    watch: {
      ignored: ['!**/node_modules/**']
    },
    open: 'index.html'
  }
})