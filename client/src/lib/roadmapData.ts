import React from "react";
import { Zap, Code2, Database, Settings, BookOpen, GitBranch, Layers, Globe, Users, Headphones, FileText, Briefcase, Calculator, TrendingUp, Palette, Workflow } from "lucide-react";

export interface Project {
  id: string;
  name: string;
  description: string;
  tasks: number;
  completed: number;
}

export interface Stage {
  id: number;
  title: string;
  description: string;
  difficulty: "Iniciante" | "Intermediário" | "Avançado";
  concepts: string[];
  projects: Project[];
  color: string;
  iconName: string;
}

export interface Trail {
  id: string;
  name: string;
  description: string;
  duration: string;
  difficulty: string;
  iconName: string;
  color: string;
  stages: Stage[];
}

// TRILHA 1: JAVA & POO
export const javaTrail: Trail = {
  id: "java",
  name: "Java & Programação Orientada a Objetos",
  description: "Domine Java desde o básico até conceitos avançados de POO",
  duration: "7-10 semanas",
  difficulty: "Iniciante → Avançado",
  color: "#0066FF",
  iconName: "Code2",
  stages: [
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
        {
          id: "0.2",
          name: "Conversor de Temperaturas",
          description: "Converta entre Celsius, Fahrenheit e Kelvin.",
          tasks: 3,
          completed: 0,
        },
      ],
      color: "#0066FF",
      iconName: "Zap",
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
      iconName: "Code2",
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
      iconName: "Database",
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
      iconName: "Settings",
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
      iconName: "BookOpen",
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
      iconName: "GitBranch",
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
      iconName: "Layers",
    },
  ],
};

