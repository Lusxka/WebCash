import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Smartphone, Monitor, Code, Star, MessageSquare, Eye, Loader } from 'lucide-react';
import { Template } from '../types/template';

interface TemplatePreviewProps {
  template: Template | null;
  onClose: () => void;
  onSelectTemplate: (template: Template) => void;
}

const TemplatePreview: React.FC<TemplatePreviewProps> = ({ 
  template, 
  onClose, 
  onSelectTemplate 
}) => {
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile'>('desktop');
  const [showLiveDemo, setShowLiveDemo] = useState(true); // Começa como true
  const [isIframeLoading, setIsIframeLoading] = useState(true);
  const [iframeError, setIframeError] = useState(false);

  if (!template) return null;

  const handleIframeLoad = () => {
    setIsIframeLoading(false);
    setIframeError(false);
  };

  const handleIframeError = () => {
    setIsIframeLoading(false);
    setIframeError(true);
  };

  const toggleLiveDemo = () => {
    if (!showLiveDemo) {
      setIsIframeLoading(true);
      setIframeError(false);
    }
    setShowLiveDemo(!showLiveDemo);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="absolute inset-4 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
            <div className="flex items-center space-x-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {template.name}
              </h2>
              {template.featured && (
                <Star className="w-6 h-6 text-yellow-500 fill-current" />
              )}
            </div>

            <div className="flex items-center space-x-4">
              {/* Live Demo Toggle */}
              {template.demoUrl && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleLiveDemo}
                  className={`flex items-center px-4 py-2 rounded-lg transition-all ${
                    showLiveDemo
                      ? 'bg-emerald-500 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  <Eye size={18} className="mr-2" />
                  {showLiveDemo ? 'Ver Imagem' : 'Demo ao Vivo'}
                </motion.button>
              )}

              {/* View Mode Toggle */}
              {showLiveDemo && (
                <div className="flex rounded-lg border border-gray-300 dark:border-gray-700 overflow-hidden">
                  <button
                    onClick={() => setViewMode('desktop')}
                    className={`p-3 transition-colors ${
                      viewMode === 'desktop'
                        ? 'bg-emerald-500 text-white'
                        : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                    }`}
                  >
                    <Monitor size={20} />
                  </button>
                  <button
                    onClick={() => setViewMode('mobile')}
                    className={`p-3 transition-colors ${
                      viewMode === 'mobile'
                        ? 'bg-emerald-500 text-white'
                        : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                    }`}
                  >
                    <Smartphone size={20} />
                  </button>
                </div>
              )}

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <X size={24} />
              </motion.button>
            </div>
          </div>

          <div className="flex flex-1 overflow-hidden">
            {/* Preview Area */}
            <div className="flex-1 bg-gray-100 dark:bg-gray-800 relative overflow-auto">
              {showLiveDemo && template.demoUrl ? (
                <div className="w-full h-full flex items-center justify-center p-8">
                  <motion.div
                    key={viewMode}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className={`bg-white rounded-lg shadow-2xl transition-all duration-300 ${
                      viewMode === 'desktop' 
                        ? 'w-full h-full' 
                        : 'w-[375px] h-[667px]'
                    }`}
                    style={{
                      maxWidth: viewMode === 'desktop' ? '100%' : '375px',
                      maxHeight: viewMode === 'desktop' ? '100%' : '667px'
                    }}
                  >
                    {/* Loading Indicator */}
                    {isIframeLoading && (
                      <div className="absolute inset-0 flex items-center justify-center bg-white dark:bg-gray-800 rounded-lg z-10">
                        <div className="text-center">
                          <Loader className="w-12 h-12 text-emerald-500 animate-spin mx-auto mb-4" />
                          <p className="text-gray-600 dark:text-gray-400">Carregando demo...</p>
                        </div>
                      </div>
                    )}

                    {/* Error Message */}
                    {iframeError && (
                      <div className="absolute inset-0 flex items-center justify-center bg-white dark:bg-gray-800 rounded-lg z-10 p-8">
                        <div className="text-center max-w-md">
                          <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                            <X className="w-8 h-8 text-red-500" />
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Não foi possível carregar a demo
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400 mb-6">
                            Este site não permite visualização em iframe. Clique no botão abaixo para abrir em uma nova aba.
                          </p>
                          <motion.a
                            href={template.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center px-6 py-3 bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-600 transition-colors"
                          >
                            <ExternalLink size={20} className="mr-2" />
                            Abrir Demo em Nova Aba
                          </motion.a>
                        </div>
                      </div>
                    )}

                    {/* Iframe */}
                    <iframe
                      src={template.demoUrl}
                      className="w-full h-full border-0 rounded-lg"
                      title={`Demo: ${template.name}`}
                      onLoad={handleIframeLoad}
                      onError={handleIframeError}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    />
                  </motion.div>

                  {/* Floating Open Button */}
                  <motion.a
                    href={template.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="absolute top-6 right-6 p-3 bg-emerald-500 text-white rounded-full shadow-lg hover:bg-emerald-600 transition-colors z-20"
                    title="Abrir demo em nova aba"
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white rounded-lg shadow-xl mx-auto mt-8 w-[95%] h-[90%]"
                >
                  <div className="w-full h-full overflow-hidden rounded-lg">
                    <img
                      src={template.image}
                      alt={template.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <div className="w-80 bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-700 overflow-y-auto flex-shrink-0">
              <div className="p-6 space-y-6">
                {/* Description */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Descrição
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {template.description}
                  </p>
                </div>

                {/* Categories */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Categorias
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-sm rounded-full">
                      {template.category}
                    </span>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-full">
                      {template.style}
                    </span>
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm rounded-full">
                      {template.audience}
                    </span>
                    <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-sm rounded-full">
                      {template.function}
                    </span>
                  </div>
                </div>

                {/* Tech Stack */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Stack Tecnológico
                  </h3>
                  <div className="flex items-center space-x-2 mb-3">
                    <Code size={20} className="text-emerald-500" />
                    <span className="text-gray-700 dark:text-gray-300">Tecnologias usadas</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {template.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Responsive Level */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Nível Responsivo
                  </h3>
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div
                          key={i}
                          className={`w-3 h-3 rounded-full ${
                            i < template.responsiveLevel
                              ? 'bg-emerald-500'
                              : 'bg-gray-300 dark:bg-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {template.responsiveLevel}/5
                    </span>
                  </div>
                </div>

                {/* Pages Included */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Páginas Incluídas ({template.pages.length})
                  </h3>
                  <ul className="space-y-2">
                    {template.pages.map((page, index) => (
                      <li
                        key={index}
                        className="flex items-center space-x-2 text-gray-600 dark:text-gray-400"
                      >
                        <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                        <span>{page}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Features */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Recursos Principais
                  </h3>
                  <ul className="space-y-2">
                    {template.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center space-x-2 text-gray-600 dark:text-gray-400"
                      >
                        <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => onSelectTemplate(template)}
                    className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-lg font-semibold hover:from-emerald-600 hover:to-emerald-700 transition-all duration-200 shadow-lg hover:shadow-emerald-500/25"
                  >
                    <MessageSquare size={20} className="mr-2" />
                    Solicitar Este Template
                  </motion.button>

                  {template.demoUrl && (
                    <motion.a
                      href={template.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center justify-center px-6 py-3 border-2 border-emerald-500 text-emerald-600 dark:text-emerald-400 rounded-lg font-semibold hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all duration-200"
                    >
                      <ExternalLink size={20} className="mr-2" />
                      Abrir Demo em Nova Aba
                    </motion.a>
                  )}
                </div>

                {/* Contact Info */}
                <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-xl p-4">
                  <h4 className="font-semibold text-emerald-800 dark:text-emerald-200 mb-2">
                    Interessado neste template?
                  </h4>
                  <p className="text-emerald-700 dark:text-emerald-300 text-sm mb-3">
                    Nossa equipe entrará em contato para apresentar uma proposta personalizada.
                  </p>
                  <div className="text-emerald-600 dark:text-emerald-400 text-sm">
                    ✓ Consultoria gratuita<br />
                    ✓ Proposta sem compromisso<br />
                    ✓ Suporte especializado
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default TemplatePreview;