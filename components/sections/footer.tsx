"use client"

import { motion } from "framer-motion"
import {
  Instagram,
  Linkedin,
  MessageSquare,
  MapPin,
  Cloud,
  ArrowUp
} from "lucide-react"
import { Button } from "../ui/button"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-aws-blue-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <Cloud className="w-8 h-8 text-aws-orange mr-3" />
              <span className="text-2xl font-bold">Loja de Pá</span>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Seu crescimento começa com a ferramenta certa. Especialistas em soluções 
              personalizadas serverless utilizando tecnologias AWS.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://instagram.com/lojadepa"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-aws-orange/10 rounded-lg text-aws-orange hover:bg-aws-orange hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </motion.a>
              <motion.a
                href="https://linkedin.com/company/lojadepa"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-aws-orange/10 rounded-lg text-aws-orange hover:bg-aws-orange hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </motion.a>
              <motion.a
                href="https://wa.me/5513988691415"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-aws-orange/10 rounded-lg text-aws-orange hover:bg-aws-orange hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageSquare size={20} />
                <span className="sr-only">WhatsApp</span>
              </motion.a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-aws-orange mb-4">Serviços</h4>
            <ul className="space-y-3">
              <li>
                <a href="#servicos" className="text-gray-300 hover:text-aws-orange transition-colors">
                  Migração AWS
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-300 hover:text-aws-orange transition-colors">
                  Arquitetura Serverless
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-300 hover:text-aws-orange transition-colors">
                  Segurança AWS
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-300 hover:text-aws-orange transition-colors">
                  Otimização de Custos
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-300 hover:text-aws-orange transition-colors">
                  DevOps & CI/CD
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-300 hover:text-aws-orange transition-colors">
                  Bancos de Dados
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-aws-orange mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <MessageSquare className="w-4 h-4 mr-3 text-aws-orange" />
                <span className="text-sm">+55 (13) 98869-1415</span>
              </div>
              <div className="flex items-start text-gray-300">
                <MapPin className="w-4 h-4 mr-3 mt-0.5 text-aws-orange flex-shrink-0" />
                <div className="text-sm">
                  <p>São Paulo, Brasil</p>
                  <p className="text-xs text-gray-400">Atendimento remoto nacional</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-6">
              <Button
                variant="outline"
                size="sm"
                className="border-aws-orange text-aws-orange hover:bg-aws-orange hover:text-white"
                onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Solicitar Consulta
              </Button>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="text-center max-w-2xl mx-auto">
            <h4 className="text-lg font-semibold text-aws-orange mb-2">
              Pronto para começar?
            </h4>
            <p className="text-gray-300 text-sm mb-6">
              Entre em contato conosco via WhatsApp e descubra como podemos ajudar seu negócio.
            </p>
            <Button
              size="lg"
              className="bg-aws-orange hover:bg-aws-orange/90 text-white"
              onClick={() => window.open('https://wa.me/5513988691415', '_blank')}
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Conversar no WhatsApp
            </Button>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">
              © 2024 Loja de Pá. Todos os direitos reservados.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Especialistas em Cloud Computing
            </p>
          </div>
          
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="text-gray-400 hover:text-aws-orange p-2"
            >
              <ArrowUp size={16} />
              <span className="sr-only">Voltar ao topo</span>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}