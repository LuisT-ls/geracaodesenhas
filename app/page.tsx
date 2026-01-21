import ToolsContainer from "@/components/tools-container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ferramentas de Senha - Gerador, Analisador, WiFi, PIN e Passphrase",
  description:
    "Ferramentas completas de segurança: gerador de senhas seguras, analisador de força de senha, gerador de senha WiFi com QR code, gerador de PIN e passphrase. Inclui glossário completo de termos de segurança.",
  openGraph: {
    title: "Ferramentas de Senha - Gerador, Analisador, WiFi, PIN e Passphrase",
    description:
      "Ferramentas completas de segurança: gerador de senhas seguras, analisador de força de senha, gerador de senha WiFi com QR code, gerador de PIN e passphrase.",
  },
};

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Gerador de Senhas Seguras",
    description:
      "Ferramentas completas de segurança: gerador de senhas seguras, analisador de força de senha, gerador de senha WiFi com QR code, gerador de PIN e passphrase.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://geracaodesenhas.vercel.app",
    applicationCategory: "SecurityApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "BRL",
    },
    featureList: [
      "Gerador de senhas seguras",
      "Analisador de força de senha",
      "Gerador de senha WiFi com QR code",
      "Gerador de PIN",
      "Gerador de passphrase",
      "Glossário de segurança",
    ],
    inLanguage: "pt-BR",
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Como criar uma senha segura?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Use senhas com pelo menos 12 caracteres, combine letras maiúsculas, minúsculas, números e símbolos. Não reutilize senhas em múltiplos serviços e use um gerenciador de senhas.",
        },
      },
      {
        "@type": "Question",
        name: "O que é uma senha forte?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Uma senha forte possui alta entropia, combina diferentes tipos de caracteres, tem comprimento adequado (mínimo 12 caracteres) e não contém informações pessoais ou palavras comuns do dicionário.",
        },
      },
      {
        "@type": "Question",
        name: "Como funciona o gerador de senhas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "O gerador cria senhas aleatórias usando algoritmos seguros, permitindo personalizar o comprimento, tipos de caracteres e opções avançadas como excluir caracteres ambíguos ou evitar repetições.",
        },
      },
      {
        "@type": "Question",
        name: "O que é passphrase?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Passphrase é uma sequência de palavras usada como senha, geralmente mais longa e mais fácil de lembrar do que senhas tradicionais, mas ainda segura quando bem construída.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <header>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2 flex items-center gap-3">
              <svg
                className="w-8 h-8 text-blue-600 dark:text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              Ferramentas de Senha
            </h1>
          </header>
          <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400"></div>
        </div>
        <ToolsContainer />
        <section className="mt-12 mb-12 text-center" aria-labelledby="security-tips-heading">
          <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg p-6 max-w-2xl mx-auto">
            <h2 id="security-tips-heading" className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
              Dicas de Segurança
            </h2>
            <ul className="text-left space-y-2 text-sm text-gray-600 dark:text-gray-400" role="list">
              <li>• Use senhas com pelo menos 12 caracteres</li>
              <li>• Combine letras maiúsculas, minúsculas, números e símbolos</li>
              <li>• Não reutilize senhas em múltiplos serviços</li>
              <li>• Use um gerenciador de senhas para armazenar suas senhas com segurança</li>
              <li>• Ative a autenticação de dois fatores quando disponível</li>
            </ul>
          </div>
        </section>
      </div>
      </main>
    </>
  );
}
