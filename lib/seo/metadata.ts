import type { Metadata } from "next";
import { BUSINESS, SITE, ADDRESS } from "@/lib/constants";

/**
 * Metadata principal da landing page
 */
export const metadata: Metadata = {
  title: `${BUSINESS.shortName} | Rua Silva Rabelo, 43 - ${ADDRESS.neighborhood}, ${ADDRESS.city}`,
  description: BUSINESS.description,
  keywords: [
    "fisioterapia",
    "fisioterapia méier",
    "fisioterapeuta rio de janeiro",
    "fisioterapia zona norte",
    "reabilitação",
    "ortopedia",
    "neurologia",
    "fisioterapia rj",
  ],
  authors: [{ name: BUSINESS.name }],
  
  openGraph: {
    title: `${BUSINESS.name} - Atendimento Especializado`,
    description: BUSINESS.description,
    type: "website",
    locale: "pt_BR",
    url: SITE.url,
    siteName: BUSINESS.name,
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  alternates: {
    canonical: SITE.url,
  },
  
  verification: {
    // Adicionar após configurar Google Search Console
    google: "",
  },

  icons: {
    icon: "/assets/navigator/liftapp-removebg-preview.png",
    shortcut: "/assets/navigator/liftapp-removebg-preview.png",
    apple: "/assets/navigator/liftapp-removebg-preview.png",
  },
};
