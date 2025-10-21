/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.zara.net'
      },
      {
        protocol: 'https',
        hostname: 'image.hm.com'
      },
      {
        protocol: 'https',
        hostname: 'image.uniqlo.com'
      }
    ]
  }
};

export default nextConfig;
