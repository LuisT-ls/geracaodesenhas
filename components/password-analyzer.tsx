"use client";

import { useState, useCallback } from "react";
import {
  analyzePasswordSecurity,
  type PasswordOptions,
  type SecurityAnalysis,
} from "@/utils/password-generator";

export default function PasswordAnalyzer() {
  const [password, setPassword] = useState<string>("");
  const [analysis, setAnalysis] = useState<SecurityAnalysis | null>(null);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showSecurityAnalysis, setShowSecurityAnalysis] = useState<boolean>(false);

  const handleAnalyze = useCallback(() => {
    if (!password.trim()) {
      alert("Por favor, digite uma senha para analisar");
      return;
    }

    // Detecta opções baseado na senha
    const detectedOptions: PasswordOptions = {
      length: password.length,
      includeUppercase: /[A-Z]/.test(password),
      includeLowercase: /[a-z]/.test(password),
      includeNumbers: /[0-9]/.test(password),
      includeSymbols: /[^a-zA-Z0-9]/.test(password),
      excludeAmbiguous: false,
      avoidRepeated: new Set(password.split("")).size === password.length,
      startWithUppercase: /^[A-Z]/.test(password),
      endWithNumber: /[0-9]$/.test(password),
    };

    const securityAnalysis = analyzePasswordSecurity(password, detectedOptions);
    setAnalysis(securityAnalysis);
    setShowSecurityAnalysis(false);
  }, [password]);

  return (
    <div className="p-6 space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
          Analisador de Senha
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Digite uma senha para analisar sua força e segurança
        </p>
      </div>

      {/* Input de Senha */}
      <div className="space-y-2">
        <label htmlFor="analyzer-password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Digite a senha para analisar:
        </label>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="flex items-center gap-2 flex-1 min-w-0">
            <input
              id="analyzer-password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleAnalyze();
                }
              }}
              className="flex-1 min-w-0 px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg text-lg font-mono focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent break-all"
              placeholder="Digite sua senha aqui..."
              aria-label="Senha para analisar"
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors flex-shrink-0"
              aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
            >
              {showPassword ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.29 3.29m0 0A9.97 9.97 0 015 12c0 1.01.103 2.01.298 2.986M3 3l18 18" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              )}
            </button>
          </div>
          <button
            onClick={handleAnalyze}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 whitespace-nowrap sm:flex-shrink-0"
          >
            Analisar
          </button>
        </div>
      </div>

      {/* Resultado da Análise */}
      {analysis && (
        <div className="bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg p-4 space-y-4">
          {/* Força da Senha */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-blue-600 dark:text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                Força da Senha:
              </h3>
            </div>
            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div
                className={`h-full transition-all duration-500 ${
                  analysis.strength >= 90
                    ? "bg-green-500"
                    : analysis.strength >= 70
                    ? "bg-yellow-500"
                    : analysis.strength >= 50
                    ? "bg-orange-500"
                    : "bg-red-500"
                }`}
                style={{ width: `${analysis.strength}%` }}
              />
            </div>
            <div className="flex items-center justify-between">
              <p className={`text-sm font-medium ${analysis.strengthColor}`}>
                Força {analysis.strengthLabel}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {analysis.entropy} bits
              </p>
            </div>
          </div>

          {/* Análise de Segurança (Expandível) */}
          <div className="space-y-3">
            <button
              onClick={() => setShowSecurityAnalysis(!showSecurityAnalysis)}
              className="w-full flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <svg
                className={`w-4 h-4 transition-transform ${showSecurityAnalysis ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 15l7-7 7 7"
                />
              </svg>
              Análise de Segurança
            </button>

            {showSecurityAnalysis && (
              <div className="space-y-3 pl-6">
                {/* Critérios */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      {password.length} caracteres - {password.length >= 12 ? "bom comprimento" : password.length >= 8 ? "comprimento adequado" : "comprimento curto"}
                    </span>
                  </div>

                  {/[A-Z]/.test(password) ? (
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-700 dark:text-gray-300">Inclui letras maiúsculas</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-700 dark:text-gray-300">Não inclui letras maiúsculas</span>
                    </div>
                  )}

                  {/[a-z]/.test(password) ? (
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-700 dark:text-gray-300">Inclui letras minúsculas</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-700 dark:text-gray-300">Não inclui letras minúsculas</span>
                    </div>
                  )}

                  {/[0-9]/.test(password) ? (
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-700 dark:text-gray-300">Inclui números</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-700 dark:text-gray-300">Não inclui números</span>
                    </div>
                  )}

                  {/[^a-zA-Z0-9]/.test(password) ? (
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-700 dark:text-gray-300">Inclui símbolos especiais</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-700 dark:text-gray-300">Não inclui símbolos especiais</span>
                    </div>
                  )}
                </div>

                {/* Tempo Estimado */}
                <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Tempo estimado para quebrar (ataque online):{" "}
                      <span className="text-blue-600 dark:text-blue-400 font-medium">
                        {analysis.timeToCrack.online}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
