import { defineConfig } from 'vite'

// base './' — сборка открывается с любого пути, в том числе с GitHub Pages
export default defineConfig({
  base: './',
  server: { host: true, open: !process.env.NO_OPEN },
})
