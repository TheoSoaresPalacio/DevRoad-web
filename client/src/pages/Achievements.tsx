import { useAchievements } from "@/contexts/AchievementContext";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ChevronLeft, Lock, Trophy } from "lucide-react";
import { useState } from "react";

const rarityColors = {
  common: "bg-gray-100 border-gray-300",
  uncommon: "bg-green-100 border-green-300",
  rare: "bg-blue-100 border-blue-300",
  epic: "bg-purple-100 border-purple-300",
  legendary: "bg-yellow-100 border-yellow-300",
};

const rarityTextColors = {
  common: "text-gray-700",
  uncommon: "text-green-700",
  rare: "text-blue-700",
  epic: "text-purple-700",
  legendary: "text-yellow-700",
};

const rarityGradient = {
  common: "from-gray-400 to-gray-600",
  uncommon: "from-green-400 to-green-600",
  rare: "from-blue-400 to-blue-600",
  epic: "from-purple-400 to-purple-600",
  legendary: "from-yellow-400 to-yellow-600",
};

const categoryLabels = {
  project: "Projetos",
  stage: "Estágios",
  challenge: "Desafios",
  milestone: "Marcos",
  special: "Especiais",
};

export default function Achievements() {
  const { achievements, unlockedAchievements, getTotalPoints, getAchievementsByCategory } = useAchievements();
  const [selectedCategory, setSelectedCategory] = useState<"all" | "project" | "stage" | "challenge" | "milestone" | "special">("all");

  const filteredAchievements =
    selectedCategory === "all"
      ? achievements
      : getAchievementsByCategory(selectedCategory);

  const unlockedIds = new Set(unlockedAchievements.map((a) => a.id));
  const unlockedCount = unlockedAchievements.length;
  const totalCount = achievements.length;
  const completionPercentage = Math.round((unlockedCount / totalCount) * 100);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-40">
        <div className="container py-4">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ChevronLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-display text-3xl text-gray-900 flex items-center gap-3">
                <Trophy className="w-8 h-8 text-yellow-600" />
                Minhas Conquistas
              </h1>
              <p className="text-gray-600 mt-2">Desbloqueadas: {unlockedCount} de {totalCount}</p>
            </div>
            <div className="text-right">
              <div className="text-4xl font-bold text-blue-600">{getTotalPoints()}</div>
              <p className="text-sm text-gray-600">Pontos Totais</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-12">
        {/* Progress Overview */}
        <Card className="p-6 border border-gray-200 mb-8 bg-gradient-to-r from-blue-50 to-blue-100">
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-gray-900">Progresso Geral</span>
                <span className="font-bold text-blue-600">{completionPercentage}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                  className="bg-gradient-to-r from-blue-500 to-blue-600 h-4 rounded-full transition-all duration-500"
                  style={{ width: `${completionPercentage}%` }}
                />
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-gray-900">{unlockedCount}</p>
                <p className="text-xs text-gray-600">Desbloqueadas</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{totalCount - unlockedCount}</p>
                <p className="text-xs text-gray-600">Bloqueadas</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{getTotalPoints()}</p>
                <p className="text-xs text-gray-600">Pontos</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{completionPercentage}%</p>
                <p className="text-xs text-gray-600">Completo</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
              selectedCategory === "all"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Todas
          </button>
          {(["project", "stage", "challenge", "milestone", "special"] as const).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                selectedCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {categoryLabels[category]}
            </button>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAchievements.map((achievement) => {
            const isUnlocked = unlockedIds.has(achievement.id);
            const unlockedData = unlockedAchievements.find((a) => a.id === achievement.id);

            return (
              <div
                key={achievement.id}
                className={`relative overflow-hidden rounded-lg border-2 transition-all duration-300 ${
                  isUnlocked
                    ? `${rarityColors[achievement.rarity]} shadow-lg hover:shadow-xl`
                    : "bg-gray-50 border-gray-200 opacity-60"
                }`}
              >
                {/* Background Gradient */}
                {isUnlocked && (
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${rarityGradient[achievement.rarity]} opacity-5`}
                  />
                )}

                <div className="relative p-6">
                  {/* Icon */}
                  <div className="mb-4">
                    {isUnlocked ? (
                      <div className="text-6xl">{achievement.icon}</div>
                    ) : (
                      <div className="w-16 h-16 bg-gray-300 rounded-lg flex items-center justify-center">
                        <Lock className="w-8 h-8 text-gray-500" />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className={`font-bold text-lg ${isUnlocked ? rarityTextColors[achievement.rarity] : "text-gray-600"}`}>
                        {achievement.name}
                      </h3>
                      {isUnlocked && (
                        <span className={`text-xs font-semibold px-2 py-1 rounded whitespace-nowrap ${
                          achievement.rarity === "common"
                            ? "bg-gray-200 text-gray-700"
                            : achievement.rarity === "uncommon"
                              ? "bg-green-200 text-green-700"
                              : achievement.rarity === "rare"
                                ? "bg-blue-200 text-blue-700"
                                : achievement.rarity === "epic"
                                  ? "bg-purple-200 text-purple-700"
                                  : "bg-yellow-200 text-yellow-700"
                        }`}>
                          {achievement.rarity.charAt(0).toUpperCase() + achievement.rarity.slice(1)}
                        </span>
                      )}
                    </div>

                    <p className={`text-sm ${isUnlocked ? "text-gray-700" : "text-gray-500"}`}>
                      {achievement.description}
                    </p>

                    {/* Progress Bar (if applicable) */}
                    {achievement.maxProgress && (
                      <div className="mt-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-semibold text-gray-600">Progresso</span>
                          <span className="text-xs font-bold text-gray-700">
                            {achievement.progress || 0}/{achievement.maxProgress}
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                            style={{
                              width: `${((achievement.progress || 0) / (achievement.maxProgress || 1)) * 100}%`,
                            }}
                          />
                        </div>
                      </div>
                    )}

                    {/* Unlock Date */}
                    {isUnlocked && unlockedData?.unlockedAt && (
                      <p className="text-xs text-gray-500 mt-3">
                        Desbloqueada em {new Date(unlockedData.unlockedAt).toLocaleDateString("pt-BR")}
                      </p>
                    )}

                    {!isUnlocked && (
                      <p className="text-xs text-gray-500 mt-3 font-semibold">Bloqueada</p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredAchievements.length === 0 && (
          <div className="text-center py-12">
            <Trophy className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-600 text-lg">Nenhuma conquista nesta categoria</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50 mt-16">
        <div className="container py-8">
          <div className="text-center text-sm text-gray-600">
            <p>Continue aprendendo para desbloquear mais conquistas!</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
