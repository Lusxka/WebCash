import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, Star, Users, Zap } from 'lucide-react';
import { templates } from '../data/templates';

const Hero: React.FC = () => {
  const [currentTemplate, setCurrentTemplate] = useState(0);
  const featuredTemplates = templates.filter(t => t.featured);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTemplate((prev) => (prev + 1) % featuredTemplates.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [featuredTemplates.length]);

  const stats = [
    { icon: Users, value: '10k+', label: 'Sites Criados' },
    { icon: Star, value: '4.9', label: 'Avaliação' },
    { icon: Zap, value: '< 1min', label: 'Para Criar' }
  ];

  return (
    <section id="inicio" className="relative min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-200/30 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full text-sm font-medium"
              >
                <Zap size={16} className="mr-2" />
                Novo: IA para personalização automática
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
              >
                Lance seu site com{' '}
                <span className="bg-gradient-to-r from-emerald-500 to-emerald-600 bg-clip-text text-transparent">
                  1 clique
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-600 dark:text-gray-300 max-w-lg"
              >
                Templates profissionais, customização intuitiva e hospedagem gratuita. 
                Tudo que você precisa para ter presença digital em minutos.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-xl font-semibold text-lg hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-xl hover:shadow-emerald-500/25 flex items-center justify-center"
              >
                Começar Agora
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center justify-center px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl font-semibold text-lg hover:border-emerald-500 dark:hover:border-emerald-400 transition-all duration-300"
              >
                <Play size={20} className="mr-2" />
                Ver Demo
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200 dark:border-gray-700"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <stat.icon className="w-6 h-6 text-emerald-500" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Template Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-96 lg:h-[500px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTemplate}
                  initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotateY: -45 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden"
                  style={{
                    transformStyle: 'preserve-3d',
                    perspective: '1000px'
                  }}
                >
                  <img
                    src={featuredTemplates[currentTemplate]?.image}
                    alt={featuredTemplates[currentTemplate]?.name}
                    className="w-full h-full object-cover"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-xl font-bold mb-2">
                      {featuredTemplates[currentTemplate]?.name}
                    </h3>
                    <p className="text-sm opacity-90">
                      {featuredTemplates[currentTemplate]?.description}
                    </p>
                    <div className="flex items-center space-x-2 mt-3">
                      <span className="px-3 py-1 bg-emerald-500 text-xs rounded-full">
                        {featuredTemplates[currentTemplate]?.category}
                      </span>
                      <span className="px-3 py-1 bg-white/20 backdrop-blur text-xs rounded-full">
                        {featuredTemplates[currentTemplate]?.style}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-emerald-500 rounded-xl shadow-lg flex items-center justify-center"
              >
                <Zap className="w-8 h-8 text-white" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-white dark:bg-gray-700 rounded-full shadow-lg flex items-center justify-center"
              >
                <Star className="w-6 h-6 text-emerald-500" />
              </motion.div>
            </div>

            {/* Template Indicators */}
            <div className="flex justify-center space-x-2 mt-6">
              {featuredTemplates.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTemplate(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTemplate
                      ? 'bg-emerald-500 w-8'
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-emerald-300'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;