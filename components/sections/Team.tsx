"use client";

import Image from "next/image";
import { useScrollReveal } from "@/lib/hooks/useScrollReveal";
import { TEAM_MEMBERS } from "@/lib/constants/team";

export default function Team() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.15 });

  return (
    <section
      ref={ref}
      id="equipe"
      className={`py-16 md:py-24 bg-background-soft relative overflow-hidden transition-all duration-700 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-12"
      }`}
    >
      {/* Shape abstrato decorativo - canto superior direito (metade visível) */}
      <div className="absolute -top-48 -right-48 w-[500px] h-[500px] opacity-[0.08] pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <defs>
            <linearGradient id="teamBlobGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#CFE0BC', stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: '#99CD85', stopOpacity: 0.8 }} />
              <stop offset="100%" style={{ stopColor: '#7FA653', stopOpacity: 0.6 }} />
            </linearGradient>
          </defs>
          <path
            fill="url(#teamBlobGradient)"
            d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.5,90,-16.3,88.5,-0.9C87,15.5,81.4,31,72.6,44.3C63.8,57.6,51.8,68.7,38.2,75.9C24.6,83.1,9.4,86.4,-5.3,84.8C-20,83.2,-34.3,76.7,-47.8,68.9C-61.3,61.1,-74,51.9,-81.5,39.2C-89,26.5,-91.3,10.3,-89.1,-5.1C-86.9,-20.5,-80.2,-35.1,-70.6,-47.4C-61,-59.7,-48.5,-69.7,-34.8,-77.2C-21.1,-84.7,-6.2,-89.7,6.3,-89C18.8,-88.3,30.6,-83.6,44.7,-76.4Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">

          {/* Cabeçalho da seção */}
          <header className="text-center mb-12 md:mb-16">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Nossa Equipe
              </span>
            </div>

            <h2 className="text-fluid-h2 font-bold text-text-primary leading-tight mb-4">
              Conheça Quem Cuida de{" "}
              <span className="text-primary">Você</span>
            </h2>

            <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
              Profissionais dedicados e qualificados, prontos para oferecer o melhor atendimento
            </p>
          </header>

          {/* Grid de membros da equipe */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {TEAM_MEMBERS.map((member, index) => (
              <article
                key={member.id}
                className="bg-white rounded-2xl overflow-hidden shadow-soft"
              >
                {/* Imagem do membro */}
                <div className="relative w-full aspect-[4/5] bg-gradient-to-br from-secondary/20 via-background-soft to-primary/10 overflow-hidden">
                  <Image
                    src={member.imageUrl}
                    alt={`${member.name} - ${member.role} na Fisioterapia ABL no Méier`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 800px) 100vw, 50vw"
                    priority={false}
                  />

                  {/* Overlay gradiente sutil */}
                  <div className="absolute inset-0 bg-gradient-to-t from-darker/10 to-transparent pointer-events-none" />
                </div>

                {/* Informações do membro */}
                <div className="p-6 lg:p-8">
                  {/* Nome e cargo */}
                  <div className="mb-4">
                    <h3 className="text-heading-sm font-bold text-text-primary mb-1">
                      {member.name}
                    </h3>
                    <p className="text-body-sm font-semibold text-primary mb-1">
                      {member.role}
                    </p>
                    <p className="text-body-xs text-text-muted">
                      {member.credentials}
                    </p>
                  </div>

                  {/* Biografia */}
                  <p className="text-body-sm text-text-secondary/80 leading-relaxed mb-4">
                    {member.bio}
                  </p>

                  {/* Especialidades */}
                  <div>
                    <p className="text-body-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">
                      Áreas de Atuação
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, idx) => (
                        <span
                          key={idx}
                          className="inline-block px-3 py-1 text-body-xs font-medium text-primary bg-secondary/30 rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
