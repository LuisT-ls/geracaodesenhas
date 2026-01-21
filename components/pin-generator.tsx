"use client";

import { useState, useCallback } from "react";
import { generatePIN } from "@/utils/pin-generator";

export default function PinGenerator() {
  const [pin, setPin] = useState<string>("");
  const [length, setLength] = useState<number>(4);
  const [avoidSequences, setAvoidSequences] = useState<boolean>(true);
  const [avoidRepeated, setAvoidRepeated] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const handleGenerate = useCallback(() => {
    try {
      const newPin = generatePIN(length, avoidSequences, avoidRepeated);
      setPin(newPin);
      setCopied(false);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Erro ao gerar PIN";
      alert(errorMessage);
      console.error("Erro ao gerar PIN:", error);
    }
  }, [length, avoidSequences, avoidRepeated]);

  const handleCopy = useCallback(async () => {
    if (!pin) return;
    try {
      await navigator.clipboard.writeText(pin);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Erro ao copiar PIN:", error);
    }
  }, [pin]);

  return (
    <div className="p-6 space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
          Gerador de PIN
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Gere PINs numéricos seguros para cartões, dispositivos e sistemas
        </p>
      </div>

      {/* Configurações */}
      <div className="bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg p-4 space-y-4">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
          Configurações
        </h3>

        {/* Comprimento */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label htmlFor="pin-length" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Comprimento: {length}
            </label>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {length} dígitos
            </span>
          </div>
          <input
            id="pin-length"
            type="range"
            min="4"
            max="10"
            value={length}
            onChange={(e) => setLength(parseInt(e.target.value, 10))}
            className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
            aria-label="Comprimento do PIN"
          />
          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
            <span>4</span>
            <span>10</span>
          </div>
        </div>

        {/* Opções */}
        <div className="space-y-2">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={avoidSequences}
              onChange={(e) => setAvoidSequences(e.target.checked)}
              className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
              aria-label="Evitar sequências"
            />
            <span className="text-sm text-gray-700 dark:text-gray-300">
              Evitar sequências (ex: 1234, 9876)
            </span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={avoidRepeated}
              onChange={(e) => setAvoidRepeated(e.target.checked)}
              className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
              aria-label="Evitar repetições"
            />
            <span className="text-sm text-gray-700 dark:text-gray-300">
              Evitar dígitos repetidos
            </span>
          </label>
        </div>

        {/* Botão Gerar */}
        <button
          onClick={handleGenerate}
          className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Gerar PIN
        </button>
      </div>

      {/* PIN Gerado */}
      {pin && (
        <div className="bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg p-6">
          <div className="flex items-center gap-3">
            <input
              type="text"
              value={pin}
              readOnly
              className="flex-1 px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-2xl font-mono text-center tracking-widest focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              aria-label="PIN gerado"
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
