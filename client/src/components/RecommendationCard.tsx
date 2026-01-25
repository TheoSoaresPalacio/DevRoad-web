import { useRecommendation } from "@/contexts/RecommendationContext";
import { useTheme } from "@/contexts/ThemeContext";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Lightbulb, TrendingUp, Target } from "lucide-react";

export default function RecommendationCard() {
  const { getRecommendations } = useRecommendation();
  const { theme } = useTheme();
  const recommendations = getRecommendations();
  const topRecommendations = recommendations.slice(0, 3);

  if (topRecommendations.length === 0) {
    return null;
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "border-red-300 dark:border-red-700 bg-red-50 dark:bg-red-900/20";
      case "medium":
        return "border-yellow-300 dark:border-yellow-700 bg-yellow-50 dark:bg-yellow-900/20";
      case "low":
        return "border-green-300 dark:border-green-700 bg-green-50 dark:bg-green-900/20";
      default:
        return "border-gray-300 dark:border-gray-700";
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case "high":
        return <Target className="w-4 h-4 text-red-600 dark:text-red-400" />;
      case "medium":
        return <Lightbulb className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />;
      case "low":
        return <TrendingUp className="w-4 h-4 text-green-600 dark:text-green-400" />;
      default:
        return null;
    }
  };

  return (
    <section className="mb-8 md:mb-12">
      <div className="flex items-center gap-2 mb-4 md:mb-6">
        <Lightbulb className="w-5 h-5 text-blue-600 dark:text-blue-400" />
        <h2 className={`font-display text-xl md:text-2xl font-bold transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Recomendações Personalizadas
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {topRecommendations.map((rec) => (
          <Link key={rec.trailId} href="/">
            <Card
              className={`p-4 border-2 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                getPriorityColor(rec.priority)
              } ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
            >
              <div className="flex items-start gap-3 mb-3">
                {getPriorityIcon(rec.priority)}
                <h3 className={`font-semibold text-sm transition-colors duration-300 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {rec.trailName}
                </h3>
              </div>

              <p className={`text-xs mb-4 transition-colors duration-300 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                {rec.reason}
              </p>

              <Button
                size="sm"
                className="w-full text-xs"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Explorar Trilha
              </Button>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
