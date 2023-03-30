/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  compiler: {
    styledComponents: {
      displayName: false,
      ssr: true,
      minify: true,
    },
  },
};

module.exports = nextConfig;
