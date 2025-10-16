import React from 'react';
import { motion } from 'framer-motion';
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
  ArrowRight,
  Sparkles
} from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'Performance Extrema',
      description: 'Carregamento ultrarrápido com otimizações avançadas e cache inteligente',
      color: 'from-emerald-400 to-emerald-600',
      gradient: 'from-emerald-500/10 to-teal-500/10'
    },
    {
      icon: Palette,
      title: 'Design Personalizado',
      description: 'Interface única que reflete a identidade da sua marca com perfeição',
      color: 'from-blue-400 to-blue-600',
      gradient: 'from-blue-500/10 to-cyan-500/10'
    },
    {
      icon: Smartphone,
      title: 'Mobile First',
      description: 'Experiência perfeita em qualquer dispositivo, do smartphone ao desktop',
      color: 'from-purple-400 to-purple-600',
      gradient: 'from-purple-500/10 to-pink-500/10'
    },
    {
      icon: Search,
      title: 'SEO Avançado',
      description: 'Estrutura otimizada para aparecer no topo dos resultados do Google',
      color: 'from-orange-400 to-orange-600',
      gradient: 'from-orange-500/10 to-amber-500/10'
    },
    {
      icon: Shield,
      title: 'Segurança Total',
      description: 'Proteção enterprise com SSL, backups automáticos e monitoramento 24/7',
      color: 'from-red-400 to-red-600',
      gradient: 'from-red-500/10 to-rose-500/10'
    },
    {
      icon: Headphones,
      title: 'Suporte Dedicado',
      description: 'Time especializado pronto para ajudar você a qualquer momento',
      color: 'from-teal-400 to-teal-600',
      gradient: 'from-teal-500/10 to-emerald-500/10'
    }
  ];

  const stats = [
    { icon: Users, value: '10k+', label: 'Clientes Ativos', color: 'text-emerald-500' },
    { icon: Globe, value: '50+', label: 'Países', color: 'text-blue-500' },
    { icon: Award, value: '99%', label: 'Satisfação', color: 'text-purple-500' },
    { icon: Clock, value: '24/7', label: 'Suporte', color: 'text-orange-500' }
  ];

  const technologies = [
    { 
      name: 'TypeScript', 
      description: 'Desenvolvimento type-safe com código mais confiável e manutenível',
      icon: '⚡',
      color: 'from-blue-500 to-blue-600'
    },
    { 
      name: 'Python', 
      description: 'Backend robusto com processamento eficiente e escalável',
      icon: '🐍',
      color: 'from-yellow-500 to-yellow-600'
    },
    { 
      name: 'React', 
      description: 'Interfaces modernas e interativas com performance excepcional',
      icon: '⚛️',
      color: 'from-cyan-500 to-cyan-600'
    },
    { 
      name: 'SQL', 
      description: 'Gerenciamento de dados seguro e otimizado para alta performance',
      icon: '💾',
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  return (
    <section id="recursos" className="relative py-24 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-200 to-teal-200 dark:from-emerald-900 dark:to-teal-900 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 12, repeat: Infinity, delay: 1 }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-200 to-purple-200 dark:from-blue-900 dark:to-purple-900 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full text-sm font-semibold mb-6"
          >
            <Sparkles size={16} className="mr-2" />
            Recursos Poderosos
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
            Tecnologia que{' '}
            <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
              Impulsiona Resultados
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Descubra as ferramentas e recursos que transformam sua presença digital em uma máquina de conversão
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`relative group bg-white dark:bg-gray-800 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 overflow-hidden`}
            >
              {/* Gradient Background on Hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
              
              <div className="relative z-10">
                <motion.div 
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 rounded-3xl p-12 mb-24 overflow-hidden"
        >
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }} />
          </div>

          <div className="relative z-10">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                Números que Falam por Si
              </h3>
              <p className="text-emerald-100 text-lg">
                Nossa trajetória de sucesso e crescimento
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center group cursor-pointer"
                >
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                    className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-all duration-300"
                  >
                    <stat.icon className="w-10 h-10 text-white" />
                  </motion.div>
                  <div className="text-4xl font-black text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-emerald-100 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4">
              Stack Tecnológico
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              As tecnologias mais modernas e confiáveis do mercado
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1]
                }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 overflow-hidden"
              >
                {/* Gradient Border Effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />
                
                <div className="relative z-10">
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                    {tech.name}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {tech.description}
                  </p>
                </div>

                {/* Code Icon Corner */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Code className="w-5 h-5 text-emerald-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative text-center bg-gradient-to-br from-gray-50 to-emerald-50 dark:from-gray-800 dark:to-emerald-900/20 rounded-3xl p-12 md:p-16 overflow-hidden"
        >
          {/* Decorative Elements */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-emerald-200/30 to-teal-200/30 rounded-full blur-3xl"
          />
          
          <div className="relative z-10">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart className="w-20 h-20 text-emerald-500 mx-auto mb-6" />
            </motion.div>
            
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4">
              Pronto para Decolar?
            </h3>
            
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Junte-se a milhares de empresas que transformaram sua presença digital com nossa plataforma
            </p>
            
            <motion.a
              href="#contato"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300 group"
            >
              Começar Agora
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;