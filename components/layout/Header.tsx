"use client";

import { BUSINESS } from "@/lib/constants";
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/utils/whatsapp";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Animação inicial do header
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasAnimated(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const navLinks = [
    { href: "#servicos", label: "Serviços" },
    { href: "#sobre", label: "Sobre" },
    { href: "#localizacao", label: "Localização" },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-4 pt-4 transition-all duration-700 ease-out ${
        hasAnimated
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-8"
      }`}
    >
      <div
        className={`
          container mx-auto transition-all duration-500 ease-out
          ${isScrolled
            ? 'bg-white/80 backdrop-blur-lg shadow-lg rounded-2xl'
            : isMenuOpen
              ? 'bg-white/95 backdrop-blur-sm shadow-md rounded-2xl'
              : 'bg-transparent'
          }
        `}
      >
        <div className="flex items-center justify-between h-20 px-6">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center hover:opacity-80 transition-opacity relative z-10"
            aria-label="Página inicial"
          >
            <Image
              src="/navbar/liftapp-removebg-preview.png"
              alt={`${BUSINESS.shortName} - Logo`}
              width={160}
              height={64}
              priority
              className="h-60 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Navegação principal">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-dark hover:text-primary transition-colors font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <a
              href={getWhatsAppUrl(WHATSAPP_MESSAGES.schedule)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm"
            >
              Agendar Consulta
            </a>
          </nav>

          {/* Mobile Menu Button - Touch target mínimo 48px */}
          <button
            className="md:hidden p-3 text-dark hover:text-primary transition-colors min-w-[48px] min-h-[48px] flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu de navegação"
            aria-expanded={isMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav
          className={`
            md:hidden overflow-hidden border-t transition-all duration-500 ease-in-out-expo
            ${isScrolled ? 'border-gray-200/50' : 'border-gray-200'}
            ${isMenuOpen
              ? 'max-h-[500px] opacity-100 py-4'
              : 'max-h-0 opacity-0 py-0'
            }
          `}
          aria-label="Navegação mobile"
        >
          <ul className="space-y-4 text-center">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={handleLinkClick}
                    className="block text-dark hover:text-primary transition-colors font-medium py-2"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={getWhatsAppUrl(WHATSAPP_MESSAGES.schedule)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block btn-primary text-center text-sm"
                >
                  Agendar Consulta
                </a>
              </li>
            </ul>
        </nav>
      </div>
    </header>
  );
}
