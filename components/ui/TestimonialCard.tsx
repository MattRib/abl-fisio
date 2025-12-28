import Image from "next/image";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  image?: string;
  className?: string;
}

export default function TestimonialCard({
  quote,
  name,
  role,
  image,
  className = "",
}: TestimonialCardProps) {
  // Pega primeira letra do nome para o avatar (fallback)
  const initial = name.charAt(0).toUpperCase();

  return (
    <article
      className={`relative bg-gradient-to-br from-white to-secondary/5 p-8 md:p-10 rounded-2xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gray-100/50 flex flex-col h-full overflow-hidden ${className}`}
    >
      {/* Badge Depoimento Verificado */}
      <div className="absolute top-4 left-4 md:top-6 md:left-6 z-20 inline-flex items-center gap-1.5 px-2.5 py-1 bg-primary/10 border border-primary/30 rounded-full">
        <svg
          className="w-3.5 h-3.5 text-primary"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        <span className="text-xs font-medium text-primary">Verificado</span>
      </div>

      {/* Aspas decorativas gigantes no background */}
      <div className="absolute top-4 right-4 md:top-6 md:right-6 pointer-events-none" aria-hidden="true">
        <svg
          className="w-24 h-24 md:w-32 md:h-32 text-primary/5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
        </svg>
      </div>

      {/* Avaliação - 5 estrelas */}
      <div className="mt-12 mb-6 flex gap-1 flex-shrink-0 relative z-10" aria-label="Avaliação: 5 de 5 estrelas">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className="w-5 h-5 text-yellow-500 fill-current"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Texto do depoimento */}
      <blockquote className="flex-grow mb-8 min-h-[120px] relative z-10">
        <p className="text-base md:text-lg text-dark/75 leading-relaxed italic">
          {quote}
        </p>
      </blockquote>

      {/* Informações do autor */}
      <footer className="flex items-center space-x-4 pt-6 border-t border-gray-100 flex-shrink-0 relative z-10">
        {/* Avatar com foto ou inicial */}
        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary/15 to-secondary/20 rounded-full flex items-center justify-center overflow-hidden">
          {image ? (
            <Image
              src={image}
              alt={`Foto de ${name}`}
              width={48}
              height={48}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-primary/90 font-semibold text-lg">
              {initial}
            </span>
          )}
        </div>

        {/* Nome e role */}
        <div>
          <cite className="not-italic font-semibold text-darker/90 block text-base">
            {name}
          </cite>
          <span className="text-sm text-dark/50 block mt-1">
            {role}
          </span>
        </div>
      </footer>
    </article>
  );
}
