import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: "/nature-nook-site/", // Repo-ի անունը
  plugins: [
    react(),
    tailwindcss(),
  ],
});
