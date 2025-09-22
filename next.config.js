/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
    optimizePackageImports: ['gsap', 'lenis'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  images: {
    unoptimized: false,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "oabk6vpcyt3tfpux.public.blob.vercel-storage.com",
      },
    ],
    minimumCacheTTL: 31536000,
  },
  compress: true,
  poweredByHeader: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: "asset/resource",
      generator: {
        filename: "static/media/[name][ext]",
      },
    });
    return config;
  },
};

module.exports = nextConfig;
