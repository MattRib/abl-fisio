"use client";

import { ADDRESS } from "@/lib/constants";
import { getWhatsAppUrl } from "@/lib/utils/whatsapp";
import { useState } from "react";
import { triggerHaptic } from "@/lib/utils/haptic";
import { useScrollReveal } from "@/lib/hooks/useScrollReveal";

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState("");
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  const faqs = [
    {
      question: "Quando devo procurar um fisioterapeuta?",
      answer: "Você deve procurar fisioterapia ao sentir dores persistentes, dificuldade de movimento, após cirurgias ortopédicas ou quando perceber limitações nas atividades do dia a dia. A fisioterapia também é indicada para prevenir lesões e melhorar postura.",
      icon: (
        <svg className="w-6 h-6 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      question: "Quais tipos de dor a fisioterapia trata?",
      answer: "Tratamos dores na coluna, articulações, ombros, joelhos, lesões musculares e tendinites. Também atendemos casos de dor crônica, pós-operatório e reabilitação neurológica. Cada tratamento é personalizado conforme a necessidade do paciente.",
      icon: (
        <svg className="w-6 h-6 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      question: "Onde fica o consultório no Méier?",
      answer: `Estamos localizados na ${ADDRESS.street}, ${ADDRESS.number}, no coração do ${ADDRESS.neighborhood}. Próxima à estação de trem do Méier e com fácil acesso por diversas linhas de ônibus. A região conta com estacionamento disponível nas proximidades.`,
      icon: (
        <svg className="w-6 h-6 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      question: "Como funciona a primeira consulta?",
      answer: "Na primeira consulta, fazemos uma avaliação completa para entender seu histórico, queixas e objetivos. Realizamos testes de movimento e elaboramos um plano de tratamento personalizado. A sessão dura em média 50 minutos.",
      icon: (
        <svg className="w-6 h-6 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      )
    },
    {
      question: "Quantas sessões são necessárias?",
      answer: "O número de sessões varia conforme cada caso. Alguns pacientes sentem melhora já nas primeiras sessões, enquanto outros precisam de acompanhamento mais longo. Reavaliamos constantemente a evolução para ajustar o tratamento.",
      icon: (
        <svg className="w-6 h-6 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      question: "Preciso de encaminhamento médico?",
      answer: "Não é obrigatório ter encaminhamento médico para iniciar a fisioterapia, pois o fisioterapeuta tem autonomia profissional. Porém, caso tenha exames ou laudos médicos, traga-os na primeira consulta para auxiliar na avaliação.",
      icon: (
        <svg className="w-6 h-6 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    }
  ];

  const filteredFaqs = faqs.filter((faq) => {
    const query = searchQuery.toLowerCase();
    return (
      faq.question.toLowerCase().includes(query) ||
      faq.answer.toLowerCase().includes(query)
    );
  });

  return (
    <section
      ref={ref}
      id="faq"
      className={`py-16 md:py-24 bg-white bg-grid-pattern-dense relative overflow-hidden transition-all duration-700 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-12"
      }`}
    >
      {/* Question mark gigante estilizado - Fundo esquerdo */}
      <div className="absolute top-1/2 -translate-y-1/2 left-8 md:left-16 w-64 h-64 md:w-96 md:h-96 opacity-[0.025] pointer-events-none">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <defs>
            <linearGradient id="questionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#99CD85', stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: '#7FA653', stopOpacity: 0.8 }} />
              <stop offset="100%" style={{ stopColor: '#CFE0BC', stopOpacity: 0.6 }} />
            </linearGradient>
          </defs>
          {/* Parte superior do ? */}
          <path
            d="M 30,25 Q 30,10 50,10 Q 70,10 70,25 Q 70,35 60,40 L 55,50 Q 52,55 52,60"
            fill="none"
            stroke="url(#questionGradient)"
            strokeWidth="8"
            strokeLinecap="round"
          />
          {/* Ponto do ? */}
          <circle cx="52" cy="75" r="6" fill="url(#questionGradient)" />
        </svg>
      </div>

      {/* Lâmpada abstrata - Canto superior direito (Iluminação) */}
      <div className="absolute top-12 right-12 md:right-20 w-32 h-32 md:w-40 md:h-40 opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <defs>
            <linearGradient id="bulbGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#99CD85', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#7FA653', stopOpacity: 0.8 }} />
            </linearGradient>
          </defs>
          {/* Bulbo da lâmpada */}
          <path
            d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7z"
            fill="url(#bulbGradient)"
            stroke="url(#bulbGradient)"
            strokeWidth="0.5"
          />
          {/* Base da lâmpada */}
          <rect x="9" y="18" width="6" height="2" rx="0.5" fill="url(#bulbGradient)" opacity="0.7" />
          <rect x="9.5" y="20" width="5" height="1.5" rx="0.5" fill="url(#bulbGradient)" opacity="0.5" />
          {/* Raios de luz */}
          <line x1="12" y1="2" x2="12" y2="0.5" stroke="#99CD85" strokeWidth="0.8" opacity="0.6" />
          <line x1="17" y1="4" x2="18" y2="3" stroke="#99CD85" strokeWidth="0.8" opacity="0.6" />
          <line x1="7" y1="4" x2="6" y2="3" stroke="#99CD85" strokeWidth="0.8" opacity="0.6" />
        </svg>
      </div>

      {/* Círculos concêntricos - Busca/Foco */}
      <div className="absolute bottom-20 right-1/4 w-48 h-48 opacity-[0.02] pointer-events-none animate-pulse-slow">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Círculos de busca */}
          <circle cx="50" cy="50" r="45" fill="none" stroke="#99CD85" strokeWidth="0.8" opacity="0.4" />
          <circle cx="50" cy="50" r="35" fill="none" stroke="#7FA653" strokeWidth="1" opacity="0.6" />
          <circle cx="50" cy="50" r="25" fill="none" stroke="#99CD85" strokeWidth="1.2" opacity="0.8" />
          <circle cx="50" cy="50" r="15" fill="none" stroke="#CFE0BC" strokeWidth="1.5" opacity="1" />
          {/* Alça da lupa */}
          <line x1="75" y1="75" x2="90" y2="90" stroke="#7FA653" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
        </svg>
      </div>

      {/* Linhas de texto abstratas - Fundo (Respostas) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.015] overflow-hidden">
        <svg viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          {/* Simulando linhas de texto/respostas */}
          {/* Bloco 1 */}
          <line x1="100" y1="100" x2="500" y2="100" stroke="#7FA653" strokeWidth="2" strokeLinecap="round" />
          <line x1="100" y1="120" x2="450" y2="120" stroke="#99CD85" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="100" y1="140" x2="480" y2="140" stroke="#7FA653" strokeWidth="1.5" strokeLinecap="round" />

          {/* Bloco 2 */}
          <line x1="700" y1="200" x2="1100" y2="200" stroke="#99CD85" strokeWidth="2" strokeLinecap="round" />
          <line x1="700" y1="220" x2="1050" y2="220" stroke="#7FA653" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="700" y1="240" x2="1080" y2="240" stroke="#99CD85" strokeWidth="1.5" strokeLinecap="round" />

          {/* Bloco 3 */}
          <line x1="150" y1="400" x2="550" y2="400" stroke="#7FA653" strokeWidth="2" strokeLinecap="round" />
          <line x1="150" y1="420" x2="500" y2="420" stroke="#99CD85" strokeWidth="1.5" strokeLinecap="round" />

          {/* Bloco 4 */}
          <line x1="650" y1="550" x2="1050" y2="550" stroke="#99CD85" strokeWidth="2" strokeLinecap="round" />
          <line x1="650" y1="570" x2="1000" y2="570" stroke="#7FA653" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="650" y1="590" x2="1030" y2="590" stroke="#99CD85" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>

      {/* Ícones de pergunta/resposta decorativos */}
      <div className="absolute top-1/4 right-1/3 w-8 h-8 opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-primary">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" />
        </svg>
      </div>

      <div className="absolute bottom-1/3 left-1/4 w-7 h-7 opacity-[0.03] pointer-events-none animate-pulse-slow" style={{ animationDelay: '0.5s' }}>
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-accent">
          <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z" />
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">

          {/* Header centralizado */}
          <div className="text-center mb-12 md:mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Perguntas Frequentes
            </span>
            <h2 className="text-fluid-h2 font-bold text-darker mt-3 mb-4">
              Tire Suas{" "}
              <span className="text-primary">Dúvidas</span>
            </h2>
            <p className="text-fluid-body text-dark/70 max-w-2xl mx-auto">
              Respondemos as principais questões sobre nossos atendimentos
            </p>
          </div>

          {/* Busca - Mobile Only */}
          <div className="md:hidden mb-6">
            <div className="relative">
              <input
                type="search"
                placeholder="Buscar dúvida..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-12 pr-10 bg-white border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-darker placeholder:text-dark/50"
                aria-label="Buscar nas perguntas frequentes"
              />
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dark/50"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              {searchQuery && (
                <button
                  onClick={() => {
                    setSearchQuery("");
                    triggerHaptic('light');
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-dark/50 hover:text-darker transition-colors tap-feedback"
                  aria-label="Limpar busca"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
            {searchQuery && (
              <p className="mt-2 text-sm text-dark/60">
                {filteredFaqs.length} {filteredFaqs.length === 1 ? 'resultado encontrado' : 'resultados encontrados'}
              </p>
            )}
          </div>

          {/* Lista de perguntas e respostas */}
          {filteredFaqs.length > 0 ? (
            <div className="space-y-4">
              {filteredFaqs.map((faq, index) => (
                <details key={index} className="group bg-gradient-to-br from-white to-secondary/5 border border-gray-100 rounded-xl overflow-hidden hover:border-primary/30 hover:-translate-y-1 hover:shadow-xl transition-all duration-500">
                  <summary className="cursor-pointer p-6 md:p-8 font-semibold text-darker text-lg flex justify-between items-center transition-colors duration-300 ease-in-out group-open:text-primary">
                    <div className="flex items-center gap-3 md:gap-4">
                      {faq.icon}
                      <span>{faq.question}</span>
                    </div>
                    <svg
                      className="w-5 h-5 text-primary transition-transform duration-500 ease-in-out group-open:rotate-180 flex-shrink-0 ml-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div style={{ willChange: 'max-height, opacity, transform, padding' }} className="px-6 md:px-8 pb-0 md:pb-0 text-dark/80 leading-relaxed max-h-0 opacity-0 translate-y-4 overflow-hidden group-open:pb-6 group-open:md:pb-8 group-open:max-h-[520px] group-open:opacity-100 group-open:translate-y-0 transition-[max-height,opacity,transform,padding] duration-700 ease-in-out-expo">
                    <p>{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          ) : (
            /* Estado vazio - Nenhum resultado */
            <div className="text-center py-12">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-dark/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-darker mb-2">
                Nenhuma dúvida encontrada
              </h3>
              <p className="text-dark/60 mb-6">
                Tente buscar por outros termos ou limpe o filtro
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  triggerHaptic('light');
                }}
                className="inline-flex items-center gap-2 text-primary hover:text-accent font-semibold transition-colors tap-feedback"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Limpar busca
              </button>
            </div>
          )}

          {/* Micro-CTA - Contextualizado */}
          <div className="mt-12 md:mt-16 text-center">
            <div className="inline-flex flex-col items-center gap-4 px-6 py-6 md:px-8 md:py-8 bg-white rounded-2xl shadow-premium border border-primary/10 max-w-lg mx-auto">
              <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <p className="text-base md:text-lg font-semibold text-darker">
                Ainda tem dúvidas?
              </p>
              <p className="text-sm md:text-base text-dark/70">
                Nossa equipe está pronta para esclarecer todas as suas questões pelo WhatsApp
              </p>
              <a
                href={getWhatsAppUrl("Olá! Li as perguntas frequentes mas ainda tenho algumas dúvidas.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Falar com a Equipe
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
