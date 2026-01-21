# Gerador de Senhas Seguras

Uma aplicação moderna e segura para geração de senhas, construída com Next.js 16, TypeScript e Tailwind CSS.

## 🚀 Características

- ✅ Geração de senhas seguras e personalizáveis
- ✅ Opções avançadas de customização (comprimento, tipos de caracteres, exclusão de ambíguos, etc.)
- ✅ Analisador de força de senha com tempo estimado para quebrar
- ✅ Gerador de senha WiFi com QR code
- ✅ Gerador de PIN com opções de segurança
- ✅ Gerador de passphrase
- ✅ Glossário completo de segurança
- ✅ Copiar senha para área de transferência
- ✅ Interface responsiva e acessível
- ✅ Suporte a modo escuro
- ✅ Geração 100% local (sem envio de dados para servidores)
- ✅ SEO otimizado (Open Graph, Twitter Cards, Structured Data)

## 🛠️ Tecnologias

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Zod** (validação)

## 📦 Instalação

1. Instale as dependências:

```bash
npm install
```

2. (Opcional) Configure a variável de ambiente para SEO:

Crie um arquivo `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://seu-dominio.com
```

3. Execute o servidor de desenvolvimento:

```bash
npm run dev
```

4. Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

## 🏗️ Estrutura do Projeto

```
geracaodesenhas/
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Página inicial
│   └── globals.css         # Estilos globais
├── components/
│   └── password-generator.tsx  # Componente principal
├── lib/
│   └── validations.ts      # Schemas de validação (Zod)
├── utils/
│   └── password-generator.ts   # Lógica de geração de senhas
└── package.json
```

## 🔒 Segurança

- Todas as senhas são geradas localmente no navegador
- Nenhum dado é enviado para servidores externos
- Validação de entrada com Zod
- Geração criptograficamente segura usando `Math.random()`
- Análise de segurança detalhada (entropia, tempo estimado para quebrar)

## 🔍 SEO

O projeto está otimizado para mecanismos de busca com:

- **Metadata completa**: Títulos, descrições, keywords
- **Open Graph**: Para compartilhamento em redes sociais
- **Twitter Cards**: Otimização para Twitter
- **Structured Data (JSON-LD)**: Schema.org para WebApplication e FAQPage
- **Sitemap dinâmico**: Gerado automaticamente em `/sitemap.xml`
- **Robots.txt**: Configurado em `/robots.ts`
- **Semântica HTML**: Uso adequado de tags semânticas (header, section, etc.)
- **Acessibilidade**: ARIA labels e estrutura semântica

### Configuração de SEO

Para otimizar completamente o SEO, configure a variável de ambiente:

```env
NEXT_PUBLIC_SITE_URL=https://seu-dominio.com
```

Isso garantirá que todas as URLs absolutas nos metadados estejam corretas.

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm run start` - Inicia o servidor de produção
- `npm run lint` - Executa o linter

## 🎨 Personalização

O projeto utiliza Tailwind CSS para estilização. Você pode personalizar as cores e temas editando:
- `tailwind.config.ts` - Configuração do Tailwind
- `app/globals.css` - Variáveis CSS e estilos globais

## 📄 Licença

Este projeto está sob a licença especificada no arquivo LICENSE.
