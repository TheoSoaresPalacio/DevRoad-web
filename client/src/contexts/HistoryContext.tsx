import React, { createContext, useContext, useState, useEffect } from "react";

export interface HistoryItem {
  id: string;
  title: string;
  type: "trail" | "stage" | "concept" | "project";
  trailId: string;
  timestamp: number;
  path: string;
}

interface HistoryContextType {
  history: HistoryItem[];
  addToHistory: (item: Omit<HistoryItem, "timestamp">) => void;
  clearHistory: () => void;
  getRecentItems: (limit?: number) => HistoryItem[];
}

const HistoryContext = createContext<HistoryContextType | undefined>(undefined);

export function HistoryProvider({ children }: { children: React.ReactNode }) {
  const [history, setHistory] = useState<HistoryItem[]>([]);

  // Carregar histórico do localStorage ao iniciar
  useEffect(() => {
    const savedHistory = localStorage.getItem("devroad_history");
    if (savedHistory) {
      try {
        setHistory(JSON.parse(savedHistory));
      } catch (error) {
        console.error("Erro ao carregar histórico:", error);
      }
    }
  }, []);

  // Salvar histórico no localStorage sempre que mudar
  useEffect(() => {
    localStorage.setItem("devroad_history", JSON.stringify(history));
  }, [history]);

  const addToHistory = (item: Omit<HistoryItem, "timestamp">) => {
    const newItem: HistoryItem = {
      ...item,
      timestamp: Date.now(),
    };

    // Remover duplicatas (manter apenas a mais recente)
    const filtered = history.filter((h) => h.id !== item.id);

    // Manter apenas os últimos 50 itens
    const updated = [newItem, ...filtered].slice(0, 50);

    setHistory(updated);
  };

  const clearHistory = () => {
    setHistory([]);
  };

  const getRecentItems = (limit: number = 10): HistoryItem[] => {
    return history.slice(0, limit);
  };

  return (
    <HistoryContext.Provider value={{ history, addToHistory, clearHistory, getRecentItems }}>
      {children}
    </HistoryContext.Provider>
  );
}

export function useHistory() {
  const context = useContext(HistoryContext);
  if (!context) {
    throw new Error("useHistory deve ser usado dentro de HistoryProvider");
  }
  return context;
}
