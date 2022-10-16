/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['https://logo.clearbit.com'],
  },
}

module.exports = nextConfig
