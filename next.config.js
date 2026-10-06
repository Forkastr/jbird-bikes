/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // The homepage and /api/catalog fetch the Google catalog feed at build time,
  // retrying up to 3 x 30s when Google is slow (src/lib/catalog.ts); the default 60s would cut that off.
  staticPageGenerationTimeout: 120,
}

module.exports = nextConfig
