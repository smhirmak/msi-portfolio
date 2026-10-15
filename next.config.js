/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'tr'],
    defaultLocale: 'en',
    localeDetection: false
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'upload.wikimedia.org' },
      { protocol: 'https', hostname: 'user-images.githubusercontent.com' }
    ],
    formats: ['image/avif', 'image/webp']
  },
  poweredByHeader: false
};
module.exports = nextConfig;
