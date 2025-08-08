import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const footerSections = [
    {
      title: 'Produto',
      links: [
        { name: 'Templates', href: '#templates' },
        { name: 'Recursos', href: '#recursos' },
        { name: 'Preços', href: '#precos' },
        { name: 'Casos de Uso', href: '#casos' }
      ]
    },
    {
      title: 'Empresa',
      links: [
        { name: 'Sobre Nós', href: '#sobre' },
        { name: 'Blog', href: '#blog' },
        { name: 'Carreiras', href: '#carreiras' },
        { name: 'Imprensa', href: '#imprensa' }
      ]
    },
    {
      title: 'Suporte',
      links: [
        { name: 'Central de Ajuda', href: '#ajuda' },
        { name: 'Documentação', href: '#docs' },
        { name: 'Status', href: '#status' },
        { name: 'Contato', href: '#contato' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Termos de Uso', href: '#termos' },
        { name: 'Privacidade', href: '#privacidade' },
        { name: 'Cookies', href: '#cookies' },
        { name: 'LGPD', href: '#lgpd' }
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">W</span>
                  </div>
                  <span className="text-xl font-bold">WebCash</span>
                </div>
                
                <p className="text-gray-400 max-w-sm">
                  Criamos sites profissionais em minutos. Templates modernos, 
                  personalização intuitiva e hospedagem gratuita para sua presença digital.
                </p>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Mail size={16} />
                    <span>contato@webcash.com.br</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Phone size={16} />
                    <span>+55 (11) 9999-9999</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <MapPin size={16} />
                    <span>São Paulo, Brasil</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex space-x-4 pt-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <motion.a
                        href={link.href}
                        whileHover={{ x: 4 }}
                        className="text-gray-400 hover:text-emerald-400 transition-colors"
                      >
                        {link.name}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div>
              <h3 className="text-lg font-semibold mb-2">Fique por dentro das novidades</h3>
              <p className="text-gray-400">
                Receba templates exclusivos e dicas de web design diretamente no seu e-mail
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent flex-1 min-w-64"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-emerald-500 text-white rounded-lg font-medium hover:bg-emerald-600 transition-colors whitespace-nowrap"
              >
                Inscrever-se
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-6 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
        >
          <div className="flex items-center space-x-2 text-gray-400">
            <span>© 2024 WebCash. Feito com</span>
            <Heart size={16} className="text-red-500 fill-current" />
            <span>no Brasil</span>
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-emerald-400 transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-emerald-400 transition-colors">
              Termos de Serviço
            </a>
            <a href="#" className="hover:text-emerald-400 transition-colors">
              Cookies
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;