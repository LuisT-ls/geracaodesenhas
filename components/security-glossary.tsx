"use client";

import { useState, useMemo } from "react";
import { glossaryTerms, categoryLabels, type GlossaryTerm, type GlossaryCategory } from "@/data/security-glossary";

export default function SecurityGlossary() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<GlossaryCategory | "todos">("todos");
  const [selectedTerm, setSelectedTerm] = useState<GlossaryTerm | null>(null);

  const filteredTerms = useMemo(() => {
    let filtered = glossaryTerms;

    // Filtro por categoria
    if (selectedCategory !== "todos") {
      filtered = filtered.filter((term) => term.category === selectedCategory);
    }

    // Filtro por busca
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (term) =>
          term.term.toLowerCase().includes(query) ||
          term.definition.toLowerCase().includes(query) ||
          term.examples?.some((ex) => ex.toLowerCase().includes(query)) ||
          term.relatedTerms?.some((rt) => rt.toLowerCase().includes(query))
      );
    }

    return filtered.sort((a, b) => a.term.localeCompare(b.term));
  }, [searchQuery, selectedCategory]);

  const handleTermClick = (term: GlossaryTerm) => {
    setSelectedTerm(term);
  };

  const handleRelatedTermClick = (relatedTerm: string) => {
    const term = glossaryTerms.find((t) => t.term === relatedTerm);
    if (term) {
      setSelectedTerm(term);
      setSearchQuery(relatedTerm);
    } else {
      // Se o termo não existe, faz uma busca por ele
      setSearchQuery(relatedTerm);
      setSelectedCategory("todos");
      // Tenta encontrar termos similares
      const similarTerms = glossaryTerms.filter(
        (t) =>
          t.term.toLowerCase().includes(relatedTerm.toLowerCase()) ||
          t.definition.toLowerCase().includes(relatedTerm.toLowerCase())
      );
      if (similarTerms.length > 0) {
        setSelectedTerm(similarTerms[0]);
      } else {
        setSelectedTerm(null);
      }
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
          Glossário de Segurança
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Pesquise e aprenda sobre termos de segurança, ameaças e proteções
        </p>
      </div>

      {/* Busca e Filtros */}
      <div className="space-y-4">
        {/* Campo de Busca */}
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Pesquisar termo, malware, conceito..."
            className="w-full px-4 py-3 pl-11 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            aria-label="Buscar no glossário"
          />
          <svg
            className="absolute left-3 top-3.5 w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        {/* Filtro por Categoria */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory("todos")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedCategory === "todos"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
            }`}
          >
            Todos
          </button>
          {Object.entries(categoryLabels).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setSelectedCategory(key as GlossaryCategory)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedCategory === key
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Resultados */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Lista de Termos */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3">
              Termos ({filteredTerms.length})
            </h3>
            <div className="space-y-1 max-h-[600px] overflow-y-auto">
              {filteredTerms.length === 0 ? (
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center py-8">
                  Nenhum termo encontrado
                </p>
              ) : (
                filteredTerms.map((term) => (
                  <button
                    key={term.term}
                    onClick={() => handleTermClick(term)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      selectedTerm?.term === term.term
                        ? "bg-blue-100 dark:bg-blue-900/30 text-blue-900 dark:text-blue-100 font-medium"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    }`}
                  >
                    {term.term}
                  </button>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Detalhes do Termo Selecionado */}
        <div className="lg:col-span-2">
          {selectedTerm ? (
            <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg p-6 space-y-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                  {selectedTerm.term}
                </h3>
                <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full">
                  {categoryLabels[selectedTerm.category]}
                </span>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Definição
                </h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {selectedTerm.definition}
                </p>
              </div>

              {selectedTerm.examples && selectedTerm.examples.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    Exemplos
                  </h4>
                  <ul className="space-y-1">
                    {selectedTerm.examples.map((example, index) => (
                      <li
                        key={index}
                        className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2"
                      >
                        <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedTerm.relatedTerms && selectedTerm.relatedTerms.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    Termos Relacionados
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedTerm.relatedTerms.map((relatedTerm) => {
                      const termExists = glossaryTerms.some((t) => t.term === relatedTerm);
                      return (
                        <button
                          key={relatedTerm}
                          onClick={() => handleRelatedTermClick(relatedTerm)}
                          className={`px-3 py-1 text-sm rounded-lg transition-colors ${
                            termExists
                              ? "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                              : "bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-600"
                          }`}
                          title={termExists ? `Ver: ${relatedTerm}` : `Buscar: ${relatedTerm}`}
                        >
                          {relatedTerm}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg p-12 text-center">
              <svg
                className="w-16 h-16 text-gray-400 dark:text-gray-600 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              <p className="text-gray-500 dark:text-gray-400">
                Selecione um termo da lista para ver os detalhes
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
