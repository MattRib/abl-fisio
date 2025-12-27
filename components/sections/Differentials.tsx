export default function Differentials() {
  return (
    <section id="diferenciais" className="py-16 md:py-24 bg-gradient-to-br from-secondary/20 to-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Header centralizado */}
          <div className="text-center mb-12 md:mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Por que nos escolher
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-darker mt-3 mb-4">
              Números que{" "}
              <span className="text-primary">Inspiram Confiança</span>
            </h2>
            <p className="text-base md:text-lg text-dark/70 max-w-2xl mx-auto">
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
              <div className="text-4xl md:text-5xl font-bold text-darker mb-2">
                5+
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
              <div className="text-4xl md:text-5xl font-bold text-darker mb-2">
                1000+
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
              <div className="text-4xl md:text-5xl font-bold text-darker mb-2">
                6
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
            <p className="text-base md:text-lg text-dark/80 leading-relaxed">
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
