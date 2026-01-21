"use client";

import { useState, useCallback } from "react";
import {
  generatePassword,
  calculatePasswordStrength,
  getPasswordStrengthLabel,
  type PasswordOptions,
} from "@/utils/password-generator";

export default function PasswordGenerator() {
  const [password, setPassword] = useState<string>("");
  const [options, setOptions] = useState<PasswordOptions>({
    length: 16,
    includeUppercase: true,
    includeLowercase: true,
    includeNumbers: true,
    includeSymbols: true,
    excludeAmbiguous: false,
    avoidRepeated: false,
    startWithUppercase: false,
    endWithNumber: false,
  });
  const [copied, setCopied] = useState(false);

  const handleGenerate = useCallback(() => {
    try {
      const newPassword = generatePassword(options);
      setPassword(newPassword);
      setCopied(false);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Erro ao gerar senha";
      alert(errorMessage);
      console.error("Erro ao gerar senha:", error);
    }
  }, [options]);

  const handleCopy = useCallback(async () => {
    if (!password) return;

    try {
      await navigator.clipboard.writeText(password);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Erro ao copiar senha:", error);
    }
  }, [password]);

  const strength = password ? calculatePasswordStrength(password) : 0;
  const strengthInfo = getPasswordStrengthLabel(strength);

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      {/* Display da Senha */}
      <div className="space-y-2">
        <label htmlFor="password-display" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Senha Gerada
        </label>
        <div className="flex gap-2">
          <input
            id="password-display"
            type="text"
            value={password}
            readOnly
            className="flex-1 px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-lg font-mono focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            aria-label="Senha gerada"
          />
          <button
            onClick={handleCopy}
            disabled={!password}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label={copied ? "Senha copiada" : "Copiar senha"}
          >
            {copied ? "✓ Copiado" : "Copiar"}
          </button>
        </div>
        {password && (
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600 dark:text-gray-400">Força:</span>
            <span className={`text-sm font-medium ${strengthInfo.color}`}>
              {strengthInfo.label}
            </span>
            <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 transition-all duration-300"
                style={{ width: `${strength}%` }}
                aria-hidden="true"
              />
            </div>
          </div>
        )}
      </div>

      {/* Opções de Configuração */}
      <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg p-6 space-y-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
          Configurações
        </h2>

        {/* Comprimento */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label htmlFor="length" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Comprimento: {options.length}
            </label>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {options.length} caracteres
            </span>
          </div>
          <input
            id="length"
            type="range"
            min="4"
            max="128"
            value={options.length}
            onChange={(e) =>
              setOptions((prev) => ({ ...prev, length: parseInt(e.target.value, 10) }))
            }
            className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
            aria-label="Comprimento da senha"
          />
        </div>

        {/* Tipos de Caracteres */}
        <div className="space-y-3">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300 block">
            Tipos de Caracteres
          </label>
          <div className="space-y-2">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={options.includeUppercase}
                onChange={(e) =>
                  setOptions((prev) => ({ ...prev, includeUppercase: e.target.checked }))
                }
                className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                aria-label="Incluir letras maiúsculas"
              />
              <span className="text-gray-700 dark:text-gray-300">
                Letras Maiúsculas (A-Z)
              </span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={options.includeLowercase}
                onChange={(e) =>
                  setOptions((prev) => ({ ...prev, includeLowercase: e.target.checked }))
                }
                className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                aria-label="Incluir letras minúsculas"
              />
              <span className="text-gray-700 dark:text-gray-300">
                Letras Minúsculas (a-z)
              </span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={options.includeNumbers}
                onChange={(e) =>
                  setOptions((prev) => ({ ...prev, includeNumbers: e.target.checked }))
                }
                className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                aria-label="Incluir números"
              />
              <span className="text-gray-700 dark:text-gray-300">
                Números (0-9)
              </span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={options.includeSymbols}
                onChange={(e) =>
                  setOptions((prev) => ({ ...prev, includeSymbols: e.target.checked }))
                }
                className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                aria-label="Incluir símbolos"
              />
              <span className="text-gray-700 dark:text-gray-300">
                Símbolos (!@#$%...)
              </span>
            </label>
          </div>
        </div>

        {/* Opções Avançadas */}
        <div className="space-y-3 border-t border-gray-200 dark:border-gray-700 pt-4">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300 block">
            Opções Avançadas
          </label>
          <div className="space-y-2">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={options.excludeAmbiguous}
                onChange={(e) =>
                  setOptions((prev) => ({ ...prev, excludeAmbiguous: e.target.checked }))
                }
                className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                aria-label="Excluir caracteres ambíguos"
              />
              <div className="flex-1">
                <span className="text-gray-700 dark:text-gray-300">
                  Excluir caracteres ambíguos
                </span>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                  Remove 0, O, 1, l, I, 5, S, 2, Z
                </p>
              </div>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={options.avoidRepeated}
                onChange={(e) =>
                  setOptions((prev) => ({ ...prev, avoidRepeated: e.target.checked }))
                }
                className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                aria-label="Evitar caracteres repetidos"
              />
              <div className="flex-1">
                <span className="text-gray-700 dark:text-gray-300">
                  Evitar caracteres repetidos
                </span>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                  Cada caractere aparece no máximo uma vez
                </p>
              </div>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={options.startWithUppercase}
                onChange={(e) =>
                  setOptions((prev) => ({ ...prev, startWithUppercase: e.target.checked }))
                }
                disabled={!options.includeUppercase}
                className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Iniciar com letra maiúscula"
              />
              <div className="flex-1">
                <span className="text-gray-700 dark:text-gray-300">
                  Iniciar com letra maiúscula
                </span>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                  Requer letras maiúsculas habilitadas
                </p>
              </div>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={options.endWithNumber}
                onChange={(e) =>
                  setOptions((prev) => ({ ...prev, endWithNumber: e.target.checked }))
                }
                disabled={!options.includeNumbers}
                className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Terminar com número"
              />
              <div className="flex-1">
                <span className="text-gray-700 dark:text-gray-300">
                  Terminar com número
                </span>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                  Requer números habilitados
                </p>
              </div>
            </label>
          </div>
        </div>

        {/* Botão de Gerar */}
        <button
          onClick={handleGenerate}
          className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Gerar Nova Senha
        </button>
      </div>
    </div>
  );
}