// TRILHA 2: BACK-END PROFISSIONAL
export const backendTrail: Trail = {
  id: "backend",
  name: "Back-End Profissional",
  description: "Desenvolva habilidades para conseguir seu primeiro emprego como desenvolvedor back-end",
  duration: "8-12 semanas",
  difficulty: "Intermediário → Avançado",
  color: "#FF6B35",
  iconName: "Briefcase",
  stages: [
    {
      id: 8,
      title: "Git e Controle de Versão",
      description: "Domine versionamento de código com Git e GitHub",
      difficulty: "Intermediário",
      concepts: ["Git Basics", "Commits", "Branches", "Merge", "GitHub", "Pull Requests"],
      projects: [
        {
          id: "8.1",
          name: "Repositório Pessoal",
          description: "Crie seu primeiro repositório e configure Git",
          tasks: 4,
          completed: 0,
        },
        {
          id: "8.2",
          name: "Contribuição Open-Source",
          description: "Contribua em um projeto open-source no GitHub",
          tasks: 3,
          completed: 0,
        },
      ],
      color: "#FF6B35",
      iconName: "GitBranch",
    },
    {
      id: 9,
      title: "Banco de Dados Relacional",
      description: "Projete e gerencie bancos de dados com SQL",
      difficulty: "Intermediário",
      concepts: ["Modelagem", "SQL", "Relacionamentos", "Normalização", "Índices", "Queries"],
      projects: [
        {
          id: "9.1",
          name: "Banco de Dados E-commerce",
          description: "Crie um banco de dados completo para e-commerce",
          tasks: 5,
          completed: 0,
        },
        {
          id: "9.2",
          name: "Sistema de Biblioteca",
          description: "Implemente um sistema de gerenciamento de biblioteca",
          tasks: 4,
          completed: 0,
        },
      ],
      color: "#FFA500",
      iconName: "Database",
    },
    {
      id: 10,
      title: "JDBC e Persistência",
      description: "Conecte Java com bancos de dados usando JDBC",
      difficulty: "Intermediário",
      concepts: ["JDBC", "Connection Pool", "DAO Pattern", "Transações", "Prepared Statements"],
      projects: [
        {
          id: "10.1",
          name: "Aplicação CRUD com JDBC",
          description: "Crie uma aplicação CRUD completa com JDBC",
          tasks: 5,
          completed: 0,
        },
        {
          id: "10.2",
          name: "Sistema de Vendas",
          description: "Implemente um sistema de vendas com persistência",
          tasks: 4,
          completed: 0,
        },
      ],
      color: "#FF8C42",
      iconName: "Database",
    },
    {
      id: 11,
      title: "APIs REST com Spring Boot",
      description: "Crie serviços web profissionais com Spring Boot",
      difficulty: "Avançado",
      concepts: ["REST", "Spring Boot", "Spring Data JPA", "Endpoints", "JSON", "HTTP Methods"],
      projects: [
        {
          id: "11.1",
          name: "API de Blog",
          description: "Crie uma API REST completa para um blog",
          tasks: 5,
          completed: 0,
        },
        {
          id: "11.2",
          name: "API de E-commerce",
          description: "Implemente uma API de e-commerce com Spring Boot",
          tasks: 5,
          completed: 0,
        },
      ],
      color: "#0066FF",
      iconName: "Code2",
    },
    {
      id: 12,
      title: "Autenticação e Autorização",
      description: "Implemente segurança com JWT e Spring Security",
      difficulty: "Avançado",
      concepts: ["JWT", "OAuth2", "Spring Security", "Roles", "Criptografia", "Permissões"],
      projects: [
        {
          id: "12.1",
          name: "Sistema de Login",
          description: "Crie um sistema de autenticação com JWT",
          tasks: 4,
          completed: 0,
        },
        {
          id: "12.2",
          name: "API com Autenticação",
          description: "Adicione autenticação a uma API existente",
          tasks: 3,
          completed: 0,
        },
      ],
      color: "#003D99",
      iconName: "Settings",
    },
    {
      id: 13,
      title: "Deploy e DevOps Básico",
      description: "Coloque sua aplicação em produção",
      difficulty: "Avançado",
      concepts: ["Docker", "CI/CD", "Variáveis de Ambiente", "Logs", "Monitoramento", "Cloud"],
      projects: [
        {
          id: "13.1",
          name: "Containerizar Aplicação",
          description: "Crie um Dockerfile para sua aplicação",
          tasks: 3,
          completed: 0,
        },
        {
          id: "13.2",
          name: "Deploy em Nuvem",
          description: "Faça deploy em Heroku ou AWS",
          tasks: 4,
          completed: 0,
        },
      ],
      color: "#0052CC",
      iconName: "Layers",
    },
    {
      id: 14,
      title: "Testes Unitários e Integração",
      description: "Garanta qualidade com testes automatizados",
      difficulty: "Avançado",
      concepts: ["JUnit", "Mockito", "Testes Unitários", "Testes de Integração", "TDD", "Cobertura"],
      projects: [
        {
          id: "14.1",
          name: "Testar API REST",
          description: "Implemente testes para uma API",
          tasks: 4,
          completed: 0,
        },
        {
          id: "14.2",
          name: "Aumentar Cobertura",
          description: "Atinja 80% de cobertura de testes",
          tasks: 3,
          completed: 0,
        },
      ],
      color: "#002966",
      iconName: "BookOpen",
    },
    {
      id: 15,
      title: "Padrões e Arquitetura",
      description: "Escreva código profissional e escalável",
      difficulty: "Avançado",
      concepts: ["Design Patterns", "SOLID", "Clean Architecture", "MVC", "Refatoração"],
      projects: [
        {
          id: "15.1",
          name: "Refatorar Projeto",
          description: "Refatore um projeto anterior com padrões",
          tasks: 4,
          completed: 0,
        },
        {
          id: "15.2",
          name: "Arquitetura Escalável",
          description: "Crie uma arquitetura profissional",
          tasks: 3,
          completed: 0,
        },
      ],
      color: "#FF8C42",
      iconName: "Layers",
    },
  ],
};

