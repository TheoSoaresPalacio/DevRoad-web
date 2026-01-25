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

import { conceptsDataExpanded, allConceptsData } from './conceptsDataExpanded';
import { conceptsDataAdvanced } from './conceptsDataAdvanced';
import { conceptsDataAllTrails } from './conceptsDataAllTrails';

export const conceptsData: Record<string, Concept> = {
  ...allConceptsData,
  ...conceptsDataAdvanced,
  ...conceptsDataAllTrails
};

// Mantendo a estrutura original para compatibilidade
export const conceptsDataOriginal: Record<string, Concept> = {
  // ==================== JAVA - FUNDAMENTOS ====================
  'java-intro': {
    id: 'java-intro',
    title: 'Introdução a Java',
    description: 'Aprenda o que é Java, sua história e por que é importante',
    difficulty: 'beginner',
    content: `Java é uma linguagem de programação orientada a objetos criada em 1995 por James Gosling na Sun Microsystems. 
    
## Características Principais:
- **Portabilidade**: "Write Once, Run Anywhere" (WORA) - código Java funciona em qualquer sistema com JVM
- **Orientada a Objetos**: Tudo é objeto em Java
- **Segura**: Gerenciamento automático de memória
- **Robusta**: Tratamento de exceções integrado
- **Multithreaded**: Suporta programação concorrente

## Por que Java é importante?
- Usado em bilhões de dispositivos
- Linguagem mais usada em empresas
- Grande comunidade e ecossistema
- Oportunidades de carreira excelentes`,
    examples: [
      {
        title: 'Hello World',
        language: 'java',
        code: `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
        explanation: 'Programa mais simples em Java que imprime uma mensagem na tela'
      }
    ],
    challenges: [
      {
        id: 'java-intro-1',
        title: 'Seu Primeiro Programa',
        description: 'Crie um programa Java que imprime seu nome e idade',
        difficulty: 'easy',
        hints: ['Use System.out.println()', 'Crie uma classe chamada MeuPrograma'],
        expectedOutput: 'Seu nome aqui\n25 anos'
      }
    ],
    resources: [
      { title: 'Oracle Java Documentation', url: 'https://docs.oracle.com/javase/', type: 'documentation' },
      { title: 'Java Tutorial for Beginners', url: 'https://www.youtube.com/watch?v=eIrMbAQSU34', type: 'video' }
    ],
    relatedConcepts: []
  },

  'java-variables': {
    id: 'java-variables',
    title: 'Variáveis e Tipos de Dados',
    description: 'Entenda como declarar e usar variáveis em Java',
    difficulty: 'beginner',
    content: `Variáveis são contêineres para armazenar dados. Java é uma linguagem fortemente tipada, o que significa que cada variável tem um tipo específico.

## Tipos Primitivos em Java:
- **int**: Números inteiros (-2,147,483,648 a 2,147,483,647)
- **long**: Números inteiros grandes
- **float**: Números decimais (32 bits)
- **double**: Números decimais (64 bits) - mais preciso
- **boolean**: Verdadeiro ou falso
- **char**: Um único caractere
- **byte**: Números pequenos (-128 a 127)
- **short**: Números inteiros pequenos

## Declaração de Variáveis:
A sintaxe é: \`tipo nome = valor;\``,
    examples: [
      {
        title: 'Declarando Variáveis',
        language: 'java',
        code: `int idade = 25;
String nome = "João Silva";
double altura = 1.75;
boolean ativo = true;
char inicial = 'J';
long populacao = 8000000000L;`,
        explanation: 'Exemplos de diferentes tipos de variáveis em Java'
      },
      {
        title: 'Usando Variáveis',
        language: 'java',
        code: `int x = 10;
int y = 20;
int soma = x + y;
System.out.println("A soma é: " + soma);`,
        explanation: 'Como usar variáveis em operações'
      }
    ],
    challenges: [
      {
        id: 'java-var-1',
        title: 'Cálculo de Área',
        description: 'Crie um programa que calcula a área de um retângulo (largura × altura)',
        difficulty: 'easy',
        hints: ['Declare variáveis para largura e altura', 'Multiplique os valores'],
        expectedOutput: '20'
      }
    ],
    resources: [
      { title: 'Java Data Types', url: 'https://www.w3schools.com/java/java_data_types.asp', type: 'tutorial' }
    ],
    relatedConcepts: ['java-intro']
  },

  'java-operators': {
    id: 'java-operators',
    title: 'Operadores Aritméticos e Lógicos',
    description: 'Aprenda a usar operadores para realizar cálculos e comparações',
    difficulty: 'beginner',
    content: `Operadores são símbolos que realizam operações em variáveis e valores.

## Operadores Aritméticos:
- **+** : Adição
- **-** : Subtração
- **\*** : Multiplicação
- **/** : Divisão
- **%** : Módulo (resto da divisão)
- **++** : Incremento
- **--** : Decremento

## Operadores de Comparação:
- **==** : Igual a
- **!=** : Diferente de
- **>** : Maior que
- **<** : Menor que
- **>=** : Maior ou igual
- **<=** : Menor ou igual

## Operadores Lógicos:
- **&&** : E (AND)
- **||** : OU (OR)
- **!** : NÃO (NOT)`,
    examples: [
      {
        title: 'Operadores Aritméticos',
        language: 'java',
        code: `int a = 10;
int b = 3;
System.out.println("Adição: " + (a + b));      // 13
System.out.println("Subtração: " + (a - b));  // 7
System.out.println("Multiplicação: " + (a * b)); // 30
System.out.println("Divisão: " + (a / b));    // 3
System.out.println("Módulo: " + (a % b));     // 1`,
        explanation: 'Exemplos de operações aritméticas'
      },
      {
        title: 'Operadores de Comparação',
        language: 'java',
        code: `int x = 5;
int y = 10;
System.out.println(x == y);  // false
System.out.println(x != y);  // true
System.out.println(x < y);   // true
System.out.println(x > y);   // false`,
        explanation: 'Como comparar valores'
      }
    ],
    challenges: [
      {
        id: 'java-op-1',
        title: 'Calculadora Simples',
        description: 'Crie um programa que realiza adição, subtração, multiplicação e divisão de dois números',
        difficulty: 'easy',
        hints: ['Use variáveis para armazenar os números', 'Use operadores aritméticos']
      }
    ],
    resources: [
      { title: 'Java Operators', url: 'https://www.w3schools.com/java/java_operators.asp', type: 'tutorial' }
    ],
    relatedConcepts: ['java-variables']
  },

  'java-conditionals': {
    id: 'java-conditionals',
    title: 'Estruturas Condicionais (if/else)',
    description: 'Controle o fluxo do seu programa com condições',
    difficulty: 'beginner',
    content: `Estruturas condicionais permitem que seu programa tome decisões baseadas em condições.

## Tipos de Condicionais:
- **if**: Executa código se uma condição é verdadeira
- **else**: Executa código se a condição anterior é falsa
- **else if**: Testa múltiplas condições
- **switch**: Seleciona entre múltiplas opções

## Sintaxe Básica:
\`\`\`
if (condição) {
    // código executado se verdadeiro
} else if (outra condição) {
    // código executado se a segunda condição é verdadeira
} else {
    // código executado se nenhuma condição anterior foi verdadeira
}
\`\`\``,
    examples: [
      {
        title: 'if/else Básico',
        language: 'java',
        code: `int idade = 18;
if (idade >= 18) {
    System.out.println("Você é maior de idade");
} else {
    System.out.println("Você é menor de idade");
}`,
        explanation: 'Verifica se a idade é maior ou igual a 18'
      },
      {
        title: 'else if',
        language: 'java',
        code: `int nota = 75;
if (nota >= 90) {
    System.out.println("Nota A");
} else if (nota >= 80) {
    System.out.println("Nota B");
} else if (nota >= 70) {
    System.out.println("Nota C");
} else {
    System.out.println("Reprovado");
}`,
        explanation: 'Testa múltiplas condições para classificar notas'
      }
    ],
    challenges: [
      {
        id: 'java-cond-1',
        title: 'Verificador de Número',
        description: 'Crie um programa que verifica se um número é positivo, negativo ou zero',
        difficulty: 'easy',
        hints: ['Use if/else if/else', 'Compare com 0']
      }
    ],
    resources: [
      { title: 'Java if...else', url: 'https://www.w3schools.com/java/java_conditions.asp', type: 'tutorial' }
    ],
    relatedConcepts: ['java-operators']
  },

  'java-loops': {
    id: 'java-loops',
    title: 'Loops (for, while, do-while)',
    description: 'Repita código múltiplas vezes com loops',
    difficulty: 'beginner',
    content: `Loops permitem executar um bloco de código múltiplas vezes.

## Tipos de Loops:
- **for**: Quando você sabe quantas vezes repetir
- **while**: Enquanto uma condição é verdadeira
- **do-while**: Executa pelo menos uma vez, depois verifica a condição
- **for-each**: Para iterar sobre arrays

## Sintaxe:
\`\`\`
for (inicialização; condição; incremento) {
    // código
}

while (condição) {
    // código
}

do {
    // código
} while (condição);
\`\`\``,
    examples: [
      {
        title: 'Loop for',
        language: 'java',
        code: `for (int i = 1; i <= 5; i++) {
    System.out.println("Número: " + i);
}`,
        explanation: 'Imprime números de 1 a 5'
      },
      {
        title: 'Loop while',
        language: 'java',
        code: `int contador = 0;
while (contador < 5) {
    System.out.println("Contador: " + contador);
    contador++;
}`,
        explanation: 'Executa enquanto o contador for menor que 5'
      }
    ],
    challenges: [
      {
        id: 'java-loop-1',
        title: 'Tabuada',
        description: 'Crie um programa que imprime a tabuada de um número (1 a 10)',
        difficulty: 'easy',
        hints: ['Use um loop for', 'Multiplique o número por cada valor']
      }
    ],
    resources: [
      { title: 'Java Loops', url: 'https://www.w3schools.com/java/java_while_loop.asp', type: 'tutorial' }
    ],
    relatedConcepts: ['java-conditionals']
  },

  'java-arrays': {
    id: 'java-arrays',
    title: 'Arrays (Vetores)',
    description: 'Armazene múltiplos valores do mesmo tipo',
    difficulty: 'beginner',
    content: `Arrays são estruturas que armazenam múltiplos valores do mesmo tipo em uma única variável.

## Características:
- Índices começam em 0
- Tamanho fixo após criação
- Acesso rápido por índice
- Todos os elementos do mesmo tipo

## Declaração:
\`\`\`
tipo[] nome = new tipo[tamanho];
tipo[] nome = {valor1, valor2, valor3};
\`\`\``,
    examples: [
      {
        title: 'Criando e Acessando Arrays',
        language: 'java',
        code: `int[] numeros = {10, 20, 30, 40, 50};
System.out.println("Primeiro: " + numeros[0]);  // 10
System.out.println("Último: " + numeros[4]);    // 50

// Modificar um elemento
numeros[2] = 35;
System.out.println("Novo valor: " + numeros[2]); // 35`,
        explanation: 'Como criar e acessar elementos de um array'
      },
      {
        title: 'Iterando sobre Arrays',
        language: 'java',
        code: `String[] frutas = {"Maçã", "Banana", "Laranja"};
for (int i = 0; i < frutas.length; i++) {
    System.out.println(frutas[i]);
}

// Ou usando for-each
for (String fruta : frutas) {
    System.out.println(fruta);
}`,
        explanation: 'Duas formas de iterar sobre arrays'
      }
    ],
    challenges: [
      {
        id: 'java-arr-1',
        title: 'Soma de Array',
        description: 'Crie um programa que calcula a soma de todos os elementos de um array',
        difficulty: 'easy',
        hints: ['Use um loop para iterar', 'Acumule os valores em uma variável']
      }
    ],
    resources: [
      { title: 'Java Arrays', url: 'https://www.w3schools.com/java/java_arrays.asp', type: 'tutorial' }
    ],
    relatedConcepts: ['java-loops']
  },

  'java-strings': {
    id: 'java-strings',
    title: 'Strings e Manipulação de Texto',
    description: 'Trabalhe com texto em Java',
    difficulty: 'beginner',
    content: `Strings são sequências de caracteres. Em Java, são objetos da classe String.

## Operações Comuns:
- **length()**: Retorna o comprimento
- **charAt(index)**: Retorna caractere em posição
- **substring(start, end)**: Extrai parte da string
- **toUpperCase() / toLowerCase()**: Converte caso
- **contains(substring)**: Verifica se contém
- **replace(old, new)**: Substitui caracteres
- **split(delimiter)**: Divide a string`,
    examples: [
      {
        title: 'Operações Básicas com Strings',
        language: 'java',
        code: `String texto = "Olá, Mundo!";
System.out.println("Comprimento: " + texto.length());      // 12
System.out.println("Maiúscula: " + texto.toUpperCase());   // OLÁ, MUNDO!
System.out.println("Minúscula: " + texto.toLowerCase());   // olá, mundo!
System.out.println("Contém 'Mundo': " + texto.contains("Mundo")); // true`,
        explanation: 'Operações comuns com strings'
      },
      {
        title: 'Concatenação e Formatação',
        language: 'java',
        code: `String nome = "João";
int idade = 25;
String mensagem = nome + " tem " + idade + " anos";
System.out.println(mensagem);

// Ou usando format
String formatado = String.format("%s tem %d anos", nome, idade);
System.out.println(formatado);`,
        explanation: 'Diferentes formas de concatenar strings'
      }
    ],
    challenges: [
      {
        id: 'java-str-1',
        title: 'Verificador de Palíndromo',
        description: 'Crie um programa que verifica se uma palavra é um palíndromo (lê-se igual de trás para frente)',
        difficulty: 'medium',
        hints: ['Use substring ou charAt', 'Compare do início e fim']
      }
    ],
    resources: [
      { title: 'Java Strings', url: 'https://www.w3schools.com/java/java_strings.asp', type: 'tutorial' }
    ],
    relatedConcepts: ['java-variables']
  },

  'java-methods': {
    id: 'java-methods',
    title: 'Métodos e Funções',
    description: 'Organize seu código em métodos reutilizáveis',
    difficulty: 'intermediate',
    content: `Métodos são blocos de código que realizam uma tarefa específica. Eles promovem reutilização e organização.

## Estrutura de um Método:
\`\`\`
[modificador] tipoRetorno nomeMétodo(parâmetros) {
    // corpo do método
    return valor;
}
\`\`\`

## Componentes:
- **Modificador**: public, private, protected
- **Tipo de Retorno**: void, int, String, etc.
- **Nome**: Deve ser descritivo
- **Parâmetros**: Entrada do método
- **Corpo**: Lógica do método
- **Return**: Valor retornado (se não void)`,
    examples: [
      {
        title: 'Método Simples',
        language: 'java',
        code: `public static void saudacao() {
    System.out.println("Olá!");
}

// Chamando o método
saudacao();`,
        explanation: 'Método que não recebe parâmetros nem retorna valor'
      },
      {
        title: 'Método com Parâmetros e Retorno',
        language: 'java',
        code: `public static int somar(int a, int b) {
    return a + b;
}

// Usando o método
int resultado = somar(5, 3);
System.out.println("Resultado: " + resultado); // 8`,
        explanation: 'Método que recebe parâmetros e retorna um valor'
      }
    ],
    challenges: [
      {
        id: 'java-met-1',
        title: 'Calculadora com Métodos',
        description: 'Crie métodos para as 4 operações básicas (soma, subtração, multiplicação, divisão)',
        difficulty: 'medium',
        hints: ['Crie um método para cada operação', 'Cada método deve retornar um valor']
      }
    ],
    resources: [
      { title: 'Java Methods', url: 'https://www.w3schools.com/java/java_methods.asp', type: 'tutorial' }
    ],
    relatedConcepts: ['java-conditionals', 'java-loops']
  },

  // ==================== JAVA - POO ====================
  'java-oop-intro': {
    id: 'java-oop-intro',
    title: 'Introdução à Programação Orientada a Objetos',
    description: 'Entenda os conceitos fundamentais de POO',
    difficulty: 'intermediate',
    content: `Programação Orientada a Objetos (POO) é um paradigma que organiza código em objetos que contêm dados e métodos.

## Conceitos Principais:
- **Classe**: Modelo/Template para criar objetos
- **Objeto**: Instância de uma classe
- **Atributos**: Dados/propriedades do objeto
- **Métodos**: Ações que o objeto pode realizar
- **Encapsulamento**: Proteger dados internos
- **Herança**: Reutilizar código de outras classes
- **Polimorfismo**: Objetos podem ter múltiplas formas
- **Abstração**: Esconder complexidade`,
    examples: [
      {
        title: 'Classe Básica',
        language: 'java',
        code: `public class Pessoa {
    // Atributos
    private String nome;
    private int idade;
    
    // Construtor
    public Pessoa(String nome, int idade) {
        this.nome = nome;
        this.idade = idade;
    }
    
    // Métodos
    public void apresentar() {
        System.out.println("Olá, sou " + nome);
    }
}

// Usando a classe
Pessoa p = new Pessoa("João", 25);
p.apresentar();`,
        explanation: 'Exemplo básico de uma classe em Java'
      }
    ],
    challenges: [],
    resources: [
      { title: 'OOP Concepts', url: 'https://www.w3schools.com/java/java_oop.asp', type: 'tutorial' }
    ],
    relatedConcepts: ['java-methods']
  },

  'java-classes': {
    id: 'java-classes',
    title: 'Classes e Objetos',
    description: 'Crie e use classes para organizar seu código',
    difficulty: 'intermediate',
    content: `Classes são blueprints para criar objetos. Cada classe define a estrutura e comportamento dos seus objetos.

## Componentes de uma Classe:
- **Atributos**: Variáveis que armazenam dados
- **Construtores**: Métodos especiais para inicializar objetos
- **Métodos**: Funções que definem comportamento
- **Getters/Setters**: Métodos para acessar e modificar atributos

## Modificadores de Acesso:
- **public**: Acessível de qualquer lugar
- **private**: Acessível apenas dentro da classe
- **protected**: Acessível na classe e subclasses
- **package-private**: Acessível no mesmo pacote`,
    examples: [
      {
        title: 'Classe Carro',
        language: 'java',
        code: `public class Carro {
    private String marca;
    private String modelo;
    private int ano;
    
    public Carro(String marca, String modelo, int ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    
    public void info() {
        System.out.println(ano + " " + marca + " " + modelo);
    }
    
    // Getters
    public String getMarca() { return marca; }
    public String getModelo() { return modelo; }
}`,
        explanation: 'Exemplo completo de uma classe com construtores e métodos'
      }
    ],
    challenges: [
      {
        id: 'java-cls-1',
        title: 'Classe Estudante',
        description: 'Crie uma classe Estudante com atributos (nome, matrícula, nota) e métodos (calcularMedia, passou)',
        difficulty: 'medium',
        hints: ['Use atributos private', 'Crie getters e setters']
      }
    ],
    resources: [],
    relatedConcepts: ['java-oop-intro']
  },

  'java-inheritance': {
    id: 'java-inheritance',
    title: 'Herança',
    description: 'Reutilize código através de herança entre classes',
    difficulty: 'intermediate',
    content: `Herança permite que uma classe herde atributos e métodos de outra classe.

## Conceitos:
- **Superclasse (Classe Pai)**: Classe que é herdada
- **Subclasse (Classe Filha)**: Classe que herda
- **extends**: Palavra-chave para herança
- **super**: Referencia a superclasse

## Benefícios:
- Reutilização de código
- Organização hierárquica
- Polimorfismo`,
    examples: [
      {
        title: 'Herança Simples',
        language: 'java',
        code: `public class Animal {
    protected String nome;
    
    public void fazer_som() {
        System.out.println("Som genérico");
    }
}

public class Cachorro extends Animal {
    public void fazer_som() {
        System.out.println("Au au!");
    }
}

// Usando
Cachorro dog = new Cachorro();
dog.fazer_som(); // Au au!`,
        explanation: 'Exemplo de herança simples'
      }
    ],
    challenges: [
      {
        id: 'java-inh-1',
        title: 'Hierarquia de Veículos',
        description: 'Crie uma classe Veículo e subclasses Carro e Moto com características específicas',
        difficulty: 'medium',
        hints: ['Use extends para herança', 'Sobrescreva métodos nas subclasses']
      }
    ],
    resources: [],
    relatedConcepts: ['java-classes']
  },

  'java-polymorphism': {
    id: 'java-polymorphism',
    title: 'Polimorfismo',
    description: 'Objetos podem ter múltiplas formas',
    difficulty: 'advanced',
    content: `Polimorfismo significa "muitas formas". Permite que objetos de diferentes classes sejam tratados como objetos de uma classe comum.

## Tipos:
- **Polimorfismo de Compilação**: Sobrecarga de métodos
- **Polimorfismo de Execução**: Sobrescrita de métodos

## Sobrecarga (Overloading):
Múltiplos métodos com mesmo nome mas parâmetros diferentes

## Sobrescrita (Overriding):
Subclasse fornece implementação específica de método da superclasse`,
    examples: [
      {
        title: 'Sobrecarga de Métodos',
        language: 'java',
        code: `public class Calculadora {
    public int somar(int a, int b) {
        return a + b;
    }
    
    public double somar(double a, double b) {
        return a + b;
    }
    
    public int somar(int a, int b, int c) {
        return a + b + c;
    }
}`,
        explanation: 'Mesmo método com diferentes parâmetros'
      }
    ],
    challenges: [],
    resources: [],
    relatedConcepts: ['java-inheritance']
  },

  'java-encapsulation': {
    id: 'java-encapsulation',
    title: 'Encapsulamento',
    description: 'Proteja dados internos com encapsulamento',
    difficulty: 'intermediate',
    content: `Encapsulamento é o princípio de esconder detalhes internos de um objeto e expor apenas o necessário.

## Benefícios:
- Proteger dados
- Validação de entrada
- Flexibilidade para mudanças internas
- Interface clara

## Implementação:
- Atributos private
- Métodos public para acesso (getters/setters)
- Validação nos setters`,
    examples: [
      {
        title: 'Encapsulamento com Getters e Setters',
        language: 'java',
        code: `public class ContaBancaria {
    private double saldo;
    
    public ContaBancaria(double saldoInicial) {
        if (saldoInicial > 0) {
            this.saldo = saldoInicial;
        }
    }
    
    public double getSaldo() {
        return saldo;
    }
    
    public void depositar(double valor) {
        if (valor > 0) {
            saldo += valor;
        }
    }
}`,
        explanation: 'Encapsulamento protegendo o saldo'
      }
    ],
    challenges: [],
    resources: [],
    relatedConcepts: ['java-classes']
  },

  // ==================== BACK-END ====================
  'backend-git-intro': {
    id: 'backend-git-intro',
    title: 'Introdução ao Git',
    description: 'Controle de versão essencial para desenvolvimento',
    difficulty: 'beginner',
    content: `Git é um sistema de controle de versão distribuído que permite rastrear mudanças no código.

## Conceitos Principais:
- **Repository**: Repositório que armazena o projeto
- **Commit**: Snapshot do código em um ponto no tempo
- **Branch**: Linha de desenvolvimento independente
- **Merge**: Combinar branches
- **Pull Request**: Proposta de mudanças

## Comandos Essenciais:
- git init: Inicializar repositório
- git add: Adicionar mudanças
- git commit: Registrar mudanças
- git push: Enviar para servidor
- git pull: Baixar mudanças`,
    examples: [
      {
        title: 'Workflow Básico',
        language: 'bash',
        code: `# Inicializar repositório
git init

# Adicionar arquivo
git add arquivo.txt

# Fazer commit
git commit -m "Adicionar arquivo"

# Ver histórico
git log`,
        explanation: 'Workflow básico do Git'
      }
    ],
    challenges: [],
    resources: [
      { title: 'Git Documentation', url: 'https://git-scm.com/doc', type: 'documentation' }
    ],
    relatedConcepts: []
  },

  'backend-database-intro': {
    id: 'backend-database-intro',
    title: 'Introdução a Banco de Dados',
    description: 'Fundamentos de armazenamento de dados',
    difficulty: 'beginner',
    content: `Bancos de dados são sistemas para armazenar, organizar e recuperar dados.

## Tipos:
- **SQL (Relacional)**: MySQL, PostgreSQL, SQL Server
- **NoSQL**: MongoDB, Redis, Cassandra

## Conceitos:
- **Tabela**: Estrutura com linhas e colunas
- **Coluna**: Campo com tipo de dado
- **Linha**: Registro com dados
- **Chave Primária**: Identificador único
- **Chave Estrangeira**: Relacionamento entre tabelas`,
    examples: [
      {
        title: 'SQL Básico',
        language: 'sql',
        code: `-- Criar tabela
CREATE TABLE usuarios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
    email VARCHAR(100),
    idade INT
);

-- Inserir dados
INSERT INTO usuarios (nome, email, idade) 
VALUES ('João', 'joao@email.com', 25);

-- Consultar dados
SELECT * FROM usuarios;`,
        explanation: 'Operações básicas de SQL'
      }
    ],
    challenges: [],
    resources: [
      { title: 'SQL Tutorial', url: 'https://www.w3schools.com/sql/', type: 'tutorial' }
    ],
    relatedConcepts: []
  },

  'backend-rest-api': {
    id: 'backend-rest-api',
    title: 'APIs REST',
    description: 'Crie APIs para comunicação entre sistemas',
    difficulty: 'intermediate',
    content: `REST (Representational State Transfer) é um estilo arquitetural para criar APIs.

## Princípios:
- **Cliente-Servidor**: Separação de responsabilidades
- **Stateless**: Cada requisição é independente
- **Cacheable**: Respostas podem ser cacheadas
- **Uniform Interface**: Interface consistente

## Métodos HTTP:
- **GET**: Recuperar dados
- **POST**: Criar dados
- **PUT**: Atualizar dados
- **DELETE**: Deletar dados
- **PATCH**: Atualização parcial`,
    examples: [
      {
        title: 'Endpoint REST Simples',
        language: 'java',
        code: `@RestController
@RequestMapping("/api/usuarios")
public class UsuarioController {
    
    @GetMapping
    public List<Usuario> listar() {
        return usuarioService.listarTodos();
    }
    
    @GetMapping("/{id}")
    public Usuario obter(@PathVariable Long id) {
        return usuarioService.obterPorId(id);
    }
    
    @PostMapping
    public Usuario criar(@RequestBody Usuario usuario) {
        return usuarioService.salvar(usuario);
    }
}`,
        explanation: 'Exemplo de endpoints REST em Spring Boot'
      }
    ],
    challenges: [],
    resources: [
      { title: 'REST API Best Practices', url: 'https://restfulapi.net/', type: 'article' }
    ],
    relatedConcepts: ['backend-database-intro']
  },

  // ==================== FRONT-END ====================
  'frontend-html-intro': {
    id: 'frontend-html-intro',
    title: 'Introdução a HTML',
    description: 'Estrutura básica de páginas web',
    difficulty: 'beginner',
    content: `HTML (HyperText Markup Language) é a linguagem para criar estrutura de páginas web.

## Elementos Principais:
- **<!DOCTYPE html>**: Declaração do tipo de documento
- **<html>**: Elemento raiz
- **<head>**: Metadados e configurações
- **<body>**: Conteúdo visível
- **<h1> a <h6>**: Títulos
- **<p>**: Parágrafos
- **<a>**: Links
- **<img>**: Imagens
- **<div>**: Containers genéricos`,
    examples: [
      {
        title: 'Página HTML Básica',
        language: 'html',
        code: `<!DOCTYPE html>
<html>
<head>
    <title>Minha Página</title>
</head>
<body>
    <h1>Bem-vindo!</h1>
    <p>Esta é minha primeira página web.</p>
    <a href="https://google.com">Clique aqui</a>
</body>
</html>`,
        explanation: 'Estrutura básica de uma página HTML'
      }
    ],
    challenges: [],
    resources: [
      { title: 'HTML Tutorial', url: 'https://www.w3schools.com/html/', type: 'tutorial' }
    ],
    relatedConcepts: []
  },

  'frontend-css-intro': {
    id: 'frontend-css-intro',
    title: 'Introdução a CSS',
    description: 'Estilize suas páginas web',
    difficulty: 'beginner',
    content: `CSS (Cascading Style Sheets) é usado para estilizar elementos HTML.

## Seletores:
- **Elemento**: h1, p, div
- **Classe**: .classe
- **ID**: #id
- **Atributo**: [type="text"]

## Propriedades Comuns:
- **color**: Cor do texto
- **background-color**: Cor de fundo
- **font-size**: Tamanho da fonte
- **margin**: Espaço externo
- **padding**: Espaço interno
- **border**: Borda`,
    examples: [
      {
        title: 'CSS Básico',
        language: 'css',
        code: `/* Elemento */
h1 {
    color: blue;
    font-size: 32px;
}

/* Classe */
.destaque {
    background-color: yellow;
    padding: 10px;
}

/* ID */
#principal {
    width: 80%;
    margin: 0 auto;
}`,
        explanation: 'Exemplos de seletores CSS'
      }
    ],
    challenges: [],
    resources: [
      { title: 'CSS Tutorial', url: 'https://www.w3schools.com/css/', type: 'tutorial' }
    ],
    relatedConcepts: ['frontend-html-intro']
  },

  'frontend-javascript-intro': {
    id: 'frontend-javascript-intro',
    title: 'Introdução a JavaScript',
    description: 'Adicione interatividade às suas páginas',
    difficulty: 'beginner',
    content: `JavaScript é a linguagem de programação para o navegador.

## Características:
- Linguagem dinâmica
- Orientada a objetos
- Funcional
- Executa no navegador

## Formas de Usar:
- Inline: <script> dentro do HTML
- Externo: Arquivo .js separado
- Console do navegador`,
    examples: [
      {
        title: 'JavaScript Básico',
        language: 'javascript',
        code: `// Variáveis
let nome = "João";
const idade = 25;
var ativo = true;

// Funções
function saudar(nome) {
    console.log("Olá, " + nome);
}

saudar("Maria");`,
        explanation: 'Sintaxe básica de JavaScript'
      }
    ],
    challenges: [],
    resources: [
      { title: 'JavaScript Tutorial', url: 'https://www.w3schools.com/js/', type: 'tutorial' }
    ],
    relatedConcepts: ['frontend-html-intro']
  },

  'frontend-react-intro': {
    id: 'frontend-react-intro',
    title: 'Introdução a React',
    description: 'Biblioteca para criar interfaces interativas',
    difficulty: 'intermediate',
    content: `React é uma biblioteca JavaScript para criar interfaces de usuário.

## Conceitos:
- **Componentes**: Blocos reutilizáveis de UI
- **JSX**: Sintaxe que mistura HTML com JavaScript
- **Props**: Propriedades passadas para componentes
- **State**: Dados mutáveis do componente
- **Hooks**: Funções para usar estado e efeitos

## Vantagens:
- Reutilização de componentes
- Virtual DOM para performance
- Grande comunidade`,
    examples: [
      {
        title: 'Componente React Simples',
        language: 'javascript',
        code: `function Saudacao({ nome }) {
    return <h1>Olá, {nome}!</h1>;
}

function App() {
    return <Saudacao nome="João" />;
}

export default App;`,
        explanation: 'Componente React funcional'
      }
    ],
    challenges: [],
    resources: [
      { title: 'React Documentation', url: 'https://react.dev/', type: 'documentation' }
    ],
    relatedConcepts: ['frontend-javascript-intro']
  },

  // ==================== INGLÊS ====================
  'english-greetings': {
    id: 'english-greetings',
    title: 'Saudações e Apresentações',
    description: 'Aprenda a se apresentar em inglês',
    difficulty: 'beginner',
    content: `Saudações são a base da comunicação em qualquer idioma.

## Saudações Comuns:
- Hello / Hi: Olá
- Good morning: Bom dia
- Good afternoon: Boa tarde
- Good evening: Boa noite
- How are you?: Como você está?
- Nice to meet you: Prazer em conhecê-lo

## Respostas:
- I'm fine, thank you: Estou bem, obrigado
- I'm doing well: Estou indo bem
- Not bad: Não está ruim`,
    examples: [
      {
        title: 'Diálogo de Apresentação',
        language: 'text',
        code: `A: Hello! My name is John.
B: Hi John! Nice to meet you. I'm Sarah.
A: Nice to meet you too! How are you?
B: I'm doing great, thank you. How about you?
A: I'm fine, thanks for asking!`,
        explanation: 'Conversa típica de apresentação'
      }
    ],
    challenges: [
      {
        id: 'eng-greet-1',
        title: 'Crie uma Apresentação',
        description: 'Escreva uma apresentação em inglês com seu nome e profissão',
        difficulty: 'easy',
        hints: ['Use "My name is..."', 'Use "I am a..."']
      }
    ],
    resources: [
      { title: 'English Greetings', url: 'https://www.englishclub.com/english-for-beginners/greetings.php', type: 'tutorial' }
    ],
    relatedConcepts: []
  },

  'english-vocabulary': {
    id: 'english-vocabulary',
    title: 'Vocabulário Técnico para Programadores',
    description: 'Palavras essenciais para desenvolvimento',
    difficulty: 'intermediate',
    content: `Vocabulário técnico específico para programação em inglês.

## Termos Comuns:
- **Variable**: Variável
- **Function**: Função
- **Loop**: Laço
- **Condition**: Condição
- **Array**: Vetor
- **Object**: Objeto
- **Method**: Método
- **Class**: Classe
- **Interface**: Interface
- **Database**: Banco de dados`,
    examples: [
      {
        title: 'Expressões Técnicas',
        language: 'text',
        code: `"The function returns a boolean value"
"We need to optimize the database query"
"This class implements the interface"
"The loop iterates through the array"
"The variable is out of scope"`,
        explanation: 'Exemplos de expressões técnicas'
      }
    ],
    challenges: [],
    resources: [],
    relatedConcepts: ['english-greetings']
  },

  // ==================== MATEMÁTICA ====================
  'math-algebra-basics': {
    id: 'math-algebra-basics',
    title: 'Álgebra Básica',
    description: 'Fundamentos de álgebra',
    difficulty: 'beginner',
    content: `Álgebra é o ramo da matemática que usa símbolos para representar números.

## Conceitos:
- **Variável**: Símbolo que representa um número desconhecido
- **Expressão**: Combinação de números e variáveis
- **Equação**: Afirmação que duas expressões são iguais
- **Operações**: Adição, subtração, multiplicação, divisão

## Propriedades:
- Comutativa: a + b = b + a
- Associativa: (a + b) + c = a + (b + c)
- Distributiva: a(b + c) = ab + ac`,
    examples: [
      {
        title: 'Resolvendo Equações',
        language: 'text',
        code: `Equação: 2x + 5 = 13
Passo 1: 2x = 13 - 5
Passo 2: 2x = 8
Passo 3: x = 8 ÷ 2
Resultado: x = 4`,
        explanation: 'Exemplo de resolução de equação linear'
      }
    ],
    challenges: [
      {
        id: 'math-alg-1',
        title: 'Resolva Equações',
        description: 'Resolva: 3x - 7 = 14',
        difficulty: 'easy',
        hints: ['Adicione 7 em ambos os lados', 'Divida por 3']
      }
    ],
    resources: [
      { title: 'Khan Academy Algebra', url: 'https://www.khanacademy.org/math/algebra1', type: 'tutorial' }
    ],
    relatedConcepts: []
  },

  'math-calculus-intro': {
    id: 'math-calculus-intro',
    title: 'Introdução ao Cálculo',
    description: 'Conceitos fundamentais de cálculo',
    difficulty: 'advanced',
    content: `Cálculo é o estudo de mudanças e movimento.

## Tópicos Principais:
- **Limite**: Valor que uma função se aproxima
- **Derivada**: Taxa de mudança
- **Integral**: Área sob uma curva
- **Função**: Relação entre entrada e saída

## Aplicações:
- Física
- Engenharia
- Economia
- Ciência de Dados`,
    examples: [
      {
        title: 'Derivada Simples',
        language: 'text',
        code: `f(x) = x²
f'(x) = 2x

Em x = 3:
f'(3) = 2(3) = 6`,
        explanation: 'Exemplo de derivada'
      }
    ],
    challenges: [],
    resources: [
      { title: 'Calculus Tutorial', url: 'https://www.khanacademy.org/math/calculus-1', type: 'tutorial' }
    ],
    relatedConcepts: ['math-algebra-basics']
  }
};

// Função para obter conceito por ID
export function getConceptById(id: string): Concept | undefined {
  return conceptsData[id];
}

// Função para obter todos os conceitos
export function getAllConcepts(): Concept[] {
  return Object.values(conceptsData);
}

// Função para buscar conceitos por dificuldade
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
