import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // add fix delay styles-component
  compiler: {
    styledComponents: true,
  },
  // định dạng img
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.amazonaws.com',
        port: '',
        pathname: '/my-bucket/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
