import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Crown, ArrowRight, Shield } from 'lucide-react';

const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: 'Starter',
      description: 'Perfeito para pequenos negócios e freelancers',
      icon: Zap,
      color: 'from-blue-400 to-blue-600',
      price: {
        monthly: 97,
        yearly: 970
      },
      originalPrice: {
        monthly: 197,
        yearly: 1970
      },
      features: [
        '5 Templates Premium',
        'Personalização Básica',
        'Suporte por Email',
        'Documentação Completa',
        'Atualizações por 1 ano',
        'Licença Comercial'
      ],
      popular: false
    },
    {
      name: 'Professional',
      description: 'Ideal para agências e empresas em crescimento',
      icon: Star,
      color: 'from-emerald-400 to-emerald-600',
      price: {
        monthly: 197,
        yearly: 1970
      },
      originalPrice: {
        monthly: 397,
        yearly: 3970
      },
      features: [
        '20 Templates Premium',
        'Personalização Avançada',
        'Suporte Prioritário',
        'Código Fonte Completo',
        'Atualizações Vitalícias',
        'Licença Comercial Estendida',
        'Templates Exclusivos',
        'Consultoria de 2h Grátis'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      description: 'Solução completa para grandes empresas',
      icon: Crown,
      color: 'from-purple-400 to-purple-600',
      price: {
        monthly: 497,
        yearly: 4970
      },
      originalPrice: {
        monthly: 997,
        yearly: 9970
      },
      features: [
        'Todos os Templates (50+)',
        'Personalização Ilimitada',
        'Suporte 24/7 Dedicado',
        'Desenvolvimento Customizado',
        'Atualizações Vitalícias',
        'Licença White Label',
        'Templates Sob Demanda',
        'Consultoria Mensal Incluída',
        'Treinamento da Equipe',
        'SLA Garantido'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Maria Silva',
      company: 'Silva & Associados',
      text: 'Os templates da WebCash transformaram completamente nossa presença digital. Economizamos meses de desenvolvimento!',
      rating: 5
    },
    {
      name: 'João Santos',
      company: 'TechStart',
      text: 'Qualidade excepcional e suporte incrível. Recomendo para qualquer empresa que busca profissionalismo.',
      rating: 5
    },
    {
      name: 'Ana Costa',
      company: 'Creative Agency',
      text: 'Como agência, precisávamos de templates versáteis e de alta qualidade. A WebCash superou nossas expectativas.',
      rating: 5
    }
  ];

  const faqs = [
    {
      question: 'Posso usar os templates em projetos comerciais?',
      answer: 'Sim! Todos os nossos planos incluem licença comercial, permitindo uso em projetos para clientes.'
    },
    {
      question: 'Os templates recebem atualizações?',
      answer: 'Sim, todos os templates são constantemente atualizados com melhorias e novos recursos.'
    },
    {
      question: 'Há garantia de reembolso?',
      answer: 'Oferecemos garantia de 30 dias. Se não ficar satisfeito, devolvemos 100% do valor pago.'
    },
    {
      question: 'Preciso de conhecimento técnico?',
      answer: 'Não! Nossos templates vêm com documentação completa e suporte para facilitar a implementação.'
    }
  ];

  return (
    <section id="precos" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Planos que Cabem no seu Orçamento
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            Escolha o plano ideal para suas necessidades e comece a criar sites profissionais hoje mesmo
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className={`text-sm font-medium ${billingCycle === 'monthly' ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
              Mensal
            </span>
            <motion.button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className={`relative w-14 h-8 rounded-full transition-colors ${
                billingCycle === 'yearly' ? 'bg-emerald-500' : 'bg-gray-300 dark:bg-gray-600'
              }`}
            >
              <motion.div
                animate={{ x: billingCycle === 'yearly' ? 24 : 2 }}
                className="absolute top-1 w-6 h-6 bg-white rounded-full shadow-md"
              />
            </motion.button>
            <span className={`text-sm font-medium ${billingCycle === 'yearly' ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
              Anual
            </span>
            {billingCycle === 'yearly' && (
              <span className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-3 py-1 rounded-full text-xs font-medium">
                Economize 50%
              </span>
            )}
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden ${
                plan.popular ? 'ring-2 ring-emerald-500 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-center py-2 text-sm font-medium">
                  Mais Popular
                </div>
              )}

              <div className={`p-8 ${plan.popular ? 'pt-12' : ''}`}>
                <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-xl flex items-center justify-center mb-6`}>
                  <plan.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {plan.description}
                </p>

                <div className="mb-6">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">
                      R$ {plan.price[billingCycle]}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 line-through">
                      R$ {plan.originalPrice[billingCycle]}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {billingCycle === 'monthly' ? 'por mês' : 'por ano'}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.a
                  href="#contato"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full flex items-center justify-center px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white hover:from-emerald-600 hover:to-emerald-700 shadow-lg hover:shadow-emerald-500/25'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  Escolher Plano
                  <ArrowRight size={20} className="ml-2" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-12">
            O que Nossos Clientes Dizem
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.company}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Perguntas Frequentes
          </h3>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
              >
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {faq.question}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-3xl p-12"
        >
          <Shield className="w-16 h-16 text-white mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-white mb-4">
            Garantia de 30 Dias
          </h3>
          <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
            Experimente nossos templates sem riscos. Se não ficar completamente satisfeito, 
            devolvemos 100% do seu investimento em até 30 dias.
          </p>
          <motion.a
            href="#contato"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-white text-emerald-600 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all duration-200 shadow-lg"
          >
            Começar Agora Sem Riscos
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;