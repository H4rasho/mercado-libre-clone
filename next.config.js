/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'http2.mlstatic.com',
      },
      {
        protocol: 'http',
        hostname: 'http2.mlstatic.com',
      },
    ],
  },
}

module.exports = nextConfig
