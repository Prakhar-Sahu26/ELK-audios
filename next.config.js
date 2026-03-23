/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'www.bowerswilkins.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
      },
      {
        protocol: 'https',
        hostname: 'audiopro.com',
      },
      {
        protocol: 'https',
        hostname: 'klipsch.imgix.net',
      },
    ],
  },
}

module.exports = nextConfig
