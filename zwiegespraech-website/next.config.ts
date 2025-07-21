import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // ESLint während des Builds ignorieren
    ignoreDuringBuilds: true,
  },
  // output: 'export', // Auskommentiert, um API-Routen zu ermöglichen
  // andere Konfigurationsoptionen hier...
};

export default nextConfig;