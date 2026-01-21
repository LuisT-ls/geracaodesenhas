import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sobre o Projeto",
  description: "Conheça mais sobre o Gerador de Senhas Seguras e sua missão de proteger usuários online",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            Sobre o Projeto
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Conheça a história e os objetivos do Gerador de Senhas Seguras
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Nossa Missão
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              O Gerador de Senhas Seguras foi criado com o objetivo de fornecer ferramentas
              gratuitas e acessíveis para ajudar usuários a proteger suas contas online. Acreditamos
              que a segurança digital é um direito de todos, e que criar senhas fortes não deve ser
              complicado ou caro.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Características Principais
            </h2>
            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                <span>
                  <strong className="text-gray-900 dark:text-gray-100">Geração 100% Local:</strong>{" "}
                  Todas as senhas são geradas no seu navegador, sem envio de dados para servidores
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                <span>
                  <strong className="text-gray-900 dark:text-gray-100">Análise de Segurança:</strong>{" "}
                  Verifique a força da sua senha com análise detalhada de entropia e tempo estimado
                  para quebrar
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                <span>
                  <strong className="text-gray-900 dark:text-gray-100">Múltiplas Ferramentas:</strong>{" "}
                  Gerador de senhas, analisador, WiFi, PIN, passphrase e glossário de segurança
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                <span>
                  <strong className="text-gray-900 dark:text-gray-100">Open Source:</strong>{" "}
                  Código aberto e disponível no{" "}
                  <a
                    href="https://github.com/LuisT-ls/geracaodesenhas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    GitHub
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                <span>
                  <strong className="text-gray-900 dark:text-gray-100">Privacidade Total:</strong>{" "}
                  Nenhum dado é coletado, armazenado ou compartilhado
                </span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Tecnologias Utilizadas
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Este projeto foi construído com tecnologias modernas e seguras:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Zod"].map((tech) => (
                <div
                  key={tech}
                  className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 text-center text-sm font-medium text-gray-900 dark:text-gray-100"
                >
                  {tech}
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Contribua com o Projeto
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Este projeto é open source e aceita contribuições! Se você tem ideias, encontrou bugs
              ou quer adicionar novas funcionalidades, sinta-se à vontade para contribuir.
            </p>
            <a
              href="https://github.com/LuisT-ls/geracaodesenhas"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors"
            >
              Ver no GitHub
            </a>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Desenvolvedor
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Desenvolvido por{" "}
              <a
                href="https://github.com/LuisT-ls"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
              >
                Luís Teixeira
              </a>
              , estudante da Universidade Federal da Bahia (UFBA) e desenvolvedor web apaixonado
              por segurança e privacidade online.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
