import { Concept } from './conceptsData';

export const conceptsMissing: Record<string, Concept> = {
  'java-conditionals': {
    id: 'java-conditionals',
    title: 'Condicionais (if-else, switch)',
    description: 'Aprenda a usar if-else e switch para controlar o fluxo do programa',
    difficulty: 'beginner',
    content: `# Condicionais em Java

## O que são Condicionais?

Condicionais permitem que seu programa tome decisões baseadas em condições. Se uma condição for verdadeira, um bloco de código é executado; caso contrário, outro bloco pode ser executado.

## if-else

### Sintaxe básica:
\`\`\`java
if (condição) {
    // código executado se a condição for verdadeira
} else {
    // código executado se a condição for falsa
}
\`\`\`

### Exemplo:
\`\`\`java
int idade = 18;

if (idade >= 18) {
    System.out.println("Você é maior de idade");
} else {
    System.out.println("Você é menor de idade");
}
\`\`\`

## if-else if-else

Para múltiplas condições:

\`\`\`java
int nota = 75;

if (nota >= 90) {
    System.out.println("A");
} else if (nota >= 80) {
    System.out.println("B");
} else if (nota >= 70) {
    System.out.println("C");
} else {
    System.out.println("F");
}
\`\`\`

## switch-case

Para múltiplas opções:

\`\`\`java
int dia = 3;

switch (dia) {
    case 1:
        System.out.println("Segunda");
        break;
    case 2:
        System.out.println("Terça");
        break;
    case 3:
        System.out.println("Quarta");
        break;
    default:
        System.out.println("Dia inválido");
}
\`\`\`

## Operadores de Comparação

- \`==\` : igual
- \`!=\` : diferente
- \`<\` : menor que
- \`>\` : maior que
- \`<=\` : menor ou igual
- \`>=\` : maior ou igual

## Operadores Lógicos

- \`&&\` : AND (e)
- \`||\` : OR (ou)
- \`!\` : NOT (não)

### Exemplo com operadores lógicos:
\`\`\`java
int idade = 20;
boolean temCarteira = true;

if (idade >= 18 && temCarteira) {
    System.out.println("Pode dirigir");
}
\`\`\``,
    examples: [
      {
        title: 'Validar Idade',
        language: 'java',
        code: `public class ValidarIdade {
    public static void main(String[] args) {
        int idade = 16;
        
        if (idade >= 18) {
            System.out.println("Maior de idade");
        } else {
            System.out.println("Menor de idade");
        }
    }
}`,
        explanation: 'Verifica se a pessoa é maior de idade'
      },
      {
        title: 'Classificar Nota',
        language: 'java',
        code: `public class ClassificarNota {
    public static void main(String[] args) {
        double nota = 8.5;
        
        if (nota >= 9) {
            System.out.println("Excelente");
        } else if (nota >= 7) {
            System.out.println("Bom");
        } else if (nota >= 5) {
            System.out.println("Satisfatório");
        } else {
            System.out.println("Insuficiente");
        }
    }
}`,
        explanation: 'Classifica uma nota em categorias'
      },
      {
        title: 'Dia da Semana',
        language: 'java',
        code: `public class DiaSemana {
    public static void main(String[] args) {
        int dia = 5;
        
        switch (dia) {
            case 1:
                System.out.println("Segunda-feira");
                break;
            case 2:
                System.out.println("Terça-feira");
                break;
            case 5:
                System.out.println("Sexta-feira");
                break;
            default:
                System.out.println("Dia inválido");
        }
    }
}`,
        explanation: 'Usa switch para determinar o dia da semana'
      }
    ],
    challenges: [
      {
        id: 'cond-1',
        title: 'Verificar Número Positivo',
        description: 'Crie um programa que verifica se um número é positivo, negativo ou zero',
        difficulty: 'easy',
        hints: ['Use if-else if-else', 'Compare com 0'],
        expectedOutput: 'Positivo / Negativo / Zero'
      },
      {
        id: 'cond-2',
        title: 'Validar Login',
        description: 'Crie um programa que valida usuário e senha',
        difficulty: 'medium',
        hints: ['Use operador &&', 'Compare strings com .equals()'],
        expectedOutput: 'Login válido ou inválido'
      },
      {
        id: 'cond-3',
        title: 'Calculadora com Switch',
        description: 'Crie uma calculadora que usa switch para operações',
        difficulty: 'medium',
        hints: ['Use switch para operadores', 'Implemente +, -, *, /'],
        expectedOutput: 'Resultado da operação'
      }
    ],
    resources: [
      {
        title: 'Java if-else Documentation',
        url: 'https://docs.oracle.com/javase/tutorial/java/nutsandbolts/if.html',
        type: 'documentation'
      },
      {
        title: 'Java switch Documentation',
        url: 'https://docs.oracle.com/javase/tutorial/java/nutsandbolts/switch.html',
        type: 'documentation'
      }
    ],
    relatedConcepts: ['java-operators', 'java-loops', 'java-control-flow']
  },

  'java-classes': {
    id: 'java-classes',
    title: 'Classes e Objetos',
    description: 'Aprenda a criar e usar classes em Java',
    difficulty: 'intermediate',
    content: `# Classes e Objetos em Java

## O que é uma Classe?

Uma classe é um modelo (template) para criar objetos. Define atributos (dados) e métodos (comportamentos).

## Sintaxe Básica

\`\`\`java
public class Pessoa {
    // Atributos
    String nome;
    int idade;
    
    // Método
    void apresentar() {
        System.out.println("Olá, meu nome é " + nome);
    }
}
\`\`\`

## Criando Objetos

\`\`\`java
Pessoa p1 = new Pessoa();
p1.nome = "João";
p1.idade = 25;
p1.apresentar();
\`\`\`

## Construtores

Construtores inicializam objetos:

\`\`\`java
public class Pessoa {
    String nome;
    int idade;
    
    // Construtor
    public Pessoa(String nome, int idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

// Uso
Pessoa p1 = new Pessoa("Maria", 30);
\`\`\`

## Modificadores de Acesso

- \`public\` : acessível de qualquer lugar
- \`private\` : acessível apenas dentro da classe
- \`protected\` : acessível na classe e subclasses
- (padrão) : acessível no mesmo pacote`,
    examples: [
      {
        title: 'Classe Pessoa',
        language: 'java',
        code: `public class Pessoa {
    private String nome;
    private int idade;
    
    public Pessoa(String nome, int idade) {
        this.nome = nome;
        this.idade = idade;
    }
    
    public void apresentar() {
        System.out.println("Nome: " + nome + ", Idade: " + idade);
    }
}`,
        explanation: 'Define uma classe Pessoa com atributos e métodos'
      },
      {
        title: 'Usando a Classe',
        language: 'java',
        code: `public class Main {
    public static void main(String[] args) {
        Pessoa p1 = new Pessoa("João", 25);
        Pessoa p2 = new Pessoa("Maria", 30);
        
        p1.apresentar();
        p2.apresentar();
    }
}`,
        explanation: 'Cria e utiliza objetos da classe Pessoa'
      }
    ],
    challenges: [
      {
        id: 'class-1',
        title: 'Criar Classe Carro',
        description: 'Crie uma classe Carro com marca, modelo e ano',
        difficulty: 'easy',
        hints: ['Defina atributos', 'Crie um construtor'],
        expectedOutput: 'Objeto Carro criado'
      }
    ],
    resources: [
      {
        title: 'Java Classes Documentation',
        url: 'https://docs.oracle.com/javase/tutorial/java/javaOO/classes.html',
        type: 'documentation'
      }
    ],
    relatedConcepts: ['java-oop-intro', 'java-encapsulation']
  },

  'java-encapsulation': {
    id: 'java-encapsulation',
    title: 'Encapsulamento',
    description: 'Aprenda sobre encapsulamento e getters/setters',
    difficulty: 'intermediate',
    content: `# Encapsulamento em Java

## O que é Encapsulamento?

Encapsulamento é o princípio de ocultar os detalhes internos de um objeto e fornecer uma interface pública para interagir com ele.

## Getters e Setters

\`\`\`java
public class Pessoa {
    private String nome;
    private int idade;
    
    // Getter
    public String getNome() {
        return nome;
    }
    
    // Setter
    public void setNome(String nome) {
        this.nome = nome;
    }
    
    public int getIdade() {
        return idade;
    }
    
    public void setIdade(int idade) {
        if (idade > 0) {
            this.idade = idade;
        }
    }
}
\`\`\`

## Benefícios

1. **Controle**: Você controla como os dados são acessados e modificados
2. **Validação**: Pode validar dados antes de atribuir
3. **Flexibilidade**: Pode mudar a implementação interna sem afetar o código externo
4. **Segurança**: Protege dados sensíveis`,
    examples: [
      {
        title: 'Classe com Encapsulamento',
        language: 'java',
        code: `public class ContaBancaria {
    private double saldo;
    
    public ContaBancaria(double saldoInicial) {
        this.saldo = saldoInicial;
    }
    
    public double getSaldo() {
        return saldo;
    }
    
    public void depositar(double valor) {
        if (valor > 0) {
            saldo += valor;
        }
    }
    
    public void sacar(double valor) {
        if (valor > 0 && valor <= saldo) {
            saldo -= valor;
        }
    }
}`,
        explanation: 'Encapsula o saldo e fornece métodos para operações'
      }
    ],
    challenges: [
      {
        id: 'encap-1',
        title: 'Classe Produto',
        description: 'Crie uma classe Produto com preço encapsulado',
        difficulty: 'easy',
        hints: ['Use private para atributos', 'Crie getters e setters'],
        expectedOutput: 'Produto com preço validado'
      }
    ],
    resources: [
      {
        title: 'Java Encapsulation',
        url: 'https://www.w3schools.com/java/java_encapsulation.asp',
        type: 'tutorial'
      }
    ],
    relatedConcepts: ['java-classes', 'java-oop-intro']
  }
};
