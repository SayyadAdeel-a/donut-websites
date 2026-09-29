import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: ['@donutland/ui'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.prod.website-files.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/blog-categories/events',
        destination: '/blog-category/event',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
