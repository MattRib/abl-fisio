import { BUSINESS, CONTACT, ADDRESS, HOURS } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-darker text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Informações do Negócio */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4 text-primary">
              {BUSINESS.name}
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Fisioterapia especializada no {ADDRESS.neighborhood}, Rio de Janeiro.
              Cuidado profissional e atendimento personalizado.
            </p>
          </div>

          {/* Links de Navegação */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4 text-primary">Navegação</h3>
            <nav aria-label="Links do rodapé">
              <ul className="space-y-3 text-sm flex flex-col items-center md:items-start">
                <li>
                  <a
                    href="#servicos"
                    className="text-white/70 hover:text-primary transition-colors"
                  >
                    Serviços
                  </a>
                </li>
                <li>
                  <a
                    href="#sobre"
                    className="text-white/70 hover:text-primary transition-colors"
                  >
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a
                    href="#localizacao"
                    className="text-white/70 hover:text-primary transition-colors"
                  >
                    Localização
                  </a>
                </li>
                <li>
                  <a
                    href={`https://wa.me/${CONTACT.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-primary transition-colors"
                  >
                    WhatsApp
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Informações de Contato */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4 text-primary">Contato</h3>
            <address className="not-italic text-sm text-white/70 space-y-3 flex flex-col items-center md:items-start">
              <div>
                <p className="font-semibold text-white/90 mb-1">Endereço</p>
                <p>{ADDRESS.street}, {ADDRESS.number}</p>
                <p>{ADDRESS.neighborhood} - {ADDRESS.city}/{ADDRESS.stateCode}</p>
                <p>CEP: {ADDRESS.zipCode}</p>
              </div>

              <div>
                <p className="font-semibold text-white/90 mb-1">Telefone</p>
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="hover:text-primary transition-colors"
                >
                  {CONTACT.phoneFormatted}
                </a>
              </div>

              <div>
                <p className="font-semibold text-white/90 mb-1">Horário de Atendimento</p>
                <p>{HOURS.weekdays.label}: {HOURS.weekdays.formatted}</p>
                <p>{HOURS.saturday.label}: {HOURS.saturday.formatted}</p>
              </div>
            </address>
          </div>
        </div>

        {/* Linha Divisória */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
            <p>
              &copy; {currentYear} {BUSINESS.name}. Todos os direitos reservados.
            </p>
            <p>
              CNPJ: {BUSINESS.cnpj}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
