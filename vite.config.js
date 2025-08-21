import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path,{ resolve } from "path";

export default defineConfig(() => {
  // Load env file based on `mode` in the current working directory.
  // By default, Vite loads .env files and makes VITE_ prefixed variables available
  
  return {
    plugins: [react()],
    define: {
      global: 'globalThis',
    },
    build: {
      lib: {
        entry: resolve(__dirname, "src/lib/index.ts"),
        name: "VEDAContentEditor",
        fileName: (format) => `index.${format === "es" ? "mjs" : "js"}`,
        formats: ["es", "cjs"],
      },
      rollupOptions: {
        external: [
          "react",
          "react-dom",
          "react/jsx-runtime",
          "focus-trap-react",
          "styled-components",
          /^@devseed-ui\/.*/,
          /^@teamimpact\/.*/,
        ],
        output: {
          exports: "named",
          globals: {
            react: "React",
            "react-dom": "ReactDOM",
            "react/jsx-runtime": "ReactJSXRuntime",
            "styled-components": "styled",
            "focus-trap-react": "FocusTrapReact",
          },
        },
      },
      sourcemap: true,
    },
resolve: {
  alias: {
    "@csv": path.resolve(__dirname, "src/mdx-editor/assets/csv"),
    stream: 'stream-browserify',
    buffer: 'buffer',
    process: 'process/browser',
    util: 'util',
  }},
    css: {
      preprocessorOptions: {
        scss: {
          api: "legacy",
          includePaths: [
            "node_modules/@uswds/uswds/packages", 
            "node_modules/@mdxeditor/editor/style.css", 
            'node_modules/@uswds/uswds',
          'node_modules/@uswds/uswds/dist',
         'node_modules/@uswds/uswds/packages',,
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
        "@codesandbox",
        "@radix-ui",
      ],
      force: true,
      esbuildOptions: {
        define: {
          global: "globalThis",
          Buffer: "Buffer",
        },
      },
    },
  };
});