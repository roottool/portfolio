import eslint from '@eslint/js'
import nextPlugin from '@next/eslint-plugin-next'
import gitignore from 'eslint-config-flat-gitignore'
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript'
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import unusedImports from 'eslint-plugin-unused-imports'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
	gitignore({ root: true }),
	{
		ignores: ['pnpm-lock.yaml', 'public'],
	},
	eslint.configs.recommended,
	{
		files: ['**/*.{ts,cts,mts,tsx}'],
		extends: [
			tseslint.configs.recommendedTypeChecked,
			tseslint.configs.stylisticTypeChecked,
		],
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
	},
	{
		files: ['{app|src}/**/*.{ts,tsx}'],
		...jsxA11yPlugin.flatConfigs.recommended,
		rules: {
			...jsxA11yPlugin.flatConfigs.recommended.rules,
			'jsx-a11y/alt-text': [
				'warn',
				{
					elements: ['img'],
					img: ['Image'],
				},
			],
			'jsx-a11y/anchor-is-valid': [
				'error',
				{
					components: ['Link'],
					specialLink: ['to'],
				},
			],
		},
	},
	{
		files: ['{app|src}/**/*.{ts,tsx}'],
		extends: [reactHooksPlugin.configs['recommended-latest']],
		...reactPlugin.configs.flat['jsx-runtime'],
		// NOTE: https://github.com/vercel/next.js/discussions/49337#discussioncomment-5998603
		settings: {
			react: {
				version: 'detect',
			},
		},
		rules: {
			...reactPlugin.configs.flat.recommended.rules,
			...reactPlugin.configs.flat['jsx-runtime'].rules,
			'react/prop-types': 'off',
			'react/jsx-sort-props': [
				'warn',
				{
					callbacksLast: false,
					ignoreCase: true,
					noSortAlphabetically: false,
					shorthandFirst: true,
					reservedFirst: true,
				},
			],
		},
	},
	{
		files: ['{app|src}/**/*.{ts,tsx}'],
		plugins: {
			'@next/next': nextPlugin,
		},
		rules: {
			...nextPlugin.configs.recommended.rules,
			...nextPlugin.configs['core-web-vitals'].rules,
			'no-restricted-imports': [
				'error',
				{
					paths: [
						{
							// TODO: Remove this rule if we use App Router.
							name: 'next/navigation',
							message:
								"We can't use App Router in this project because this project use Pages Router.",
						},
					],
				},
			],
		},
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
