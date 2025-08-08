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
  Heart
} from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'Templates Profissionais',
      description: 'Mais de 100 templates cuidadosamente projetados por designers especialistas',
      color: 'from-emerald-400 to-emerald-600'
    },
    {
      icon: Palette,
      title: 'Personalização Total',
      description: 'Cores, fontes, layouts e conteúdo totalmente personalizáveis',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Smartphone,
      title: '100% Responsivo',
      description: 'Todos os templates funcionam perfeitamente em qualquer dispositivo',
      color: 'from-purple-400 to-purple-600'
    },
    {
      icon: Search,
      title: 'SEO Otimizado',
      description: 'Estrutura otimizada para mecanismos de busca desde o primeiro dia',
      color: 'from-orange-400 to-orange-600'
    },
    {
      icon: Shield,
      title: 'Segurança Garantida',
      description: 'Código limpo e seguro seguindo as melhores práticas do mercado',
      color: 'from-red-400 to-red-600'
    },
    {
      icon: Headphones,
      title: 'Suporte Premium',
      description: 'Suporte técnico especializado para todos os nossos clientes',
      color: 'from-teal-400 to-teal-600'
    }
  ];

  const stats = [
    { icon: Users, value: '10.000+', label: 'Clientes Satisfeitos' },
    { icon: Globe, value: '50+', label: 'Países Atendidos' },
    { icon: Award, value: '99%', label: 'Taxa de Satisfação' },
    { icon: Clock, value: '24/7', label: 'Suporte Disponível' }
  ];

  const technologies = [
    { name: 'React', description: 'Framework moderno para interfaces dinâmicas' },
    { name: 'TypeScript', description: 'Código mais seguro e manutenível' },
    { name: 'Tailwind CSS', description: 'Design system profissional' },
    { name: 'Next.js', description: 'Performance e SEO otimizados' },
    { name: 'Framer Motion', description: 'Animações suaves e profissionais' },
    { name: 'Vercel', description: 'Hospedagem rápida e confiável' }
  ];

  return (
    <section id="recursos" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Recursos que Fazem a Diferença
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Descubra por que milhares de empresas escolhem nossos templates para criar sua presença digital
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-3xl p-12 mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Números que Impressionam
            </h3>
            <p className="text-emerald-100 text-lg">
              Nossa trajetória de sucesso em números
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-emerald-100">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Tecnologias de Ponta
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-12">
            Utilizamos as melhores tecnologias do mercado para garantir performance e qualidade
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <Code className="w-6 h-6 text-emerald-500" />
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {tech.name}
                  </h4>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {tech.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-gray-50 dark:bg-gray-800 rounded-3xl p-12"
        >
          <Heart className="w-16 h-16 text-emerald-500 mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Pronto para Transformar sua Presença Digital?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de empresas que já escolheram nossos templates para criar sites profissionais e impactantes
          </p>
          <motion.a
            href="#contato"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-xl font-semibold text-lg hover:from-emerald-600 hover:to-emerald-700 transition-all duration-200 shadow-lg hover:shadow-emerald-500/25"
          >
            Falar com Especialista
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;