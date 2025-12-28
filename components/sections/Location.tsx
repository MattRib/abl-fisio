"use client";

import { ADDRESS, CONTACT, HOURS } from "@/lib/constants";
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/utils/whatsapp";
import Button from "@/components/ui/Button";
import { useScrollReveal } from "@/lib/hooks/useScrollReveal";

export default function Location() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      id="localizacao"
      className={`py-16 md:py-24 bg-gradient-to-br from-secondary/10 to-white relative overflow-hidden transition-all duration-700 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-12"
      }`}
    >
      {/* Pin de localização gigante - Fundo direito */}
      <div className="absolute top-1/2 -translate-y-1/2 right-12 w-80 h-80 md:w-[500px] md:h-[500px] opacity-[0.11] pointer-events-none">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <defs>
            <linearGradient id="pinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#99CD85', stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: '#7FA653', stopOpacity: 0.8 }} />
              <stop offset="100%" style={{ stopColor: '#CFE0BC', stopOpacity: 0.6 }} />
            </linearGradient>
          </defs>
          <path
            d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
            fill="url(#pinGradient)"
            stroke="url(#pinGradient)"
            strokeWidth="0.5"
          />
        </svg>
      </div>

      {/* Linhas de mapa abstratas - Grid de coordenadas */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
        <svg viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          {/* Linhas verticais (longitude) */}
          <line x1="200" y1="0" x2="200" y2="800" stroke="#7FA653" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="400" y1="0" x2="400" y2="800" stroke="#99CD85" strokeWidth="0.5" strokeDasharray="4 4" />
          <line x1="600" y1="0" x2="600" y2="800" stroke="#7FA653" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="800" y1="0" x2="800" y2="800" stroke="#99CD85" strokeWidth="0.5" strokeDasharray="4 4" />
          <line x1="1000" y1="0" x2="1000" y2="800" stroke="#7FA653" strokeWidth="1" strokeDasharray="4 4" />

          {/* Linhas horizontais (latitude) */}
          <line x1="0" y1="150" x2="1200" y2="150" stroke="#99CD85" strokeWidth="0.5" strokeDasharray="4 4" />
          <line x1="0" y1="300" x2="1200" y2="300" stroke="#7FA653" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="0" y1="450" x2="1200" y2="450" stroke="#99CD85" strokeWidth="0.5" strokeDasharray="4 4" />
          <line x1="0" y1="600" x2="1200" y2="600" stroke="#7FA653" strokeWidth="1" strokeDasharray="4 4" />
        </svg>
      </div>

      {/* Ícone de trem minimalista - Canto superior esquerdo */}
      <div className="absolute top-20 left-12 w-32 h-32 md:w-40 md:h-40 opacity-[0.07] pointer-events-none">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <defs>
            <linearGradient id="trainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#7FA653', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#99CD85', stopOpacity: 0.8 }} />
            </linearGradient>
          </defs>
          {/* Corpo do trem */}
          <rect x="4" y="8" width="16" height="10" rx="2" fill="url(#trainGradient)" stroke="url(#trainGradient)" strokeWidth="0.5" />
          {/* Janelas */}
          <rect x="6" y="10" width="3" height="3" rx="0.5" fill="white" opacity="0.3" />
          <rect x="10.5" y="10" width="3" height="3" rx="0.5" fill="white" opacity="0.3" />
          <rect x="15" y="10" width="3" height="3" rx="0.5" fill="white" opacity="0.3" />
          {/* Rodas */}
          <circle cx="8" cy="19" r="1.5" fill="url(#trainGradient)" stroke="url(#trainGradient)" strokeWidth="0.5" />
          <circle cx="16" cy="19" r="1.5" fill="url(#trainGradient)" stroke="url(#trainGradient)" strokeWidth="0.5" />
          {/* Trilho */}
          <line x1="2" y1="21" x2="22" y2="21" stroke="url(#trainGradient)" strokeWidth="1" />
          <line x1="2" y1="22" x2="22" y2="22" stroke="url(#trainGradient)" strokeWidth="0.5" opacity="0.5" />
        </svg>
      </div>

      {/* Path curvo conectando blocos - Jornada */}
      <div className="absolute hidden lg:block top-1/2 left-1/4 w-1/2 h-64 opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#99CD85', stopOpacity: 0.8 }} />
              <stop offset="50%" style={{ stopColor: '#7FA653', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#CFE0BC', stopOpacity: 0.6 }} />
            </linearGradient>
          </defs>
          {/* Caminho curvo principal */}
          <path
            d="M 0,100 Q 100,50 200,100 T 400,100"
            fill="none"
            stroke="url(#pathGradient)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="8 6"
          />
          {/* Pontos de parada (marcos) */}
          <circle cx="0" cy="100" r="6" fill="#99CD85" opacity="0.5" />
          <circle cx="200" cy="100" r="6" fill="#7FA653" opacity="0.5" />
          <circle cx="400" cy="100" r="6" fill="#CFE0BC" opacity="0.5" />
        </svg>
      </div>

      {/* Mini pins decorativos espalhados */}
      <div className="absolute top-1/4 left-1/3 w-6 h-6 opacity-[0.04] pointer-events-none animate-pulse-slow">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-primary">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
        </svg>
      </div>

      <div className="absolute bottom-1/3 right-1/3 w-5 h-5 opacity-[0.04] pointer-events-none animate-pulse-slow" style={{ animationDelay: '0.7s' }}>
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-accent">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">

          {/* Header centralizado */}
          <div className="text-center mb-12 md:mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Localização
            </span>
            <h2 className="text-fluid-h2 font-bold text-darker mt-3 mb-4">
              Onde Nos{" "}
              <span className="text-primary">Encontrar</span>
            </h2>
            <p className="text-fluid-body text-dark/75 leading-relaxed max-w-3xl mx-auto mb-6">
              Localizado no coração do {ADDRESS.neighborhood}, nosso consultório oferece
              atendimento de fisioterapia com fácil acesso para toda a região da Zona Norte
              do Rio de Janeiro.
            </p>
            <p className="text-sm md:text-base text-dark/60 max-w-2xl mx-auto mb-8">
              Próxima à estação de trem do Méier e com diversas opções de transporte público,
              estamos prontos para receber você com conforto e praticidade.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.schedule)}
                external
              >
                Agendar Consulta
              </Button>

              <Button
                variant="secondary"
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.info)}
                external
              >
                Falar no WhatsApp
              </Button>
            </div>
          </div>

          {/* Grid de duas colunas */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Coluna Esquerda - Informações */}
            <div className="space-y-8">

              {/* Endereço */}
              <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
                <div className="flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left space-y-4 lg:space-y-0 lg:space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-semibold text-darker mb-2">
                      Endereço
                    </h3>
                    <address className="not-italic text-dark/80 leading-relaxed">
                      {ADDRESS.street}, {ADDRESS.number}<br />
                      {ADDRESS.neighborhood} - {ADDRESS.city}, {ADDRESS.state}<br />
                      CEP: {ADDRESS.zipCode}
                    </address>
                    <a
                      href={ADDRESS.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary hover:text-accent font-semibold mt-3 text-sm transition-colors"
                    >
                      Ver no Google Maps
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Horários */}
              <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
                <div className="flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left space-y-4 lg:space-y-0 lg:space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div className="flex-grow w-full">
                    <h3 className="font-semibold text-darker mb-3">
                      Horário de Atendimento
                    </h3>
                    <div className="space-y-2 text-dark/80 max-w-xs mx-auto lg:max-w-none lg:mx-0">
                      <div className="flex justify-between">
                        <span>{HOURS.weekdays.label}:</span>
                        <span className="font-medium">{HOURS.weekdays.formatted}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>{HOURS.saturday.label}:</span>
                        <span className="font-medium">{HOURS.saturday.formatted}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>{HOURS.sunday.label}:</span>
                        <span className="font-medium text-dark/50">Fechado</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Transporte Público - Visível apenas no mobile */}
              <div className="lg:hidden bg-white p-8 rounded-2xl shadow-md border border-gray-100">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                      />
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-semibold text-darker mb-3">
                      Acesso por Transporte Público
                    </h3>
                    <div className="space-y-4 text-dark/80 max-w-xs mx-auto">
                      {/* Estação de Trem */}
                      <div className="flex flex-col items-center gap-2">
                        <svg className="w-8 h-8 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C8 2 4 2.5 4 6v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h2l2-2h4l2 2h2v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-4-4-8-4zm0 2c3.51 0 5.63.97 6 2H6c.37-1.03 2.49-2 6-2zM7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm3.5-7H6V7h5v3zm2 0V7h5v3h-5zm3.5 7c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
                        </svg>
                        <div>
                          <p className="font-medium text-darker">Estação de Trem do Méier</p>
                          <p className="text-sm text-dark/70">5 minutos a pé</p>
                        </div>
                      </div>

                      {/* Ônibus */}
                      <div className="flex flex-col items-center gap-2">
                        <svg className="w-8 h-8 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2c-4 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h2l1.5-1.5h5L16 21h2v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-4-4-8-4zm5.66 2.99H6.34C6.89 4.46 8.31 4 12 4s5.11.46 5.66.99zm.34 2V10H6V6.99h12zm-.34 9.74l-.29.27H6.63l-.29-.27C6.12 16.62 6 16.37 6 16v-4h12v4c0 .37-.12.62-.34.73zM8.5 14c-.83 0-1.5.67-1.5 1.5S7.67 17 8.5 17s1.5-.67 1.5-1.5S9.33 14 8.5 14zm7 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"/>
                        </svg>
                        <div>
                          <p className="font-medium text-darker">Linhas de Ônibus</p>
                          <p className="text-sm text-dark/70">Diversas linhas na Dias da Cruz</p>
                        </div>
                      </div>

                      {/* Estacionamento */}
                      <div className="flex flex-col items-center gap-2">
                        <svg className="w-8 h-8 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M13 3H6v18h4v-6h3c3.31 0 6-2.69 6-6s-2.69-6-6-6zm.2 8H10V7h3.2c1.1 0 2 .9 2 2s-.9 2-2 2z"/>
                        </svg>
                        <div>
                          <p className="font-medium text-darker">Estacionamento</p>
                          <p className="text-sm text-dark/70">Vagas disponíveis nas proximidades</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contato */}
              <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
                <div className="flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left space-y-4 lg:space-y-0 lg:space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div className="flex-grow w-full">
                    <h3 className="font-semibold text-darker mb-3">
                      Entre em Contato
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-dark/60 mb-1">Telefone / WhatsApp</p>
                        <a
                          href={`tel:${CONTACT.phone}`}
                          className="text-dark/80 hover:text-primary transition-colors font-medium"
                        >
                          {CONTACT.phoneFormatted}
                        </a>
                      </div>
                      <a
                        href={getWhatsAppUrl(WHATSAPP_MESSAGES.info)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full bg-primary hover:bg-accent text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300"
                      >
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Falar no WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Coluna Direita - Mapa e Transporte (Desktop) */}
            <div className="space-y-8">
              {/* Container do mapa */}
              <div className="relative">
                <div className="relative w-full h-[500px] bg-gray-200 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                  {/*
                    Google Maps Embed - Rua Silva Rabelo, 43 - Méier
                  */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.249799!2d-43.283!3d-22.900!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDU0JzAwLjAiUyA0M8KwMTYnNTguNyJX!5e0!3m2!1spt-BR!2sbr!4v1735422000000!5m2!1spt-BR!2sbr&q=Rua+Silva+Rabelo,+43+-+M%C3%A9ier,+Rio+de+Janeiro+-+RJ"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Mapa de localização - ${ADDRESS.full}`}
                  />
                </div>

                {/* Elemento decorativo */}
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/5 rounded-full blur-3xl -z-10" />
              </div>

              {/* Transporte Público - Visível apenas no desktop */}
              <div className="hidden lg:block bg-white p-8 rounded-2xl shadow-md border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                      />
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-semibold text-darker mb-3">
                      Acesso por Transporte Público
                    </h3>
                    <div className="space-y-4 text-dark/80">
                      {/* Estação de Trem */}
                      <div className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C8 2 4 2.5 4 6v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h2l2-2h4l2 2h2v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-4-4-8-4zm0 2c3.51 0 5.63.97 6 2H6c.37-1.03 2.49-2 6-2zM7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm3.5-7H6V7h5v3zm2 0V7h5v3h-5zm3.5 7c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
                        </svg>
                        <div>
                          <p className="font-medium text-darker">Estação de Trem do Méier</p>
                          <p className="text-sm text-dark/70">4 minutos a pé</p>
                        </div>
                      </div>

                      {/* Ônibus */}
                      <div className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2c-4 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h2l1.5-1.5h5L16 21h2v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-4-4-8-4zm5.66 2.99H6.34C6.89 4.46 8.31 4 12 4s5.11.46 5.66.99zm.34 2V10H6V6.99h12zm-.34 9.74l-.29.27H6.63l-.29-.27C6.12 16.62 6 16.37 6 16v-4h12v4c0 .37-.12.62-.34.73zM8.5 14c-.83 0-1.5.67-1.5 1.5S7.67 17 8.5 17s1.5-.67 1.5-1.5S9.33 14 8.5 14zm7 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"/>
                        </svg>
                        <div>
                          <p className="font-medium text-darker">Linhas de Ônibus</p>
                          <p className="text-sm text-dark/70">Diversas linhas na Dias da Cruz</p>
                        </div>
                      </div>

                      {/* Estacionamento */}
                      <div className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M13 3H6v18h4v-6h3c3.31 0 6-2.69 6-6s-2.69-6-6-6zm.2 8H10V7h3.2c1.1 0 2 .9 2 2s-.9 2-2 2z"/>
                        </svg>
                        <div>
                          <p className="font-medium text-darker">Estacionamento</p>
                          <p className="text-sm text-dark/70">Vagas disponíveis nas proximidades</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
