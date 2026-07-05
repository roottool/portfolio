import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
	site: "https://portfolio-6od.pages.dev",
	output: "static",
	vite: {
		plugins: [tailwindcss()],
		resolve: {
			tsconfigPaths: true,
		},
	},
});
