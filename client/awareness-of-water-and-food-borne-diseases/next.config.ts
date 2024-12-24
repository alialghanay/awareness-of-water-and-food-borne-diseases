import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    API_URL: process.env.API_URL,
    API_KEY: process.env.CMS_TOKEN,
    IMAGE_URL: process.env.IMAGE_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cms.idpat.org",
        port: "443",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
