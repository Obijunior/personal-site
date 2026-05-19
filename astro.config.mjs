// @ts-check

import cloudflare from "@astrojs/cloudflare";
import svelte from "@astrojs/svelte";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
	adapter: cloudflare(),
	integrations: [svelte()],
	vite: {
		plugins: [tailwindcss()],
	},
});
