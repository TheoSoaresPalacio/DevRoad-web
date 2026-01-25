import { useState } from 'react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, Clock, Zap, Target, BookOpen, Code2, Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { 
  getAllProjects, 
  getProjectsByCategory, 
  getProjectsByType,
  getPortfolioProjects,
  PracticalProject,
  ProjectCategory,
  ProjectType 
} from '@/lib/projectsData';

const categoryLabels: Record<ProjectCategory, string> = {
  java: 'Java & POO',
  backend: 'Back-End',
  english: 'Inglês',
  math: 'Matemática',
  fullstack: 'Full-Stack'
};

const typeLabels: Record<ProjectType, string> = {
  idea: 'Ideias',
  beginner: 'Iniciante',
  intermediate: 'Intermediário',
  advanced: 'Avançado',
  portfolio: 'Portfólio'
};

const typeColors: Record<ProjectType, string> = {
  idea: 'bg-purple-100 text-purple-800',
  beginner: 'bg-green-100 text-green-800',
  intermediate: 'bg-blue-100 text-blue-800',
  advanced: 'bg-red-100 text-red-800',
  portfolio: 'bg-orange-100 text-orange-800'
};

const difficultyColors = {
  beginner: 'bg-green-100 text-green-800',
  intermediate: 'bg-yellow-100 text-yellow-800',
  advanced: 'bg-red-100 text-red-800'
};

