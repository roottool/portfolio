/** @type {import('prettier').Config} */
const config = {
	semi: false,
	singleQuote: true,
	useTabs: true,
	plugins: ['@trivago/prettier-plugin-sort-imports'],
	importOrder: ['^next', '^react', '<THIRD_PARTY_MODULES>', '^(@|[.]{1,2})/'],
	importOrderSeparation: true,
	importOrderSortSpecifiers: true,
	overrides: [
		{
			files: ['*.md', '*.json', '*.yml', '*.yaml'],
			options: {
				useTabs: false,
				tabWidth: 2,
			},
		},
	],
}

export default config
