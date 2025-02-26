import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/about',
          '/projects',
          '/contact',
          '/blog'
        ],
        disallow: [
          '/api/',
          '/private/',
          '/admin/',
          '/*.json$',
          '/*?*'  // Prevent crawling of URL parameters
        ]
      }
    ],
    sitemap: 'https://sdineshkumar.vercel.app/sitemap.xml',
    host: 'https://sdineshkumar.vercel.app'
  }
}
