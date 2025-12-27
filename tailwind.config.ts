import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ========================================
      // 🎨 DESIGN SYSTEM - ABL Fisioterapia
      // ========================================

      colors: {
        // Paleta principal - Verde saúde e bem-estar
        primary: {
          DEFAULT: "#99CD85",  // Verde principal - CTAs, destaques
          light: "#B4DCA5",    // Hover states, backgrounds leves
          dark: "#7FA653",     // Bordas, elementos secundários
        },
        
        // Paleta secundária - Suporte e contraste
        secondary: {
          DEFAULT: "#CFE0BC",  // Backgrounds suaves, cards
          light: "#E5F0DB",    // Backgrounds muito leves
          dark: "#B8CDA8",     // Bordas suaves
        },
        
        // Texto - Hierarquia de leitura
        text: {
          primary: "#2F3B22",    // Headings, texto principal
          secondary: "#63783D",  // Subtítulos, texto secundário
          muted: "#7FA653",      // Texto auxiliar, labels
          light: "#A5B794",      // Placeholders, texto desabilitado
        },
        
        // Backgrounds neutros
        background: {
          DEFAULT: "#FFFFFF",    // Background principal
          soft: "#F9FBF7",       // Background alternado, seções
          muted: "#F1F5ED",      // Background cards
        },
        
        // Accent - Energia e conversão
        accent: {
          DEFAULT: "#7FA653",    // Links, elementos interativos
          hover: "#6D8F47",      // Hover em elementos accent
          active: "#5B7A3B",     // Active state
        },
        
        // Status colors (saúde e bem-estar)
        success: "#99CD85",
        warning: "#E8B76C",
        error: "#D97C7C",
        info: "#7FA6CD",
      },

      // ========================================
      // 📝 TIPOGRAFIA PREMIUM
      // ========================================
      
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
      },
      
      fontSize: {
        // Display - Hero sections
        "display-xl": [
          "4.5rem",    // 72px
          {
            lineHeight: "1.1",
            letterSpacing: "-0.02em",
            fontWeight: "700",
          },
        ],
        "display-lg": [
          "3.75rem",   // 60px
          {
            lineHeight: "1.1",
            letterSpacing: "-0.02em",
            fontWeight: "700",
          },
        ],
        
        // Headings - Hierarquia de conteúdo
        "heading-xl": [
          "3rem",      // 48px
          {
            lineHeight: "1.2",
            letterSpacing: "-0.01em",
            fontWeight: "700",
          },
        ],
        "heading-lg": [
          "2.25rem",   // 36px
          {
            lineHeight: "1.3",
            letterSpacing: "-0.01em",
            fontWeight: "600",
          },
        ],
        "heading-md": [
          "1.875rem",  // 30px
          {
            lineHeight: "1.3",
            fontWeight: "600",
          },
        ],
        "heading-sm": [
          "1.5rem",    // 24px
          {
            lineHeight: "1.4",
            fontWeight: "600",
          },
        ],
        
        // Body - Conteúdo legível
        "body-xl": [
          "1.25rem",   // 20px
          {
            lineHeight: "1.7",
            fontWeight: "400",
          },
        ],
        "body-lg": [
          "1.125rem",  // 18px
          {
            lineHeight: "1.75",
            fontWeight: "400",
          },
        ],
        "body-md": [
          "1rem",      // 16px
          {
            lineHeight: "1.75",
            fontWeight: "400",
          },
        ],
        "body-sm": [
          "0.875rem",  // 14px
          {
            lineHeight: "1.6",
            fontWeight: "400",
          },
        ],
        "body-xs": [
          "0.75rem",   // 12px
          {
            lineHeight: "1.5",
            fontWeight: "400",
          },
        ],
        
        // Labels e auxiliares
        "label-lg": [
          "0.875rem",  // 14px
          {
            lineHeight: "1.4",
            fontWeight: "600",
            letterSpacing: "0.01em",
          },
        ],
        "label-md": [
          "0.75rem",   // 12px
          {
            lineHeight: "1.4",
            fontWeight: "600",
            letterSpacing: "0.02em",
            textTransform: "uppercase",
          },
        ],
      },

      // ========================================
      // 📏 SPACING SYSTEM
      // ========================================
      
      spacing: {
        // Micro spacing
        "0.5": "0.125rem",   // 2px
        "1.5": "0.375rem",   // 6px
        "2.5": "0.625rem",   // 10px
        "3.5": "0.875rem",   // 14px
        
        // Extended spacing
        "18": "4.5rem",      // 72px
        "22": "5.5rem",      // 88px
        "26": "6.5rem",      // 104px
        "30": "7.5rem",      // 120px
        "34": "8.5rem",      // 136px
        "38": "9.5rem",      // 152px
        
        // Section spacing (mobile-first)
        "section-sm": "3rem",    // 48px
        "section-md": "4rem",    // 64px
        "section-lg": "6rem",    // 96px
        "section-xl": "8rem",    // 128px
      },

      // ========================================
      // 🎯 BORDER RADIUS
      // ========================================
      
      borderRadius: {
        "sm": "0.25rem",     // 4px
        "DEFAULT": "0.5rem", // 8px
        "md": "0.75rem",     // 12px
        "lg": "1rem",        // 16px
        "xl": "1.5rem",      // 24px
        "2xl": "2rem",       // 32px
        "3xl": "2.5rem",     // 40px
        "4xl": "3rem",       // 48px
      },

      // ========================================
      // 🌟 SHADOWS - Premium
      // ========================================
      
      boxShadow: {
        // Sutis
        "subtle": "0 1px 3px rgba(47, 59, 34, 0.06)",
        "soft": "0 4px 12px rgba(47, 59, 34, 0.08)",
        
        // Premium
        "premium": "0 10px 40px rgba(47, 59, 34, 0.1)",
        "premium-lg": "0 20px 60px rgba(47, 59, 34, 0.15)",
        
        // Elevação
        "elevated": "0 8px 24px rgba(47, 59, 34, 0.12)",
        "float": "0 16px 48px rgba(47, 59, 34, 0.14)",
        
        // Interação
        "focus": "0 0 0 3px rgba(153, 205, 133, 0.3)",
        "glow": "0 0 20px rgba(153, 205, 133, 0.4)",
      },

      // ========================================
      // 🎬 ANIMATIONS
      // ========================================
      
      animation: {
        // Entrada
        "fade-in": "fadeIn 0.6s ease-in-out",
        "fade-in-slow": "fadeIn 1s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
        "slide-down": "slideDown 0.6s ease-out",
        "slide-in-left": "slideInLeft 0.5s ease-out",
        "slide-in-right": "slideInRight 0.5s ease-out",
        
        // Loops
        "bounce-slow": "bounce 3s infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        
        // Interação
        "scale-in": "scaleIn 0.3s ease-out",
        "shimmer": "shimmer 2s infinite",
      },
      
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },

      // ========================================
      // 📱 BREAKPOINTS (Mobile-first)
      // ========================================
      
      screens: {
        "xs": "475px",
        "sm": "640px",
        "md": "768px",
        "lg": "1024px",
        "xl": "1280px",
        "2xl": "1536px",
      },

      // ========================================
      // 🎭 TRANSITIONS
      // ========================================
      
      transitionDuration: {
        "250": "250ms",
        "350": "350ms",
        "400": "400ms",
      },
      
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
        "in-out-expo": "cubic-bezier(0.87, 0, 0.13, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
