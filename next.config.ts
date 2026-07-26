import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: '/home', destination: '/' },
      { source: '/services', destination: '/' },
      { source: '/how-we-work', destination: '/' },
      { source: '/why-us', destination: '/' },
      { source: '/contact', destination: '/' },
    ];
  },
};

export default nextConfig;
