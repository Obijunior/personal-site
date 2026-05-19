import { svelte } from "@sveltejs/vite-plugin-svelte";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [svelte()],
	resolve: {
		alias: {
			$lib: path.resolve("./src/lib"),
		},
	},
});
