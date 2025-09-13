"use client"

import { motion } from "framer-motion"
import {
  MapPin,
  Clock,
  MessageSquare
} from "lucide-react"
import { Button } from "../ui/button"
import { Badge } from "../ui/badge"

export function Contact() {

  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-aws-blue via-aws-blue-dark to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Badge variant="outline" className="mb-4 text-aws-orange border-aws-orange">
            <MessageSquare className="w-4 h-4 mr-2" />
            Entre em Contato
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Vamos Conversar sobre seu <span className="text-aws-orange">Projeto</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Agende uma consulta gratuita e descubra como podemos impulsionar seu negócio com soluções AWS.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-white text-center">
              <h3 className="text-3xl font-bold mb-8 text-aws-orange">Fale Conosco</h3>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 bg-aws-orange/20 rounded-lg mb-4">
                    <MessageSquare className="w-8 h-8 text-aws-orange" />
                  </div>
                  <h4 className="font-semibold text-xl mb-2">WhatsApp</h4>
                  <p className="text-gray-300 text-lg">+55 (13) 98869-1415</p>
                  <p className="text-sm text-gray-400">Resposta rápida</p>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="p-4 bg-aws-orange/20 rounded-lg mb-4">
                    <Clock className="w-8 h-8 text-aws-orange" />
                  </div>
                  <h4 className="font-semibold text-xl mb-2">Horário</h4>
                  <p className="text-gray-300">Segunda à Sexta</p>
                  <p className="text-gray-300">9h às 18h</p>
                  <p className="text-sm text-gray-400">GMT-3</p>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="p-4 bg-aws-orange/20 rounded-lg mb-4">
                    <MapPin className="w-8 h-8 text-aws-orange" />
                  </div>
                  <h4 className="font-semibold text-xl mb-2">Localização</h4>
                  <p className="text-gray-300">São Paulo, Brasil</p>
                  <p className="text-sm text-gray-400">Atendimento remoto</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <Button
                size="lg"
                className="bg-aws-orange hover:bg-aws-orange/90 text-white text-lg px-8 py-4 h-auto"
                onClick={() => window.open('https://wa.me/5513988691415', '_blank')}
              >
                <MessageSquare className="w-6 h-6 mr-3" />
                Falar no WhatsApp
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}