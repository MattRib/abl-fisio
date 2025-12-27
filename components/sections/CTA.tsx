import { getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/utils";

export default function CTA() {
  const whatsappUrl = getWhatsAppUrl(WHATSAPP_MESSAGES.evaluation);

  return (
    <section className="py-20 bg-gradient-to-br from-primary to-accent">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Pronto para Cuidar da Sua Saúde?
          </h2>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Agende sua avaliação e inicie seu tratamento com profissionais especializados
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white hover:bg-gray-100 text-accent font-bold px-10 py-5 rounded-lg transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 text-lg"
          >
            Agendar Avaliação via WhatsApp
          </a>

          <p className="mt-8 text-white/80 text-sm">
            Resposta rápida • Atendimento personalizado • Profissionais qualificados
          </p>
        </div>
      </div>
    </section>
  );
}