// TRILHA 3: INGLÊS PARA PROGRAMADORES
export const englishTrail: Trail = {
  id: "english",
  name: "Inglês para Programadores",
  description: "Domine inglês técnico para comunicação profissional",
  duration: "12+ semanas (contínuo)",
  difficulty: "Iniciante → Avançado",
  color: "#00B4D8",
  iconName: "Globe",
  stages: [
    {
      id: 16,
      title: "Fundamentos de Inglês",
      description: "Construa uma base sólida de inglês geral",
      difficulty: "Iniciante",
      concepts: ["Alfabeto", "Pronúncia", "Present Simple", "Números", "Saudações"],
      projects: [
        {
          id: "16.1",
          name: "Apresentação Pessoal",
          description: "Crie uma apresentação em inglês sobre você",
          tasks: 3,
          completed: 0,
        },
        {
          id: "16.2",
          name: "Descrever Rotina",
          description: "Descreva sua rotina diária em inglês",
          tasks: 2,
          completed: 0,
        },
      ],
      color: "#00B4D8",
      iconName: "Globe",
    },
    {
      id: 17,
      title: "Vocabulário Técnico Básico",
      description: "Aprenda termos essenciais de programação",
      difficulty: "Iniciante",
      concepts: ["Termos Técnicos", "Comandos", "Documentação", "README", "Comentários"],
      projects: [
        {
          id: "17.1",
          name: "Ler Documentação",
          description: "Leia documentação técnica em inglês",
          tasks: 3,
          completed: 0,
        },
        {
          id: "17.2",
          name: "Escrever README",
          description: "Crie um README em inglês para seu projeto",
          tasks: 2,
          completed: 0,
        },
      ],
      color: "#0096C7",
      iconName: "FileText",
    },
    {
      id: 18,
      title: "Leitura de Documentação",
      description: "Domine a leitura de documentação técnica",
      difficulty: "Intermediário",
      concepts: ["API Docs", "Tutoriais", "Stack Overflow", "Medium", "Dev.to"],
      projects: [
        {
          id: "18.1",
          name: "Ler 3 Tutoriais",
          description: "Leia 3 tutoriais técnicos em inglês",
          tasks: 3,
          completed: 0,
        },
        {
          id: "18.2",
          name: "Responder no Stack Overflow",
          description: "Responda 2 perguntas no Stack Overflow",
          tasks: 2,
          completed: 0,
        },
      ],
      color: "#00B4D8",
      iconName: "FileText",
    },
    {
      id: 19,
      title: "Conversação Técnica",
      description: "Comunique-se em inglês sobre programação",
      difficulty: "Intermediário",
      concepts: ["Descrever Problemas", "Pedir Ajuda", "Explicar Soluções", "Reuniões"],
      projects: [
        {
          id: "19.1",
          name: "Participar em Call",
          description: "Participe de uma call técnica em inglês",
          tasks: 2,
          completed: 0,
        },
        {
          id: "19.2",
          name: "Explicar Projeto",
          description: "Explique seu projeto em inglês",
          tasks: 2,
          completed: 0,
        },
      ],
      color: "#0096C7",
      iconName: "Users",
    },
    {
      id: 20,
      title: "Escrita Profissional",
      description: "Escreva emails e documentação em inglês",
      difficulty: "Intermediário",
      concepts: ["Email Profissional", "Documentação", "Pull Requests", "Blog Posts"],
      projects: [
        {
          id: "20.1",
          name: "Escrever Blog Posts",
          description: "Escreva 3 artigos técnicos em inglês",
          tasks: 3,
          completed: 0,
        },
        {
          id: "20.2",
          name: "Pull Requests",
          description: "Envie pull requests com descrição em inglês",
          tasks: 2,
          completed: 0,
        },
      ],
      color: "#00B4D8",
      iconName: "FileText",
    },
    {
      id: 21,
      title: "Compreensão Auditiva",
      description: "Entenda inglês falado em contexto técnico",
      difficulty: "Avançado",
      concepts: ["Podcasts", "Vídeos", "Webinars", "Conferências", "Entrevistas"],
      projects: [
        {
          id: "21.1",
          name: "Assistir Vídeos",
          description: "Assista 10 vídeos técnicos sem legenda",
          tasks: 3,
          completed: 0,
        },
        {
          id: "21.2",
          name: "Ouvir Podcasts",
          description: "Ouça 5 episódios de podcast técnico",
          tasks: 2,
          completed: 0,
        },
      ],
      color: "#0096C7",
      iconName: "Headphones",
    },
    {
      id: 22,
      title: "Inglês para Entrevistas",
      description: "Prepare-se para entrevistas em inglês",
      difficulty: "Avançado",
      concepts: ["Behavioral Questions", "Technical Questions", "Apresentação", "Negociação"],
      projects: [
        {
          id: "22.1",
          name: "Entrevistas Simuladas",
          description: "Pratique 10 entrevistas simuladas",
          tasks: 4,
          completed: 0,
        },
        {
          id: "22.2",
          name: "Gravar Apresentação",
          description: "Grave sua apresentação pessoal",
          tasks: 2,
          completed: 0,
        },
      ],
      color: "#00B4D8",
      iconName: "Users",
    },
    {
      id: 23,
      title: "Fluência Profissional",
      description: "Atinja fluência profissional em inglês",
      difficulty: "Avançado",
      concepts: ["Discussões Técnicas", "Liderança", "Networking", "Carreira Internacional"],
      projects: [
        {
          id: "23.1",
          name: "Comunidade Internacional",
          description: "Participe ativamente de comunidade global",
          tasks: 3,
          completed: 0,
        },
        {
          id: "23.2",
          name: "Apresentação em Conferência",
          description: "Faça apresentação em conferência internacional",
          tasks: 2,
          completed: 0,
        },
      ],
      color: "#0096C7",
      iconName: "Globe",
    },
  ],
};

