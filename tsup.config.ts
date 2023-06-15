import { defineConfig } from "tsup";

export function createTsupConfig() {
	return defineConfig({
		entry: ["src/index.ts"],
		external: [],
		noExternal: [],
		platform: "node",
		format: ["esm", "cjs"],
		target: "esnext",
		skipNodeModulesBundle: true,
		clean: true,
		shims: true,
		minify: false,
		splitting: false,
		keepNames: true,
		dts: true,
		sourcemap: true,
		esbuildPlugins: [],
	})
}
