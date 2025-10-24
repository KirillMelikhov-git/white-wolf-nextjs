import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone', // Необходимо для Docker деплоя
};

export default nextConfig;
