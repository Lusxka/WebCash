import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import TemplateGrid from './components/TemplateGrid';
import TemplatePreview from './components/TemplatePreview';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Template } from './types/template';
import { templates } from './data/templates';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);

  // Deep linking - Detecta template na URL ao carregar
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const templateId = urlParams.get('template');
    
    if (templateId) {
      const template = templates.find(t => t.id === templateId);
      if (template) {
        setSelectedTemplate(template);
        // Remove o parâmetro da URL sem recarregar a página
        window.history.replaceState({}, '', window.location.pathname);
      }
    }
  }, []);

  const handleTemplateSelect = (template: Template) => {
    setSelectedTemplate(template);
  };

  const handleTemplatePreviewClose = () => {
    setSelectedTemplate(null);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header 
        onMenuToggle={() => setIsMenuOpen(!isMenuOpen)}
        isMenuOpen={isMenuOpen}
      />
      
      <main>
        <Hero />
        <TemplateGrid onTemplateSelect={handleTemplateSelect} />
        <Features />
        <Pricing />
        <Contact />
      </main>

      <Footer />

      {/* Template Preview Modal */}
      <TemplatePreview
        template={selectedTemplate}
        onClose={handleTemplatePreviewClose}
        onSelectTemplate={() => {
          // Redirect to contact section instead of opening builder
          setSelectedTemplate(null);
          document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </div>
  );
}

export default App;