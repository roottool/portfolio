// @ts-check

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  eslint: {
    // !! WARN !!
    // Warning: This allows production builds to successfully complete
    // even if your project has ESLint errors.
    // !! WARN !!
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['media.steampowered.com'],
  },
  reactStrictMode: true,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete
    // even if your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
