import { Hero } from "../components/sections/hero"
import { Services } from "../components/sections/services"
import { Contact } from "../components/sections/contact"
import { Footer } from "../components/sections/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Loja de Pá",
            "description": "Consultoria especializada em AWS no Brasil. Soluções serverless personalizadas, migração para cloud e otimização de custos.",
            "url": "https://lojadepa.com.br",
            "logo": "https://lojadepa.com.br/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+55-11-99999-9999",
              "contactType": "sales",
              "email": "contato@lojadepa.com.br",
              "areaServed": "BR",
              "availableLanguage": "Portuguese"
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "São Paulo",
              "addressCountry": "BR"
            },
            "sameAs": [
              "https://linkedin.com/company/lojadepa",
              "https://instagram.com/lojadepa"
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
          })
        }}
      />

      {/* Hero Section */}
      <Hero />
      
      {/* Services Section */}
      <Services />
      
      {/* Contact Section */}
      <Contact />
      
      {/* Footer */}
      <Footer />
    </main>
  );
}
