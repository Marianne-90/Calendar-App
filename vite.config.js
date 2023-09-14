import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv"; //*? Esto es para hacer válidas las variables del entorno

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    proxy: {
      "/api": "http://localhost:3000", // Redirige todas las solicitudes que comienzan con '/api' al servidor Express en el puerto 3000
    },
  },
});
