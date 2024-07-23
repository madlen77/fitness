import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  root: "src",
  resolve: {
    alias: {
      'react-native': 'react-native-web'
    }
  },
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
      }
    },
  },
  plugins: [react()],
});
