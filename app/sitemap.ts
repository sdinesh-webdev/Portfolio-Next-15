import { MetadataRoute } from 'next'

type ChangeFreq = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'

interface RouteConfig {
  path: string
  changeFrequency: ChangeFreq
  priority: number
}

const routes: RouteConfig[] = [
  {
    path: '',
    changeFrequency: 'monthly',
    priority: 1
  },
  {
    path: 'projects',
    changeFrequency: 'weekly',
    priority: 0.8
  },
  {
    path: 'about',
    changeFrequency: 'monthly',
    priority: 0.5
  },
  {
    path: 'contact',
    changeFrequency: 'monthly',
    priority: 0.5
  }
]

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sdineshkumar.vercel.app'

  try {
    return routes.map(({ path, changeFrequency, priority }) => ({
      url: `${baseUrl}${path ? `/${path}` : ''}`,
      lastModified: new Date().toISOString(),
      changeFrequency,
      priority,
    }))
  } catch (error) {
    console.error('Error generating sitemap:', error)
    // Return at least the homepage if there's an error
    return [{
      url: baseUrl,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly' as ChangeFreq,
      priority: 1,
    }]
  }
}

