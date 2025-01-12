/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en'
  },
  compiler: {
    styledComponents: true
  },
  images: {
    domains: ['upload.wikimedia.org', 'user-images.githubusercontent.com'],
  },
};

module.exports = nextConfig;
