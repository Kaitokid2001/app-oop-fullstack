import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // add fix delay styles-component
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
