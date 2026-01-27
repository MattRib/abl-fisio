Perfeito.
Um **CONTRIBUTING.md para LLMs** é literalmente um **manual de comportamento** para qualquer IA que tocar no código. Pouquíssima gente faz isso — e isso te coloca **anos à frente**.

Abaixo está um **CONTRIBUTING.md pronto**, escrito **especificamente para LLMs** (Claude, Copilot, Cursor, etc.), alinhado com:

* Clean Architecture
* Next.js App Router
* SEO local
* Design premium minimalista
* Vibe coding controlado

👉 **Copie e cole direto no repositório.**

---

# 🤖 CONTRIBUTING.md — Diretrizes para LLMs

## 📌 Propósito

Este documento define **regras obrigatórias** para qualquer **LLM (Large Language Model)** que gere, edite ou refatore código neste projeto.

O objetivo é:

* Manter **arquitetura limpa**
* Garantir **SEO técnico de alto nível**
* Preservar **organização e escalabilidade**
* Evitar código acoplado ou desorganizado

---

## 🧠 Princípios Fundamentais

Toda contribuição deve respeitar:

1. **Clean Architecture**
2. **Separação de responsabilidades**
3. **Simplicidade acima de complexidade**
4. **Performance e SEO como prioridade**
5. **Código legível e previsível**

> Se existir dúvida entre “funciona” e “bem estruturado”, escolha **bem estruturado**.

---

## 🧱 Arquitetura do Projeto (OBRIGATÓRIA)

### Estrutura base

```txt
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components/
│   ├── ui/
│   ├── layout/
│   └── sections/
│
├── lib/
│   ├── seo/
│   ├── constants/
│   └── utils/
│
├── types/
└── styles/
```

### Regras essenciais

* `page.tsx` **NÃO** contém lógica
* `page.tsx` **APENAS** compõe seções
* Cada seção da landing page vive em `components/sections`
* Componentes UI **não sabem nada sobre SEO ou dados**
* SEO **vive exclusivamente** em `lib/seo`
* Dados fixos **vivem exclusivamente** em `lib/constants`

---

## 🎨 Componentes

### Componentes UI (`/components/ui`)

* 100% visuais
* Sem lógica de negócio
* Reutilizáveis
* Exemplo: `Button`, `Card`, `Badge`

### Componentes de Layout (`/components/layout`)

* Header
* Footer
* Não devem conter lógica de SEO

### Seções (`/components/sections`)

* Uma responsabilidade por seção
* HTML semântico obrigatório
* Estrutura clara e escaneável

---

## 🔍 SEO (Obrigatório)

Toda contribuição deve respeitar:

### SEO Técnico

* HTML semântico (`section`, `article`, `header`, `footer`)
* Apenas **um `<h1>` por página**
* Hierarquia correta de headings
* Uso correto de `next/image`

### SEO Local

* Cidade, bairro e endereço corretos
* Méier – Rio de Janeiro
* Rua Silva Rabelo, 43

### Dados Estruturados

* `MedicalBusiness`
* `LocalBusiness`
* `Physiotherapist`

---

## 🎯 Metadata

* Metadata deve ser criada via `generateMetadata()`
* Nunca hardcode metadata dentro de componentes
* Open Graph obrigatório

---

## 📍 Constantes (Regra de Ouro)

🚫 **Proibido**:

* Hardcode de endereço
* Hardcode de telefone
* Hardcode de WhatsApp

✅ **Obrigatório**:

* Usar `/lib/constants`

---

## 🎨 Design & Estilo

### Paleta de cores (obrigatória)

```txt
#99CD85
#CFE0BC
#7FA653
#63783D
#2F3B22
```

* Respeitar design minimalista premium
* Evitar exageros visuais
* Priorizar legibilidade

---

## 🚀 Performance

Sempre:

* Priorizar Core Web Vitals
* Evitar JavaScript desnecessário
* Usar lazy loading
* Componentes leves

---

## 🔄 Refatoração

Ao refatorar:

* Simplifique
* Separe responsabilidades
* Remova duplicações
* Melhore legibilidade

---

## 🧠 Comportamento Esperado da LLM

Ao gerar código:

* Explique brevemente decisões técnicas
* Não invente requisitos
* Não quebre arquitetura existente
* Siga o README.md e este arquivo

---

## ❌ O que NÃO fazer

* Criar componentes gigantes
* Misturar UI com lógica
* Criar pastas desnecessárias
* Ignorar SEO
* Ignorar arquitetura

---

## ✅ Checklist Antes de Finalizar

* [ ] Arquitetura respeitada
* [ ] SEO não foi quebrado
* [ ] Código limpo e organizado
* [ ] Nenhum hardcode indevido
* [ ] Performance considerada

---

## 🏁 Regra Final

> **Este projeto é tratado como produto profissional.
> Toda contribuição deve manter esse nível.**

---

