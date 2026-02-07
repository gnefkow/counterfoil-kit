import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { resolve } from "path"
import dts from "vite-plugin-dts"

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      include: ["src/**/*"],
      exclude: ["src/**/*.test.*", "src/**/*.spec.*", "src/App.tsx", "src/main.tsx"],
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "CounterfoilKit",
      formats: ["es", "umd"],
      fileName: (format) => `counterfoil-kit.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        assetFileNames: (assetInfo) => {
          // Rename the CSS file to styles.css
          if (assetInfo.name && assetInfo.name.endsWith(".css")) {
            return "styles.css"
          }
          return assetInfo.name || "asset"
        },
      },
    },
    cssCodeSplit: false,
    outDir: "dist",
  },
})
