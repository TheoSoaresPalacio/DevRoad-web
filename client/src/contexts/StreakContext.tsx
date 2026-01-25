import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { useProgress } from "./ProgressContext";

export interface StreakData {
  currentStreak: number;
  longestStreak: number;
  lastActivityDate: string;
  totalDaysActive: number;
  streakBonusPoints: number;
  history: Array<{
    date: string;
    active: boolean;
    tasksCompleted: number;
  }>;
}

interface StreakContextType {
  streak: StreakData;
  isActiveToday: boolean;
  daysUntilLoss: number;
  getStreakBonus: () => number;
  recordActivity: () => void;
  getStreakPercentage: () => number;
  getStreakMilestones: () => Array<{ days: number; bonus: number; reached: boolean }>;
}

const StreakContext = createContext<StreakContextType | undefined>(undefined);

const STORAGE_KEY = "java_roadmap_streak";

const STREAK_MILESTONES = [
  { days: 7, bonus: 50 },
  { days: 14, bonus: 100 },
  { days: 21, bonus: 150 },
  { days: 30, bonus: 250 },
  { days: 60, bonus: 500 },
  { days: 100, bonus: 1000 },
];

export function StreakProvider({ children }: { children: React.ReactNode }) {
  const [streak, setStreak] = useState<StreakData>({
    currentStreak: 0,
    longestStreak: 0,
    lastActivityDate: "",
    totalDaysActive: 0,
    streakBonusPoints: 0,
    history: [],
  });

  const progress = useProgress();

  // Carregar streak do localStorage
  useEffect(() => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
      try {
        const data = JSON.parse(savedData);
        setStreak(data);
      } catch (error) {
        console.error("Erro ao carregar streak:", error);
      }
    }
  }, []);

  // Salvar streak no localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(streak));
  }, [streak]);

  // Verificar e atualizar streak diariamente
  useEffect(() => {
    checkAndUpdateStreak();
  }, [progress.taskProgress, progress.challengeProgress]);

  const getTodayDateString = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  const getYesterdayDateString = () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    return yesterday.toISOString().split("T")[0];
  };

  const checkAndUpdateStreak = useCallback(() => {
    const today = getTodayDateString();
    const yesterday = getYesterdayDateString();

    // Verificar se houve atividade hoje
    const tasksCompletedToday = progress.taskProgress.filter((t) => {
      if (!t.completedAt) return false;
      const completedDate = t.completedAt.split("T")[0];
      return completedDate === today;
    }).length;

    const challengesCompletedToday = progress.challengeProgress.filter((c) => {
      if (!c.completedAt) return false;
      const completedDate = c.completedAt.split("T")[0];
      return completedDate === today;
    }).length;

    const totalActivityToday = tasksCompletedToday + challengesCompletedToday;

    setStreak((prevStreak) => {
      let newStreak = { ...prevStreak };

      // Verificar se já foi registrada atividade hoje
      const todayHistory = newStreak.history.find((h) => h.date === today);

      if (totalActivityToday > 0) {
        // Houve atividade hoje
        if (!todayHistory) {
          // Primeira atividade do dia
          const lastActivityDate = newStreak.lastActivityDate;

          if (lastActivityDate === yesterday) {
            // Continuar streak (atividade ontem)
            newStreak.currentStreak += 1;
          } else if (lastActivityDate !== today) {
            // Quebrar streak e começar novo
            if (newStreak.currentStreak > newStreak.longestStreak) {
              newStreak.longestStreak = newStreak.currentStreak;
            }
            newStreak.currentStreak = 1;
          }

          newStreak.lastActivityDate = today;
          newStreak.totalDaysActive += 1;

          // Adicionar ao histórico
          newStreak.history.push({
            date: today,
            active: true,
            tasksCompleted: totalActivityToday,
          });

          // Calcular bônus de streak
          const bonus = calculateStreakBonus(newStreak.currentStreak);
          newStreak.streakBonusPoints += bonus;

          // Manter apenas os últimos 365 dias de histórico
          if (newStreak.history.length > 365) {
            newStreak.history = newStreak.history.slice(-365);
          }
        }
      } else {
        // Nenhuma atividade hoje
        // Verificar se o streak vai ser perdido
        if (newStreak.lastActivityDate !== today && newStreak.lastActivityDate !== yesterday) {
          // Streak já foi perdido
          if (newStreak.currentStreak > newStreak.longestStreak) {
            newStreak.longestStreak = newStreak.currentStreak;
          }
          newStreak.currentStreak = 0;
        }
      }

      return newStreak;
    });
  }, [progress.taskProgress, progress.challengeProgress]);

  const calculateStreakBonus = (currentStreak: number): number => {
    // Bônus progressivo: 10 pontos por dia, com multiplicador a cada 7 dias
    const baseBonus = 10;
    const weekBonus = Math.floor(currentStreak / 7) * 5;
    return baseBonus + weekBonus;
  };

  const recordActivity = () => {
    checkAndUpdateStreak();
  };

  const isActiveToday = (): boolean => {
    const today = getTodayDateString();
    return streak.lastActivityDate === today;
  };

  const getDaysUntilLoss = (): number => {
    if (streak.currentStreak === 0) return 0;

    const lastDate = new Date(streak.lastActivityDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const diffTime = today.getTime() - lastDate.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    // Se passou 1 dia, o streak será perdido amanhã (1 dia até a perda)
    // Se passou 0 dias (hoje), o streak será perdido em 1 dia
    return Math.max(0, 2 - diffDays);
  };

  const getStreakPercentage = (): number => {
    if (streak.longestStreak === 0) return 0;
    return Math.round((streak.currentStreak / streak.longestStreak) * 100);
  };

  const getStreakMilestones = () => {
    return STREAK_MILESTONES.map((milestone) => ({
      ...milestone,
      reached: streak.currentStreak >= milestone.days,
    }));
  };

  return (
    <StreakContext.Provider
      value={{
        streak,
        isActiveToday: isActiveToday(),
        daysUntilLoss: getDaysUntilLoss(),
        getStreakBonus: () => calculateStreakBonus(streak.currentStreak),
        recordActivity,
        getStreakPercentage: () => getStreakPercentage(),
        getStreakMilestones,
      }}
    >
      {children}
    </StreakContext.Provider>
  );
}

export function useStreak() {
  const context = useContext(StreakContext);
  if (!context) {
    throw new Error("useStreak deve ser usado dentro de StreakProvider");
  }
  return context;
}
