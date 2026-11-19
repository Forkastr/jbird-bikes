/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // The homepage and /api/catalog fetch the Google catalog feed at build time,
  // retrying up to 3 x 30s when Google is slow (src/lib/catalog.ts); the default 60s would cut that off.
  staticPageGenerationTimeout: 120,
  // The ended city rebate page still appears in search results; send it to the sales page.
  async redirects() {
    return [
      { source: '/nolaincentive', destination: '/sales.html', permanent: true },
      { source: '/nolaincentive/:path*', destination: '/sales.html', permanent: true },
    ];
  },
}

module.exports = nextConfig
