"use client";

import { useState, useCallback } from "react";
import { generatePassphrase, type Separator } from "@/utils/passphrase-generator";

export default function PassphraseGenerator() {
  const [passphrase, setPassphrase] = useState<string>("");
  const [wordCount, setWordCount] = useState<number>(4);
  const [separator, setSeparator] = useState<Separator>("espaco");
  const [capitalize, setCapitalize] = useState<boolean>(true);
  const [addNumbers, setAddNumbers] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const handleGenerate = useCallback(() => {
    try {
      const newPassphrase = generatePassphrase(wordCount, separator, capitalize, addNumbers);
      setPassphrase(newPassphrase);
      setCopied(false);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Erro ao gerar passphrase";
      alert(errorMessage);
      console.error("Erro ao gerar passphrase:", error);
    }
  }, [wordCount, separator, capitalize, addNumbers]);

  const handleCopy = useCallback(async () => {
    if (!passphrase) return;
    try {
      await navigator.clipboard.writeText(passphrase);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Erro ao copiar passphrase:", error);
    }
  }, [passphrase]);

  return (
    <div className="p-6 space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
          Gerador de Passphrase
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Gere passphrases seguras e fáceis de lembrar usando palavras comuns
        </p>
      </div>

      {/* Configurações */}
      <div className="bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg p-4 space-y-4">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
          Configurações
        </h3>

        {/* Número de Palavras */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label htmlFor="word-count" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Número de palavras: {wordCount}
            </label>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {wordCount} palavras
            </span>
          </div>
          <input
            id="word-count"
            type="range"
            min="3"
            max="10"
            value={wordCount}
            onChange={(e) => setWordCount(parseInt(e.target.value, 10))}
            className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
            aria-label="Número de palavras"
          />
          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
            <span>3</span>
            <span>10</span>
          </div>
        </div>

        {/* Separador */}
        <div className="space-y-2">
          <label htmlFor="separator" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Separador
          </label>
          <select
            id="separator"
            value={separator}
            onChange={(e) => setSeparator(e.target.value as Separator)}
            className="w-full px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="espaco">Espaço</option>
            <option value="hifen">Hífen (-)</option>
            <option value="ponto">Ponto (.)</option>
            <option value="sublinhado">Sublinhado (_)</option>
            <option value="sem">Sem separador</option>
          </select>
        </div>

        {/* Opções */}
        <div className="space-y-2">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={capitalize}
              onChange={(e) => setCapitalize(e.target.checked)}
              className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
              aria-label="Capitalizar palavras"
            />
            <span className="text-sm text-gray-700 dark:text-gray-300">
              Capitalizar palavras
            </span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={addNumbers}
              onChange={(e) => setAddNumbers(e.target.checked)}
              className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
              aria-label="Adicionar números"
            />
            <span className="text-sm text-gray-700 dark:text-gray-300">
              Adicionar números
            </span>
          </label>
        </div>

        {/* Botão Gerar */}
        <button
          onClick={handleGenerate}
          className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Gerar Passphrase
        </button>
      </div>

      {/* Passphrase Gerada */}
      {passphrase && (
        <div className="bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg p-6">
          <div className="flex items-center gap-3">
            <input
              type="text"
              value={passphrase}
              readOnly
              className="flex-1 px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-lg font-mono focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              aria-label="Passphrase gerada"
            />
            <button
              onClick={handleCopy}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              {copied ? "✓ Copiado" : "Copiar"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
