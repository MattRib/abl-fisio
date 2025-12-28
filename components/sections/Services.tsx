import { SERVICES } from "@/lib/constants";
import ServiceCard from "@/components/ui/ServiceCard";
import { getWhatsAppUrl } from "@/lib/utils/whatsapp";

export default function Services() {
  return (
    <section id="servicos" className="py-16 md:py-24 bg-gradient-to-b from-white to-secondary/10 relative overflow-hidden">
      {/* Shape Decorativo Flutuante - Canto Superior Direito */}
      <div className="absolute top-12 right-0 md:right-12 w-64 h-64 md:w-96 md:h-96 pointer-events-none opacity-8 animate-float-slow">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="serviceGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#99CD85', stopOpacity: 0.6 }} />
              <stop offset="50%" style={{ stopColor: '#7FA653', stopOpacity: 0.4 }} />
              <stop offset="100%" style={{ stopColor: '#CFE0BC', stopOpacity: 0.3 }} />
            </linearGradient>
          </defs>
          <path fill="url(#serviceGradient1)" d="M47.3,-79.3C61.1,-72.8,72.3,-60.5,79.8,-46.3C87.3,-32.1,91.1,-16,91.6,0.4C92.1,16.8,89.3,33.6,81.3,47.8C73.3,62,60.1,73.6,45.2,80.8C30.3,88,13.7,90.8,-2.4,95.1C-18.5,99.4,-37,105.2,-52.3,99.2C-67.6,93.2,-79.7,75.4,-87.3,56.2C-94.9,37,-98,16.4,-96.5,-3.7C-95,-23.8,-88.9,-43.4,-78.5,-59.8C-68.1,-76.2,-53.4,-89.4,-37.6,-94.8C-21.8,-100.2,-4.8,-97.8,10.4,-92.3C25.6,-86.8,33.5,-85.8,47.3,-79.3Z" transform="translate(100 100)" />
        </svg>
      </div>

      {/* Linhas Onduladas de Flow - Background decorativo */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Linha Ondulada Superior */}
        <svg className="absolute top-1/4 left-0 w-full h-32 opacity-5" preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,60 Q300,10 600,60 T1200,60" fill="none" stroke="#99CD85" strokeWidth="3" />
          <path d="M0,80 Q300,30 600,80 T1200,80" fill="none" stroke="#7FA653" strokeWidth="2" opacity="0.5" />
        </svg>

        {/* Linha Ondulada Inferior */}
        <svg className="absolute bottom-1/4 left-0 w-full h-32 opacity-5" preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 Q300,90 600,40 T1200,40" fill="none" stroke="#CFE0BC" strokeWidth="3" />
          <path d="M0,60 Q300,110 600,60 T1200,60" fill="none" stroke="#99CD85" strokeWidth="2" opacity="0.5" />
        </svg>

        {/* Círculo Blur Decorativo - Esquerda */}
        <div className="absolute top-1/2 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Header centralizado */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-fluid-h2 font-bold text-darker mb-4">
            Nossos Serviços
          </h2>
          <p className="text-fluid-body text-dark/70 max-w-2xl mx-auto">
            Tratamentos especializados e personalizados para sua saúde
          </p>
        </div>

        {/* Grid de serviços - Responsivo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto place-items-center">
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={index}
              image={service.image}
              imageAlt={service.imageAlt}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        {/* Micro-CTA - Contextualizado */}
        <div className="mt-12 md:mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-4 px-6 py-6 md:px-8 md:py-8 bg-white rounded-2xl shadow-premium border border-primary/10 max-w-lg mx-auto">
            <p className="text-base md:text-lg font-semibold text-darker">
              Encontrou o tratamento ideal?
            </p>
            <p className="text-sm md:text-base text-dark/70">
              Agende uma avaliação gratuita e comece sua recuperação hoje mesmo
            </p>
            <a
              href={getWhatsAppUrl("Olá! Vi os serviços e gostaria de agendar uma avaliação.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Agendar Avaliação Gratuita
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
