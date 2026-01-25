import { Stage, Resource } from './stagesData';

export const stagesDataComplete: Record<string, Stage> = {
  // ==================== TRILHA INGLÊS ====================
  'english-stage-1': {
    id: 'english-stage-1',
    trailId: 'english',
    stageNumber: 1,
    title: 'Gramática Básica',
    description: 'Aprenda os fundamentos da gramática inglesa',
    duration: '2-3 semanas',
    difficulty: 'Iniciante',
    objectives: [
      'Entender partes do discurso',
      'Usar presente simples',
      'Formar perguntas básicas',
      'Usar pronomes pessoais'
    ],
    topics: ['english-business', 'english-technical'],
    projects: [],
    resources: [],
    prerequisites: [],
    content: `## Estágio 1: Gramática Básica

Fundamentos essenciais para aprender inglês.`
  },

  'english-stage-2': {
    id: 'english-stage-2',
    trailId: 'english',
    stageNumber: 2,
    title: 'Vocabulário Técnico',
    description: 'Aprenda vocabulário técnico em inglês',
    duration: '2-3 semanas',
    difficulty: 'Intermediário',
    objectives: [
      'Dominar vocabulário de TI',
      'Entender termos técnicos',
      'Comunicar-se em contexto profissional'
    ],
    topics: ['english-technical'],
    projects: [],
    resources: [],
    prerequisites: ['english-stage-1'],
    content: `## Estágio 2: Vocabulário Técnico

Aprenda termos técnicos essenciais.`
  },

  // ==================== TRILHA MATEMÁTICA ====================
  'math-stage-1': {
    id: 'math-stage-1',
    trailId: 'math',
    stageNumber: 1,
    title: 'Álgebra Básica',
    description: 'Fundamentos de álgebra',
    duration: '3-4 semanas',
    difficulty: 'Iniciante',
    objectives: [
      'Entender variáveis e expressões',
      'Resolver equações simples',
      'Trabalhar com polinômios'
    ],
    topics: [],
    projects: [],
    resources: [],
    prerequisites: [],
    content: `## Estágio 1: Álgebra Básica

Fundamentos de álgebra para programadores.`
  },

  'math-stage-2': {
    id: 'math-stage-2',
    trailId: 'math',
    stageNumber: 2,
    title: 'Cálculo Essencial',
    description: 'Conceitos de cálculo importantes',
    duration: '3-4 semanas',
    difficulty: 'Intermediário',
    objectives: [
      'Entender limites',
      'Aprender derivadas',
      'Aprender integrais'
    ],
    topics: [],
    projects: [],
    resources: [],
    prerequisites: ['math-stage-1'],
    content: `## Estágio 2: Cálculo Essencial

Conceitos de cálculo para desenvolvimento.`
  },

  // ==================== TRILHA BACK-END ====================
  'backend-stage-1': {
    id: 'backend-stage-1',
    trailId: 'backend',
    stageNumber: 1,
    title: 'Fundamentos de Back-End',
    description: 'Aprenda os fundamentos de desenvolvimento back-end',
    duration: '2-3 semanas',
    difficulty: 'Intermediário',
    objectives: [
      'Entender arquitetura cliente-servidor',
      'Aprender HTTP e REST',
      'Criar APIs simples'
    ],
    topics: ['backend-spring-intro', 'backend-jpa-hibernate'],
    projects: [],
    resources: [],
    prerequisites: [],
    content: `## Estágio 1: Fundamentos de Back-End

Aprenda os conceitos fundamentais.`
  },

  'backend-stage-2': {
    id: 'backend-stage-2',
    trailId: 'backend',
    stageNumber: 2,
    title: 'Bancos de Dados',
    description: 'Trabalhe com bancos de dados',
    duration: '3-4 semanas',
    difficulty: 'Intermediário',
    objectives: [
      'Entender SQL',
      'Usar bancos de dados relacionais',
      'Otimizar queries'
    ],
    topics: ['backend-jpa-hibernate', 'backend-spring-intro'],
    projects: [],
    resources: [],
    prerequisites: ['backend-stage-1'],
    content: `## Estágio 2: Bancos de Dados

Trabalhe com dados de forma profissional.`
  },

  // ==================== TRILHA FRONT-END ====================
  'frontend-stage-1': {
    id: 'frontend-stage-1',
    trailId: 'frontend',
    stageNumber: 1,
    title: 'HTML e CSS Fundamentais',
    description: 'Aprenda os fundamentos de HTML e CSS',
    duration: '2-3 semanas',
    difficulty: 'Iniciante',
    objectives: [
      'Estruturar páginas com HTML',
      'Estilizar com CSS',
      'Criar layouts responsivos'
    ],
    topics: ['frontend-typescript', 'frontend-state-management'],
    projects: [],
    resources: [],
    prerequisites: [],
    content: `## Estágio 1: HTML e CSS Fundamentais

Crie páginas web bonitas e responsivas.`
  },

  'frontend-stage-2': {
    id: 'frontend-stage-2',
    trailId: 'frontend',
    stageNumber: 2,
    title: 'JavaScript Essencial',
    description: 'Aprenda JavaScript para interatividade',
    duration: '3-4 semanas',
    difficulty: 'Intermediário',
    objectives: [
      'Dominar JavaScript',
      'Manipular o DOM',
      'Trabalhar com eventos'
    ],
    topics: ['frontend-typescript', 'frontend-state-management'],
    projects: [],
    resources: [],
    prerequisites: ['frontend-stage-1'],
    content: `## Estágio 2: JavaScript Essencial

Torne suas páginas interativas.`
  },

  'frontend-stage-3': {
    id: 'frontend-stage-3',
    trailId: 'frontend',
    stageNumber: 3,
    title: 'React Avançado',
    description: 'Crie aplicações modernas com React',
    duration: '4-6 semanas',
    difficulty: 'Avançado',
    objectives: [
      'Dominar componentes React',
      'Usar hooks',
      'Gerenciar estado'
    ],
    topics: ['frontend-typescript', 'frontend-state-management'],
    projects: [],
    resources: [],
    prerequisites: ['frontend-stage-2'],
    content: `## Estágio 3: React Avançado

Crie aplicações web profissionais.`
  },

  // ==================== TRILHA FULL-STACK ====================
  'fullstack-stage-1': {
    id: 'fullstack-stage-1',
    trailId: 'fullstack',
    stageNumber: 1,
    title: 'Fundamentos Full-Stack',
    description: 'Aprenda desenvolvimento full-stack',
    duration: '4-6 semanas',
    difficulty: 'Intermediário',
    objectives: [
      'Entender arquitetura full-stack',
      'Conectar front-end e back-end',
      'Usar APIs'
    ],
    topics: ['fullstack-deployment', 'fullstack-deployment'],
    projects: [],
    resources: [],
    prerequisites: [],
    content: `## Estágio 1: Fundamentos Full-Stack

Aprenda a criar aplicações completas.`
  },

  'fullstack-stage-2': {
    id: 'fullstack-stage-2',
    trailId: 'fullstack',
    stageNumber: 2,
    title: 'Deployment e DevOps',
    description: 'Deploy de aplicações full-stack',
    duration: '2-3 semanas',
    difficulty: 'Avançado',
    objectives: [
      'Fazer deploy de aplicações',
      'Usar Docker',
      'Entender CI/CD'
    ],
    topics: ['fullstack-deployment', 'fullstack-deployment'],
    projects: [],
    resources: [],
    prerequisites: ['fullstack-stage-1'],
    content: `## Estágio 2: Deployment e DevOps

Coloque suas aplicações em produção.`
  }
};
