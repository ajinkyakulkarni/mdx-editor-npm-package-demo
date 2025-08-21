import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  define: {
    global: 'globalThis',
    'process.env': {},
  },
  build: {
    sourcemap: true,
    outDir: 'dist',
    rollupOptions: {
      onwarn(warning, warn) {
        // Skip certain warnings
        if (warning.code === 'MODULE_LEVEL_DIRECTIVE') {
          return;
        }
        warn(warning);
      }
    }
  },
  resolve: {
    alias: {
      stream: 'stream-browserify',
      buffer: 'buffer',
      process: 'process/browser',
      util: 'util',
      './globalThis': 'proj4/lib/global.js',
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "legacy",
        includePaths: [
          "node_modules/@uswds/uswds/packages",
          'node_modules/@uswds/uswds',
        ],
      },
    },
  },
  optimizeDeps: {
    include: [
      "buffer",
      "process",
      "stream-browserify",
      "util",
    ],
    esbuildOptions: {
      define: {
        global: "globalThis",
      },
    },
  },
});