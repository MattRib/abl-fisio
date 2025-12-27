import { ADDRESS } from "@/lib/constants";

export default function FAQ() {
  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">

          {/* Header centralizado */}
          <div className="text-center mb-12 md:mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Perguntas Frequentes
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-darker mt-3 mb-4">
              Tire Suas{" "}
              <span className="text-primary">Dúvidas</span>
            </h2>
            <p className="text-base md:text-lg text-dark/70 max-w-2xl mx-auto">
              Respondemos as principais questões sobre nossos atendimentos
            </p>
          </div>

          {/* Lista de perguntas e respostas */}
          <div className="space-y-4">

            {/* FAQ 1 */}
            <details className="group bg-gradient-to-br from-white to-secondary/5 border border-gray-100 rounded-xl overflow-hidden hover:border-primary/30 transition-colors">
              <summary className="cursor-pointer p-6 md:p-8 font-semibold text-darker text-lg flex justify-between items-center transition-colors duration-300 ease-in-out group-open:text-primary">
                Quando devo procurar um fisioterapeuta?
                <svg
                  className="w-5 h-5 text-primary transition-transform duration-500 ease-in-out group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div style={{ willChange: 'max-height, opacity, transform, padding' }} className="px-6 md:px-8 pb-0 md:pb-0 text-dark/80 leading-relaxed max-h-0 opacity-0 translate-y-4 overflow-hidden group-open:pb-6 group-open:md:pb-8 group-open:max-h-[520px] group-open:opacity-100 group-open:translate-y-0 transition-[max-height,opacity,transform,padding] duration-700 ease-in-out-expo">
                <p>
                  Você deve procurar fisioterapia ao sentir dores persistentes, dificuldade de movimento,
                  após cirurgias ortopédicas ou quando perceber limitações nas atividades do dia a dia.
                  A fisioterapia também é indicada para prevenir lesões e melhorar postura.
                </p>
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="group bg-gradient-to-br from-white to-secondary/5 border border-gray-100 rounded-xl overflow-hidden hover:border-primary/30 transition-colors">
              <summary className="cursor-pointer p-6 md:p-8 font-semibold text-darker text-lg flex justify-between items-center transition-colors duration-300 ease-in-out group-open:text-primary">
                Quais tipos de dor a fisioterapia trata?
                <svg
                  className="w-5 h-5 text-primary transition-transform duration-500 ease-in-out group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div style={{ willChange: 'max-height, opacity, transform, padding' }} className="px-6 md:px-8 pb-0 md:pb-0 text-dark/80 leading-relaxed max-h-0 opacity-0 translate-y-4 overflow-hidden group-open:pb-6 group-open:md:pb-8 group-open:max-h-[520px] group-open:opacity-100 group-open:translate-y-0 transition-[max-height,opacity,transform,padding] duration-700 ease-in-out-expo">
                <p>
                  Tratamos dores na coluna, articulações, ombros, joelhos, lesões musculares e
                  tendinites. Também atendemos casos de dor crônica, pós-operatório e reabilitação
                  neurológica. Cada tratamento é personalizado conforme a necessidade do paciente.
                </p>
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="group bg-gradient-to-br from-white to-secondary/5 border border-gray-100 rounded-xl overflow-hidden hover:border-primary/30 transition-colors">
              <summary className="cursor-pointer p-6 md:p-8 font-semibold text-darker text-lg flex justify-between items-center transition-colors duration-300 ease-in-out group-open:text-primary">
                Onde fica o consultório no Méier?
                <svg
                  className="w-5 h-5 text-primary transition-transform duration-500 ease-in-out group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div style={{ willChange: 'max-height, opacity, transform, padding' }} className="px-6 md:px-8 pb-0 md:pb-0 text-dark/80 leading-relaxed max-h-0 opacity-0 translate-y-4 overflow-hidden group-open:pb-6 group-open:md:pb-8 group-open:max-h-[520px] group-open:opacity-100 group-open:translate-y-0 transition-[max-height,opacity,transform,padding] duration-700 ease-in-out-expo">
                <p>
                  Estamos localizados na {ADDRESS.street}, {ADDRESS.number}, no coração do {ADDRESS.neighborhood}.
                  Próximo ao metrô e com fácil acesso por diversas linhas de ônibus. A região conta com
                  estacionamento disponível nas proximidades.
                </p>
              </div>
            </details>

            {/* FAQ 4 */}
            <details className="group bg-gradient-to-br from-white to-secondary/5 border border-gray-100 rounded-xl overflow-hidden hover:border-primary/30 transition-colors">
              <summary className="cursor-pointer p-6 md:p-8 font-semibold text-darker text-lg flex justify-between items-center transition-colors duration-300 ease-in-out group-open:text-primary">
                Como funciona a primeira consulta?
                <svg
                  className="w-5 h-5 text-primary transition-transform duration-500 ease-in-out group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div style={{ willChange: 'max-height, opacity, transform, padding' }} className="px-6 md:px-8 pb-0 md:pb-0 text-dark/80 leading-relaxed max-h-0 opacity-0 translate-y-4 overflow-hidden group-open:pb-6 group-open:md:pb-8 group-open:max-h-[520px] group-open:opacity-100 group-open:translate-y-0 transition-[max-height,opacity,transform,padding] duration-700 ease-in-out-expo">
                <p>
                  Na primeira consulta, fazemos uma avaliação completa para entender seu histórico,
                  queixas e objetivos. Realizamos testes de movimento e elaboramos um plano de
                  tratamento personalizado. A sessão dura em média 50 minutos.
                </p>
              </div>
            </details>

            {/* FAQ 5 */}
            <details className="group bg-gradient-to-br from-white to-secondary/5 border border-gray-100 rounded-xl overflow-hidden hover:border-primary/30 transition-colors">
              <summary className="cursor-pointer p-6 md:p-8 font-semibold text-darker text-lg flex justify-between items-center transition-colors duration-300 ease-in-out group-open:text-primary">
                Quantas sessões são necessárias?
                <svg
                  className="w-5 h-5 text-primary transition-transform duration-500 ease-in-out group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div style={{ willChange: 'max-height, opacity, transform, padding' }} className="px-6 md:px-8 pb-0 md:pb-0 text-dark/80 leading-relaxed max-h-0 opacity-0 translate-y-4 overflow-hidden group-open:pb-6 group-open:md:pb-8 group-open:max-h-[520px] group-open:opacity-100 group-open:translate-y-0 transition-[max-height,opacity,transform,padding] duration-700 ease-in-out-expo">
                <p>
                  O número de sessões varia conforme cada caso. Alguns pacientes sentem melhora
                  já nas primeiras sessões, enquanto outros precisam de acompanhamento mais longo.
                  Reavaliamos constantemente a evolução para ajustar o tratamento.
                </p>
              </div>
            </details>

            {/* FAQ 6 */}
            <details className="group bg-gradient-to-br from-white to-secondary/5 border border-gray-100 rounded-xl overflow-hidden hover:border-primary/30 transition-colors">
              <summary className="cursor-pointer p-6 md:p-8 font-semibold text-darker text-lg flex justify-between items-center transition-colors duration-300 ease-in-out group-open:text-primary">
                Preciso de encaminhamento médico?
                <svg
                  className="w-5 h-5 text-primary transition-transform duration-500 ease-in-out group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div style={{ willChange: 'max-height, opacity, transform, padding' }} className="px-6 md:px-8 pb-0 md:pb-0 text-dark/80 leading-relaxed max-h-0 opacity-0 translate-y-4 overflow-hidden group-open:pb-6 group-open:md:pb-8 group-open:max-h-[520px] group-open:opacity-100 group-open:translate-y-0 transition-[max-height,opacity,transform,padding] duration-700 ease-in-out-expo">
                <p>
                  Não é obrigatório ter encaminhamento médico para iniciar a fisioterapia, pois
                  o fisioterapeuta tem autonomia profissional. Porém, caso tenha exames ou laudos
                  médicos, traga-os na primeira consulta para auxiliar na avaliação.
                </p>
              </div>
            </details>

          </div>

        </div>
      </div>
    </section>
  );
}
