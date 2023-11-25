/** @type {import('prettier').Config} */
const config = {
	semi: false,
	singleQuote: true,
	useTabs: true,
	plugins: ['@trivago/prettier-plugin-sort-imports'],
	importOrder: ['^next', '^react', '<THIRD_PARTY_MODULES>', '^(@|[.]{1,2})/'],
	importOrderSeparation: true,
	importOrderSortSpecifiers: true,
}

export default config
