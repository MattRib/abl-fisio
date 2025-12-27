# 🧠 MENTAL_LINT.md — Validador Mental para LLMs

## 📌 O que é isso?

Este documento define um **checklist mental obrigatório** que toda LLM deve executar **antes de gerar, editar ou refatorar código** neste projeto.

> Nenhuma resposta deve ser enviada sem passar por este lint mental.

---

## 🔎 ETAPA 1 — Entendimento do Contexto

Antes de qualquer código, pergunte mentalmente:

* ❓ Isso é uma **landing page SEO local**?
* ❓ O projeto usa **Next.js App Router**?
* ❓ A arquitetura é **Clean Architecture**?
* ❓ O design é **premium minimalista**?
* ❓ O endereço é **Méier – RJ (Rua Silva Rabelo, 40)**?

➡️ Se alguma resposta for "não sei", **pare e reavalie**.

---

## 🧱 ETAPA 2 — Arquitetura

Valide mentalmente:

* [ ] O código respeita a estrutura de pastas?
* [ ] `page.tsx` apenas compõe seções?
* [ ] Cada componente tem **uma responsabilidade**?
* [ ] UI não contém lógica ou SEO?
* [ ] SEO está isolado em `lib/seo`?

🚫 Se algum item falhar, **refatore antes de responder**.

---

## 🎨 ETAPA 3 — Design & UI

Cheque:

* [ ] Paleta de cores respeitada?
* [ ] Design minimalista (sem excesso)?
* [ ] Tipografia legível?
* [ ] Espaço em branco suficiente?
* [ ] Aparência compatível com clínica premium?

---

## 🔍 ETAPA 4 — SEO (Obrigatório)

Confirme:

* [ ] Existe apenas **1 `<h1>`**?
* [ ] Heading hierarchy correta?
* [ ] HTML semântico?
* [ ] Conteúdo otimizado para SEO local?
* [ ] Metadata e Schema não foram ignorados?

---

## 📍 ETAPA 5 — Dados Fixos

Pergunte:

* ❓ Existe algum hardcode proibido?

  * Endereço
  * Telefone
  * WhatsApp
  * Cidade / Bairro

➡️ Se sim, **mover para `/lib/constants` imediatamente**.

---

## 🚀 ETAPA 6 — Performance

Valide:

* [ ] Uso correto de `next/image`?
* [ ] Evitei JS desnecessário?
* [ ] Componentes leves?
* [ ] Mobile-first?

---

## 🔄 ETAPA 7 — Qualidade do Código

Cheque:

* [ ] Código simples?
* [ ] Código legível?
* [ ] Nomes claros?
* [ ] Sem duplicações?
* [ ] Fácil de manter?

---

## ❌ ETAPA 8 — Anti-Padrões

Confirme que NÃO fiz:

* ❌ Componentes gigantes
* ❌ Lógica misturada com UI
* ❌ SEO espalhado
* ❌ Hardcodes
* ❌ Overengineering

---

## ✅ ETAPA 9 — Validação Final

Antes de responder, pergunte:

> **Eu teria orgulho de manter esse código em produção por 2 anos?**

Se a resposta for "não", **melhore antes de enviar**.

---

## 🧩 PROMPT DE USO (Copiar sempre)

```
Antes de responder, execute o MENTAL_LINT.md completo.
Se algum item falhar, refatore silenciosamente antes de enviar a resposta.
```

---

## 🏁 Regra Suprema

> **A LLM é responsável pela qualidade do código que entrega.
> Funcionar não é suficiente.**
