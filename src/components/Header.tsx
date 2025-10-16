import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

interface HeaderProps {
  onMenuToggle: () => void;
  isMenuOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ onMenuToggle, isMenuOpen }) => {
  const { isDark, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = React.useState('inicio');

  const navItems = [
    { name: 'Início', href: '#inicio' },
    { name: 'Templates', href: '#templates' },
    { name: 'Recursos', href: '#recursos' },
    { name: 'Preços', href: '#precos' },
    { name: 'Contato', href: '#contato' }
  ];

  const LOGO_URL = 'https://avatars.githubusercontent.com/u/226414119?s=400&u=6645453081113cec86496aecde95a841251986a0e&v=4';

  // Detectar seção ativa durante o scroll
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // Offset para detecção

      // Pega todas as seções na ordem
      const sections = navItems.map(item => {
        const id = item.href.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          return {
            id,
            offsetTop: element.offsetTop,
            offsetBottom: element.offsetTop + element.offsetHeight
          };
        }
        return null;
      }).filter(Boolean);

      // Encontra a seção atual baseada na posição do scroll
      let currentSection = 'inicio';
      
      for (const section of sections) {
        if (section && scrollPosition >= section.offsetTop) {
          currentSection = section.id;
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Executar na montagem

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Função de scroll suave e profissional
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      // Define imediatamente a seção ativa
      setActiveSection(targetId);

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Fecha o menu mobile após clicar
      if (isMenuOpen) {
        onMenuToggle();
      }
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.3
      }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20"> 
          {/* Logo */}
          <motion.a
            href="#inicio"
            onClick={(e) => handleSmoothScroll(e, '#inicio')}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.6
            }}
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <img 
              src={LOGO_URL} 
              alt="WebCash Logo" 
              className="w-16 h-16 object-cover rounded-lg"
              style={{ 
                imageRendering: 'crisp-edges',
                WebkitFontSmoothing: 'antialiased',
                backfaceVisibility: 'hidden',
                transform: 'translateZ(0)'
              }}
            />
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.7 + (index * 0.1)
                  }}
                  whileHover={{ y: -3 }}
                  className={`relative text-gray-700 dark:text-gray-300 transition-all duration-300 font-medium cursor-pointer ${
                    isActive ? 'text-emerald-600 dark:text-emerald-400' : 'hover:text-emerald-600 dark:hover:text-emerald-400'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.a>
              );
            })}
          </nav>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
                delay: 1.3
              }}
              whileHover={{ 
                scale: 1.05,
                rotate: [0, -8, 8, -8, 8, -8, 8, 0],
                transition: { 
                  rotate: { 
                    duration: 1.5,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "loop"
                  }
                }
              }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>

            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
                delay: 1.4
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={onMenuToggle}
              className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.div>
            </motion.button>

            <motion.button
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: 1.5
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-xl font-semibold hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-emerald-500/30"
            >
              Começar Grátis
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          height: isMenuOpen ? 'auto' : 0,
          opacity: isMenuOpen ? 1 : 0
        }}
        transition={{ 
          duration: 0.6,
          ease: [0.16, 1, 0.3, 1]
        }}
        className="md:hidden overflow-hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
      >
        <motion.div 
          className="px-4 py-4 space-y-3"
          initial={false}
          animate={{
            opacity: isMenuOpen ? 1 : 0
          }}
          transition={{ 
            duration: 0.4,
            delay: isMenuOpen ? 0.2 : 0
          }}
        >
          {navItems.map((item, index) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                initial={false}
                animate={{
                  opacity: isMenuOpen ? 1 : 0,
                  x: isMenuOpen ? 0 : -20
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                  delay: isMenuOpen ? 0.15 + (index * 0.08) : 0
                }}
                className={`block transition-all duration-300 py-2 font-medium cursor-pointer ${
                  isActive 
                    ? 'text-emerald-600 dark:text-emerald-400 font-semibold' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400'
                }`}
              >
                {item.name}
                {isActive && (
                  <motion.div
                    layoutId="activeSectionMobile"
                    className="h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mt-1"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.a>
            );
          })}
          <motion.button 
            initial={false}
            animate={{
              opacity: isMenuOpen ? 1 : 0,
              y: isMenuOpen ? 0 : 20
            }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
              delay: isMenuOpen ? 0.5 : 0
            }}
            className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-xl font-semibold hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-emerald-500/30"
          >
            Começar Grátis
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.header>
  );
};

export default Header;