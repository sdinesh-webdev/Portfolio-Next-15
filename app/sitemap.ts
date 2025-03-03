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
    changeFrequency: 'daily',
    priority: 1
  },
  {
    path: 'projects',
    changeFrequency: 'weekly',
    priority: 0.8
  },
  {
    path: 'about',
    changeFrequency: 'weekly',
    priority: 0.8
  },
  {
    path: 'contact',
    changeFrequency: 'weekly',
    priority: 0.5
  }
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sdineshkumar.vercel.app'

  // Next.js will automatically generate the correct XML structure with namespaces
  // We just need to return the correct data structure
  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${baseUrl}${path ? `/${path}` : ''}`,
    lastModified: new Date().toISOString(),
    changeFrequency,
    priority,
  }))
}

