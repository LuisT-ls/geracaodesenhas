import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Política de privacidade do Gerador de Senhas Seguras",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            Política de Privacidade
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Última atualização: {new Date().toLocaleDateString("pt-BR")}
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg p-8 space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
              1. Compromisso com a Privacidade
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              O Gerador de Senhas Seguras está comprometido em proteger sua privacidade. Esta
              política descreve como coletamos, usamos e protegemos suas informações.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
              2. Informações que NÃO Coletamos
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
              O Gerador de Senhas Seguras foi projetado com privacidade em mente:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 ml-4">
              <li>Não coletamos senhas geradas</li>
              <li>Não coletamos informações pessoais</li>
              <li>Não coletamos dados de navegação</li>
              <li>Não usamos cookies de rastreamento</li>
              <li>Não compartilhamos dados com terceiros</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
              3. Geração Local de Senhas
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Todas as senhas são geradas localmente no seu navegador usando JavaScript. Nenhum
              dado é enviado para nossos servidores durante o processo de geração. Isso garante que
              suas senhas nunca saiam do seu dispositivo.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
              4. Cookies e Tecnologias de Rastreamento
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Este site pode usar cookies essenciais para funcionalidade básica, mas não usa
              cookies de rastreamento ou analytics. Para mais informações, consulte nossa{" "}
              <a href="/cookies" className="text-blue-600 dark:text-blue-400 hover:underline">
                Política de Cookies
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
              5. Links para Sites Externos
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Nosso site pode conter links para sites externos. Não somos responsáveis pelas
              práticas de privacidade desses sites. Recomendamos que você leia as políticas de
              privacidade de qualquer site que visite.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
              6. Segurança
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Implementamos medidas de segurança técnicas e organizacionais apropriadas para
              proteger contra acesso não autorizado, alteração, divulgação ou destruição de
              informações. No entanto, nenhum método de transmissão pela internet é 100% seguro.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
              7. Alterações nesta Política
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Podemos atualizar esta política de privacidade periodicamente. Notificaremos sobre
              mudanças significativas publicando a nova política nesta página e atualizando a data
              de "última atualização".
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
              8. Contato
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Se você tiver dúvidas sobre esta política de privacidade, entre em contato através
              da página de{" "}
              <a href="/report-issue" className="text-blue-600 dark:text-blue-400 hover:underline">
                Reportar Problema
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
