import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
	plugins: [react()],
	test: {
		environment: 'happy-dom',
		setupFiles: './vitest.setup.ts',
		coverage: {
			reporter: ['text', 'json', 'html'],
			include: ['src/**/*.?(c|m)[jt]s?(x)'],
			exclude: [
				'src/**/?(*.)type.?(c|m)ts',
				'src/mocks/**/*',
				'src/styles/**/*',
			],
		},
	},
	resolve: {
		alias: {
			'@': resolve(__dirname, './src'),
			$: resolve(__dirname, './public'),
		},
	},
})
