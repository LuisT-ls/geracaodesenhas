import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Perguntas Frequentes",
  description: "Perguntas frequentes sobre o Gerador de Senhas Seguras",
};

export default function FAQPage() {
  const faqs = [
    {
      question: "Como criar uma senha segura?",
      answer:
        "Use senhas com pelo menos 12 caracteres, combine letras maiúsculas, minúsculas, números e símbolos. Não reutilize senhas em múltiplos serviços e use um gerenciador de senhas.",
    },
    {
      question: "O que é uma senha forte?",
      answer:
        "Uma senha forte possui alta entropia, combina diferentes tipos de caracteres, tem comprimento adequado (mínimo 12 caracteres) e não contém informações pessoais ou palavras comuns do dicionário.",
    },
    {
      question: "Como funciona o gerador de senhas?",
      answer:
        "O gerador cria senhas aleatórias usando algoritmos seguros, permitindo personalizar o comprimento, tipos de caracteres e opções avançadas como excluir caracteres ambíguos ou evitar repetições.",
    },
    {
      question: "O que é passphrase?",
      answer:
        "Passphrase é uma sequência de palavras usada como senha, geralmente mais longa e mais fácil de lembrar do que senhas tradicionais, mas ainda segura quando bem construída.",
    },
    {
      question: "As senhas são armazenadas em algum servidor?",
      answer:
        "Não. Todas as senhas são geradas localmente no seu navegador. Nenhum dado é enviado para servidores externos, garantindo total privacidade e segurança.",
    },
    {
      question: "Posso usar as senhas geradas para qualquer serviço?",
      answer:
        "Sim, as senhas geradas são adequadas para uso em qualquer serviço online. Recomendamos usar senhas únicas para cada conta e ativar autenticação de dois fatores quando disponível.",
    },
    {
      question: "O que significa 'Tempo estimado para quebrar'?",
      answer:
        "É uma estimativa baseada na entropia da senha, calculando quanto tempo levaria para um atacante descobrir sua senha usando força bruta. Quanto maior o tempo, mais segura é a senha.",
    },
    {
      question: "Por que devo evitar caracteres ambíguos?",
      answer:
        "Caracteres ambíguos (como 0/O, 1/l/I) podem causar confusão ao digitar a senha manualmente. Excluí-los torna a senha mais fácil de usar sem comprometer significativamente a segurança.",
    },
    {
      question: "Como funciona o gerador de senha WiFi?",
      answer:
        "O gerador cria senhas específicas para redes WiFi, permitindo gerar senhas memorizáveis e criar um QR code para facilitar o compartilhamento da rede com outros dispositivos.",
    },
    {
      question: "O que é entropia de senha?",
      answer:
        "Entropia mede a imprevisibilidade de uma senha em bits. Quanto maior a entropia, mais difícil é adivinhar a senha. Uma senha forte deve ter pelo menos 60 bits de entropia.",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            Perguntas Frequentes
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Encontre respostas para as dúvidas mais comuns sobre o Gerador de Senhas Seguras
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg p-6 space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 dark:border-gray-700 last:border-0 pb-6 last:pb-0">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                {faq.question}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">
            Não encontrou sua resposta?
          </h3>
          <p className="text-blue-800 dark:text-blue-200 mb-4">
            Se você ainda tem dúvidas, entre em contato conosco através da página de{" "}
            <a
              href="/report-issue"
              className="underline hover:no-underline font-medium"
            >
              Reportar Problema
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  );
}
