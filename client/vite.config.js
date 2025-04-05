import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ], 
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000", 
        secure: false, 
      },
    },
  },
});
