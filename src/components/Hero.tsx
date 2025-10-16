import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { ArrowRight, Play, Star, Users, Zap, Sparkles, TrendingUp, Award } from 'lucide-react';

// Mock templates data
const templates = [
  {
    id: 1,
    name: 'Portfolio Criativo',
    description: 'Design moderno para profissionais criativos',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
    category: 'Portfolio',
    style: 'Moderno',
    featured: true
  },
  {
    id: 2,
    name: 'E-commerce Elite',
    description: 'Loja virtual de alta conversão',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    category: 'E-commerce',
    style: 'Elegante',
    featured: true
  },
  {
    id: 3,
    name: 'Restaurante Gourmet',
    description: 'Experiência gastronômica digital',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
    category: 'Restaurante',
    style: 'Sofisticado',
    featured: true
  },
  {
    id: 4,
    name: 'Tech Startup',
    description: 'Landing page de alta performance',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop',
    category: 'Startup',
    style: 'Inovador',
    featured: true
  }
];

const Hero: React.FC = () => {
  const [currentTemplate, setCurrentTemplate] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const featuredTemplates = templates.filter(t => t.featured);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useTransform(mouseY, [-300, 300], [5, -5]);
  const rotateY = useTransform(mouseX, [-300, 300], [-5, 5]);

  useEffect(() => {
    if (!isHovering) {
      const timer = setInterval(() => {
        setDirection(1);
        setCurrentTemplate((prev) => (prev + 1) % featuredTemplates.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [featuredTemplates.length, isHovering]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleTemplateChange = (index: number) => {
    setDirection(index > currentTemplate ? 1 : -1);
    setCurrentTemplate(index);
  };

  const stats = [
    { icon: Users, value: '10k+', label: 'Sites Criados', color: 'text-emerald-500' },
    { icon: Star, value: '4.9', label: 'Avaliação', color: 'text-yellow-500' },
    { icon: Zap, value: '< 1min', label: 'Para Criar', color: 'text-purple-500' }
  ];

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.5,
      rotateY: direction > 0 ? 45 : -45,
      filter: 'blur(10px)'
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      scale: 0.5,
      rotateY: direction > 0 ? -45 : 45,
      filter: 'blur(10px)',
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  };

  return (
    <section id="inicio" className="relative min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-emerald-200 to-teal-200 dark:from-emerald-900 dark:to-teal-900 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-purple-200 to-pink-200 dark:from-purple-900 dark:to-pink-900 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            rotate: 360
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-200/20 to-transparent rounded-full blur-2xl" />
        </motion.div>
      </div>

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-emerald-400/30 rounded-full"
          initial={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000)
          }}
          animate={{
            y: [null, Math.random() * -100, Math.random() * 100],
            x: [null, Math.random() * -50, Math.random() * 50],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            delay: Math.random() * 5
          }}
        />
      ))}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 z-10"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 text-emerald-700 dark:text-emerald-300 rounded-full text-sm font-semibold shadow-lg shadow-emerald-500/10 border border-emerald-200 dark:border-emerald-800"
              >
                <Sparkles size={16} className="mr-2 animate-pulse" />
                Novo: IA para personalização automática
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white leading-[1.1]"
              >
                Lance seu site com{' '}
                <motion.span
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500 bg-clip-text text-transparent bg-[length:200%_auto]"
                >
                  1 clique
                </motion.span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-lg leading-relaxed"
              >
                Templates profissionais, customização intuitiva e hospedagem gratuita. 
                <span className="font-semibold text-emerald-600 dark:text-emerald-400"> Tudo que você precisa</span> para ter presença digital em minutos.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 text-white rounded-2xl font-bold text-lg overflow-hidden shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-300"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '0%' }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative flex items-center justify-center">
                  Começar Agora
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-2xl font-bold text-lg hover:border-emerald-500 dark:hover:border-emerald-400 transition-all duration-300 shadow-xl hover:shadow-2xl overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950 dark:to-teal-950"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative flex items-center justify-center">
                  <Play size={20} className="mr-2" />
                  Ver Demo
                </span>
              </motion.button>
            </motion.div>

            {/* Enhanced Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200 dark:border-gray-700"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center group cursor-pointer"
                >
                  <motion.div 
                    className="flex justify-center mb-3"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  >
                    <div className="p-3 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950 dark:to-teal-950 rounded-2xl group-hover:shadow-lg transition-all duration-300">
                      <stat.icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                  </motion.div>
                  <div className="text-3xl font-black text-gray-900 dark:text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Enhanced Template Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div className="relative w-full h-96 lg:h-[550px]">
              <motion.div
                style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
                onMouseMove={handleMouseMove}
                className="relative w-full h-full"
              >
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={currentTemplate}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute inset-0 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden"
                    style={{
                      transformStyle: 'preserve-3d',
                      backfaceVisibility: 'hidden'
                    }}
                  >
                    {/* Image with subtle parallax effect */}
                    <motion.div
                      className="relative w-full h-full overflow-hidden"
                      initial={{ scale: 1 }}
                      animate={{ 
                        scale: 1.05,
                        x: [0, -5, 5, -3, 3, 0],
                        y: [0, -3, 3, -5, 5, 0]
                      }}
                      transition={{ 
                        scale: { duration: 20, repeat: Infinity, repeatType: 'reverse' },
                        x: { duration: 15, repeat: Infinity, ease: 'easeInOut' },
                        y: { duration: 18, repeat: Infinity, ease: 'easeInOut' }
                      }}
                    >
                      <img
                        src={featuredTemplates[currentTemplate]?.image}
                        alt={featuredTemplates[currentTemplate]?.name}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    
                    {/* Clean gradient overlay */}
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"
                    />
                    
                    {/* Content overlay */}
                    <motion.div 
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="absolute bottom-0 left-0 right-0 p-8 text-white"
                    >
                      <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        <h3 className="text-2xl font-black mb-2 flex items-center">
                          {featuredTemplates[currentTemplate]?.name}
                          <Award className="ml-2 w-5 h-5 text-yellow-400" />
                        </h3>
                        <p className="text-base opacity-90 mb-4 font-medium">
                          {featuredTemplates[currentTemplate]?.description}
                        </p>
                        <div className="flex items-center gap-2 flex-wrap">
                          <motion.span 
                            whileHover={{ scale: 1.1 }}
                            className="px-4 py-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 text-xs font-bold rounded-full shadow-lg"
                          >
                            {featuredTemplates[currentTemplate]?.category}
                          </motion.span>
                          <motion.span 
                            whileHover={{ scale: 1.1 }}
                            className="px-4 py-1.5 bg-white/20 backdrop-blur-md text-xs font-bold rounded-full border border-white/30"
                          >
                            {featuredTemplates[currentTemplate]?.style}
                          </motion.span>
                          <motion.span 
                            whileHover={{ scale: 1.1 }}
                            className="px-4 py-1.5 bg-white/20 backdrop-blur-md text-xs font-bold rounded-full border border-white/30 flex items-center"
                          >
                            <TrendingUp className="w-3 h-3 mr-1" />
                            Popular
                          </motion.span>
                        </div>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>

                {/* Enhanced Floating Elements */}
                <motion.div
                  animate={{ 
                    y: [0, -20, 0],
                    rotate: [0, 10, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl shadow-2xl shadow-emerald-500/40 flex items-center justify-center backdrop-blur-sm border-4 border-white dark:border-gray-800"
                  style={{ transformStyle: 'preserve-3d', transform: 'translateZ(50px)' }}
                >
                  <Zap className="w-10 h-10 text-white" />
                </motion.div>

                <motion.div
                  animate={{ 
                    y: [0, 15, 0],
                    rotate: [0, -10, 0]
                  }}
                  transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-2xl shadow-purple-500/40 flex items-center justify-center backdrop-blur-sm border-4 border-white dark:border-gray-800"
                  style={{ transformStyle: 'preserve-3d', transform: 'translateZ(50px)' }}
                >
                  <Star className="w-8 h-8 text-white" />
                </motion.div>

                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: 360
                  }}
                  transition={{ duration: 6, repeat: Infinity, delay: 2 }}
                  className="absolute top-1/2 -right-8 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-2xl shadow-yellow-500/40 flex items-center justify-center backdrop-blur-sm border-4 border-white dark:border-gray-800"
                >
                  <Sparkles className="w-6 h-6 text-white" />
                </motion.div>
              </motion.div>

              {/* Enhanced Template Indicators */}
              <div className="flex justify-center gap-3 mt-8">
                {featuredTemplates.map((template, index) => (
                  <motion.button
                    key={index}
                    onClick={() => handleTemplateChange(index)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`relative h-3 rounded-full transition-all duration-500 overflow-hidden ${
                      index === currentTemplate
                        ? 'w-12 bg-gradient-to-r from-emerald-500 to-teal-500'
                        : 'w-3 bg-gray-300 dark:bg-gray-600 hover:bg-emerald-300'
                    }`}
                  >
                    {index === currentTemplate && (
                      <motion.div
                        className="absolute inset-0 bg-white"
                        initial={{ x: '-100%' }}
                        animate={{ x: '100%' }}
                        transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
                        style={{ opacity: 0.3 }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;