import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ChevronRight, Trophy, BookOpen, Moon, Sun } from "lucide-react";
import { useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { Link } from "wouter";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";
import StreakDisplay from "@/components/StreakDisplay";
import { allTrails, getIconByName } from "@/lib/roadmapData";

/**
 * Design Philosophy: Minimalismo Técnico com Acentos Vibrantes
 * - Paleta neutra (cinza, branco) com acentos em azul elétrico (#0066FF) e laranja (#FF8C42)
 * - Layout assimétrico: conteúdo principal (70%) + sidebar de progresso (30%)
 * - Tipografia em escala harmônica com Poppins Bold para títulos
 * - Roadmap visual com 3 trilhas de aprendizado progressivas
 */

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const [selectedTrailId, setSelectedTrailId] = useState<string>("java");
  const selectedTrail = allTrails.find((t) => t.id === selectedTrailId);

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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-40">
        <div className="container py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-display text-4xl text-gray-900">Caminho Profissional</h1>
              <p className="text-gray-600 mt-1">Prepare-se para conseguir seu primeiro emprego como desenvolvedor</p>
            </div>
            <div className="flex items-center gap-6">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
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
                <div className="text-3xl font-bold text-blue-600">{Math.round(totalProgress)}%</div>
                <p className="text-sm text-gray-600">Progresso Geral</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-12">
        {/* Trail Selector */}
        <section className="mb-12">
          <h2 className="font-display text-2xl text-gray-900 mb-6">Escolha sua Trilha de Aprendizado</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {allTrails.map((trail) => (
              <Card
                key={trail.id}
                className={`p-6 border-2 cursor-pointer transition-all duration-300 ${
                  selectedTrailId === trail.id
                    ? `border-[${trail.color}] bg-opacity-10 shadow-lg`
                    : "border-gray-200 hover:border-gray-300 hover:shadow-md"
                }`}
                onClick={() => setSelectedTrailId(trail.id)}
                style={
                  selectedTrailId === trail.id
                    ? { borderColor: trail.color, backgroundColor: trail.color + "10" }
                    : {}
                }
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{getIconByName(trail.iconName)}</div>
                  {selectedTrailId === trail.id && <div className="text-2xl">✓</div>}
                </div>
                <h3 className="font-semibold text-gray-900 text-lg mb-2">{trail.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{trail.description}</p>
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-gray-700">{trail.duration}</span>
                  <span className="px-2 py-1 rounded bg-gray-100 text-gray-700">{trail.difficulty}</span>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Roadmap */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hero Section */}
            <section className="relative overflow-hidden rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 p-12 border border-gray-200">
              <img src="/images/hero-java-learning.png" alt="Learning Journey" className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/2 opacity-80" />
              <div className="relative z-10 max-w-md">
                <h2 className="font-display text-3xl text-gray-900 mb-4">Sua Jornada Profissional</h2>
                <p className="text-gray-700 mb-6">Siga este roadmap estruturado para dominar as habilidades necessárias e conseguir seu primeiro emprego ou estágio como desenvolvedor.</p>
                <Link href={`/project/${selectedTrail.stages[0]?.projects[0]?.id}`}>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200">
                    Começar Agora <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </section>

            {/* Roadmap Timeline */}
            <section className="space-y-6">
              <h2 className="font-display text-2xl text-gray-900">Roadmap de {selectedTrail.name}</h2>

              {selectedTrail.stages.map((stage, index) => (
                <div key={stage.id} className="relative">
                  {/* Timeline Connector */}
                  {index < selectedTrail.stages.length - 1 && (
                    <div className="absolute left-6 top-20 w-0.5 h-12 bg-gradient-to-b from-gray-300 to-gray-100" />
                  )}

                  <Card className="p-6 border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start gap-4">
                        {/* Stage Number Circle */}
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center text-white flex-shrink-0 font-display text-lg"
                          style={{ backgroundColor: stage.color }}
                        >
                          {stage.id}
                        </div>

                        <div className="flex-1">
                          <div className="mb-2">
                            <h3 className="font-semibold text-gray-900 text-lg">{stage.title}</h3>
                            <p className="text-sm text-gray-600">{stage.description}</p>
                          </div>

                          <div className="flex items-center gap-4 mb-3">
                            <span
                              className={`text-xs font-semibold px-3 py-1 rounded-full ${
                                stage.difficulty === "Iniciante"
                                  ? "bg-green-100 text-green-700"
                                  : stage.difficulty === "Intermediário"
                                    ? "bg-yellow-100 text-yellow-700"
                                    : "bg-red-100 text-red-700"
                              }`}
                            >
                              {stage.difficulty}
                            </span>
                            <span className="text-xs text-gray-600 font-semibold">{stage.projects.length} projeto(s)</span>
                          </div>

                          {/* Concepts */}
                          <div className="mb-3">
                            <p className="text-xs font-semibold text-gray-700 mb-2">Conceitos:</p>
                            <div className="flex flex-wrap gap-2">
                              {stage.concepts.slice(0, 4).map((concept) => (
                                <span key={concept} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                                  {concept}
                                </span>
                              ))}
                              {stage.concepts.length > 4 && (
                                <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">+{stage.concepts.length - 4} mais</span>
                              )}
                            </div>
                          </div>

                          {/* Projects */}
                          <div className="space-y-2">
                            {stage.projects.map((project) => (
                              <div key={project.id} className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                                <Link href={`/project/${project.id}`} className="flex-1">
                                  <h5 className="font-medium text-gray-900 hover:text-blue-600 transition-colors">{project.name}</h5>
                                  <p className="text-sm text-gray-600">{project.description}</p>
                                </Link>
                                <Progress value={(project.completed / project.tasks) * 100} className="h-1.5 mt-2" />
                              </div>
                            ))}
                          </div>

                          <Link href={`/project/${stage.projects[0]?.id}`}>
                            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200 mt-4">
                              Começar Estágio {stage.id}
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </section>

            {/* Charts Section */}
            <div className="grid grid-cols-1 gap-8">
              {/* Progress by Stage */}
              <Card className="p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-6">Progresso por Estágio</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={progressData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="stage" stroke="#6b7280" />
                    <YAxis stroke="#6b7280" />
                    <Tooltip contentStyle={{ backgroundColor: "#f3f4f6", border: "1px solid #e5e7eb" }} />
                    <Legend />
                    <Bar dataKey="completed" fill="#0066FF" name="Concluídas" radius={[8, 8, 0, 0]} />
                    <Bar dataKey="total" fill="#d3d3d3" name="Total" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </Card>

              {/* Learning Pace */}
              <Card className="p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-6">Ritmo de Aprendizado Sugerido</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={learningPathData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="week" stroke="#6b7280" />
                    <YAxis stroke="#6b7280" />
                    <Tooltip contentStyle={{ backgroundColor: "#f3f4f6", border: "1px solid #e5e7eb" }} />
                    <Legend />
                    <Line type="monotone" dataKey="concepts" stroke="#0066FF" strokeWidth={3} name="Conceitos por Semana" dot={{ fill: "#0066FF", r: 5 }} />
                    <Line type="monotone" dataKey="projects" stroke="#FF8C42" strokeWidth={3} name="Projetos por Semana" dot={{ fill: "#FF8C42", r: 5 }} />
                  </LineChart>
                </ResponsiveContainer>
              </Card>

              {/* Difficulty Distribution */}
              <Card className="p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-6">Distribuição de Dificuldade</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie data={difficultyData} cx="50%" cy="50%" labelLine={false} label={({ name, value }) => `${name}: ${value}`} outerRadius={100} fill="#8884d8" dataKey="value">
                      {difficultyData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </Card>
            </div>
          </div>

          {/* Right Sidebar - Progress Tracker */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Streak Display */}
              <StreakDisplay />

              {/* Progress Overview */}
              <Card className="p-6 border border-gray-200 bg-gradient-to-br from-blue-50 to-blue-100">
                <h3 className="font-semibold text-gray-900 mb-4">Progresso Geral</h3>
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
                    <circle cx="60" cy="60" r="54" fill="none" stroke="#e5e7eb" strokeWidth="8" />
                    <circle
                      cx="60"
                      cy="60"
                      r="54"
                      fill="none"
                      stroke="#0066FF"
                      strokeWidth="8"
                      strokeDasharray={`${(totalProgress / 100) * 339.3} 339.3`}
                      strokeLinecap="round"
                      className="transition-all duration-500"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="font-display text-3xl text-blue-600">{Math.round(totalProgress)}%</div>
                      <p className="text-xs text-gray-600">Completo</p>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 text-center">0 de {progressData.reduce((acc, d) => acc + d.total, 0)} tarefas</p>
              </Card>

              {/* Statistics */}
              <Card className="p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4">Estatísticas</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">Trilhas</span>
                    <span className="font-semibold text-gray-900">{allTrails.length}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">Estágios</span>
                    <span className="font-semibold text-gray-900">{selectedTrail.stages.length}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">Projetos</span>
                    <span className="font-semibold text-gray-900">{totalProjects}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">Conceitos</span>
                    <span className="font-semibold text-gray-900">{totalConcepts}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">Tempo Estimado</span>
                    <span className="font-semibold text-gray-900">{selectedTrail.duration}</span>
                  </div>
                </div>
              </Card>

              {/* Difficulty Breakdown */}
              <Card className="p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4">Por Nível</h3>
                <div className="space-y-3">
                  {difficultyData.map((d) => (
                    <div key={d.name} className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: d.color }} />
                      <span className="text-sm text-gray-700">{d.name}: {d.value} estágio(s)</span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Next Steps */}
              <Card className="p-6 border border-gray-200 bg-orange-50">
                <h3 className="font-semibold text-gray-900 mb-4">Próximos Passos</h3>
                <ol className="space-y-3 text-sm text-gray-700">
                  <li className="flex gap-3">
                    <span className="font-semibold text-orange-600 flex-shrink-0">1.</span>
                    <span>Escolha uma trilha acima</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-semibold text-orange-600 flex-shrink-0">2.</span>
                    <span>Comece pelo primeiro estágio</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-semibold text-orange-600 flex-shrink-0">3.</span>
                    <span>Complete os projetos em ordem</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-semibold text-orange-600 flex-shrink-0">4.</span>
                    <span>Acompanhe seu progresso</span>
                  </li>
                </ol>
              </Card>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
