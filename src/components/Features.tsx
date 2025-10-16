import React, { useState } from 'react';
import { 
  Zap, 
  Palette, 
  Smartphone, 
  Search, 
  Shield, 
  Headphones,
  Code,
  Globe,
  Users,
  Award,
  Clock,
  Heart,
  Sparkles,
  TrendingUp
} from 'lucide-react';

const Features = () => {
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [hoveredTech, setHoveredTech] = useState(null);

  const features = [
    {
      icon: Zap,
      title: 'Templates Profissionais',
      description: 'Mais de 100 templates cuidadosamente projetados por designers especialistas',
      color: 'from-emerald-400 to-emerald-600',
      bgGradient: 'from-emerald-500/10 to-emerald-600/5',
      stats: '100+ templates'
    },
    {
      icon: Palette,
      title: 'Personalização Total',
      description: 'Cores, fontes, layouts e conteúdo totalmente personalizáveis',
      color: 'from-blue-400 to-blue-600',
      bgGradient: 'from-blue-500/10 to-blue-600/5',
      stats: 'Ilimitado'
    },
    {
      icon: Smartphone,
      title: '100% Responsivo',
      description: 'Todos os templates funcionam perfeitamente em qualquer dispositivo',
      color: 'from-purple-400 to-purple-600',
      bgGradient: 'from-purple-500/10 to-purple-600/5',
      stats: 'Mobile-first'
    },
    {
      icon: Search,
      title: 'SEO Otimizado',
      description: 'Estrutura otimizada para mecanismos de busca desde o primeiro dia',
      color: 'from-amber-400 to-yellow-500',
      bgGradient: 'from-amber-500/10 to-yellow-500/5',
      stats: 'Top rankings'
    },
    {
      icon: Shield,
      title: 'Segurança Garantida',
      description: 'Código limpo e seguro seguindo as melhores práticas do mercado',
      color: 'from-red-400 to-red-600',
      bgGradient: 'from-red-500/10 to-red-600/5',
      stats: 'SSL incluso'
    },
    {
      icon: Headphones,
      title: 'Suporte Premium',
      description: 'Suporte técnico especializado para todos os nossos clientes',
      color: 'from-teal-400 to-teal-600',
      bgGradient: 'from-teal-500/10 to-teal-600/5',
      stats: '24/7 disponível'
    }
  ];

  const stats = [
    { 
      icon: Users, 
      value: '10.000+', 
      label: 'Clientes Satisfeitos',
      description: 'Em todo o mundo',
      color: { bg: 'from-blue-500 to-cyan-600' }
    },
    { 
      icon: Globe, 
      value: '50+', 
      label: 'Países Atendidos',
      description: 'Presença global',
      color: { bg: 'from-purple-500 to-pink-600' }
    },
    { 
      icon: Award, 
      value: '99%', 
      label: 'Taxa de Satisfação',
      description: 'Avaliações positivas',
      color: { bg: 'from-amber-400 to-yellow-500' }
    },
    { 
      icon: Clock, 
      value: '24/7', 
      label: 'Suporte Disponível',
      description: 'Sempre que precisar',
      color: { bg: 'from-emerald-500 to-teal-600' }
    }
  ];

  const technologies = [
    { 
      name: 'React', 
      description: 'Framework moderno para interfaces dinâmicas',
      color: 'from-cyan-400 to-blue-500',
      gradient: 'from-cyan-500/10 to-blue-500/10',
      icon: '⚛️'
    },
    { 
      name: 'TypeScript', 
      description: 'Código mais seguro e manutenível',
      color: 'from-blue-400 to-blue-600',
      gradient: 'from-blue-500/10 to-blue-600/10',
      icon: '📘'
    },
    { 
      name: 'Tailwind CSS', 
      description: 'Design system profissional',
      color: 'from-teal-400 to-cyan-500',
      gradient: 'from-teal-500/10 to-cyan-500/10',
      icon: '🎨'
    },
    { 
      name: 'Next.js', 
      description: 'Performance e SEO otimizados',
      color: 'from-slate-600 to-slate-800',
      gradient: 'from-slate-500/10 to-slate-700/10',
      icon: '▲'
    },
    { 
      name: 'Framer Motion', 
      description: 'Animações suaves e profissionais',
      color: 'from-pink-400 to-purple-500',
      gradient: 'from-pink-500/10 to-purple-500/10',
      icon: '✨'
    },
    { 
      name: 'Vercel', 
      description: 'Hospedagem rápida e confiável',
      color: 'from-slate-700 to-slate-900',
      gradient: 'from-slate-500/10 to-slate-800/10',
      icon: '▲'
    }
  ];

  return (
    <section id="recursos" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
        
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes slideRight {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(5px);
          }
        }
        
        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }
        
        .animate-float {
          animation: float 2s ease-in-out infinite;
        }
        
        .animate-pulse-custom {
          animation: pulse 2s ease-in-out infinite;
        }
        
        .animate-rotate {
          animation: rotate 0.4s ease-out;
        }
        
        .animate-slideRight {
          animation: slideRight 1.5s ease-in-out infinite;
        }
        
        .feature-card:hover .icon-container {
          transform: scale(1.05) rotate(3deg);
        }
        
        .feature-card:hover {
          transform: translateY(-4px);
        }
        
        .stat-card:hover {
          transform: translateY(-6px) scale(1.02);
        }
        
        .tech-card {
          position: relative;
          overflow: hidden;
        }
        
        .tech-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transition: left 0.5s;
        }
        
        .tech-card:hover::before {
          left: 100%;
        }
        
        .tech-card:hover {
          transform: translateY(-6px);
        }
        
        .tech-card:hover .tech-icon-emoji {
          transform: scale(1.2) rotate(10deg);
        }
        
        .tech-icon-emoji {
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .transition-all {
          transition: all 0.3s ease;
        }
        
        .glass-effect {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .dark .glass-effect {
          background: rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
      `}</style>

      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500 opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-flex items-center px-4 py-2 bg-emerald-500 bg-opacity-10 rounded-full mb-6">
            <Sparkles className="w-5 h-5 text-emerald-500 mr-2" />
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Recursos Premium</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Recursos que Fazem a{' '}
            <span className="bg-gradient-to-r from-emerald-500 to-emerald-600 bg-clip-text text-transparent">
              Diferença
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Descubra por que milhares de empresas escolhem nossos templates para criar sua presença digital
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {features.map((feature, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
              className="group relative feature-card transition-all"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} rounded-2xl transition-opacity duration-300 ${
                hoveredFeature === index ? 'opacity-100' : 'opacity-0'
              }`}></div>
              
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 border-2 border-gray-100 dark:border-gray-700 hover:border-transparent transition-all duration-200 shadow-lg hover:shadow-xl">
                <div className="relative">
                  <div className={`icon-container w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg relative overflow-hidden transition-all`}>
                    <div className="absolute inset-0 bg-white opacity-20 group-hover:scale-150 transition-transform duration-300"></div>
                    <feature.icon className="w-8 h-8 text-white relative z-10" />
                  </div>

                  <div className={`absolute -top-2 -right-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg transition-opacity ${hoveredFeature === index ? 'opacity-100' : 'opacity-0'}`}>
                    {feature.stats}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>

                <div className={`h-1 bg-gradient-to-r ${feature.color} rounded-full mt-6 transition-all duration-300 ${hoveredFeature === index ? 'w-full' : 'w-0'}`} />
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full mb-6">
              <TrendingUp className="w-5 h-5 text-emerald-500 mr-2" />
              <span className="text-gray-700 dark:text-gray-300 font-semibold">Crescimento Comprovado</span>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Números que{' '}
              <span className="bg-gradient-to-r from-emerald-500 to-emerald-600 bg-clip-text text-transparent">
                Impressionam
              </span>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Nossa trajetória de sucesso em números
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative stat-card transition-all"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color.bg} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300 blur-xl`}></div>
                
                <div className="relative text-center bg-white dark:bg-gray-800 rounded-2xl p-8 border-2 border-gray-100 dark:border-gray-700 shadow-lg group-hover:shadow-2xl transition-all duration-300">
                  <div className="animate-float">
                    <div className={`w-16 h-16 bg-gradient-to-br ${stat.color.bg} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color.bg} bg-clip-text text-transparent mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-900 dark:text-white font-semibold mb-1">
                    {stat.label}
                  </div>
                  <div className="text-gray-500 dark:text-gray-400 text-sm">
                    {stat.description}
                  </div>

                  <div className={`h-1 bg-gradient-to-r ${stat.color.bg} rounded-full mt-6`} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack - REESTRUTURADO */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-5 py-2.5 glass-effect rounded-full mb-6 shadow-lg">
              <Code className="w-5 h-5 text-emerald-500 mr-2" />
              <span className="text-gray-700 dark:text-gray-200 font-semibold tracking-wide">Stack Tecnológico</span>
            </div>

            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Tecnologias de{' '}
              <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
                Ponta
              </span>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Utilizamos as melhores tecnologias do mercado para garantir performance e qualidade excepcional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredTech(index)}
                onMouseLeave={() => setHoveredTech(null)}
                className="group relative tech-card transition-all duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${tech.gradient} rounded-2xl transition-all duration-300 ${
                  hoveredTech === index ? 'opacity-100' : 'opacity-0'
                }`}></div>

                <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-7 border-2 border-gray-100 dark:border-gray-700 hover:border-transparent shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                  <div className="flex items-start gap-5">
                    <div className={`tech-icon-emoji text-4xl flex items-center justify-center w-14 h-14 bg-gradient-to-br ${tech.color} rounded-xl shadow-xl`}>
                      <span className="text-2xl">{tech.icon}</span>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {tech.name}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        {tech.description}
                      </p>
                    </div>
                  </div>

                  <div className={`h-1.5 bg-gradient-to-r ${tech.color} rounded-full mt-5 transition-all duration-300 ${hoveredTech === index ? 'w-full opacity-100' : 'w-0 opacity-0'}`} />
                  
                  {/* Decorative corner */}
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${tech.color} opacity-5 rounded-bl-full transition-opacity duration-300 ${hoveredTech === index ? 'opacity-10' : 'opacity-0'}`}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Tech Stack Footer Note */}
          <div className="mt-12 text-center">
            <p className="text-gray-500 dark:text-gray-400 text-sm italic">
              Stack cuidadosamente selecionado para máxima eficiência, escalabilidade e performance
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-blue-500 opacity-5 rounded-3xl blur-3xl"></div>
          
          <div className="relative text-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-12 border-2 border-gray-200 dark:border-gray-700">
            <div className="animate-pulse-custom">
              <Heart className="w-16 h-16 text-emerald-500 mx-auto mb-6" />
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Pronto para Transformar sua Presença Digital?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Junte-se a milhares de empresas que já escolheram nossos templates para criar sites profissionais e impactantes
            </p>
            
            <a
              href="#contato"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-xl font-semibold text-lg hover:from-emerald-600 hover:to-emerald-700 transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Falar com Especialista
              <span className="ml-2 animate-slideRight">→</span>
            </a>

            <div className="mt-8 flex items-center justify-center space-x-8 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center">
                <Shield className="w-4 h-4 text-emerald-500 mr-2" />
                <span>Garantia de satisfação</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 text-emerald-500 mr-2" />
                <span>Resposta em 24h</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;