/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/my-portfolio',
  output: 'export',
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
}

module.exports = nextConfig
