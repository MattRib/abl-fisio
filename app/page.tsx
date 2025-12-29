/**
 * Home Page - Landing Page de Fisioterapia
 * Compõe todas as seções da landing page com lazy loading estratégico
 */

import dynamic from 'next/dynamic';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';

// Lazy load de seções abaixo da dobra para melhor performance
const About = dynamic(() => import('@/components/sections/About'), {
  loading: () => <div className="py-16 md:py-24" />,
});

const Team = dynamic(() => import('@/components/sections/Team'), {
  loading: () => <div className="py-16 md:py-24" />,
});

const Differentials = dynamic(() => import('@/components/sections/Differentials'), {
  loading: () => <div className="py-16 md:py-24" />,
});

const Testimonials = dynamic(() => import('@/components/sections/Testimonials'), {
  loading: () => <div className="py-16 md:py-24" />,
});

const Location = dynamic(() => import('@/components/sections/Location'), {
  loading: () => <div className="py-16 md:py-24" />,
});

const FAQ = dynamic(() => import('@/components/sections/FAQ'), {
  loading: () => <div className="py-16 md:py-24" />,
});

const CTA = dynamic(() => import('@/components/sections/CTA'), {
  loading: () => <div className="py-16 md:py-20" />,
});

export default function Home() {
  return (
    <>
      {/* Hero Section - Chamada principal com CTA - Always loaded (above the fold) */}
      <Hero />

      {/* Services Section - Serviços especializados - Always loaded (high priority) */}
      <Services />

      {/* About Section - Sobre o consultório e missão - Lazy loaded */}
      <About />

      {/* Team Section - Equipe de profissionais - Lazy loaded */}
      <Team />

      {/* Differentials Section - Diferenciais competitivos - Lazy loaded */}
      <Differentials />

      {/* Testimonials Section - Depoimentos de pacientes - Lazy loaded */}
      <Testimonials />

      {/* Location Section - Mapa e informações de contato - Lazy loaded */}
      <Location />

      {/* FAQ Section - Perguntas frequentes - Lazy loaded */}
      <FAQ />

      {/* CTA Final - Chamada final para ação - Lazy loaded */}
      <CTA />
    </>
  );
}
