import { Template } from '../types/template';

export const templates: Template[] = [
  {
    id: 'ecommerce-minimal',
    name: 'Loja Clean',
    description: 'Template minimalista para e-commerce com foco na experiência do usuário',
    category: 'Loja Online',
    style: 'Minimal',
    audience: 'Pequenos Negócios',
    function: 'eCommerce',
    image: 'https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
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
    techStack: ['React', 'Calendar', 'Payment'],
    responsiveLevel: 5,
    pages: ['Home', 'Serviços', 'Agenda', 'Sobre', 'Contato'],
    features: ['Agendamento online', 'Pagamento integrado', 'Videoconferência', 'CRM'],
    featured: false
  }
];

export const categories = [
  'Loja Online',
  'Serviços',
  'Portfólio',
  'Blog',
  'Restaurante',
  'Evento',
  'Agência',
  'Consultoria'
];

export const styles = ['Minimal', 'Vibrante', 'Corporativo', 'Escuro', 'Clean'];
export const audiences = ['Pequenos Negócios', 'Freelancers', 'Agências'];
export const functions = ['eCommerce', 'Agendamento', 'Blog', 'Portfólio'];