import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),tailwindcss()
  ],
  // base: "/Movie_site_clone",
})



  //   "predeploy": "npm run build",
  //   "deploy": "gh-pages -d dist"
  // },