// TRILHA 4: MATEMÁTICA
export const mathTrail: Trail = {
  id: "math",
  name: "Matemática: Do Básico ao Avançado Computacional",
  description: "Domine matemática desde fundamentos até computação científica para cientistas e cientistas de dados",
  duration: "40-50 semanas",
  difficulty: "Iniciante → Avançado",
  color: "#7C3AED",
  iconName: "Calculator",
  stages: [
    {
      id: 0,
      title: "Fundamentos Matemáticos",
      description: "Aritmética avançada, teoria dos números e lógica",
      difficulty: "Iniciante",
      concepts: ["Aritmética", "Números Primos", "Conjuntos", "Lógica Proposicional"],
      projects: [
        {
          id: "math-0.1",
          name: "Calculadora de Frações",
          description: "Implemente operações com frações",
          tasks: 4,
          completed: 0,
        },
        {
          id: "math-0.2",
          name: "Verificador de Primos",
          description: "Algoritmo para identificar números primos",
          tasks: 3,
          completed: 0,
        },
      ],
      color: "#7C3AED",
      iconName: "Calculator",
    },
    {
      id: 1,
      title: "Álgebra Fundamental",
      description: "Equações lineares, polinômios e funções",
      difficulty: "Iniciante",
      concepts: ["Equações Lineares", "Polinômios", "Funções", "Sistemas Lineares"],
      projects: [
        {
          id: "math-1.1",
          name: "Resolvedor de Equações",
          description: "Implemente método de Gauss",
          tasks: 4,
          completed: 0,
        },
        {
          id: "math-1.2",
          name: "Visualizador de Funções",
          description: "Plote gráficos de funções",
          tasks: 3,
          completed: 0,
        },
      ],
      color: "#8B5CF6",
      iconName: "BookOpen",
    },
    {
      id: 2,
      title: "Geometria e Trigonometria",
      description: "Geometria euclidiana, trigonometria e geometria analítica",
      difficulty: "Intermediário",
      concepts: ["Geometria Euclidiana", "Trigonometria", "Cônicas", "Geometria Analítica"],
      projects: [
        {
          id: "math-2.1",
          name: "Calculadora Trigonométrica",
          description: "Implemente funções trigonométricas",
          tasks: 4,
          completed: 0,
        },
        {
          id: "math-2.2",
          name: "Visualizador de Cônicas",
          description: "Plote e analise cônicas",
          tasks: 3,
          completed: 0,
        },
      ],
      color: "#A78BFA",
      iconName: "Layers",
    },
    {
      id: 3,
      title: "Cálculo Diferencial",
      description: "Limites, derivadas e análise de funções",
      difficulty: "Intermediário",
      concepts: ["Limites", "Derivadas", "Regras de Derivação", "Otimização"],
      projects: [
        {
          id: "math-3.1",
          name: "Calculadora de Derivadas",
          description: "Implemente diferenciação simbólica",
          tasks: 4,
          completed: 0,
        },
        {
          id: "math-3.2",
          name: "Otimizador de Funções",
          description: "Encontre máximos e mínimos",
          tasks: 3,
          completed: 0,
        },
      ],
      color: "#C4B5FD",
      iconName: "TrendingUp",
    },
    {
      id: 4,
      title: "Cálculo Integral",
      description: "Antiderivadas, integrais definidas e aplicações",
      difficulty: "Intermediário",
      concepts: ["Antiderivadas", "Integrais Definidas", "Teorema Fundamental", "Aplicações"],
      projects: [
        {
          id: "math-4.1",
          name: "Calculadora de Integrais",
          description: "Implemente integração numérica",
          tasks: 4,
          completed: 0,
        },
        {
          id: "math-4.2",
          name: "Calculador de Áreas",
          description: "Calcule áreas sob curvas",
          tasks: 3,
          completed: 0,
        },
      ],
      color: "#DDD6FE",
      iconName: "BookOpen",
    },
    {
      id: 5,
      title: "Álgebra Linear",
      description: "Matrizes, determinantes, espaços vetoriais e autovalores",
      difficulty: "Intermediário",
      concepts: ["Matrizes", "Determinantes", "Espaços Vetoriais", "Autovalores"],
      projects: [
        {
          id: "math-5.1",
          name: "Biblioteca de Álgebra Linear",
          description: "Implemente operações matriciais",
          tasks: 5,
          completed: 0,
        },
        {
          id: "math-5.2",
          name: "Analisador de Dados",
          description: "Aplique PCA com autovalores",
          tasks: 4,
          completed: 0,
        },
      ],
      color: "#7C3AED",
      iconName: "Database",
    },
    {
      id: 6,
      title: "Probabilidade e Estatística",
      description: "Probabilidade, distribuições e inferência estatística",
      difficulty: "Intermediário",
      concepts: ["Probabilidade", "Distribuições", "Estatística Descritiva", "Testes de Hipótese"],
      projects: [
        {
          id: "math-6.1",
          name: "Simulador de Probabilidade",
          description: "Monte Carlo simulations",
          tasks: 4,
          completed: 0,
        },
        {
          id: "math-6.2",
          name: "Analisador Estatístico",
          description: "Análise completa de datasets",
          tasks: 4,
          completed: 0,
        },
      ],
      color: "#8B5CF6",
      iconName: "TrendingUp",
    },
    {
      id: 7,
      title: "Análise Matemática Avançada",
      description: "Séries, equações diferenciais, análise complexa e otimização",
      difficulty: "Avançado",
      concepts: ["Sequências e Séries", "EDO", "Análise Complexa", "Otimização"],
      projects: [
        {
          id: "math-7.1",
          name: "Resolvedor de EDO",
          description: "Métodos numéricos para EDO",
          tasks: 5,
          completed: 0,
        },
        {
          id: "math-7.2",
          name: "Otimizador Avançado",
          description: "Implementar algoritmos de otimização",
          tasks: 4,
          completed: 0,
        },
      ],
      color: "#A78BFA",
      iconName: "Settings",
    },
    {
      id: 8,
      title: "Matemática Computacional",
      description: "Métodos numéricos, ML, processamento de sinais e computação científica",
      difficulty: "Avançado",
      concepts: ["Métodos Numéricos", "Aprendizado de Máquina", "Processamento de Sinais", "Computação Científica"],
      projects: [
        {
          id: "math-8.1",
          name: "Biblioteca de Métodos Numéricos",
          description: "Implementar algoritmos clássicos",
          tasks: 5,
          completed: 0,
        },
        {
          id: "math-8.2",
          name: "Pipeline de ML",
          description: "Regressão, classificação, clustering",
          tasks: 5,
          completed: 0,
        },
        {
          id: "math-8.3",
          name: "Simulador Científico",
          description: "Modelagem de fenômenos físicos",
          tasks: 4,
          completed: 0,
        },
      ],
      color: "#C4B5FD",
      iconName: "Code2",
    },
  ],
};

