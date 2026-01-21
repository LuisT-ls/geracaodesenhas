"use client";

import { useState, useCallback } from "react";
import { QRCodeSVG } from "qrcode.react";
import { generateWifiPassword, generateWifiQRString } from "@/utils/wifi-generator";

export default function WifiGenerator() {
  const [ssid, setSsid] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [length, setLength] = useState<number>(16);
  const [memorable, setMemorable] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(true);

  const handleGenerate = useCallback(() => {
    if (!ssid.trim()) {
      alert("Por favor, defina o SSID (nome da rede WiFi) antes de gerar a senha");
      return;
    }

    const newPassword = generateWifiPassword(length, memorable);
    setPassword(newPassword);
  }, [length, memorable, ssid]);

  const handleCopy = useCallback(async () => {
    if (!password) return;
    try {
      await navigator.clipboard.writeText(password);
      alert("Senha copiada!");
    } catch (error) {
      console.error("Erro ao copiar senha:", error);
    }
  }, [password]);

  const qrString = password && ssid ? generateWifiQRString(ssid, password) : "";

  return (
    <div className="p-6 space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
          Gerador de Senha WiFi
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Gere senhas seguras para sua rede WiFi com QR Code para fácil compartilhamento
        </p>
      </div>

      {/* SSID */}
      <div className="space-y-2">
        <label htmlFor="wifi-ssid" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Nome da Rede (SSID) *
        </label>
        <input
          id="wifi-ssid"
          type="text"
          value={ssid}
          onChange={(e) => setSsid(e.target.value)}
          className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Ex: MinhaRedeWiFi"
          aria-label="Nome da rede WiFi"
        />
      </div>

      {/* Configurações */}
      <div className="bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg p-4 space-y-4">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
          Configurações da Senha
        </h3>

        {/* Comprimento */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label htmlFor="wifi-length" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Comprimento: {length}
            </label>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {length} caracteres
            </span>
          </div>
          <input
            id="wifi-length"
            type="range"
            min="8"
            max="63"
            value={length}
            onChange={(e) => setLength(parseInt(e.target.value, 10))}
            className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
            aria-label="Comprimento da senha WiFi"
          />
          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
            <span>8</span>
            <span>63</span>
          </div>
        </div>

        {/* Senha Memorizável */}
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={memorable}
            onChange={(e) => setMemorable(e.target.checked)}
            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            aria-label="Gerar senha memorizável"
          />
          <div>
            <span className="text-sm text-gray-700 dark:text-gray-300">
              Senha memorizável
            </span>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
              Gera uma senha mais fácil de lembrar (combina palavras e números)
            </p>
          </div>
        </label>

        {/* Botão Gerar */}
        <button
          onClick={handleGenerate}
          disabled={!ssid.trim()}
          className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Gerar Senha WiFi
        </button>
      </div>

      {/* Senha Gerada e QR Code */}
      {password && (
        <div className="bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg p-6 space-y-6">
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Senha Gerada
            </h3>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <div className="flex items-center gap-2 flex-1">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  readOnly
                  className="flex-1 min-w-0 px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-lg font-mono focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent break-all"
                  aria-label="Senha WiFi gerada"
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
                onClick={handleCopy}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 whitespace-nowrap sm:flex-shrink-0"
              >
                Copiar
              </button>
            </div>
          </div>

          {/* QR Code */}
          {qrString && (
            <div className="flex flex-col items-center space-y-3 pt-4 border-t border-gray-200 dark:border-gray-700">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                QR Code para Conectar
              </h3>
              <div className="bg-white p-4 rounded-lg">
                <QRCodeSVG value={qrString} size={200} />
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 text-center max-w-xs">
                Escaneie este QR Code com seu dispositivo para conectar automaticamente à rede WiFi
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
