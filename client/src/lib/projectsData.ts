// Estrutura de dados para Projetos Práticos, Portfólio e Atividades

export type ProjectType = 'idea' | 'beginner' | 'intermediate' | 'advanced' | 'portfolio';
export type ProjectCategory = 'java' | 'backend' | 'english' | 'fullstack';

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