// TRILHA 5: FRONT-END
export const frontendTrail: Trail = {
  id: "frontend",
  name: "Front-End: HTML, CSS, JavaScript e React",
  description: "Domine desenvolvimento front-end moderno com React e crie interfaces web profissionais",
  duration: "20-24 semanas",
  difficulty: "Iniciante → Avançado",
  color: "#FF6B6B",
  iconName: "Palette",
  stages: [
    {
      id: 0,
      title: "Fundamentos Web",
      description: "HTML, CSS e conceitos web fundamentais",
      difficulty: "Iniciante",
      concepts: ["HTML Semântico", "CSS Box Model", "Responsividade", "Acessibilidade"],
      projects: [
        { id: "fe-0.1", name: "Página Pessoal", description: "Crie página HTML/CSS", tasks: 4, completed: 0 },
        { id: "fe-0.2", name: "Portfólio Estático", description: "Construa portfólio responsivo", tasks: 5, completed: 0 }
      ],
      color: "#FF6B6B",
      iconName: "Palette"
    },
    {
      id: 1,
      title: "CSS Avançado",
      description: "Flexbox, Grid, Animações e SASS",
      difficulty: "Iniciante",
      concepts: ["Flexbox", "CSS Grid", "Animações", "SASS/SCSS"],
      projects: [
        { id: "fe-1.1", name: "Site Responsivo", description: "Site em todos os dispositivos", tasks: 5, completed: 0 },
        { id: "fe-1.2", name: "Componentes CSS", description: "Biblioteca de componentes", tasks: 4, completed: 0 }
      ],
      color: "#FF8C42",
      iconName: "Palette"
    },
    {
      id: 2,
      title: "JavaScript Fundamentals",
      description: "Sintaxe, tipos, funções e objetos",
      difficulty: "Iniciante",
      concepts: ["Variáveis", "Tipos de Dados", "Funções", "Objetos e Arrays"],
      projects: [
        { id: "fe-2.1", name: "Calculadora", description: "Calculadora interativa", tasks: 4, completed: 0 },
        { id: "fe-2.2", name: "To-Do List", description: "Aplicativo de tarefas", tasks: 5, completed: 0 }
      ],
      color: "#FFD93D",
      iconName: "Code2"
    },
    {
      id: 3,
      title: "DOM e Eventos",
      description: "Manipulação do DOM, eventos e Fetch API",
      difficulty: "Intermediário",
      concepts: ["DOM API", "Event Listeners", "Async/Await", "Fetch API"],
      projects: [
        { id: "fe-3.1", name: "Galeria Interativa", description: "Galeria com manipulação de DOM", tasks: 5, completed: 0 },
        { id: "fe-3.2", name: "App de Clima", description: "Consumir API de clima", tasks: 5, completed: 0 }
      ],
      color: "#6BCB77",
      iconName: "Zap"
    },
    {
      id: 4,
      title: "ES6+ e Programação Avançada",
      description: "Classes, módulos, programação funcional e testes",
      difficulty: "Intermediário",
      concepts: ["Classes ES6", "Módulos", "Programação Funcional", "Jest"],
      projects: [
        { id: "fe-4.1", name: "Biblioteca JS", description: "Biblioteca com módulos", tasks: 5, completed: 0 },
        { id: "fe-4.2", name: "Testes Unitários", description: "Aplicativo com testes", tasks: 4, completed: 0 }
      ],
      color: "#4D96FF",
      iconName: "Code2"
    },
    {
      id: 5,
      title: "React Fundamentals",
      description: "Componentes, hooks e state management",
      difficulty: "Intermediário",
      concepts: ["JSX", "Componentes", "Hooks", "State Management"],
      projects: [
        { id: "fe-5.1", name: "To-Do com React", description: "To-do list em React", tasks: 5, completed: 0 },
        { id: "fe-5.2", name: "Dashboard", description: "Dashboard com múltiplos componentes", tasks: 6, completed: 0 }
      ],
      color: "#61DAFB",
      iconName: "Code2"
    },
    {
      id: 6,
      title: "React Avançado",
      description: "Roteamento, Redux, APIs e autenticação",
      difficulty: "Avançado",
      concepts: ["React Router", "Redux", "React Query", "Autenticação"],
      projects: [
        { id: "fe-6.1", name: "SPA com Roteamento", description: "Single Page App", tasks: 6, completed: 0 },
        { id: "fe-6.2", name: "App Autenticada", description: "Login e proteção", tasks: 5, completed: 0 }
      ],
      color: "#8B5CF6",
      iconName: "Workflow"
    },
    {
      id: 7,
      title: "Desenvolvimento Profissional",
      description: "TypeScript, testes E2E, deploy e boas práticas",
      difficulty: "Avançado",
      concepts: ["TypeScript", "Cypress", "Vercel/Netlify", "Performance"],
      projects: [
        { id: "fe-7.1", name: "App com TypeScript", description: "Aplicativo type-safe", tasks: 6, completed: 0 },
        { id: "fe-7.2", name: "Deploy em Produção", description: "Publicar aplicativo", tasks: 4, completed: 0 }
      ],
      color: "#A78BFA",
      iconName: "Settings"
    }
  ]
};

