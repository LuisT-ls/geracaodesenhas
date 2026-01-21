"use client";

import { useState, useCallback, useEffect } from "react";
import {
  generatePassword,
  analyzePasswordSecurity,
  type PasswordOptions,
  type SecurityAnalysis,
} from "@/utils/password-generator";

interface GeneratedPassword {
  password: string;
  analysis: SecurityAnalysis;
}

export default function PasswordGenerator() {
  const [passwords, setPasswords] = useState<GeneratedPassword[]>([]);
  const [passwordCount, setPasswordCount] = useState<number>(5);
  const [currentPassword, setCurrentPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalPasswordCount, setModalPasswordCount] = useState<number>(5);
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
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleGenerateSingle = useCallback(() => {
    try {
      const password = generatePassword(options);
      const analysis = analyzePasswordSecurity(password, options);
      setCurrentPassword(password);
      setPasswords([{ password, analysis }]);
      setCopiedIndex(null);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Erro ao gerar senha";
      alert(errorMessage);
      console.error("Erro ao gerar senha:", error);
    }
  }, [options]);

  const handleOpenModal = useCallback(() => {
    setModalPasswordCount(passwordCount);
    setShowModal(true);
  }, [passwordCount]);

  const handleCloseModal = useCallback(() => {
    setShowModal(false);
  }, []);

  const handleGenerateMultiple = useCallback(() => {
    try {
      const newPasswords: GeneratedPassword[] = [];
      
      for (let i = 0; i < modalPasswordCount; i++) {
        const password = generatePassword(options);
        const analysis = analyzePasswordSecurity(password, options);
        newPasswords.push({ password, analysis });
      }
      
      setPasswords(newPasswords);
      setPasswordCount(modalPasswordCount);
      setCurrentPassword(""); // Limpa senha única quando gerar múltiplas
      setCopiedIndex(null);
      setShowModal(false);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Erro ao gerar senha";
      alert(errorMessage);
      console.error("Erro ao gerar senha:", error);
    }
  }, [options, modalPasswordCount]);

  const handleCopy = useCallback(async (password: string, index: number) => {
    try {
      await navigator.clipboard.writeText(password);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (error) {
      console.error("Erro ao copiar senha:", error);
    }
  }, []);

  const handleCopyCurrent = useCallback(async () => {
    if (!currentPassword) return;
    try {
      await navigator.clipboard.writeText(currentPassword);
      setCopiedIndex(0);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (error) {
      console.error("Erro ao copiar senha:", error);
    }
  }, [currentPassword]);

  const handleCopyAll = useCallback(async () => {
    if (passwords.length === 0) return;
    
    const allPasswords = passwords.map((p) => p.password).join("\n");
    try {
      await navigator.clipboard.writeText(allPasswords);
      setCopiedIndex(-1); // -1 indica "todos copiados"
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (error) {
      console.error("Erro ao copiar senhas:", error);
    }
  }, [passwords]);


  return (
    <div className="w-full max-w-6xl mx-auto space-y-8">
      {/* Controles Principais */}
      <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Coluna 1: Comprimento */}
          <div className="space-y-3">
            <label htmlFor="length" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Comprimento da Senha:
            </label>
            <div className="flex items-center gap-4">
              <input
                id="length"
                type="range"
                min="4"
                max="128"
                value={options.length}
                onChange={(e) =>
                  setOptions((prev) => ({ ...prev, length: parseInt(e.target.value, 10) }))
                }
                className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
                aria-label="Comprimento da senha"
              />
              <span className="text-lg font-semibold text-gray-900 dark:text-gray-100 min-w-[3rem] text-right">
                {options.length}
              </span>
            </div>
          </div>

          {/* Coluna 2: Tipos de Caracteres */}
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 space-y-3">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
              Tipos de caracteres
            </h3>
            <div className="space-y-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={options.includeUppercase}
                  onChange={(e) =>
                    setOptions((prev) => ({ ...prev, includeUppercase: e.target.checked }))
                  }
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  aria-label="Incluir letras maiúsculas"
                />
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  Letras Maiúsculas (A-Z)
                </span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={options.includeLowercase}
                  onChange={(e) =>
                    setOptions((prev) => ({ ...prev, includeLowercase: e.target.checked }))
                  }
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  aria-label="Incluir letras minúsculas"
                />
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  Letras Minúsculas (a-z)
                </span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={options.includeNumbers}
                  onChange={(e) =>
                    setOptions((prev) => ({ ...prev, includeNumbers: e.target.checked }))
                  }
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  aria-label="Incluir números"
                />
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  Números (0-9)
                </span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={options.includeSymbols}
                  onChange={(e) =>
                    setOptions((prev) => ({ ...prev, includeSymbols: e.target.checked }))
                  }
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  aria-label="Incluir símbolos"
                />
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  Símbolos (!@#$%)
                </span>
              </label>
            </div>
          </div>

          {/* Coluna 3: Opções Avançadas */}
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 space-y-3">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
              Opções avançadas
            </h3>
            <div className="space-y-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={options.excludeAmbiguous}
                  onChange={(e) =>
                    setOptions((prev) => ({ ...prev, excludeAmbiguous: e.target.checked }))
                  }
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  aria-label="Excluir caracteres ambíguos"
                />
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  Excluir Caracteres Ambíguos
                </span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={options.avoidRepeated}
                  onChange={(e) =>
                    setOptions((prev) => ({ ...prev, avoidRepeated: e.target.checked }))
                  }
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  aria-label="Evitar caracteres repetidos"
                />
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  Evitar Caracteres Repetidos
                </span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={options.startWithUppercase}
                  onChange={(e) =>
                    setOptions((prev) => ({ ...prev, startWithUppercase: e.target.checked }))
                  }
                  disabled={!options.includeUppercase}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Iniciar com letra maiúscula"
                />
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  Iniciar com Letra Maiúscula
                </span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={options.endWithNumber}
                  onChange={(e) =>
                    setOptions((prev) => ({ ...prev, endWithNumber: e.target.checked }))
                  }
                  disabled={!options.includeNumbers}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Terminar com número"
                />
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  Terminar com Número
                </span>
              </label>
            </div>
          </div>
        </div>

        {/* Botões de Ação */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleGenerateSingle}
            className="flex-1 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center justify-center gap-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            Gerar Senha
          </button>
          <div className="flex-1 flex items-center gap-3">
            <button
              onClick={handleOpenModal}
              className="flex-1 px-6 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100 font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 flex items-center justify-center gap-2"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
              Gerar Várias
            </button>
          </div>
        </div>
      </div>

      {/* Campo de Senha Gerada */}
      {currentPassword && (
        <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg p-4">
          <div className="flex items-center gap-3">
            <input
              type={showPassword ? "text" : "password"}
              value={currentPassword}
              readOnly
              className="flex-1 px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg text-lg font-mono focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              aria-label="Senha gerada"
            />
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              <button
                onClick={handleGenerateSingle}
                className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Regenerar senha"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </button>
              <button
                onClick={handleCopyCurrent}
                className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label={copiedIndex === 0 ? "Senha copiada" : "Copiar senha"}
              >
                {copiedIndex === 0 ? (
                  <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Senhas Múltiplas Geradas */}
      {passwords.length > 1 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2">
              <svg
                className="w-5 h-5 text-gray-600 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
              Múltiplas Senhas Geradas
            </h2>
            <button
              onClick={handleCopyAll}
              className="px-4 py-2 text-sm bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              {copiedIndex === -1 ? "✓ Todas Copiadas" : "Copiar Todas"}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {passwords.map((item, index) => (
              <PasswordCard
                key={index}
                password={item.password}
                analysis={item.analysis}
                index={index}
                onCopy={handleCopy}
                copied={copiedIndex === index}
              />
            ))}
          </div>
        </div>
      )}

      {/* Modal para Gerar Múltiplas Senhas */}
      {showModal && (
        <GenerateMultipleModal
          passwordCount={modalPasswordCount}
          onPasswordCountChange={setModalPasswordCount}
          onGenerate={handleGenerateMultiple}
          onCancel={handleCloseModal}
        />
      )}
    </div>
  );
}

interface GenerateMultipleModalProps {
  passwordCount: number;
  onPasswordCountChange: (count: number) => void;
  onGenerate: () => void;
  onCancel: () => void;
}

function GenerateMultipleModal({
  passwordCount,
  onPasswordCountChange,
  onGenerate,
  onCancel,
}: GenerateMultipleModalProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 1 && value <= 20) {
      onPasswordCountChange(value);
    } else if (e.target.value === "") {
      onPasswordCountChange(1);
    }
  };

  // Fechar modal com tecla Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onCancel();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onCancel]);

  // Prevenir scroll do body quando modal estiver aberto
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
      onClick={onCancel}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full p-6 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center gap-3">
          <svg
            className="w-6 h-6 text-blue-500 dark:text-blue-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
            />
          </svg>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            Gerar Múltiplas Senhas
          </h2>
        </div>

        {/* Input Field */}
        <div className="space-y-2">
          <label
            htmlFor="modal-password-count"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Quantidade de senhas:
          </label>
          <input
            id="modal-password-count"
            type="number"
            min="1"
            max="20"
            value={passwordCount}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border-2 border-blue-500 dark:border-blue-400 rounded-lg text-lg font-medium text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            aria-label="Quantidade de senhas a gerar"
            autoFocus
          />
        </div>

        {/* Informational Message */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 flex items-start gap-3">
          <svg
            className="w-5 h-5 text-blue-500 dark:text-blue-400 flex-shrink-0 mt-0.5"
            fill="currentColor"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-sm text-blue-800 dark:text-blue-200">
            As senhas serão geradas com as configurações atuais do gerador principal.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-3">
          <button
            onClick={onCancel}
            className="px-6 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100 font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 border border-gray-300 dark:border-gray-600"
          >
            Cancelar
          </button>
          <button
            onClick={onGenerate}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Gerar
          </button>
        </div>
      </div>
    </div>
  );
}

