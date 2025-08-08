export interface Template {
  id: string;
  name: string;
  description: string;
  category: string;
  style: 'Minimal' | 'Vibrante' | 'Corporativo' | 'Escuro' | 'Clean';
  audience: 'Pequenos Negócios' | 'Freelancers' | 'Agências';
  function: 'eCommerce' | 'Agendamento' | 'Blog' | 'Portfólio';
  image: string;
  techStack: string[];
  responsiveLevel: number;
  pages: string[];
  features: string[];
  demoUrl?: string;
  featured?: boolean;
}

export interface FilterOptions {
  category: string;
  style: string;
  audience: string;
  function: string;
}