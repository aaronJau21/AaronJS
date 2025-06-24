import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "itoeste.com",
      },
      {
        protocol: "https",
        hostname: "starkcloud.com",
      },
    ],
  },
};

export default nextConfig;
