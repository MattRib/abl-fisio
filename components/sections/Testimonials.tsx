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
      className={`py-16 md:py-24 bg-white bg-dot-pattern-dense transition-all duration-700 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-12"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
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
