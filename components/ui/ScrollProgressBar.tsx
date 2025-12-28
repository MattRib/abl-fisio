"use client";

import { useState, useEffect } from "react";

export default function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calcula a altura total da página
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      // Calcula a posição atual do scroll
      const scrollPosition = window.scrollY;
      // Calcula a porcentagem
      const progress = (scrollPosition / totalHeight) * 100;

      setScrollProgress(progress);
    };

    // Adiciona listener de scroll
    window.addEventListener("scroll", handleScroll);

    // Calcula progresso inicial
    handleScroll();

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-1 bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-primary via-accent to-primary transition-all duration-200 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}
