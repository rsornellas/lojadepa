"use client"

import { motion } from "framer-motion"
import { Cloud, Zap, Shield, TrendingUp } from "lucide-react"
import { Button } from "../ui/button"
import { Badge } from "../ui/badge"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-aws-blue via-aws-blue-dark to-slate-900 pt-8 pb-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>
      
      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-20 text-aws-orange/20"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <Cloud size={60} />
      </motion.div>
      <motion.div
        className="absolute top-40 right-32 text-aws-orange/20"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
      >
        <Zap size={40} />
      </motion.div>
      <motion.div
        className="absolute bottom-40 left-32 text-aws-orange/20"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: 2 }}
      >
        <Shield size={50} />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Badge variant="outline" className="mb-6 text-aws-orange border-aws-orange">
            <TrendingUp className="w-4 h-4 mr-2" />
            Especialistas em Cloud Computing
          </Badge>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="block">Loja de Pá</span>
          <span className="block text-aws-orange">Seu crescimento</span>
          <span className="block">começa com a</span>
          <span className="block text-aws-orange">ferramenta certa</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Especialistas em soluções personalizadas <span className="text-aws-orange font-semibold">serverless</span> utilizando 
          tecnologias AWS. <span className="text-white font-semibold">Escalabilidade, eficiência e inovação</span> adaptadas 
          às necessidades do seu negócio.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button 
            size="lg" 
            className="text-lg px-8 py-4 font-semibold shadow-2xl hover:shadow-aws-orange/25 transition-all duration-300"
            onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Zap className="w-5 h-5 mr-2" />
            Solicite uma Consulta Gratuita
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="text-lg px-8 py-4 font-semibold border-white text-white hover:bg-white hover:text-aws-blue transition-all duration-300"
            onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Conhecer Nossos Serviços
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-12 border-t border-white/20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-aws-orange">99.9%</div>
            <div className="text-gray-300">Uptime Garantido</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-aws-orange">50+</div>
            <div className="text-gray-300">Projetos Entregues</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-aws-orange">24/7</div>
            <div className="text-gray-300">Suporte Especializado</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}