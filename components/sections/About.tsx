export default function About() {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-darker leading-tight">
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
