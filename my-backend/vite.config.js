import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    base: "my-backend",
    proxy: {
      "/api": "http://localhost:5000",
    },
  },
});
