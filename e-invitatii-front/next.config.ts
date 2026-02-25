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
        {
            protocol: 'http',
            hostname: '192.168.0.175',
            port: '',
            pathname: '/storage/**',
        },
        {
            protocol: 'http',
            hostname: '192.168.80.78',
            port: '',
            pathname: '/storage/**',
        },
    ],
},};

export default nextConfig;
