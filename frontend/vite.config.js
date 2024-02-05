import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      external: [
        "@safe-globalThis/safe-ethers-adapters"
      ],
    },
  },
  plugins: [react()],
  define: {
    global: "globalThis",
    "process.env": {},
  },
});
