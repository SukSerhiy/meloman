import { defineConfig } from 'vitest/config';
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      services: "/src/services",
      "@redux": "/src/redux",
      components: "/src/components",
      ui: "/src/ui",
      testing: "/src/testing",
      hooks: "/src/hooks",
      assets: "/src/assets",
      utils: "/src/utils",
      constants: "/src/constants",
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/testing/setup.ts',
  },
});
