import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/myportfolio', // Matches your GitHub repository name
  images: {
    unoptimized: true,
    loader: 'default',
    formats: ['image/webp', 'image/avif'],
  },
  // Optimize for static hosting
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
};

export default nextConfig;
