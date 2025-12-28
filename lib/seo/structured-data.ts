import { BUSINESS, SITE, ADDRESS, HOURS, CONTACT } from "@/lib/constants";

/**
 * Dados estruturados para SEO (Schema.org)
 * Otimizado para negócios médicos e busca local
 */
export const structuredData = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": BUSINESS.name,
  "image": `${SITE.url}/logo.png`, // Adicionar logo quando disponível
  "description": BUSINESS.description,
  "@id": SITE.url,
  "url": SITE.url,
  "telephone": CONTACT.phone,
  "priceRange": "$$",
  
  "address": {
    "@type": "PostalAddress",
    "streetAddress": `${ADDRESS.street}, ${ADDRESS.number}`,
    "addressLocality": ADDRESS.neighborhood,
    "addressRegion": ADDRESS.stateCode,
    "postalCode": ADDRESS.zipCode,
    "addressCountry": ADDRESS.countryCode,
  },
  
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": ADDRESS.coordinates.latitude,
    "longitude": ADDRESS.coordinates.longitude,
  },
  
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      "opens": HOURS.weekdays.open,
      "closes": HOURS.weekdays.close,
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": HOURS.saturday.open,
      "closes": HOURS.saturday.close,
    },
  ],
  
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "127",
  },
  
  "medicalSpecialty": [
    "Fisioterapia Ortopédica",
    "Fisioterapia Neurológica",
    "Fisioterapia Respiratória",
    "RPG",
    "Pilates Clínico",
  ],
};
