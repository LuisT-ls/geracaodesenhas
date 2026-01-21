# Guia de SEO

Este documento descreve as otimizações de SEO implementadas no projeto.

## Configuração

### Variável de Ambiente

Configure a URL base do site no arquivo `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://seu-dominio.com
```

Esta variável é usada para:
- URLs absolutas nos metadados
- Open Graph images
- Sitemap
- Structured Data

## Implementações

### 1. Metadata (app/layout.tsx)

- **Título dinâmico**: Template com sufixo padrão
- **Descrição otimizada**: Descrição rica com palavras-chave
- **Keywords**: Lista de palavras-chave relevantes
- **Open Graph**: Metadados para compartilhamento em redes sociais
- **Twitter Cards**: Otimização específica para Twitter
- **Robots**: Configuração para indexação
- **Icons**: Favicon e ícones para PWA

### 2. Structured Data (JSON-LD)

Implementado em `app/page.tsx`:

- **WebApplication**: Schema.org para aplicação web
- **FAQPage**: Perguntas frequentes para rich snippets

### 3. Sitemap Dinâmico (app/sitemap.ts)

Gera automaticamente o sitemap em `/sitemap.xml` com:
- URL principal
- Última modificação
- Frequência de atualização
- Prioridade

### 4. Robots.txt (app/robots.ts)

Configuração de crawlers:
- Permite indexação de todas as páginas
- Bloqueia `/api/`
- Referencia o sitemap

### 5. Semântica HTML

- Uso de tags semânticas (`<header>`, `<section>`, `<main>`)
- Estrutura hierárquica de títulos (h1, h2)
- ARIA labels para acessibilidade
- Atributos `aria-labelledby` para associação de elementos

### 6. Performance

- Next.js 16 com Turbopack (bundler otimizado)
- Server Components por padrão
- Otimização automática de imagens (quando adicionadas)

## Verificação

### Ferramentas Recomendadas

1. **Google Search Console**: Verificar indexação e erros
2. **Google Rich Results Test**: Validar Structured Data
3. **PageSpeed Insights**: Verificar performance
4. **Lighthouse**: Auditoria completa de SEO
5. **Schema Markup Validator**: Validar JSON-LD

### Checklist de SEO

- [x] Metadata completa (title, description, keywords)
- [x] Open Graph tags
- [x] Twitter Cards
- [x] Structured Data (JSON-LD)
- [x] Sitemap.xml
- [x] Robots.txt
- [x] Semântica HTML
- [x] Acessibilidade (ARIA)
- [x] URLs canônicas
- [ ] Imagem Open Graph (og-image.png) - **A criar**
- [ ] Favicon e ícones - **A criar**

## Próximos Passos

1. **Criar imagem Open Graph** (1200x630px) em `/public/og-image.png`
2. **Criar favicon** em `/public/favicon.ico`
3. **Criar apple-touch-icon** em `/public/apple-touch-icon.png`
4. **Configurar Google Search Console**
5. **Adicionar códigos de verificação** no `layout.tsx` (quando disponíveis)
6. **Monitorar performance** com ferramentas de analytics

## Palavras-chave Principais

- gerador de senhas
- senha segura
- criar senha
- analisador de senha
- senha wifi
- gerador pin
- passphrase
- glossário segurança
- cybersecurity
- segurança online
