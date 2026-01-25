// Mapeamento de títulos de conceitos para seus IDs reais
export const conceptTitleToId: Record<string, string> = {
  // ==================== JAVA ====================
  'Introdução a Java': 'java-intro',
  'Tipos de Dados': 'java-types',
  'Variáveis': 'java-variables',
  'Operadores Aritméticos': 'java-operators-arithmetic',
  'Operadores Lógicos': 'java-operators-logical',
  'if-else': 'java-if-else',
  'switch-case': 'java-switch',
  'for': 'java-for',
  'while': 'java-while',
  'do-while': 'java-do-while',
  'break/continue': 'java-break-continue',
  'Arrays': 'java-arrays',
  'Loops sobre Arrays': 'java-array-loops',
  'Strings': 'java-strings',
  'Métodos de String': 'java-string-methods',
  'Comparação': 'java-comparison',
  'Declaração de Métodos': 'java-methods',
  'Parâmetros': 'java-parameters',
  'Retorno': 'java-return',
  'Sobrecarga': 'java-overloading',
  'Recursão': 'java-recursion',
  'Classes': 'java-classes',
  'Objetos': 'java-objects',
  'Atributos': 'java-attributes',
  'Construtores': 'java-constructors',
  'Getters/Setters': 'java-getters-setters',
  'Herança': 'java-oop-inheritance',
  'Sobrescrita': 'java-override',
  '@Override': 'java-override-annotation',
  'Polimorfismo': 'java-oop-polymorphism',
  'ArrayList': 'java-arraylist',
  'Interfaces': 'java-interfaces',
  'Classes Abstratas': 'java-abstract-classes',
  'Coleções': 'java-collections',
  'Exceções': 'java-exceptions',
  'Polimorfismo Avançado': 'java-advanced-polymorphism',
  'Design Patterns': 'java-design-patterns',
  'Concorrência': 'java-concurrency',
  'Reflection': 'java-reflection',

  // ==================== BACK-END ====================
  'Git Basics': 'backend-git-basics',
  'Commits': 'backend-git-commits',
  'Branches': 'backend-git-branches',
  'Merge': 'backend-git-merge',
  'GitHub': 'backend-github',
  'Pull Requests': 'backend-pull-requests',
  'Modelagem': 'database-modeling',
  'SQL': 'database-sql',
  'Relacionamentos': 'database-relationships',
  'Normalização': 'database-normalization',
  'Índices': 'database-indexes',
  'Queries': 'database-queries',
  'JDBC': 'backend-jdbc',
  'Connection Pool': 'backend-connection-pool',
  'DAO Pattern': 'backend-dao-pattern',
  'Transações': 'backend-transactions',
  'Prepared Statements': 'backend-prepared-statements',
  'REST': 'backend-rest',
  'Spring Boot': 'backend-spring-boot',
  'Spring Data JPA': 'backend-spring-data-jpa',
  'Endpoints': 'backend-endpoints',
  'JSON': 'backend-json',
  'HTTP Methods': 'backend-http-methods',
  'JWT': 'security-jwt',
  'OAuth2': 'security-oauth2',
  'Spring Security': 'backend-spring-security',
  'Roles': 'security-roles',
  'Criptografia': 'security-encryption',
  'Permissões': 'security-permissions',
  'Docker': 'devops-docker',
  'CI/CD': 'devops-cicd',
  'Variáveis de Ambiente': 'backend-env-variables',
  'Logs': 'backend-logging',
  'Monitoramento': 'backend-monitoring',
  'Cloud': 'backend-cloud',
  'JUnit': 'testing-unit',
  'Mockito': 'testing-mockito',
  'Testes Unitários': 'testing-unit-tests',
  'Testes de Integração': 'testing-integration',
  'TDD': 'testing-tdd',
  'Cobertura': 'testing-coverage',
  'SOLID': 'backend-solid',
  'Clean Architecture': 'backend-clean-architecture',
  'MVC': 'backend-mvc',
  'Refatoração': 'backend-refactoring',

  // ==================== FRONT-END ====================
  'HTML Básico': 'frontend-html-basics',
  'CSS Básico': 'frontend-css-basics',
  'Seletores CSS': 'frontend-css-selectors',
  'Flexbox': 'frontend-flexbox',
  'Grid': 'frontend-grid',
  'Responsividade': 'frontend-responsive',
  'JavaScript Básico': 'frontend-js-basics',
  'DOM': 'frontend-dom',
  'Eventos': 'frontend-events',
  'Async/Await': 'frontend-async-await',
  'Fetch API': 'frontend-fetch-api',
  'React Basics': 'frontend-react-basics',
  'JSX': 'frontend-jsx',
  'Componentes': 'frontend-components',
  'Props': 'frontend-props',
  'State': 'frontend-state',
  'Hooks': 'frontend-hooks',
  'Context API': 'frontend-context-api',
  'Roteamento': 'frontend-routing',
  'Formulários': 'frontend-forms',

  // ==================== FULL-STACK ====================
  'Arquitetura Web': 'fullstack-architecture',
  'Banco de Dados Relacional': 'fullstack-relational-db',
  'APIs RESTful': 'fullstack-restful-apis',
  'Autenticação': 'fullstack-authentication',
  'Deployment': 'fullstack-deployment',

  // ==================== INGLÊS ====================
  'Alfabeto': 'english-alphabet',
  'Pronúncia': 'english-pronunciation',
  'Present Simple': 'english-present-simple',
  'Números': 'english-numbers',
  'Saudações': 'english-greetings',
  'Termos Técnicos': 'english-technical-terms',
  'Comandos': 'english-commands',
  'Documentação': 'english-documentation',
  'README': 'english-readme',
  'Comentários': 'english-comments',

  // ==================== MATEMÁTICA ====================
  'Álgebra': 'math-algebra',
  'Geometria': 'math-geometry',
  'Trigonometria': 'math-trigonometry',
  'Cálculo': 'math-calculus',
  'Estatística': 'math-statistics',
  'Lógica': 'math-logic',
  'Conjuntos': 'math-sets',
  'Funções': 'math-functions',
};

// Função para obter ID a partir do título
export function getConceptIdFromTitle(title: string): string | undefined {
  return conceptTitleToId[title];
}

// Função para obter ID ou usar como fallback
export function resolveConceptId(titleOrId: string): string {
  // Prefixos válidos de IDs
  const validPrefixes = ['java-', 'backend-', 'frontend-', 'english-', 'math-', 'fullstack-', 'security-', 'devops-', 'testing-', 'database-', 'performance-'];
  
  // Se já é um ID válido (começa com um prefixo conhecido), retorna
  if (validPrefixes.some(prefix => titleOrId.startsWith(prefix))) {
    return titleOrId;
  }
  
  // Caso contrário, tenta mapear do título
  const mapped = conceptTitleToId[titleOrId];
  if (mapped) {
    return mapped;
  }
  
  // Se não encontrar no mapeamento, tenta criar um slug
  // Isso é um fallback, mas idealmente todos os conceitos devem estar no mapeamento
  return titleOrId;
}
