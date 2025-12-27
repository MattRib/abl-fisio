import { ADDRESS } from "@/lib/constants";
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/utils/whatsapp";
import Button from "@/components/ui/Button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-secondary/30 to-white pt-20 pb-12 md:pt-32 md:pb-20 lg:h-screen lg:pt-0 lg:pb-0">
      <div className="container mx-auto px-6 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">

          {/* Coluna Esquerda - Conteúdo */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-darker leading-tight">
                Fisioterapia no {ADDRESS.neighborhood} –{" "}
                <span className="text-primary">
                  Atendimento Personalizado
                </span>
              </h1>

              <p className="text-xl text-dark/80 leading-relaxed max-w-xl">
                Tratamentos humanizados no coração do {ADDRESS.neighborhood}, {ADDRESS.city}.
                Cuidado profissional focado na sua recuperação e bem-estar.
              </p>
            </div>

            {/* Botões CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.schedule)}
                external
              >
                Agendar Consulta
              </Button>

              <Button
                variant="secondary"
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.info)}
                external
              >
                Fale Conosco
              </Button>
            </div>

            {/* Informação de Contato */}
            <div className="pt-6 border-t border-gray-200">
              <p className="text-primary font-semibold text-lg">
                Entre em contato via WhatsApp
              </p>
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
