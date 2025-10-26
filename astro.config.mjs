import tailwind from '@astrojs/tailwind'
import { defineConfig, envField } from 'astro/config'

export default defineConfig({
	integrations: [tailwind()],
	output: 'static',
	env: {
		schema: {
			GITHUB_USERNAME: envField.string({ context: 'server', access: 'public' }),
			STEAM_API_KEY: envField.string({ context: 'server', access: 'secret' }),
			STEAM_ID: envField.string({ context: 'server', access: 'public' }),
		},
	},
})
