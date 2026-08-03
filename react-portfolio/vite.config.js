import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import contentApi from './plugins/content-api'

// https://vite.dev/config/
export default defineConfig({
  // contentApi n'est actif qu'en dev (apply: "serve") : le build reste statique
  plugins: [react(), contentApi()],
})
