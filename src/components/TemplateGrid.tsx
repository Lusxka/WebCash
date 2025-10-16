import React, { useState, useMemo, useEffect } from 'react';
import { Filter, Search, Star, ArrowRight, X, Sparkles, TrendingUp } from 'lucide-react';

// Mock data
const categories = ['E-commerce', 'Portfólio', 'Corporativo', 'Blog', 'Landing Page', 'Dashboard'];
const styles = ['Minimalista', 'Moderno', 'Criativo', 'Elegante', 'Ousado', 'Clássico'];
const audiences = ['Startups', 'Empresas', 'Freelancers', 'Agências', 'Pequenos Negócios'];
const functions = ['Vendas', 'Portfólio', 'Institucional', 'Marketing', 'Educacional'];

const templates = [
  {
    id: 'ecommerce-minimal',
    name: 'WebGym',
    description: 'Template minimalista para e-commerce com foco na experiência do usuário',
    category: 'Loja Online',
    style: 'Minimal',
    audience: 'Pequenos Negócios',
    function: 'eCommerce',
    image: 'https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    demoUrl: 'https://webgymbeta.netlify.app',
    techStack: ['React', 'Tailwind CSS', 'Stripe'],
    responsiveLevel: 5,
    pages: ['Home', 'Produtos', 'Carrinho', 'Checkout', 'Conta'],
    features: ['Carrinho integrado', 'Pagamento Stripe', 'Gestão de estoque', 'SEO otimizado'],
    featured: true
  },
  {
    id: 'portfolio-creative',
    name: 'Portfólio Criativo',
    description: 'Showcase profissional para designers e artistas',
    category: 'Portfólio',
    style: 'Vibrante',
    audience: 'Freelancers',
    function: 'Portfólio',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    demoUrl: 'https://preview.themeforest.net/item/cvio-vcard-cv-resume-portfolio-template/full_screen_preview/31636080',
    techStack: ['React', 'Framer Motion', 'CSS Grid'],
    responsiveLevel: 5,
    pages: ['Home', 'Portfólio', 'Sobre', 'Contato'],
    features: ['Galeria interativa', 'Animações suaves', 'Modo escuro', 'Formulário de contato'],
    featured: true
  },
  {
    id: 'restaurant-modern',
    name: 'Restaurante Moderno',
    description: 'Site elegante para restaurantes com sistema de reservas',
    category: 'Restaurante',
    style: 'Clean',
    audience: 'Pequenos Negócios',
    function: 'Agendamento',
    image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    demoUrl: 'https://preview.themeforest.net/item/grilli-restaurant-html5-template/full_screen_preview/47034062',
    techStack: ['React', 'Calendar API', 'Maps'],
    responsiveLevel: 5,
    pages: ['Home', 'Menu', 'Reservas', 'Sobre', 'Contato'],
    features: ['Sistema de reservas', 'Menu digital', 'Integração com mapas', 'Reviews'],
    featured: true
  },
  {
    id: 'agency-corporate',
    name: 'Agência Corporate',
    description: 'Template profissional para agências e consultorias',
    category: 'Agência',
    style: 'Corporativo',
    audience: 'Agências',
    function: 'Portfólio',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    demoUrl: 'https://preview.themeforest.net/item/corporex-corporate-business-agency-html-template/full_screen_preview/47728058',
    techStack: ['React', 'TypeScript', 'Analytics'],
    responsiveLevel: 5,
    pages: ['Home', 'Serviços', 'Cases', 'Equipe', 'Contato'],
    features: ['Cases de sucesso', 'Equipe dinâmica', 'Analytics integrado', 'CRM'],
    featured: false
  },
  {
    id: 'blog-personal',
    name: 'Blog Pessoal',
    description: 'Plataforma de blog com sistema de comentários',
    category: 'Blog',
    style: 'Clean',
    audience: 'Freelancers',
    function: 'Blog',
    image: 'https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    demoUrl: 'https://preview.themeforest.net/item/rogan-personal-blog-template/full_screen_preview/25944118',
    techStack: ['React', 'Markdown', 'Comments API'],
    responsiveLevel: 5,
    pages: ['Home', 'Posts', 'Categorias', 'Sobre', 'Contato'],
    features: ['Editor markdown', 'Sistema de comentários', 'Categorização', 'Newsletter'],
    featured: false
  },
  {
    id: 'services-consultancy',
    name: 'Consultoria Premium',
    description: 'Site profissional para consultores e especialistas',
    category: 'Consultoria',
    style: 'Corporativo',
    audience: 'Freelancers',
    function: 'Agendamento',
    image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    demoUrl: 'https://preview.themeforest.net/item/consoel-business-consulting-html-template/full_screen_preview/49147260',
    techStack: ['React', 'Calendar', 'Payment'],
    responsiveLevel: 5,
    pages: ['Home', 'Serviços', 'Agenda', 'Sobre', 'Contato'],
    features: ['Agendamento online', 'Pagamento integrado', 'Videoconferência', 'CRM'],
    featured: false
  }
];

