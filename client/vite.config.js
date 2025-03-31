// import { defineConfig } from "vite";
// import tailwindcss from "@tailwindcss/vite";
// export default defineConfig({
//   plugins: [tailwindcss()],
// });
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";


export default defineConfig({
  plugins: [tailwindcss()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000", // Your backend server
        changeOrigin: true,
        secure: false, // Set to `true` if using HTTPS in production
      },
    },
  },
});