export default function Projects() {
  const { theme, toggleTheme } = useTheme();
  const [, navigate] = useLocation();
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('java');
  const [selectedType, setSelectedType] = useState<ProjectType | 'all'>('all');

  const allProjects = getAllProjects();
  const portfolioProjects = getPortfolioProjects();

  let filteredProjects = getProjectsByCategory(selectedCategory);
  if (selectedType !== 'all') {
    filteredProjects = filteredProjects.filter(p => p.type === selectedType);
  }

  const renderProjectCard = (project: PracticalProject) => (
    <Card key={project.id} className="p-6 hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate(`/project/${project.id}`)}>
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-bold">{project.title}</h3>
        <Badge className={typeColors[project.type]}>
          {typeLabels[project.type]}
        </Badge>
      </div>

      <p className="text-sm text-muted-foreground mb-4">{project.shortDescription}</p>

      <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-muted-foreground" />
          <span>{project.estimatedHours}h</span>
        </div>
        <div className="flex items-center gap-2">
          <Badge className={difficultyColors[project.difficulty]} variant="outline">
            {project.difficulty === 'beginner' ? 'Fácil' : project.difficulty === 'intermediate' ? 'Médio' : 'Difícil'}
          </Badge>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.slice(0, 3).map((tech, i) => (
          <Badge key={i} variant="secondary" className="text-xs">
            {tech}
          </Badge>
        ))}
        {project.technologies.length > 3 && (
          <Badge variant="secondary" className="text-xs">
            +{project.technologies.length - 3}
          </Badge>
        )}
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Target className="w-4 h-4 text-primary" />
          <span className="text-xs text-muted-foreground">
            {project.learningObjectives.length} objetivos
          </span>
        </div>
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-primary" />
          <span className="text-xs text-muted-foreground">
            {project.activities.length} atividades
          </span>
        </div>
      </div>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-7xl mx-auto p-4">
        {/* Header */}
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar
        </Button>

        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Projetos Práticos & Portfólio</h1>
          <p className="text-lg text-muted-foreground">
            Aprenda através da prática com projetos estruturados, desafios progressivos e atividades mão-na-massa
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="trilhas" className="mb-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="trilhas">Por Trilha</TabsTrigger>
            <TabsTrigger value="portfolio">Portfólio</TabsTrigger>
            <TabsTrigger value="ideias">Ideias & Inspiração</TabsTrigger>
          </TabsList>

          {/* Tab: Por Trilha */}
          <TabsContent value="trilhas" className="space-y-6">
            {/* Filtros */}
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-3">Escolha uma Trilha</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {(Object.keys(categoryLabels) as ProjectCategory[]).map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? 'default' : 'outline'}
                      onClick={() => {
                        setSelectedCategory(category);
                        setSelectedType('all');
                      }}
                      className="w-full"
                    >
                      {categoryLabels[category]}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Tipo de Projeto</h3>
                <div className="flex flex-wrap gap-2">
                  <Button
                    variant={selectedType === 'all' ? 'default' : 'outline'}
                    onClick={() => setSelectedType('all')}
                    size="sm"
                  >
                    Todos
                  </Button>
                  {(['beginner', 'intermediate', 'advanced'] as ProjectType[]).map((type) => (
                    <Button
                      key={type}
                      variant={selectedType === type ? 'default' : 'outline'}
                      onClick={() => setSelectedType(type)}
                      size="sm"
                    >
                      {typeLabels[type]}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Projetos */}
            <div>
              <h3 className="font-semibold mb-4">
                {filteredProjects.length} Projetos Encontrados
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredProjects.map(renderProjectCard)}
              </div>
            </div>
          </TabsContent>

          {/* Tab: Portfólio */}
          <TabsContent value="portfolio" className="space-y-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <div className="flex gap-3">
                <Zap className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-blue-900 mb-1">Construa seu Portfólio</h3>
                  <p className="text-sm text-blue-800">
                    Estes projetos são especialmente valiosos para seu portfólio profissional. Completá-los demonstrará suas habilidades aos recrutadores.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Projetos de Alto Valor para Portfólio</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {portfolioProjects.map(renderProjectCard)}
              </div>
            </div>

            {/* Dicas de Portfólio */}
            <Card className="p-6 bg-gradient-to-r from-primary/5 to-primary/10">
              <h3 className="font-bold mb-4">💡 Dicas para Seu Portfólio</h3>
              <ul className="space-y-2 text-sm">
                <li>✓ Complete projetos de diferentes níveis de dificuldade</li>
                <li>✓ Hospede seus projetos no GitHub com README bem escrito</li>
                <li>✓ Adicione screenshots e demonstrações ao seu repositório</li>
                <li>✓ Escreva commits com mensagens descritivas</li>
                <li>✓ Documente seu código com comentários claros</li>
                <li>✓ Crie um site pessoal para exibir seus projetos</li>
                <li>✓ Contribua para projetos open source</li>
              </ul>
            </Card>
          </TabsContent>

          {/* Tab: Ideias & Inspiração */}
          <TabsContent value="ideias" className="space-y-6">
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-6">
              <div className="flex gap-3">
                <Code2 className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-purple-900 mb-1">Ideias de Projetos</h3>
                  <p className="text-sm text-purple-800">
                    Inspirações e ideias para criar seus próprios projetos. Use como ponto de partida para inovar!
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {allProjects.filter(p => p.type === 'idea').map(renderProjectCard)}
            </div>

            {/* Brainstorm */}
            <Card className="p-6">
              <h3 className="font-bold mb-4">🚀 Como Gerar Suas Próprias Ideias</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-semibold mb-2">1. Resolva Problemas Reais</h4>
                  <p className="text-muted-foreground">Identifique problemas no seu dia a dia e crie soluções</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">2. Clone Projetos Populares</h4>
                  <p className="text-muted-foreground">Recrie versões simplificadas de apps conhecidos</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">3. Combine Tecnologias</h4>
                  <p className="text-muted-foreground">Misture diferentes tecnologias para criar algo único</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">4. Melhore Projetos Antigos</h4>
                  <p className="text-muted-foreground">Pegue um projeto anterior e adicione novas funcionalidades</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">5. Participe de Hackathons</h4>
                  <p className="text-muted-foreground">Encontre inspiração em competições e desafios online</p>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Estatísticas */}
        <Card className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 mt-8">
          <h3 className="font-bold mb-4">📊 Estatísticas de Projetos</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <p className="text-2xl font-bold text-primary">{allProjects.length}</p>
              <p className="text-sm text-muted-foreground">Projetos Totais</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-green-600">{allProjects.filter(p => p.difficulty === 'beginner').length}</p>
              <p className="text-sm text-muted-foreground">Iniciante</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-yellow-600">{allProjects.filter(p => p.difficulty === 'intermediate').length}</p>
              <p className="text-sm text-muted-foreground">Intermediário</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-red-600">{allProjects.filter(p => p.difficulty === 'advanced').length}</p>
              <p className="text-sm text-muted-foreground">Avançado</p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t">
            <p className="text-sm text-muted-foreground">
              <strong>Tempo Total Estimado:</strong> {Math.round(allProjects.reduce((sum, p) => sum + p.estimatedHours, 0))} horas
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