// Componente de Estrela que muda de posição
const MovingStar = ({ delay, speed, layer }) => {
  const [position, setPosition] = useState({
    x: Math.random() * 100,
    y: Math.random() * 100
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition({
        x: Math.random() * 100,
        y: Math.random() * 100
      });
    }, speed);

    return () => clearInterval(interval);
  }, [speed]);

  const size = layer === 1 ? 1 : layer === 2 ? 2 : 3;
  const color = layer === 1 ? 'bg-white' : layer === 2 ? 'bg-emerald-200' : 'bg-cyan-300';
  const glow = layer === 1 ? 'rgba(255,255,255,0.6)' : layer === 2 ? 'rgba(16,185,129,0.6)' : 'rgba(34,211,238,0.8)';

  return (
    <div
      className={`absolute ${color} rounded-full transition-all ease-in-out`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        left: `${position.x}%`,
        top: `${position.y}%`,
        transitionDuration: `${speed}ms`,
        boxShadow: `0 0 ${size * 3}px ${glow}`,
        animation: `twinkle ${2 + Math.random() * 2}s ease-in-out infinite ${delay}s`
      }}
    />
  );
};

const TemplateGrid = ({ onTemplateSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [sortPopular, setSortPopular] = useState(false);
  const [sortAlphabetical, setSortAlphabetical] = useState(false);
  const [filters, setFilters] = useState({
    category: 'Todos',
    style: 'Todos',
    audience: 'Todos',
    function: 'Todos'
  });

  const filteredTemplates = useMemo(() => {
    let result = templates.filter(template => {
      const matchesSearch = template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           template.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = filters.category === 'Todos' || template.category === filters.category;
      const matchesStyle = filters.style === 'Todos' || template.style === filters.style;
      const matchesAudience = filters.audience === 'Todos' || template.audience === filters.audience;
      const matchesFunction = filters.function === 'Todos' || template.function === filters.function;

      return matchesSearch && matchesCategory && matchesStyle && matchesAudience && matchesFunction;
    });

    // Ordenação
    if (sortPopular) {
      result = [...result].sort((a, b) => {
        // Featured templates primeiro
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return 0;
      });
    }

    if (sortAlphabetical) {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [searchTerm, filters, sortPopular, sortAlphabetical]);

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
    setSortPopular(false);
    setSortAlphabetical(false);
  };

  const hasActiveFilters = Object.values(filters).some(v => v !== 'Todos') || searchTerm !== '' || sortPopular || sortAlphabetical;

  return (
    <section id="templates" className="py-20 relative overflow-hidden bg-[#0f1419]">
      {/* Fundo espacial com estrelas que mudam de lugar */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Camada 1 - Estrelas distantes (pequenas e lentas) */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(60)].map((_, i) => (
            <MovingStar key={`layer1-${i}`} delay={Math.random() * 3} speed={5000 + Math.random() * 3000} layer={1} />
          ))}
        </div>

        {/* Camada 2 - Estrelas médias (verdes) */}
        <div className="absolute inset-0 opacity-50">
          {[...Array(30)].map((_, i) => (
            <MovingStar key={`layer2-${i}`} delay={Math.random() * 2} speed={4000 + Math.random() * 2000} layer={2} />
          ))}
        </div>

        {/* Camada 3 - Estrelas próximas (grandes e rápidas - cyan) */}
        <div className="absolute inset-0 opacity-70">
          {[...Array(15)].map((_, i) => (
            <MovingStar key={`layer3-${i}`} delay={Math.random() * 1} speed={3000 + Math.random() * 1500} layer={3} />
          ))}
        </div>

        {/* Nebulosas */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-600/5 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
      </div>

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.4); }
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

              <button
                onClick={() => setSortPopular(!sortPopular)}
                className={`px-5 py-3.5 rounded-lg font-medium transition-all flex items-center gap-2 ${
                  sortPopular
                    ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-[#1a1f2e] border border-gray-700/50 text-gray-300 hover:border-cyan-500/50'
                }`}
              >
                <TrendingUp className="w-5 h-5" />
                <span className="hidden sm:inline">Popular</span>
              </button>

              <button
                onClick={() => setSortAlphabetical(!sortAlphabetical)}
                className={`px-5 py-3.5 rounded-lg font-medium transition-all flex items-center gap-2 ${
                  sortAlphabetical
                    ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/25'
                    : 'bg-[#1a1f2e] border border-gray-700/50 text-gray-300 hover:border-purple-500/50'
                }`}
                title="Ordenar alfabeticamente"
              >
                <span className="text-lg font-bold">A-Z</span>
              </button>
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
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredTemplates.map((template) => (
            <div
              key={template.id}
              onClick={() => onTemplateSelect && onTemplateSelect(template)}
              className="group cursor-pointer relative"
            >
              <div className="absolute inset-0 bg-emerald-500/0 group-hover:bg-emerald-500/5 rounded-xl blur-xl transition-all duration-500" />
              
              <div className="relative bg-[#1a1f2e] border border-gray-700/50 rounded-xl overflow-hidden hover:border-emerald-500/50 transition-all duration-300 flex flex-col h-full hover:shadow-2xl hover:shadow-emerald-500/10">
                <div className="relative overflow-hidden aspect-video">
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

                <div className="p-5 flex flex-col justify-between flex-grow">
                  <div className="flex-grow">
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

                  <button className="w-full px-4 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2 group/btn shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 mt-auto">
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