import React, { createContext, useContext } from "react";
import { useProgress } from "./ProgressContext";
import { allTrails } from "@/lib/roadmapData";

export interface Recommendation {
  trailId: string;
  trailName: string;
  reason: string;
  priority: "high" | "medium" | "low";
  nextStage?: number;
}

interface RecommendationContextType {
  getRecommendations: () => Recommendation[];
  getNextStep: (trailId: string) => Recommendation | null;
}

const RecommendationContext = createContext<RecommendationContextType | undefined>(undefined);

export function RecommendationProvider({ children }: { children: React.ReactNode }) {
  const { projectProgress } = useProgress();

  const getRecommendations = (): Recommendation[] => {
    const recommendations: Recommendation[] = [];

    allTrails.forEach((trail) => {
      const trailProjects = projectProgress.filter((p) => p.projectId.startsWith(trail.id));
      const trailProjectsCompleted = trailProjects.filter((p) => p.tasksCompleted > 0).length;
      const trailTotalProjects = trail.stages.reduce((acc, stage) => acc + stage.projects.length, 0);
      const completionPercentage = trailTotalProjects > 0 ? (trailProjectsCompleted / trailTotalProjects) * 100 : 0;

      if (trailProjectsCompleted === 0) {
        recommendations.push({
          trailId: trail.id,
          trailName: trail.name,
          reason: "Comece uma nova trilha de aprendizado",
          priority: "medium",
          nextStage: 0,
        });
      } else if (completionPercentage < 100) {
        const nextStageId = Math.floor(completionPercentage / 10);
        recommendations.push({
          trailId: trail.id,
          trailName: trail.name,
          reason: `Você completou ${Math.round(completionPercentage)}% desta trilha. Continue progredindo!`,
          priority: "high",
          nextStage: nextStageId,
        });
      } else {
        recommendations.push({
          trailId: trail.id,
          trailName: trail.name,
          reason: "Trilha completada! Parabéns pelos seus esforços.",
          priority: "low",
        });
      }
    });

    return recommendations.sort((a, b) => {
      const priorityOrder = { high: 0, medium: 1, low: 2 };
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    });
  };

  const getNextStep = (trailId: string): Recommendation | null => {
    const recommendations = getRecommendations();
    return recommendations.find((r) => r.trailId === trailId) || null;
  };

  return (
    <RecommendationContext.Provider value={{ getRecommendations, getNextStep }}>
      {children}
    </RecommendationContext.Provider>
  );
}

export function useRecommendation() {
  const context = useContext(RecommendationContext);
  if (!context) {
    throw new Error("useRecommendation deve ser usado dentro de RecommendationProvider");
  }
  return context;
}
