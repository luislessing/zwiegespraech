import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // ESLint während des Builds ignorieren
    ignoreDuringBuilds: true,
  },
  output: 'export',
  // andere Konfigurationsoptionen hier...
};

export default nextConfig;