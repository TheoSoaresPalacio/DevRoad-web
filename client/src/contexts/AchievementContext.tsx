import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { useProgress } from "./ProgressContext";

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: "project" | "stage" | "challenge" | "milestone" | "special";
  rarity: "common" | "uncommon" | "rare" | "epic" | "legendary";
  unlockedAt?: string;
  progress?: number;
  maxProgress?: number;
}

interface AchievementContextType {
  achievements: Achievement[];
  unlockedAchievements: Achievement[];
  newAchievements: Achievement[];
  unlockAchievement: (achievementId: string) => void;
  clearNewAchievements: () => void;
  getAchievementProgress: (achievementId: string) => { current: number; max: number } | null;
  getTotalPoints: () => number;
  getAchievementsByCategory: (category: Achievement["category"]) => Achievement[];
}

const AchievementContext = createContext<AchievementContextType | undefined>(undefined);

const STORAGE_KEY = "java_roadmap_achievements";

// Definição de todas as conquistas disponíveis
const ALL_ACHIEVEMENTS: Achievement[] = [
  // Conquistas de Projetos
  {
    id: "project_0_1_complete",
    name: "Primeiro Passo",
    description: "Complete o projeto Calculadora Simples",
    icon: "🎯",
    category: "project",
    rarity: "common",
  },
  {
    id: "project_1_1_complete",
    name: "Adivinhador Mestre",
    description: "Complete o projeto Jogo de Adivinhação",
    icon: "🎲",
    category: "project",
    rarity: "common",
  },
  {
    id: "project_1_2_complete",
    name: "Matemático",
    description: "Complete o projeto Tabuada Interativa",
    icon: "🔢",
    category: "project",
    rarity: "common",
  },
  {
    id: "project_2_1_complete",
    name: "Estatístico",
    description: "Complete o projeto Gerenciador de Notas",
    icon: "📊",
    category: "project",
    rarity: "common",
  },
  {
    id: "project_2_2_complete",
    name: "Manipulador de Texto",
    description: "Complete o projeto Manipulador de Strings",
    icon: "📝",
    category: "project",
    rarity: "common",
  },
  {
    id: "project_3_1_complete",
    name: "Construtor de Funções",
    description: "Complete o projeto Biblioteca de Funções Matemáticas",
    icon: "⚙️",
    category: "project",
    rarity: "uncommon",
  },
  {
    id: "project_3_2_complete",
    name: "Validador Profissional",
    description: "Complete o projeto Sistema de Validação",
    icon: "✅",
    category: "project",
    rarity: "uncommon",
  },
  {
    id: "project_4_1_complete",
    name: "Arquiteto de Classes",
    description: "Complete o projeto Sistema de Cadastro Simples",
    icon: "🏗️",
    category: "project",
    rarity: "uncommon",
  },
  {
    id: "project_5_1_complete",
    name: "Mestre da Herança",
    description: "Complete o projeto Sistema de Gerenciamento de Funcionários",
    icon: "👥",
    category: "project",
    rarity: "rare",
  },
  {
    id: "project_6_1_complete",
    name: "Guru da Abstração",
    description: "Complete o projeto Simulador de Formas Geométricas",
    icon: "🎨",
    category: "project",
    rarity: "rare",
  },

  // Conquistas de Estágios
  {
    id: "stage_0_complete",
    name: "Fundamentos Dominados",
    description: "Complete todos os projetos do Estágio 0",
    icon: "🌟",
    category: "stage",
    rarity: "uncommon",
  },
  {
    id: "stage_1_complete",
    name: "Controlador de Fluxo",
    description: "Complete todos os projetos do Estágio 1",
    icon: "🔄",
    category: "stage",
    rarity: "uncommon",
  },
  {
    id: "stage_2_complete",
    name: "Coletor de Dados",
    description: "Complete todos os projetos do Estágio 2",
    icon: "📦",
    category: "stage",
    rarity: "uncommon",
  },
  {
    id: "stage_3_complete",
    name: "Engenheiro de Métodos",
    description: "Complete todos os projetos do Estágio 3",
    icon: "🔧",
    category: "stage",
    rarity: "rare",
  },
  {
    id: "stage_4_complete",
    name: "Especialista em POO",
    description: "Complete todos os projetos do Estágio 4",
    icon: "🎓",
    category: "stage",
    rarity: "rare",
  },
  {
    id: "stage_5_complete",
    name: "Mestre do Polimorfismo",
    description: "Complete todos os projetos do Estágio 5",
    icon: "🦸",
    category: "stage",
    rarity: "epic",
  },
  {
    id: "stage_6_complete",
    name: "Arquiteto de Software",
    description: "Complete todos os projetos do Estágio 6",
    icon: "🏛️",
    category: "stage",
    rarity: "epic",
  },

  // Conquistas de Desafios
  {
    id: "challenges_5_complete",
    name: "Desafiador Iniciante",
    description: "Complete 5 desafios adicionais",
    icon: "⚡",
    category: "challenge",
    rarity: "common",
    progress: 0,
    maxProgress: 5,
  },
  {
    id: "challenges_10_complete",
    name: "Caçador de Desafios",
    description: "Complete 10 desafios adicionais",
    icon: "🎯",
    category: "challenge",
    rarity: "uncommon",
    progress: 0,
    maxProgress: 10,
  },
  {
    id: "challenges_20_complete",
    name: "Conquistador de Desafios",
    description: "Complete 20 desafios adicionais",
    icon: "🏆",
    category: "challenge",
    rarity: "rare",
    progress: 0,
    maxProgress: 20,
  },

  // Conquistas de Marcos
  {
    id: "milestone_25_percent",
    name: "Um Quarto do Caminho",
    description: "Complete 25% do roadmap",
    icon: "🚀",
    category: "milestone",
    rarity: "uncommon",
  },
  {
    id: "milestone_50_percent",
    name: "Meio Caminho",
    description: "Complete 50% do roadmap",
    icon: "🎊",
    category: "milestone",
    rarity: "rare",
  },
  {
    id: "milestone_75_percent",
    name: "Quase Lá!",
    description: "Complete 75% do roadmap",
    icon: "💪",
    category: "milestone",
    rarity: "epic",
  },
  {
    id: "milestone_100_percent",
    name: "Jornada Completa",
    description: "Complete 100% do roadmap - Você é um Mestre Java!",
    icon: "👑",
    category: "milestone",
    rarity: "legendary",
  },

  // Conquistas Especiais
  {
    id: "special_all_tasks",
    name: "Perfeccionista",
    description: "Complete todas as tarefas de um projeto",
    icon: "💎",
    category: "special",
    rarity: "uncommon",
  },
  {
    id: "special_all_challenges",
    name: "Desafiador Supremo",
    description: "Complete todos os desafios de um projeto",
    icon: "⭐",
    category: "special",
    rarity: "epic",
  },
  {
    id: "special_speed_learner",
    name: "Aprendiz Rápido",
    description: "Complete um projeto em menos de 1 hora",
    icon: "⚡",
    category: "special",
    rarity: "rare",
  },
];

