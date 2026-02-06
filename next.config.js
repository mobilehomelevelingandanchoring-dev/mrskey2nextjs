/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Image Optimization for Core Web Vitals (LCP)
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mrskey2bhpautolocksmith.co.uk',
      },
      {
        protocol: 'https',
        hostname: 'media.istockphoto.com',
      },
      {
        protocol: 'https',
        hostname: 'markhamlockandsafe.ca',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'www.carkeyssolutions.co.uk',
      },
      {
        protocol: 'https',
        hostname: 'carkeyking.com',
      },
      {
        protocol: 'https',
        hostname: 'img.freepik.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year cache for static images
  },

  // Compression for faster load times
  compress: true,

  // Production optimizations
  swcMinify: true,
  poweredByHeader: false, // Remove X-Powered-By header for security

  // Strict mode for better development experience
  typescript: {
    ignoreBuildErrors: false,
  },

  // Security headers for SEO trust signals
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(self)'
          }
        ],
      },
    ];
  },

  // Redirects for canonical URL management
  async redirects() {
    return [
      // Example: Redirect www to non-www (configure based on preference)
      // {
      //   source: '/:path*',
      //   has: [{ type: 'host', value: 'www.mrskey2bhpautolocksmith.co.uk' }],
      //   destination: 'https://mrskey2bhpautolocksmith.co.uk/:path*',
      //   permanent: true,
      // },
    ];
  },
}

module.exports = nextConfig
