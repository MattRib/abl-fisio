"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface AnimateOnScrollProps {
  children: ReactNode;
  animation?: 'fade-in' | 'fade-in-up' | 'slide-up';
  delay?: number;
  threshold?: number;
  className?: string;
}

export default function AnimateOnScroll({
  children,
  animation = 'fade-in-up',
  delay = 0,
  threshold = 0.1,
  className = '',
}: AnimateOnScrollProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay, threshold]);

  const animationClass = isVisible ? `animate-${animation}` : 'opacity-0';

  return (
    <div ref={ref} className={`${animationClass} ${className}`}>
      {children}
    </div>
  );
}
