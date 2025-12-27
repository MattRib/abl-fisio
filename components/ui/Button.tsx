import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  onClick?: () => void;
  className?: string;
  external?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  external = false,
}: ButtonProps) {
  const baseClasses = "inline-block font-semibold px-8 py-4 rounded-lg transition-all duration-300";

  const variantClasses = {
    primary: "btn-primary",
    secondary: "btn-secondary",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  // Link externo
  if (href && external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  // Link interno
  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  // Botão com onClick
  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
