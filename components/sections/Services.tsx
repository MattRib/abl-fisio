import { SERVICES } from "@/lib/constants";
import ServiceCard from "@/components/ui/ServiceCard";

export default function Services() {
  return (
    <section id="servicos" className="py-16 md:py-24 bg-gradient-to-b from-white to-secondary/10">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header centralizado */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-darker mb-4">
            Nossos Serviços
          </h2>
          <p className="text-base md:text-lg text-dark/70 max-w-2xl mx-auto">
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
      </div>
    </section>
  );
}
