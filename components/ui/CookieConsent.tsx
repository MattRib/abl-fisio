"use client";

import { useEffect, useState } from "react";
import { GA_MEASUREMENT_ID } from "@/lib/constants";
import { injectGtag, removeGtag } from "@/lib/utils/analytics"; // Ajuste o path se necessário

const CONSENT_COOKIE = "ga_consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Leitura simples do cookie no client
    const match = document.cookie.match(new RegExp('(?:^|; )' + CONSENT_COOKIE + '=([^;]*)'));
    const consent = match ? decodeURIComponent(match[1]) : null;

    if (!consent) {
      setVisible(true);
    } else if (consent === "granted") {
      injectGtag(GA_MEASUREMENT_ID);
    }
  }, []);

  const handleAccept = () => {
    // Max-age: 1 ano
    document.cookie = `${CONSENT_COOKIE}=granted; path=/; max-age=31536000`;
    setVisible(false);
    injectGtag(GA_MEASUREMENT_ID);
  };

  const handleDecline = () => {
    // Salva a recusa para não perguntar de novo
    document.cookie = `${CONSENT_COOKIE}=denied; path=/; max-age=31536000`;
    setVisible(false);
    removeGtag(GA_MEASUREMENT_ID);
  };

  if (!visible) return null;

  return (
    <div className="fixed left-0 right-0 bottom-0 z-[9999] p-4 bg-transparent pointer-events-none flex justify-center">
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg shadow-2xl p-6 w-full max-w-2xl pointer-events-auto flex flex-col md:flex-row items-center gap-4 animate-in slide-in-from-bottom-4 duration-300">
        <div className="flex-1 text-sm text-zinc-600 dark:text-zinc-300">
          <p className="font-medium text-zinc-900 dark:text-white mb-1">Valorizamos sua privacidade</p>
          Utilizamos cookies para melhorar sua experiência e analisar o tráfego de forma anônima (LGPD).
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <button 
            onClick={handleDecline} 
            className="flex-1 md:flex-none px-4 py-2 rounded-md text-sm font-medium text-zinc-700 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700 transition-colors"
          >
            Recusar
          </button>
          <button 
            onClick={handleAccept} 
            className="flex-1 md:flex-none px-4 py-2 rounded-md text-sm font-medium text-white bg-black hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 transition-colors"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}