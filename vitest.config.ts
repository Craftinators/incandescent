import { defineConfig } from "vitest/config";

// noinspection JSUnusedGlobalSymbols
export default defineConfig({
	test: {
		exclude: ["node_modules", "dist"],
		passWithNoTests: true,
		coverage: {
			enabled: true,
			all: true,
			reporter: ["text", "lcov", "cobertura"],
			provider: "c8",
			include: ["src"],
			exclude: ["**/*.{interface,type,d}.ts", "**/index.{js,ts}"],
		},
	},
});
