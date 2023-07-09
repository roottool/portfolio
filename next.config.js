// @ts-check

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
	reactStrictMode: true,
	pageExtensions: ['page.tsx', 'api.ts'],
	images: {
		domains: ['cdn.cloudflare.steamstatic.com'],
	},
	eslint: {
		// !! WARN !!
		// Warning: This allows production builds to successfully complete
		// even if your project has ESLint errors.
		// !! WARN !!
		ignoreDuringBuilds: true,
	},
	typescript: {
		// !! WARN !!
		// Dangerously allow production builds to successfully complete
		// even if your project has type errors.
		// !! WARN !!
		ignoreBuildErrors: true,
	},
}

module.exports = nextConfig
