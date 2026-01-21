import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cookies",
  description: "Política de cookies do Gerador de Senhas Seguras",
};

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            Política de Cookies
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Última atualização: {new Date().toLocaleDateString("pt-BR")}
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg p-8 space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
              O que são Cookies?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Cookies são pequenos arquivos de texto armazenados no seu dispositivo quando você
              visita um site. Eles são amplamente usados para fazer os sites funcionarem de forma
              mais eficiente e fornecer informações aos proprietários do site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
              Como Usamos Cookies
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
              O Gerador de Senhas Seguras usa cookies de forma mínima e apenas para funcionalidades
              essenciais:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 ml-4">
              <li>
                <strong>Cookies Essenciais:</strong> Necessários para o funcionamento básico do
                site, como preferências de tema (modo escuro/claro)
              </li>
              <li>
                <strong>Cookies de Preferências:</strong> Armazenam suas configurações locais,
                como preferências de geração de senha
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
              Cookies que NÃO Usamos
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
              Para proteger sua privacidade, não usamos:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 ml-4">
              <li>Cookies de rastreamento</li>
              <li>Cookies de analytics de terceiros</li>
              <li>Cookies de publicidade</li>
              <li>Cookies de redes sociais</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
              Gerenciamento de Cookies
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Você pode controlar e gerenciar cookies através das configurações do seu navegador.
              No entanto, desabilitar cookies essenciais pode afetar a funcionalidade do site.
              Para instruções sobre como gerenciar cookies em diferentes navegadores, consulte:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 ml-4 mt-3">
              <li>
                <a
                  href="https://support.google.com/chrome/answer/95647"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Google Chrome
                </a>
              </li>
              <li>
                <a
                  href="https://support.mozilla.org/pt-BR/kb/cookies-informacoes-armazenadas-em-sites-web"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Mozilla Firefox
                </a>
              </li>
              <li>
                <a
                  href="https://support.apple.com/pt-br/guide/safari/sfri11471/mac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Safari
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
              Cookies de Terceiros
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Atualmente, não usamos cookies de terceiros. Se isso mudar no futuro, atualizaremos
              esta política e notificaremos os usuários.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
              Mais Informações
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Para mais informações sobre cookies e como eles funcionam, visite{" "}
              <a
                href="https://www.allaboutcookies.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                All About Cookies
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
