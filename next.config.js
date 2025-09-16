/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  turbopack: { root: __dirname },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'header', key: 'x-forwarded-proto', value: 'http' }],
        destination: 'https://hanshillsco.com/:path*',
        permanent: true
      }
    ];
  }
};

module.exports = nextConfig;