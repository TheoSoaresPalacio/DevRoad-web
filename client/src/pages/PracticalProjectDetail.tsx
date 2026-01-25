import { useParams, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { ArrowLeft, Clock, Target, BookOpen, ExternalLink, CheckCircle2, Circle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { getProjectById } from '@/lib/projectsData';

export default function PracticalProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();
  const [, navigate] = useLocation();
  const [completedTasks, setCompletedTasks] = useState<Set<string>>(new Set());

  const project = projectId ? getProjectById(projectId) : undefined;

  useEffect(() => {
    // Carregar tarefas completadas do localStorage
    if (projectId) {
      const saved = localStorage.getItem(`project-tasks-${projectId}`);
      if (saved) {
        setCompletedTasks(new Set(JSON.parse(saved)));
      }
    }
  }, [projectId]);

  const handleTaskToggle = (taskId: string) => {
    const newCompleted = new Set(completedTasks);
    if (newCompleted.has(taskId)) {
      newCompleted.delete(taskId);
    } else {
      newCompleted.add(taskId);
    }
    setCompletedTasks(newCompleted);
    
    // Salvar no localStorage
    if (projectId) {
      localStorage.setItem(`project-tasks-${projectId}`, JSON.stringify(Array.from(newCompleted)));
    }
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-background p-4">
        <div className="container max-w-4xl mx-auto">
          <Button variant="ghost" onClick={() => navigate('/projects')} className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>
          <Card className="p-8 text-center">
            <h1 className="text-2xl font-bold mb-4">Projeto não encontrado</h1>
            <Button onClick={() => navigate('/projects')}>Voltar aos Projetos</Button>
          </Card>
        </div>
      </div>
    );
  }

  const totalTasks = project.activities.reduce((sum, a) => sum + a.tasks.length, 0);
  const completedCount = completedTasks.size;
  const progressPercent = totalTasks > 0 ? Math.round((completedCount / totalTasks) * 100) : 0;

  const difficultyColors = {
    beginner: 'bg-green-100 text-green-800',
    intermediate: 'bg-yellow-100 text-yellow-800',
    advanced: 'bg-red-100 text-red-800'
  };

  const typeColors = {
    idea: 'bg-purple-100 text-purple-800',
    beginner: 'bg-green-100 text-green-800',
    intermediate: 'bg-blue-100 text-blue-800',
    advanced: 'bg-red-100 text-red-800',
    portfolio: 'bg-orange-100 text-orange-800'
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-4xl mx-auto p-4">
        {/* Header */}
        <Button variant="ghost" onClick={() => navigate('/projects')} className="mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar aos Projetos
        </Button>

        {/* Título e Metadados */}
        <div className="mb-8">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
              <p className="text-lg text-muted-foreground">{project.description}</p>
            </div>
            <Badge className={typeColors[project.type]}>
              {project.type === 'idea' ? 'Ideia' :
               project.type === 'beginner' ? 'Iniciante' :
               project.type === 'intermediate' ? 'Intermediário' :
               project.type === 'advanced' ? 'Avançado' : 'Portfólio'}
            </Badge>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Tempo Estimado</p>
                <p className="font-semibold">{project.estimatedHours}h</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge className={difficultyColors[project.difficulty]}>
                {project.difficulty === 'beginner' ? 'Fácil' : project.difficulty === 'intermediate' ? 'Médio' : 'Difícil'}
              </Badge>
            </div>
            <div className="flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Objetivos</p>
                <p className="font-semibold">{project.learningObjectives.length}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Atividades</p>
                <p className="font-semibold">{project.activities.length}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Progresso */}
        <Card className="p-6 mb-8">
          <h2 className="font-bold mb-3">Seu Progresso</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">{completedCount} de {totalTasks} tarefas completadas</span>
              <span className="text-sm font-bold text-primary">{progressPercent}%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-3">
              <div
                className="bg-primary h-3 rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </Card>

        {/* Objetivos de Aprendizado */}
        <Card className="p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">🎯 Objetivos de Aprendizado</h2>
          <ul className="space-y-2">
            {project.learningObjectives.map((objective, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>{objective}</span>
              </li>
            ))}
          </ul>
        </Card>

        {/* Tecnologias */}
        <Card className="p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">💻 Tecnologias</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <Badge key={i} variant="secondary">{tech}</Badge>
            ))}
          </div>
        </Card>

        {/* Atividades */}
        <div className="space-y-6 mb-8">
          <h2 className="text-2xl font-bold">📋 Atividades</h2>
          {project.activities.map((activity, actIndex) => (
            <Card key={activity.id} className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold">{activity.title}</h3>
                  <p className="text-sm text-muted-foreground">{activity.description}</p>
                </div>
                <div className="flex gap-2">
                  <Badge variant="outline">{activity.type === 'exercise' ? 'Exercício' : activity.type === 'challenge' ? 'Desafio' : activity.type === 'practice' ? 'Prática' : 'Construção'}</Badge>
                  <Badge className={activity.difficulty === 'easy' ? 'bg-green-100 text-green-800' : activity.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}>
                    {activity.difficulty === 'easy' ? 'Fácil' : activity.difficulty === 'medium' ? 'Médio' : 'Difícil'}
                  </Badge>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>{activity.estimatedHours}h estimadas</span>
              </div>

              {/* Tarefas */}
              <div className="space-y-3 mb-4">
                <h4 className="font-semibold">Tarefas:</h4>
                {activity.tasks.map((task) => (
                  <div key={task.id} className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                    <Checkbox
                      checked={completedTasks.has(task.id)}
                      onCheckedChange={() => handleTaskToggle(task.id)}
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <p className={completedTasks.has(task.id) ? 'line-through text-muted-foreground' : 'font-medium'}>
                        {task.title}
                      </p>
                      <p className="text-xs text-muted-foreground">{task.description}</p>
                      <p className="text-xs text-muted-foreground mt-1">~{task.estimatedHours}h</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Resultado Esperado */}
              <div className="p-3 bg-blue-50 rounded-lg mb-4">
                <p className="text-sm font-semibold text-blue-900 mb-1">Resultado Esperado:</p>
                <p className="text-sm text-blue-800">{activity.expectedOutcome}</p>
              </div>

              {/* Recursos */}
              {activity.resources.length > 0 && (
                <div>
                  <p className="text-sm font-semibold mb-2">Recursos:</p>
                  <ul className="space-y-1">
                    {activity.resources.map((resource, i) => (
                      <li key={i}>
                        <a href={resource} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline flex items-center gap-1">
                          <ExternalLink className="w-3 h-3" />
                          Recurso {i + 1}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Critérios de Sucesso */}
        <Card className="p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">✅ Critérios de Sucesso</h2>
          <ul className="space-y-2">
            {project.successCriteria.map((criteria, i) => (
              <li key={i} className="flex items-start gap-3">
                <Circle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>{criteria}</span>
              </li>
            ))}
          </ul>
        </Card>

        {/* Bônus */}
        {project.bonus.length > 0 && (
          <Card className="p-6 mb-8 bg-gradient-to-r from-orange-50 to-yellow-50">
            <h2 className="text-2xl font-bold mb-4">🚀 Bônus & Extensões</h2>
            <ul className="space-y-2">
              {project.bonus.map((bonus, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-lg">⭐</span>
                  <span>{bonus}</span>
                </li>
              ))}
            </ul>
          </Card>
        )}

        {/* Portfólio */}
        {project.portfolioValue !== 'low' && (
          <Card className="p-6 bg-gradient-to-r from-primary/5 to-primary/10">
            <h2 className="text-2xl font-bold mb-4">💼 Valor para Portfólio</h2>
            <p className="mb-3">
              <strong>Nível:</strong> {project.portfolioValue === 'medium' ? 'Médio' : 'Alto'}
            </p>
            {project.portfolioDescription && (
              <p className="text-sm text-muted-foreground">{project.portfolioDescription}</p>
            )}
          </Card>
        )}

        {/* Recursos Recomendados */}
        {project.resources.length > 0 && (
          <Card className="p-6 mt-8">
            <h2 className="text-2xl font-bold mb-4">📚 Recursos Recomendados</h2>
            <div className="space-y-3">
              {project.resources.map((resource, i) => (
                <a
                  key={i}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted transition-colors"
                >
                  <div>
                    <p className="font-semibold">{resource.title}</p>
                    <p className="text-xs text-muted-foreground capitalize">
                      {resource.type === 'documentation' ? 'Documentação' :
                       resource.type === 'tutorial' ? 'Tutorial' :
                       resource.type === 'article' ? 'Artigo' :
                       resource.type === 'video' ? 'Vídeo' : 'Ferramenta'}
                    </p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground" />
                </a>
              ))}
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
