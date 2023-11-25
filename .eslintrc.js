/** @type {import('eslint').ESLint.ConfigData['env']} */
const env = {
	browser: true,
	es6: true,
	node: true,
}

/** @type {import('eslint').ESLint.ConfigData} */
const config = {
	env,
	root: true,
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/strict-type-checked',
		'plugin:@typescript-eslint/stylistic-type-checked',
		'plugin:jsx-a11y/recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:@next/next/core-web-vitals',
		'prettier',
	],
	plugins: [
		'@typescript-eslint',
		'jsx-a11y',
		'react',
		'react-hooks',
		'@next/next',
		'unused-imports',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2022,
		ecmaFeatures: {
			jsx: true,
		},
		sourceType: 'module',
		project: true,
		tsconfigRootDir: __dirname,
	},
	settings: {
		'import/extensions': ['.js', '.ts', '.tsx'],
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx'],
		},
		'import/resolver': {
			typescript: {
				alwaysTryTypes: true,
				project: ['tsconfig.json'],
			},
		},
		react: {
			version: 'detect',
		},
	},
	rules: {
		'@typescript-eslint/no-unused-vars': 'off',
		'@typescript-eslint/consistent-type-exports': 'warn',
		'@typescript-eslint/consistent-type-imports': 'warn',
		'@typescript-eslint/consistent-type-definitions': ['warn', 'interface'],
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
		'react/prop-types': 'off',
		'react/react-in-jsx-scope': 'off',
		'unused-imports/no-unused-imports': 'error',
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
	overrides: [
		{
			files: ['./*.js'],
			extends: ['plugin:@typescript-eslint/disable-type-checked'],
			rules: {
				'@typescript-eslint/no-var-requires': 'off',
			},
		},
	],
}

module.exports = config
