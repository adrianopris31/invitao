import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
        {
            protocol: 'http',
            hostname: 'e-invitatii-back.test',
            port: '',
            pathname: '/storage/**',
        },
    ],
},};

export default nextConfig;
