"use client";

import TestimonialCard from "@/components/ui/TestimonialCard";
import { getWhatsAppUrl } from "@/lib/utils/whatsapp";
import { useState, useRef } from "react";
import { triggerHaptic } from "@/lib/utils/haptic";
import { useScrollReveal } from "@/lib/hooks/useScrollReveal";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  const testimonials = [
    {
      quote: "Cheguei com dor no ombro e sem conseguir levantar o braço. Depois de algumas sessões, já notei melhora. A fisioterapeuta explica tudo com clareza e tem muito cuidado. Me sinto segura no tratamento.",
      name: "Maria Silva",
      role: "Fisioterapia Ortopédica",
      image: "/assets/testimunials/maria.png"
    },
    {
      quote: "Sofria com dores nas costas há anos. O RPG me ajudou a entender melhor minha postura. As sessões são intensas, mas já sinto diferença no dia a dia. Vale muito a pena.",
      name: "João Santos",
      role: "RPG",
      image: "/assets/testimunials/joão.png"
    },
    {
      quote: "Fiz drenagem linfática após a cirurgia e o resultado foi além do que esperava. O inchaço diminuiu bem e a profissional é muito atenciosa. Recomendo.",
      name: "Ana Costa",
      role: "Drenagem Linfática",
      image: "/assets/testimunials/ana.png"
    }
  ];

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const cardWidth = scrollContainerRef.current.offsetWidth;
      const newIndex = Math.round(scrollLeft / cardWidth);
      setActiveIndex(newIndex);
    }
  };

  return (
    <section
      ref={ref}
      id="depoimentos"
      className={`py-16 md:py-24 bg-white bg-dot-pattern-dense relative overflow-hidden transition-all duration-700 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-12"
      }`}
    >
      {/* Aspas gigantes estilizadas - Fundo esquerdo */}
      <div className="absolute top-12 left-8 md:left-16 w-48 h-48 md:w-64 md:h-64 opacity-[0.025] pointer-events-none">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-primary">
          <text x="0" y="80" fontSize="100" fontFamily="Georgia, serif" fontWeight="700" fill="currentColor">"</text>
        </svg>
      </div>

      {/* Aspas gigantes de fechamento - Fundo direito */}
      <div className="absolute bottom-12 right-8 md:right-16 w-48 h-48 md:w-64 md:h-64 opacity-[0.025] pointer-events-none rotate-180">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-primary">
          <text x="0" y="80" fontSize="100" fontFamily="Georgia, serif" fontWeight="700" fill="currentColor">"</text>
        </svg>
      </div>

      {/* Heart shape abstrato - Centro fundo (conexão emocional) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 opacity-[0.02] pointer-events-none animate-pulse-slow">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <defs>
            <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#99CD85', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#CFE0BC', stopOpacity: 0.6 }} />
            </linearGradient>
          </defs>
          <path
            fill="url(#heartGradient)"
            d="M100,170 C100,170 30,120 30,80 C30,50 50,30 75,30 C85,30 95,35 100,45 C105,35 115,30 125,30 C150,30 170,50 170,80 C170,120 100,170 100,170 Z"
          />
        </svg>
      </div>

      {/* Estrelas dispersas - Avaliações positivas */}
      <div className="absolute top-20 right-1/4 w-8 h-8 opacity-[0.04] pointer-events-none animate-pulse-slow">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-primary">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      </div>

      <div className="absolute top-1/3 left-1/5 w-6 h-6 opacity-[0.04] pointer-events-none animate-pulse-slow" style={{ animationDelay: '0.5s' }}>
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-accent">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      </div>

      <div className="absolute bottom-1/4 right-1/5 w-7 h-7 opacity-[0.04] pointer-events-none animate-pulse-slow" style={{ animationDelay: '1s' }}>
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-secondary">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      </div>

      {/* Ondas suaves horizontais - Topo */}
      <div className="absolute top-0 left-0 w-full h-24 opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
          <path
            d="M0,50 Q300,20 600,50 T1200,50 L1200,0 L0,0 Z"
            fill="url(#waveGradientTop)"
          />
          <defs>
            <linearGradient id="waveGradientTop" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#99CD85', stopOpacity: 0.6 }} />
              <stop offset="50%" style={{ stopColor: '#CFE0BC', stopOpacity: 0.8 }} />
              <stop offset="100%" style={{ stopColor: '#7FA653', stopOpacity: 0.6 }} />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Ondas suaves horizontais - Rodapé */}
      <div className="absolute bottom-0 left-0 w-full h-24 opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
          <path
            d="M0,50 Q300,80 600,50 T1200,50 L1200,120 L0,120 Z"
            fill="url(#waveGradientBottom)"
          />
          <defs>
            <linearGradient id="waveGradientBottom" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#7FA653', stopOpacity: 0.6 }} />
              <stop offset="50%" style={{ stopColor: '#CFE0BC', stopOpacity: 0.8 }} />
              <stop offset="100%" style={{ stopColor: '#99CD85', stopOpacity: 0.6 }} />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">

          {/* Header centralizado */}
          <div className="text-center mb-12 md:mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Depoimentos
            </span>
            <h2 className="text-fluid-h2 font-bold text-darker mt-3 mb-4">
              O Que Dizem{" "}
              <span className="text-primary">Nossos Pacientes</span>
            </h2>
            <p className="text-fluid-body text-dark/70 max-w-2xl mx-auto">
              Histórias reais de quem recuperou qualidade de vida
            </p>
          </div>

          {/* Carrossel Mobile / Grid Desktop */}
          <div className="relative">
            {/* Mobile: Carrossel com scroll-snap */}
            <div
              ref={scrollContainerRef}
              onScroll={handleScroll}
              className="md:hidden flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4 scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="snap-center shrink-0 w-[85%] h-auto first:pl-0 last:pr-0">
                  <TestimonialCard
                    quote={testimonial.quote}
                    name={testimonial.name}
                    role={testimonial.role}
                    image={testimonial.image}
                  />
                </div>
              ))}
            </div>

            {/* Desktop: Grid */}
            <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  quote={testimonial.quote}
                  name={testimonial.name}
                  role={testimonial.role}
                  image={testimonial.image}
                />
              ))}
            </div>

            {/* Dots indicadores - Mobile Only com touch target mínimo */}
            <div className="md:hidden flex justify-center gap-1 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (scrollContainerRef.current) {
                      const cardWidth = scrollContainerRef.current.offsetWidth;
                      scrollContainerRef.current.scrollTo({
                        left: cardWidth * index,
                        behavior: 'smooth'
                      });
                      triggerHaptic('light');
                    }
                  }}
                  className="p-3 min-w-[48px] min-h-[48px] flex items-center justify-center tap-feedback"
                  aria-label={`Ver depoimento ${index + 1}`}
                >
                  <span className={`block h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? 'w-8 bg-primary'
                      : 'w-2 bg-gray-300'
                  }`} />
                </button>
              ))}
            </div>
          </div>

          {/* Micro-CTA - Contextualizado */}
          <div className="mt-12 md:mt-16 text-center">
            <div className="inline-flex flex-col items-center gap-4 px-6 py-6 md:px-8 md:py-8 bg-gradient-to-br from-primary/5 to-secondary/10 rounded-2xl border border-primary/20 max-w-lg mx-auto">
              <p className="text-base md:text-lg font-semibold text-darker">
                Você também pode ter esses resultados
              </p>
              <p className="text-sm md:text-base text-dark/70">
                Milhares de pacientes já recuperaram sua qualidade de vida. Que tal ser o próximo?
              </p>
              <a
                href={getWhatsAppUrl("Olá! Vi os depoimentos e quero ter resultados assim também. Gostaria de agendar uma consulta.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                Quero Resultados Assim
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
