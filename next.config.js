/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },

  async redirects() {
    return [
      {
        source: "/studio",
        destination: "/studio/desk",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
