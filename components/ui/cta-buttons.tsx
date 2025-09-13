"use client"

import { Button } from "./button"

export function CTAButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button 
        size="lg"
        className="bg-white text-aws-orange hover:bg-white/90 font-semibold"
        onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
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
