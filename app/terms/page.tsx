import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Termos de uso do Gerador de Senhas Seguras",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            Termos de Uso
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Última atualização: {new Date().toLocaleDateString("pt-BR")}
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg p-8 space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
              1. Aceitação dos Termos
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Ao acessar e usar o Gerador de Senhas Seguras, você concorda em cumprir e estar
              vinculado aos seguintes termos e condições de uso. Se você não concorda com alguma
              parte destes termos, não deve usar este serviço.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
              2. Uso do Serviço
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
              O Gerador de Senhas Seguras é fornecido gratuitamente para uso pessoal e comercial.
              Você concorda em:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 ml-4">
              <li>Usar o serviço apenas para fins legais e legítimos</li>
              <li>Não tentar comprometer a segurança ou funcionalidade do serviço</li>
              <li>Não usar o serviço para atividades maliciosas ou ilegais</li>
              <li>Respeitar os direitos de propriedade intelectual</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
              3. Privacidade e Segurança
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Todas as senhas são geradas localmente no seu navegador. Nenhum dado é coletado,
              armazenado ou transmitido para nossos servidores. Você é responsável por manter a
              segurança das senhas geradas e usá-las adequadamente.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
              4. Isenção de Responsabilidade
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              O Gerador de Senhas Seguras é fornecido "como está", sem garantias de qualquer tipo,
              expressas ou implícitas. Não garantimos que o serviço será ininterrupto, seguro ou
              livre de erros. Você usa o serviço por sua conta e risco.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
              5. Limitação de Responsabilidade
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Em nenhuma circunstância seremos responsáveis por quaisquer danos diretos, indiretos,
              incidentais, especiais ou consequenciais resultantes do uso ou incapacidade de usar
              este serviço.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
              6. Modificações dos Termos
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Reservamo-nos o direito de modificar estes termos a qualquer momento. As
              alterações entrarão em vigor imediatamente após a publicação. É sua responsabilidade
              revisar periodicamente estes termos.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
              7. Contato
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Se você tiver dúvidas sobre estes termos, entre em contato através da página de{" "}
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
