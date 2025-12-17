/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['digitallift.io', 'i.pravatar.cc'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig

