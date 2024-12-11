// eslint-disable-next-line @typescript-eslint/no-var-requires


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
  },
  webpack: (config, { dev }) => {
    if (dev) {
      // eslint-disable-next-line no-param-reassign
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
    }

    return config;
  },
};

module.exports = {
  ...nextConfig,
};
