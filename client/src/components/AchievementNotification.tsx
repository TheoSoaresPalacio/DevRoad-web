import { useAchievements } from "@/contexts/AchievementContext";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

const rarityColors = {
  common: "from-gray-400 to-gray-600",
  uncommon: "from-green-400 to-green-600",
  rare: "from-blue-400 to-blue-600",
  epic: "from-purple-400 to-purple-600",
  legendary: "from-yellow-400 to-yellow-600",
};

const rarityBorder = {
  common: "border-gray-400",
  uncommon: "border-green-400",
  rare: "border-blue-400",
  epic: "border-purple-400",
  legendary: "border-yellow-400",
};

export default function AchievementNotification() {
  const { newAchievements, clearNewAchievements } = useAchievements();
  const [displayedAchievements, setDisplayedAchievements] = useState(newAchievements);

  useEffect(() => {
    setDisplayedAchievements(newAchievements);
  }, [newAchievements]);

  if (displayedAchievements.length === 0) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 space-y-3 max-w-sm">
      {displayedAchievements.map((achievement) => (
        <div
          key={achievement.id}
          className={`bg-gradient-to-r ${rarityColors[achievement.rarity]} border-2 ${rarityBorder[achievement.rarity]} rounded-lg p-4 text-white shadow-lg animate-in slide-in-from-bottom-4 duration-300`}
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-start gap-3 flex-1">
              <div className="text-4xl">{achievement.icon}</div>
              <div className="flex-1">
                <h3 className="font-bold text-lg">🎉 Conquista Desbloqueada!</h3>
                <p className="font-semibold text-white mt-1">{achievement.name}</p>
                <p className="text-sm text-white/90 mt-1">{achievement.description}</p>
                <div className="mt-2 inline-block px-2 py-1 bg-white/20 rounded text-xs font-semibold">
                  {achievement.rarity.charAt(0).toUpperCase() + achievement.rarity.slice(1)}
                </div>
              </div>
            </div>
            <button
              onClick={clearNewAchievements}
              className="flex-shrink-0 text-white/80 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
