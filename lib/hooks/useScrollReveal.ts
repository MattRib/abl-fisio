"use client";

import { useEffect, useRef, useState } from "react";

interface UseScrollRevealOptions {
  threshold?: number;
  delay?: number;
  once?: boolean;
  initialVisible?: boolean;
}

/**
 * Hook customizado para animações de scroll reveal
 * Retorna uma ref para anexar ao elemento e um estado de visibilidade
 */
export function useScrollReveal({
  threshold = 0.1,
  delay = 0,
  once = true,
  initialVisible = false,
}: UseScrollRevealOptions = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    // Se initialVisible for true, anima imediatamente após montar
    if (initialVisible) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, delay || 100); // pequeno delay para garantir a animação
      return () => clearTimeout(timer);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Aplica delay se especificado
            if (delay > 0) {
              setTimeout(() => {
                setIsVisible(true);
              }, delay);
            } else {
              setIsVisible(true);
            }

            // Se once=true, desconecta o observer após animar
            if (once && ref.current) {
              observer.unobserve(ref.current);
            }
          } else if (!once) {
            // Se once=false, permite re-animar quando sair e voltar
            setIsVisible(false);
          }
        });
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px", // Anima um pouco antes de entrar totalmente
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, delay, once, initialVisible]);

  return { ref, isVisible };
}
