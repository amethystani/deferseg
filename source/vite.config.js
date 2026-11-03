import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Built output goes to the repo root so GitHub Pages and static mirrors serve it directly.
// Images live once at <repo>/images and are served in dev through publicDir.
export default defineConfig({
  base: './',
  publicDir: '..',
  plugins: [react(), tailwindcss()],
  build: { outDir: '..', emptyOutDir: false, copyPublicDir: false },
})
