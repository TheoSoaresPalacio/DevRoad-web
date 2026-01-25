import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ChevronRight, Code2, GitBranch, Layers, CheckCircle2, Clock, Lock, Zap, Database, Settings, BookOpen } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";

/**
 * Design Philosophy: Minimalismo Técnico com Acentos Vibrantes
 * - Paleta neutra (cinza, branco) com acentos em azul elétrico (#0066FF) e laranja (#FF8C42)
 * - Layout assimétrico: conteúdo principal (70%) + sidebar de progresso (30%)
 * - Tipografia em escala harmônica com Poppins Bold para títulos
 * - Roadmap visual com 7 estágios de aprendizado progressivos
 */

interface Stage {
  id: number;
  title: string;
  description: string;
  difficulty: "Iniciante" | "Intermediário" | "Avançado";
  concepts: string[];
  projects: Project[];
  color: string;
  icon: React.ReactNode;
}

interface Project {
  id: string;
  name: string;
  description: string;
  tasks: number;
  completed: number;
}

interface ProgressData {
  stage: string;
  completed: number;
  total: number;
}

export default function Home() {
  const [expandedStage, setExpandedStage] = useState<number | null>(0);
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const stages: Stage[] = [
    {
      id: 0,
      title: "Fundamentos Essenciais",
      description: "Compreenda a sintaxe básica de Java, tipos de dados, variáveis e operadores.",
      difficulty: "Iniciante",
      concepts: ["Tipos de Dados", "Variáveis", "Operadores Aritméticos", "Operadores Lógicos"],
      projects: [
        {
          id: "0.1",
          name: "Calculadora Simples",
          description: "Crie um programa que realiza operações aritméticas básicas.",
          tasks: 4,
          completed: 0,
        },
      ],
      color: "#0066FF",
      icon: <Zap className="w-8 h-8" />,
    },
    {
      id: 1,
      title: "Estruturas de Controle",
      description: "Controle o fluxo de execução usando condicionais e loops.",
      difficulty: "Iniciante",
      concepts: ["if-else", "switch-case", "for", "while", "do-while", "break/continue"],
      projects: [
        {
          id: "1.1",
          name: "Jogo de Adivinhação",
          description: "Crie um jogo onde o usuário tenta adivinhar um número.",
          tasks: 4,
          completed: 0,
        },
        {
          id: "1.2",
          name: "Tabuada Interativa",
          description: "Exiba a tabuada de um número escolhido pelo usuário.",
          tasks: 4,
          completed: 0,
        },
      ],
      color: "#FF8C42",
      icon: <Code2 className="w-8 h-8" />,
    },
    {
      id: 2,
      title: "Arrays e Strings",
      description: "Trabalhe com coleções de dados e manipulação de texto.",
      difficulty: "Iniciante",
      concepts: ["Arrays", "Loops sobre Arrays", "Strings", "Métodos de String", "Comparação"],
      projects: [
        {
          id: "2.1",
          name: "Gerenciador de Notas",
          description: "Armazene e calcule a média de notas de alunos.",
          tasks: 5,
          completed: 0,
        },
        {
          id: "2.2",
          name: "Manipulador de Strings",
          description: "Realize operações com strings (inversão, palíndromo, etc).",
          tasks: 4,
          completed: 0,
        },
      ],
      color: "#0052CC",
      icon: <Database className="w-8 h-8" />,
    },
    {
      id: 3,
      title: "Métodos e Funções",
      description: "Crie e reutilize código através de métodos modulares.",
      difficulty: "Intermediário",
      concepts: ["Declaração de Métodos", "Parâmetros", "Retorno", "Sobrecarga", "Recursão"],
      projects: [
        {
          id: "3.1",
          name: "Biblioteca de Funções Matemáticas",
          description: "Crie métodos para operações matemáticas (fatorial, fibonacci, etc).",
          tasks: 5,
          completed: 0,
        },
        {
          id: "3.2",
          name: "Sistema de Validação",
          description: "Implemente validadores para email, senha, CPF e data.",
          tasks: 4,
          completed: 0,
        },
      ],
      color: "#003D99",
      icon: <Settings className="w-8 h-8" />,
    },
    {
      id: 4,
      title: "POO Básica - Encapsulamento",
      description: "Entenda classes, objetos e o princípio de encapsulamento.",
      difficulty: "Intermediário",
      concepts: ["Classes", "Objetos", "Atributos", "Métodos", "Construtores", "Getters/Setters"],
      projects: [
        {
          id: "4.1",
          name: "Sistema de Cadastro Simples",
          description: "Crie classes Pessoa e ContaBancaria com encapsulamento.",
          tasks: 4,
          completed: 0,
        },
      ],
      color: "#002966",
      icon: <BookOpen className="w-8 h-8" />,
    },
    {
      id: 5,
      title: "POO Intermediária - Herança e Polimorfismo",
      description: "Reutilize código através de herança e crie hierarquias de classes.",
      difficulty: "Intermediário",
      concepts: ["Herança", "Sobrescrita", "@Override", "Polimorfismo", "ArrayList"],
      projects: [
        {
          id: "5.1",
          name: "Sistema de Gerenciamento de Funcionários",
          description: "Gerencie diferentes tipos de funcionários com herança.",
          tasks: 3,
          completed: 0,
        },
      ],
      color: "#0066FF",
      icon: <GitBranch className="w-8 h-8" />,
    },
    {
      id: 6,
      title: "POO Avançada - Abstração e Interfaces",
      description: "Aplique abstração, interfaces e coleções avançadas.",
      difficulty: "Avançado",
      concepts: ["Interfaces", "Classes Abstratas", "Coleções", "Exceções", "Polimorfismo Avançado"],
      projects: [
        {
          id: "6.1",
          name: "Simulador de Formas Geométricas",
          description: "Implemente formas com interfaces e classes abstratas.",
          tasks: 4,
          completed: 0,
        },
      ],
      color: "#FF8C42",
      icon: <Layers className="w-8 h-8" />,
    },
  ];

  const progressData: ProgressData[] = stages.map((stage) => ({
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

  const difficultyData = [
    { name: "Iniciante", value: 3, color: "#0066FF" },
    { name: "Intermediário", value: 3, color: "#FF8C42" },
    { name: "Avançado", value: 1, color: "#0052CC" },
  ];

  const totalProgress = (progressData.reduce((acc, d) => acc + d.completed, 0) / progressData.reduce((acc, d) => acc + d.total, 0)) * 100;
  const totalProjects = stages.reduce((acc, s) => acc + s.projects.length, 0);
  const totalConcepts = stages.reduce((acc, s) => acc + s.concepts.length, 0);

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
              <h1 className="font-display text-4xl text-gray-900">Java Complete Roadmap</h1>
              <p className="text-gray-600 mt-1">Do Básico ao Avançado - Programação Orientada a Objetos</p>
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
          {/* Left Column - Roadmap */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hero Section */}
            <section className="relative overflow-hidden rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 p-12 border border-gray-200">
              <img src="/images/hero-java-learning.png" alt="Java Learning Journey" className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/2 opacity-80" />
              <div className="relative z-10 max-w-md">
                <h2 className="font-display text-3xl text-gray-900 mb-4">Sua Jornada Completa em Java</h2>
                <p className="text-gray-700 mb-6">Sete estágios progressivos que levam você do zero ao domínio de Programação Orientada a Objetos. Comece agora e acompanhe seu progresso!</p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200">
                  Começar do Estágio 0 <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </section>

            {/* Roadmap Timeline */}
            <section className="space-y-6">
              <h2 className="font-display text-2xl text-gray-900">Roadmap de Aprendizado</h2>

              {stages.map((stage, index) => (
                <div key={stage.id} className="relative">
                  {/* Timeline Connector */}
                  {index < stages.length - 1 && (
                    <div className="absolute left-6 top-20 w-0.5 h-12 bg-gradient-to-b from-gray-300 to-gray-100" />
                  )}

                  <Card
                    className="p-6 border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer relative z-10"
                    onClick={() => setExpandedStage(expandedStage === stage.id ? null : stage.id)}
                  >
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
                            <span className="text-xs text-gray-600">{stage.projects.length} projeto(s)</span>
                          </div>

                          {/* Concepts Tags */}
                          <div className="flex flex-wrap gap-2 mb-3">
                            {stage.concepts.slice(0, 3).map((concept) => (
                              <span key={concept} className="text-xs font-mono bg-gray-100 text-gray-700 px-2 py-1 rounded">
                                {concept}
                              </span>
                            ))}
                            {stage.concepts.length > 3 && (
                              <span className="text-xs text-gray-500 px-2 py-1">+{stage.concepts.length - 3} mais</span>
                            )}
                          </div>

                          {/* Progress Bar */}
                          <div className="flex items-center gap-2">
                            <Progress
                              value={
                                (stage.projects.reduce((acc, p) => acc + p.completed, 0) /
                                  stage.projects.reduce((acc, p) => acc + p.tasks, 0)) *
                                100
                              }
                              className="h-2 flex-1"
                            />
                            <span className="text-xs text-gray-600 whitespace-nowrap">
                              {stage.projects.reduce((acc, p) => acc + p.completed, 0)}/{stage.projects.reduce((acc, p) => acc + p.tasks, 0)}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex-shrink-0">
                        {getStatusIcon(
                          stage.projects.reduce((acc, p) => acc + p.completed, 0),
                          stage.projects.reduce((acc, p) => acc + p.tasks, 0)
                        )}
                      </div>
                    </div>

                    {/* Expanded Content */}
                    {expandedStage === stage.id && (
                      <div className="mt-6 pt-6 border-t border-gray-200 space-y-4 animate-in fade-in duration-200">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Conceitos Abordados:</h4>
                          <div className="flex flex-wrap gap-2">
                            {stage.concepts.map((concept) => (
                              <span key={concept} className="text-xs font-mono bg-gray-200 text-gray-800 px-3 py-1 rounded">
                                {concept}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Projetos:</h4>
                          <div className="space-y-3">
                            {stage.projects.map((project) => (
                              <div
                                key={project.id}
                                className="p-4 bg-gray-50 rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-100 transition-colors"
                                onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                              >
                                <div className="flex items-start justify-between mb-2">
                          <Link href={`/project/${project.id}`} className="flex-1">
                            <h5 className="font-medium text-gray-900 hover:text-blue-600 transition-colors">{project.name}</h5>
                            <p className="text-sm text-gray-600">{project.description}</p>
                          </Link>
                          <span className="text-xs text-gray-600 whitespace-nowrap ml-2">
                            {project.completed}/{project.tasks}
                          </span>
                        </div>
                        <Progress value={(project.completed / project.tasks) * 100} className="h-1.5" />
                              </div>
                            ))}
                          </div>
                        </div>

                        <Link href={`/project/${stage.projects[0]?.id}`}>
                          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200 mt-4">
                            Começar Estágio {stage.id}
                          </Button>
                        </Link>
                      </div>
                    )}
                  </Card>
                </div>
              ))}
            </section>

            {/* OOP Concepts Visual */}
            <section className="rounded-lg bg-gray-50 p-8 border border-gray-200">
              <h3 className="font-display text-2xl text-gray-900 mb-6">Conceitos Fundamentais de POO</h3>
              <img src="/images/oop-concepts-visual.png" alt="OOP Concepts" className="w-full rounded-lg" />
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
                <h3 className="font-semibold text-gray-900 mb-6">Ritmo de Aprendizado (Sugestão de 7 Semanas)</h3>
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
                    <Pie data={difficultyData} cx="50%" cy="50%" labelLine={false} label={({ name, value }) => `${name}: ${value}`} outerRadius={80} fill="#8884d8" dataKey="value">
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
                <p className="text-sm text-gray-700 text-center">0 de {progressData.reduce((acc, d) => acc + d.total, 0)} tarefas</p>
              </Card>

              {/* Statistics */}
              <Card className="p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4">Estatísticas</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">Estágios</span>
                    <span className="font-semibold text-gray-900">{stages.length}</span>
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
                    <span className="font-semibold text-gray-900">7-10 semanas</span>
                  </div>
                </div>
              </Card>

              {/* Difficulty Breakdown */}
              <Card className="p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4">Por Nível</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="text-sm text-gray-700">Iniciante: 3 estágios</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <span className="text-sm text-gray-700">Intermediário: 3 estágios</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <span className="text-sm text-gray-700">Avançado: 1 estágio</span>
                  </div>
                </div>
              </Card>

              {/* Key Milestones */}
              <Card className="p-6 border border-gray-200 bg-orange-50">
                <h3 className="font-semibold text-gray-900 mb-4">Próximos Passos</h3>
                <ol className="space-y-3 text-sm text-gray-700">
                  <li className="flex gap-3">
                    <span className="font-semibold text-orange-600 flex-shrink-0">1.</span>
                    <span>Comece pelo Estágio 0: Fundamentos</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-semibold text-orange-600 flex-shrink-0">2.</span>
                    <span>Complete a Calculadora Simples</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-semibold text-orange-600 flex-shrink-0">3.</span>
                    <span>Progresse para Estruturas de Controle</span>
                  </li>
                </ol>
              </Card>

              {/* Learning Tips */}
              <Card className="p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4">💡 Dicas</h3>
                <ul className="space-y-2 text-xs text-gray-700">
                  <li>• Pratique cada conceito antes de avançar</li>
                  <li>• Modifique os exemplos de código</li>
                  <li>• Crie seus próprios projetos</li>
                  <li>• Revise conceitos anteriores regularmente</li>
                </ul>
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
              <p className="text-sm text-gray-600">Um roadmap completo para aprender Java do zero, progredindo desde fundamentos até Programação Orientada a Objetos avançada.</p>
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
              <h4 className="font-semibold text-gray-900 mb-3">Comunidade</h4>
              <p className="text-sm text-gray-600">Junte-se a outros aprendizes, compartilhe dúvidas e celebre suas conquistas na jornada de aprendizado em Java.</p>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
            <p>&copy; 2026 Java Complete Roadmap. Desenvolvido com foco em educação e melhores práticas.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
