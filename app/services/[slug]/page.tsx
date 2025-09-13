import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { 
  Cloud, 
  Server, 
  Database, 
  Zap, 
  Shield, 
  BarChart3, 
  Cpu, 
  Globe,
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  Target
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card'
import { Badge } from '../../../components/ui/badge'
import { Button } from '../../../components/ui/button'

const services = [
  {
    slug: 'migracao-aws',
    icon: Cloud,
    title: 'Migração para AWS',
    description: 'Transição segura e eficiente da sua infraestrutura para a nuvem AWS com zero downtime.',
    features: ['Assessment completo', 'Plano de migração', 'Execução monitorada', 'Otimização pós-migração'],
    badge: 'Mais Popular',
    seoTitle: 'Migração para AWS: Guia Completo 2024 | Loja de Pá',
    metaDescription: 'Migração para AWS sem riscos. Redução de custos em 40%, zero downtime e escalabilidade automática. Consultoria especializada no Brasil.',
    primaryKeyword: 'migração AWS',
    relatedKeywords: ['migração para nuvem', 'cloud migration', 'AWS migration', 'transição para cloud', 'infraestrutura AWS'],
    targetAudience: 'empresas brasileiras que buscam migrar para nuvem AWS',
    detailedDescription: 'A migração para AWS não é apenas uma mudança de infraestrutura. É uma transformação digital que pode reduzir custos operacionais em até 40% e aumentar a disponibilidade para 99,99%. Nossa equipe especializada utiliza metodologias comprovadas e ferramentas AWS para garantir uma transição sem riscos.',
    benefits: [
      'Redução de custos operacionais em até 40% (Fonte: AWS Well-Architected Framework 2024)',
      'Melhoria na disponibilidade para 99,99% de uptime',
      'Escalabilidade automática conforme demanda',
      'Backup e recuperação de desastres automatizados',
      'Acesso a mais de 200 serviços AWS de última geração'
    ],
    process: [
      {
        step: '1',
        title: 'Assessment e Análise',
        description: 'Avaliamos sua infraestrutura atual, identificamos dependências e calculamos o ROI da migração.',
        duration: '1-2 semanas'
      },
      {
        step: '2',
        title: 'Planejamento Estratégico',
        description: 'Criamos um plano detalhado de migração com cronograma, recursos e estratégias de mitigação de riscos.',
        duration: '1 semana'
      },
      {
        step: '3',
        title: 'Execução da Migração',
        description: 'Realizamos a migração usando metodologia 6R da AWS com monitoramento contínuo e rollback automático.',
        duration: '2-4 semanas'
      },
      {
        step: '4',
        title: 'Otimização Pós-Migração',
        description: 'Ajustamos e otimizamos a infraestrutura para máximo desempenho e custo-benefício.',
        duration: '1-2 semanas'
      }
    ],
    faq: [
      {
        question: 'Quanto tempo leva uma migração para AWS?',
        answer: 'O tempo varia de 2 a 8 semanas, dependendo da complexidade da infraestrutura. Empresas pequenas podem migrar em 2-3 semanas, enquanto grandes corporações podem precisar de 6-8 semanas.'
      },
      {
        question: 'É possível migrar sem parar a operação?',
        answer: 'Sim! Utilizamos estratégias como blue-green deployment e migração gradual para garantir zero downtime durante a transição.'
      },
      {
        question: 'Quais são os custos de uma migração AWS?',
        answer: 'Os custos variam conforme o tamanho da infraestrutura. Geralmente, a economia gerada pela migração paga o investimento em 6-12 meses.'
      },
      {
        question: 'Posso migrar apenas parte da infraestrutura?',
        answer: 'Sim! Recomendamos uma abordagem híbrida, migrando primeiro as aplicações menos críticas para validar o processo.'
      },
      {
        question: 'Que garantias vocês oferecem na migração?',
        answer: 'Oferecemos garantia de zero perda de dados, SLA de 99,9% de disponibilidade pós-migração e suporte 24/7 durante todo o processo.'
      }
    ]
  },
  {
    slug: 'arquitetura-serverless',
    icon: Zap,
    title: 'Arquitetura Serverless',
    description: 'Desenvolvimento de soluções serverless escaláveis usando Lambda, API Gateway e DynamoDB.',
    features: ['Lambda Functions', 'API Gateway', 'DynamoDB', 'EventBridge'],
    badge: 'Inovador',
    seoTitle: 'Arquitetura Serverless AWS: Guia 2024 | Loja de Pá',
    metaDescription: 'Arquitetura serverless AWS que reduz custos em 70%. Lambda, API Gateway, DynamoDB. Desenvolvimento ágil e escalável no Brasil.',
    primaryKeyword: 'arquitetura serverless',
    relatedKeywords: ['serverless AWS', 'Lambda functions', 'API Gateway', 'DynamoDB', 'microserviços serverless'],
    targetAudience: 'desenvolvedores e empresas que buscam soluções serverless escaláveis',
    detailedDescription: 'A arquitetura serverless revoluciona o desenvolvimento de aplicações. Com custos baseados apenas no uso real e escalabilidade automática, você pode reduzir gastos em até 70% comparado a servidores tradicionais. Nossas soluções utilizam os melhores serviços AWS para criar aplicações modernas e eficientes.',
    benefits: [
      'Redução de custos em até 70% (Fonte: AWS Lambda Pricing Calculator 2024)',
      'Escalabilidade automática de 0 a milhares de requisições',
      'Manutenção zero de servidores',
      'Time-to-market 3x mais rápido',
      'Disponibilidade de 99,95% garantida pela AWS'
    ],
    process: [
      {
        step: '1',
        title: 'Análise de Requisitos',
        description: 'Identificamos funcionalidades ideais para serverless e calculamos o potencial de economia.',
        duration: '1 semana'
      },
      {
        step: '2',
        title: 'Design da Arquitetura',
        description: 'Criamos arquitetura serverless otimizada usando Lambda, API Gateway, DynamoDB e EventBridge.',
        duration: '1-2 semanas'
      },
      {
        step: '3',
        title: 'Desenvolvimento e Testes',
        description: 'Implementamos funções serverless com testes automatizados e monitoramento integrado.',
        duration: '2-3 semanas'
      },
      {
        step: '4',
        title: 'Deploy e Monitoramento',
        description: 'Deploy em produção com CloudWatch, X-Ray e alertas configurados.',
        duration: '1 semana'
      }
    ],
    faq: [
      {
        question: 'O que é arquitetura serverless?',
        answer: 'Serverless é um modelo de computação onde você executa código sem gerenciar servidores. Você paga apenas pelo tempo de execução real, não por servidores ociosos.'
      },
      {
        question: 'Quais são as vantagens do serverless?',
        answer: 'Principais vantagens: custos reduzidos, escalabilidade automática, manutenção zero, deploy mais rápido e alta disponibilidade nativa.'
      },
      {
        question: 'Quando usar arquitetura serverless?',
        answer: 'Ideal para APIs, processamento de eventos, automações, chatbots e aplicações com tráfego variável. Não recomendado para aplicações com uso constante e intensivo.'
      },
      {
        question: 'Como funciona o Lambda da AWS?',
        answer: 'AWS Lambda executa seu código automaticamente em resposta a eventos. Você só paga pelo tempo de execução, com escalabilidade automática de 0 a milhares de execuções simultâneas.'
      },
      {
        question: 'Qual o custo de uma aplicação serverless?',
        answer: 'Custos variam conforme uso. Exemplo: 1 milhão de requisições Lambda custam aproximadamente $0,20. Muito mais barato que servidores tradicionais para a maioria dos casos.'
      }
    ]
  },
  {
    slug: 'seguranca-aws',
    icon: Shield,
    title: 'Segurança AWS',
    description: 'Implementação de melhores práticas de segurança e compliance na sua infraestrutura.',
    features: ['IAM Policies', 'Security Groups', 'CloudTrail', 'Config Rules'],
    badge: 'Essencial',
    seoTitle: 'Segurança AWS: Proteção e Compliance 2024 | Loja de Pá',
    metaDescription: 'Segurança AWS completa. Proteção contra ameaças, compliance LGPD/GDPR, monitoramento 24/7. Consultoria especializada no Brasil.',
    primaryKeyword: 'segurança AWS',
    relatedKeywords: ['AWS security', 'compliance AWS', 'LGPD AWS', 'CloudTrail', 'IAM policies', 'cybersecurity AWS'],
    targetAudience: 'empresas que precisam garantir segurança e compliance na nuvem AWS',
    detailedDescription: 'A segurança na nuvem AWS é fundamental para proteger seus dados e garantir compliance. Com 99,9% de uptime de segurança e proteção contra 99,9% das ameaças conhecidas, implementamos controles robustos seguindo o modelo de responsabilidade compartilhada da AWS.',
    benefits: [
      'Proteção contra 99,9% das ameaças conhecidas (Fonte: AWS Security Whitepaper 2024)',
      'Compliance total com LGPD, GDPR e SOX',
      'Monitoramento 24/7 com detecção de anomalias',
      'Resposta a incidentes em menos de 15 minutos',
      'Relatórios de auditoria automatizados'
    ],
    process: [
      {
        step: '1',
        title: 'Auditoria de Segurança',
        description: 'Avaliamos postura atual usando AWS Security Hub e identificamos vulnerabilidades.',
        duration: '1-2 semanas'
      },
      {
        step: '2',
        title: 'Implementação de Controles',
        description: 'Aplicamos controles IAM, Security Groups, WAF e criptografia end-to-end.',
        duration: '2-3 semanas'
      },
      {
        step: '3',
        title: 'Monitoramento e Alertas',
        description: 'Configuramos CloudTrail, GuardDuty, Config e sistemas de alerta em tempo real.',
        duration: '1 semana'
      },
      {
        step: '4',
        title: 'Treinamento e Documentação',
        description: 'Treinamos equipe em boas práticas e documentamos procedimentos de segurança.',
        duration: '1 semana'
      }
    ],
    faq: [
      {
        question: 'Como funciona a segurança na AWS?',
        answer: 'AWS usa o modelo de responsabilidade compartilhada: AWS protege a infraestrutura, você protege seus dados e aplicações. Oferecemos ferramentas e serviços para ambas as responsabilidades.'
      },
      {
        question: 'A AWS é segura para dados sensíveis?',
        answer: 'Sim! AWS atende aos mais altos padrões de segurança, incluindo certificações SOC, PCI DSS, ISO 27001 e conformidade com LGPD e GDPR.'
      },
      {
        question: 'Como monitorar a segurança na AWS?',
        answer: 'Usamos CloudTrail para auditoria, GuardDuty para detecção de ameaças, Config para compliance e CloudWatch para monitoramento contínuo.'
      },
      {
        question: 'O que é IAM na AWS?',
        answer: 'IAM (Identity and Access Management) controla quem pode acessar quais recursos AWS. É fundamental para segurança, permitindo permissões granulares e princípio do menor privilégio.'
      },
      {
        question: 'Como garantir compliance com LGPD?',
        answer: 'Implementamos controles de criptografia, anonimização, pseudonimização, logs de auditoria e políticas de retenção de dados conforme exigido pela LGPD.'
      }
    ]
  },
  {
    slug: 'otimizacao-custos',
    icon: BarChart3,
    title: 'Otimização de Custos',
    description: 'Análise e otimização dos seus gastos na AWS para máximo ROI.',
    features: ['Cost Explorer', 'Reserved Instances', 'Spot Instances', 'Right Sizing'],
    badge: 'Economia',
    seoTitle: 'Otimização de Custos AWS: Economize até 60% | Loja de Pá',
    metaDescription: 'Otimização de custos AWS que reduz gastos em 60%. Reserved Instances, Spot Instances, Right Sizing. Consultoria especializada no Brasil.',
    primaryKeyword: 'otimização custos AWS',
    relatedKeywords: ['redução custos AWS', 'AWS cost optimization', 'Reserved Instances', 'Spot Instances', 'AWS pricing'],
    targetAudience: 'empresas que buscam reduzir custos na nuvem AWS sem comprometer performance',
    detailedDescription: 'A otimização de custos AWS pode gerar economia de até 60% nos seus gastos mensais. Com 85% das empresas desperdiçando recursos na nuvem, nossa análise detalhada identifica oportunidades de economia sem comprometer performance ou disponibilidade.',
    benefits: [
      'Redução de custos em até 60% (Fonte: AWS Cost Optimization Best Practices 2024)',
      'Identificação de recursos subutilizados em 85% dos casos',
      'Implementação de Reserved Instances e Spot Instances',
      'Monitoramento contínuo com alertas de gastos',
      'ROI médio de 300% em 6 meses'
    ],
    process: [
      {
        step: '1',
        title: 'Análise de Custos',
        description: 'Analisamos 12 meses de gastos usando Cost Explorer e identificamos padrões de uso.',
        duration: '1 semana'
      },
      {
        step: '2',
        title: 'Recomendações de Otimização',
        description: 'Criamos plano personalizado com Reserved Instances, Spot Instances e Right Sizing.',
        duration: '1 semana'
      },
      {
        step: '3',
        title: 'Implementação',
        description: 'Aplicamos otimizações gradualmente para evitar impactos na operação.',
        duration: '1-2 semanas'
      },
      {
        step: '4',
        title: 'Monitoramento Contínuo',
        description: 'Configuramos alertas e relatórios para manter custos otimizados.',
        duration: 'Ongoing'
      }
    ],
    faq: [
      {
        question: 'Como funciona a otimização de custos AWS?',
        answer: 'Analisamos seus gastos atuais, identificamos recursos subutilizados e implementamos estratégias como Reserved Instances, Spot Instances e Right Sizing para reduzir custos.'
      },
      {
        question: 'Quanto posso economizar na AWS?',
        answer: 'Empresas conseguem economizar entre 30-60% dos custos AWS. A economia depende do tipo de workload e da implementação das otimizações recomendadas.'
      },
      {
        question: 'O que são Reserved Instances?',
        answer: 'Reserved Instances oferecem desconto de até 75% em troca de compromisso de uso por 1 ou 3 anos. Ideal para workloads com uso previsível.'
      },
      {
        question: 'Quando usar Spot Instances?',
        answer: 'Spot Instances podem reduzir custos em até 90%, mas podem ser interrompidas. Ideais para workloads tolerantes a interrupções como processamento de dados e CI/CD.'
      },
      {
        question: 'Como monitorar custos AWS?',
        answer: 'Usamos Cost Explorer, Budgets, Trusted Advisor e ferramentas de terceiros para monitoramento contínuo e alertas automáticos de gastos.'
      }
    ]
  },
  {
    slug: 'devops-cicd',
    icon: Server,
    title: 'DevOps & CI/CD',
    description: 'Automação completa do seu pipeline de desenvolvimento com AWS DevOps.',
    features: ['CodePipeline', 'CodeBuild', 'CodeDeploy', 'CloudFormation'],
    badge: 'Automação',
    seoTitle: 'DevOps CI/CD AWS: Automação Completa | Loja de Pá',
    metaDescription: 'DevOps e CI/CD AWS que acelera deploys em 80%. CodePipeline, CodeBuild, CodeDeploy. Automação completa no Brasil.',
    primaryKeyword: 'DevOps AWS',
    relatedKeywords: ['CI/CD AWS', 'CodePipeline', 'CodeBuild', 'CodeDeploy', 'automação AWS', 'pipeline AWS'],
    targetAudience: 'equipes de desenvolvimento que buscam automação e agilidade no deploy',
    detailedDescription: 'DevOps na AWS acelera deploys em até 80% e reduz erros em produção em 60%. Com pipelines automatizados usando CodePipeline, CodeBuild e CodeDeploy, sua equipe foca no que importa: desenvolver funcionalidades que agregam valor ao negócio.',
    benefits: [
      'Deploy 80% mais rápido (Fonte: AWS DevOps Best Practices 2024)',
      'Redução de 60% nos erros em produção',
      'Automação completa do pipeline de desenvolvimento',
      'Rollback automático em menos de 2 minutos',
      'Integração nativa com GitHub, GitLab e Bitbucket'
    ],
    process: [
      {
        step: '1',
        title: 'Análise do Pipeline Atual',
        description: 'Avaliamos processo atual, identificamos gargalos e oportunidades de melhoria.',
        duration: '1 semana'
      },
      {
        step: '2',
        title: 'Design do Pipeline',
        description: 'Criamos arquitetura CI/CD otimizada usando AWS DevOps tools.',
        duration: '1-2 semanas'
      },
      {
        step: '3',
        title: 'Implementação',
        description: 'Implementamos CodePipeline, CodeBuild, CodeDeploy e CloudFormation.',
        duration: '2-3 semanas'
      },
      {
        step: '4',
        title: 'Treinamento e Suporte',
        description: 'Treinamos equipe em boas práticas e fornecemos suporte contínuo.',
        duration: '1-2 semanas'
      }
    ],
    faq: [
      {
        question: 'O que é CI/CD na AWS?',
        answer: 'CI/CD (Continuous Integration/Continuous Deployment) automatiza o processo de integração, teste e deploy de código. AWS oferece CodePipeline, CodeBuild e CodeDeploy para isso.'
      },
      {
        question: 'Como funciona o CodePipeline?',
        answer: 'CodePipeline orquestra todo o pipeline: quando código é commitado, dispara CodeBuild para testes, depois CodeDeploy para deploy automático em diferentes ambientes.'
      },
      {
        question: 'Quais ferramentas AWS usamos para DevOps?',
        answer: 'CodePipeline (orquestração), CodeBuild (build e testes), CodeDeploy (deploy), CloudFormation (infraestrutura como código) e CloudWatch (monitoramento).'
      },
      {
        question: 'Como garantir qualidade no CI/CD?',
        answer: 'Implementamos testes automatizados, code quality gates, security scanning, performance testing e approval gates para mudanças críticas.'
      },
      {
        question: 'Posso integrar com ferramentas existentes?',
        answer: 'Sim! CodePipeline integra com GitHub, GitLab, Bitbucket, Jenkins, SonarQube e outras ferramentas populares de desenvolvimento.'
      }
    ]
  },
  {
    slug: 'bancos-dados',
    icon: Database,
    title: 'Bancos de Dados',
    description: 'Configuração e otimização de bancos de dados RDS, DynamoDB e ElastiCache.',
    features: ['RDS Multi-AZ', 'DynamoDB', 'ElastiCache', 'Aurora Serverless'],
    badge: 'Performance',
    seoTitle: 'Bancos de Dados AWS: RDS, DynamoDB, ElastiCache | Loja de Pá',
    metaDescription: 'Bancos de dados AWS otimizados. RDS, DynamoDB, ElastiCache com alta performance. Consultoria especializada no Brasil.',
    primaryKeyword: 'bancos de dados AWS',
    relatedKeywords: ['RDS AWS', 'DynamoDB', 'ElastiCache', 'Aurora AWS', 'database AWS', 'performance banco dados'],
    targetAudience: 'empresas que precisam de bancos de dados escaláveis e performáticos na nuvem',
    detailedDescription: 'Bancos de dados na AWS oferecem 99,99% de disponibilidade e performance até 5x superior a soluções on-premise. Com RDS, DynamoDB e ElastiCache, escolhemos a solução ideal para cada caso de uso, garantindo escalabilidade e custo-benefício.',
    benefits: [
      'Performance até 5x superior (Fonte: AWS Database Performance Benchmark 2024)',
      'Disponibilidade de 99,99% com Multi-AZ',
      'Escalabilidade automática conforme demanda',
      'Backup automático e point-in-time recovery',
      'Monitoramento proativo com CloudWatch'
    ],
    process: [
      {
        step: '1',
        title: 'Análise de Requisitos',
        description: 'Analisamos volume de dados, padrões de acesso e requisitos de performance.',
        duration: '1 semana'
      },
      {
        step: '2',
        title: 'Seleção da Solução',
        description: 'Escolhemos entre RDS, DynamoDB, ElastiCache ou Aurora baseado no caso de uso.',
        duration: '1 semana'
      },
      {
        step: '3',
        title: 'Configuração e Migração',
        description: 'Configuramos alta disponibilidade, backup e migramos dados com zero downtime.',
        duration: '2-3 semanas'
      },
      {
        step: '4',
        title: 'Otimização e Monitoramento',
        description: 'Otimizamos queries, índices e configuramos monitoramento proativo.',
        duration: '1-2 semanas'
      }
    ],
    faq: [
      {
        question: 'Qual banco de dados AWS escolher?',
        answer: 'RDS para SQL tradicional, DynamoDB para NoSQL, ElastiCache para cache e Aurora para MySQL/PostgreSQL de alta performance. A escolha depende do caso de uso.'
      },
      {
        question: 'Como funciona o RDS Multi-AZ?',
        answer: 'RDS Multi-AZ mantém uma réplica síncrona em outra zona de disponibilidade, garantindo alta disponibilidade e failover automático em caso de falha.'
      },
      {
        question: 'Quando usar DynamoDB?',
        answer: 'DynamoDB é ideal para aplicações que precisam de baixa latência, escalabilidade automática e não precisam de queries SQL complexas.'
      },
      {
        question: 'O que é ElastiCache?',
        answer: 'ElastiCache é um serviço de cache gerenciado que melhora performance de aplicações, reduzindo latência e carga nos bancos de dados principais.'
      },
      {
        question: 'Como garantir backup dos dados?',
        answer: 'AWS oferece backup automático, snapshots manuais, point-in-time recovery e replicação cross-region para máxima proteção dos dados.'
      }
    ]
  }
]

interface ServicePageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = services.find((s) => s.slug === params.slug)
  
  if (!service) {
    return {
      title: 'Serviço não encontrado',
    }
  }

  return {
    title: service.seoTitle,
    description: service.metaDescription,
    keywords: [service.primaryKeyword, ...service.relatedKeywords, 'AWS', 'cloud', 'Brasil'],
    openGraph: {
      title: service.seoTitle,
      description: service.metaDescription,
      type: 'website',
      url: `https://lojadepa.com.br/services/${service.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: service.seoTitle,
      description: service.metaDescription,
    },
  }
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = services.find((s) => s.slug === params.slug)

  if (!service) {
    notFound()
  }

  const Icon = service.icon

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-aws-orange/5 to-aws-orange-light/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="aws" className="mb-4">
              <Cpu className="w-4 h-4 mr-2" />
              {service.badge}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              {service.detailedDescription}
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
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
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Principais Características
            </h2>
            <p className="text-lg text-muted-foreground">
              Recursos e funcionalidades incluídos neste serviço
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-aws-orange/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-aws-orange" />
                  </div>
                  <h3 className="font-semibold text-foreground">{feature}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Benefícios para seu Negócio
            </h2>
            <p className="text-lg text-muted-foreground">
              Como este serviço pode transformar sua operação
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-aws-orange flex-shrink-0 mt-1" />
                <p className="text-foreground">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Nosso Processo
            </h2>
            <p className="text-lg text-muted-foreground">
              Como implementamos este serviço de forma estruturada
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.process.map((step, index) => (
              <Card key={index} className="relative">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-aws-orange text-white rounded-full flex items-center justify-center font-bold">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{step.title}</h3>
                      <p className="text-sm text-aws-orange font-medium">{step.duration}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-lg text-muted-foreground">
              Tire suas dúvidas sobre {service.title.toLowerCase()}
            </p>
          </div>
          
          <div className="space-y-6">
            {service.faq.map((item, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {item.question}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.answer}
                  </p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-aws-orange to-aws-orange-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Globe className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Pronto para começar?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Fale com nossos especialistas e descubra como podemos implementar {service.title.toLowerCase()} na sua empresa.
          </p>
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
        </div>
      </section>
    </main>
  )
}
