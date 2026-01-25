import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ChevronRight, Code2, GitBranch, Layers, CheckCircle2, Clock, Lock } from "lucide-react";
import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from "recharts";

/**
 * Design Philosophy: Minimalismo Técnico com Acentos Vibrantes
 * - Paleta neutra (cinza, branco) com acentos em azul elétrico (#0066FF) e laranja (#FF8C42)
 * - Layout assimétrico: conteúdo principal (70%) + sidebar de progresso (30%)
 * - Tipografia em escala harmônica com Poppins Bold para títulos
 * - Indicadores circulares de progresso (mais elegantes que barras)
 * - Transições suaves de 200ms em todos os elementos
 */

interface Project {
  id: number;
  title: string;
  description: string;
  stage: number;
  concepts: string[];
  tasks: number;
  completed: number;
  difficulty: "Iniciante" | "Intermediário" | "Avançado";
  icon: React.ReactNode;
}

interface ProgressData {
  stage: string;
  completed: number;
  total: number;
}

export default function Home() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Sistema de Cadastro Simples",
      description: "Crie classes que representam entidades do mundo real e aplique encapsulamento básico.",
      stage: 1,
      concepts: ["Classes", "Objetos", "Encapsulamento", "Construtores", "Getters/Setters"],
      tasks: 4,
      completed: 0,
      difficulty: "Iniciante",
      icon: <Code2 className="w-8 h-8" />,
    },
    {
      id: 2,
      title: "Sistema de Gerenciamento de Funcionários",
      description: "Aplique Herança e Polimorfismo para gerenciar diferentes tipos de funcionários.",
      stage: 2,
      concepts: ["Herança", "Polimorfismo", "Sobrescrita de Métodos", "@Override", "ArrayList"],
      tasks: 3,
      completed: 0,
      difficulty: "Intermediário",
      icon: <GitBranch className="w-8 h-8" />,
    },
    {
      id: 3,
      title: "Simulador de Formas Geométricas",
      description: "Aplique Abstração e Interfaces para calcular áreas de diferentes formas.",
      stage: 3,
      concepts: ["Interfaces", "Classes Abstratas", "Coleções", "Exceções", "Polimorfismo Avançado"],
      tasks: 4,
      completed: 0,
      difficulty: "Avançado",
      icon: <Layers className="w-8 h-8" />,
    },
  ];

  const progressData: ProgressData[] = [
    { stage: "Estágio 1", completed: 0, total: 4 },
    { stage: "Estágio 2", completed: 0, total: 3 },
    { stage: "Estágio 3", completed: 0, total: 4 },
  ];

  const learningPathData = [
    { week: "Semana 1", concepts: 3, projects: 0 },
    { week: "Semana 2", concepts: 5, projects: 1 },
    { week: "Semana 3", concepts: 4, projects: 1 },
    { week: "Semana 4", concepts: 5, projects: 2 },
    { week: "Semana 5", concepts: 6, projects: 2 },
  ];

  const totalProgress = (progressData.reduce((acc, d) => acc + d.completed, 0) / progressData.reduce((acc, d) => acc + d.total, 0)) * 100;

  const getStatusIcon = (completed: number, total: number) => {
    if (completed === total) return <CheckCircle2 className="w-5 h-5 text-green-600" />;
    if (completed > 0) return <Clock className="w-5 h-5 text-blue-600" />;
    return <Lock className="w-5 h-5 text-gray-400" />;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-40">
        <div className="container py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-display text-4xl text-gray-900">Java Learning Path</h1>
              <p className="text-gray-600 mt-1">Roteiro Progressivo para Iniciantes em POO</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-blue-600">{Math.round(totalProgress)}%</div>
              <p className="text-sm text-gray-600">Progresso Geral</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Projects */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hero Section */}
            <section className="relative overflow-hidden rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 p-12 border border-gray-200">
              <img src="/images/hero-java-learning.png" alt="Java Learning Journey" className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/2 opacity-80" />
              <div className="relative z-10 max-w-md">
                <h2 className="font-display text-3xl text-gray-900 mb-4">Comece sua Jornada em POO</h2>
                <p className="text-gray-700 mb-6">Três estágios progressivos com projetos práticos para dominar os pilares da Programação Orientada a Objetos em Java.</p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200">
                  Começar Agora <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </section>

            {/* OOP Concepts Visual */}
            <section className="rounded-lg bg-gray-50 p-8 border border-gray-200">
              <h3 className="font-display text-2xl text-gray-900 mb-6">Conceitos Fundamentais de POO</h3>
              <img src="/images/oop-concepts-visual.png" alt="OOP Concepts" className="w-full rounded-lg" />
            </section>

            {/* Projects Section */}
            <section className="space-y-6">
              <h2 className="font-display text-2xl text-gray-900">Projetos e Desafios</h2>

              {projects.map((project, index) => (
                <Card
                  key={project.id}
                  className="p-6 border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer"
                  onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">{project.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="font-display text-3xl text-blue-600">{project.id}</span>
                          <div>
                            <h3 className="font-semibold text-gray-900 text-lg">{project.title}</h3>
                            <p className="text-sm text-gray-600">Estágio {project.stage}</p>
                          </div>
                        </div>
                        <p className="text-gray-700 text-sm mb-3">{project.description}</p>
                        <div className="flex items-center gap-4 mb-3">
                          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${project.difficulty === "Iniciante" ? "bg-green-100 text-green-700" : project.difficulty === "Intermediário" ? "bg-yellow-100 text-yellow-700" : "bg-red-100 text-red-700"}`}>
                            {project.difficulty}
                          </span>
                          <span className="text-xs text-gray-600">{project.completed} de {project.tasks} tarefas</span>
                        </div>
                        <Progress value={(project.completed / project.tasks) * 100} className="h-2" />
                      </div>
                    </div>
                    <div className="flex-shrink-0">{getStatusIcon(project.completed, project.tasks)}</div>
                  </div>

                  {expandedProject === project.id && (
                    <div className="mt-6 pt-6 border-t border-gray-200 space-y-4 animate-in fade-in duration-200">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Conceitos Abordados:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.concepts.map((concept) => (
                            <span key={concept} className="text-xs font-mono bg-gray-200 text-gray-800 px-3 py-1 rounded">
                              {concept}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Tarefas:</h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                          {project.id === 1 && (
                            <>
                              <li>✓ Implementação de Construtores</li>
                              <li>✓ Encapsulamento</li>
                              <li>✓ Métodos de Acesso (Getters/Setters)</li>
                              <li>✓ Métodos de Comportamento</li>
                            </>
                          )}
                          {project.id === 2 && (
                            <>
                              <li>✓ Implementação de Herança</li>
                              <li>✓ Sobrescrita Polimórfica</li>
                              <li>✓ Teste de Polimorfismo</li>
                            </>
                          )}
                          {project.id === 3 && (
                            <>
                              <li>✓ Implementação de Interface e Abstração</li>
                              <li>✓ Uso de Coleções</li>
                              <li>✓ Iteração e Polimorfismo Avançado</li>
                              <li>✓ Tratamento de Exceções</li>
                            </>
                          )}
                        </ul>
                      </div>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200 mt-4">
                        Ver Detalhes Completos
                      </Button>
                    </div>
                  )}
                </Card>
              ))}
            </section>

            {/* Learning Path Stages */}
            <section className="rounded-lg bg-gray-50 p-8 border border-gray-200">
              <h3 className="font-display text-2xl text-gray-900 mb-6">Estágios de Aprendizado</h3>
              <img src="/images/progress-stages-visual.png" alt="Learning Stages" className="w-full rounded-lg" />
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
                <h3 className="font-semibold text-gray-900 mb-6">Ritmo de Aprendizado (Últimas 5 Semanas)</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={learningPathData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="week" stroke="#6b7280" />
                    <YAxis stroke="#6b7280" />
                    <Tooltip contentStyle={{ backgroundColor: "#f3f4f6", border: "1px solid #e5e7eb" }} />
                    <Legend />
                    <Line type="monotone" dataKey="concepts" stroke="#0066FF" strokeWidth={3} name="Conceitos Estudados" dot={{ fill: "#0066FF", r: 5 }} />
                    <Line type="monotone" dataKey="projects" stroke="#FF8C42" strokeWidth={3} name="Projetos Concluídos" dot={{ fill: "#FF8C42", r: 5 }} />
                  </LineChart>
                </ResponsiveContainer>
              </Card>
            </div>
          </div>

          {/* Right Sidebar - Progress Tracker */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Overall Progress */}
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
                <p className="text-sm text-gray-700 text-center">0 de 11 tarefas concluídas</p>
              </Card>

              {/* Stage Breakdown */}
              <Card className="p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4">Por Estágio</h3>
                <div className="space-y-4">
                  {progressData.map((stage) => (
                    <div key={stage.stage} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700">{stage.stage}</span>
                        <span className="text-xs text-gray-600">
                          {stage.completed}/{stage.total}
                        </span>
                      </div>
                      <Progress value={(stage.completed / stage.total) * 100} className="h-2" />
                    </div>
                  ))}
                </div>
              </Card>

              {/* Key Concepts */}
              <Card className="p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4">Conceitos-Chave</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    <span className="text-sm text-gray-700">Classes e Objetos</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    <span className="text-sm text-gray-700">Encapsulamento</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    <span className="text-sm text-gray-700">Herança</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    <span className="text-sm text-gray-700">Polimorfismo</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    <span className="text-sm text-gray-700">Abstração</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    <span className="text-sm text-gray-700">Interfaces</span>
                  </div>
                </div>
              </Card>

              {/* Next Steps */}
              <Card className="p-6 border border-gray-200 bg-orange-50">
                <h3 className="font-semibold text-gray-900 mb-4">Próximos Passos</h3>
                <ol className="space-y-3 text-sm text-gray-700">
                  <li className="flex gap-3">
                    <span className="font-semibold text-orange-600 flex-shrink-0">1.</span>
                    <span>Estude o Projeto 1: Sistema de Cadastro</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-semibold text-orange-600 flex-shrink-0">2.</span>
                    <span>Implemente as classes Pessoa e ContaBancaria</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-semibold text-orange-600 flex-shrink-0">3.</span>
                    <span>Teste seus métodos com uma classe Main</span>
                  </li>
                </ol>
              </Card>
            </div>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50 mt-16">
        <div className="container py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Sobre</h4>
              <p className="text-sm text-gray-600">Um roteiro completo para aprender Programação Orientada a Objetos em Java, focado em melhores práticas e aplicação prática.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Recursos</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-blue-600 transition-colors">
                    Documentação Java
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 transition-colors">
                    Exemplos de Código
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 transition-colors">
                    Referências POO
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Contato</h4>
              <p className="text-sm text-gray-600">Dúvidas ou sugestões? Compartilhe seu feedback para melhorar este roteiro de aprendizado.</p>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
            <p>&copy; 2026 Java Learning Path. Desenvolvido com foco em educação e melhores práticas.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