interface PasswordCardProps {
  password: string;
  analysis: SecurityAnalysis;
  index: number;
  onCopy: (password: string, index: number) => void;
  copied: boolean;
}

function PasswordCard({ password, analysis, index, onCopy, copied }: PasswordCardProps) {
  const [showAnalysis, setShowAnalysis] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg p-4 space-y-3">
      {/* Senha Compacta */}
      <div className="flex items-center gap-3">
        <span className="text-sm font-medium text-gray-600 dark:text-gray-400 min-w-[2.5rem]">
          #{index + 1}
        </span>
        <input
          type="text"
          value={password}
          readOnly
          className="flex-1 px-3 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg text-sm font-mono focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          aria-label={`Senha ${index + 1}`}
        />
        <button
          onClick={() => onCopy(password, index)}
          className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          aria-label={copied ? "Senha copiada" : "Copiar senha"}
          title={copied ? "Copiado!" : "Copiar senha"}
        >
          {copied ? (
            <svg
              className="w-5 h-5 text-green-600 dark:text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Análise de Segurança (Expandível) */}
      <button
        onClick={() => setShowAnalysis(!showAnalysis)}
        className="w-full text-left text-xs text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 flex items-center justify-between"
      >
        <span>
          {analysis.strengthLabel} • {analysis.entropy} bits
        </span>
        <svg
          className={`w-4 h-4 transition-transform ${showAnalysis ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {showAnalysis && (
        <div className="pt-2 border-t border-gray-200 dark:border-gray-700 space-y-2 text-xs">
          <div className="space-y-1.5">
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Força:</span>
              <span className={`font-medium ${analysis.strengthColor}`}>
                {analysis.strengthLabel}
              </span>
            </div>
            <div className="h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 transition-all duration-300"
                style={{ width: `${analysis.strength}%` }}
                aria-hidden="true"
              />
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Entropia:</span>
              <span className="font-medium text-gray-900 dark:text-gray-100">
                {analysis.entropy} bits
              </span>
            </div>
          </div>
          <div className="pt-2 space-y-1">
            <div className="text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
              Tempo para Quebrar
            </div>
            <div className="space-y-1 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Online:</span>
                <span className="font-medium text-gray-900 dark:text-gray-100">
                  {analysis.timeToCrack.online}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Offline:</span>
                <span className="font-medium text-gray-900 dark:text-gray-100">
                  {analysis.timeToCrack.offline}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">GPU:</span>
                <span className="font-medium text-gray-900 dark:text-gray-100">
                  {analysis.timeToCrack.gpu}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
