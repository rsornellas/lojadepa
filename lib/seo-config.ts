// Comprehensive SEO configuration for Loja de Pá

export const seoConfig = {
  // Site Information
  siteName: 'Loja de Pá',
  siteUrl: 'https://lojadepa.com.br',
  siteDescription: 'Consultoria especializada em AWS no Brasil. Soluções serverless personalizadas, migração para cloud e otimização de custos.',
  
  // Default SEO
  defaultTitle: 'Loja de Pá - Consultoria AWS Brasil | Migração Cloud & Serverless',
  titleTemplate: '%s | Loja de Pá - Consultoria AWS Brasil',
  
  // Keywords by category
  keywords: {
    primary: [
      'consultoria aws brasil',
      'migração aws',
      'serverless aws',
      'cloud computing brasil',
      'arquitetura aws',
      'consultoria cloud',
      'aws especialista'
    ],
    secondary: [
      'devops aws',
      'segurança aws',
      'otimização custos aws',
      'bancos de dados aws',
      'ci/cd aws',
      'infraestrutura aws',
      'aws migration',
      'cloud migration brasil',
      'aws consulting',
      'aws partner brasil'
    ],
    longTail: [
      'como migrar para aws',
      'consultoria aws são paulo',
      'serviços aws brasil',
      'arquitetura serverless aws',
      'otimização custos aws',
      'segurança aws compliance',
      'devops aws pipeline',
      'aws para empresas brasileiras'
    ]
  },
  
  // Social Media
  social: {
    twitter: '@lojadepa',
    linkedin: 'company/lojadepa',
    instagram: 'lojadepa'
  },
  
  // Contact Information
  contact: {
    phone: '+55-11-99999-9999',
    email: 'contato@lojadepa.com.br',
    address: {
      country: 'BR',
      region: 'São Paulo',
      city: 'São Paulo'
    }
  },
  
  // Technical SEO
  technical: {
    language: 'pt-BR',
    locale: 'pt_BR',
    timezone: 'America/Sao_Paulo',
    currency: 'BRL',
    themeColor: '#FF9900',
    backgroundColor: '#FFFFFF'
  },
  
  // Performance
  performance: {
    targetLCP: 2.5, // seconds
    targetFID: 100, // milliseconds
    targetCLS: 0.1, // score
    targetFCP: 1.8, // seconds
    targetTTI: 3.8 // seconds
  },
  
  // Content Strategy
  content: {
    minWordCount: 300,
    targetWordCount: 1500,
    readingTime: 6, // minutes
    updateFrequency: 'monthly'
  },
  
  // Schema.org Types
  schemaTypes: {
    organization: 'Organization',
    localBusiness: 'ProfessionalService',
    service: 'Service',
    faq: 'FAQPage',
    breadcrumb: 'BreadcrumbList',
    article: 'Article',
    review: 'Review',
    rating: 'Rating'
  }
}

// SEO utility functions
export const seoUtils = {
  // Generate meta description
  generateMetaDescription: (content: string, maxLength: number = 160): string => {
    const cleanContent = content.replace(/<[^>]*>/g, '').trim()
    if (cleanContent.length <= maxLength) return cleanContent
    return cleanContent.substring(0, maxLength - 3) + '...'
  },
  
  // Generate title
  generateTitle: (title: string, template?: string): string => {
    if (template) return template.replace('%s', title)
    return `${title} | ${seoConfig.siteName}`
  },
  
  // Generate canonical URL
  generateCanonicalUrl: (path: string): string => {
    return `${seoConfig.siteUrl}${path.startsWith('/') ? path : `/${path}`}`
  },
  
  // Generate keywords array
  generateKeywords: (primary: string[], secondary: string[] = []): string[] => {
    return [...primary, ...secondary, ...seoConfig.keywords.primary]
  },
  
  // Generate Open Graph image URL
  generateOGImageUrl: (title: string, description?: string): string => {
    const params = new URLSearchParams({
      title: title.substring(0, 60),
      description: description?.substring(0, 120) || '',
      site: seoConfig.siteName
    })
    return `${seoConfig.siteUrl}/api/og?${params.toString()}`
  }
}

// Page-specific SEO configurations
export const pageSEO = {
  home: {
    title: 'Loja de Pá - Consultoria AWS Brasil | Migração Cloud & Serverless',
    description: 'Consultoria especializada em AWS no Brasil. Seu crescimento começa com a ferramenta certa. Soluções serverless personalizadas, migração para cloud e otimização de custos.',
    keywords: seoConfig.keywords.primary,
    priority: 1.0
  },
  
  services: {
    title: 'Serviços AWS | Consultoria Especializada',
    description: 'Conheça nossos serviços de consultoria AWS: migração, serverless, segurança, otimização de custos, DevOps e bancos de dados.',
    keywords: [...seoConfig.keywords.primary, 'serviços aws'],
    priority: 0.9
  },
  
  contact: {
    title: 'Contato | Fale Conosco - Loja de Pá',
    description: 'Entre em contato conosco para uma consultoria gratuita. Especialistas em AWS prontos para ajudar sua empresa.',
    keywords: [...seoConfig.keywords.primary, 'contato', 'consulta gratuita'],
    priority: 0.8
  }
}
