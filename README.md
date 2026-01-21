# Gerador de Senhas Seguras

Uma aplicação moderna e segura para geração de senhas, construída com Next.js 14, TypeScript e Tailwind CSS.

## 🚀 Características

- ✅ Geração de senhas seguras e personalizáveis
- ✅ Opções de customização (comprimento, tipos de caracteres)
- ✅ Indicador de força da senha
- ✅ Copiar senha para área de transferência
- ✅ Interface responsiva e acessível
- ✅ Suporte a modo escuro
- ✅ Geração 100% local (sem envio de dados para servidores)

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

2. Execute o servidor de desenvolvimento:

```bash
npm run dev
```

3. Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

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
