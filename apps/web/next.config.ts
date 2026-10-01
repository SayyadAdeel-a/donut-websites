import type { NextConfig } from 'next';

const isExport = process.env.NEXT_EXPORT === 'true';

const nextConfig: NextConfig = {
  transpilePackages: ['@donutland/ui'],
  output: isExport ? 'export' : undefined,
  images: {
    unoptimized: isExport,
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
  ...(isExport
    ? {}
    : {
        async redirects() {
          return [
            {
              source: '/blog-categories/events',
              destination: '/blog-category/event',
              permanent: true,
            },
          ];
        },
      }),
};

export default nextConfig;
