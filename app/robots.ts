import { MetadataRoute } from 'next'

// Enhanced robots.txt for maximum SEO & AEO (Answer Engine Optimization) visibility
// Optimized for "sdinesh webdev" brand ranking
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        crawlDelay: 1,
      },
      // Traditional Search Engine Bots
      { userAgent: 'Googlebot', allow: '/' },
      { userAgent: 'Googlebot-Image', allow: '/' },
      { userAgent: 'Bingbot', allow: '/' },
      { userAgent: 'DuckDuckBot', allow: '/' },
      { userAgent: 'Applebot', allow: '/' },
      { userAgent: 'Yandex', allow: '/' },
      { userAgent: 'Baiduspider', allow: '/' },

      // AI/LLM Crawlers - Critical for Answer Engine Optimization (AEO)
      { userAgent: 'GPTBot', allow: '/' },           // OpenAI ChatGPT
      { userAgent: 'ChatGPT-User', allow: '/' },     // ChatGPT browsing
      { userAgent: 'Google-Extended', allow: '/' },  // Google AI (Bard/Gemini)
      { userAgent: 'CCBot', allow: '/' },            // Common Crawl (used by many AI)
      { userAgent: 'PerplexityBot', allow: '/' },    // Perplexity AI
      { userAgent: 'ClaudeBot', allow: '/' },        // Anthropic Claude
      { userAgent: 'anthropic-ai', allow: '/' },     // Anthropic AI
      { userAgent: 'cohere-ai', allow: '/' },        // Cohere AI
      { userAgent: 'YouBot', allow: '/' },           // You.com AI search
    ],
    sitemap: 'https://sdineshkumar.vercel.app/sitemap.xml',
    host: 'https://sdineshkumar.vercel.app'
  }
}
