import TestimonialCard from "@/components/ui/TestimonialCard";

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Header centralizado */}
          <div className="text-center mb-12 md:mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Depoimentos
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-darker mt-3 mb-4">
              O Que Dizem{" "}
              <span className="text-primary">Nossos Pacientes</span>
            </h2>
            <p className="text-base md:text-lg text-dark/70 max-w-2xl mx-auto">
              Histórias reais de quem recuperou qualidade de vida
            </p>
          </div>

          {/* Grid de depoimentos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            <TestimonialCard
              quote="Cheguei com dor no ombro e sem conseguir levantar o braço. Depois de algumas sessões, já notei melhora. A fisioterapeuta explica tudo com clareza e tem muito cuidado. Me sinto segura no tratamento."
              name="Maria Silva"
              role="Fisioterapia Ortopédica"
            />

            <TestimonialCard
              quote="Sofria com dores nas costas há anos. O RPG me ajudou a entender melhor minha postura. As sessões são intensas, mas já sinto diferença no dia a dia. Vale muito a pena."
              name="João Santos"
              role="RPG"
            />

            <TestimonialCard
              quote="Fiz drenagem linfática após a cirurgia e o resultado foi além do que esperava. O inchaço diminuiu bem e a profissional é muito atenciosa. Recomendo."
              name="Ana Costa"
              role="Drenagem Linfática"
            />

          </div>

        </div>
      </div>
    </section>
  );
}
