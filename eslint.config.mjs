import gitignore from "eslint-config-flat-gitignore";
import { configs as astroPluginConfigs } from "eslint-plugin-astro";
import oxlint from "eslint-plugin-oxlint";
import { defineConfig } from "eslint/config";
import globals from "globals";

export default defineConfig(
	gitignore({ root: true }),
	{
		ignores: ["public"],
	},
	{
		name: "globals",
		languageOptions: {
			globals: {
				...globals.browser,
			},
		},
	},
	{
		files: ["**/*.{astro}"],
		extends: [
			astroPluginConfigs.recommended,
			...oxlint.configs["flat/recommended"],
		],
	},
);
