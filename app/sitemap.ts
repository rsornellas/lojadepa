import { MetadataRoute } from 'next'

// Service data for sitemap generation
const services = [
  'migracao-aws',
  'arquitetura-serverless',
  'seguranca-aws',
  'otimizacao-custos',
  'devops-cicd',
  'bancos-dados'
]

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://lojadepa.com.br'

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
  ]

  // Dynamic service pages
  const servicePages = services.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...staticPages, ...servicePages]
}