"use client"

import { motion } from "framer-motion"
import { 
  Cloud, 
  Server, 
  Database, 
  Zap, 
  Shield, 
  BarChart3, 
  Cpu, 
  Globe,
  ArrowRight 
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"

const services = [
  {
    icon: Cloud,
    title: "Migração para AWS",
    description: "Transição segura e eficiente da sua infraestrutura para a nuvem AWS com zero downtime.",
    features: ["Assessment completo", "Plano de migração", "Execução monitorada", "Otimização pós-migração"],
    badge: "Mais Popular",
    slug: "migracao-aws"
  },
  {
    icon: Zap,
    title: "Arquitetura Serverless",
    description: "Desenvolvimento de soluções serverless escaláveis usando Lambda, API Gateway e DynamoDB.",
    features: ["Lambda Functions", "API Gateway", "DynamoDB", "EventBridge"],
    badge: "Inovador",
    slug: "arquitetura-serverless"
  },
  {
    icon: Shield,
    title: "Segurança AWS",
    description: "Implementação de melhores práticas de segurança e compliance na sua infraestrutura.",
    features: ["IAM Policies", "Security Groups", "CloudTrail", "Config Rules"],
    badge: "Essencial",
    slug: "seguranca-aws"
  },
  {
    icon: BarChart3,
    title: "Otimização de Custos",
    description: "Análise e otimização dos seus gastos na AWS para máximo ROI.",
    features: ["Cost Explorer", "Reserved Instances", "Spot Instances", "Right Sizing"],
    badge: "Economia",
    slug: "otimizacao-custos"
  },
  {
    icon: Server,
    title: "DevOps & CI/CD",
    description: "Automação completa do seu pipeline de desenvolvimento com AWS DevOps.",
    features: ["CodePipeline", "CodeBuild", "CodeDeploy", "CloudFormation"],
    badge: "Automação",
    slug: "devops-cicd"
  },
  {
    icon: Database,
    title: "Bancos de Dados",
    description: "Configuração e otimização de bancos de dados RDS, DynamoDB e ElastiCache.",
    features: ["RDS Multi-AZ", "DynamoDB", "ElastiCache", "Aurora Serverless"],
    badge: "Performance",
    slug: "bancos-dados"
  }
]

export function Services() {
  return (
    <section id="servicos" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Badge variant="aws" className="mb-4">
            <Cpu className="w-4 h-4 mr-2" />
            Nossos Serviços AWS
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Soluções <span className="text-aws-orange">Completas</span> para sua Jornada na Nuvem
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Do planejamento à implementação, oferecemos serviços especializados para acelerar 
            sua transformação digital com tecnologias AWS.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full group hover:shadow-lg hover:shadow-aws-orange/10 transition-all duration-300 hover:-translate-y-1 border-2 hover:border-aws-orange/20">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 bg-aws-orange/10 rounded-lg group-hover:bg-aws-orange/20 transition-colors">
                        <Icon className="w-6 h-6 text-aws-orange" />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {service.badge}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl group-hover:text-aws-orange transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-aws-orange rounded-full mr-3" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <Button 
                      variant="ghost" 
                      className="w-full group-hover:bg-aws-orange/10 group-hover:text-aws-orange transition-all"
                      onClick={() => {
                        window.location.href = `/services/${service.slug}`
                      }}
                    >
                      Saiba Mais
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-aws-orange to-aws-orange-light p-8 rounded-2xl text-white">
            <Globe className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Pronto para Transformar seu Negócio?</h3>
            <p className="text-lg mb-6 opacity-90">
              Fale com nossos especialistas e descubra como podemos acelerar sua jornada na nuvem.
            </p>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-aws-orange font-semibold"
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Agendar Consulta Gratuita
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}