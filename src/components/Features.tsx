import React, { useState, useRef, useEffect, useCallback } from 'react';
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
    Heart,
    Sparkles,
    TrendingUp,
    LayoutGrid,
    ArrowRight,
    Monitor,
    Settings,
    RotateCw,
    X,
    MoveRight
} from 'lucide-react';

// =========================================================================
// COMPONENTE: Modal para visualização ampliada e simulação 3D (REFINADO E INTERATIVO)
// =========================================================================
const GalleryViewerModal = ({ banner, onClose }) => {
    if (!banner) return null;

    // Rotação inicial para a imagem "ficar em pé" no modal
    const INITIAL_ROTATION_X = -15; // Ajuste este valor para mais ou menos "em pé"
    const [rotation, setRotation] = useState({ x: INITIAL_ROTATION_X, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const modalImageRef = useRef(null);

    // Resetar rotação e aplicar a rotação inicial ao abrir o modal
    useEffect(() => {
        setRotation({ x: INITIAL_ROTATION_X, y: 0 });
    }, [banner]); // Depende do banner para resetar quando um novo banner é selecionado

    const handleMouseDown = useCallback((e) => {
        setIsDragging(true);
        e.currentTarget.style.userSelect = 'none'; // Previne seleção de texto
        e.currentTarget.style.cursor = 'grabbing'; // Altera o cursor imediatamente
    }, []);

    const handleMouseMove = useCallback((e) => {
        if (!isDragging || !modalImageRef.current) return;

        const { movementX, movementY } = e;
        const sensitivity = 0.2; // Sensibilidade para arrastar

        setRotation(prev => ({
            x: prev.x - movementY * sensitivity, // Inverte o movimento Y para rotação X intuitiva
            y: prev.y + movementX * sensitivity // Movimento X para rotação Y intuitiva
        }));
    }, [isDragging]);

    const handleMouseUp = useCallback(() => {
        setIsDragging(false);
        if (modalImageRef.current) {
            modalImageRef.current.style.userSelect = 'auto';
            modalImageRef.current.style.cursor = 'grab'; // Volta o cursor
        }
    }, []);

    // Adiciona e remove listeners globais para arrastar fora do elemento
    useEffect(() => {
        if (isDragging) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
        } else {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging, handleMouseMove, handleMouseUp]);

    // Calcula uma sombra dinâmica baseada na rotação
    const shadowOffset = 50; // Tamanho base da sombra
    const shadowIntensity = 0.5; // Opacidade base
    // Ajustar o cálculo da sombra para corresponder à nova perspectiva
    const offsetX = Math.sin(rotation.y * Math.PI / 180) * shadowOffset;
    const offsetY = Math.sin(rotation.x * Math.PI / 180) * shadowOffset * -1; // Ajuste para a sombra acompanhar a rotação X
    const blur = 100; // Borrão da sombra

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80 backdrop-blur-md transition-opacity duration-300 animate-fadeIn">
            <div 
                className="absolute inset-0" 
                onClick={onClose}
                aria-label="Fechar Galeria Ampliada"
            ></div>
            
            <div className="relative bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-8 max-w-4xl w-full mx-auto animate-zoomIn transform transition-all duration-300">
                
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white flex items-center justify-center transition-colors hover:bg-gray-300 dark:hover:bg-gray-600 z-10 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    aria-label="Fechar"
                >
                    <X className="w-5 h-5" />
                </button>

                <div className="text-center mb-6">
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{banner.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">{banner.description}</p>
                </div>

                {/* Imagem Ampliada com Simulação 3D Interativa (Drag) */}
                <div 
                    ref={modalImageRef}
                    className={`relative w-full h-96 bg-gray-200 dark:bg-gray-700 rounded-2xl overflow-hidden cursor-${isDragging ? 'grabbing' : 'grab'} transition-shadow duration-300 group perspective-1000`}
                    onMouseDown={handleMouseDown}
                    style={{
                        transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                        transformStyle: 'preserve-3d',
                        transition: isDragging ? 'none' : 'transform 0.2s ease-out, box-shadow 0.3s ease',
                        boxShadow: `
                            ${offsetX}px ${offsetY}px ${blur}px rgba(0, 0, 0, ${shadowIntensity}),
                            0 10px 20px rgba(0, 0, 0, 0.2)
                        `,
                    }}
                >
                    <div 
                        className="absolute inset-0 transition-all duration-300"
                        style={{
                            backgroundImage: banner.image,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backfaceVisibility: 'hidden',
                        }}
                    ></div>
                    
                    {/* Indicador de Rotação 3D */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <RotateCw className="w-12 h-12 text-white opacity-80 animate-spin-fast-modal" />
                    </div>
                </div>

                <div className="mt-8 flex justify-center space-x-4">
                    <a
                        href="#download"
                        className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${banner.color} text-white rounded-xl font-semibold hover:opacity-90 transition-all shadow-md text-lg`}
                    >
                        <Sparkles className="w-5 h-5 mr-2" />
                        Baixar Template
                    </a>
                    <button
                        onClick={onClose}
                        className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 rounded-xl font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors shadow-md text-lg"
                    >
                        <MoveRight className="w-5 h-5 mr-2 transform rotate-180" />
                        Voltar à Galeria
                    </button>
                </div>
            </div>
        </div>
    );
};
// =========================================================================


const Features = () => {
    const [hoveredFeature, setHoveredFeature] = useState(null);
    const [selectedBanner, setSelectedBanner] = useState(null); 
    const [hoveredGalleryItem, setHoveredGalleryItem] = useState(null); // Para o hover no carrossel
    const [hoveredTech, setHoveredTech] = useState(null);

    const features = [
        { icon: Zap, title: 'Templates Profissionais', description: 'Mais de 100 templates cuidadosamente projetados por designers especialistas', color: 'from-emerald-400 to-emerald-600', bgGradient: 'from-emerald-500/10 to-emerald-600/5', stats: '100+ templates' },
        { icon: Palette, title: 'Personalização Total', description: 'Cores, fontes, layouts e conteúdo totalmente personalizáveis', color: 'from-blue-400 to-blue-600', bgGradient: 'from-blue-500/10 to-blue-600/5', stats: 'Ilimitado' },
        { icon: Smartphone, title: '100% Responsivo', description: 'Todos os templates funcionam perfeitamente em qualquer dispositivo', color: 'from-purple-400 to-purple-600', bgGradient: 'from-purple-500/10 to-purple-600/5', stats: 'Mobile-first' },
        { icon: Search, title: 'SEO Otimizado', description: 'Estrutura otimizada para mecanismos de busca desde o primeiro dia', color: 'from-amber-400 to-yellow-500', bgGradient: 'from-amber-500/10 to-yellow-500/5', stats: 'Top rankings' },
        { icon: Shield, title: 'Segurança Garantida', description: 'Código limpo e seguro seguindo as melhores práticas do mercado', color: 'from-red-400 to-red-600', bgGradient: 'from-red-500/10 to-red-600/5', stats: 'SSL incluso' },
        { icon: Headphones, title: 'Suporte Premium', description: 'Suporte técnico especializado para todos os nossos clientes', color: 'from-teal-400 to-teal-600', bgGradient: 'from-teal-500/10 to-teal-600/5', stats: '24/7 disponível' }
    ];

    const stats = [
        { icon: Users, value: '10.000+', label: 'Clientes Satisfeitos', description: 'Em todo o mundo', color: { bg: 'from-blue-500 to-cyan-600' } },
        { icon: Globe, value: '50+', label: 'Países Atendidos', description: 'Presença global', color: { bg: 'from-purple-500 to-pink-600' } },
        { icon: Award, value: '99%', label: 'Taxa de Satisfação', description: 'Avaliações positivas', color: { bg: 'from-amber-400 to-yellow-500' } },
        { icon: Clock, value: '24/7', label: 'Suporte Disponível', description: 'Sempre que precisar', color: { bg: 'from-emerald-500 to-teal-600' } }
    ];

    const technologies = [
        { name: 'React', description: 'Framework moderno para interfaces dinâmicas', color: 'from-cyan-400 to-blue-500', gradient: 'from-cyan-500/10 to-blue-500/10', icon: '⚛️' },
        { name: 'TypeScript', description: 'Código mais seguro e manutenível', color: 'from-blue-400 to-blue-600', gradient: 'from-blue-500/10 to-blue-600/10', icon: '📘' },
        { name: 'Tailwind CSS', description: 'Design system profissional', color: 'from-teal-400 to-cyan-500', gradient: 'from-teal-500/10 to-cyan-500/10', icon: '🎨' },
        { name: 'Next.js', description: 'Performance e SEO otimizados', color: 'from-slate-600 to-slate-800', gradient: 'from-slate-500/10 to-slate-700/10', icon: '▲' },
        { name: 'Framer Motion', description: 'Animações suaves e profissionais', color: 'from-pink-400 to-purple-500', gradient: 'from-pink-500/10 to-purple-500/10', icon: '✨' },
        { name: 'Vercel', description: 'Hospedagem rápida e confiável', color: 'from-slate-700 to-slate-900', gradient: 'from-slate-500/10 to-slate-800/10', icon: '▲' }
    ];

    // Dados para a Galeria Digital (5 itens)
    const galleryItems = [
        {
            id: 1,
            icon: LayoutGrid,
            title: "Banners de Alta Conversão",
            description: "Designs focados em performance, prontos para suas campanhas de tráfego.",
            image: "url('https://preview.redd.it/mande-a-imagem-mais-aleat%C3%B3ria-e-estranha-da-sua-galeria-v0-8z8331adjekd1.jpeg?auto=webp&s=e5f02499f0e9102b6ff3ca0ac9a8fdc62f5c2149')", 
            color: 'from-red-500 to-pink-500',
            tag: 'Mais Vistos'
        },
        {
            id: 2,
            icon: Monitor,
            title: "Formatos Verticais Otimizados",
            description: "Perfeitos para Instagram Stories, Reels e TikTok, com design responsivo.",
            image: "url('https://source.unsplash.com/random/600x800?banner,mobile,ads')",
            color: 'from-blue-500 to-cyan-500',
            tag: 'Mobile Pro'
        },
        {
            id: 3,
            icon: Settings,
            title: "Personalização Imediata",
            description: "Edite textos e cores diretamente no editor e publique em minutos.",
            image: "url('https://source.unsplash.com/random/600x800?banner,editor,custom')",
            color: 'from-purple-500 to-indigo-500',
            tag: 'Easy Edit'
        },
        {
            id: 4,
            icon: Heart,
            title: "Design de Lançamento",
            description: "Modelos limpos e modernos, inspirados nas melhores tendências visuais.",
            image: "url('https://source.unsplash.com/random/600x800?banner,launch,trendy')",
            color: 'from-yellow-500 to-amber-500',
            tag: 'Novo'
        },
        {
            id: 5,
            icon: TrendingUp,
            title: "Analytics Integrado",
            description: "Saiba quais banners convertem mais com integração direta de rastreamento.",
            image: "url('https://source.unsplash.com/random/600x800?banner,analytics,data')",
            color: 'from-green-500 to-emerald-500',
            tag: 'Performance'
        },
    ];

    return (
        <section id="recursos" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
            <style>{`
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-8px); }
                }
                @keyframes pulse {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.05); }
                }
                @keyframes rotate {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @keyframes slideRight {
                    0%, 100% { transform: translateX(0); }
                    50% { transform: translateX(5px); }
                }
                .animate-fadeInUp { animation: fadeInUp 0.6s ease-out; }
                .animate-float { animation: float 2s ease-in-out infinite; }
                .animate-pulse-custom { animation: pulse 2s ease-in-out infinite; }
                .animate-rotate { animation: rotate 0.4s ease-out; }
                .animate-slideRight { animation: slideRight 1.5s ease-in-out infinite; }
                .feature-card:hover .icon-container { transform: scale(1.05) rotate(3deg); }
                .feature-card:hover { transform: translateY(-4px); }
                .stat-card:hover { transform: translateY(-6px) scale(1.02); }
                .tech-card { position: relative; overflow: hidden; }
                .tech-card::before { content: ''; position: absolute; top: 0; left: -100%; width: 100%; height: 100%; background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent); transition: left 0.5s; }
                .tech-card:hover::before { left: 100%; }
                .tech-card:hover { transform: translateY(-6px); }
                .tech-card:hover .tech-icon-emoji { transform: scale(1.2) rotate(10deg); }
                .tech-icon-emoji { transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1); }
                .transition-all { transition: all 0.3s ease; }
                .glass-effect { background: rgba(255, 255, 255, 0.05); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.1); }
                .dark .glass-effect { background: rgba(0, 0, 0, 0.2); border: 1px solid rgba(255, 255, 255, 0.05); }

                /* CSS para Carrossel Simulado (MAIS RÁPIDO: 40s) */
                @keyframes scroll-x {
                    from { transform: translateX(0); }
                    to { transform: translateX(calc(-50% - 1rem)); } 
                }
                .animate-scroll-slow {
                    animation: scroll-x 40s linear infinite; 
                }
                .group:hover .animate-scroll-slow {
                    animation-play-state: paused;
                }
                /* Animação mais rápida para o ícone de rotação no modal */
                .animate-spin-fast-modal { 
                    animation: rotate 5s linear infinite;
                }

                /* Animações para o Modal */
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes zoomIn {
                    from { transform: scale(0.9); opacity: 0; }
                    to { transform: scale(1); opacity: 1; }
                }
                .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
                .animate-zoomIn { animation: zoomIn 0.3s cubic-bezier(0.075, 0.82, 0.165, 1); }

                /* Perspectiva para a simulação 3D */
                .perspective-1000 {
                    perspective: 1000px;
                }
                
            `}</style>

            <GalleryViewerModal banner={selectedBanner} onClose={() => setSelectedBanner(null)} />

            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500 opacity-5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 opacity-5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Header da Seção de Recursos */}
                <div className="text-center mb-16 animate-fadeInUp">
                    <div className="inline-flex items-center px-4 py-2 bg-emerald-500 bg-opacity-10 rounded-full mb-6">
                        <Sparkles className="w-5 h-5 text-emerald-500 mr-2" />
                        <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Recursos Premium</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        Recursos que Fazem a{' '}
                        <span className="bg-gradient-to-r from-emerald-500 to-emerald-600 bg-clip-text text-transparent">
                            Diferença
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        Descubra por que milhares de empresas escolhem nossos templates para criar sua presença digital
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
                    {features.map((feature, index) => (
                        <div key={index} onMouseEnter={() => setHoveredFeature(index)} onMouseLeave={() => setHoveredFeature(null)} className="group relative feature-card transition-all" style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} rounded-2xl transition-opacity duration-300 ${hoveredFeature === index ? 'opacity-100' : 'opacity-0'}`}></div>
                            <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 border-2 border-gray-100 dark:border-gray-700 hover:border-transparent transition-all duration-200 shadow-lg hover:shadow-xl">
                                <div className="relative">
                                    <div className={`icon-container w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg relative overflow-hidden transition-all`}>
                                        <div className="absolute inset-0 bg-white opacity-20 group-hover:scale-150 transition-transform duration-300"></div>
                                        <feature.icon className="w-8 h-8 text-white relative z-10" />
                                    </div>
                                    <div className={`absolute -top-2 -right-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg transition-opacity ${hoveredFeature === index ? 'opacity-100' : 'opacity-0'}`}>{feature.stats}</div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">{feature.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{feature.description}</p>
                                <div className={`h-1 bg-gradient-to-r ${feature.color} rounded-full mt-6 transition-all duration-300 ${hoveredFeature === index ? 'w-full' : 'w-0'}`} />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats Section */}
                <div className="mb-24">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full mb-6">
                            <TrendingUp className="w-5 h-5 text-emerald-500 mr-2" />
                            <span className="text-gray-700 dark:text-gray-300 font-semibold">Crescimento Comprovado</span>
                        </div>

                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            Números que{' '}
                            <span className="bg-gradient-to-r from-emerald-500 to-emerald-600 bg-clip-text text-transparent">
                                Impressionam
                            </span>
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                            Nossa trajetória de sucesso em números
                        </p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {stats.map((stat, index) => (
                            <div key={index} className="group relative stat-card transition-all" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color.bg} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300 blur-xl`}></div>
                                <div className="relative text-center bg-white dark:bg-gray-800 rounded-2xl p-8 border-2 border-gray-100 dark:border-gray-700 shadow-lg group-hover:shadow-2xl transition-all duration-300">
                                    <div className="animate-float">
                                        <div className={`w-16 h-16 bg-gradient-to-br ${stat.color.bg} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                                            <stat.icon className="w-8 h-8 text-white" />
                                        </div>
                                    </div>
                                    <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color.bg} bg-clip-text text-transparent mb-2`}>{stat.value}</div>
                                    <div className="text-gray-900 dark:text-white font-semibold mb-1">{stat.label}</div>
                                    <div className="text-gray-500 dark:text-gray-400 text-sm">{stat.description}</div>
                                    <div className={`h-1 bg-gradient-to-r ${stat.color.bg} rounded-full mt-6`} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Technology Stack */}
                <div className="mb-24">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center px-5 py-2.5 glass-effect rounded-full mb-6 shadow-lg">
                            <Code className="w-5 h-5 text-emerald-500 mr-2" />
                            <span className="text-gray-700 dark:text-gray-200 font-semibold tracking-wide">Stack Tecnológico</span>
                        </div>

                        <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                            Tecnologias de{' '}
                            <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
                                Ponta
                            </span>
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                            Utilizamos as melhores tecnologias do mercado para garantir performance e qualidade excepcional
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {technologies.map((tech, index) => (
                            <div key={index} onMouseEnter={() => setHoveredTech(index)} onMouseLeave={() => setHoveredTech(null)} className="group relative tech-card transition-all duration-300">
                                <div className={`absolute inset-0 bg-gradient-to-br ${tech.gradient} rounded-2xl transition-all duration-300 ${hoveredTech === index ? 'opacity-100' : 'opacity-0'}`}></div>
                                <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-7 border-2 border-gray-100 dark:border-gray-700 hover:border-transparent shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                                    <div className="flex items-start gap-5">
                                        <div className={`tech-icon-emoji text-4xl flex items-center justify-center w-14 h-14 bg-gradient-to-br ${tech.color} rounded-xl shadow-xl`}>
                                            <span className="text-2xl">{tech.icon}</span>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">{tech.name}</h4>
                                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{tech.description}</p>
                                        </div>
                                    </div>
                                    <div className={`h-1.5 bg-gradient-to-r ${tech.color} rounded-full mt-5 transition-all duration-300 ${hoveredTech === index ? 'w-full opacity-100' : 'w-0 opacity-0'}`} />
                                    <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${tech.color} opacity-5 rounded-bl-full transition-opacity duration-300 ${hoveredTech === index ? 'opacity-10' : 'opacity-0'}`}></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-gray-500 dark:text-gray-400 text-sm italic">
                            Stack cuidadosamente selecionado para máxima eficiência, escalabilidade e performance
                        </p>
                    </div>
                </div>

                {/* NOVA SEÇÃO: GALERIA DIGITAL com Carrossel Simulado e Interatividade 3D */}
                <div id="galeria-digital" className="mb-24">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center px-4 py-2 bg-emerald-500 bg-opacity-10 rounded-full mb-6">
                            <LayoutGrid className="w-5 h-5 text-emerald-500 mr-2" />
                            <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Banners para Marketing</span>
                        </div>

                        <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight max-w-4xl mx-auto">
                            Explore a <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-teal-400">Galeria Digital</span>
                        </h3>
                        <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
                            Coleção de banners em rotação infinita. Clique para uma visualização **3D interativa** e profissional.
                        </p>
                    </div>

                    {/* Contêiner do Carrossel Simulado */}
                    <div className="relative overflow-hidden group">
                        <div className="flex whitespace-nowrap space-x-8 animate-scroll-slow">
                            {/* Duplica os itens para criar o efeito de loop infinito */}
                            {[...galleryItems, ...galleryItems].map((item, index) => (
                                <div
                                    key={`${item.id}-${index}`}
                                    onMouseEnter={() => setHoveredGalleryItem(item.id)}
                                    onMouseLeave={() => setHoveredGalleryItem(null)}
                                    onClick={() => setSelectedBanner(item)}
                                    className={`relative flex-shrink-0 w-72 h-[420px] bg-white dark:bg-gray-800 rounded-3xl border-2 border-gray-200 dark:border-gray-700 cursor-pointer shadow-xl transition-all duration-300 ease-in-out perspective-1000 transform 
                                    ${hoveredGalleryItem === item.id ? 'scale-[1.03] shadow-2xl border-emerald-500 dark:border-emerald-400' : 'rotate-y-1 rotate-x-1'}`
                                    }
                                    style={{
                                        transformStyle: 'preserve-3d',
                                        zIndex: hoveredGalleryItem === item.id ? 20 : 10,
                                        transform: hoveredGalleryItem === item.id 
                                            ? 'scale(1.03) translateY(-8px) rotateX(0deg) rotateY(0deg)' 
                                            : `translateY(0px) rotateX(1deg) rotateY(${index % 2 === 0 ? '1deg' : '-1deg'})`,
                                    }}
                                >
                                    {/* Adicionado um container para o efeito parallax */}
                                    <div className="absolute inset-0 transition-transform duration-300 ease-out" 
                                         style={{ transform: hoveredGalleryItem === item.id ? 'translateZ(20px)' : 'translateZ(0px)' }}>
                                        <div 
                                            className="absolute inset-0 transition-all duration-300"
                                            style={{
                                                backgroundImage: item.image,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                                borderRadius: '1.5rem', 
                                                backfaceVisibility: 'hidden',
                                            }}
                                        >
                                            <div className="flex justify-between items-start p-4 bg-gradient-to-b from-black/50 to-transparent rounded-t-3xl">
                                                <item.icon className="w-6 h-6 text-white" />
                                                <span className={`text-xs font-semibold px-3 py-1 rounded-full text-white bg-gradient-to-r ${item.color} shadow-md`}>
                                                    {item.tag}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Informações na parte inferior com parallax */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-3xl transition-transform duration-300 ease-out"
                                         style={{ transform: hoveredGalleryItem === item.id ? 'translateZ(30px)' : 'translateZ(0px)' }}>
                                        <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                                        <div className="flex items-center text-sm font-medium text-emerald-400">
                                            Ver em 3D <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Fim do Contêiner do Carrossel Simulado */}

                    {/* CTA Final para a Galeria */}
                    <div className="mt-16 text-center">
                        <a
                            href="#acesso-galeria"
                            className="inline-flex items-center px-10 py-5  bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-2xl font-bold text-xl hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-2xl hover:shadow-emerald-500/50 hover:scale-[1.02]"
                        >
                            <Sparkles className="w-6 h-6 mr-3" />
                            Começar a Criar Banners Agora
                            <ArrowRight className="w-5 h-5 ml-3" />
                        </a>
                    </div>
                </div>
                {/* Fim da Seção Galeria Digital */}
            </div>
        </section>
    );
};

export default Features;