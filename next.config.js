/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  experimental: {
    serverActions: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  modularizeImports: {
    "@mui/icons-material": {
      transform: "@mui/icons-material/{{member}}",
    },
    "@mui/material": {
      transform: "@mui/material/{{member}}",
    },
    "@mui/styles": {
      transform: "@mui/styles/{{member}}",
    },
  },
  images: {
    deviceSizes: [750, 828, 1200],
    domains: ["mediashower.com"],
    minimumCacheTTL: 60,
  },
  webpack(config) {
    // Handle svg icons from svg-icons directory

    const svgRule = config.module.rules.find(({ test }) => /svg/gi.test(test));

    if (svgRule) {
      Object.assign(svgRule, {
        exclude: /[\\\/]svg\-icons[\\\/]/i,
      });
    }

    config.module.rules.push({
      test: /\.svg$/i,
      loader: "@svgr/webpack",
      include: /[\\\/]svg\-icons[\\\/]/i,
      options: {
        svgo: true,
        dimensions: false,
        ref: true,
      },
    });

    return config;
  },

};

module.exports = nextConfig;
