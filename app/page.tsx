import PasswordGenerator from "@/components/password-generator";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
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
            Gerador de Senha
          </h1>
          <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400"></div>
        </div>
        <PasswordGenerator />
        <div className="mt-12 text-center">
          <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg p-6 max-w-2xl mx-auto">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
              Dicas de Segurança
            </h2>
            <ul className="text-left space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>• Use senhas com pelo menos 12 caracteres</li>
              <li>• Combine letras maiúsculas, minúsculas, números e símbolos</li>
              <li>• Não reutilize senhas em múltiplos serviços</li>
              <li>• Use um gerenciador de senhas para armazenar suas senhas com segurança</li>
              <li>• Ative a autenticação de dois fatores quando disponível</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
