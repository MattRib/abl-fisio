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
    icon: [
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon/favicon.ico",
    apple: [
      { url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "icon", url: "/favicon/web-app-manifest-192x192.png", sizes: "192x192", type: "image/png" },
      { rel: "icon", url: "/favicon/web-app-manifest-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
};