export function AchievementProvider({ children }: { children: React.ReactNode }) {
  const [unlockedAchievements, setUnlockedAchievements] = useState<Achievement[]>([]);
  const [newAchievements, setNewAchievements] = useState<Achievement[]>([]);
  const progress = useProgress();

  // Carregar conquistas do localStorage
  useEffect(() => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
      try {
        const unlocked = JSON.parse(savedData);
        setUnlockedAchievements(unlocked);
      } catch (error) {
        console.error("Erro ao carregar conquistas:", error);
      }
    }
  }, []);

  // Salvar conquistas no localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(unlockedAchievements));
  }, [unlockedAchievements]);

  // Verificar conquistas automaticamente
  useEffect(() => {
    checkAndUnlockAchievements();
  }, [progress.taskProgress, progress.challengeProgress, progress.projectProgress]);

  const checkAndUnlockAchievements = useCallback(() => {
    const newUnlocked: Achievement[] = [];

    // Verificar conquistas de projetos
    const projectsToCheck = [
      { id: "0.1", achievementId: "project_0_1_complete" },
      { id: "1.1", achievementId: "project_1_1_complete" },
      { id: "1.2", achievementId: "project_1_2_complete" },
      { id: "2.1", achievementId: "project_2_1_complete" },
      { id: "2.2", achievementId: "project_2_2_complete" },
      { id: "3.1", achievementId: "project_3_1_complete" },
      { id: "3.2", achievementId: "project_3_2_complete" },
      { id: "4.1", achievementId: "project_4_1_complete" },
      { id: "5.1", achievementId: "project_5_1_complete" },
      { id: "6.1", achievementId: "project_6_1_complete" },
    ];

    projectsToCheck.forEach(({ id, achievementId }) => {
      const projectTasks = progress.taskProgress.filter((t) => t.projectId === id && t.completed).length;
      const projectChallenges = progress.challengeProgress.filter((c) => c.projectId === id && c.completed).length;

      // Considerar projeto completo se todas as tarefas estão feitas
      if (projectTasks > 0 && projectTasks >= 4) {
        // 4 tarefas por projeto
        tryUnlockAchievement(achievementId, newUnlocked);
      }
    });

    // Verificar conquistas de estágios
    const stagesToCheck = [
      { stage: 0, achievementId: "stage_0_complete", projectCount: 1 },
      { stage: 1, achievementId: "stage_1_complete", projectCount: 2 },
      { stage: 2, achievementId: "stage_2_complete", projectCount: 2 },
      { stage: 3, achievementId: "stage_3_complete", projectCount: 2 },
      { stage: 4, achievementId: "stage_4_complete", projectCount: 1 },
      { stage: 5, achievementId: "stage_5_complete", projectCount: 1 },
      { stage: 6, achievementId: "stage_6_complete", projectCount: 1 },
    ];

    stagesToCheck.forEach(({ stage, achievementId, projectCount }) => {
      const stageProjects = projectsToCheck.slice(
        stage === 0 ? 0 : stage === 1 ? 1 : stage === 2 ? 3 : stage === 3 ? 5 : stage === 4 ? 7 : stage === 5 ? 8 : 9,
        stage === 0 ? 1 : stage === 1 ? 3 : stage === 2 ? 5 : stage === 3 ? 7 : stage === 4 ? 8 : stage === 5 ? 9 : 10
      );

      const completedInStage = stageProjects.filter(({ id }) => {
        const tasks = progress.taskProgress.filter((t) => t.projectId === id && t.completed).length;
        return tasks >= 4;
      }).length;

      if (completedInStage === projectCount) {
        tryUnlockAchievement(achievementId, newUnlocked);
      }
    });

    // Verificar marcos de progresso
    const totalProgress = progress.getTotalProgress();
    if (totalProgress >= 25) tryUnlockAchievement("milestone_25_percent", newUnlocked);
    if (totalProgress >= 50) tryUnlockAchievement("milestone_50_percent", newUnlocked);
    if (totalProgress >= 75) tryUnlockAchievement("milestone_75_percent", newUnlocked);
    if (totalProgress >= 100) tryUnlockAchievement("milestone_100_percent", newUnlocked);

    // Adicionar novas conquistas desbloqueadas
    if (newUnlocked.length > 0) {
      setNewAchievements(newUnlocked);
      setTimeout(() => setNewAchievements([]), 5000); // Remover notificação após 5 segundos
    }
  }, [progress]);

  const tryUnlockAchievement = (achievementId: string, newUnlocked: Achievement[]) => {
    const alreadyUnlocked = unlockedAchievements.some((a) => a.id === achievementId);
    if (!alreadyUnlocked) {
      const achievement = ALL_ACHIEVEMENTS.find((a) => a.id === achievementId);
      if (achievement) {
        const unlockedAchievement = {
          ...achievement,
          unlockedAt: new Date().toISOString(),
        };
        setUnlockedAchievements((prev) => [...prev, unlockedAchievement]);
        newUnlocked.push(unlockedAchievement);
      }
    }
  };

  const unlockAchievement = (achievementId: string) => {
    const alreadyUnlocked = unlockedAchievements.some((a) => a.id === achievementId);
    if (!alreadyUnlocked) {
      const achievement = ALL_ACHIEVEMENTS.find((a) => a.id === achievementId);
      if (achievement) {
        const unlockedAchievement = {
          ...achievement,
          unlockedAt: new Date().toISOString(),
        };
        setUnlockedAchievements((prev) => [...prev, unlockedAchievement]);
        setNewAchievements([unlockedAchievement]);
        setTimeout(() => setNewAchievements([]), 5000);
      }
    }
  };

  const clearNewAchievements = () => {
    setNewAchievements([]);
  };

  const getAchievementProgress = (achievementId: string) => {
    const achievement = ALL_ACHIEVEMENTS.find((a) => a.id === achievementId);
    if (!achievement || !achievement.maxProgress) return null;

    const challengesCompleted = progress.challengeProgress.filter((c) => c.completed).length;

    if (achievementId === "challenges_5_complete") {
      return { current: Math.min(challengesCompleted, 5), max: 5 };
    } else if (achievementId === "challenges_10_complete") {
      return { current: Math.min(challengesCompleted, 10), max: 10 };
    } else if (achievementId === "challenges_20_complete") {
      return { current: Math.min(challengesCompleted, 20), max: 20 };
    }

    return null;
  };

  const getTotalPoints = () => {
    const rarityPoints = {
      common: 10,
      uncommon: 25,
      rare: 50,
      epic: 100,
      legendary: 250,
    };

    return unlockedAchievements.reduce((total, achievement) => {
      return total + (rarityPoints[achievement.rarity] || 0);
    }, 0);
  };

  const getAchievementsByCategory = (category: Achievement["category"]) => {
    return ALL_ACHIEVEMENTS.filter((a) => a.category === category);
  };

  return (
    <AchievementContext.Provider
      value={{
        achievements: ALL_ACHIEVEMENTS,
        unlockedAchievements,
        newAchievements,
        unlockAchievement,
        clearNewAchievements,
        getAchievementProgress,
        getTotalPoints,
        getAchievementsByCategory,
      }}
    >
      {children}
    </AchievementContext.Provider>
  );
}

export function useAchievements() {
  const context = useContext(AchievementContext);
  if (!context) {
    throw new Error("useAchievements deve ser usado dentro de AchievementProvider");
  }
  return context;
}
