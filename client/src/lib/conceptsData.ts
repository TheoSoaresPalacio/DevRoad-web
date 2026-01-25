// Estrutura de dados com conteúdo detalhado de conceitos

export interface Concept {
  id: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  content: string;
  examples: CodeExample[];
  challenges: Challenge[];
  resources: Resource[];
  relatedConcepts: string[];
}

export interface CodeExample {
  title: string;
  language: string;
  code: string;
  explanation: string;
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  hints: string[];
  expectedOutput?: string;
}

export interface Resource {
  title: string;
  url: string;
  type: 'documentation' | 'tutorial' | 'article' | 'video';
}

export const conceptsData: Record<string, Concept> = {
  // JAVA - Fundamentos
  'java-intro': {
    id: 'java-intro',
    title: 'Introdução a Java',
    description: 'Aprenda o que é Java, por que é importante e como configurar seu ambiente de desenvolvimento.',
    difficulty: 'beginner',
    content: `
Java é uma linguagem de programação versátil que funciona em qualquer sistema operacional através da máquina virtual Java (JVM). 
Isso significa que você escreve o código uma vez e pode executá-lo em Windows, macOS ou Linux sem modificações.

## Por que Java?

1. **Portabilidade**: "Write Once, Run Anywhere" (WORA)
2. **Segurança**: Gerenciamento automático de memória
3. **Performance**: Compilação Just-In-Time (JIT)
4. **Comunidade**: Grande comunidade e muitos recursos
5. **Demanda**: Muito procurado no mercado de trabalho

## Instalação

Para começar, você precisa instalar o JDK (Java Development Kit) e uma IDE como IntelliJ IDEA ou Eclipse.
    `,
    examples: [
      {
        title: 'Seu Primeiro Programa',
        language: 'java',
        code: `public class OlaMundo {
    public static void main(String[] args) {
        System.out.println("Olá, Mundo!");
    }
}`,
        explanation: 'Este é o programa mais simples em Java. Ele imprime "Olá, Mundo!" no console.'
      }
    ],
    challenges: [
      {
        id: 'java-intro-1',
        title: 'Executar seu primeiro programa',
        description: 'Configure o JDK, crie um arquivo OlaMundo.java e execute-o.',
        difficulty: 'easy',
        hints: ['Use javac para compilar', 'Use java para executar'],
        expectedOutput: 'Olá, Mundo!'
      }
    ],
    resources: [
      {
        title: 'Documentação Oficial Java',
        url: 'https://docs.oracle.com/javase/',
        type: 'documentation'
      }
    ],
    relatedConcepts: ['java-variables', 'java-syntax']
  },

  'java-variables': {
    id: 'java-variables',
    title: 'Variáveis e Tipos de Dados',
    description: 'Aprenda como declarar variáveis e trabalhar com diferentes tipos de dados em Java.',
    difficulty: 'beginner',
    content: `
Variáveis são como caixas que armazenam informações. Cada caixa tem um nome, um tipo (que tipo de informação ela pode guardar) e um valor.

## Tipos Primitivos

Java oferece 8 tipos primitivos fundamentais:
- int: números inteiros
- double: números decimais
- boolean: verdadeiro ou falso
- char: um caractere
- byte, short, long, float: variações de números

## Convenções de Nomenclatura

Use camelCase para variáveis: minhaVariavel
Use UPPER_SNAKE_CASE para constantes: MINHA_CONSTANTE
    `,
    examples: [
      {
        title: 'Declarando Variáveis',
        language: 'java',
        code: `int idade = 25;
double altura = 1.75;
String nome = "João";
boolean ativo = true;`,
        explanation: 'Aqui declaramos variáveis de diferentes tipos.'
      }
    ],
    challenges: [
      {
        id: 'java-variables-1',
        title: 'Criar um programa com múltiplas variáveis',
        description: 'Crie um programa que declara e imprime variáveis de diferentes tipos.',
        difficulty: 'easy',
        hints: ['Use System.out.println para imprimir', 'Declare pelo menos 4 tipos diferentes'],
        expectedOutput: 'Suas variáveis impressas'
      }
    ],
    resources: [
      {
        title: 'Java Primitive Types',
        url: 'https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html',
        type: 'documentation'
      }
    ],
    relatedConcepts: ['java-intro', 'java-operators']
  },

  'java-operators': {
    id: 'java-operators',
    title: 'Operadores Aritméticos e Lógicos',
    description: 'Aprenda a usar operadores para realizar cálculos e comparações.',
    difficulty: 'beginner',
    content: `
Operadores permitem realizar cálculos e comparações com variáveis.

## Operadores Aritméticos
+ Adição
- Subtração
* Multiplicação
/ Divisão
% Módulo (resto)

## Operadores Relacionais
== Igual
!= Diferente
< Menor que
> Maior que
<= Menor ou igual
>= Maior ou igual

## Operadores Lógicos
&& AND (E)
|| OR (OU)
! NOT (NÃO)
    `,
    examples: [
      {
        title: 'Usando Operadores',
        language: 'java',
        code: `int a = 10;
int b = 3;

System.out.println(a + b);  // 13
System.out.println(a > b);  // true
System.out.println(a > 5 && b < 5);  // true`,
        explanation: 'Exemplos de operadores aritméticos, relacionais e lógicos.'
      }
    ],
    challenges: [
      {
        id: 'java-operators-1',
        title: 'Calculadora Simples',
        description: 'Crie um programa que realiza operações aritméticas básicas.',
        difficulty: 'easy',
        hints: ['Use variáveis para armazenar números', 'Use operadores aritméticos'],
        expectedOutput: 'Resultados das operações'
      }
    ],
    resources: [
      {
        title: 'Java Operators',
        url: 'https://docs.oracle.com/javase/tutorial/java/nutsandbolts/operators.html',
        type: 'documentation'
      }
    ],
    relatedConcepts: ['java-variables', 'java-conditionals']
  },

  // BACKEND - Git
  'git-basics': {
    id: 'git-basics',
    title: 'Git Básico',
    description: 'Aprenda os fundamentos do controle de versão com Git.',
    difficulty: 'beginner',
    content: `
Git é um sistema de controle de versão que permite rastrear mudanças no código, colaborar com outros desenvolvedores 
e manter um histórico completo do projeto.

## Conceitos Principais

- **Repository**: Pasta que contém seu projeto e histórico
- **Commit**: Snapshot das mudanças
- **Branch**: Linha de desenvolvimento independente
- **Merge**: Combinar branches

## Fluxo Básico

1. Fazer mudanças no código
2. Adicionar mudanças ao staging area (git add)
3. Fazer commit com mensagem descritiva (git commit)
4. Enviar para repositório remoto (git push)
    `,
    examples: [
      {
        title: 'Comandos Git Essenciais',
        language: 'bash',
        code: `git init                    # Inicializar repositório
git add .                   # Adicionar mudanças
git commit -m "Mensagem"    # Fazer commit
git push origin main        # Enviar para GitHub
git pull origin main        # Trazer mudanças`,
        explanation: 'Comandos Git mais usados no dia a dia.'
      }
    ],
    challenges: [
      {
        id: 'git-basics-1',
        title: 'Seu Primeiro Repositório',
        description: 'Crie um repositório local, faça commits e envie para GitHub.',
        difficulty: 'easy',
        hints: ['Use git init para começar', 'Configure seu nome e email'],
        expectedOutput: 'Repositório no GitHub'
      }
    ],
    resources: [
      {
        title: 'Git Documentation',
        url: 'https://git-scm.com/doc',
        type: 'documentation'
      }
    ],
    relatedConcepts: ['git-branches', 'github-collaboration']
  },

  // ENGLISH - Basics
  'english-greetings': {
    id: 'english-greetings',
    title: 'Saudações e Apresentações',
    description: 'Aprenda como saudar e se apresentar profissionalmente em inglês.',
    difficulty: 'beginner',
    content: `
Saudações apropriadas são essenciais para começar qualquer interação profissional.

## Saudações Comuns

Hello! = Olá!
Hi! = Oi!
Good morning! = Bom dia!
Good afternoon! = Boa tarde!
Good evening! = Boa noite!

## Apresentação Pessoal

My name is... = Meu nome é...
I'm a software developer. = Eu sou um desenvolvedor de software.
I'm from Brazil. = Eu sou do Brasil.
Nice to meet you! = Prazer em conhecê-lo!

## Respostas

How are you? = Como você está?
I'm fine, thank you. = Estou bem, obrigado.
How about you? = E você?
    `,
    examples: [
      {
        title: 'Diálogo de Apresentação',
        language: 'text',
        code: `Person A: Hello! My name is João. What's your name?
Person B: Hi João! I'm Sarah. Nice to meet you.
Person A: Nice to meet you too! I'm a software developer.
Person B: That's great! I work in tech as well.`,
        explanation: 'Um diálogo típico de apresentação profissional.'
      }
    ],
    challenges: [
      {
        id: 'english-greetings-1',
        title: 'Criar sua Apresentação',
        description: 'Escreva uma apresentação pessoal de 3-4 frases em inglês.',
        difficulty: 'easy',
        hints: ['Inclua seu nome', 'Mencione sua profissão', 'Fale sobre sua nacionalidade'],
        expectedOutput: 'Sua apresentação'
      }
    ],
    resources: [
      {
        title: 'English Greetings',
        url: 'https://www.englishclub.com/english/greetings.htm',
        type: 'tutorial'
      }
    ],
    relatedConcepts: ['english-present-simple', 'english-vocabulary']
  },

  'english-vocabulary': {
    id: 'english-vocabulary',
    title: 'Vocabulário Técnico',
    description: 'Aprenda termos técnicos essenciais em inglês.',
    difficulty: 'beginner',
    content: `
Vocabulário técnico é fundamental para trabalhar em ambientes internacionais.

## Linguagens de Programação

Java, Python, JavaScript, C++, C#, Ruby, Go, Rust, PHP, Swift, Kotlin, TypeScript

## Conceitos Fundamentais

Variable = Variável
Function = Função
Method = Método
Class = Classe
Object = Objeto
Array = Array
Loop = Laço
Condition = Condição
Exception = Exceção
Error = Erro

## Ferramentas

IDE = Integrated Development Environment
Framework = Framework
Library = Biblioteca
Database = Banco de dados
API = Application Programming Interface
Git = Git
Docker = Docker
    `,
    examples: [
      {
        title: 'Frases Técnicas Comuns',
        language: 'text',
        code: `"This code doesn't compile." = "Este código não compila."
"There's a bug in this function." = "Há um bug nesta função."
"Can you review my pull request?" = "Você pode revisar meu pull request?"
"I need to debug this issue." = "Preciso depurar este problema."`,
        explanation: 'Expressões técnicas usadas diariamente.'
      }
    ],
    challenges: [
      {
        id: 'english-vocabulary-1',
        title: 'Criar Glossário Técnico',
        description: 'Crie um glossário com 20 termos técnicos em inglês e suas definições.',
        difficulty: 'easy',
        hints: ['Inclua linguagens de programação', 'Inclua conceitos fundamentais', 'Inclua ferramentas'],
        expectedOutput: 'Seu glossário'
      }
    ],
    resources: [
      {
        title: 'Technical English Vocabulary',
        url: 'https://www.englishclub.com/english/vocabulary-technical.htm',
        type: 'tutorial'
      }
    ],
    relatedConcepts: ['english-greetings', 'english-reading']
  }
};

// Função para buscar conceito por ID
export function getConceptById(id: string): Concept | undefined {
  return conceptsData[id];
}

// Função para listar todos os conceitos
export function getAllConcepts(): Concept[] {
  return Object.values(conceptsData);
}

// Função para filtrar conceitos por dificuldade
export function getConceptsByDifficulty(difficulty: 'beginner' | 'intermediate' | 'advanced'): Concept[] {
  return Object.values(conceptsData).filter(c => c.difficulty === difficulty);
}

// Função para buscar conceitos relacionados
export function getRelatedConcepts(conceptId: string): Concept[] {
  const concept = conceptsData[conceptId];
  if (!concept) return [];
  return concept.relatedConcepts
    .map(id => conceptsData[id])
    .filter(c => c !== undefined);
}
