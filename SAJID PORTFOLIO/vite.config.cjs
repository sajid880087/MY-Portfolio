const { defineConfig } = require("vite");
const react = require("@vitejs/plugin-react-swc");
const path = require("path");
const { componentTagger } = require("lovable-tagger");

module.exports = defineConfig(({ mode }) => {
  const __dirname = process.cwd();
  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
