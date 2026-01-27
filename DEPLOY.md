# 🚀 Deploy - Hostinger (Apache/cPanel)

## 📋 Pré-requisitos

- Node.js instalado localmente
- Acesso ao cPanel da Hostinger
- Domínio configurado

---

## 🛠️ Passo a Passo

### 1. Build do Projeto (Local)

```bash
# Instalar dependências
npm install

# Gerar build de produção
npm run build
```

Isso vai gerar a pasta `out/` com todos os arquivos estáticos.

---

### 2. Upload para Hostinger

#### Via cPanel File Manager:

1. **Acesse o cPanel** da Hostinger
2. Abra o **File Manager**
3. Navegue até `public_html/` (ou pasta do seu domínio)
4. **Delete tudo** que estiver lá (se for site novo)
5. **Upload da pasta `out/`:**
   - Selecione todos os arquivos **DENTRO** de `out/`
   - Faça upload para `public_html/`

**IMPORTANTE:** Os arquivos devem estar **diretamente** em `public_html/`, não dentro de uma subpasta `out/`.

#### Estrutura final no servidor:

```
public_html/
├── .htaccess          ✅ (arquivo de configuração Apache)
├── index.html         ✅ (página principal)
├── _next/             ✅ (assets do Next.js)
├── assets/            ✅ (suas imagens)
├── favicon/           ✅ (favicons)
└── navbar/            ✅ (logo navbar)
```

---

### 3. Configurar Headers de Segurança

O arquivo `.htaccess` já foi gerado automaticamente em `public/.htaccess` e será incluído no build.

**✅ Ele configura:**
- Headers de segurança (X-Frame-Options, X-Content-Type-Options, etc.)
- Cache otimizado para performance
- Compressão Gzip
- Tipos MIME corretos

---

### 4. Configurar SSL/HTTPS (Recomendado)

#### No cPanel da Hostinger:

1. Acesse **SSL/TLS Status**
2. Ative o **Let's Encrypt SSL** (gratuito)
3. Aguarde a ativação (5-15 minutos)

#### Após ativar SSL:

Edite o arquivo `.htaccess` no servidor e **descomente** as linhas de redirecionamento HTTPS (final do arquivo):

```apache
# Remova os comentários (#) destas linhas:
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{HTTPS} off
  RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
</IfModule>
```

Isso força todo tráfego HTTP → HTTPS.

---

### 5. Verificar Funcionamento

Acesse seu domínio e verifique:

- ✅ Site carrega normalmente
- ✅ Logo aparece na navbar
- ✅ Favicon aparece na aba
- ✅ WhatsApp abre corretamente
- ✅ Navegação funciona (âncoras)
- ✅ SSL ativo (cadeado verde)

---

## 🔄 Atualizações Futuras

Sempre que fizer mudanças no código:

```bash
# 1. Build local
npm run build

# 2. Upload APENAS dos arquivos da pasta out/ para public_html/
```

---

## 🐛 Troubleshooting

### Problema: Site mostra página em branco

**Solução:** Verifique se os arquivos estão diretamente em `public_html/`, não em subpasta.

### Problema: Headers não estão funcionando

**Solução:** Verifique se o `.htaccess` foi enviado (pode estar oculto no File Manager, ative "Show Hidden Files").

### Problema: Imagens não carregam

**Solução:** Verifique se as pastas `assets/`, `favicon/` e `navbar/` foram enviadas corretamente.

### Problema: CSS quebrado

**Solução:** Verifique se a pasta `_next/` foi enviada completamente.

---

## 📊 Performance

O site está otimizado para:

- ⚡ **Core Web Vitals**
- 🗜️ **Compressão Gzip** (via .htaccess)
- 💾 **Cache agressivo** (1 ano para assets)
- 🖼️ **Imagens modernas** (WebP/AVIF)
- 🔒 **Headers de segurança**

---

## 📝 Checklist Pós-Deploy

- [ ] Site acessível pelo domínio
- [ ] SSL ativo e funcionando
- [ ] Logo e favicon exibindo
- [ ] WhatsApp funcionando
- [ ] Google Search Console configurado
- [ ] Google Analytics/Tag Manager (se aplicável)
- [ ] Teste em mobile
- [ ] Teste de velocidade (PageSpeed Insights)

---

## 🆘 Suporte

Se encontrar problemas:

1. Verifique os logs de erro no cPanel
2. Teste localmente com `npm run build && npx serve out`
3. Contate o suporte da Hostinger se necessário
