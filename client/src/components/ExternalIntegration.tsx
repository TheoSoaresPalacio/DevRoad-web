import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ExternalIntegrationProps {
  projectId: string;
  projectName: string;
  onGitHubConnect?: () => void;
  onLeetCodeConnect?: () => void;
}

export default function ExternalIntegration({
  projectId,
  projectName,
  onGitHubConnect,
  onLeetCodeConnect,
}: ExternalIntegrationProps) {
  const handleGitHubConnect = () => {
    const githubUrl = `https://github.com/search?q=${encodeURIComponent(projectName)}`;
    window.open(githubUrl, "_blank");
    onGitHubConnect?.();
  };

  const handleLeetCodeConnect = () => {
    const leetcodeUrl = "https://leetcode.com/problemset/all/";
    window.open(leetcodeUrl, "_blank");
    onLeetCodeConnect?.();
  };

  return (
    <Card className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-blue-200 dark:border-blue-800">
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
            Integração com Plataformas Externas
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Conecte seu progresso com GitHub e LeetCode para validar seus projetos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* GitHub Integration */}
          <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3">
              <Github className="w-5 h-5 text-gray-900 dark:text-white" />
              <div>
                <p className="font-medium text-gray-900 dark:text-white">GitHub</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Compartilhe seu código</p>
              </div>
            </div>
            <Button
              size="sm"
              variant="outline"
              onClick={handleGitHubConnect}
              className="flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              Conectar
            </Button>
          </div>

          {/* LeetCode Integration */}
          <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-yellow-500 rounded flex items-center justify-center text-white text-xs font-bold">
                LC
              </div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">LeetCode</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Resolva desafios</p>
              </div>
            </div>
            <Button
              size="sm"
              variant="outline"
              onClick={handleLeetCodeConnect}
              className="flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              Conectar
            </Button>
          </div>
        </div>

        <div className="text-xs text-gray-500 dark:text-gray-400 p-3 bg-gray-100 dark:bg-gray-800 rounded">
          💡 Dica: Compartilhe seus projetos no GitHub para construir um portfólio profissional e
          resolva desafios no LeetCode para melhorar suas habilidades de resolução de problemas.
        </div>
      </div>
    </Card>
  );
}
