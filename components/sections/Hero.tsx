"use client";

import { ADDRESS, CONTACT } from "@/lib/constants";
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/utils/whatsapp";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { triggerHaptic } from "@/lib/utils/haptic";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-secondary/30 to-white pt-28 pb-12 md:pt-32 md:pb-20 lg:h-screen lg:pt-0 lg:pb-0">
      <div className="container mx-auto px-6 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">

          {/* Coluna Esquerda - Conteúdo */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <div className="space-y-3 md:space-y-4">
              {/* Título - Versão condensada mobile */}
              <h1 className="text-fluid-h1 font-bold text-darker leading-tight mt-4 md:mt-0">
                <span className="block md:inline">
                  Fisioterapia no {ADDRESS.neighborhood}
                </span>
                <span className="hidden md:inline"> – </span>
                <span className="block md:inline text-primary mt-2 md:mt-0">
                  Atendimento Personalizado
                </span>
              </h1>

              {/* Descrição - Condensada mobile */}
              <p className="text-fluid-body text-dark/80 leading-relaxed max-w-xl">
                <span className="md:hidden">
                  Cuidado profissional focado na sua recuperação e bem-estar no Méier.
                </span>
                <span className="hidden md:inline">
                  Tratamentos humanizados no coração do {ADDRESS.neighborhood}, {ADDRESS.city}.
                  Cuidado profissional focado na sua recuperação e bem-estar.
                </span>
              </p>
            </div>

            {/* Botões CTA - Com ícones */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              {/* Botão Agendar - Com ícone WhatsApp */}
              <a
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.schedule)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => triggerHaptic('medium')}
                className="btn-primary flex items-center justify-center gap-2 tap-feedback ripple-effect"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Agendar Consulta
              </a>

              {/* Click-to-Call - Mobile Only */}
              <a
                href={`tel:${CONTACT.phone}`}
                onClick={() => triggerHaptic('light')}
                className="md:hidden btn-secondary flex items-center justify-center gap-2 tap-feedback"
                aria-label="Ligar para a clínica"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Ligar Agora
              </a>

              {/* Botão Fale Conosco - Com ícone Chat */}
              <a
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.info)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => triggerHaptic('light')}
                className="btn-secondary flex items-center justify-center gap-2 tap-feedback"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Fale Conosco
              </a>
            </div>

            {/* Trust Badges - Mobile First */}
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
              {/* Badge 1 - Avaliações Google */}
              <div className="flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 bg-white rounded-full shadow-soft border border-gray-100">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-xs sm:text-sm font-semibold text-darker">
                  4.9 · <span className="text-dark/70">127 avaliações</span>
                </span>
              </div>

              {/* Badge 2 - CREFITO */}
              <div className="flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 bg-primary/5 rounded-full border border-primary/20">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-xs sm:text-sm font-semibold text-primary">
                  CREFITO Credenciado
                </span>
              </div>
            </div>
          </div>

          {/* Coluna Direita - Área Visual */}
          <div className="relative hidden lg:block overflow-visible">
            {/* Background decorativo com blur - camada -z-10 */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-secondary/15 to-transparent rounded-full blur-3xl" />
            </div>

            {/* Container principal - overflow visível para quebrar o círculo */}
            <div className="relative w-full h-[520px] flex items-center justify-center overflow-visible">
              
              {/* Círculo decorativo de fundo - camada z-0 - abaixado para alinhar com o corpo */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-white via-secondary/5 to-primary/5 shadow-2xl z-0" />

              {/* Imagem da fisioterapeuta - camada z-20 - corpo dentro do círculo com bordas arredondadas */}
              <div className="relative z-20 w-[420px] h-[420px] flex items-center justify-center overflow-visible">
                <div className="rounded-full overflow-hidden w-full h-full">
                  <Image
                    src="/assets/hero/img_hero.png"
                    alt="Profissional de Fisioterapia - ABL Fisioterapia"
                    width={420}
                    height={420}
                  className="object-cover w-full h-full scale-105 drop-shadow-2xl"
                  style={{ objectPosition: '50% 18%' }}
                    priority
                  />
                </div>
              </div>

              {/* Elementos decorativos flutuantes - camada z-30 */}

              {/* Ícone 1 - Topo Direita */}
              <div className="absolute top-8 right-4 z-30 w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full shadow-xl flex items-center justify-center animate-float hover:scale-110 transition-transform duration-300">
                <Image
                  src="/assets/hero/chiropractic.png"
                  alt="Tratamento Quiroprático"
                  width={40}
                  height={40}
                  className="object-contain drop-shadow-lg"
                />
              </div>

              {/* Ícone 2 - Meio Esquerda */}
              <div className="absolute top-1/2 -translate-y-1/2 -left-6 z-30 w-24 h-24 bg-gradient-to-br from-accent to-dark rounded-full shadow-xl flex items-center justify-center animate-float hover:scale-110 transition-transform duration-300">
                <Image
                  src="/assets/hero/rehabilitation.png"
                  alt="Reabilitação Física"
                  width={50}
                  height={50}
                  className="object-contain drop-shadow-lg"
                />
              </div>

              {/* Ícone 3 - Inferior Direita */}
              <div className="absolute bottom-12 right-12 z-30 w-18 h-18 bg-gradient-to-br from-secondary to-primary rounded-full shadow-xl flex items-center justify-center animate-float-delayed hover:scale-110 transition-transform duration-300">
                <Image
                  src="/assets/hero/stress.png"
                  alt="Controle de Estresse e Bem-estar"
                  width={36}
                  height={36}
                  className="object-contain drop-shadow-lg"
                />
              </div>

              {/* Shapes decorativos - camada -z-10 */}
              <div className="absolute top-1/4 left-1/4 w-40 h-40 border-2 border-dashed border-primary/20 rounded-full -z-10 animate-spin-slow" />
              <div className="absolute bottom-1/3 right-1/4 w-24 h-24 border-2 border-dashed border-secondary/15 rounded-full -z-10" />
            </div>
          </div>

        </div>
      </div>

      {/* Indicador de mais conteúdo - seta para baixo (desktop only) */}
      <a
        href="#servicos"
        aria-label="Ir para serviços"
        className="hidden lg:flex items-center justify-center absolute bottom-6 left-1/2 -translate-x-1/2 z-50 w-10 h-10 rounded-full bg-white/90 text-primary shadow-lg transition-transform duration-300 hover:-translate-y-1 animate-bounce-slow"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </a>
    </section>
  );
}
