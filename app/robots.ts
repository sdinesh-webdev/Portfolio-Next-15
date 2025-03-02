import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        crawlDelay: 1,
      }
    ],
    sitemap: 'https://sdineshkumar.vercel.app/sitemap.xml',
    host: 'https://sdineshkumar.vercel.app'
  }
}
