"use client";

import { useState, Suspense } from "react";
import dynamic from "next/dynamic";

// Lazy load all components - only load when tab is active
// This reduces initial bundle size significantly
const PasswordGenerator = dynamic(() => import("./password-generator"), {
  loading: () => (
    <div className="p-6 flex items-center justify-center min-h-[400px]">
      <div className="animate-pulse text-gray-400">Carregando...</div>
    </div>
  ),
});

const PasswordAnalyzer = dynamic(() => import("./password-analyzer"), {
  loading: () => (
    <div className="p-6 flex items-center justify-center min-h-[400px]">
      <div className="animate-pulse text-gray-400">Carregando...</div>
    </div>
  ),
});

const WifiGenerator = dynamic(() => import("./wifi-generator"), {
  loading: () => (
    <div className="p-6 flex items-center justify-center min-h-[400px]">
      <div className="animate-pulse text-gray-400">Carregando...</div>
    </div>
  ),
});

const PinGenerator = dynamic(() => import("./pin-generator"), {
  loading: () => (
    <div className="p-6 flex items-center justify-center min-h-[400px]">
      <div className="animate-pulse text-gray-400">Carregando...</div>
    </div>
  ),
});

const PassphraseGenerator = dynamic(() => import("./passphrase-generator"), {
  loading: () => (
    <div className="p-6 flex items-center justify-center min-h-[400px]">
      <div className="animate-pulse text-gray-400">Carregando...</div>
    </div>
  ),
});

const SecurityGlossary = dynamic(() => import("./security-glossary"), {
  loading: () => (
    <div className="p-6 flex items-center justify-center min-h-[400px]">
      <div className="animate-pulse text-gray-400">Carregando...</div>
    </div>
  ),
});

type TabType = "generator" | "analyzer" | "wifi" | "pin" | "passphrase" | "glossary";

export default function ToolsContainer() {
  const [activeTab, setActiveTab] = useState<TabType>("generator");

  const tabs = [
    { id: "generator" as TabType, label: "Gerador", icon: "🔐" },
    { id: "analyzer" as TabType, label: "Analisador", icon: "🔍" },
    { id: "wifi" as TabType, label: "WiFi", icon: "📶" },
    { id: "pin" as TabType, label: "PIN", icon: "🔢" },
    { id: "passphrase" as TabType, label: "Passphrase", icon: "📝" },
    { id: "glossary" as TabType, label: "Glossário", icon: "📚" },
  ];

  return (
    <div className="w-full">
      {/* Tabs */}
      <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-t-lg overflow-hidden">
        <div className="flex overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 min-w-[120px] px-4 py-3 text-sm font-medium transition-colors border-b-2 ${
                activeTab === tab.id
                  ? "border-blue-600 text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
                  : "border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:border-gray-300"
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="bg-white dark:bg-gray-800 border-x border-b border-gray-300 dark:border-gray-700 rounded-b-lg">
        <Suspense
          fallback={
            <div className="p-6 flex items-center justify-center min-h-[400px]">
              <div className="animate-pulse text-gray-400">Carregando...</div>
            </div>
          }
        >
          {activeTab === "generator" && <PasswordGenerator />}
          {activeTab === "analyzer" && <PasswordAnalyzer />}
          {activeTab === "wifi" && <WifiGenerator />}
          {activeTab === "pin" && <PinGenerator />}
          {activeTab === "passphrase" && <PassphraseGenerator />}
          {activeTab === "glossary" && <SecurityGlossary />}
        </Suspense>
      </div>
    </div>
  );
}
