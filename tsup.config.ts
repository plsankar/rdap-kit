import { defineConfig } from "tsup";

export default defineConfig({
    entry: ["src/index.ts"],
    format: ["cjs", "esm", "iife"],
    globalName: "rdapkit",
    splitting: false,
    sourcemap: true,
    clean: true,
    dts: true,
});
