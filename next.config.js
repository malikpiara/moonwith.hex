const { withContentCollections } = require("@content-collections/next");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      {
      source: '/logicola/:slug*',
      basePath: false,
      destination: 'https://logicola.org',
      permanent: true,
      }
    ]
  }
};

module.exports = withContentCollections(nextConfig);