import eslint from '@eslint/js'
import gitignore from 'eslint-config-flat-gitignore'
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript'
import eslintPluginAstro from 'eslint-plugin-astro'
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y'
import unusedImports from 'eslint-plugin-unused-imports'
import { defineConfig } from 'eslint/config'
import globals from 'globals'
import tseslint from 'typescript-eslint'

const commonTsConfig = {
	languageOptions: {
		parserOptions: {
			project: true,
			tsconfigRootDir: import.meta.dirname,
		},
	},
	plugins: {
		'unused-imports': unusedImports,
	},
	settings: {
		'import/resolver-next': [
			createTypeScriptImportResolver({
				alwaysTryTypes: true,
			}),
		],
	},
	rules: {
		'@typescript-eslint/no-unused-vars': 'off',
		'unused-imports/no-unused-vars': [
			'warn',
			{
				vars: 'all',
				varsIgnorePattern: '^_',
				args: 'after-used',
				argsIgnorePattern: '^_',
			},
		],
	},
}

export default defineConfig(
	gitignore({ root: true }),
	{
		ignores: ['pnpm-lock.yaml', 'public'],
	},
	eslint.configs.recommended,
	{
		files: ['**/*.{astro}'],
		extends: [
			eslint.configs.recommended,
			tseslint.configs.recommendedTypeChecked,
			tseslint.configs.stylisticTypeChecked,
			eslintPluginAstro.configs.recommended,
			jsxA11yPlugin.flatConfigs.recommended,
		],
		...commonTsConfig,
	},
	{
		files: ['**/*.{ts,cts,mts,tsx}'],
		extends: [
			tseslint.configs.recommendedTypeChecked,
			tseslint.configs.stylisticTypeChecked,
			jsxA11yPlugin.flatConfigs.recommended,
		],
		...commonTsConfig,
	},
	{
		name: 'globals',
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.es2021,
				...globals.node,
			},
		},
	},
	{
		files: ['*.{js,cjs,mjs}'],
		...tseslint.configs.disableTypeChecked,
	},
)
