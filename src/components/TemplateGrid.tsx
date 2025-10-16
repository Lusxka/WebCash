import React, { useState, useMemo, useEffect } from 'react';
import { Filter, Search, Grid, List, Star, ArrowRight, X, Sparkles } from 'lucide-react';

// Mock data
const categories = ['E-commerce', 'Portfólio', 'Corporativo', 'Blog', 'Landing Page', 'Dashboard'];
const styles = ['Minimalista', 'Moderno', 'Criativo', 'Elegante', 'Ousado', 'Clássico'];
const audiences = ['Startups', 'Empresas', 'Freelancers', 'Agências', 'Pequenos Negócios'];
const functions = ['Vendas', 'Portfólio', 'Institucional', 'Marketing', 'Educacional'];

const templates = [
  {
    id: 1,
    name: 'Nova Era Commerce',
    description: 'Template moderno para e-commerce com checkout otimizado e design minimalista que converte',
    category: 'E-commerce',
    style: 'Moderno',
    audience: 'Empresas',
    function: 'Vendas',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    pages: ['Home', 'Produtos', 'Carrinho', 'Checkout'],
    responsiveLevel: 5,
    featured: true
  },
  {
    id: 2,
    name: 'Creative Portfolio Pro',
    description: 'Portfólio profissional com animações suaves e layout envolvente para destacar seu trabalho',
    category: 'Portfólio',
    style: 'Criativo',
    audience: 'Freelancers',
    function: 'Portfólio',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
    pages: ['Home', 'Projetos', 'Sobre', 'Contato'],
    responsiveLevel: 5,
    featured: true
  },
  {
    id: 3,
    name: 'Startup Launch',
    description: 'Landing page de alta conversão para lançamento de produtos e captação de leads',
    category: 'Landing Page',
    style: 'Ousado',
    audience: 'Startups',
    function: 'Marketing',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop',
    pages: ['Home', 'Recursos', 'Preços'],
    responsiveLevel: 4,
    featured: false
  },
  {
    id: 4,
    name: 'Corporate Elite',
    description: 'Design corporativo elegante que transmite confiança e profissionalismo',
    category: 'Corporativo',
    style: 'Elegante',
    audience: 'Empresas',
    function: 'Institucional',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
    pages: ['Home', 'Serviços', 'Equipe', 'Contato'],
    responsiveLevel: 5,
    featured: false
  },
  {
    id: 5,
    name: 'Blog Minimalista',
    description: 'Design limpo focado em conteúdo com tipografia elegante e leitura otimizada',
    category: 'Blog',
    style: 'Minimalista',
    audience: 'Freelancers',
    function: 'Marketing',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop',
    pages: ['Home', 'Artigos', 'Categorias', 'Autor'],
    responsiveLevel: 4,
    featured: false
  },
  {
    id: 6,
    name: 'Agency Dashboard',
    description: 'Dashboard completo para gestão de projetos e clientes com interface intuitiva',
    category: 'Dashboard',
    style: 'Moderno',
    audience: 'Agências',
    function: 'Institucional',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    pages: ['Dashboard', 'Projetos', 'Clientes', 'Relatórios'],
    responsiveLevel: 5,
    featured: true
  }
];

