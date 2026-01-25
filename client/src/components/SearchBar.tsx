import { Search, X, Clock, Zap } from "lucide-react";
import { useState, useMemo, useEffect } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { useHistory } from "@/contexts/HistoryContext";
import { allTrails } from "@/lib/roadmapData";
import { Link } from "wouter";
import { Card } from "@/components/ui/card";

interface SearchResult {
  type: "trail" | "stage" | "concept" | "project";
  id: string;
  title: string;
  description: string;
  trailId: string;
  trailName: string;
  path: string;
  isPopular?: boolean;
}

// Termos populares por categoria
const POPULAR_TERMS = {
  trail: ["Road Java", "Road de Macho", "Front-Enzo", "FullDev"],
  stage: ["Fundamentos", "Intermediário", "Avançado"],
  concept: ["POO", "Arrays", "Métodos", "Banco de Dados", "React"],
};

export default function SearchBar() {
  const { theme } = useTheme();
  const { getRecentItems } = useHistory();
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  // Gerar sugestões de autocompletar
  useEffect(() => {
    if (!query.trim()) {
      setSuggestions([]);
      return;
    }

    const searchQuery = query.toLowerCase();
    const allSuggestions = new Set<string>();

    // Adicionar termos populares que correspondem
    Object.values(POPULAR_TERMS).forEach((terms) => {
      terms.forEach((term) => {
        if (term.toLowerCase().includes(searchQuery)) {
          allSuggestions.add(term);
        }
      });
    });

    // Adicionar itens do histórico que correspondem
    getRecentItems().forEach((item) => {
      if (item.title.toLowerCase().includes(searchQuery)) {
        allSuggestions.add(item.title);
      }
    });

    // Adicionar trilhas, estágios e conceitos que correspondem
    allTrails.forEach((trail) => {
      if (trail.name.toLowerCase().includes(searchQuery)) {
        allSuggestions.add(trail.name);
      }

      trail.stages.forEach((stage) => {
        if (stage.title.toLowerCase().includes(searchQuery)) {
          allSuggestions.add(stage.title);
        }

        stage.concepts.forEach((concept) => {
          if (concept.toLowerCase().includes(searchQuery)) {
            allSuggestions.add(concept);
          }
        });
      });
    });

    setSuggestions(Array.from(allSuggestions).slice(0, 8));
  }, [query, getRecentItems]);

  const results = useMemo(() => {
    if (!query.trim()) return [];

    const searchQuery = query.toLowerCase();
    const allResults: SearchResult[] = [];

    // Buscar em trilhas
    allTrails.forEach((trail) => {
      if (trail.name.toLowerCase().includes(searchQuery)) {
        allResults.push({
          type: "trail",
          id: trail.id,
          title: trail.name,
          description: trail.description,
          trailId: trail.id,
          trailName: trail.name,
          path: "/",
          isPopular: POPULAR_TERMS.trail.includes(trail.name),
        });
      }

      // Buscar em estágios
      trail.stages.forEach((stage) => {
        if (stage.title.toLowerCase().includes(searchQuery)) {
          allResults.push({
            type: "stage",
            id: `${trail.id}-${stage.id}`,
            title: `${stage.title} (${trail.name})`,
            description: stage.description,
            trailId: trail.id,
            trailName: trail.name,
            path: `/project/${stage.id}`,
          });
        }

        // Buscar em conceitos
        stage.concepts.forEach((concept) => {
          if (concept.toLowerCase().includes(searchQuery)) {
            allResults.push({
              type: "concept",
              id: `${trail.id}-${stage.id}-${concept}`,
              title: concept,
              description: `Conceito do estágio ${stage.id}: ${stage.title}`,
              trailId: trail.id,
              trailName: trail.name,
              path: `/concept/${concept.replace(/\s+/g, "-").toLowerCase()}`,
              isPopular: POPULAR_TERMS.concept.includes(concept),
            });
          }
        });
      });
    });

    return allResults.slice(0, 10);
  }, [query]);

  const getTypeColor = (type: string) => {
    switch (type) {
      case "trail":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "stage":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
      case "concept":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "project":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "trail":
        return "Trilha";
      case "stage":
        return "Estágio";
      case "concept":
        return "Conceito";
      case "project":
        return "Projeto";
      default:
        return "Resultado";
    }
  };

  return (
    <div className="relative w-full">
      <div
        className={`relative flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors duration-300 ${
          theme === "dark"
            ? "bg-gray-800 border-gray-700 focus-within:border-blue-500"
            : "bg-white border-gray-300 focus-within:border-blue-500"
        }`}
      >
        <Search className="w-4 h-4 text-gray-500" />
        <input
          type="text"
          placeholder="Buscar trilha, estágio, conceito..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          className={`flex-1 outline-none bg-transparent transition-colors duration-300 text-sm ${
            theme === "dark" ? "text-white placeholder-gray-500" : "text-gray-900 placeholder-gray-400"
          }`}
        />
        {query && (
          <button
            onClick={() => {
              setQuery("");
              setIsOpen(false);
            }}
            className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Dropdown de Resultados */}
      {isOpen && (query.trim() || suggestions.length > 0) && (
        <Card
          className={`absolute top-full left-0 right-0 mt-2 max-h-96 overflow-y-auto z-50 transition-colors duration-300 ${
            theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
          } border`}
        >
          {/* Sugestões de Autocompletar */}
          {!query.trim() && suggestions.length > 0 && (
            <div className={`border-b transition-colors duration-300 ${theme === "dark" ? "border-gray-700" : "border-gray-200"}`}>
              <div className="p-3">
                <p className={`text-xs font-semibold mb-2 transition-colors duration-300 ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                  <Zap className="w-3 h-3 inline mr-1" />
                  SUGESTÕES POPULARES
                </p>
                <div className="flex flex-wrap gap-2">
                  {suggestions.map((suggestion) => (
                    <button
                      key={suggestion}
                      onClick={() => {
                        setQuery(suggestion);
                        setIsOpen(true);
                      }}
                      className={`px-3 py-1 rounded-full text-xs transition-colors duration-200 ${
                        theme === "dark"
                          ? "bg-gray-700 text-gray-200 hover:bg-gray-600"
                          : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                      }`}
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Resultados de Busca */}
          {results.length > 0 ? (
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {results.map((result) => (
                <Link key={result.id} href={result.path}>
                  <div
                    onClick={() => {
                      setQuery("");
                      setIsOpen(false);
                    }}
                    className={`p-3 cursor-pointer transition-colors duration-200 hover:bg-gray-50 dark:hover:bg-gray-700`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <p
                          className={`font-semibold text-sm transition-colors duration-300 ${
                            theme === "dark" ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {result.title}
                        </p>
                        <p
                          className={`text-xs mt-1 transition-colors duration-300 ${
                            theme === "dark" ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          {result.description}
                        </p>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded whitespace-nowrap ${getTypeColor(result.type)}`}>
                        {getTypeLabel(result.type)}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : query.trim() ? (
            <div
              className={`p-4 text-center text-sm transition-colors duration-300 ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Nenhum resultado encontrado para "{query}"
            </div>
          ) : null}
        </Card>
      )}

      {/* Overlay para fechar */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}
