export interface SiteMetadata {
  url: string
  lastModified: string
  changeFrequency: string
  priority: number
}

export interface ManifestIcon {
  src: string
  sizes: string
  type: string
}

export interface SiteManifest {
  name: string
  short_name: string
  description: string
  start_url: string
  display: string
  background_color: string
  theme_color: string
  icons: ManifestIcon[]
}
