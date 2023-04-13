import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "src/index.ts",
  },
  splitting: true,
  sourcemap: false,
  skipNodeModulesBundle: true,
  clean: true,
  treeshake: true,
  minify: true,
  dts: true,
  format: ["esm", "cjs"],
  outDir: "dist",
  esbuildOptions(options, context) {
    options.outbase = "./";
  },
});
