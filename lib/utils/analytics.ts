// analytics.ts

// Estendendo a interface Window para TypeScript não reclamar
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
    [key: string]: any; // Para permitir acesso dinâmico como 'ga-disable-ID'
  }
}

export function injectGtag(measurementId: string) {
  if (typeof window === 'undefined') return;

  // 1. Reativa o rastreamento caso tenha sido desativado anteriormente
  window[`ga-disable-${measurementId}`] = false;

  // 2. Previne injeção duplicada
  const existingScript = document.querySelector(
    `script[src*="gtag/js?id=${measurementId}"]`
  );
  if (existingScript) return;

  // 3. Injeta o Script do GTM
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  // 4. Inicia o dataLayer
  const inline = document.createElement('script');
  inline.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${measurementId}', { 'anonymize_ip': true });
  `;
  document.head.appendChild(inline);
}

export function removeGtag(measurementId: string) {
  if (typeof window === 'undefined') return;

  // 1. API Oficial do Google para pausar rastreamento imediatamente
  // Isso impede que novos eventos sejam enviados mesmo que o script esteja na memória
  window[`ga-disable-${measurementId}`] = true;

  // 2. Remove scripts do DOM (Limpeza visual/HTML)
  const selector = `script[src*="gtag/js?id=${measurementId}"]`;
  const script = document.querySelector(selector);
  if (script && script.parentNode) script.parentNode.removeChild(script);

  const inlines = Array.from(document.querySelectorAll('script')).filter((s) =>
    s.innerHTML.includes(`gtag('config', '${measurementId}')`)
  );
  inlines.forEach((n) => {
    if (n.parentNode) n.parentNode.removeChild(n);
  });

  // 3. DESTRÓI OS COOKIES DO GA (Essencial para LGPD)
  // O GA cria cookies que começam com "_ga", "_gid" e "_gat"
  const cookies = document.cookie.split(';');

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i];
    const eqPos = cookie.indexOf('=');
    const name = eqPos > -1 ? cookie.substr(0, eqPos).trim() : cookie.trim();

    // Se for cookie do Google Analytics, define data de expiração no passado
    if (name.startsWith('_ga') || name.startsWith('_gid') || name.startsWith('_gat')) {
      // Tenta remover no domínio atual e no caminho raiz
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      // Opcional: Tentar remover também especificando o domínio se necessário (ex: .seudominio.com)
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${window.location.hostname};`;
    }
  }

  // 4. Limpeza de variáveis globais (Opcional, mas boa prática)
  try {
    // @ts-ignore
    if (window.gtag) delete window.gtag;
    // Não delete o dataLayer inteiro se você usa GTM para outras coisas, 
    // mas se for só para GA, pode limpar.
  } catch (e) {
    console.error('Erro ao limpar variáveis GA', e);
  }
}