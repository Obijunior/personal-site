import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
	resolve: {
		alias: {
			$lib: path.resolve("./src/lib"),
		},
	},
});
