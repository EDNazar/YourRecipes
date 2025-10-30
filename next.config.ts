import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "eda.ru"
      },
      {
        protocol: "https",
        hostname: "ir.ozone.ru"
      },
      {
        protocol: "https",
        hostname: "russianfood.com"
      },
      {
        protocol: "https",
        hostname: "food.ru"
      }
    ]
  }
};

export default nextConfig;
