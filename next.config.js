/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: false
// };

// module.exports = {
//   compiler: {
//     // Enables the styled-components SWC transform
//     styledComponents: true
//   }
// };
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en'
  },
  compiler: {
    styledComponents: true
  }
};
module.exports = nextConfig;
