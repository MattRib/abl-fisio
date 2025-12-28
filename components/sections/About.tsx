"use client";

import { useScrollReveal } from "@/lib/hooks/useScrollReveal";

export default function About() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.15 });

  return (
    <section
      ref={ref}
      id="sobre"
      className={`py-16 md:py-24 bg-white bg-dot-pattern relative overflow-hidden transition-all duration-700 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-12"
      }`}
    >
      {/* Shape orgânico grande - Canto superior esquerdo (Humanidade) */}
      <div className="absolute -top-24 -left-24 w-[500px] h-[500px] opacity-[0.11] pointer-events-none animate-float-slow">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <defs>
            <linearGradient id="aboutBlobGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#99CD85', stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: '#CFE0BC', stopOpacity: 0.8 }} />
              <stop offset="100%" style={{ stopColor: '#7FA653', stopOpacity: 0.6 }} />
            </linearGradient>
          </defs>
          <path
            fill="url(#aboutBlobGradient)"
            d="M51.3,-83.8C65.5,-75.2,75.8,-60.3,82.9,-44.2C90,-28.1,93.9,-10.8,93.4,6.8C92.9,24.4,88,42.3,77.8,56.4C67.6,70.5,52.1,80.8,35.4,86.5C18.7,92.2,0.8,93.3,-16.8,90.1C-34.4,86.9,-51.7,79.4,-65.9,67.4C-80.1,55.4,-91.2,38.9,-95.3,20.8C-99.4,2.7,-96.5,-17,-87.9,-33.1C-79.3,-49.2,-65,-61.7,-49.2,-69.8C-33.4,-77.9,-16.7,-81.6,0.5,-82.4C17.7,-83.2,37.1,-92.4,51.3,-83.8Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      {/* Hexágonos geométricos vazados - Canto inferior direito (Ciência) */}
      <div className="absolute bottom-12 right-12 w-64 h-64 opacity-[0.06] pointer-events-none animate-spin-slow">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Hexágono maior */}
          <polygon
            points="100,10 173.2,55 173.2,145 100,190 26.8,145 26.8,55"
            fill="none"
            stroke="#7FA653"
            strokeWidth="2"
            opacity="0.8"
          />
          {/* Hexágono médio */}
          <polygon
            points="100,40 155.9,72.5 155.9,137.5 100,170 44.1,137.5 44.1,72.5"
            fill="none"
            stroke="#99CD85"
            strokeWidth="1.5"
            opacity="0.6"
          />
          {/* Hexágono menor */}
          <polygon
            points="100,70 127.9,90 127.9,130 100,150 72.1,130 72.1,90"
            fill="none"
            stroke="#CFE0BC"
            strokeWidth="1"
            opacity="0.4"
          />
          {/* Linhas conectivas internas */}
          <line x1="100" y1="10" x2="100" y2="70" stroke="#63783D" strokeWidth="0.5" opacity="0.3" />
          <line x1="173.2" y1="55" x2="127.9" y2="90" stroke="#63783D" strokeWidth="0.5" opacity="0.3" />
          <line x1="173.2" y1="145" x2="127.9" y2="130" stroke="#63783D" strokeWidth="0.5" opacity="0.3" />
        </svg>
      </div>

      {/* Faixa diagonal sutil com gradiente */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/2 -left-1/4 w-[150%] h-px bg-gradient-to-r from-transparent via-primary/12 to-transparent transform -rotate-12"
          style={{ height: '120px', filter: 'blur(40px)' }}
        />
      </div>

      {/* Triângulos minimalistas decorativos - espalhados */}
      <div className="absolute top-1/4 right-1/4 w-16 h-16 opacity-[0.05] pointer-events-none animate-pulse-slow">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <polygon points="50,15 90,85 10,85" fill="none" stroke="#7FA653" strokeWidth="2" />
        </svg>
      </div>

      <div className="absolute bottom-1/3 left-1/4 w-12 h-12 opacity-[0.05] pointer-events-none rotate-45 animate-pulse-slow" style={{ animationDelay: '1s' }}>
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <polygon points="50,15 90,85 10,85" fill="none" stroke="#99CD85" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">

          {/* Coluna Esquerda - Conteúdo */}
          <article className="space-y-6">
            {/* Tag superior */}
            <div className="inline-block">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Sobre Nós
              </span>
            </div>

            {/* Título principal */}
            <h2 className="text-fluid-h2 font-bold text-darker leading-tight">
              Sua Recuperação,{" "}
              <span className="text-primary">Nossa Prioridade</span>
            </h2>

            {/* Descrição */}
            <div className="space-y-4 text-dark/80 leading-relaxed">
              <p>
                Acreditamos que cada pessoa tem necessidades únicas. Por isso, nosso
                atendimento começa com uma escuta atenta e uma avaliação completa para
                entender exatamente o que você precisa.
              </p>
              <p>
                Combinamos técnicas modernas como neuromodulação e liberação miofascial
                com abordagens tradicionais comprovadas. O resultado é um tratamento
                eficaz, pensado especialmente para você.
              </p>
              <p>
                Nosso compromisso vai além da sessão: queremos que você recupere sua
                qualidade de vida e volte a fazer o que ama com conforto e segurança.
              </p>
            </div>

            {/* Botão CTA (opcional) */}
            <div className="pt-4">
              <a
                href="#contato"
                className="inline-flex items-center text-primary hover:text-accent font-semibold transition-colors duration-300 group"
              >
                Conheça nossa abordagem
                <svg
                  className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </article>

          {/* Coluna Direita - Imagem */}
          <div className="relative order-first lg:order-last">
            {/* Elementos decorativos de fundo */}
            <div className="absolute -top-8 -left-8 w-48 h-48 bg-secondary/20 rounded-full blur-2xl -z-10" />
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />

            {/* Shape decorativo sutil - canto superior direito */}
            <div className="absolute top-4 right-4 w-20 h-20 border-4 border-primary/10 rounded-full -z-5" />

            {/* Container da imagem com proporção fixa - Preparado para next/image */}
            <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-white via-secondary/10 to-primary/5 rounded-2xl overflow-hidden shadow-xl border border-gray-100/50">
              {/*
                Placeholder temporário
                Substituir por:
                <Image
                  src="/images/about-clinic.jpg"
                  alt="Consultório de Fisioterapia no Méier"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={false}
                />
              */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-secondary/5 to-transparent">
                <div className="text-center p-8">
                  {/* Ícone médico sutil */}
                  <div className="w-20 h-20 mx-auto mb-4 bg-white/80 rounded-full flex items-center justify-center shadow-sm">
                    <svg
                      className="w-10 h-10 text-primary/60"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-darker/70">
                    Foto do consultório
                  </p>
                  <p className="text-xs text-dark/50 mt-1">
                    Recomendado: 800×600px
                  </p>
                </div>
              </div>

              {/* Overlay sutil para profundidade */}
              <div className="absolute inset-0 bg-gradient-to-t from-darker/5 to-transparent pointer-events-none" />
            </div>

            {/* Shape decorativo sutil - canto inferior esquerdo */}
            <div className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-accent/10 rounded-2xl rotate-12 -z-5" />
          </div>

        </div>
      </div>
    </section>
  );
}
