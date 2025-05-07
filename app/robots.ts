import { MetadataRoute } from 'next'

// Enhanced robots.txt for maximum SEO & AI visibility
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        crawlDelay: 1,
      },
      // Allow all major bots explicitly for clarity
      { userAgent: 'Googlebot', allow: '/' },
      { userAgent: 'Bingbot', allow: '/' },
      { userAgent: 'DuckDuckBot', allow: '/' },
      { userAgent: 'Applebot', allow: '/' },
      { userAgent: 'Yandex', allow: '/' },
      { userAgent: 'GPTBot', allow: '/' }, // OpenAI's web crawler
      { userAgent: 'AnthropicBot', allow: '/' }, // Anthropic's AI bot
    ],
    sitemap: 'https://sdineshkumar.vercel.app/sitemap.xml',
    host: 'https://sdineshkumar.vercel.app'
  }
}
