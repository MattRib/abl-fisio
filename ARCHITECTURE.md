# 🎯 Projeto Base - Clean Architecture

## ✅ Estrutura Criada

```
abl-fisio/
├── app/
│   ├── layout.tsx          # Layout principal com SEO
│   ├── page.tsx            # Página home (apenas composição)
│   └── globals.css         # Estilos globais Tailwind
│
├── components/
│   ├── layout/             # Componentes estruturais
│   │   └── Footer.tsx
│   ├── sections/           # Seções da landing page
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── About.tsx
│   │   ├── Location.tsx
│   │   └── CTA.tsx
│   └── ui/                 # Componentes UI reutilizáveis (vazios)
│
├── lib/
│   ├── constants/          # Dados fixos centralizados
│   │   ├── business.ts     # Info do negócio
│   │   ├── services.ts     # Serviços oferecidos
│   │   └── index.ts
│   ├── seo/                # Configurações de SEO
│   │   ├── metadata.ts     # Meta tags
│   │   ├── structured-data.ts  # Schema.org
│   │   └── index.ts
│   └── utils/              # Utilitários
│       ├── whatsapp.ts     # Helper WhatsApp
│       └── index.ts
│
├── types/                  # TypeScript types (vazios)
├── public/                 # Arquivos estáticos
│   ├── robots.txt
│   └── schema.json
│
├── .github/
│   └── copilot-instructions.md
├── CONTRIBUTING              # Diretrizes para LLMs
├── MENTAL_LINT.md           # Checklist mental
└── README.md                # Documentação
```

## 🧠 Decisões Arquiteturais

### 1. **Separação Total de Responsabilidades**

✅ **page.tsx apenas compõe**
```tsx
// CERTO: Apenas importa e compõe seções
export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
    </main>
  );
}
```

❌ **Errado: Lógica no page.tsx**
```tsx
// EVITAR: Lógica ou hardcodes em page.tsx
export default function Home() {
  const phone = "21999999999"; // ❌ Hardcode
  return <div>...</div>;
}
```

### 2. **Zero Hardcodes**

Todos os dados fixos vivem em `/lib/constants`:

```tsx
// ✅ CERTO
import { CONTACT, ADDRESS } from "@/lib/constants";
<a href={`tel:${CONTACT.phone}`}>{CONTACT.phoneFormatted}</a>

// ❌ ERRADO
<a href="tel:+5521999999999">(21) 99999-9999</a>
```

### 3. **SEO Isolado**

Metadata e dados estruturados vivem em `/lib/seo`:

```tsx
// app/layout.tsx
import { metadata as seoMetadata } from "@/lib/seo/metadata";
import { structuredData } from "@/lib/seo";

export const metadata: Metadata = seoMetadata;
```

### 4. **Componentes Puros**

Componentes UI não sabem nada sobre:
- SEO
- Dados do negócio
- Lógica de negócio

```tsx
// ✅ CERTO: Componente recebe props
export function Button({ href, children }) {
  return <a href={href}>{children}</a>;
}

// ❌ ERRADO: Componente tem lógica
export function Button() {
  const phone = "21999999999"; // ❌
  return <a href={`tel:${phone}`}>Call</a>;
}
```

### 5. **Utilitários para Lógica Comum**

```tsx
// lib/utils/whatsapp.ts
export function getWhatsAppUrl(message: string): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${CONTACT.whatsapp}?text=${encodedMessage}`;
}

// Uso
import { getWhatsAppUrl, WHATSAPP_MESSAGES } from "@/lib/utils";
const url = getWhatsAppUrl(WHATSAPP_MESSAGES.schedule);
```

## 🎨 Paleta de Cores Aplicada

```tsx
// tailwind.config.ts
colors: {
  primary: "#99CD85",    // Verde principal
  secondary: "#CFE0BC",  // Verde claro
  accent: "#7FA653",     // Verde médio
  dark: "#63783D",       // Verde escuro
  darker: "#2F3B22",     // Verde mais escuro
}
```

## 🔍 SEO Técnico Implementado

### 1. **Metadata Otimizada**
- Title com localização
- Description com keywords locais
- OpenGraph para redes sociais
- Canonical URL

### 2. **Schema.org (JSON-LD)**
- MedicalBusiness
- Endereço estruturado
- Horários de funcionamento
- Geolocalização

### 3. **HTML Semântico**
- Apenas 1 `<h1>` por página
- Hierarquia correta de headings
- Tags semânticas (`section`, `header`, `footer`)

### 4. **Performance**
- Next.js 15 App Router
- Tailwind CSS para CSS mínimo
- Componentes server-side por padrão

## 📁 Como Adicionar Novos Recursos

### Adicionar Nova Seção

1. Criar em `components/sections/NewSection.tsx`
2. Importar constantes necessárias
3. Adicionar em `app/page.tsx`

```tsx
// components/sections/NewSection.tsx
import { BUSINESS } from "@/lib/constants";

export default function NewSection() {
  return (
    <section>
      <h2>{BUSINESS.name}</h2>
    </section>
  );
}

// app/page.tsx
import NewSection from "@/components/sections/NewSection";
// ...adicionar na composição
```

### Adicionar Novo Componente UI

1. Criar em `components/ui/Button.tsx`
2. Sem lógica de negócio
3. Apenas visual

```tsx
// components/ui/Button.tsx
interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({ href, children, variant = "primary" }: ButtonProps) {
  return (
    <a 
      href={href}
      className={variant === "primary" ? "bg-primary" : "bg-secondary"}
    >
      {children}
    </a>
  );
}
```

### Adicionar Nova Constante

```tsx
// lib/constants/newConstant.ts
export const NEW_CONSTANT = {
  key: "value",
} as const;

// lib/constants/index.ts
export * from "./newConstant";
```

## 🚀 Comandos Disponíveis

```bash
npm run dev      # Desenvolvimento
npm run build    # Build produção
npm start        # Produção
```

## ✅ Checklist de Qualidade

Antes de cada commit:

- [ ] Zero hardcodes (tudo em `/lib/constants`)
- [ ] SEO respeitado (1 h1, hierarquia correta)
- [ ] Componentes limpos (sem lógica misturada)
- [ ] Arquitetura mantida (pastas corretas)
- [ ] Build sem erros (`npm run build`)
- [ ] Paleta de cores respeitada

## 🎯 Próximos Passos

1. **Substituir placeholders** em `/lib/constants/business.ts`:
   - Número WhatsApp
   - CREFITO
   - CNPJ
   - URL do domínio
   - Coordenadas Google Maps

2. **Adicionar imagens**:
   - Logo em `/public/logo.png`
   - Fotos do consultório
   - Optimizar com `next/image`

3. **Configurar Analytics**:
   - Google Analytics
   - Google Search Console
   - Google Meu Negócio

## 📚 Documentos Importantes

- `README.md` - Documentação geral
- `CONTRIBUTING` - Regras para LLMs
- `MENTAL_LINT.md` - Checklist mental
- `.github/copilot-instructions.md` - Instruções Copilot

---

**Estrutura 100% limpa e pronta para escalar** ✨
