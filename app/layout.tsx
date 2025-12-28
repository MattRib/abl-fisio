import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { metadata as seoMetadata } from "@/lib/seo/metadata";
import { structuredData } from "@/lib/seo";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsAppButton from "@/components/ui/FloatingWhatsAppButton";
import ScrollProgressBar from "@/components/ui/ScrollProgressBar";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  preload: true,
  fallback: ["system-ui", "arial"],
  adjustFontFallback: true,
});

export const metadata: Metadata = seoMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Preconnect para recursos externos - Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google.com" />
        <link rel="dns-prefetch" href="https://api.whatsapp.com" />

        {/* Structured Data - SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-white text-darker`} suppressHydrationWarning>
        {/* Scroll Progress Bar - Top */}
        <ScrollProgressBar />

        <Header />

        <main>
          {children}
        </main>

        <Footer />

        {/* Floating WhatsApp Button - Mobile Only */}
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}
