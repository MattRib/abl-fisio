"use client";

import { useState, useEffect, useRef } from "react";
import { useScrollReveal } from "@/lib/hooks/useScrollReveal";

export default function Differentials() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [count1, setCount1] = useState(0); // Anos
  const [count2, setCount2] = useState(0); // Pacientes
  const [count3, setCount3] = useState(0); // Técnicas
  const sectionRef = useRef<HTMLElement>(null);
  const { ref: revealRef, isVisible } = useScrollReveal({ threshold: 0.1 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);

            // Animação para "5+"
            animateCount(0, 5, 1500, setCount1);

            // Animação para "1000+"
            animateCount(0, 1000, 2000, setCount2);

            // Animação para "6"
            animateCount(0, 6, 1200, setCount3);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const animateCount = (
    start: number,
    end: number,
    duration: number,
    setter: (value: number) => void
  ) => {
    const startTime = Date.now();
    const endTime = startTime + duration;

    const updateCount = () => {
      const now = Date.now();
      const remaining = endTime - now;

      if (remaining <= 0) {
        setter(end);
      } else {
        const progress = (duration - remaining) / duration;
        const current = Math.floor(start + (end - start) * progress);
        setter(current);
        requestAnimationFrame(updateCount);
      }
    };

    requestAnimationFrame(updateCount);
  };

  // Callback ref para combinar ambas as refs
  const setRefs = (element: HTMLElement | null) => {
    sectionRef.current = element;
    if (revealRef && 'current' in revealRef) {
      (revealRef as React.MutableRefObject<HTMLElement | null>).current = element;
    }
  };

  return (
    <section
      ref={setRefs}
      id="diferenciais"
      className={`py-16 md:py-24 bg-gradient-to-br from-secondary/20 to-white relative overflow-hidden transition-all duration-700 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-12"
      }`}
    >
      {/* Hexágonos vazados grandes - Canto superior direito (Estrutura) */}
      <div className="absolute -top-20 -right-20 w-[400px] h-[400px] opacity-[0.04] pointer-events-none animate-spin-slow">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Hexágono externo */}
          <polygon
            points="100,5 180,52.5 180,147.5 100,195 20,147.5 20,52.5"
            fill="none"
            stroke="#7FA653"
            strokeWidth="1.5"
            opacity="0.8"
          />
          {/* Hexágono médio */}
          <polygon
            points="100,30 160,65 160,135 100,170 40,135 40,65"
            fill="none"
            stroke="#99CD85"
            strokeWidth="1.2"
            opacity="0.6"
          />
          {/* Hexágono interno */}
          <polygon
            points="100,55 130,72.5 130,127.5 100,145 70,127.5 70,72.5"
            fill="none"
            stroke="#CFE0BC"
            strokeWidth="1"
            opacity="0.4"
          />
          {/* Linhas conectivas radiais */}
          <line x1="100" y1="5" x2="100" y2="55" stroke="#63783D" strokeWidth="0.5" opacity="0.3" />
          <line x1="180" y1="52.5" x2="130" y2="72.5" stroke="#63783D" strokeWidth="0.5" opacity="0.3" />
          <line x1="180" y1="147.5" x2="130" y2="127.5" stroke="#63783D" strokeWidth="0.5" opacity="0.3" />
          <line x1="100" y1="195" x2="100" y2="145" stroke="#63783D" strokeWidth="0.5" opacity="0.3" />
          <line x1="20" y1="147.5" x2="70" y2="127.5" stroke="#63783D" strokeWidth="0.5" opacity="0.3" />
          <line x1="20" y1="52.5" x2="70" y2="72.5" stroke="#63783D" strokeWidth="0.5" opacity="0.3" />
        </svg>
      </div>

      {/* Espiral geométrica minimalista - Canto inferior esquerdo */}
      <div className="absolute -bottom-16 -left-16 w-64 h-64 opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <defs>
            <linearGradient id="spiralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#99CD85', stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: '#7FA653', stopOpacity: 0.8 }} />
              <stop offset="100%" style={{ stopColor: '#CFE0BC', stopOpacity: 0.6 }} />
            </linearGradient>
          </defs>
          <path
            d="M 100,100
               Q 120,100 120,80
               Q 120,60 100,60
               Q 80,60 80,80
               Q 80,100 100,100
               Q 120,100 130,80
               Q 140,60 130,40
               Q 120,20 100,20
               Q 80,20 60,40
               Q 40,60 40,80
               Q 40,100 60,120
               Q 80,140 100,140"
            fill="none"
            stroke="url(#spiralGradient)"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Anéis concêntricos - Fundo centro (Crescimento progressivo) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.02] pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Anel 1 - Mais externo */}
          <circle cx="100" cy="100" r="95" fill="none" stroke="#99CD85" strokeWidth="0.5" opacity="0.3" />
          {/* Anel 2 */}
          <circle cx="100" cy="100" r="75" fill="none" stroke="#7FA653" strokeWidth="0.8" opacity="0.5" />
          {/* Anel 3 */}
          <circle cx="100" cy="100" r="55" fill="none" stroke="#99CD85" strokeWidth="1" opacity="0.7" />
          {/* Anel 4 */}
          <circle cx="100" cy="100" r="35" fill="none" stroke="#CFE0BC" strokeWidth="1.2" opacity="0.8" />
          {/* Anel 5 - Mais interno */}
          <circle cx="100" cy="100" r="15" fill="none" stroke="#7FA653" strokeWidth="1.5" opacity="1" />
          {/* Linhas radiais conectando os anéis */}
          <line x1="100" y1="5" x2="100" y2="195" stroke="#63783D" strokeWidth="0.3" opacity="0.2" />
          <line x1="5" y1="100" x2="195" y2="100" stroke="#63783D" strokeWidth="0.3" opacity="0.2" />
        </svg>
      </div>

      {/* Linhas conectivas entre cards - Grid de conexão */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] hidden lg:block">
        <svg viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          {/* Linhas horizontais conectando cards */}
          <line x1="200" y1="400" x2="1000" y2="400" stroke="#7FA653" strokeWidth="1" strokeDasharray="6 4" />
          {/* Linhas verticais */}
          <line x1="300" y1="300" x2="300" y2="500" stroke="#99CD85" strokeWidth="0.8" strokeDasharray="6 4" />
          <line x1="600" y1="300" x2="600" y2="500" stroke="#99CD85" strokeWidth="0.8" strokeDasharray="6 4" />
          <line x1="900" y1="300" x2="900" y2="500" stroke="#99CD85" strokeWidth="0.8" strokeDasharray="6 4" />
          {/* Nós de conexão */}
          <circle cx="300" cy="400" r="4" fill="#7FA653" opacity="0.5" />
          <circle cx="600" cy="400" r="4" fill="#99CD85" opacity="0.5" />
          <circle cx="900" cy="400" r="4" fill="#7FA653" opacity="0.5" />
        </svg>
      </div>

      {/* Elementos geométricos decorativos adicionais */}
      <div className="absolute top-1/4 left-1/4 w-12 h-12 opacity-[0.03] pointer-events-none rotate-45">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="80" height="80" fill="none" stroke="#7FA653" strokeWidth="2" />
        </svg>
      </div>

      <div className="absolute bottom-1/4 right-1/4 w-16 h-16 opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <polygon points="50,10 90,90 10,90" fill="none" stroke="#99CD85" strokeWidth="2" />
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">

          {/* Header centralizado */}
          <div className="text-center mb-12 md:mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Por que nos escolher
            </span>
            <h2 className="text-fluid-h2 font-bold text-darker mt-3 mb-4">
              Números que{" "}
              <span className="text-primary">Inspiram Confiança</span>
            </h2>
            <p className="text-fluid-body text-dark/70 max-w-2xl mx-auto">
              Nossa dedicação se reflete em cada resultado
            </p>
          </div>

          {/* Grid de métricas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">

            {/* Métrica 1 */}
            <article className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 text-center border border-gray-100">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="text-4xl md:text-5xl font-bold text-darker mb-2 tabular-nums">
                {count1}+
              </div>
              <h3 className="text-sm font-semibold text-dark uppercase tracking-wide">
                Anos de Experiência
              </h3>
            </article>

            {/* Métrica 2 */}
            <article className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 text-center border border-gray-100">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-accent/10 to-accent/5 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <div className="text-4xl md:text-5xl font-bold text-darker mb-2 tabular-nums">
                {count2.toLocaleString('pt-BR')}+
              </div>
              <h3 className="text-sm font-semibold text-dark uppercase tracking-wide">
                Pacientes Atendidos
              </h3>
            </article>

            {/* Métrica 3 */}
            <article className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 text-center border border-gray-100">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="text-4xl md:text-5xl font-bold text-darker mb-2 tabular-nums">
                {count3}
              </div>
              <h3 className="text-sm font-semibold text-dark uppercase tracking-wide">
                Técnicas Especializadas
              </h3>
            </article>

            {/* Métrica 4 */}
            <article className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 text-center border border-gray-100">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-accent/10 to-accent/5 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div className="text-4xl md:text-5xl font-bold text-darker mb-2">
                Méier
              </div>
              <h3 className="text-sm font-semibold text-dark uppercase tracking-wide">
                Localização Central
              </h3>
            </article>

          </div>

          {/* Texto de apoio */}
          <div className="mt-12 md:mt-16 mb-8 md:mb-12 text-center max-w-3xl mx-auto">
            <p className="text-fluid-body text-dark/80 leading-relaxed">
              Ao longo de anos dedicados à reabilitação e ao bem-estar, construímos nossa
              prática com base em três pilares: escuta atenta, técnica apurada e compromisso
              genuíno com cada pessoa que atendemos.
            </p>
          </div>

          {/* Lista de diferenciais */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-darker mb-1">
                  Atendimento Individualizado
                </h3>
                <p className="text-sm text-dark/70">
                  Cada paciente recebe tratamento personalizado de acordo com suas necessidades
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-darker mb-1">
                  Equipe Qualificada
                </h3>
                <p className="text-sm text-dark/70">
                  Profissionais experientes com formação em técnicas modernas de fisioterapia
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-darker mb-1">
                  Localização no Méier
                </h3>
                <p className="text-sm text-dark/70">
                  Fácil acesso no centro do bairro com transporte público próximo
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
