interface BreadcrumbItem {
  name: string
  url: string
}

interface FAQItem {
  question: string
  answer: string
}

interface StructuredDataProps {
  type: 'organization' | 'service' | 'faq' | 'breadcrumb' | 'localBusiness'
  data: BreadcrumbItem[] | FAQItem[] | Record<string, unknown>
}

export function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Loja de Pá",
          "url": "https://lojadepa.com.br",
          "logo": "https://lojadepa.com.br/logo.png",
          "description": "Consultoria especializada em AWS no Brasil. Soluções serverless, migração cloud e otimização de custos.",
          "foundingDate": "2024",
          "founder": {
            "@type": "Person",
            "name": "Equipe Loja de Pá"
          },
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "BR",
            "addressRegion": "São Paulo",
            "addressLocality": "São Paulo"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+55-11-99999-9999",
            "contactType": "sales",
            "email": "contato@lojadepa.com.br",
            "areaServed": "BR",
            "availableLanguage": "Portuguese"
          },
          "sameAs": [
            "https://linkedin.com/company/lojadepa",
            "https://instagram.com/lojadepa",
            "https://twitter.com/lojadepa"
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Serviços AWS",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Migração para AWS",
                  "description": "Transição segura e eficiente da sua infraestrutura para a nuvem AWS"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Arquitetura Serverless",
                  "description": "Desenvolvimento de soluções serverless escaláveis"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Segurança AWS",
                  "description": "Implementação de melhores práticas de segurança"
                }
              }
            ]
          }
        }

      case 'localBusiness':
        return {
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "Loja de Pá",
          "description": "Consultoria especializada em AWS no Brasil",
          "url": "https://lojadepa.com.br",
          "telephone": "+55-11-99999-9999",
          "email": "contato@lojadepa.com.br",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "BR",
            "addressRegion": "São Paulo",
            "addressLocality": "São Paulo"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "-23.5505",
            "longitude": "-46.6333"
          },
          "openingHours": "Mo-Fr 09:00-18:00",
          "priceRange": "$$",
          "serviceArea": {
            "@type": "Country",
            "name": "Brasil"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Serviços de Consultoria AWS"
          }
        }

      case 'breadcrumb':
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": (data as BreadcrumbItem[]).map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url
          }))
        }

      case 'faq':
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": (data as FAQItem[]).map((item) => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": item.answer
            }
          }))
        }

      default:
        return data
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData(), null, 2)
      }}
    />
  )
}
