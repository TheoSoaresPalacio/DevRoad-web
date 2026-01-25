// Estrutura de dados para Projetos Práticos, Portfólio e Atividades

export type ProjectType = 'idea' | 'beginner' | 'intermediate' | 'advanced' | 'portfolio';
export type ProjectCategory = 'java' | 'backend' | 'english' | 'math' | 'fullstack';

export interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  estimatedHours: number;
}

export interface ProjectActivity {
  id: string;
  title: string;
  description: string;
  type: 'exercise' | 'challenge' | 'practice' | 'buildup';
  difficulty: 'easy' | 'medium' | 'hard';
  estimatedHours: number;
  tasks: Task[];
  resources: string[];
  expectedOutcome: string;
}

export interface PracticalProject {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  type: ProjectType;
  category: ProjectCategory;
  stage: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedHours: number;
  technologies: string[];
  learningObjectives: string[];
  activities: ProjectActivity[];
  portfolioValue: 'low' | 'medium' | 'high';
  portfolioDescription?: string;
  prerequisites: string[];
  resources: Resource[];
  successCriteria: string[];
  bonus: string[];
}

export interface Resource {
  title: string;
  url: string;
  type: 'documentation' | 'tutorial' | 'article' | 'video' | 'tool';
}

export const practicalProjectsData: Record<string, PracticalProject> = {
  // JAVA - Estágio 0
  'java-calculator': {
    id: 'java-calculator',
    title: 'Calculadora Simples',
    description: 'Crie uma calculadora que realiza operações aritméticas básicas. Este é o primeiro projeto prático que consolida conceitos de variáveis, operadores e entrada/saída.',
    shortDescription: 'Calculadora com operações básicas',
    type: 'beginner',
    category: 'java',
    stage: 0,
    difficulty: 'beginner',
    estimatedHours: 3,
    technologies: ['Java', 'Console I/O'],
    learningObjectives: [
      'Trabalhar com variáveis e tipos de dados',
      'Usar operadores aritméticos',
      'Implementar entrada e saída de dados',
      'Estruturar um programa simples'
    ],
    activities: [
      {
        id: 'java-calculator-1',
        title: 'Estrutura Básica',
        description: 'Crie a classe principal e implemente a entrada de dois números',
        type: 'exercise',
        difficulty: 'easy',
        estimatedHours: 1,
        tasks: [
          {
            id: 'task-1',
            title: 'Criar classe Calculadora',
            description: 'Crie a classe com método main',
            completed: false,
            estimatedHours: 0.5
          },
          {
            id: 'task-2',
            title: 'Implementar entrada de números',
            description: 'Use Scanner para ler dois números',
            completed: false,
            estimatedHours: 0.5
          }
        ],
        resources: ['https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html'],
        expectedOutcome: 'Programa que lê dois números do usuário'
      },
      {
        id: 'java-calculator-2',
        title: 'Operações Aritméticas',
        description: 'Implemente as quatro operações básicas',
        type: 'challenge',
        difficulty: 'easy',
        estimatedHours: 1.5,
        tasks: [
          {
            id: 'task-3',
            title: 'Adição e Subtração',
            description: 'Implemente + e -',
            completed: false,
            estimatedHours: 0.5
          },
          {
            id: 'task-4',
            title: 'Multiplicação e Divisão',
            description: 'Implemente * e /',
            completed: false,
            estimatedHours: 0.5
          },
          {
            id: 'task-5',
            title: 'Tratamento de Erro',
            description: 'Evite divisão por zero',
            completed: false,
            estimatedHours: 0.5
          }
        ],
        resources: ['https://docs.oracle.com/javase/tutorial/java/nutsandbolts/operators.html'],
        expectedOutcome: 'Calculadora funcional com 4 operações'
      },
      {
        id: 'java-calculator-3',
        title: 'Melhorias e Extensões',
        description: 'Adicione funcionalidades extras',
        type: 'buildup',
        difficulty: 'medium',
        estimatedHours: 1,
        tasks: [
          {
            id: 'task-6',
            title: 'Menu de Operações',
            description: 'Permita escolher operação via menu',
            completed: false,
            estimatedHours: 0.5
          },
          {
            id: 'task-7',
            title: 'Múltiplas Operações',
            description: 'Permita múltiplos cálculos em sequência',
            completed: false,
            estimatedHours: 0.5
          }
        ],
        resources: [],
        expectedOutcome: 'Calculadora com menu e múltiplas operações'
      }
    ],
    portfolioValue: 'low',
    prerequisites: ['java-intro', 'java-variables', 'java-operators'],
    resources: [
      {
        title: 'Java Scanner Class',
        url: 'https://docs.oracle.com/javase/tutorial/i18n/resbundle/propfile.html',
        type: 'documentation'
      },
      {
        title: 'Java I/O Tutorial',
        url: 'https://docs.oracle.com/javase/tutorial/i18n/index.html',
        type: 'tutorial'
      }
    ],
    successCriteria: [
      'Programa compila sem erros',
      'Realiza as 4 operações corretamente',
      'Trata divisão por zero',
      'Interface clara para o usuário'
    ],
    bonus: [
      'Adicione operação de potência (^)',
      'Implemente histórico de cálculos',
      'Crie interface gráfica com Swing'
    ]
  },

  // JAVA - Estágio 1
  'java-number-guesser': {
    id: 'java-number-guesser',
    title: 'Jogo de Adivinhação',
    description: 'Crie um jogo onde o usuário tenta adivinhar um número. Consolida conhecimento em loops, condicionais e lógica.',
    shortDescription: 'Jogo interativo de adivinhação',
    type: 'intermediate',
    category: 'java',
    stage: 1,
    difficulty: 'intermediate',
    estimatedHours: 5,
    technologies: ['Java', 'Loops', 'Condicionais', 'Random'],
    learningObjectives: [
      'Usar loops para repetição',
      'Implementar lógica condicional complexa',
      'Trabalhar com números aleatórios',
      'Gerenciar estado do jogo'
    ],
    activities: [
      {
        id: 'java-guesser-1',
        title: 'Gerar Número Aleatório',
        description: 'Implemente a geração de número aleatório entre 1 e 100',
        type: 'exercise',
        difficulty: 'easy',
        estimatedHours: 1,
        tasks: [
          {
            id: 'task-1',
            title: 'Usar Random',
            description: 'Gere número aleatório com java.util.Random',
            completed: false,
            estimatedHours: 0.5
          },
          {
            id: 'task-2',
            title: 'Validar Intervalo',
            description: 'Garanta que número está entre 1 e 100',
            completed: false,
            estimatedHours: 0.5
          }
        ],
        resources: ['https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html'],
        expectedOutcome: 'Número aleatório gerado corretamente'
      },
      {
        id: 'java-guesser-2',
        title: 'Loop de Tentativas',
        description: 'Implemente loop que permite múltiplas tentativas',
        type: 'challenge',
        difficulty: 'medium',
        estimatedHours: 2,
        tasks: [
          {
            id: 'task-3',
            title: 'Loop Principal',
            description: 'Use while loop para permitir múltiplas tentativas',
            completed: false,
            estimatedHours: 0.5
          },
          {
            id: 'task-4',
            title: 'Dicas (Maior/Menor)',
            description: 'Forneça dicas ao usuário',
            completed: false,
            estimatedHours: 1
          },
          {
            id: 'task-5',
            title: 'Contar Tentativas',
            description: 'Rastreie número de tentativas',
            completed: false,
            estimatedHours: 0.5
          }
        ],
        resources: ['https://docs.oracle.com/javase/tutorial/java/nutsandbolts/while.html'],
        expectedOutcome: 'Jogo funcional com dicas'
      },
      {
        id: 'java-guesser-3',
        title: 'Melhorias e Pontuação',
        description: 'Adicione sistema de pontuação e replay',
        type: 'buildup',
        difficulty: 'medium',
        estimatedHours: 2,
        tasks: [
          {
            id: 'task-6',
            title: 'Sistema de Pontuação',
            description: 'Calcule pontos baseado em tentativas',
            completed: false,
            estimatedHours: 1
          },
          {
            id: 'task-7',
            title: 'Jogar Novamente',
            description: 'Permita jogar múltiplas rodadas',
            completed: false,
            estimatedHours: 1
          }
        ],
        resources: [],
        expectedOutcome: 'Jogo completo com pontuação'
      }
    ],
    portfolioValue: 'low',
    prerequisites: ['java-conditionals', 'java-loops'],
    resources: [
      {
        title: 'Java Random Class',
        url: 'https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html',
        type: 'documentation'
      }
    ],
    successCriteria: [
      'Gera número aleatório corretamente',
      'Loop funciona sem erros',
      'Dicas são precisas',
      'Jogo termina quando número é adivinhado'
    ],
    bonus: [
      'Adicione níveis de dificuldade',
      'Implemente ranking de pontuações',
      'Adicione limite de tentativas'
    ]
  },

  // JAVA - Estágio 4 - POO Básica
  'java-bank-system': {
    id: 'java-bank-system',
    title: 'Sistema Bancário',
    description: 'Crie um sistema bancário com contas, depósitos e saques. Consolida conhecimento em POO com encapsulamento.',
    shortDescription: 'Sistema bancário com POO',
    type: 'intermediate',
    category: 'java',
    stage: 4,
    difficulty: 'intermediate',
    estimatedHours: 8,
    technologies: ['Java', 'POO', 'Encapsulamento', 'ArrayList'],
    learningObjectives: [
      'Criar classes com atributos e métodos',
      'Implementar encapsulamento com getters/setters',
      'Validar dados de entrada',
      'Trabalhar com coleções (ArrayList)',
      'Estruturar aplicação com múltiplas classes'
    ],
    activities: [
      {
        id: 'java-bank-1',
        title: 'Classe ContaBancaria',
        description: 'Crie a classe que representa uma conta bancária',
        type: 'exercise',
        difficulty: 'easy',
        estimatedHours: 2,
        tasks: [
          {
            id: 'task-1',
            title: 'Atributos da Conta',
            description: 'Defina numero, titular, saldo como privados',
            completed: false,
            estimatedHours: 0.5
          },
          {
            id: 'task-2',
            title: 'Construtor',
            description: 'Crie construtor que inicializa conta',
            completed: false,
            estimatedHours: 0.5
          },
          {
            id: 'task-3',
            title: 'Getters',
            description: 'Implemente getters para ler dados',
            completed: false,
            estimatedHours: 0.5
          },
          {
            id: 'task-4',
            title: 'Métodos Básicos',
            description: 'Implemente exibirInfo()',
            completed: false,
            estimatedHours: 0.5
          }
        ],
        resources: ['https://docs.oracle.com/javase/tutorial/java/javaOO/classes.html'],
        expectedOutcome: 'Classe ContaBancaria funcional'
      },
      {
        id: 'java-bank-2',
        title: 'Operações Bancárias',
        description: 'Implemente depósito e saque com validações',
        type: 'challenge',
        difficulty: 'medium',
        estimatedHours: 3,
        tasks: [
          {
            id: 'task-5',
            title: 'Método Depositar',
            description: 'Implemente depósito com validação',
            completed: false,
            estimatedHours: 1
          },
          {
            id: 'task-6',
            title: 'Método Sacar',
            description: 'Implemente saque com validação de saldo',
            completed: false,
            estimatedHours: 1
          },
          {
            id: 'task-7',
            title: 'Histórico',
            description: 'Mantenha histórico de transações',
            completed: false,
            estimatedHours: 1
          }
        ],
        resources: ['https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html'],
        expectedOutcome: 'Operações bancárias funcionais'
      },
      {
        id: 'java-bank-3',
        title: 'Sistema Completo',
        description: 'Crie sistema com múltiplas contas',
        type: 'buildup',
        difficulty: 'medium',
        estimatedHours: 3,
        tasks: [
          {
            id: 'task-8',
            title: 'Classe Banco',
            description: 'Crie classe que gerencia múltiplas contas',
            completed: false,
            estimatedHours: 1.5
          },
          {
            id: 'task-9',
            title: 'Interface de Usuário',
            description: 'Crie menu para operações',
            completed: false,
            estimatedHours: 1.5
          }
        ],
        resources: [],
        expectedOutcome: 'Sistema bancário completo'
      }
    ],
    portfolioValue: 'medium',
    portfolioDescription: 'Demonstra compreensão de POO, encapsulamento e validação de dados',
    prerequisites: ['java-classes', 'java-encapsulation'],
    resources: [
      {
        title: 'Java Classes and Objects',
        url: 'https://docs.oracle.com/javase/tutorial/java/javaOO/classes.html',
        type: 'documentation'
      }
    ],
    successCriteria: [
      'Classe bem encapsulada',
      'Validações funcionam corretamente',
      'Histórico de transações mantido',
      'Interface clara e intuitiva'
    ],
    bonus: [
      'Adicione transferência entre contas',
      'Implemente taxa de juros',
      'Crie persistência em arquivo',
      'Adicione diferentes tipos de contas'
    ]
  },

  // BACKEND - Git
  'backend-git-workflow': {
    id: 'backend-git-workflow',
    title: 'Workflow Git Profissional',
    description: 'Aprenda e pratique um workflow Git completo com branches, commits e pull requests.',
    shortDescription: 'Workflow Git com branches e PRs',
    type: 'intermediate',
    category: 'backend',
    stage: 8,
    difficulty: 'intermediate',
    estimatedHours: 6,
    technologies: ['Git', 'GitHub', 'Branching', 'Pull Requests'],
    learningObjectives: [
      'Criar e gerenciar branches',
      'Fazer commits com mensagens descritivas',
      'Resolver conflitos de merge',
      'Fazer pull requests profissionais',
      'Colaborar em projetos'
    ],
    activities: [
      {
        id: 'backend-git-1',
        title: 'Configuração Inicial',
        description: 'Configure Git e crie repositório',
        type: 'exercise',
        difficulty: 'easy',
        estimatedHours: 1,
        tasks: [
          {
            id: 'task-1',
            title: 'Instalar Git',
            description: 'Instale Git e configure nome/email',
            completed: false,
            estimatedHours: 0.5
          },
          {
            id: 'task-2',
            title: 'Criar Repositório',
            description: 'Crie repositório local e no GitHub',
            completed: false,
            estimatedHours: 0.5
          }
        ],
        resources: ['https://git-scm.com/doc'],
        expectedOutcome: 'Repositório Git configurado'
      },
      {
        id: 'backend-git-2',
        title: 'Branches e Commits',
        description: 'Pratique criar branches e fazer commits',
        type: 'challenge',
        difficulty: 'medium',
        estimatedHours: 2.5,
        tasks: [
          {
            id: 'task-3',
            title: 'Criar Feature Branch',
            description: 'Crie branch para nova funcionalidade',
            completed: false,
            estimatedHours: 0.5
          },
          {
            id: 'task-4',
            title: 'Fazer Commits',
            description: 'Faça 3 commits com mensagens claras',
            completed: false,
            estimatedHours: 1
          },
          {
            id: 'task-5',
            title: 'Push para GitHub',
            description: 'Envie branch para GitHub',
            completed: false,
            estimatedHours: 0.5
          },
          {
            id: 'task-6',
            title: 'Abrir Pull Request',
            description: 'Crie PR com descrição clara',
            completed: false,
            estimatedHours: 0.5
          }
        ],
        resources: ['https://docs.github.com/en/pull-requests'],
        expectedOutcome: 'Pull Request aberto e funcional'
      },
      {
        id: 'backend-git-3',
        title: 'Colaboração e Conflitos',
        description: 'Pratique resolver conflitos e colaborar',
        type: 'buildup',
        difficulty: 'medium',
        estimatedHours: 2.5,
        tasks: [
          {
            id: 'task-7',
            title: 'Resolver Conflito',
            description: 'Crie e resolva conflito de merge',
            completed: false,
            estimatedHours: 1
          },
          {
            id: 'task-8',
            title: 'Code Review',
            description: 'Revise PR de outro desenvolvedor',
            completed: false,
            estimatedHours: 1
          },
          {
            id: 'task-9',
            title: 'Merge e Cleanup',
            description: 'Faça merge e delete branch',
            completed: false,
            estimatedHours: 0.5
          }
        ],
        resources: [],
        expectedOutcome: 'Workflow Git completo praticado'
      }
    ],
    portfolioValue: 'high',
    portfolioDescription: 'Demonstra habilidade em controle de versão e colaboração em equipe',
    prerequisites: ['git-basics'],
    resources: [
      {
        title: 'GitHub Guides',
        url: 'https://guides.github.com/',
        type: 'tutorial'
      }
    ],
    successCriteria: [
      'Branches criadas corretamente',
      'Commits com mensagens descritivas',
      'Pull request bem documentado',
      'Conflitos resolvidos corretamente'
    ],
    bonus: [
      'Implemente Git hooks',
      'Configure CI/CD básico',
      'Pratique rebase interativo',
      'Configure proteção de branch'
    ]
  },

  // BACKEND - Banco de Dados
  'backend-ecommerce-db': {
    id: 'backend-ecommerce-db',
    title: 'Banco de Dados E-commerce',
    description: 'Projete e implemente banco de dados completo para e-commerce com múltiplas tabelas e relacionamentos.',
    shortDescription: 'Banco de dados relacional para e-commerce',
    type: 'intermediate',
    category: 'backend',
    stage: 9,
    difficulty: 'intermediate',
    estimatedHours: 10,
    technologies: ['SQL', 'MySQL', 'Relacionamentos', 'Normalização'],
    learningObjectives: [
      'Projetar schema de banco de dados',
      'Criar tabelas com relacionamentos',
      'Escrever queries complexas com JOINs',
      'Implementar integridade referencial',
      'Otimizar queries'
    ],
    activities: [
      {
        id: 'backend-db-1',
        title: 'Design do Schema',
        description: 'Projete as tabelas necessárias',
        type: 'exercise',
        difficulty: 'easy',
        estimatedHours: 2,
        tasks: [
          {
            id: 'task-1',
            title: 'Identificar Entidades',
            description: 'Liste todas as entidades necessárias',
            completed: false,
            estimatedHours: 0.5
          },
          {
            id: 'task-2',
            title: 'Definir Relacionamentos',
            description: 'Defina 1:N e N:N',
            completed: false,
            estimatedHours: 1
          },
          {
            id: 'task-3',
            title: 'Normalizar Schema',
            description: 'Aplique 3NF',
            completed: false,
            estimatedHours: 0.5
          }
        ],
        resources: ['https://dev.mysql.com/doc/'],
        expectedOutcome: 'Schema normalizado e bem estruturado'
      },
      {
        id: 'backend-db-2',
        title: 'Criar Tabelas',
        description: 'Implemente as tabelas em SQL',
        type: 'challenge',
        difficulty: 'medium',
        estimatedHours: 3,
        tasks: [
          {
            id: 'task-4',
            title: 'Tabelas Básicas',
            description: 'Crie usuarios, produtos, categorias',
            completed: false,
            estimatedHours: 1
          },
          {
            id: 'task-5',
            title: 'Tabelas de Relacionamento',
            description: 'Crie pedidos e itens_pedido',
            completed: false,
            estimatedHours: 1
          },
          {
            id: 'task-6',
            title: 'Constraints e Índices',
            description: 'Adicione FK, UK e índices',
            completed: false,
            estimatedHours: 1
          }
        ],
        resources: ['https://dev.mysql.com/doc/refman/8.0/en/create-table.html'],
        expectedOutcome: 'Todas as tabelas criadas'
      },
      {
        id: 'backend-db-3',
        title: 'Queries Complexas',
        description: 'Escreva queries para análise',
        type: 'buildup',
        difficulty: 'medium',
        estimatedHours: 5,
        tasks: [
          {
            id: 'task-7',
            title: 'JOINs',
            description: 'Escreva 5 queries com JOINs',
            completed: false,
            estimatedHours: 2
          },
          {
            id: 'task-8',
            title: 'Agregações',
            description: 'Use GROUP BY, HAVING, COUNT',
            completed: false,
            estimatedHours: 1.5
          },
          {
            id: 'task-9',
            title: 'Subconsultas',
            description: 'Escreva queries com subconsultas',
            completed: false,
            estimatedHours: 1.5
          }
        ],
        resources: [],
        expectedOutcome: 'Queries complexas funcionais'
      }
    ],
    portfolioValue: 'high',
    portfolioDescription: 'Demonstra expertise em design e otimização de bancos de dados',
    prerequisites: ['sql-basics', 'database-design'],
    resources: [
      {
        title: 'MySQL Documentation',
        url: 'https://dev.mysql.com/doc/',
        type: 'documentation'
      }
    ],
    successCriteria: [
      'Schema normalizado',
      'Todas as tabelas criadas',
      'Relacionamentos funcionam',
      'Queries retornam resultados corretos'
    ],
    bonus: [
      'Implemente stored procedures',
      'Crie views úteis',
      'Implemente triggers',
      'Otimize queries lentas'
    ]
  },

  // BACKEND - API REST
  'backend-rest-api': {
    id: 'backend-rest-api',
    title: 'API REST Completa com Spring Boot',
    description: 'Crie uma API REST profissional com Spring Boot, autenticação e testes.',
    shortDescription: 'API REST com Spring Boot',
    type: 'advanced',
    category: 'backend',
    stage: 11,
    difficulty: 'advanced',
    estimatedHours: 20,
    technologies: ['Spring Boot', 'REST', 'JWT', 'JUnit', 'Maven'],
    learningObjectives: [
      'Criar endpoints REST profissionais',
      'Implementar autenticação JWT',
      'Validar dados de entrada',
      'Tratar erros apropriadamente',
      'Escrever testes unitários e integração',
      'Documentar API com Swagger'
    ],
    activities: [
      {
        id: 'backend-api-1',
        title: 'Estrutura Base',
        description: 'Configure projeto Spring Boot',
        type: 'exercise',
        difficulty: 'easy',
        estimatedHours: 3,
        tasks: [
          {
            id: 'task-1',
            title: 'Criar Projeto',
            description: 'Use Spring Initializr',
            completed: false,
            estimatedHours: 0.5
          },
          {
            id: 'task-2',
            title: 'Configurar BD',
            description: 'Configure JPA e banco de dados',
            completed: false,
            estimatedHours: 1
          },
          {
            id: 'task-3',
            title: 'Criar Entidades',
            description: 'Crie classes de modelo',
            completed: false,
            estimatedHours: 1.5
          }
        ],
        resources: ['https://spring.io/projects/spring-boot'],
        expectedOutcome: 'Projeto Spring Boot configurado'
      },
      {
        id: 'backend-api-2',
        title: 'Endpoints CRUD',
        description: 'Implemente operações CRUD',
        type: 'challenge',
        difficulty: 'medium',
        estimatedHours: 5,
        tasks: [
          {
            id: 'task-4',
            title: 'Repository',
            description: 'Crie repository interface',
            completed: false,
            estimatedHours: 1
          },
          {
            id: 'task-5',
            title: 'Service',
            description: 'Implemente lógica de negócio',
            completed: false,
            estimatedHours: 2
          },
          {
            id: 'task-6',
            title: 'Controller',
            description: 'Crie endpoints REST',
            completed: false,
            estimatedHours: 2
          }
        ],
        resources: ['https://spring.io/guides/gs/rest-service/'],
        expectedOutcome: 'Endpoints CRUD funcionais'
      },
      {
        id: 'backend-api-3',
        title: 'Autenticação e Testes',
        description: 'Implemente segurança e testes',
        type: 'buildup',
        difficulty: 'hard',
        estimatedHours: 12,
        tasks: [
          {
            id: 'task-7',
            title: 'JWT Authentication',
            description: 'Implemente login com JWT',
            completed: false,
            estimatedHours: 3
          },
          {
            id: 'task-8',
            title: 'Validações',
            description: 'Adicione Bean Validation',
            completed: false,
            estimatedHours: 2
          },
          {
            id: 'task-9',
            title: 'Testes Unitários',
            description: 'Escreva testes com JUnit',
            completed: false,
            estimatedHours: 3
          },
          {
            id: 'task-10',
            title: 'Testes Integração',
            description: 'Teste endpoints com MockMvc',
            completed: false,
            estimatedHours: 3
          },
          {
            id: 'task-11',
            title: 'Documentação Swagger',
            description: 'Documente API com Swagger',
            completed: false,
            estimatedHours: 1
          }
        ],
        resources: ['https://spring.io/guides/gs/securing-web/'],
        expectedOutcome: 'API REST segura e testada'
      }
    ],
    portfolioValue: 'high',
    portfolioDescription: 'Projeto profissional que demonstra expertise em desenvolvimento back-end',
    prerequisites: ['spring-boot-basics', 'database-design', 'jwt-auth'],
    resources: [
      {
        title: 'Spring Boot Documentation',
        url: 'https://spring.io/projects/spring-boot',
        type: 'documentation'
      },
      {
        title: 'REST API Best Practices',
        url: 'https://restfulapi.net/',
        type: 'article'
      }
    ],
    successCriteria: [
      'Todos os endpoints funcionam',
      'Autenticação implementada',
      'Validações funcionam',
      'Testes com cobertura >80%',
      'API documentada'
    ],
    bonus: [
      'Implemente paginação',
      'Adicione cache com Redis',
      'Implemente rate limiting',
      'Configure CI/CD',
      'Deploy em nuvem'
    ]
  },

  // ENGLISH - Conversação
  'english-technical-discussion': {
    id: 'english-technical-discussion',
    title: 'Discussão Técnica em Inglês',
    description: 'Pratique discussões técnicas profundas em inglês sobre arquitetura, design patterns e melhores práticas.',
    shortDescription: 'Discussões técnicas em inglês',
    type: 'intermediate',
    category: 'english',
    stage: 19,
    difficulty: 'intermediate',
    estimatedHours: 8,
    technologies: ['English', 'Technical Communication', 'Presentation'],
    learningObjectives: [
      'Discutir arquitetura de software',
      'Explicar design patterns',
      'Argumentar sobre trade-offs',
      'Apresentar ideias profissionalmente',
      'Responder perguntas técnicas'
    ],
    activities: [
      {
        id: 'english-tech-1',
        title: 'Preparação de Tópicos',
        description: 'Prepare 5 tópicos técnicos para discussão',
        type: 'exercise',
        difficulty: 'easy',
        estimatedHours: 2,
        tasks: [
          {
            id: 'task-1',
            title: 'Pesquisar Tópicos',
            description: 'Escolha 5 tópicos interessantes',
            completed: false,
            estimatedHours: 1
          },
          {
            id: 'task-2',
            title: 'Preparar Notas',
            description: 'Escreva notas em inglês',
            completed: false,
            estimatedHours: 1
          }
        ],
        resources: ['https://www.englishclub.com/'],
        expectedOutcome: 'Notas preparadas para discussão'
      },
      {
        id: 'english-tech-2',
        title: 'Praticar Apresentações',
        description: 'Grave apresentações sobre tópicos',
        type: 'challenge',
        difficulty: 'medium',
        estimatedHours: 3,
        tasks: [
          {
            id: 'task-3',
            title: 'Apresentação 1',
            description: 'Grave apresentação de 5 minutos',
            completed: false,
            estimatedHours: 1
          },
          {
            id: 'task-4',
            title: 'Apresentação 2',
            description: 'Grave segunda apresentação',
            completed: false,
            estimatedHours: 1
          },
          {
            id: 'task-5',
            title: 'Autoavaliação',
            description: 'Revise e critique suas apresentações',
            completed: false,
            estimatedHours: 1
          }
        ],
        resources: [],
        expectedOutcome: 'Apresentações gravadas'
      },
      {
        id: 'english-tech-3',
        title: 'Discussões em Grupo',
        description: 'Participe de discussões com outros',
        type: 'buildup',
        difficulty: 'medium',
        estimatedHours: 3,
        tasks: [
          {
            id: 'task-6',
            title: 'Encontro 1',
            description: 'Participe de discussão online',
            completed: false,
            estimatedHours: 1.5
          },
          {
            id: 'task-7',
            title: 'Encontro 2',
            description: 'Participe de segunda discussão',
            completed: false,
            estimatedHours: 1.5
          }
        ],
        resources: [],
        expectedOutcome: 'Experiência em discussões técnicas'
      }
    ],
    portfolioValue: 'medium',
    portfolioDescription: 'Demonstra fluência técnica em inglês e habilidades de comunicação',
    prerequisites: ['english-vocabulary', 'english-conversation'],
    resources: [
      {
        title: 'TED Talks Tech',
        url: 'https://www.ted.com/topics/technology',
        type: 'video'
      }
    ],
    successCriteria: [
      'Apresentações claras e bem estruturadas',
      'Vocabulário técnico usado corretamente',
      'Pronúncia compreensível',
      'Participa ativamente em discussões'
    ],
    bonus: [
      'Apresente em conferência',
      'Publique artigo técnico',
      'Crie podcast técnico',
      'Faça entrevista técnica'
    ]
  },
  'math-calculadora-fracoes': {
    id: 'math-calculadora-fracoes',
    title: 'Calculadora de Frações',
    description: 'Implemente uma calculadora completa que realiza operações com frações, simplificação e conversão de formatos.',
    shortDescription: 'Operações com frações',
    type: 'beginner',
    category: 'math',
    stage: 0,
    difficulty: 'beginner',
    estimatedHours: 8,
    technologies: ['Python', 'Java', 'JavaScript'],
    learningObjectives: [
      'Entender estrutura de dados para frações',
      'Implementar operações aritméticas',
      'Simplificar frações usando MDC',
      'Converter entre formatos'
    ],
    activities: [
      {
        id: 'math-frac-1',
        title: 'Estrutura de Dados',
        description: 'Crie classe para representar frações',
        type: 'exercise',
        difficulty: 'easy',
        estimatedHours: 2,
        tasks: [
          { id: 't1', title: 'Definir classe Fraction', description: 'Crie classe com numerador e denominador', completed: false, estimatedHours: 1 },
          { id: 't2', title: 'Implementar toString', description: 'Represente fração como string', completed: false, estimatedHours: 0.5 }
        ],
        resources: [],
        expectedOutcome: 'Classe Fraction funcional'
      },
      {
        id: 'math-frac-2',
        title: 'Operações Aritméticas',
        description: 'Implemente soma, subtração, multiplicação e divisão',
        type: 'challenge',
        difficulty: 'medium',
        estimatedHours: 3,
        tasks: [
          { id: 't3', title: 'Soma de frações', description: 'Implemente adição', completed: false, estimatedHours: 0.75 },
          { id: 't4', title: 'Subtração', description: 'Implemente subtração', completed: false, estimatedHours: 0.75 },
          { id: 't5', title: 'Multiplicação', description: 'Implemente multiplicação', completed: false, estimatedHours: 0.75 },
          { id: 't6', title: 'Divisão', description: 'Implemente divisão', completed: false, estimatedHours: 0.75 }
        ],
        resources: [],
        expectedOutcome: 'Todas as operações funcionando'
      },
      {
        id: 'math-frac-3',
        title: 'Simplificação',
        description: 'Implemente simplificação automática usando MDC',
        type: 'practice',
        difficulty: 'medium',
        estimatedHours: 2,
        tasks: [
          { id: 't7', title: 'Calcular MDC', description: 'Implemente algoritmo de Euclides', completed: false, estimatedHours: 1 },
          { id: 't8', title: 'Simplificar', description: 'Use MDC para simplificar', completed: false, estimatedHours: 1 }
        ],
        resources: [],
        expectedOutcome: 'Frações simplificadas automaticamente'
      },
      {
        id: 'math-frac-4',
        title: 'Testes e UI',
        description: 'Crie testes unitários e interface de usuário',
        type: 'buildup',
        difficulty: 'easy',
        estimatedHours: 1,
        tasks: [
          { id: 't9', title: 'Testes unitários', description: 'Teste todas as operações', completed: false, estimatedHours: 0.5 },
          { id: 't10', title: 'Interface', description: 'Crie interface para usar a calculadora', completed: false, estimatedHours: 0.5 }
        ],
        resources: [],
        expectedOutcome: 'Calculadora testada e funcional'
      }
    ],
    portfolioValue: 'medium',
    portfolioDescription: 'Demonstra compreensão de estruturas de dados e operações matemáticas',
    prerequisites: ['math-fundamentals'],
    resources: [
      { title: 'Frações - Khan Academy', url: 'https://www.khanacademy.org/math/arithmetic/fraction-arithmetic', type: 'tutorial' },
      { title: 'MDC - Algoritmo de Euclides', url: 'https://pt.wikipedia.org/wiki/Algoritmo_de_Euclides', type: 'article' }
    ],
    successCriteria: [
      'Todas as operações funcionam corretamente',
      'Frações são simplificadas automaticamente',
      'Código bem documentado',
      'Testes passam com sucesso'
    ],
    bonus: [
      'Implemente conversão para decimal',
      'Crie visualização gráfica de frações',
      'Adicione suporte a números mistos',
      'Implemente comparação de frações'
    ]
  },
  'math-derivadas': {
    id: 'math-derivadas',
    title: 'Calculadora de Derivadas',
    description: 'Implemente um sistema de diferenciação simbólica que calcula derivadas de funções polinomiais.',
    shortDescription: 'Diferenciação simbólica',
    type: 'intermediate',
    category: 'math',
    stage: 3,
    difficulty: 'intermediate',
    estimatedHours: 12,
    technologies: ['Python', 'SymPy', 'NumPy'],
    learningObjectives: [
      'Entender regras de derivação',
      'Implementar diferenciação simbólica',
      'Trabalhar com expressões matemáticas',
      'Otimizar funções'
    ],
    activities: [
      {
        id: 'math-der-1',
        title: 'Representação de Expressões',
        description: 'Crie estrutura para representar expressões matemáticas',
        type: 'exercise',
        difficulty: 'medium',
        estimatedHours: 3,
        tasks: [
          { id: 't1', title: 'Classe Expression', description: 'Crie classe base para expressões', completed: false, estimatedHours: 1.5 },
          { id: 't2', title: 'Subclasses', description: 'Crie subclasses para diferentes tipos', completed: false, estimatedHours: 1.5 }
        ],
        resources: [],
        expectedOutcome: 'Hierarquia de classes para expressões'
      },
      {
        id: 'math-der-2',
        title: 'Regras de Derivação',
        description: 'Implemente as principais regras de derivação',
        type: 'challenge',
        difficulty: 'hard',
        estimatedHours: 5,
        tasks: [
          { id: 't3', title: 'Regra da Potência', description: 'Implemente d/dx(x^n)', completed: false, estimatedHours: 1 },
          { id: 't4', title: 'Regra do Produto', description: 'Implemente (f*g)\' = f\'*g + f*g\'', completed: false, estimatedHours: 1.5 },
          { id: 't5', title: 'Regra da Cadeia', description: 'Implemente (f(g(x)))\'', completed: false, estimatedHours: 1.5 },
          { id: 't6', title: 'Regra do Quociente', description: 'Implemente (f/g)\'', completed: false, estimatedHours: 1 }
        ],
        resources: [],
        expectedOutcome: 'Todas as regras funcionando'
      },
      {
        id: 'math-der-3',
        title: 'Otimizador',
        description: 'Use derivadas para encontrar máximos e mínimos',
        type: 'practice',
        difficulty: 'hard',
        estimatedHours: 3,
        tasks: [
          { id: 't7', title: 'Encontrar críticos', description: 'Encontre pontos críticos', completed: false, estimatedHours: 1.5 },
          { id: 't8', title: 'Classificar', description: 'Classifique como máximo ou mínimo', completed: false, estimatedHours: 1.5 }
        ],
        resources: [],
        expectedOutcome: 'Otimizador funcional'
      }
    ],
    portfolioValue: 'high',
    portfolioDescription: 'Projeto avançado que demonstra domínio de cálculo e programação orientada a objetos',
    prerequisites: ['math-calculus-1', 'programming-oop'],
    resources: [
      { title: 'SymPy Documentation', url: 'https://docs.sympy.org/', type: 'documentation' },
      { title: 'Calculus - Khan Academy', url: 'https://www.khanacademy.org/math/calculus-1', type: 'tutorial' }
    ],
    successCriteria: [
      'Calcula derivadas corretamente',
      'Encontra máximos e mínimos',
      'Código bem estruturado',
      'Testes abrangentes'
    ],
    bonus: [
      'Implemente derivadas parciais',
      'Crie visualização de derivadas',
      'Implemente série de Taylor',
      'Adicione suporte a funções trigonométricas'
    ]
  },
  'math-algebra-linear': {
    id: 'math-algebra-linear',
    title: 'Biblioteca de Álgebra Linear',
    description: 'Implemente uma biblioteca completa de operações matriciais e álgebra linear.',
    shortDescription: 'Operações com matrizes',
    type: 'advanced',
    category: 'math',
    stage: 5,
    difficulty: 'advanced',
    estimatedHours: 16,
    technologies: ['Python', 'NumPy', 'SciPy'],
    learningObjectives: [
      'Implementar operações matriciais',
      'Calcular determinantes e inversas',
      'Decompor matrizes (LU, QR, SVD)',
      'Resolver sistemas lineares'
    ],
    activities: [
      {
        id: 'math-la-1',
        title: 'Classe Matrix',
        description: 'Crie classe para representar matrizes',
        type: 'exercise',
        difficulty: 'medium',
        estimatedHours: 3,
        tasks: [
          { id: 't1', title: 'Construtor', description: 'Crie construtor da classe', completed: false, estimatedHours: 1 },
          { id: 't2', title: 'Operações básicas', description: 'Implemente soma, subtração, multiplicação', completed: false, estimatedHours: 2 }
        ],
        resources: [],
        expectedOutcome: 'Classe Matrix com operações básicas'
      },
      {
        id: 'math-la-2',
        title: 'Determinantes e Inversas',
        description: 'Implemente cálculo de determinantes e matrizes inversas',
        type: 'challenge',
        difficulty: 'hard',
        estimatedHours: 4,
        tasks: [
          { id: 't3', title: 'Determinante', description: 'Implemente cálculo de determinante', completed: false, estimatedHours: 2 },
          { id: 't4', title: 'Inversa', description: 'Implemente cálculo de matriz inversa', completed: false, estimatedHours: 2 }
        ],
        resources: [],
        expectedOutcome: 'Determinantes e inversas funcionando'
      },
      {
        id: 'math-la-3',
        title: 'Decomposições',
        description: 'Implemente decomposições LU, QR e SVD',
        type: 'practice',
        difficulty: 'hard',
        estimatedHours: 5,
        tasks: [
          { id: 't5', title: 'Decomposição LU', description: 'Implemente LU', completed: false, estimatedHours: 1.5 },
          { id: 't6', title: 'Decomposição QR', description: 'Implemente QR', completed: false, estimatedHours: 2 },
          { id: 't7', title: 'Decomposição SVD', description: 'Implemente SVD', completed: false, estimatedHours: 1.5 }
        ],
        resources: [],
        expectedOutcome: 'Todas as decomposições funcionando'
      },
      {
        id: 'math-la-4',
        title: 'Sistemas Lineares',
        description: 'Use decomposições para resolver sistemas',
        type: 'buildup',
        difficulty: 'hard',
        estimatedHours: 4,
        tasks: [
          { id: 't8', title: 'Solver LU', description: 'Resolva sistema usando LU', completed: false, estimatedHours: 2 },
          { id: 't9', title: 'Testes', description: 'Teste com sistemas conhecidos', completed: false, estimatedHours: 2 }
        ],
        resources: [],
        expectedOutcome: 'Solver de sistemas lineares'
      }
    ],
    portfolioValue: 'high',
    portfolioDescription: 'Projeto profissional que demonstra domínio de álgebra linear computacional',
    prerequisites: ['math-linear-algebra', 'programming-advanced'],
    resources: [
      { title: 'NumPy Linear Algebra', url: 'https://numpy.org/doc/stable/reference/routines.linalg.html', type: 'documentation' },
      { title: '3Blue1Brown - Essence of Linear Algebra', url: 'https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab', type: 'video' }
    ],
    successCriteria: [
      'Todas as operações funcionam corretamente',
      'Decomposições implementadas corretamente',
      'Sistemas lineares resolvidos com precisão',
      'Código otimizado e bem documentado'
    ],
    bonus: [
      'Implemente autovalores e autovetores',
      'Crie visualizações de transformações',
      'Implemente PCA',
      'Adicione suporte a matrizes esparsas'
    ]
  },
  'math-ml-pipeline': {
    id: 'math-ml-pipeline',
    title: 'Pipeline de Machine Learning',
    description: 'Crie um pipeline completo de ML com regressão, classificação e clustering.',
    shortDescription: 'Aprendizado de máquina',
    type: 'portfolio',
    category: 'math',
    stage: 8,
    difficulty: 'advanced',
    estimatedHours: 20,
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib'],
    learningObjectives: [
      'Implementar algoritmos de ML',
      'Processar e preparar dados',
      'Avaliar modelos',
      'Otimizar hiperparâmetros'
    ],
    activities: [
      {
        id: 'math-ml-1',
        title: 'Preparação de Dados',
        description: 'Carregue, limpe e prepare dados',
        type: 'exercise',
        difficulty: 'medium',
        estimatedHours: 4,
        tasks: [
          { id: 't1', title: 'Carregar dados', description: 'Carregue dataset', completed: false, estimatedHours: 1 },
          { id: 't2', title: 'Limpeza', description: 'Trate valores faltantes', completed: false, estimatedHours: 1.5 },
          { id: 't3', title: 'Normalização', description: 'Normalize features', completed: false, estimatedHours: 1.5 }
        ],
        resources: [],
        expectedOutcome: 'Dados prontos para ML'
      },
      {
        id: 'math-ml-2',
        title: 'Modelos de Regressão',
        description: 'Implemente regressão linear e não-linear',
        type: 'challenge',
        difficulty: 'hard',
        estimatedHours: 5,
        tasks: [
          { id: 't4', title: 'Regressão Linear', description: 'Implemente regressão linear', completed: false, estimatedHours: 2 },
          { id: 't5', title: 'Regressão Polinomial', description: 'Implemente regressão polinomial', completed: false, estimatedHours: 1.5 },
          { id: 't6', title: 'Validação', description: 'Valide modelos', completed: false, estimatedHours: 1.5 }
        ],
        resources: [],
        expectedOutcome: 'Modelos de regressão funcionando'
      },
      {
        id: 'math-ml-3',
        title: 'Classificação',
        description: 'Implemente classificadores',
        type: 'practice',
        difficulty: 'hard',
        estimatedHours: 5,
        tasks: [
          { id: 't7', title: 'Regressão Logística', description: 'Implemente classificação binária', completed: false, estimatedHours: 2 },
          { id: 't8', title: 'SVM', description: 'Implemente SVM', completed: false, estimatedHours: 1.5 },
          { id: 't9', title: 'Avaliação', description: 'Calcule métricas (precisão, recall, F1)', completed: false, estimatedHours: 1.5 }
        ],
        resources: [],
        expectedOutcome: 'Classificadores funcionando'
      },
      {
        id: 'math-ml-4',
        title: 'Clustering',
        description: 'Implemente algoritmos de clustering',
        type: 'buildup',
        difficulty: 'hard',
        estimatedHours: 4,
        tasks: [
          { id: 't10', title: 'K-Means', description: 'Implemente K-Means', completed: false, estimatedHours: 2 },
          { id: 't11', title: 'Visualização', description: 'Visualize clusters', completed: false, estimatedHours: 2 }
        ],
        resources: [],
        expectedOutcome: 'Pipeline completo de ML'
      }
    ],
    portfolioValue: 'high',
    portfolioDescription: 'Projeto profissional essencial para cientistas de dados',
    prerequisites: ['math-statistics', 'math-linear-algebra', 'programming-python'],
    resources: [
      { title: 'Scikit-learn Documentation', url: 'https://scikit-learn.org/stable/', type: 'documentation' },
      { title: 'Andrew Ng - Machine Learning', url: 'https://www.coursera.org/learn/machine-learning', type: 'tutorial' }
    ],
    successCriteria: [
      'Pipeline completo funcionando',
      'Modelos treinados com sucesso',
      'Métricas calculadas corretamente',
      'Visualizações claras e informativas'
    ],
    bonus: [
      'Implemente validação cruzada',
      'Otimize hiperparâmetros com GridSearch',
      'Crie ensemble de modelos',
      'Implemente deep learning com TensorFlow'
    ]
  }
};

// Funções utilitárias
export function getProjectById(id: string): PracticalProject | undefined {
  return practicalProjectsData[id];
}

export function getAllProjects(): PracticalProject[] {
  return Object.values(practicalProjectsData);
}

export function getProjectsByCategory(category: ProjectCategory): PracticalProject[] {
  return Object.values(practicalProjectsData).filter(p => p.category === category);
}

export function getProjectsByType(type: ProjectType): PracticalProject[] {
  return Object.values(practicalProjectsData).filter(p => p.type === type);
}

export function getProjectsByStage(stage: number): PracticalProject[] {
  return Object.values(practicalProjectsData).filter(p => p.stage === stage);
}

export function getPortfolioProjects(): PracticalProject[] {
  return Object.values(practicalProjectsData).filter(p => p.portfolioValue !== 'low');
}

export function getProjectsByDifficulty(difficulty: 'beginner' | 'intermediate' | 'advanced'): PracticalProject[] {
  return Object.values(practicalProjectsData).filter(p => p.difficulty === difficulty);
}
