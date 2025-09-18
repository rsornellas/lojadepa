"use client"

import { Button } from "./button"
import { useRouter } from "next/navigation"

export function CTAButtons() {
  const router = useRouter()

  const handleScheduleConsultation = () => {
    // Check if we're on the home page
    if (window.location.pathname === '/') {
      // If on home page, scroll to contact section
      document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })
    } else {
      // If on service page, navigate to home page and then scroll to contact
      router.push('/#contato')
    }
  }

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button 
        size="lg"
        className="bg-white text-aws-orange hover:bg-white/90 font-semibold"
        onClick={handleScheduleConsultation}
      >
        Agendar Consulta Gratuita
      </Button>
      <Button 
        variant="outline" 
        size="lg"
        className="border-white text-white hover:bg-white hover:text-aws-orange font-semibold"
        onClick={() => window.history.back()}
      >
        Voltar aos Serviços
      </Button>
    </div>
  )
}
