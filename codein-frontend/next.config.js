/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.usegalileo.ai'
        // port: '',
        // pathname: '/account123/**'
      },
      {
        protocol: 'https',
        hostname: 'dummyjson.com'
      }
    ]
  },
  webpack: (config, { isServer }) => {
    const MiniCssExtractPlugin = require('mini-css-extract-plugin') // Import the plugin

    if (!isServer) {
      config.plugins.push(new MiniCssExtractPlugin())
    }

    return config
  }
}

module.exports = nextConfig
