export interface Stage {
  id: string;
  trailId: string;
  stageNumber: number;
  title: string;
  description: string;
  duration: string;
  difficulty: 'Iniciante' | 'Intermediário' | 'Avançado';
  objectives: string[];
  topics: string[];
  projects: string[];
  resources: Resource[];
  prerequisites: string[];
  content: string;
}

export interface Resource {
  title: string;
  url: string;
  type: 'documentation' | 'tutorial' | 'video' | 'article';
}

export const stagesData: Record<string, Stage> = {
  // ==================== ROAD JAVA ====================
  'java-stage-1': {
    id: 'java-stage-1',
    trailId: 'java',
    stageNumber: 1,
    title: 'Fundamentos de Java',
    description: 'Aprenda os conceitos básicos de Java, configuração do ambiente e sua primeira aplicação',
    duration: '1-2 semanas',
    difficulty: 'Iniciante',
    objectives: [
      'Entender o que é Java e por que é importante',
      'Configurar o ambiente de desenvolvimento',
      'Escrever seu primeiro programa Java',
      'Entender a estrutura básica de um programa'
    ],
    topics: [
      'java-intro',
      'java-variables',
      'java-operators'
    ],
    projects: ['Calculadora Simples', 'Conversor de Temperaturas'],
    resources: [
      { title: 'Oracle Java Documentation', url: 'https://docs.oracle.com/javase/', type: 'documentation' },
      { title: 'Java Tutorial for Beginners', url: 'https://www.youtube.com/watch?v=eIrMbAQSU34', type: 'video' }
    ],
    prerequisites: [],
    content: `## Estágio 1: Fundamentos de Java

Bem-vindo ao início da sua jornada em Java! Neste estágio, você aprenderá os conceitos fundamentais que formam a base de toda programação em Java.

### O que você vai aprender:
1. **Introdução a Java**: História, características e por que é usado em empresas
2. **Configuração do Ambiente**: Instalação do JDK e IDE (Eclipse, IntelliJ ou VS Code)
3. **Estrutura de um Programa**: Classe, método main, imports
4. **Variáveis e Tipos de Dados**: int, String, double, boolean, etc.
5. **Operadores**: Aritméticos, de comparação e lógicos

### Conceitos-chave:
- Java é compilado para bytecode que roda na JVM (Java Virtual Machine)
- Tudo em Java é um objeto (exceto tipos primitivos)
- Java é fortemente tipado - você deve declarar o tipo de cada variável
- A JVM gerencia memória automaticamente (garbage collection)

### Projetos práticos:
- **Calculadora Simples**: Crie um programa que realiza operações básicas
- **Conversor de Temperaturas**: Converta entre Celsius, Fahrenheit e Kelvin

### Tempo estimado: 1-2 semanas
Dedique 3-4 horas por dia para estudar e praticar.`
  },

  'java-stage-2': {
    id: 'java-stage-2',
    trailId: 'java',
    stageNumber: 2,
    title: 'Estruturas de Controle',
    description: 'Domine condicionais e loops para controlar o fluxo do seu programa',
    duration: '1-2 semanas',
    difficulty: 'Iniciante',
    objectives: [
      'Usar if/else para tomar decisões',
      'Implementar loops for, while e do-while',
      'Usar switch para múltiplas condições',
      'Entender break e continue'
    ],
    topics: [
      'java-conditionals',
      'java-loops'
    ],
    projects: ['Jogo de Adivinhação', 'Tabuada Interativa'],
    resources: [],
    prerequisites: ['java-stage-1'],
    content: `## Estágio 2: Estruturas de Controle

Agora que você sabe declarar variáveis e usar operadores, é hora de aprender a controlar o fluxo do seu programa.

### Condicionais:
- **if**: Executa código se uma condição é verdadeira
- **else if**: Testa múltiplas condições
- **else**: Executa se nenhuma condição anterior foi verdadeira
- **switch**: Seleciona entre múltiplas opções

### Loops:
- **for**: Quando você sabe quantas vezes repetir
- **while**: Enquanto uma condição é verdadeira
- **do-while**: Executa pelo menos uma vez
- **for-each**: Para iterar sobre coleções

### Projetos práticos:
- **Jogo de Adivinhação**: Crie um jogo onde o usuário tenta adivinhar um número
- **Tabuada Interativa**: Peça um número e exiba sua tabuada

### Tempo estimado: 1-2 semanas`
  },

  'java-stage-3': {
    id: 'java-stage-3',
    trailId: 'java',
    stageNumber: 3,
    title: 'Arrays e Strings',
    description: 'Trabalhe com coleções de dados e manipulação de texto',
    duration: '1-2 semanas',
    difficulty: 'Iniciante',
    objectives: [
      'Criar e manipular arrays',
      'Iterar sobre arrays',
      'Trabalhar com strings',
      'Usar métodos de string'
    ],
    topics: [
      'java-arrays',
      'java-strings'
    ],
    projects: ['Gerenciador de Notas', 'Analisador de Texto'],
    resources: [],
    prerequisites: ['java-stage-2'],
    content: `## Estágio 3: Arrays e Strings

Arrays são fundamentais para armazenar múltiplos valores. Strings são usadas para texto.

### Arrays:
- Armazenam múltiplos valores do mesmo tipo
- Índices começam em 0
- Tamanho fixo após criação
- Acesso rápido por índice

### Strings:
- Sequências de caracteres
- Imutáveis em Java
- Muitos métodos úteis (length, charAt, substring, etc.)
- Podem ser concatenadas com +

### Projetos práticos:
- **Gerenciador de Notas**: Armazene e calcule média de notas
- **Analisador de Texto**: Conte palavras, letras, etc.

### Tempo estimado: 1-2 semanas`
  },

  'java-stage-4': {
    id: 'java-stage-4',
    trailId: 'java',
    stageNumber: 4,
    title: 'Métodos e Funções',
    description: 'Organize seu código em métodos reutilizáveis',
    duration: '1-2 semanas',
    difficulty: 'Intermediário',
    objectives: [
      'Criar métodos com e sem parâmetros',
      'Entender retorno de valores',
      'Usar recursão',
      'Organizar código com métodos'
    ],
    topics: [
      'java-methods'
    ],
    projects: ['Calculadora com Métodos', 'Gerador de Fibonacci'],
    resources: [],
    prerequisites: ['java-stage-3'],
    content: `## Estágio 4: Métodos e Funções

Métodos são blocos de código reutilizáveis que realizam uma tarefa específica.

### Estrutura:
\`\`\`
[modificador] tipoRetorno nomeMétodo(parâmetros) {
    // corpo
    return valor;
}
\`\`\`

### Conceitos:
- Métodos promovem reutilização
- Parâmetros são entrada
- Return é saída
- Recursão é quando método chama a si mesmo

### Projetos práticos:
- **Calculadora com Métodos**: Crie métodos para cada operação
- **Gerador de Fibonacci**: Use recursão para gerar sequência

### Tempo estimado: 1-2 semanas`
  },

  'java-stage-5': {
    id: 'java-stage-5',
    trailId: 'java',
    stageNumber: 5,
    title: 'Programação Orientada a Objetos Básica',
    description: 'Aprenda os fundamentos de POO com classes e objetos',
    duration: '2-3 semanas',
    difficulty: 'Intermediário',
    objectives: [
      'Entender classes e objetos',
      'Criar construtores',
      'Usar getters e setters',
      'Implementar encapsulamento'
    ],
    topics: [
      'java-oop-intro',
      'java-classes',
      'java-encapsulation'
    ],
    projects: ['Sistema de Biblioteca', 'Gerenciador de Contas'],
    resources: [],
    prerequisites: ['java-stage-4'],
    content: `## Estágio 5: Programação Orientada a Objetos Básica

POO é um paradigma que organiza código em objetos com dados e comportamento.

### Conceitos:
- **Classe**: Modelo para criar objetos
- **Objeto**: Instância de uma classe
- **Atributos**: Dados do objeto
- **Métodos**: Comportamento do objeto
- **Encapsulamento**: Proteger dados internos

### Modificadores:
- **public**: Acessível de qualquer lugar
- **private**: Apenas dentro da classe
- **protected**: Na classe e subclasses

### Projetos práticos:
- **Sistema de Biblioteca**: Crie classes Livro, Autor, Biblioteca
- **Gerenciador de Contas**: Crie classe ContaBancaria com saldo, depósito, saque

### Tempo estimado: 2-3 semanas`
  },

  'java-stage-6': {
    id: 'java-stage-6',
    trailId: 'java',
    stageNumber: 6,
    title: 'Herança e Polimorfismo',
    description: 'Reutilize código através de herança e aprenda polimorfismo',
    duration: '2-3 semanas',
    difficulty: 'Intermediário',
    objectives: [
      'Entender herança e extends',
      'Usar super para acessar superclasse',
      'Implementar sobrescrita de métodos',
      'Entender polimorfismo'
    ],
    topics: [
      'java-oop-intro',
      'java-methods'
    ],
    projects: ['Sistema de Funcionários', 'Hierarquia de Animais'],
    resources: [],
    prerequisites: ['java-stage-5'],
    content: `## Estágio 6: Herança e Polimorfismo

Herança permite reutilizar código. Polimorfismo permite que objetos tenham múltiplas formas.

### Herança:
- Subclasse herda de superclasse
- Reutiliza atributos e métodos
- Pode adicionar novos atributos e métodos
- Pode sobrescrever métodos

### Polimorfismo:
- Objetos podem ser tratados como tipo da superclasse
- Cada objeto executa sua própria versão do método
- Permite código mais flexível

### Projetos práticos:
- **Sistema de Funcionários**: Crie Funcionário, Gerente, Desenvolvedor
- **Hierarquia de Animais**: Crie Animal, Cachorro, Gato, Passaro

### Tempo estimado: 2-3 semanas`
  },

  'java-stage-7': {
    id: 'java-stage-7',
    trailId: 'java',
    stageNumber: 7,
    title: 'Abstração e Interfaces',
    description: 'Crie abstrações e defina contratos com interfaces',
    duration: '2-3 semanas',
    difficulty: 'Avançado',
    objectives: [
      'Usar classes abstratas',
      'Implementar interfaces',
      'Entender polimorfismo avançado',
      'Aplicar SOLID principles'
    ],
    topics: [],
    projects: ['Sistema de Pagamento', 'Simulador de Formas Geométricas'],
    resources: [],
    prerequisites: ['java-stage-6'],
    content: `## Estágio 7: Abstração e Interfaces

Classes abstratas e interfaces definem contratos que subclasses devem seguir.

### Classes Abstratas:
- Não podem ser instanciadas
- Podem ter métodos abstratos (sem implementação)
- Subclasses devem implementar métodos abstratos
- Podem ter métodos concretos

### Interfaces:
- Definem um contrato (métodos que devem existir)
- Todas as classes que implementam devem ter esses métodos
- Uma classe pode implementar múltiplas interfaces
- Promovem desacoplamento

### Projetos práticos:
- **Sistema de Pagamento**: Crie interface Pagamento com CartaoCredito, PayPal, Bitcoin
- **Simulador de Formas**: Crie interface Forma com Circulo, Quadrado, Triangulo

### Tempo estimado: 2-3 semanas`
  },

  // ==================== ROAD DE MACHO (BACK-END) ====================
  'backend-stage-1': {
    id: 'backend-stage-1',
    trailId: 'backend',
    stageNumber: 1,
    title: 'Git e Controle de Versão',
    description: 'Domine Git para colaboração e controle de código',
    duration: '1 semana',
    difficulty: 'Iniciante',
    objectives: [
      'Entender conceitos de controle de versão',
      'Usar Git localmente',
      'Trabalhar com GitHub',
      'Colaborar em projetos'
    ],
    topics: [
      'backend-git-intro'
    ],
    projects: ['Seu Primeiro Repositório', 'Colaboração em Projeto'],
    resources: [
      { title: 'Git Documentation', url: 'https://git-scm.com/doc', type: 'documentation' },
      { title: 'GitHub Guides', url: 'https://guides.github.com/', type: 'tutorial' }
    ],
    prerequisites: [],
    content: `## Estágio 1: Git e Controle de Versão

Git é essencial para qualquer desenvolvedor. Você aprenderá a rastrear mudanças no código.

### Conceitos:
- **Repository**: Armazena projeto
- **Commit**: Snapshot do código
- **Branch**: Linha de desenvolvimento
- **Merge**: Combinar branches
- **Pull Request**: Proposta de mudanças

### Workflow:
1. Clone repositório
2. Crie branch para feature
3. Faça commits
4. Push para GitHub
5. Crie Pull Request
6. Merge após review

### Projetos práticos:
- **Seu Primeiro Repositório**: Crie e configure um repositório
- **Colaboração**: Trabalhe com outro desenvolvedor

### Tempo estimado: 1 semana`
  },

  'backend-stage-2': {
    id: 'backend-stage-2',
    trailId: 'backend',
    stageNumber: 2,
    title: 'Banco de Dados SQL',
    description: 'Aprenda SQL e design de banco de dados',
    duration: '2-3 semanas',
    difficulty: 'Intermediário',
    objectives: [
      'Entender conceitos de banco de dados',
      'Escrever queries SQL',
      'Projetar schemas',
      'Usar relacionamentos'
    ],
    topics: [
      'backend-database-intro'
    ],
    projects: ['Blog Database', 'E-commerce Database'],
    resources: [
      { title: 'SQL Tutorial', url: 'https://www.w3schools.com/sql/', type: 'tutorial' },
      { title: 'PostgreSQL Documentation', url: 'https://www.postgresql.org/docs/', type: 'documentation' }
    ],
    prerequisites: ['backend-stage-1'],
    content: `## Estágio 2: Banco de Dados SQL

Bancos de dados relacionais são fundamentais para aplicações modernas.

### Conceitos:
- **Tabelas**: Estrutura de dados
- **Colunas**: Campos com tipos
- **Linhas**: Registros
- **Chaves**: Identificadores e relacionamentos
- **Índices**: Otimização de buscas

### SQL:
- SELECT: Consultar dados
- INSERT: Adicionar dados
- UPDATE: Modificar dados
- DELETE: Remover dados
- JOIN: Combinar tabelas

### Projetos práticos:
- **Blog Database**: Crie schema para blog com posts, comentários, usuários
- **E-commerce Database**: Crie schema para loja com produtos, pedidos, clientes

### Tempo estimado: 2-3 semanas`
  },

  'backend-stage-3': {
    id: 'backend-stage-3',
    trailId: 'backend',
    stageNumber: 3,
    title: 'APIs REST com Spring Boot',
    description: 'Crie APIs REST profissionais com Spring Boot',
    duration: '3-4 semanas',
    difficulty: 'Intermediário',
    objectives: [
      'Entender arquitetura REST',
      'Criar endpoints',
      'Usar Spring Boot',
      'Implementar CRUD'
    ],
    topics: [
      'backend-rest-api'
    ],
    projects: ['API de Tarefas', 'API de Blog'],
    resources: [
      { title: 'Spring Boot Documentation', url: 'https://spring.io/projects/spring-boot', type: 'documentation' },
      { title: 'REST API Best Practices', url: 'https://restfulapi.net/', type: 'article' }
    ],
    prerequisites: ['backend-stage-2'],
    content: `## Estágio 3: APIs REST com Spring Boot

Spring Boot simplifica a criação de APIs REST em Java.

### Conceitos:
- **REST**: Estilo arquitetural
- **HTTP Methods**: GET, POST, PUT, DELETE
- **Status Codes**: 200, 201, 400, 404, 500
- **JSON**: Formato de dados
- **Controllers**: Lidam com requisições

### Spring Boot:
- Autoconfiguration
- Embedded Tomcat
- Spring Data JPA
- Validation
- Exception Handling

### Projetos práticos:
- **API de Tarefas**: CRUD completo de tarefas
- **API de Blog**: Gerenciar posts e comentários

### Tempo estimado: 3-4 semanas`
  },

  'backend-stage-4': {
    id: 'backend-stage-4',
    trailId: 'backend',
    stageNumber: 4,
    title: 'Autenticação e Autorização',
    description: 'Implemente segurança em suas APIs',
    duration: '2-3 semanas',
    difficulty: 'Avançado',
    objectives: [
      'Entender autenticação',
      'Implementar JWT',
      'Usar OAuth2',
      'Proteger endpoints'
    ],
    topics: [],
    projects: ['Login Seguro', 'Sistema de Permissões'],
    resources: [],
    prerequisites: ['backend-stage-3'],
    content: `## Estágio 4: Autenticação e Autorização

Segurança é crítica em aplicações web.

### Autenticação:
- Verificar identidade do usuário
- JWT (JSON Web Tokens)
- Senhas hasheadas
- Refresh tokens

### Autorização:
- Verificar permissões
- Roles e Permissions
- Access Control
- RBAC (Role-Based Access Control)

### Projetos práticos:
- **Login Seguro**: Implemente autenticação com JWT
- **Sistema de Permissões**: Crie roles e permissões

### Tempo estimado: 2-3 semanas`
  },

  'backend-stage-5': {
    id: 'backend-stage-5',
    trailId: 'backend',
    stageNumber: 5,
    title: 'Testes Automatizados',
    description: 'Escreva testes para garantir qualidade',
    duration: '2-3 semanas',
    difficulty: 'Intermediário',
    objectives: [
      'Escrever testes unitários',
      'Testes de integração',
      'Usar JUnit e Mockito',
      'Cobertura de testes'
    ],
    topics: [],
    projects: ['Testes para API', 'Cobertura 80%'],
    resources: [],
    prerequisites: ['backend-stage-3'],
    content: `## Estágio 5: Testes Automatizados

Testes garantem que seu código funciona corretamente.

### Tipos:
- **Unitários**: Testam funções individuais
- **Integração**: Testam múltiplos componentes
- **E2E**: Testam fluxo completo
- **Performance**: Testam velocidade

### Frameworks:
- JUnit: Framework de testes
- Mockito: Mock de dependências
- AssertJ: Assertions fluentes
- TestContainers: Containers para testes

### Projetos práticos:
- **Testes para API**: Escreva testes para seus endpoints
- **Cobertura 80%**: Atinja 80% de cobertura

### Tempo estimado: 2-3 semanas`
  },

  'backend-stage-6': {
    id: 'backend-stage-6',
    trailId: 'backend',
    stageNumber: 6,
    title: 'Deploy e DevOps',
    description: 'Coloque sua aplicação em produção',
    duration: '2-3 semanas',
    difficulty: 'Avançado',
    objectives: [
      'Entender CI/CD',
      'Usar Docker',
      'Deploy em cloud',
      'Monitoramento'
    ],
    topics: [],
    projects: ['Deploy no Heroku', 'Pipeline CI/CD'],
    resources: [],
    prerequisites: ['backend-stage-5'],
    content: `## Estágio 6: Deploy e DevOps

Coloque sua aplicação em produção de forma profissional.

### Conceitos:
- **Docker**: Containerização
- **CI/CD**: Integração e Deploy contínuo
- **Cloud**: AWS, Google Cloud, Azure
- **Monitoramento**: Logs, métricas, alertas

### Ferramentas:
- GitHub Actions
- Docker
- Kubernetes
- Prometheus
- ELK Stack

### Projetos práticos:
- **Deploy no Heroku**: Coloque sua API online
- **Pipeline CI/CD**: Configure automação

### Tempo estimado: 2-3 semanas`
  },

  'backend-stage-7': {
    id: 'backend-stage-7',
    trailId: 'backend',
    stageNumber: 7,
    title: 'Padrões e Boas Práticas',
    description: 'Escreva código profissional e escalável',
    duration: '2-3 semanas',
    difficulty: 'Avançado',
    objectives: [
      'Entender Design Patterns',
      'SOLID Principles',
      'Clean Code',
      'Arquitetura escalável'
    ],
    topics: [],
    projects: ['Refatoração de Código', 'Arquitetura Escalável'],
    resources: [],
    prerequisites: ['backend-stage-6'],
    content: `## Estágio 7: Padrões e Boas Práticas

Código profissional segue padrões e boas práticas.

### Design Patterns:
- Singleton
- Factory
- Observer
- Strategy
- Decorator

### SOLID:
- Single Responsibility
- Open/Closed
- Liskov Substitution
- Interface Segregation
- Dependency Inversion

### Clean Code:
- Nomes significativos
- Funções pequenas
- Sem duplicação
- Tratamento de erros

### Projetos práticos:
- **Refatoração**: Melhore código existente
- **Arquitetura**: Projete sistema escalável

### Tempo estimado: 2-3 semanas`
  },

  'backend-stage-8': {
    id: 'backend-stage-8',
    trailId: 'backend',
    stageNumber: 8,
    title: 'Projeto Final - Backend Completo',
    description: 'Crie uma aplicação backend profissional completa',
    duration: '4-6 semanas',
    difficulty: 'Avançado',
    objectives: [
      'Aplicar todos os conceitos',
      'Criar API completa',
      'Implementar segurança',
      'Deploy em produção'
    ],
    topics: [],
    projects: ['Aplicação Completa'],
    resources: [],
    prerequisites: ['backend-stage-7'],
    content: `## Estágio 8: Projeto Final - Backend Completo

Crie uma aplicação backend profissional que integra tudo que aprendeu.

### Requisitos:
- API REST completa com CRUD
- Autenticação e autorização
- Banco de dados relacional
- Testes automatizados (80%+ cobertura)
- Documentação (Swagger/OpenAPI)
- Deploy em produção
- CI/CD pipeline
- Monitoramento e logs

### Ideias de Projeto:
- Plataforma de Cursos Online
- Sistema de Gerenciamento de Projetos
- Rede Social Profissional
- Marketplace
- Sistema de Reservas

### Tempo estimado: 4-6 semanas

Após completar este estágio, você estará pronto para trabalhar como desenvolvedor backend profissional!`
  }
};

export function getStageById(id: string): Stage | undefined {
  return stagesData[id];
}

export function getStagesByTrail(trailId: string): Stage[] {
  return Object.values(stagesData)
    .filter(s => s.trailId === trailId)
    .sort((a, b) => a.stageNumber - b.stageNumber);
}

export function getAllStages(): Stage[] {
  return Object.values(stagesData);
}
