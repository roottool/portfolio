import tailwindcss from '@tailwindcss/vite'
import { defineConfig, envField } from 'astro/config'

export default defineConfig({
	output: 'static',
	env: {
		schema: {
			STEAM_API_KEY: envField.string({ context: 'server', access: 'secret' }),
			STEAM_ID: envField.string({ context: 'server', access: 'public' }),
		},
	},
	vite: {
		plugins: [tailwindcss()],
	},
})
