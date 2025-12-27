/**
 * Constantes do negócio
 * Centraliza todas as informações fixas do consultório
 */

export const BUSINESS = {
  name: "Consultório de Fisioterapia Méier",
  shortName: "ABL Fisioterapia",
  description: "Consultório de fisioterapia especializado no Méier, Rio de Janeiro. Atendimento em fisioterapia ortopédica, neurológica, respiratória, RPG e pilates clínico.",
  
  // Credenciais (substituir pelos valores reais)
  cnpj: "63.337.048/0001-00",
} as const;

export const CONTACT = {
  phone: "+5521999124720",
  phoneFormatted: "(21) 99912-4720",
  whatsapp: "5521999124720",
  email: "contato@exemplo.com.br", // Adicionar email real se houver
} as const;

export const ADDRESS = {
  street: "Rua Silva Rabelo",
  number: "40",
  neighborhood: "Méier",
  city: "Rio de Janeiro",
  state: "RJ",
  stateCode: "RJ",
  zipCode: "20720-000",
  country: "Brasil",
  countryCode: "BR",
  
  // Endereço formatado completo
  full: "Rua Silva Rabelo, 40 - Méier, Rio de Janeiro - RJ",
  
  // Coordenadas (substituir pelas coordenadas reais do Google Maps)
  coordinates: {
    latitude: -22.9039,
    longitude: -43.2789,
  },
  
  // URL do Google Maps
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Rua+Silva+Rabelo+40+Méier+Rio+de+Janeiro",
} as const;

export const HOURS = {
  weekdays: {
    label: "Segunda a Sexta",
    open: "08:00",
    close: "19:00",
    formatted: "8h às 19h",
  },
  saturday: {
    label: "Sábado",
    open: "08:00",
    close: "13:00",
    formatted: "8h às 13h",
  },
  sunday: {
    label: "Domingo",
    closed: true,
  },
} as const;

export const SOCIAL = {
  // Adicionar redes sociais quando disponíveis
  facebook: "",
  instagram: "",
  youtube: "",
} as const;

export const SITE = {
  url: "https://www.seudominioaqui.com.br", // Substituir pela URL real
  domain: "seudominioaqui.com.br", // Substituir pelo domínio real
} as const;
