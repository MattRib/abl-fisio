/**
 * Serviços oferecidos pelo consultório
 */

export interface Service {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export const SERVICES: Service[] = [
  {
    title: "Neuromodulação",
    description: "Técnica avançada que utiliza estímulos elétricos para alívio da dor e recuperação de movimentos.",
    image: "/assets/services/neuromodulacao.png",
    imageAlt: "Foto ilustrativa de neuromodulação",
  },
  {
    title: "Liberação Miofascial",
    description: "Tratamento manual para liberar tensões musculares, melhorar mobilidade e reduzir dores crônicas.",
    image: "/assets/services/liberacao-miofascial.png",
    imageAlt: "Foto ilustrativa de liberação miofascial",
  },
  {
    title: "Drenagem Linfática",
    description: "Massagem terapêutica para reduzir inchaços, melhorar circulação e acelerar recuperação pós-cirúrgica.",
    image: "/assets/services/drenagem-linfatica.png",
    imageAlt: "Foto ilustrativa de drenagem linfática",
  },
  {
    title: "RPG",
    description: "Reeducação Postural Global para corrigir desvios, aliviar dores e melhorar equilíbrio corporal.",
    image: "/assets/services/rpg.png",
    imageAlt: "Foto ilustrativa de RPG",
  },
  {
    title: "Fisioterapia Ortopédica",
    description: "Reabilitação de lesões ósseas e articulares, pós-operatórios e tratamento de dores musculares.",
    image: "/assets/services/fisioterapia-ortopedica.png",
    imageAlt: "Foto ilustrativa de fisioterapia ortopédica",
  },
  {
    title: "Terapia Manual",
    description: "Técnicas manuais especializadas para tratamento de disfunções articulares e musculares.",
    image: "/assets/services/terapia-manual.png",
    imageAlt: "Foto ilustrativa de terapia manual",
  },
] as const;
