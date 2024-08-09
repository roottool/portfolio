import eslint from '@eslint/js'
import nextPlugin from '@next/eslint-plugin-next'
import gitignore from 'eslint-config-flat-gitignore'
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y'
import reactPlugin from 'eslint-plugin-react'
import hooksPlugin from 'eslint-plugin-react-hooks'
import unusedImports from 'eslint-plugin-unused-imports'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
	gitignore({ root: true }),
	{
		ignores: ['pnpm-lock.yaml', 'public'],
	},
	eslint.configs.recommended,
	...tseslint.configs.recommendedTypeChecked,
	...tseslint.configs.stylisticTypeChecked,
	{
		files: ['**/*.{ts,tsx}'],
		languageOptions: {
			parserOptions: {
				project: true,
				tsconfigRootDir: import.meta.dirname,
			},
		},
		plugins: {
			'unused-imports': unusedImports,
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
		...reactPlugin.configs['jsx-runtime'].languageOptions,
		// NOTE: https://github.com/vercel/next.js/discussions/49337#discussioncomment-5998603
		settings: {
			react: {
				version: 'detect',
			},
		},
		plugins: {
			'jsx-a11y': jsxA11yPlugin,
			react: reactPlugin,
			'react-hooks': hooksPlugin,
		},
		rules: {
			...jsxA11yPlugin.configs.recommended.rules,
			...reactPlugin.configs.recommended.rules,
			...reactPlugin.configs['jsx-runtime'].rules,
			...hooksPlugin.configs.recommended.rules,
			'react/prop-types': 'off',
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
								"We can't use App Routerin this project because this project use Pages Router.",
						},
					],
				},
			],
		},
	},
	{
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
