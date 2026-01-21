import PasswordGenerator from "@/components/password-generator";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Gerador de Senhas Seguras
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Crie senhas fortes e personalizadas com opções de customização.
            Suas senhas são geradas localmente e nunca são enviadas para servidores.
          </p>
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
