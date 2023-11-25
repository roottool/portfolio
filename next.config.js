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
