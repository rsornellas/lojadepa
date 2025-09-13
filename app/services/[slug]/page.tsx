import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { 
  Cpu, 
  Globe,
  CheckCircle,
  Clock,
  Users,
  Target
} from 'lucide-react'
import { Card, CardContent, CardHeader } from '../../../components/ui/card'
import { Badge } from '../../../components/ui/badge'
import { CTAButtons } from '../../../components/ui/cta-buttons'
import { Breadcrumb } from '../../../components/ui/breadcrumb'
import { getServiceBySlug, getAllServices, type Service } from '../../../lib/services-data'

// Server-side data fetching with caching
async function getServiceData(slug: string): Promise<Service | null> {
  // This simulates a database call with caching
  // In production, you might fetch from a CMS or database
  const service = await getServiceBySlug(slug)
  return service
}


interface ServicePageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const services = await getAllServices()
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = await getServiceData(params.slug)
  
  if (!service) {
    return {
      title: 'Serviço não encontrado',
    }
  }

  return {
    title: service.seoTitle,
    description: service.metaDescription,
    keywords: [service.primaryKeyword, ...service.relatedKeywords, 'AWS', 'cloud', 'Brasil'],
    authors: [{ name: 'Loja de Pá' }],
    creator: 'Loja de Pá',
    publisher: 'Loja de Pá',
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: service.seoTitle,
      description: service.metaDescription,
      type: 'website',
      url: `https://lojadepa.com.br/services/${service.slug}`,
      siteName: 'Loja de Pá',
      locale: 'pt_BR',
      images: [
        {
          url: `/og-services-${service.slug}.jpg`,
          width: 1200,
          height: 630,
          alt: `${service.title} - Loja de Pá`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: service.seoTitle,
      description: service.metaDescription,
      images: [`/og-services-${service.slug}.jpg`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

export default async function ServicePage({ params }: ServicePageProps) {
  const service = await getServiceData(params.slug)

  if (!service) {
    notFound()
  }

  const Icon = service.icon

  return (
    <main className="min-h-screen bg-background">
      {/* Structured Data for Service Page SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": service.title,
            "description": service.metaDescription,
            "url": `https://lojadepa.com.br/services/${service.slug}`,
            "provider": {
              "@type": "Organization",
              "name": "Loja de Pá",
              "url": "https://lojadepa.com.br",
              "logo": "https://lojadepa.com.br/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+55-11-99999-9999",
                "contactType": "sales",
                "email": "contato@lojadepa.com.br",
                "areaServed": "BR",
                "availableLanguage": "Portuguese"
              }
            },
            "category": "AWS Consulting",
            "serviceType": service.primaryKeyword,
            "audience": {
              "@type": "Audience",
              "audienceType": service.targetAudience
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": service.title,
              "itemListElement": service.features.map((feature, index) => ({
                "@type": "Offer",
                "position": index + 1,
                "itemOffered": {
                  "@type": "Service",
                  "name": feature,
                  "description": `${feature} como parte do serviço ${service.title}`
                }
              }))
            },
            "mainEntity": {
              "@type": "FAQPage",
              "mainEntity": service.faq.map(item => ({
                "@type": "Question",
                "name": item.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": item.answer
                }
              }))
            }
          })
        }}
      />

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-aws-orange/5 to-aws-orange-light/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: 'Serviços', href: '/#servicos' },
              { label: service.title }
            ]}
          />
          <div className="text-center">
            <Badge variant="aws" className="mb-4">
              <Cpu className="w-4 h-4 mr-2" />
              {service.badge}
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
              {service.title}
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed">
              {service.detailedDescription}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Implementação: 2-6 semanas</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>Equipe especializada</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4" />
                <span>Resultados garantidos</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 sm:mb-4">
              Principais Características
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Recursos e funcionalidades incluídos neste serviço
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {service.features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-4 sm:pt-6 p-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-aws-orange/10 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-aws-orange" />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm sm:text-base">{feature}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 sm:mb-4">
              Benefícios para seu Negócio
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Como este serviço pode transformar sua operação
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {service.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 sm:gap-4">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-aws-orange flex-shrink-0 mt-0.5 sm:mt-1" />
                <p className="text-foreground text-sm sm:text-base leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 sm:mb-4">
              Nosso Processo
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Como implementamos este serviço de forma estruturada
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {service.process.map((step, index) => (
              <Card key={index} className="relative">
                <CardHeader className="p-4 sm:p-6">
                  <div className="flex items-start sm:items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-aws-orange text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base flex-shrink-0">
                      {step.step}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-foreground text-sm sm:text-base leading-tight">{step.title}</h3>
                      <p className="text-xs sm:text-sm text-aws-orange font-medium">{step.duration}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{step.description}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 sm:mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Tire suas dúvidas sobre {service.title.toLowerCase()}
            </p>
          </div>
          
          <div className="space-y-4 sm:space-y-6">
            {service.faq.map((item, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader className="p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 sm:mb-3 leading-tight">
                    {item.question}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    {item.answer}
                  </p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-aws-orange to-aws-orange-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Globe className="w-12 h-12 sm:w-16 sm:h-16 text-white mx-auto mb-4 sm:mb-6" />
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4 leading-tight">
            Pronto para começar?
          </h2>
          <p className="text-base sm:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto">
            Fale com nossos especialistas e descubra como podemos implementar {service.title.toLowerCase()} na sua empresa.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <CTAButtons />
          </div>
        </div>
      </section>
    </main>
  )
}