// TRILHA 6: FULL-STACK
export const fullstackTrail: Trail = {
  id: "fullstack",
  name: "Full-Stack: Desenvolvedor Completo",
  description: "Domine desenvolvimento web completo: front-end, back-end, banco de dados e deploy",
  duration: "30-36 semanas",
  difficulty: "Intermediário → Avançado",
  color: "#00D9FF",
  iconName: "Workflow",
  stages: [
    {
      id: 0,
      title: "Fundamentos Web Completos",
      description: "Arquitetura web, cliente-servidor e REST",
      difficulty: "Iniciante",
      concepts: ["Modelo Cliente-Servidor", "HTTP/HTTPS", "REST", "MVC"],
      projects: [
        { id: "fs-0.1", name: "App Web Simples", description: "Cliente-servidor básico", tasks: 4, completed: 0 },
        { id: "fs-0.2", name: "API REST Simples", description: "Endpoints CRUD", tasks: 5, completed: 0 }
      ],
      color: "#00D9FF",
      iconName: "Code2"
    },
    {
      id: 1,
      title: "Frontend Profissional",
      description: "HTML, CSS, JavaScript e React avançado",
      difficulty: "Intermediário",
      concepts: ["React", "State Management", "Roteamento", "Performance"],
      projects: [
        { id: "fs-1.1", name: "Dashboard Interativo", description: "Múltiplos componentes", tasks: 6, completed: 0 },
        { id: "fs-1.2", name: "SPA com Roteamento", description: "Single Page App", tasks: 5, completed: 0 }
      ],
      color: "#00E5FF",
      iconName: "Palette"
    },
    {
      id: 2,
      title: "Backend com Node.js",
      description: "Express, rotas, middleware e autenticação",
      difficulty: "Intermediário",
      concepts: ["Node.js", "Express", "Middleware", "JWT"],
      projects: [
        { id: "fs-2.1", name: "API REST Completa", description: "CRUD com Express", tasks: 6, completed: 0 },
        { id: "fs-2.2", name: "Sistema de Autenticação", description: "Login e registro", tasks: 5, completed: 0 }
      ],
      color: "#00D4FF",
      iconName: "Code2"
    },
    {
      id: 3,
      title: "Banco de Dados",
      description: "SQL, PostgreSQL, MongoDB e ORMs",
      difficulty: "Intermediário",
      concepts: ["SQL", "PostgreSQL", "MongoDB", "Sequelize"],
      projects: [
        { id: "fs-3.1", name: "Schema de BD", description: "Design completo", tasks: 5, completed: 0 },
        { id: "fs-3.2", name: "CRUD com ORM", description: "Operações com banco", tasks: 5, completed: 0 }
      ],
      color: "#00C4FF",
      iconName: "Database"
    },
    {
      id: 4,
      title: "Integração Backend-Frontend",
      description: "API design, tratamento de erros e performance",
      difficulty: "Intermediário",
      concepts: ["API Design", "Error Handling", "Caching", "Otimização"],
      projects: [
        { id: "fs-4.1", name: "App Full-Stack", description: "Todo app completo", tasks: 6, completed: 0 },
        { id: "fs-4.2", name: "E-commerce MVP", description: "Produtos e carrinho", tasks: 7, completed: 0 }
      ],
      color: "#00B4FF",
      iconName: "Workflow"
    },
    {
      id: 5,
      title: "Testes e Qualidade",
      description: "Jest, React Testing Library, E2E e CI/CD",
      difficulty: "Avançado",
      concepts: ["Jest", "React Testing", "Cypress", "GitHub Actions"],
      projects: [
        { id: "fs-5.1", name: "Suite de Testes", description: "Frontend + Backend", tasks: 6, completed: 0 },
        { id: "fs-5.2", name: "Pipeline CI/CD", description: "GitHub Actions", tasks: 5, completed: 0 }
      ],
      color: "#00A4FF",
      iconName: "Settings"
    },
    {
      id: 6,
      title: "Deployment e DevOps",
      description: "Docker, deploy em produção e monitoramento",
      difficulty: "Avançado",
      concepts: ["Docker", "Heroku", "AWS", "Monitoramento"],
      projects: [
        { id: "fs-6.1", name: "Dockerização", description: "Containers para app", tasks: 5, completed: 0 },
        { id: "fs-6.2", name: "Deploy em Produção", description: "App ao vivo", tasks: 5, completed: 0 }
      ],
      color: "#0094FF",
      iconName: "GitBranch"
    },
    {
      id: 7,
      title: "Segurança e Escalabilidade",
      description: "CORS, CSRF, XSS, load balancing e caching",
      difficulty: "Avançado",
      concepts: ["Segurança Web", "Escalabilidade", "CDN", "Load Balancing"],
      projects: [
        { id: "fs-7.1", name: "App Segura", description: "Implementar proteções", tasks: 6, completed: 0 },
        { id: "fs-7.2", name: "Otimização", description: "Reduzir tempo de carga", tasks: 5, completed: 0 }
      ],
      color: "#0084FF",
      iconName: "Settings"
    },
    {
      id: 8,
      title: "Tecnologias Avançadas",
      description: "TypeScript, GraphQL, WebSockets e real-time",
      difficulty: "Avançado",
      concepts: ["TypeScript", "GraphQL", "WebSockets", "Real-time"],
      projects: [
        { id: "fs-8.1", name: "App com TypeScript", description: "Type-safe codebase", tasks: 6, completed: 0 },
        { id: "fs-8.2", name: "API GraphQL", description: "Substituir REST", tasks: 5, completed: 0 }
      ],
      color: "#0074FF",
      iconName: "Code2"
    },
    {
      id: 9,
      title: "Projeto Capstone",
      description: "Projeto full-stack profissional completo",
      difficulty: "Avançado",
      concepts: ["Planejamento", "Desenvolvimento", "Deploy", "Manutenção"],
      projects: [
        { id: "fs-9.1", name: "Projeto Full-Stack", description: "App profissional", tasks: 10, completed: 0 },
        { id: "fs-9.2", name: "Documentação", description: "README e API docs", tasks: 5, completed: 0 }
      ],
      color: "#0064FF",
      iconName: "Briefcase"
    }
  ]
};

