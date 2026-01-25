import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ChevronRight, Trophy, BookOpen, Moon, Sun } from "lucide-react";
import { useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { Link } from "wouter";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";
import StreakDisplay from "@/components/StreakDisplay";
import SearchBar from "@/components/SearchBar";
import RecentlyAccessed from "@/components/RecentlyAccessed";
import { useHistory } from "@/contexts/HistoryContext";
import { allTrails, getIconByName } from "@/lib/roadmapData";

/**
 * Design Philosophy: Premium Tech Aesthetic
 * - Paleta escura/clara com gradientes modernos
 * - Layout assimétrico com cards expansíveis
 * - Tipografia em escala harmônica
 * - Modo escuro totalmente funcional
 */

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const { addToHistory } = useHistory();
  const [selectedTrailId, setSelectedTrailId] = useState<string>("java");
  const selectedTrail = allTrails.find((t) => t.id === selectedTrailId);

  // Adicionar trilha ao histórico quando mudar
  const handleTrailChange = (trailId: string) => {
    setSelectedTrailId(trailId);
    const trail = allTrails.find((t) => t.id === trailId);
    if (trail) {
      addToHistory({
        id: trail.id,
        title: trail.name,
        type: "trail",
        trailId: trail.id,
        path: "/",
      });
    }
  };

  if (!selectedTrail) {
    return <div>Trilha não encontrada</div>;
  }

  const progressData = selectedTrail.stages.map((stage) => ({
    stage: `Estágio ${stage.id}`,
    completed: stage.projects.reduce((acc, p) => acc + p.completed, 0),
    total: stage.projects.reduce((acc, p) => acc + p.tasks, 0),
  }));

  const learningPathData = [
    { week: "Semana 1", concepts: 4, projects: 1 },
    { week: "Semana 2", concepts: 6, projects: 2 },
    { week: "Semana 3", concepts: 6, projects: 2 },
    { week: "Semana 4", concepts: 5, projects: 2 },
    { week: "Semana 5", concepts: 5, projects: 2 },
    { week: "Semana 6", concepts: 5, projects: 1 },
    { week: "Semana 7", concepts: 5, projects: 1 },
  ];

  const difficultyData = selectedTrail.stages.reduce(
    (acc, stage) => {
      const existing = acc.find((d) => d.name === stage.difficulty);
      if (existing) {
        existing.value += 1;
      } else {
        acc.push({ name: stage.difficulty, value: 1, color: stage.color });
      }
      return acc;
    },
    [] as Array<{ name: string; value: number; color: string }>
  );

  const totalProgress = (progressData.reduce((acc, d) => acc + d.completed, 0) / progressData.reduce((acc, d) => acc + d.total, 0)) * 100;
  const totalProjects = selectedTrail.stages.reduce((acc, s) => acc + s.projects.length, 0);
  const totalConcepts = selectedTrail.stages.reduce((acc, s) => acc + s.concepts.length, 0);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Header */}
      <header className={`border-b transition-colors duration-300 ${theme === 'dark' ? 'border-gray-800 bg-gray-900' : 'border-gray-200 bg-white'} sticky top-0 z-40`}>
        <div className="container py-4 md:py-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h1 className={`font-display text-4xl font-bold transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                DevRoad
              </h1>
              <div className="flex items-center gap-3 mt-2">
                <p className={`transition-colors duration-300 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  Prepare-se para conseguir seu primeiro emprego como desenvolvedor
                </p>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold transition-colors duration-300 ${theme === 'dark' ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'}`}>
                  {selectedTrail?.name}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 md:gap-4 flex-1 justify-end w-full md:w-auto">
              <div className="hidden md:block flex-1 max-w-xs">
                <SearchBar />
              </div>
              <div className="flex items-center gap-2 md:gap-4">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-colors duration-300 ${theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}
                title={theme === 'dark' ? 'Modo Claro' : 'Modo Escuro'}
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5 text-yellow-500" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-600" />
                )}
              </button>
              <Link href="/projects">
                <Button variant="outline" className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  Projetos Práticos
                </Button>
              </Link>
              <Link href="/achievements">
                <Button variant="outline" className="flex items-center gap-2">
                  <Trophy className="w-4 h-4" />
                  Conquistas
                </Button>
              </Link>
              <div className="text-right">
                <div className={`text-3xl font-bold transition-colors duration-300 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
                  {Math.round(totalProgress)}%
                </div>
                <p className={`text-sm transition-colors duration-300 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  Progresso Geral
                </p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-8 md:py-12">
        {/* Recently Accessed */}
        <RecentlyAccessed />
        {/* Trail Selector */}
        <section className="mb-8 md:mb-12">
          <h2 className={`font-display text-xl md:text-2xl font-bold mb-4 md:mb-6 transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Escolha sua Trilha de Aprendizado
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {allTrails.map((trail) => (
              <Card
                key={trail.id}
                className={`p-4 md:p-6 border-2 cursor-pointer transition-all duration-300 ${
                  selectedTrailId === trail.id
                    ? `border-[${trail.color}] shadow-lg`
                    : theme === 'dark'
                    ? "border-gray-700 hover:border-gray-600 hover:shadow-md"
                    : "border-gray-200 hover:border-gray-300 hover:shadow-md"
                } ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
                onClick={() => handleTrailChange(trail.id)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className={`text-lg font-bold transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      {trail.name}
                    </h3>
                    <p className={`text-sm mt-2 transition-colors duration-300 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      {trail.description}
                    </p>
                  </div>
                  {selectedTrailId === trail.id && (
                    <ChevronRight className="w-5 h-5 text-green-500" />
                  )}
                </div>
                <div className={`flex justify-between text-xs transition-colors duration-300 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                  <span>{trail.duration}</span>
                  <span>{trail.difficulty}</span>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Main Content (70%) */}
          <div className="lg:col-span-2 space-y-6 md:space-y-8">
            {/* Estágios */}
            <section>
              <h2 className={`font-display text-2xl font-bold mb-6 transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Estágios de Aprendizado
              </h2>
              <div className="space-y-4">
                {selectedTrail.stages.map((stage) => (
                  <Card
                    key={stage.id}
                    className={`p-6 transition-all duration-300 ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border hover:shadow-lg`}
                  >
                    <Link href={`/project/${stage.id}`}>
                      <div className="cursor-pointer">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className={`font-bold transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                            Estágio {stage.id}: {stage.title}
                          </h3>
                          <span className={`text-sm px-3 py-1 rounded-full transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>
                            {stage.difficulty}
                          </span>
                        </div>
                        <p className={`text-sm mb-4 transition-colors duration-300 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                          {stage.description}
                        </p>
                        <div className="flex items-center justify-between text-sm">
                          <span className={`transition-colors duration-300 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                            {stage.projects.length} projetos • {stage.concepts.length} conceitos
                          </span>
                          <ChevronRight className={`w-4 h-4 transition-colors duration-300 ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`} />
                        </div>
                      </div>
                    </Link>
                  </Card>
                ))}
              </div>
            </section>

            {/* Gráficos */}
            <section className="space-y-6">
              <h2 className={`font-display text-2xl font-bold transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Análise de Progresso
              </h2>

              {/* Progresso por Estágio */}
              <Card className={`p-6 transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border`}>
                <h3 className={`font-bold mb-4 transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Progresso por Estágio
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={progressData}>
                    <CartesianGrid strokeDasharray="3 3" stroke={theme === 'dark' ? '#374151' : '#e5e7eb'} />
                    <XAxis stroke={theme === 'dark' ? '#9ca3af' : '#6b7280'} />
                    <YAxis stroke={theme === 'dark' ? '#9ca3af' : '#6b7280'} />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: theme === 'dark' ? '#1f2937' : '#ffffff',
                        border: `1px solid ${theme === 'dark' ? '#374151' : '#e5e7eb'}`,
                        color: theme === 'dark' ? '#ffffff' : '#000000'
                      }}
                    />
                    <Legend />
                    <Bar dataKey="completed" fill="#3b82f6" />
                    <Bar dataKey="total" fill="#e5e7eb" />
                  </BarChart>
                </ResponsiveContainer>
              </Card>

              {/* Ritmo de Aprendizado */}
              <Card className={`p-6 transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border`}>
                <h3 className={`font-bold mb-4 transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Ritmo de Aprendizado Sugerido
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={learningPathData}>
                    <CartesianGrid strokeDasharray="3 3" stroke={theme === 'dark' ? '#374151' : '#e5e7eb'} />
                    <XAxis stroke={theme === 'dark' ? '#9ca3af' : '#6b7280'} />
                    <YAxis stroke={theme === 'dark' ? '#9ca3af' : '#6b7280'} />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: theme === 'dark' ? '#1f2937' : '#ffffff',
                        border: `1px solid ${theme === 'dark' ? '#374151' : '#e5e7eb'}`,
                        color: theme === 'dark' ? '#ffffff' : '#000000'
                      }}
                    />
                    <Legend />
                    <Line type="monotone" dataKey="concepts" stroke="#3b82f6" strokeWidth={2} />
                    <Line type="monotone" dataKey="projects" stroke="#10b981" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </Card>

              {/* Distribuição de Dificuldade */}
              <Card className={`p-6 transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border`}>
                <h3 className={`font-bold mb-4 transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Distribuição de Dificuldade
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={difficultyData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, value }) => `${name}: ${value}`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {difficultyData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: theme === 'dark' ? '#1f2937' : '#ffffff',
                        border: `1px solid ${theme === 'dark' ? '#374151' : '#e5e7eb'}`,
                        color: theme === 'dark' ? '#ffffff' : '#000000'
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </Card>
            </section>
          </div>

          {/* Sidebar (30%) */}
          <aside className="space-y-4 md:space-y-6">
            {/* Estatísticas */}
            <Card className={`p-6 transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border`}>
              <h3 className={`font-bold mb-4 transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Estatísticas
              </h3>
              <div className="space-y-4">
                <div>
                  <p className={`text-sm transition-colors duration-300 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    Progresso Geral
                  </p>
                  <p className={`text-2xl font-bold transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {Math.round(totalProgress)}%
                  </p>
                  <Progress value={totalProgress} className="mt-2" />
                </div>
                <div className={`border-t transition-colors duration-300 ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} pt-4`}>
                  <p className={`text-sm transition-colors duration-300 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    Total de Projetos
                  </p>
                  <p className={`text-2xl font-bold transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {totalProjects}
                  </p>
                </div>
                <div className={`border-t transition-colors duration-300 ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} pt-4`}>
                  <p className={`text-sm transition-colors duration-300 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    Total de Conceitos
                  </p>
                  <p className={`text-2xl font-bold transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {totalConcepts}
                  </p>
                </div>
              </div>
            </Card>

            {/* Streak */}
            <StreakDisplay />
          </aside>
        </div>
      </main>
    </div>
  );
}
