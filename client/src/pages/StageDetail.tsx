import { useRoute, Link } from 'wouter';
import { useNavigationHistory } from '@/hooks/useNavigationHistory';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, BookOpen, Target, Clock, Zap, ExternalLink } from 'lucide-react';
import { getStageById, getStagesByTrail } from '@/lib/stagesData';


export default function StageDetail() {
  const [, params] = useRoute("/stage/:stageId");
  const stageId = params?.stageId;
  const { goBack } = useNavigationHistory();

  const stage = stageId ? getStageById(stageId) : undefined;
  const allStages = stage ? getStagesByTrail(stage.trailId) : [];

  if (!stage) {
    return (
      <div className="min-h-screen bg-white dark:bg-slate-950 p-4">
        <div className="container max-w-4xl mx-auto">
          <Button variant="ghost" className="mb-4" onClick={goBack}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>
          <Card className="p-8 text-center">
            <h1 className="text-2xl font-bold mb-4">Estágio não encontrado</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              O estágio que você está procurando não existe.
            </p>
            <Button onClick={goBack}>Voltar</Button>
          </Card>
        </div>
      </div>
    );
  }

  const difficultyColors = {
    'Iniciante': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    'Intermediário': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    'Avançado': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
  };

  const currentIndex = allStages.findIndex(s => s.id === stageId);
  const previousStage = currentIndex > 0 ? allStages[currentIndex - 1] : null;
  const nextStage = currentIndex < allStages.length - 1 ? allStages[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 p-4">
      <div className="container max-w-4xl mx-auto">
        <Button variant="ghost" className="mb-6" onClick={goBack}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar
        </Button>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Badge className={difficultyColors[stage.difficulty]}>
              {stage.difficulty}
            </Badge>
            <Badge variant="outline">Estágio {stage.stageNumber}</Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {stage.duration}
            </Badge>
          </div>
          <h1 className="text-4xl font-bold mb-2">{stage.title}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">{stage.description}</p>
        </div>

        {/* Objetivos */}
        <Card className="p-6 mb-6 bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2 mb-4">
            <Target className="w-5 h-5 text-blue-500" />
            <h2 className="text-2xl font-bold">Objetivos de Aprendizado</h2>
          </div>
          <ul className="space-y-2">
            {stage.objectives.map((obj, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="text-blue-500 font-bold mt-1">✓</span>
                <span>{obj}</span>
              </li>
            ))}
          </ul>
        </Card>

        {/* Tópicos */}
        <Card className="p-6 mb-6 bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="w-5 h-5 text-purple-500" />
            <h2 className="text-2xl font-bold">Tópicos Abordados</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {stage.topics.map((topic, idx) => (
              <Link key={idx} href={`/concept/${topic}`}>
                <Button variant="outline" className="justify-start w-full">
                  {topic}
                </Button>
              </Link>
            ))}
          </div>
        </Card>

        {/* Conteúdo Principal */}
        <Card className="p-6 mb-6 bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-700">
          <div className="prose dark:prose-invert max-w-none">
            {stage.content.split('\n').map((line, idx) => {
              if (line.startsWith('## ')) {
                return <h2 key={idx} className="text-2xl font-bold mt-6 mb-3">{line.replace('## ', '')}</h2>;
              }
              if (line.startsWith('### ')) {
                return <h3 key={idx} className="text-xl font-bold mt-4 mb-2">{line.replace('### ', '')}</h3>;
              }
              if (line.startsWith('- ')) {
                return <li key={idx} className="ml-4">{line.replace('- ', '')}</li>;
              }
              if (line.startsWith('1. ')) {
                return <li key={idx} className="ml-4 list-decimal">{line.replace('1. ', '')}</li>;
              }
              if (line.trim() === '') {
                return <br key={idx} />;
              }
              return <p key={idx} className="mb-3">{line}</p>;
            })}
          </div>
        </Card>

        {/* Projetos */}
        {stage.projects.length > 0 && (
          <Card className="p-6 mb-6 bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-5 h-5 text-yellow-500" />
              <h2 className="text-2xl font-bold">Projetos Práticos</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {stage.projects.map((project, idx) => (
                <Card key={idx} className="p-4 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-gray-700">
                  <h3 className="font-bold mb-2">{project}</h3>
                  <Button variant="outline" size="sm" className="w-full">
                    Ver Detalhes
                  </Button>
                </Card>
              ))}
            </div>
          </Card>
        )}

        {/* Recursos */}
        {stage.resources.length > 0 && (
          <Card className="p-6 mb-6 bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold mb-4">Recursos Recomendados</h2>
            <div className="space-y-3">
              {stage.resources.map((resource, idx) => (
                <a
                  key={idx}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition"
                >
                  <div>
                    <p className="font-bold">{resource.title}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 capitalize">{resource.type}</p>
                  </div>
                  <ExternalLink className="w-4 h-4" />
                </a>
              ))}
            </div>
          </Card>
        )}

        {/* Navegação entre estágios */}
        <div className="flex gap-4 mb-8">
          {previousStage && (
            <Link href={`/stage/${previousStage.id}`} className="flex-1">
              <Button variant="outline" className="w-full">
                ← Estágio Anterior
              </Button>
            </Link>
          )}
          {nextStage && (
            <Link href={`/stage/${nextStage.id}`} className="flex-1">
              <Button className="w-full">
                Próximo Estágio →
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
