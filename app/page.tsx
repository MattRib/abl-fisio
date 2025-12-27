/**
 * Home Page - Landing Page de Fisioterapia
 * Compõe todas as seções da landing page
 */

import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import About from '@/components/sections/About';
import Differentials from '@/components/sections/Differentials';
import Testimonials from '@/components/sections/Testimonials';
import Location from '@/components/sections/Location';
import FAQ from '@/components/sections/FAQ';

export default function Home() {
  return (
    <>
      {/* Hero Section - Chamada principal com CTA */}
      <Hero />

      {/* Services Section - Serviços especializados */}
      <Services />

      {/* About Section - Sobre o consultório e missão */}
      <About />

      {/* Differentials Section - Diferenciais competitivos */}
      <Differentials />

      {/* Testimonials Section - Depoimentos de pacientes */}
      <Testimonials />

      {/* Location Section - Mapa e informações de contato */}
      <Location />

      {/* FAQ Section - Perguntas frequentes */}
      <FAQ />

      {/* CTA Final - Chamada final para ação */}
      {/* <CTA /> */}
    </>
  );
}
