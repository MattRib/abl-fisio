import Image from "next/image";

interface ServiceCardProps {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  className?: string;
}

export default function ServiceCard({
  image,
  imageAlt,
  title,
  description,
  className = "",
}: ServiceCardProps) {
  return (
    <article
      className={`group relative w-full max-w-xs h-56 md:h-64 mx-auto rounded-lg overflow-hidden cursor-pointer ${className}`}
    >
      {/* Imagem de fundo */}
      <Image
        src={image}
        alt={imageAlt}
        fill        unoptimized        className="object-fill group-hover:scale-110 transition-transform duration-700 ease-out"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      {/* Gradiente base (sempre visível) - mais suave */}
      <div className="absolute inset-0 bg-gradient-to-t from-darker/60 via-transparent to-transparent" />

      {/* Overlay hover - Desktop only */}
      <div className="absolute inset-0 bg-primary/65 opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />

      {/* Conteúdo */}
      <div className="absolute inset-0 p-5 md:p-6 flex flex-col justify-end">
        {/* Título - sempre visível */}
        <h3 className="text-xl md:text-2xl font-semibold text-white mb-2 md:group-hover:mb-4 transition-all duration-500">
          {title}
        </h3>

        {/* Descrição - sempre visível no mobile, hover no desktop */}
        <p className="text-sm md:text-base text-white/90 leading-relaxed max-h-40 opacity-100 md:max-h-0 md:opacity-0 md:group-hover:max-h-40 md:group-hover:opacity-100 transition-all duration-500 overflow-hidden">
          {description}
        </p>

        {/* Indicador de ação - Desktop only */}
        <span className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-white/80 mt-0 max-h-0 opacity-0 group-hover:mt-4 group-hover:max-h-10 group-hover:opacity-100 transition-all duration-500 delay-100">
          Saiba mais
          <svg
            className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </span>
      </div>
    </article>
  );
}
