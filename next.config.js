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
  compiler: {
    styledComponents: true
  }
};
module.exports = nextConfig;