const TemplateGrid = ({ onTemplateSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState('grid');
  const [filters, setFilters] = useState({
    category: 'Todos',
    style: 'Todos',
    audience: 'Todos',
    function: 'Todos'
  });

  const filteredTemplates = useMemo(() => {
    return templates.filter(template => {
      const matchesSearch = template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           template.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = filters.category === 'Todos' || template.category === filters.category;
      const matchesStyle = filters.style === 'Todos' || template.style === filters.style;
      const matchesAudience = filters.audience === 'Todos' || template.audience === filters.audience;
      const matchesFunction = filters.function === 'Todos' || template.function === filters.function;

      return matchesSearch && matchesCategory && matchesStyle && matchesAudience && matchesFunction;
    });
  }, [searchTerm, filters]);

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const clearAllFilters = () => {
    setFilters({
      category: 'Todos',
      style: 'Todos',
      audience: 'Todos',
      function: 'Todos'
    });
    setSearchTerm('');
  };

  const hasActiveFilters = Object.values(filters).some(v => v !== 'Todos') || searchTerm !== '';

  return (
    <section id="templates" className="py-20 relative overflow-hidden bg-[#0f1419]">
      {/* Fundo espacial com estrelas 3D animadas */}
      <div className="absolute inset-0">
        {/* Camada 1 - Estrelas distantes (pequenas) */}
        <div className="absolute inset-0 opacity-40">
          {[...Array(100)].map((_, i) => {
            const size = Math.random() * 2 + 0.5;
            return (
              <div
                key={`star1-${i}`}
                className="absolute bg-white rounded-full"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `twinkle ${2 + Math.random() * 3}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 3}s`,
                  boxShadow: `0 0 ${size * 2}px rgba(255, 255, 255, 0.8)`
                }}
              />
            );
          })}
        </div>

        {/* Camada 2 - Estrelas médias */}
        <div className="absolute inset-0 opacity-60">
          {[...Array(50)].map((_, i) => {
            const size = Math.random() * 3 + 1.5;
            return (
              <div
                key={`star2-${i}`}
                className="absolute bg-emerald-200 rounded-full"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `twinkleSlow ${3 + Math.random() * 4}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 4}s`,
                  boxShadow: `0 0 ${size * 3}px rgba(16, 185, 129, 0.6)`
                }}
              />
            );
          })}
        </div>

        {/* Camada 3 - Estrelas próximas (grandes) */}
        <div className="absolute inset-0 opacity-80">
          {[...Array(20)].map((_, i) => {
            const size = Math.random() * 4 + 2;
            return (
              <div
                key={`star3-${i}`}
                className="absolute bg-cyan-300 rounded-full"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `twinkleFast ${1.5 + Math.random() * 2}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 2}s`,
                  boxShadow: `0 0 ${size * 4}px rgba(34, 211, 238, 0.8), 0 0 ${size * 8}px rgba(34, 211, 238, 0.4)`
                }}
              />
            );
          })}
        </div>

        {/* Nebulosas sutis */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-600/5 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
      </div>

      <style>{`
        @keyframes twinkle {
          0%, 100% { 
            opacity: 0.2; 
            transform: scale(0.8);
          }
          50% { 
            opacity: 1; 
            transform: scale(1.2);
          }
        }
        @keyframes twinkleSlow {
          0%, 100% { 
            opacity: 0.3; 
            transform: scale(0.9);
          }
          50% { 
            opacity: 1; 
            transform: scale(1.3);
          }
        }
        @keyframes twinkleFast {
          0%, 100% { 
            opacity: 0.4; 
            transform: scale(1) rotate(0deg);
          }
          50% { 
            opacity: 1; 
            transform: scale(1.5) rotate(180deg);
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 backdrop-blur-sm border border-emerald-500/30 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span className="text-sm font-medium text-emerald-400">{templates.length} Templates Premium</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Templates Profissionais
          </h2>
          <p className="text-lg text-gray-400">
            Explore nossa coleção de templates de alta qualidade
          </p>
        </div>

        {/* Barra de busca e controles */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative group">
              <div className="absolute inset-0 bg-emerald-500/5 rounded-lg blur-xl group-hover:bg-emerald-500/10 transition-all" />
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5 group-focus-within:text-emerald-400 transition-colors" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Buscar templates..."
                  className="w-full pl-12 pr-12 py-3.5 bg-[#1a1f2e] border border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>

            {/* Controles */}
            <div className="flex gap-3">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`px-5 py-3.5 rounded-lg font-medium transition-all flex items-center gap-2 ${
                  showFilters
                    ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/25'
                    : 'bg-[#1a1f2e] border border-gray-700/50 text-gray-300 hover:border-emerald-500/50'
                }`}
              >
                <Filter className="w-5 h-5" />
                <span className="hidden sm:inline">Filtros</span>
              </button>

              <div className="flex bg-[#1a1f2e] border border-gray-700/50 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3.5 transition-all ${
                    viewMode === 'grid'
                      ? 'bg-emerald-500 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-3.5 transition-all ${
                    viewMode === 'list'
                      ? 'bg-emerald-500 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Painel de Filtros */}
          {showFilters && (
            <div className="bg-[#1a1f2e] border border-gray-700/50 rounded-lg p-6 backdrop-blur-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Categoria</label>
                  <select
                    value={filters.category}
                    onChange={(e) => handleFilterChange('category', e.target.value)}
                    className="w-full px-3 py-2 bg-[#0f1419] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                  >
                    <option value="Todos">Todas</option>
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Estilo</label>
                  <select
                    value={filters.style}
                    onChange={(e) => handleFilterChange('style', e.target.value)}
                    className="w-full px-3 py-2 bg-[#0f1419] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                  >
                    <option value="Todos">Todos</option>
                    {styles.map(style => (
                      <option key={style} value={style}>{style}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Público</label>
                  <select
                    value={filters.audience}
                    onChange={(e) => handleFilterChange('audience', e.target.value)}
                    className="w-full px-3 py-2 bg-[#0f1419] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                  >
                    <option value="Todos">Todos</option>
                    {audiences.map(aud => (
                      <option key={aud} value={aud}>{aud}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Função</label>
                  <select
                    value={filters.function}
                    onChange={(e) => handleFilterChange('function', e.target.value)}
                    className="w-full px-3 py-2 bg-[#0f1419] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                  >
                    <option value="Todos">Todas</option>
                    {functions.map(func => (
                      <option key={func} value={func}>{func}</option>
                    ))}
                  </select>
                </div>
              </div>

              {hasActiveFilters && (
                <button
                  onClick={clearAllFilters}
                  className="mt-4 text-sm text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-2"
                >
                  <X className="w-4 h-4" />
                  Limpar filtros
                </button>
              )}
            </div>
          )}

          {/* Contador */}
          <div className="flex items-center justify-between">
            <p className="text-gray-400 text-sm">
              <span className="text-white font-semibold">{filteredTemplates.length}</span> templates encontrados
            </p>
          </div>
        </div>

        {/* Grid de Templates */}
        <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
          {filteredTemplates.map((template) => (
            <div
              key={template.id}
              onClick={() => onTemplateSelect && onTemplateSelect(template)}
              className={`group cursor-pointer relative ${viewMode === 'list' ? 'flex flex-col md:flex-row' : ''}`}
            >
              {/* Glow effect verde */}
              <div className="absolute inset-0 bg-emerald-500/0 group-hover:bg-emerald-500/5 rounded-xl blur-xl transition-all duration-500" />
              
              <div className={`relative bg-[#1a1f2e] border border-gray-700/50 rounded-xl overflow-hidden hover:border-emerald-500/50 transition-all duration-300 flex flex-col hover:shadow-2xl hover:shadow-emerald-500/10 ${viewMode === 'list' ? 'md:flex-row' : ''}`}>
                {/* Imagem */}
                <div className={`relative overflow-hidden ${viewMode === 'list' ? 'md:w-1/3' : 'aspect-video'}`}>
                  <img
                    src={template.image}
                    alt={template.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1f2e] via-transparent to-transparent" />
                  
                  {template.featured && (
                    <div className="absolute top-3 right-3">
                      <div className="flex items-center gap-1 px-2.5 py-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-md shadow-lg">
                        <Star className="w-3 h-3 text-white fill-white" />
                        <span className="text-xs font-semibold text-white">Premium</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Conteúdo */}
                <div className={`p-5 flex flex-col justify-between ${viewMode === 'list' ? 'md:w-2/3' : ''}`}>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                      {template.name}
                    </h3>
                    
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {template.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2.5 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs rounded-md font-medium">
                        {template.category}
                      </span>
                      <span className="px-2.5 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs rounded-md font-medium">
                        {template.style}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <span>{template.pages.length} páginas</span>
                      <div className="flex items-center gap-1">
                        {[...Array(template.responsiveLevel)].map((_, i) => (
                          <div key={i} className="w-1 h-3 bg-emerald-500 rounded-full shadow-sm shadow-emerald-500/50" />
                        ))}
                      </div>
                    </div>
                  </div>

                  <button className="w-full px-4 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2 group/btn shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40">
                    Ver Template
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sem resultados */}
        {filteredTemplates.length === 0 && (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1a1f2e] rounded-full mb-6">
              <Search className="w-8 h-8 text-gray-500" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Nenhum template encontrado
            </h3>
            <p className="text-gray-400 mb-6">
              Tente ajustar seus filtros de busca
            </p>
            <button
              onClick={clearAllFilters}
              className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-medium transition-all shadow-lg shadow-emerald-500/25"
            >
              Limpar filtros
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default TemplateGrid;