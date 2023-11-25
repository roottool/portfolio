/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
	reactStrictMode: true,
	pageExtensions: ['page.tsx', 'api.ts'],
	images: {
		domains: ['cdn.cloudflare.steamstatic.com'],
	},
	webpack: (config, { isServer }) => {
		// https://github.com/mswjs/msw/issues/1801#issuecomment-1794145119
		if (isServer) {
			config.resolve.alias = {
				...config.resolve.alias,
				'msw/browser': false,
			}
		} else {
			config.resolve.alias = {
				...config.resolve.alias,
				'msw/node': false,
			}
		}
		return config
	},
}

module.exports = nextConfig
