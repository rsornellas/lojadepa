import { Hero } from "../components/sections/hero"
import { Services } from "../components/sections/services"
import { Contact } from "../components/sections/contact"
import { Footer } from "../components/sections/footer"
import { StructuredData } from "../components/seo/structured-data"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Organization Structured Data */}
      <StructuredData type="organization" data={{}} />
      
      {/* Local Business Structured Data */}
      <StructuredData type="localBusiness" data={{}} />

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
