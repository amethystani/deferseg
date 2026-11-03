import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Static mirrors serve pages from an opaque (null) origin without CORS headers, so the
// build must not rely on module scripts or crossorigin attributes.
const classicAssets = () => ({
  name: 'classic-assets',
  enforce: 'post',
  transformIndexHtml(html) {
    return html
      .replace(/<script type="module" crossorigin src=/g, '<script defer src=')
      .replace(/ crossorigin/g, '')
  },
})

// Built output goes to the repo root so GitHub Pages and static mirrors serve it directly.
// Images live once at <repo>/images and are served in dev through publicDir.
export default defineConfig({
  base: './',
  publicDir: '..',
  plugins: [react(), tailwindcss(), classicAssets()],
  build: {
    outDir: '..',
    emptyOutDir: false,
    copyPublicDir: false,
    rollupOptions: { output: { format: 'iife', inlineDynamicImports: true } },
  },
})
