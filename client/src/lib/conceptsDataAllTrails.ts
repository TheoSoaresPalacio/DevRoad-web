import { Concept } from './conceptsDataExpanded';

export const conceptsDataAllTrails: Record<string, Concept> = {
  // ==================== BACK-END - SPRING BOOT ====================
  'backend-spring-intro': {
    id: 'backend-spring-intro',
    title: 'Introdução ao Spring Boot',
    description: 'Aprenda os fundamentos do Spring Boot para desenvolvimento back-end profissional',
    difficulty: 'intermediate',
    content: `# Introdução ao Spring Boot

Spring Boot é um framework que simplifica o desenvolvimento de aplicações Spring, permitindo criar aplicações standalone com mínima configuração.

## O que é Spring Boot?

Spring Boot é construído sobre o Spring Framework e fornece:
- Configuração automática inteligente
- Servidores embarcados (Tomcat, Jetty)
- Dependências gerenciadas automaticamente
- Métricas e monitoramento

## Vantagens do Spring Boot

- **Rápido**: Inicialize projetos em minutos
- **Independente**: Não precisa de servidor externo
- **Opinado**: Convenções sobre configuração
- **Produção-pronto**: Inclui segurança, métricas, health checks

## Estrutura de um Projeto Spring Boot

\`\`\`
src/
  main/
    java/
      com/exemplo/
        Application.java
        controller/
        service/
        repository/
        model/
    resources/
      application.properties
  test/
pom.xml
\`\`\`

## Anotações Principais

- @SpringBootApplication: Marca a classe principal
- @RestController: Define um controller REST
- @RequestMapping: Mapeia URLs
- @Autowired: Injeção de dependência
- @Service: Define uma classe de serviço
- @Repository: Define um repositório de dados`,
    examples: [
      {
        title: 'Aplicação Spring Boot Básica',
        language: 'java',
        code: `import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

@SpringBootApplication
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}

@RestController
@RequestMapping("/api/usuarios")
public class UsuarioController {
    
    @GetMapping
    public String listar() {
        return "Lista de usuários";
    }
    
    @PostMapping
    public String criar(@RequestBody String usuario) {
        return "Usuário criado: " + usuario;
    }
}`,
        explanation: 'Exemplo básico de aplicação Spring Boot com controller REST.'
      }
    ],
    challenges: [
      {
        id: 'backend-spring-1',
        title: 'Seu Primeiro Endpoint',
        description: 'Crie um endpoint GET que retorna uma lista de usuários',
        difficulty: 'easy',
        hints: ['Use @RestController', 'Use @GetMapping', 'Retorne uma lista ou JSON'],
        expectedOutput: 'GET /api/usuarios retorna lista de usuários'
      }
    ],
    resources: [
      { title: 'Spring Boot Official', url: 'https://spring.io/projects/spring-boot', type: 'documentation' },
      { title: 'Spring Boot Tutorial', url: 'https://www.baeldung.com/spring-boot', type: 'tutorial' }
    ],
    relatedConcepts: ['backend-rest-api', 'backend-database']
  },

  'backend-jpa-hibernate': {
    id: 'backend-jpa-hibernate',
    title: 'JPA e Hibernate',
    description: 'Aprenda mapeamento objeto-relacional com JPA e Hibernate',
    difficulty: 'intermediate',
    content: `# JPA e Hibernate

JPA (Java Persistence API) é a especificação padrão para persistência de dados em Java. Hibernate é a implementação mais popular.

## O que é ORM?

ORM (Object-Relational Mapping) mapeia objetos Java para tabelas de banco de dados.

## Entidades JPA

Uma entidade é uma classe que representa uma tabela no banco de dados.

\`\`\`java
@Entity
@Table(name = "usuarios")
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "nome", nullable = false)
    private String nome;
    
    @Column(name = "email", unique = true)
    private String email;
}
\`\`\`

## Relacionamentos

- @OneToOne: Um para um
- @OneToMany: Um para muitos
- @ManyToOne: Muitos para um
- @ManyToMany: Muitos para muitos

## JPQL (Java Persistence Query Language)

Linguagem de query similar a SQL mas orientada a objetos.

\`\`\`java
Query query = em.createQuery("SELECT u FROM Usuario u WHERE u.email = :email");
query.setParameter("email", "usuario@email.com");
\`\`\``,
    examples: [
      {
        title: 'Entidade com Relacionamentos',
        language: 'java',
        code: `import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "usuarios")
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String nome;
    private String email;
    
    @OneToMany(mappedBy = "usuario")
    private List<Pedido> pedidos;
}

@Entity
@Table(name = "pedidos")
public class Pedido {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @ManyToOne
    @JoinColumn(name = "usuario_id")
    private Usuario usuario;
    
    private String descricao;
}`,
        explanation: 'Exemplo de relacionamento um-para-muitos com JPA.'
      }
    ],
    challenges: [
      {
        id: 'backend-jpa-1',
        title: 'Modelar Relacionamento',
        description: 'Crie entidades com relacionamento muitos-para-muitos',
        difficulty: 'hard',
        hints: ['Use @ManyToMany', 'Crie tabela de junção', 'Implemente em ambos os lados'],
        expectedOutput: 'Entidades com relacionamento funcional'
      }
    ],
    resources: [
      { title: 'JPA Documentation', url: 'https://docs.oracle.com/javaee/7/tutorial/persistence-intro.htm', type: 'documentation' },
      { title: 'Hibernate Guide', url: 'https://hibernate.org/orm/documentation/', type: 'documentation' }
    ],
    relatedConcepts: ['backend-database', 'backend-spring-intro']
  },

  // ==================== FRONT-END - ADVANCED ====================
  'frontend-typescript': {
    id: 'frontend-typescript',
    title: 'TypeScript para Front-End',
    description: 'Aprenda TypeScript para desenvolvimento front-end type-safe',
    difficulty: 'intermediate',
    content: `# TypeScript para Front-End

TypeScript adiciona tipagem estática ao JavaScript, melhorando a qualidade do código e reduzindo erros.

## Tipos Básicos

\`\`\`typescript
let nome: string = "João";
let idade: number = 25;
let ativo: boolean = true;
let valores: number[] = [1, 2, 3];
let qualquer: any = "pode ser qualquer coisa";
\`\`\`

## Interfaces

\`\`\`typescript
interface Usuario {
    id: number;
    nome: string;
    email: string;
}

const usuario: Usuario = {
    id: 1,
    nome: "João",
    email: "joao@email.com"
};
\`\`\`

## Tipos Genéricos

\`\`\`typescript
function obterPrimeiro<T>(array: T[]): T {
    return array[0];
}

const numeros = obterPrimeiro([1, 2, 3]); // number
const nomes = obterPrimeiro(["a", "b"]); // string
\`\`\`

## Enums

\`\`\`typescript
enum Status {
    Ativo = "ativo",
    Inativo = "inativo",
    Pendente = "pendente"
}

let status: Status = Status.Ativo;
\`\`\``,
    examples: [
      {
        title: 'Componente React com TypeScript',
        language: 'typescript',
        code: `import React, { useState } from 'react';

interface Usuario {
    id: number;
    nome: string;
    email: string;
}

interface Props {
    usuarios: Usuario[];
    onSelecionar: (usuario: Usuario) => void;
}

const ListaUsuarios: React.FC<Props> = ({ usuarios, onSelecionar }) => {
    const [selecionado, setSelecionado] = useState<Usuario | null>(null);
    
    return (
        <div>
            {usuarios.map(usuario => (
                <div key={usuario.id} onClick={() => {
                    setSelecionado(usuario);
                    onSelecionar(usuario);
                }}>
                    {usuario.nome}
                </div>
            ))}
        </div>
    );
};

export default ListaUsuarios;`,
        explanation: 'Componente React totalmente tipado com TypeScript.'
      }
    ],
    challenges: [
      {
        id: 'frontend-ts-1',
        title: 'Criar Tipos Complexos',
        description: 'Crie interfaces e tipos genéricos para um sistema de e-commerce',
        difficulty: 'hard',
        hints: ['Use interfaces', 'Use generics', 'Implemente tipos para Produto, Carrinho, Pedido'],
        expectedOutput: 'Sistema de tipos completo'
      }
    ],
    resources: [
      { title: 'TypeScript Handbook', url: 'https://www.typescriptlang.org/docs/', type: 'documentation' },
      { title: 'TypeScript Tutorial', url: 'https://www.w3schools.com/typescript/', type: 'tutorial' }
    ],
    relatedConcepts: ['frontend-javascript', 'frontend-react']
  },

  'frontend-state-management': {
    id: 'frontend-state-management',
    title: 'Gerenciamento de Estado com Redux',
    description: 'Aprenda Redux para gerenciar estado global em aplicações React',
    difficulty: 'advanced',
    content: `# Gerenciamento de Estado com Redux

Redux é uma biblioteca para gerenciar estado global de forma previsível em aplicações JavaScript.

## Conceitos Principais

### Store
Objeto único que contém todo o estado da aplicação.

### Actions
Objetos que descrevem o que aconteceu.

\`\`\`javascript
const action = {
    type: 'ADICIONAR_USUARIO',
    payload: { id: 1, nome: 'João' }
};
\`\`\`

### Reducers
Funções puras que retornam novo estado baseado em ação.

\`\`\`javascript
function usuariosReducer(state = [], action) {
    switch(action.type) {
        case 'ADICIONAR_USUARIO':
            return [...state, action.payload];
        case 'REMOVER_USUARIO':
            return state.filter(u => u.id !== action.payload);
        default:
            return state;
    }
}
\`\`\`

### Dispatch
Função para enviar actions ao store.

### Selectors
Funções para extrair dados do estado.

## Fluxo Redux

1. Usuário dispara action
2. Action vai para reducer
3. Reducer retorna novo estado
4. Store atualiza
5. Componentes se re-renderizam`,
    examples: [
      {
        title: 'Redux Store Completo',
        language: 'javascript',
        code: `import { createStore, combineReducers } from 'redux';

// Actions
const ADICIONAR_USUARIO = 'ADICIONAR_USUARIO';
const REMOVER_USUARIO = 'REMOVER_USUARIO';

// Reducer
const usuariosReducer = (state = [], action) => {
    switch(action.type) {
        case ADICIONAR_USUARIO:
            return [...state, action.payload];
        case REMOVER_USUARIO:
            return state.filter(u => u.id !== action.payload);
        default:
            return state;
    }
};

// Store
const store = createStore(usuariosReducer);

// Dispatch
store.dispatch({
    type: ADICIONAR_USUARIO,
    payload: { id: 1, nome: 'João' }
});

// Subscribe
store.subscribe(() => {
    console.log('Estado atualizado:', store.getState());
});`,
        explanation: 'Exemplo completo de Redux com actions e reducers.'
      }
    ],
    challenges: [
      {
        id: 'frontend-redux-1',
        title: 'Implementar Redux',
        description: 'Crie um store Redux para gerenciar carrinho de compras',
        difficulty: 'hard',
        hints: ['Crie reducers para adicionar/remover itens', 'Implemente selectors', 'Use combineReducers'],
        expectedOutput: 'Store Redux funcional'
      }
    ],
    resources: [
      { title: 'Redux Documentation', url: 'https://redux.js.org/', type: 'documentation' },
      { title: 'Redux Tutorial', url: 'https://www.w3schools.com/react/react_redux.asp', type: 'tutorial' }
    ],
    relatedConcepts: ['frontend-react', 'frontend-javascript']
  },

   // ==================== INGLÊS ====================
  'english-business': {
    id: 'english-business',
    title: 'Inglês para Negócios',
    description: 'Aprenda inglês profissional para ambiente corporativo',
    difficulty: 'intermediate',
    content: `## Inglês para Negócios\n\nVocabuário corporativo essencial para comunicação profissional.`,
    examples: [{ title: 'Email', language: 'text', code: 'Subject: Meeting', explanation: 'Email profissional' }],
    challenges: [{ id: 'eng-b-1', title: 'Vocab', description: 'Aprenda termos', difficulty: 'easy', hints: [] }],
    resources: [{ title: 'Business English', url: 'https://www.englishclub.com/', type: 'tutorial' }],
    relatedConcepts: []
  },
  'english-technical': {
    id: 'english-technical',
    title: 'Inglês Técnico para TI',
    description: 'Vocabulário técnico de programação',
    difficulty: 'intermediate',
    content: `## Inglês Técnico\n\nTermos essenciais para programação e desenvolvimento.`,
    examples: [{ title: 'Código', language: 'javascript', code: 'function add(a, b) { return a + b; }', explanation: 'Função em inglês' }],
    challenges: [{ id: 'eng-t-1', title: 'Termos', description: 'Aprenda termos técnicos', difficulty: 'medium', hints: [] }],
    resources: [{ title: 'Tech English', url: 'https://www.englishclub.com/', type: 'tutorial' }],
    relatedConcepts: []
  },
  'fullstack-deployment': {
    id: 'fullstack-deployment',
    title: 'Deploy de Aplicações Full-Stack',
    description: 'Aprenda a fazer deploy de aplicações completas em produção',
    difficulty: 'advanced',
    content: `# Deploy de Aplicações Full-Stack

Deployment é o processo de colocar uma aplicação em produção para que usuários possam acessá-la.

## Plataformas de Hosting

### Heroku
- Fácil de usar
- Suporta várias linguagens
- Integração com Git

### AWS (Amazon Web Services)
- Escalável
- Muitos serviços
- Mais complexo

### DigitalOcean
- Simples
- Bom custo-benefício
- Droplets (VPS)

### Vercel (Front-End)
- Otimizado para Next.js
- Deploy automático
- CDN global

## Passos para Deploy

1. **Preparar Código**
   - Remover dados sensíveis
   - Configurar variáveis de ambiente
   - Otimizar performance

2. **Escolher Plataforma**
   - Avaliar requisitos
   - Comparar preços
   - Verificar suporte

3. **Configurar Banco de Dados**
   - Criar instância
   - Configurar backups
   - Implementar segurança

4. **Deploy**
   - Fazer push do código
   - Configurar CI/CD
   - Monitorar aplicação

## Variáveis de Ambiente

Nunca coloque dados sensíveis no código!

\`\`\`
DATABASE_URL=postgresql://user:pass@host:5432/db
API_KEY=sua_chave_secreta
NODE_ENV=production
\`\`\`

## HTTPS e SSL

Sempre use HTTPS em produção para segurança.`,
    examples: [
      {
        title: 'Arquivo de Configuração para Deploy',
        language: 'yaml',
        code: `# docker-compose.yml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=postgresql://user:pass@db:5432/myapp
      - NODE_ENV=production
    depends_on:
      - db
  
  db:
    image: postgres:13
    environment:
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=pass
      - POSTGRES_DB=myapp
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:`,
        explanation: 'Arquivo docker-compose para deploy containerizado.'
      }
    ],
    challenges: [
      {
        id: 'fullstack-deploy-1',
        title: 'Deploy em Produção',
        description: 'Faça deploy de uma aplicação full-stack em uma plataforma real',
        difficulty: 'hard',
        hints: ['Configure variáveis de ambiente', 'Configure banco de dados', 'Use CI/CD'],
        expectedOutput: 'Aplicação rodando em produção'
      }
    ],
    resources: [
      { title: 'Heroku Deployment', url: 'https://devcenter.heroku.com/', type: 'documentation' },
      { title: 'Docker Guide', url: 'https://docs.docker.com/', type: 'documentation' }
    ],
    relatedConcepts: ['backend-spring-intro', 'frontend-react']
  },

  // ==================== MATEMÁTICA - AVANÇADO ====================
  'math-calculus': {
    id: 'math-calculus',
    title: 'Cálculo para Programadores',
    description: 'Aprenda conceitos de cálculo aplicados à programação',
    difficulty: 'advanced',
    content: `# Cálculo para Programadores

Cálculo é fundamental para otimização, machine learning e gráficos computacionais.

## Derivadas

A derivada mede a taxa de mudança de uma função.

f'(x) = lim(h→0) [f(x+h) - f(x)] / h

### Aplicações
- Encontrar máximos e mínimos
- Otimizar algoritmos
- Análise de performance

## Integrais

A integral é o oposto da derivada. Calcula a área sob uma curva.

∫ f(x) dx

### Aplicações
- Calcular áreas
- Resolver problemas de acumulação
- Física computacional

## Limites

Um limite descreve o valor que uma função se aproxima.

lim(x→a) f(x) = L

## Séries de Taylor

Aproxima funções complexas com polinômios.

f(x) = f(a) + f'(a)(x-a) + f''(a)(x-a)²/2! + ...`,
    examples: [
      {
        title: 'Calcular Derivada Numericamente',
        language: 'java',
        code: `public class Calculus {
    // Calcular derivada numericamente
    public static double derivada(Function<Double, Double> f, double x, double h) {
        return (f.apply(x + h) - f.apply(x)) / h;
    }
    
    // Encontrar máximo usando gradiente descendente
    public static double maximizar(Function<Double, Double> f, double x0, double taxa, int iteracoes) {
        double x = x0;
        for (int i = 0; i < iteracoes; i++) {
            double grad = derivada(f, x, 0.0001);
            x = x + taxa * grad;
        }
        return x;
    }
    
    public static void main(String[] args) {
        // f(x) = x²
        Function<Double, Double> f = x -> x * x;
        
        double deriv = derivada(f, 2.0, 0.0001);
        System.out.println("Derivada em x=2: " + deriv); // ≈ 4
    }
}`,
        explanation: 'Implementação numérica de derivadas em Java.'
      }
    ],
    challenges: [
      {
        id: 'math-calc-1',
        title: 'Otimização com Gradiente Descendente',
        description: 'Implemente gradiente descendente para encontrar mínimo de função',
        difficulty: 'hard',
        hints: ['Use derivada numérica', 'Implemente loop de iterações', 'Ajuste taxa de aprendizado'],
        expectedOutput: 'Algoritmo convergindo para mínimo'
      }
    ],
    resources: [
      { title: 'Khan Academy Calculus', url: 'https://www.khanacademy.org/math/calculus-1', type: 'tutorial' },
      { title: 'Calculus for Programmers', url: 'https://www.3blue1brown.com/topics/calculus', type: 'video' }
    ],
    relatedConcepts: ['math-algebra', 'math-linear-algebra']
  },

  'math-linear-algebra': {
    id: 'math-linear-algebra',
    title: 'Álgebra Linear',
    description: 'Aprenda álgebra linear para machine learning e gráficos',
    difficulty: 'advanced',
    content: `# Álgebra Linear

Álgebra linear é essencial para machine learning, processamento de imagens e gráficos 3D.

## Vetores

Um vetor é uma sequência de números.

v = [1, 2, 3]

### Operações com Vetores

- Adição: u + v
- Multiplicação por escalar: 2v
- Produto escalar: u · v = u₁v₁ + u₂v₂ + u₃v₃
- Norma: ||v|| = √(v₁² + v₂² + v₃²)

## Matrizes

Uma matriz é uma grade de números.

\`\`\`
A = [1 2]
    [3 4]
\`\`\`

### Operações com Matrizes

- Adição: A + B
- Multiplicação: A × B
- Transposição: Aᵀ
- Determinante: det(A)
- Inversa: A⁻¹

## Autovalores e Autovetores

Para uma matriz A e vetor v:

Av = λv

Onde λ é o autovalor e v é o autovetor.

## Decomposição SVD

Decompõe uma matriz em três matrizes:

A = UΣVᵀ

Aplicações: compressão de imagens, recomendações.`,
    examples: [
      {
        title: 'Operações com Matrizes em Java',
        language: 'java',
        code: `public class Matrix {
    private double[][] data;
    
    public Matrix(double[][] data) {
        this.data = data;
    }
    
    // Multiplicação de matrizes
    public Matrix multiply(Matrix other) {
        int rows = this.data.length;
        int cols = other.data[0].length;
        double[][] result = new double[rows][cols];
        
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                for (int k = 0; k < this.data[0].length; k++) {
                    result[i][j] += this.data[i][k] * other.data[k][j];
                }
            }
        }
        
        return new Matrix(result);
    }
    
    // Calcular determinante (2x2)
    public double determinant() {
        if (data.length != 2 || data[0].length != 2) {
            throw new IllegalArgumentException("Apenas para matrizes 2x2");
        }
        return data[0][0] * data[1][1] - data[0][1] * data[1][0];
    }
}`,
        explanation: 'Operações básicas com matrizes em Java.'
      }
    ],
    challenges: [
      {
        id: 'math-linalg-1',
        title: 'Implementar Multiplicação de Matrizes',
        description: 'Implemente multiplicação eficiente de matrizes',
        difficulty: 'hard',
        hints: ['Use três loops aninhados', 'Verifique dimensões', 'Otimize se possível'],
        expectedOutput: 'Multiplicação de matrizes funcionando'
      }
    ],
    resources: [
      { title: 'Linear Algebra', url: 'https://www.khanacademy.org/math/linear-algebra', type: 'tutorial' },
      { title: '3Blue1Brown Linear Algebra', url: 'https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab', type: 'video' }
    ],
    relatedConcepts: ['math-algebra', 'math-calculus']
  }
};
