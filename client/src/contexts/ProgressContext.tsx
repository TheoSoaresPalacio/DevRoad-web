import React, { createContext, useContext, useState, useEffect } from "react";

export interface TaskProgress {
  projectId: string;
  taskId: number;
  completed: boolean;
  completedAt?: string;
}

export interface ChallengeProgress {
  projectId: string;
  challengeId: number;
  completed: boolean;
  completedAt?: string;
}

export interface ProjectProgress {
  projectId: string;
  started: boolean;
  startedAt?: string;
  tasksCompleted: number;
  challengesCompleted: number;
}

interface ProgressContextType {
  taskProgress: TaskProgress[];
  challengeProgress: ChallengeProgress[];
  projectProgress: ProjectProgress[];
  toggleTask: (projectId: string, taskId: number) => void;
  toggleChallenge: (projectId: string, challengeId: number) => void;
  startProject: (projectId: string) => void;
  getProjectProgress: (projectId: string) => ProjectProgress | undefined;
  getTasksCompleted: (projectId: string) => number;
  getChallengesCompleted: (projectId: string) => number;
  isTaskCompleted: (projectId: string, taskId: number) => boolean;
  isChallengeCompleted: (projectId: string, challengeId: number) => boolean;
  getTotalProgress: () => number;
  resetProjectProgress: (projectId: string) => void;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

const STORAGE_KEY = "java_roadmap_progress";

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [taskProgress, setTaskProgress] = useState<TaskProgress[]>([]);
  const [challengeProgress, setChallengeProgress] = useState<ChallengeProgress[]>([]);
  const [projectProgress, setProjectProgress] = useState<ProjectProgress[]>([]);

  // Carregar dados do localStorage ao montar
  useEffect(() => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
      try {
        const { tasks, challenges, projects } = JSON.parse(savedData);
        setTaskProgress(tasks || []);
        setChallengeProgress(challenges || []);
        setProjectProgress(projects || []);
      } catch (error) {
        console.error("Erro ao carregar progresso:", error);
      }
    }
  }, []);

  // Salvar dados no localStorage sempre que mudam
  useEffect(() => {
    const data = {
      tasks: taskProgress,
      challenges: challengeProgress,
      projects: projectProgress,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }, [taskProgress, challengeProgress, projectProgress]);

  const toggleTask = (projectId: string, taskId: number) => {
    setTaskProgress((prev) => {
      const existing = prev.find((t) => t.projectId === projectId && t.taskId === taskId);
      if (existing) {
        return prev.filter((t) => !(t.projectId === projectId && t.taskId === taskId));
      } else {
        return [
          ...prev,
          {
            projectId,
            taskId,
            completed: true,
            completedAt: new Date().toISOString(),
          },
        ];
      }
    });

    // Atualizar progresso do projeto
    updateProjectProgress(projectId);
  };

  const toggleChallenge = (projectId: string, challengeId: number) => {
    setChallengeProgress((prev) => {
      const existing = prev.find((c) => c.projectId === projectId && c.challengeId === challengeId);
      if (existing) {
        return prev.filter((c) => !(c.projectId === projectId && c.challengeId === challengeId));
      } else {
        return [
          ...prev,
          {
            projectId,
            challengeId,
            completed: true,
            completedAt: new Date().toISOString(),
          },
        ];
      }
    });

    // Atualizar progresso do projeto
    updateProjectProgress(projectId);
  };

  const startProject = (projectId: string) => {
    setProjectProgress((prev) => {
      const existing = prev.find((p) => p.projectId === projectId);
      if (existing) {
        return prev;
      } else {
        return [
          ...prev,
          {
            projectId,
            started: true,
            startedAt: new Date().toISOString(),
            tasksCompleted: 0,
            challengesCompleted: 0,
          },
        ];
      }
    });
  };

  const updateProjectProgress = (projectId: string) => {
    const tasksCompleted = taskProgress.filter((t) => t.projectId === projectId && t.completed).length;
    const challengesCompleted = challengeProgress.filter(
      (c) => c.projectId === projectId && c.completed
    ).length;

    setProjectProgress((prev) => {
      const existing = prev.find((p) => p.projectId === projectId);
      if (existing) {
        return prev.map((p) =>
          p.projectId === projectId
            ? { ...p, tasksCompleted, challengesCompleted }
            : p
        );
      } else {
        return [
          ...prev,
          {
            projectId,
            started: true,
            startedAt: new Date().toISOString(),
            tasksCompleted,
            challengesCompleted,
          },
        ];
      }
    });
  };

  const getProjectProgress = (projectId: string) => {
    return projectProgress.find((p) => p.projectId === projectId);
  };

  const getTasksCompleted = (projectId: string) => {
    return taskProgress.filter((t) => t.projectId === projectId && t.completed).length;
  };

  const getChallengesCompleted = (projectId: string) => {
    return challengeProgress.filter((c) => c.projectId === projectId && c.completed).length;
  };

  const isTaskCompleted = (projectId: string, taskId: number) => {
    return taskProgress.some((t) => t.projectId === projectId && t.taskId === taskId && t.completed);
  };

  const isChallengeCompleted = (projectId: string, challengeId: number) => {
    return challengeProgress.some(
      (c) => c.projectId === projectId && c.challengeId === challengeId && c.completed
    );
  };

  const getTotalProgress = () => {
    const totalTasks = 41; // Total de tarefas em todos os projetos
    const totalChallenges = 20; // Total de desafios em todos os projetos
    const totalItems = totalTasks + totalChallenges;
    const completedItems = taskProgress.filter((t) => t.completed).length + 
                          challengeProgress.filter((c) => c.completed).length;
    return totalItems > 0 ? (completedItems / totalItems) * 100 : 0;
  };

  const resetProjectProgress = (projectId: string) => {
    setTaskProgress((prev) => prev.filter((t) => t.projectId !== projectId));
    setChallengeProgress((prev) => prev.filter((c) => c.projectId !== projectId));
    setProjectProgress((prev) => prev.filter((p) => p.projectId !== projectId));
  };

  return (
    <ProgressContext.Provider
      value={{
        taskProgress,
        challengeProgress,
        projectProgress,
        toggleTask,
        toggleChallenge,
        startProject,
        getProjectProgress,
        getTasksCompleted,
        getChallengesCompleted,
        isTaskCompleted,
        isChallengeCompleted,
        getTotalProgress,
        resetProjectProgress,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error("useProgress deve ser usado dentro de ProgressProvider");
  }
  return context;
}
