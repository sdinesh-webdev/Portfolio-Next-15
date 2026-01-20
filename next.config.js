/** @type {import('next').NextConfig} */
const nextConfig = {
  // optimizePackageImports is no longer experimental in Next.js 15+
  optimizePackageImports: ["gsap", "lenis"],
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
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
  // Add cache headers for static assets
  async headers() {
    return [
      {
        // Apply to all static assets
        source: "/:path*.(js|css|woff|woff2|ttf|png|jpg|jpeg|webp|svg|ico)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Specific rule for Speed Insights script
        source: "/_vercel/speed-insights/script.js",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
