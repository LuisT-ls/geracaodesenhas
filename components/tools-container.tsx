"use client";

import { useState } from "react";
import PasswordGenerator from "./password-generator";
import PasswordAnalyzer from "./password-analyzer";
import WifiGenerator from "./wifi-generator";
import PinGenerator from "./pin-generator";
import PassphraseGenerator from "./passphrase-generator";
import SecurityGlossary from "./security-glossary";

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
        {activeTab === "generator" && <PasswordGenerator />}
        {activeTab === "analyzer" && <PasswordAnalyzer />}
        {activeTab === "wifi" && <WifiGenerator />}
        {activeTab === "pin" && <PinGenerator />}
        {activeTab === "passphrase" && <PassphraseGenerator />}
        {activeTab === "glossary" && <SecurityGlossary />}
      </div>
    </div>
  );
}