// Todas as trilhas
export const allTrails: Trail[] = [javaTrail, backendTrail, englishTrail, mathTrail, frontendTrail, fullstackTrail];

// Função para obter trilha por ID
export function getTrailById(id: string): Trail | undefined {
  return allTrails.find((trail) => trail.id === id);
}

// Função para obter todos os estágios de todas as trilhas
export function getAllStages(): Stage[] {
  return allTrails.flatMap((trail) => trail.stages);
}

// Função para obter total de projetos
export function getTotalProjectsCount(): number {
  return allTrails.reduce((acc, trail) => {
    return acc + trail.stages.reduce((stageAcc, stage) => stageAcc + stage.projects.length, 0);
  }, 0);
}

// Função para obter total de conceitos
export function getTotalConceptsCount(): number {
  return allTrails.reduce((acc, trail) => {
    return acc + trail.stages.reduce((stageAcc, stage) => stageAcc + stage.concepts.length, 0);
  }, 0);
}

// Função para obter ícone por nome
export function getIconByName(iconName: string) {
  const iconMap: { [key: string]: string } = {
    Zap: "Zap",
    Code2: "Code2",
    Database: "Database",
    Settings: "Settings",
    BookOpen: "BookOpen",
    GitBranch: "GitBranch",
    Layers: "Layers",
    Globe: "Globe",
    Users: "Users",
    Headphones: "Headphones",
    FileText: "FileText",
    Briefcase: "Briefcase",
  };
  return iconMap[iconName] || "Code2";
}

// Adicionar Calculator e TrendingUp ao mapa de ícones
const extendedIconMap: { [key: string]: string } = {
  Zap: "Zap",
  Code2: "Code2",
  Database: "Database",
  Settings: "Settings",
  BookOpen: "BookOpen",
  GitBranch: "GitBranch",
  Layers: "Layers",
  Globe: "Globe",
  Users: "Users",
  Headphones: "Headphones",
  FileText: "FileText",
  Briefcase: "Briefcase",
  Calculator: "Calculator",
  TrendingUp: "TrendingUp",
};

export function getIconComponent(iconName: string) {
  const icons: { [key: string]: any } = {
    Zap,
    Code2,
    Database,
    Settings,
    BookOpen,
    GitBranch,
    Layers,
    Globe,
    Users,
    Headphones,
    FileText,
    Briefcase,
    Calculator,
    TrendingUp,
  };
  return icons[iconName] || Code2
}
