import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ['three'],
  async redirects() {
    return [
      { source: '/personas', destination: '/agent-studio', permanent: true },
      { source: '/integrations', destination: '/agent-studio', permanent: true },
      { source: '/pricing', destination: '/early-access', permanent: true },
      { source: '/agents/appointment-scheduling', destination: '/agents', permanent: true },
      { source: '/agents/debt-collection', destination: '/agents', permanent: true },
      { source: '/agents/real-estate', destination: '/agents', permanent: true },
    ];
  },
};

export default nextConfig;
