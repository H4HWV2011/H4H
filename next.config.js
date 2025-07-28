/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: [],
  },
  trailingSlash: true,
  output: 'export'
}

module.exports = nextConfig
