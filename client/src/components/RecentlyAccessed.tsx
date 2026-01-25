import { useHistory } from "@/contexts/HistoryContext";
import { useTheme } from "@/contexts/ThemeContext";
import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Clock, ChevronRight } from "lucide-react";

export default function RecentlyAccessed() {
  const { getRecentItems } = useHistory();
  const { theme } = useTheme();
  const recentItems = getRecentItems(12);

  if (recentItems.length === 0) {
    return null;
  }

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
        return "Item";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "trail":
        return "🛣️";
      case "stage":
        return "📚";
      case "concept":
        return "💡";
      case "project":
        return "🚀";
      default:
        return "📌";
    }
  };

  return (
    <section className="mb-8 md:mb-12">
      <div className="flex items-center gap-2 mb-4 md:mb-6">
        <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
        <h2 className={`font-display text-xl md:text-2xl font-bold transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Acessados Recentemente
        </h2>
      </div>

      {/* Scroll Horizontal */}
      <div className="relative">
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-3 md:gap-4 pb-2">
            {recentItems.map((item) => (
              <Link key={item.id} href={item.path}>
                <Card
                  className={`flex-shrink-0 w-48 md:w-56 p-4 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    theme === 'dark'
                      ? 'bg-gray-800 border-gray-700 hover:border-blue-500'
                      : 'bg-white border-gray-200 hover:border-blue-500'
                  } border`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-2xl">{getTypeIcon(item.type)}</span>
                    <span className={`text-xs px-2 py-1 rounded whitespace-nowrap ${getTypeColor(item.type)}`}>
                      {getTypeLabel(item.type)}
                    </span>
                  </div>

                  <h3 className={`font-semibold text-sm mb-2 line-clamp-2 transition-colors duration-300 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {item.title}
                  </h3>

                  <div className="flex items-center justify-between">
                    <p className={`text-xs transition-colors duration-300 ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {new Date(item.timestamp).toLocaleDateString('pt-BR', {
                        month: 'short',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </p>
                    <ChevronRight className={`w-4 h-4 transition-colors duration-300 ${
                      theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
                    }`} />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Gradiente para indicar scroll */}
        <div className={`absolute right-0 top-0 bottom-2 w-8 pointer-events-none transition-colors duration-300 ${
          theme === 'dark'
            ? 'bg-gradient-to-l from-gray-900 to-transparent'
            : 'bg-gradient-to-l from-white to-transparent'
        }`} />
      </div>

      {/* CSS para scrollbar customizada */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
