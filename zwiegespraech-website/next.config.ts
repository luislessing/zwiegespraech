import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // ESLint während des Builds ignorieren
    ignoreDuringBuilds: true,
  },
  output: 'export', // Wieder aktiviert für statisches Hosting
  trailingSlash: true, // Hilft bei statischem Hosting
  images: {
    unoptimized: true // Nötig für statischen Export
  }
};

export default nextConfig;