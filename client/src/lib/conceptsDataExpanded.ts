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

export const conceptsDataExpanded: Record<string, Concept> = {
  // ==================== JAVA - FUNDAMENTOS ====================
  'java-intro': {
    id: 'java-intro',
    title: 'Introdução a Java',
    description: 'Aprenda o que é Java, sua história e por que é importante',
    difficulty: 'beginner',
    content: `# Introdução a Java

Java é uma linguagem de programação orientada a objetos criada em 1995 por James Gosling na Sun Microsystems. 

## O que é Java?

Java é uma linguagem de programação de propósito geral, compilada para bytecode que é executado em uma máquina virtual (JVM - Java Virtual Machine). Isso significa que você escreve o código uma vez e pode executá-lo em qualquer plataforma que tenha a JVM instalada.

## Características Principais:

### 1. Portabilidade (WORA - Write Once, Run Anywhere)
- Código Java é compilado para bytecode (.class)
- Bytecode é interpretado pela JVM em qualquer sistema operacional
- Não precisa recompilar para Windows, Linux, Mac, etc.

### 2. Orientada a Objetos
- Tudo em Java é um objeto (exceto tipos primitivos)
- Suporta encapsulamento, herança e polimorfismo
- Promove código modular e reutilizável

### 3. Segura
- Gerenciamento automático de memória (Garbage Collector)
- Sem ponteiros (evita erros de acesso à memória)
- Verificação de tipo em tempo de compilação

### 4. Robusta
- Tratamento de exceções integrado
- Verificação de erros em tempo de compilação
- Reduz bugs e crashes em produção

### 5. Multithreaded
- Suporta programação concorrente
- Múltiplas threads podem executar simultaneamente
- Ideal para aplicações que precisam fazer várias coisas ao mesmo tempo

### 6. Independente de Plataforma
- Funciona em Windows, Linux, Mac, Android, etc.
- Mesmo código funciona em todas as plataformas

## Por que Java é Importante?

### Mercado de Trabalho
- Linguagem mais usada em empresas Fortune 500
- Altíssima demanda por desenvolvedores Java
- Salários competitivos e oportunidades de carreira

### Aplicações
- Aplicações empresariais (sistemas bancários, ERPs)
- Aplicativos Android
- Sistemas web (Spring Framework)
- Big Data (Hadoop, Spark)
- Aplicações de tempo real

### Comunidade e Ecossistema
- Comunidade muito ativa e grande
- Milhões de bibliotecas e frameworks
- Suporte excelente e documentação abundante

## Instalação do Ambiente

### Passo 1: Instalar JDK (Java Development Kit)
- Download: https://www.oracle.com/java/technologies/downloads/
- Escolha a versão LTS (Long Term Support) - atualmente Java 21
- Instale seguindo o assistente

### Passo 2: Verificar Instalação
- Abra o terminal/prompt de comando
- Digite: \`java -version\`
- Deve mostrar a versão instalada

### Passo 3: Configurar Variáveis de Ambiente
- Adicione o caminho do JDK às variáveis de ambiente
- No Windows: JAVA_HOME deve apontar para a pasta de instalação do JDK

## Estrutura Básica de um Programa Java

Todo programa Java tem uma estrutura básica:

\`\`\`java
public class NomeDaClasse {
    public static void main(String[] args) {
        // Código aqui
    }
}
\`\`\`

### Explicação:
- \`public class NomeDaClasse\`: Define uma classe pública
- \`public static void main(String[] args)\`: Método principal (ponto de entrada)
- \`public\`: Acessível de qualquer lugar
- \`static\`: Pertence à classe, não a uma instância
- \`void\`: Não retorna nada
- \`String[] args\`: Argumentos da linha de comando`,
    examples: [
      {
        title: 'Hello World - Seu Primeiro Programa',
        language: 'java',
        code: `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
        explanation: 'Este é o programa mais simples em Java. Ele cria uma classe chamada HelloWorld e imprime uma mensagem na tela usando System.out.println().'
      },
      {
        title: 'Programa com Múltiplas Linhas',
        language: 'java',
        code: `public class Apresentacao {
    public static void main(String[] args) {
        System.out.println("Bem-vindo ao Java!");
        System.out.println("Este é um programa simples");
        System.out.println("Java é incrível!");
    }
}`,
        explanation: 'Programa que imprime múltiplas linhas. Cada System.out.println() imprime uma linha e pula para a próxima.'
      },
      {
        title: 'Programa com Argumentos',
        language: 'java',
        code: `public class Saudacao {
    public static void main(String[] args) {
        if (args.length > 0) {
            System.out.println("Olá, " + args[0] + "!");
        } else {
            System.out.println("Olá, visitante!");
        }
    }
}`,
        explanation: 'Programa que recebe argumentos da linha de comando. Execute com: java Saudacao João'
      }
    ],
    challenges: [
      {
        id: 'java-intro-1',
        title: 'Seu Primeiro Programa',
        description: 'Crie um programa Java que imprime seu nome e idade em linhas separadas',
        difficulty: 'easy',
        hints: ['Use System.out.println()', 'Crie uma classe chamada MeuPrograma', 'Imprima duas linhas'],
        expectedOutput: 'Seu nome aqui\n25 anos'
      },
      {
        id: 'java-intro-2',
        title: 'Saudação Personalizada',
        description: 'Crie um programa que recebe um nome como argumento e imprime uma saudação personalizada',
        difficulty: 'medium',
        hints: ['Use args[0] para acessar o primeiro argumento', 'Concatene strings com +', 'Trate o caso onde nenhum argumento é fornecido'],
        expectedOutput: 'Olá, João! Bem-vindo ao Java!'
      },
      {
        id: 'java-intro-3',
        title: 'Padrão de Asteriscos',
        description: 'Crie um programa que imprime um padrão de asteriscos (você aprenderá loops depois, mas tente com múltiplos println)',
        difficulty: 'easy',
        hints: ['Use múltiplos System.out.println()', 'Cada linha tem um número diferente de asteriscos'],
        expectedOutput: '*\n**\n***\n****\n*****'
      }
    ],
    resources: [
      { title: 'Oracle Java Documentation', url: 'https://docs.oracle.com/javase/', type: 'documentation' },
      { title: 'Java Tutorial for Beginners', url: 'https://www.youtube.com/watch?v=eIrMbAQSU34', type: 'video' },
      { title: 'Getting Started with Java', url: 'https://www.oracle.com/java/technologies/getting-started.html', type: 'tutorial' }
    ],
    relatedConcepts: ['java-variables', 'java-operators', 'java-control-flow']
  },

  'java-variables': {
    id: 'java-variables',
    title: 'Variáveis e Tipos de Dados',
    description: 'Entenda como declarar e usar variáveis em Java',
    difficulty: 'beginner',
    content: `# Variáveis e Tipos de Dados em Java

Variáveis são contêineres para armazenar dados. Java é uma linguagem fortemente tipada, o que significa que cada variável tem um tipo específico que determina que tipo de dados ela pode armazenar.

## O que é uma Variável?

Uma variável é um nome simbólico para um local na memória que armazena um valor. Você pode pensar em uma variável como uma caixa rotulada que contém um valor.

## Tipos Primitivos em Java

Java possui 8 tipos de dados primitivos:

### 1. Tipos Inteiros
- **byte**: 8 bits, intervalo de -128 a 127
- **short**: 16 bits, intervalo de -32.768 a 32.767
- **int**: 32 bits, intervalo de -2.147.483.648 a 2.147.483.647 (mais usado)
- **long**: 64 bits, intervalo de -9.223.372.036.854.775.808 a 9.223.372.036.854.775.807

### 2. Tipos de Ponto Flutuante
- **float**: 32 bits, números decimais com precisão simples
- **double**: 64 bits, números decimais com precisão dupla (mais usado)

### 3. Tipo Booleano
- **boolean**: Pode ser true ou false (usado em condições)

### 4. Tipo Caractere
- **char**: Um único caractere Unicode

## Declaração de Variáveis

A sintaxe básica para declarar uma variável é:

\`\`\`
tipo nomeDaVariavel;
\`\`\`

Exemplos:
\`\`\`java
int idade;
double altura;
String nome;
boolean ativo;
\`\`\`

## Inicialização de Variáveis

Você pode inicializar uma variável no momento da declaração:

\`\`\`java
int idade = 25;
double altura = 1.75;
String nome = "João";
boolean ativo = true;
\`\`\`

## Tipos de Referência

Além dos tipos primitivos, existem tipos de referência:

- **String**: Sequência de caracteres
- **Arrays**: Coleção de elementos do mesmo tipo
- **Classes**: Objetos customizados

## Convenções de Nomenclatura

- Use camelCase: \`minhaVariavel\`, \`idadeDoUsuario\`
- Comece com letra minúscula
- Nomes descritivos: \`idade\` em vez de \`a\`
- Evite caracteres especiais

## Escopo de Variáveis

O escopo define onde uma variável pode ser usada:

- **Escopo de Classe**: Variável de instância, acessível em toda a classe
- **Escopo de Método**: Variável local, acessível apenas dentro do método
- **Escopo de Bloco**: Variável local, acessível apenas dentro do bloco

## Modificadores de Acesso

- **public**: Acessível de qualquer lugar
- **private**: Acessível apenas dentro da classe
- **protected**: Acessível dentro do pacote e subclasses
- **(sem modificador)**: Acessível dentro do pacote`,
    examples: [
      {
        title: 'Declaração e Inicialização de Variáveis',
        language: 'java',
        code: `public class VariaveisExemplo {
    public static void main(String[] args) {
        // Tipos inteiros
        int idade = 25;
        long populacao = 8000000000L;
        
        // Tipos decimais
        double altura = 1.75;
        float peso = 70.5f;
        
        // Tipo booleano
        boolean ativo = true;
        
        // Tipo caractere
        char inicial = 'J';
        
        // String
        String nome = "João Silva";
        
        // Imprimindo valores
        System.out.println("Nome: " + nome);
        System.out.println("Idade: " + idade);
        System.out.println("Altura: " + altura);
    }
}`,
        explanation: 'Exemplo mostrando como declarar e inicializar diferentes tipos de variáveis em Java.'
      },
      {
        title: 'Conversão de Tipos',
        language: 'java',
        code: `public class ConversaoTipos {
    public static void main(String[] args) {
        // Conversão implícita (automática)
        int numero = 100;
        long numeroLongo = numero; // int para long
        
        // Conversão explícita (casting)
        double valor = 99.99;
        int valorInteiro = (int) valor; // double para int (perde decimais)
        
        // String para número
        String texto = "123";
        int numero2 = Integer.parseInt(texto);
        double numero3 = Double.parseDouble("45.67");
        
        // Número para String
        int num = 42;
        String str = String.valueOf(num);
        String str2 = Integer.toString(num);
        
        System.out.println("Valor inteiro: " + valorInteiro);
        System.out.println("Número de String: " + numero2);
    }
}`,
        explanation: 'Demonstra como converter entre diferentes tipos de dados em Java.'
      },
      {
        title: 'Variáveis de Instância vs Locais',
        language: 'java',
        code: `public class EscopoVariaveis {
    // Variável de instância (escopo de classe)
    private int contador = 0;
    
    public void metodo1() {
        // Variável local (escopo de método)
        int valor = 10;
        System.out.println("Valor em metodo1: " + valor);
        System.out.println("Contador: " + contador);
    }
    
    public void metodo2() {
        // Variável local (escopo de método)
        int valor = 20;
        System.out.println("Valor em metodo2: " + valor);
        System.out.println("Contador: " + contador);
        
        // valor de metodo1 não é acessível aqui
    }
}`,
        explanation: 'Mostra a diferença entre variáveis de instância (acessíveis em toda a classe) e variáveis locais (acessíveis apenas no método).'
      }
    ],
    challenges: [
      {
        id: 'java-var-1',
        title: 'Cálculo de IMC',
        description: 'Crie um programa que calcula o IMC (Índice de Massa Corporal) usando peso e altura',
        difficulty: 'easy',
        hints: ['IMC = peso / (altura * altura)', 'Use double para precisão', 'Imprima o resultado com System.out.println()'],
        expectedOutput: 'IMC: 24.49'
      },
      {
        id: 'java-var-2',
        title: 'Conversão de Temperatura',
        description: 'Crie um programa que converte Celsius para Fahrenheit',
        difficulty: 'easy',
        hints: ['Fórmula: F = (C * 9/5) + 32', 'Use double para precisão', 'Declare variáveis para temperatura em Celsius e Fahrenheit'],
        expectedOutput: 'Celsius: 25, Fahrenheit: 77.0'
      },
      {
        id: 'java-var-3',
        title: 'Troca de Variáveis',
        description: 'Crie um programa que troca os valores de duas variáveis',
        difficulty: 'medium',
        hints: ['Use uma variável temporária', 'Imprima antes e depois da troca', 'Declare três variáveis inteiras'],
        expectedOutput: 'Antes: a=5, b=10\nDepois: a=10, b=5'
      }
    ],
    resources: [
      { title: 'Java Data Types', url: 'https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html', type: 'documentation' },
      { title: 'Variables in Java', url: 'https://www.w3schools.com/java/java_variables.asp', type: 'tutorial' },
      { title: 'Java Type Casting', url: 'https://www.youtube.com/watch?v=WfBzWWWJEpE', type: 'video' }
    ],
    relatedConcepts: ['java-intro', 'java-operators', 'java-strings']
  },

  'java-operators': {
    id: 'java-operators',
    title: 'Operadores em Java',
    description: 'Aprenda sobre operadores aritméticos, lógicos e de comparação',
    difficulty: 'beginner',
    content: `# Operadores em Java

Operadores são símbolos especiais que realizam operações em variáveis e valores. Java possui vários tipos de operadores.

## 1. Operadores Aritméticos

Usados para realizar operações matemáticas:

- **+** (Adição): Soma dois valores
- **-** (Subtração): Subtrai um valor de outro
- *** (Multiplicação): Multiplica dois valores
- **/** (Divisão): Divide um valor por outro
- **%** (Módulo): Retorna o resto da divisão
- **++** (Incremento): Aumenta um valor em 1
- **--** (Decremento): Diminui um valor em 1

## 2. Operadores de Atribuição

Usados para atribuir valores a variáveis:

- **=** (Atribuição): Atribui um valor
- **+=** (Adição e atribuição): Adiciona e atribui
- **-=** (Subtração e atribuição): Subtrai e atribui
- ***=** (Multiplicação e atribuição): Multiplica e atribui
- **/=** (Divisão e atribuição): Divide e atribui

## 3. Operadores de Comparação

Usados para comparar valores (retornam true ou false):

- **==** (Igual a): Verifica se dois valores são iguais
- **!=** (Não igual a): Verifica se dois valores são diferentes
- **>** (Maior que): Verifica se um valor é maior
- **<** (Menor que): Verifica se um valor é menor
- **>=** (Maior ou igual): Verifica se é maior ou igual
- **<=** (Menor ou igual): Verifica se é menor ou igual

## 4. Operadores Lógicos

Usados para combinar condições:

- **&&** (E lógico): Verdadeiro se ambas as condições forem verdadeiras
- **||** (OU lógico): Verdadeiro se pelo menos uma condição for verdadeira
- **!** (NÃO lógico): Inverte o resultado booleano

## 5. Operadores Bitwise

Usados para operações em nível de bit:

- **&** (E bitwise)
- **|** (OU bitwise)
- **^** (XOR bitwise)
- **~** (NÃO bitwise)
- **<<** (Deslocamento à esquerda)
- **>>** (Deslocamento à direita)

## 6. Operador Ternário

Sintaxe: \`condicao ? valor_se_verdadeiro : valor_se_falso\`

## Precedência de Operadores

A ordem em que os operadores são avaliados:

1. Parênteses ()
2. Incremento/Decremento (++, --)
3. Multiplicação, Divisão, Módulo (*, /, %)
4. Adição, Subtração (+, -)
5. Comparação (<, >, <=, >=)
6. Igualdade (==, !=)
7. E lógico (&&)
8. OU lógico (||)
9. Ternário (? :)
10. Atribuição (=, +=, -=, etc.)`,
    examples: [
      {
        title: 'Operadores Aritméticos',
        language: 'java',
        code: `public class OperadoresAritmeticos {
    public static void main(String[] args) {
        int a = 10;
        int b = 3;
        
        System.out.println("Adição: " + (a + b));        // 13
        System.out.println("Subtração: " + (a - b));     // 7
        System.out.println("Multiplicação: " + (a * b)); // 30
        System.out.println("Divisão: " + (a / b));       // 3
        System.out.println("Módulo: " + (a % b));        // 1
        
        int c = 5;
        System.out.println("Antes do incremento: " + c); // 5
        c++;
        System.out.println("Depois do incremento: " + c); // 6
    }
}`,
        explanation: 'Demonstra o uso de operadores aritméticos básicos em Java.'
      },
      {
        title: 'Operadores de Comparação e Lógicos',
        language: 'java',
        code: `public class OperadoresComparacao {
    public static void main(String[] args) {
        int idade = 25;
        int limite = 18;
        
        System.out.println("idade > limite: " + (idade > limite));  // true
        System.out.println("idade == 25: " + (idade == 25));        // true
        System.out.println("idade != 30: " + (idade != 30));        // true
        
        // Operadores lógicos
        boolean temCarteira = true;
        boolean temCarro = false;
        
        System.out.println("Pode dirigir (tem carteira E carro): " + (temCarteira && temCarro)); // false
        System.out.println("Tem algum documento: " + (temCarteira || temCarro));                 // true
        System.out.println("Não tem carro: " + (!temCarro));                                    // true
    }
}`,
        explanation: 'Mostra como usar operadores de comparação e lógicos para criar expressões booleanas.'
      },
      {
        title: 'Operador Ternário',
        language: 'java',
        code: `public class OperadorTernario {
    public static void main(String[] args) {
        int idade = 25;
        
        // Operador ternário
        String status = (idade >= 18) ? "Maior de idade" : "Menor de idade";
        System.out.println(status); // Maior de idade
        
        int nota = 75;
        String resultado = (nota >= 60) ? "Aprovado" : "Reprovado";
        System.out.println("Resultado: " + resultado); // Aprovado
        
        // Operador ternário aninhado
        int preco = 100;
        String categoria = (preco < 50) ? "Barato" : (preco < 150) ? "Médio" : "Caro";
        System.out.println("Categoria: " + categoria); // Médio
    }
}`,
        explanation: 'Demonstra o uso do operador ternário para criar expressões condicionais concisas.'
      }
    ],
    challenges: [
      {
        id: 'java-op-1',
        title: 'Cálculo de Juros',
        description: 'Crie um programa que calcula juros simples: J = C * i * t',
        difficulty: 'easy',
        hints: ['C = Capital, i = taxa, t = tempo', 'Use double para precisão', 'Imprima o resultado'],
        expectedOutput: 'Juros: 300.0'
      },
      {
        id: 'java-op-2',
        title: 'Verificação de Número Par ou Ímpar',
        description: 'Crie um programa que verifica se um número é par ou ímpar usando o operador módulo',
        difficulty: 'easy',
        hints: ['Use o operador %', 'Se número % 2 == 0, é par', 'Use operador ternário'],
        expectedOutput: 'O número 7 é ímpar'
      },
      {
        id: 'java-op-3',
        title: 'Validação de Dados',
        description: 'Crie um programa que valida se uma pessoa pode dirigir (idade >= 18 E tem carteira)',
        difficulty: 'medium',
        hints: ['Use operadores lógicos &&', 'Declare variáveis booleanas', 'Use operador ternário para mensagem'],
        expectedOutput: 'Pode dirigir: true'
      }
    ],
    resources: [
      { title: 'Java Operators', url: 'https://docs.oracle.com/javase/tutorial/java/nutsandbolts/operators.html', type: 'documentation' },
      { title: 'Operators in Java', url: 'https://www.w3schools.com/java/java_operators.asp', type: 'tutorial' },
      { title: 'Java Operator Precedence', url: 'https://www.youtube.com/watch?v=1Ey8aTBWZVo', type: 'video' }
    ],
    relatedConcepts: ['java-variables', 'java-control-flow']
  },

  'java-strings': {
    id: 'java-strings',
    title: 'Trabalhando com Strings',
    description: 'Aprenda a manipular e trabalhar com strings em Java',
    difficulty: 'beginner',
    content: `# Trabalhando com Strings em Java

Strings são sequências de caracteres. Em Java, strings são objetos da classe String e são imutáveis (não podem ser alteradas após criação).

## Criando Strings

Existem duas formas principais de criar strings:

### 1. Literal de String
\`\`\`java
String nome = "João";
\`\`\`

### 2. Usando o Construtor
\`\`\`java
String nome = new String("João");
\`\`\`

## Métodos Importantes da Classe String

### Métodos de Informação
- \`length()\`: Retorna o comprimento da string
- \`isEmpty()\`: Verifica se a string está vazia
- \`charAt(int index)\`: Retorna o caractere no índice especificado

### Métodos de Busca
- \`indexOf(String str)\`: Encontra a primeira ocorrência
- \`lastIndexOf(String str)\`: Encontra a última ocorrência
- \`contains(String str)\`: Verifica se contém uma substring

### Métodos de Transformação
- \`toUpperCase()\`: Converte para maiúsculas
- \`toLowerCase()\`: Converte para minúsculas
- \`trim()\`: Remove espaços em branco
- \`replace(char old, char new)\`: Substitui caracteres
- \`substring(int start)\`: Extrai uma substring

### Métodos de Comparação
- \`equals(String str)\`: Compara strings (case-sensitive)
- \`equalsIgnoreCase(String str)\`: Compara strings (ignora maiúsculas/minúsculas)
- \`compareTo(String str)\`: Compara lexicograficamente

## Concatenação de Strings

### Usando o operador +
\`\`\`java
String nome = "João";
String mensagem = "Olá, " + nome + "!";
\`\`\`

### Usando o método concat()
\`\`\`java
String mensagem = "Olá, ".concat(nome).concat("!");
\`\`\`

### Usando StringBuilder (mais eficiente para múltiplas concatenações)
\`\`\`java
StringBuilder sb = new StringBuilder();
sb.append("Olá, ");
sb.append(nome);
sb.append("!");
String mensagem = sb.toString();
\`\`\`

## Escape Characters

- \`\\n\`: Nova linha
- \`\\t\`: Tabulação
- \`\\\\\`: Barra invertida
- \`\\"\`: Aspas duplas
- \`\\'\`: Aspas simples

## Imutabilidade de Strings

Strings em Java são imutáveis. Quando você modifica uma string, uma nova string é criada:

\`\`\`java
String str = "Java";
str = str + " é ótimo"; // Cria uma nova string
\`\`\``,
    examples: [
      {
        title: 'Métodos Básicos de String',
        language: 'java',
        code: `public class StringBasico {
    public static void main(String[] args) {
        String texto = "Java é incrível";
        
        // Informações
        System.out.println("Comprimento: " + texto.length());
        System.out.println("Primeiro caractere: " + texto.charAt(0));
        
        // Transformação
        System.out.println("Maiúsculas: " + texto.toUpperCase());
        System.out.println("Minúsculas: " + texto.toLowerCase());
        
        // Busca
        System.out.println("Índice de 'é': " + texto.indexOf("é"));
        System.out.println("Contém 'Java': " + texto.contains("Java"));
        
        // Substring
        System.out.println("Substring (0-4): " + texto.substring(0, 4));
    }
}`,
        explanation: 'Demonstra os métodos mais comuns da classe String.'
      },
      {
        title: 'Concatenação e StringBuilder',
        language: 'java',
        code: `public class ConcatenacaoString {
    public static void main(String[] args) {
        String nome = "João";
        String sobrenome = "Silva";
        
        // Concatenação com +
        String nomeCompleto = nome + " " + sobrenome;
        System.out.println("Nome completo: " + nomeCompleto);
        
        // Usando StringBuilder (mais eficiente)
        StringBuilder sb = new StringBuilder();
        sb.append("Olá, ");
        sb.append(nome);
        sb.append(" ");
        sb.append(sobrenome);
        sb.append("!");
        
        System.out.println(sb.toString());
        
        // Método concat()
        String mensagem = "Bem-vindo, ".concat(nome);
        System.out.println(mensagem);
    }
}`,
        explanation: 'Mostra diferentes formas de concatenar strings, com ênfase em StringBuilder para melhor performance.'
      },
      {
        title: 'Comparação e Manipulação de Strings',
        language: 'java',
        code: `public class ComparacaoString {
    public static void main(String[] args) {
        String str1 = "Java";
        String str2 = "java";
        String str3 = "Java";
        
        // Comparação case-sensitive
        System.out.println("str1.equals(str2): " + str1.equals(str2));      // false
        System.out.println("str1.equals(str3): " + str1.equals(str3));      // true
        
        // Comparação case-insensitive
        System.out.println("str1.equalsIgnoreCase(str2): " + str1.equalsIgnoreCase(str2)); // true
        
        // Comparação lexicográfica
        System.out.println("str1.compareTo(str3): " + str1.compareTo(str3)); // 0 (iguais)
        
        // Manipulação
        String texto = "  Java é ótimo  ";
        System.out.println("Original: '" + texto + "'");
        System.out.println("Sem espaços: '" + texto.trim() + "'");
        
        String substituido = texto.replace("Java", "JavaScript");
        System.out.println("Substituído: " + substituido);
    }
}`,
        explanation: 'Demonstra como comparar e manipular strings em Java.'
      }
    ],
    challenges: [
      {
        id: 'java-str-1',
        title: 'Inverter String',
        description: 'Crie um programa que inverte uma string',
        difficulty: 'medium',
        hints: ['Use um loop for', 'Acesse caracteres com charAt()', 'Concatene do final para o início'],
        expectedOutput: 'Original: Java\nInvertida: avaJ'
      },
      {
        id: 'java-str-2',
        title: 'Contar Ocorrências',
        description: 'Crie um programa que conta quantas vezes uma letra aparece em uma string',
        difficulty: 'medium',
        hints: ['Use um loop for', 'Use charAt() para acessar cada caractere', 'Compare com a letra procurada'],
        expectedOutput: 'A letra "a" aparece 3 vezes em "programação"'
      },
      {
        id: 'java-str-3',
        title: 'Verificar Palíndromo',
        description: 'Crie um programa que verifica se uma string é um palíndromo (lê-se igual de trás para frente)',
        difficulty: 'hard',
        hints: ['Compare caracteres do início com o fim', 'Use um loop até o meio da string', 'Ignore maiúsculas/minúsculas'],
        expectedOutput: '"radar" é um palíndromo'
      }
    ],
    resources: [
      { title: 'String Class Documentation', url: 'https://docs.oracle.com/javase/8/docs/api/java/lang/String.html', type: 'documentation' },
      { title: 'Java Strings', url: 'https://www.w3schools.com/java/java_strings.asp', type: 'tutorial' },
      { title: 'String Methods in Java', url: 'https://www.youtube.com/watch?v=bCNYiIz5f3s', type: 'video' }
    ],
    relatedConcepts: ['java-variables', 'java-arrays', 'java-loops']
  },

  'java-arrays': {
    id: 'java-arrays',
    title: 'Arrays em Java',
    description: 'Aprenda a trabalhar com arrays e coleções de dados',
    difficulty: 'beginner',
    content: `# Arrays em Java

Um array é uma coleção de elementos do mesmo tipo armazenados em locais de memória contíguos. Arrays permitem armazenar múltiplos valores em uma única variável.

## Características dos Arrays

- **Tamanho fixo**: Uma vez criado, o tamanho não pode ser alterado
- **Tipo homogêneo**: Todos os elementos devem ser do mesmo tipo
- **Indexação**: Elementos são acessados por índice (começando em 0)
- **Referência**: Arrays são objetos e são passados por referência

## Declaração de Arrays

### Forma 1: Declaração e inicialização
\`\`\`java
int[] numeros = new int[5];
\`\`\`

### Forma 2: Declaração com inicialização de valores
\`\`\`java
int[] numeros = {1, 2, 3, 4, 5};
\`\`\`

### Forma 3: Declaração alternativa
\`\`\`java
int numeros[] = new int[5];
\`\`\`

## Acessando Elementos

Os elementos são acessados usando o índice:

\`\`\`java
int[] numeros = {10, 20, 30, 40, 50};
System.out.println(numeros[0]); // 10
System.out.println(numeros[2]); // 30
\`\`\`

## Propriedades de Arrays

- \`length\`: Retorna o tamanho do array
\`\`\`java
int[] numeros = {1, 2, 3, 4, 5};
System.out.println(numeros.length); // 5
\`\`\`

## Arrays Multidimensionais

Arrays podem ter múltiplas dimensões:

\`\`\`java
int[][] matriz = new int[3][3];
int[][] matriz = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
\`\`\`

## Iteração sobre Arrays

### Usando for tradicional
\`\`\`java
for (int i = 0; i < numeros.length; i++) {
    System.out.println(numeros[i]);
}
\`\`\`

### Usando enhanced for (for-each)
\`\`\`java
for (int numero : numeros) {
    System.out.println(numero);
}
\`\`\`

## Métodos Úteis da Classe Arrays

- \`Arrays.toString(array)\`: Converte array para string
- \`Arrays.sort(array)\`: Ordena o array
- \`Arrays.fill(array, valor)\`: Preenche o array com um valor
- \`Arrays.copyOf(array, length)\`: Copia o array
- \`Arrays.binarySearch(array, valor)\`: Busca binária`,
    examples: [
      {
        title: 'Arrays Básicos',
        language: 'java',
        code: `public class ArrayBasico {
    public static void main(String[] args) {
        // Declaração e inicialização
        int[] numeros = {10, 20, 30, 40, 50};
        
        // Acessando elementos
        System.out.println("Primeiro elemento: " + numeros[0]);
        System.out.println("Último elemento: " + numeros[4]);
        System.out.println("Tamanho do array: " + numeros.length);
        
        // Modificando elementos
        numeros[2] = 35;
        System.out.println("Terceiro elemento modificado: " + numeros[2]);
        
        // Iterando com for tradicional
        System.out.println("Todos os elementos:");
        for (int i = 0; i < numeros.length; i++) {
            System.out.println(numeros[i]);
        }
    }
}`,
        explanation: 'Demonstra operações básicas com arrays em Java.'
      },
      {
        title: 'Enhanced For Loop (for-each)',
        language: 'java',
        code: `public class EnhancedForLoop {
    public static void main(String[] args) {
        String[] nomes = {"João", "Maria", "Pedro", "Ana"};
        
        // Enhanced for loop
        System.out.println("Nomes:");
        for (String nome : nomes) {
            System.out.println(nome);
        }
        
        // Com números
        int[] numeros = {2, 4, 6, 8, 10};
        int soma = 0;
        
        for (int numero : numeros) {
            soma += numero;
        }
        
        System.out.println("Soma: " + soma);
    }
}`,
        explanation: 'Mostra como usar o enhanced for loop (for-each) para iterar sobre arrays.'
      },
      {
        title: 'Arrays Multidimensionais',
        language: 'java',
        code: `public class ArrayMultidimensional {
    public static void main(String[] args) {
        // Matriz 3x3
        int[][] matriz = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };
        
        // Acessando elementos
        System.out.println("Elemento [0][0]: " + matriz[0][0]);
        System.out.println("Elemento [1][1]: " + matriz[1][1]);
        System.out.println("Elemento [2][2]: " + matriz[2][2]);
        
        // Iterando sobre matriz
        System.out.println("Matriz completa:");
        for (int i = 0; i < matriz.length; i++) {
            for (int j = 0; j < matriz[i].length; j++) {
                System.out.print(matriz[i][j] + " ");
            }
            System.out.println();
        }
    }
}`,
        explanation: 'Demonstra como trabalhar com arrays multidimensionais (matrizes).'
      }
    ],
    challenges: [
      {
        id: 'java-arr-1',
        title: 'Encontrar Maior Número',
        description: 'Crie um programa que encontra o maior número em um array',
        difficulty: 'easy',
        hints: ['Use um loop for', 'Compare cada elemento com uma variável de máximo', 'Inicialize máximo com o primeiro elemento'],
        expectedOutput: 'Maior número: 95'
      },
      {
        id: 'java-arr-2',
        title: 'Calcular Média',
        description: 'Crie um programa que calcula a média de números em um array',
        difficulty: 'easy',
        hints: ['Some todos os elementos', 'Divida pela quantidade de elementos', 'Use um loop for'],
        expectedOutput: 'Média: 75.5'
      },
      {
        id: 'java-arr-3',
        title: 'Inverter Array',
        description: 'Crie um programa que inverte a ordem dos elementos de um array',
        difficulty: 'medium',
        hints: ['Use dois índices (início e fim)', 'Troque os elementos', 'Faça até o meio do array'],
        expectedOutput: '[1, 2, 3, 4, 5] invertido é [5, 4, 3, 2, 1]'
      }
    ],
    resources: [
      { title: 'Arrays in Java', url: 'https://docs.oracle.com/javase/tutorial/java/nutsandbolts/arrays.html', type: 'documentation' },
      { title: 'Java Arrays', url: 'https://www.w3schools.com/java/java_arrays.asp', type: 'tutorial' },
      { title: 'Working with Arrays in Java', url: 'https://www.youtube.com/watch?v=W1Yt8Ym5ZOI', type: 'video' }
    ],
    relatedConcepts: ['java-variables', 'java-loops', 'java-methods']
  },

  'java-control-flow': {
    id: 'java-control-flow',
    title: 'Estruturas de Controle de Fluxo',
    description: 'Aprenda if, else, switch e como controlar o fluxo do programa',
    difficulty: 'beginner',
    content: `# Estruturas de Controle de Fluxo em Java

As estruturas de controle de fluxo permitem que você execute diferentes blocos de código baseado em condições.

## 1. Instrução if

A instrução if executa um bloco de código se uma condição for verdadeira.

\`\`\`java
if (condicao) {
    // Código executado se a condição for verdadeira
}
\`\`\`

## 2. Instrução if-else

Executa um bloco se a condição for verdadeira, outro se for falsa.

\`\`\`java
if (condicao) {
    // Código se verdadeiro
} else {
    // Código se falso
}
\`\`\`

## 3. Instrução if-else if-else

Permite múltiplas condições.

\`\`\`java
if (condicao1) {
    // Código se condicao1 for verdadeira
} else if (condicao2) {
    // Código se condicao2 for verdadeira
} else {
    // Código se nenhuma condição for verdadeira
}
\`\`\`

## 4. Instrução switch

Executa diferentes blocos baseado em diferentes casos.

\`\`\`java
switch (expressao) {
    case valor1:
        // Código se expressao == valor1
        break;
    case valor2:
        // Código se expressao == valor2
        break;
    default:
        // Código se nenhum caso corresponder
}
\`\`\`

## Boas Práticas

- Use if para uma ou duas condições
- Use switch para múltiplos valores específicos
- Sempre use break no switch para evitar fall-through
- Use chaves {} mesmo para uma única linha
- Mantenha as condições simples e legíveis`,
    examples: [
      {
        title: 'Instrução if-else',
        language: 'java',
        code: `public class IfElseExemplo {
    public static void main(String[] args) {
        int idade = 25;
        
        if (idade >= 18) {
            System.out.println("Você é maior de idade");
        } else {
            System.out.println("Você é menor de idade");
        }
        
        // if-else if-else
        int nota = 75;
        
        if (nota >= 90) {
            System.out.println("Conceito A");
        } else if (nota >= 80) {
            System.out.println("Conceito B");
        } else if (nota >= 70) {
            System.out.println("Conceito C");
        } else if (nota >= 60) {
            System.out.println("Conceito D");
        } else {
            System.out.println("Conceito F");
        }
    }
}`,
        explanation: 'Demonstra o uso de if-else e if-else if-else para múltiplas condições.'
      },
      {
        title: 'Instrução switch',
        language: 'java',
        code: `public class SwitchExemplo {
    public static void main(String[] args) {
        int diaSemana = 3;
        
        switch (diaSemana) {
            case 1:
                System.out.println("Segunda-feira");
                break;
            case 2:
                System.out.println("Terça-feira");
                break;
            case 3:
                System.out.println("Quarta-feira");
                break;
            case 4:
                System.out.println("Quinta-feira");
                break;
            case 5:
                System.out.println("Sexta-feira");
                break;
            case 6:
                System.out.println("Sábado");
                break;
            case 7:
                System.out.println("Domingo");
                break;
            default:
                System.out.println("Dia inválido");
        }
    }
}`,
        explanation: 'Mostra como usar switch para múltiplos casos.'
      },
      {
        title: 'Condições Complexas',
        language: 'java',
        code: `public class CondicoesComplexas {
    public static void main(String[] args) {
        int idade = 25;
        boolean temCarteira = true;
        boolean temCarro = true;
        
        // Usando operadores lógicos
        if (idade >= 18 && temCarteira && temCarro) {
            System.out.println("Pode dirigir");
        } else if (idade >= 18 && temCarteira) {
            System.out.println("Pode dirigir mas não tem carro");
        } else if (idade >= 18) {
            System.out.println("Maior de idade mas sem carteira");
        } else {
            System.out.println("Menor de idade");
        }
        
        // Usando operador ternário
        String resultado = (idade >= 18) ? "Maior" : "Menor";
        System.out.println("Status: " + resultado);
    }
}`,
        explanation: 'Demonstra como combinar múltiplas condições usando operadores lógicos.'
      }
    ],
    challenges: [
      {
        id: 'java-cf-1',
        title: 'Classificar Número',
        description: 'Crie um programa que classifica um número como positivo, negativo ou zero',
        difficulty: 'easy',
        hints: ['Use if-else if-else', 'Compare com 0', 'Compare com > 0 e < 0'],
        expectedOutput: 'O número 5 é positivo'
      },
      {
        id: 'java-cf-2',
        title: 'Verificar Triângulo',
        description: 'Crie um programa que verifica se três números podem formar um triângulo válido',
        difficulty: 'medium',
        hints: ['A soma de dois lados deve ser maior que o terceiro', 'Verifique as três condições', 'Use operador &&'],
        expectedOutput: 'Pode formar um triângulo'
      },
      {
        id: 'java-cf-3',
        title: 'Sistema de Notas',
        description: 'Crie um programa que classifica uma nota (0-100) em conceitos (A-F)',
        difficulty: 'easy',
        hints: ['Use if-else if-else ou switch', 'A: 90-100, B: 80-89, C: 70-79, D: 60-69, F: <60'],
        expectedOutput: 'Nota 85 = Conceito B'
      }
    ],
    resources: [
      { title: 'Control Flow Statements', url: 'https://docs.oracle.com/javase/tutorial/java/nutsandbolts/flow.html', type: 'documentation' },
      { title: 'If Else in Java', url: 'https://www.w3schools.com/java/java_conditions.asp', type: 'tutorial' },
      { title: 'Switch Statement in Java', url: 'https://www.youtube.com/watch?v=mA23sPKG9F4', type: 'video' }
    ],
    relatedConcepts: ['java-operators', 'java-loops']
  },

  'java-loops': {
    id: 'java-loops',
    title: 'Loops em Java',
    description: 'Aprenda sobre for, while e do-while loops',
    difficulty: 'beginner',
    content: `# Loops em Java

Loops permitem executar um bloco de código múltiplas vezes. Java possui três tipos principais de loops.

## 1. Loop for

Usado quando você sabe quantas vezes precisa repetir.

\`\`\`java
for (inicialização; condição; incremento) {
    // Código a ser repetido
}
\`\`\`

### Componentes:
- **Inicialização**: Executada uma vez no início
- **Condição**: Verificada antes de cada iteração
- **Incremento**: Executado após cada iteração

## 2. Loop while

Executa enquanto uma condição for verdadeira.

\`\`\`java
while (condicao) {
    // Código a ser repetido
}
\`\`\`

## 3. Loop do-while

Executa pelo menos uma vez, depois verifica a condição.

\`\`\`java
do {
    // Código a ser repetido
} while (condicao);
\`\`\`

## 4. Enhanced for (for-each)

Itera sobre elementos de um array ou coleção.

\`\`\`java
for (tipo elemento : colecao) {
    // Código a ser repetido
}
\`\`\`

## Instruções de Controle de Loop

- **break**: Sai do loop
- **continue**: Pula para a próxima iteração
- **return**: Sai do método

## Boas Práticas

- Use for para loops com número conhecido de iterações
- Use while para loops com condição desconhecida
- Evite loops infinitos
- Use nomes descritivos para variáveis de loop
- Mantenha loops simples e legíveis`,
    examples: [
      {
        title: 'Loop for',
        language: 'java',
        code: `public class LoopFor {
    public static void main(String[] args) {
        // Loop simples
        for (int i = 0; i < 5; i++) {
            System.out.println("Iteração: " + i);
        }
        
        // Loop com array
        int[] numeros = {10, 20, 30, 40, 50};
        for (int i = 0; i < numeros.length; i++) {
            System.out.println("Número: " + numeros[i]);
        }
        
        // Tabuada
        System.out.println("Tabuada de 5:");
        for (int i = 1; i <= 10; i++) {
            System.out.println("5 x " + i + " = " + (5 * i));
        }
    }
}`,
        explanation: 'Demonstra o uso de loops for em diferentes situações.'
      },
      {
        title: 'Loop while e do-while',
        language: 'java',
        code: `public class LoopWhile {
    public static void main(String[] args) {
        // Loop while
        int contador = 0;
        System.out.println("Loop while:");
        while (contador < 5) {
            System.out.println("Contador: " + contador);
            contador++;
        }
        
        // Loop do-while (executa pelo menos uma vez)
        System.out.println("\\nLoop do-while:");
        int numero = 0;
        do {
            System.out.println("Número: " + numero);
            numero++;
        } while (numero < 5);
        
        // Leitura até condição específica
        int soma = 0;
        int num = 0;
        while (num != -1) {
            soma += num;
            num++; // Simulando entrada
            if (num > 5) num = -1; // Saída do loop
        }
    }
}`,
        explanation: 'Mostra como usar loops while e do-while.'
      },
      {
        title: 'Break e Continue',
        language: 'java',
        code: `public class BreakContinue {
    public static void main(String[] args) {
        // Usando break
        System.out.println("Usando break:");
        for (int i = 0; i < 10; i++) {
            if (i == 5) {
                break; // Sai do loop quando i == 5
            }
            System.out.println("i = " + i);
        }
        
        // Usando continue
        System.out.println("\\nUsando continue:");
        for (int i = 0; i < 10; i++) {
            if (i % 2 == 0) {
                continue; // Pula números pares
            }
            System.out.println("i = " + i);
        }
        
        // Encontrar primeiro número divisível por 7
        System.out.println("\\nProcurando número divisível por 7:");
        for (int i = 1; i <= 100; i++) {
            if (i % 7 == 0) {
                System.out.println("Encontrado: " + i);
                break;
            }
        }
    }
}`,
        explanation: 'Demonstra como usar break e continue para controlar loops.'
      }
    ],
    challenges: [
      {
        id: 'java-loop-1',
        title: 'Tabuada',
        description: 'Crie um programa que imprime a tabuada de um número',
        difficulty: 'easy',
        hints: ['Use um loop for de 1 a 10', 'Multiplique o número pelo contador', 'Imprima o resultado'],
        expectedOutput: 'Tabuada de 5: 5, 10, 15, 20, 25, 30, 35, 40, 45, 50'
      },
      {
        id: 'java-loop-2',
        title: 'Soma de Números',
        description: 'Crie um programa que calcula a soma de números de 1 a 100',
        difficulty: 'easy',
        hints: ['Use um loop for', 'Acumule a soma em uma variável', 'Imprima o resultado final'],
        expectedOutput: 'Soma: 5050'
      },
      {
        id: 'java-loop-3',
        title: 'Números Primos',
        description: 'Crie um programa que encontra todos os números primos de 1 a 50',
        difficulty: 'hard',
        hints: ['Use dois loops (externo e interno)', 'Verifique se o número é divisível', 'Use break quando encontrar divisor'],
        expectedOutput: 'Primos: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47'
      }
    ],
    resources: [
      { title: 'Loops in Java', url: 'https://docs.oracle.com/javase/tutorial/java/nutsandbolts/for.html', type: 'documentation' },
      { title: 'Java Loops', url: 'https://www.w3schools.com/java/java_while_loop.asp', type: 'tutorial' },
      { title: 'For Loop in Java', url: 'https://www.youtube.com/watch?v=WfBzWWWJEpE', type: 'video' }
    ],
    relatedConcepts: ['java-control-flow', 'java-arrays', 'java-methods']
  },

  'java-methods': {
    id: 'java-methods',
    title: 'Métodos em Java',
    description: 'Aprenda a criar e usar métodos para reutilizar código',
    difficulty: 'intermediate',
    content: `# Métodos em Java

Métodos são blocos de código reutilizáveis que realizam uma tarefa específica. Eles ajudam a organizar código, evitar repetição e melhorar a legibilidade.

## Estrutura de um Método

\`\`\`java
modificador tipoRetorno nomeDométodo(parametros) {
    // Corpo do método
    return valor; // Se tipoRetorno não for void
}
\`\`\`

### Componentes:
- **Modificador**: public, private, protected, static
- **Tipo de Retorno**: int, String, void, etc.
- **Nome do Método**: Deve ser descritivo
- **Parâmetros**: Dados que o método recebe
- **Corpo**: Código a ser executado
- **Return**: Valor retornado (se não for void)

## Tipos de Métodos

### 1. Método sem parâmetros e sem retorno
\`\`\`java
public void saudacao() {
    System.out.println("Olá!");
}
\`\`\`

### 2. Método com parâmetros e sem retorno
\`\`\`java
public void saudacao(String nome) {
    System.out.println("Olá, " + nome + "!");
}
\`\`\`

### 3. Método sem parâmetros e com retorno
\`\`\`java
public int obterIdade() {
    return 25;
}
\`\`\`

### 4. Método com parâmetros e com retorno
\`\`\`java
public int somar(int a, int b) {
    return a + b;
}
\`\`\`

## Sobrecarga de Métodos

Você pode ter múltiplos métodos com o mesmo nome, desde que tenham parâmetros diferentes.

\`\`\`java
public void imprimir(int numero) { }
public void imprimir(String texto) { }
public void imprimir(double valor) { }
\`\`\`

## Escopo de Variáveis

- **Variáveis locais**: Definidas dentro do método, acessíveis apenas no método
- **Parâmetros**: Variáveis locais que recebem valores do chamador
- **Variáveis de instância**: Definidas na classe, acessíveis em todos os métodos

## Boas Práticas

- Use nomes descritivos para métodos
- Um método deve fazer uma coisa bem
- Mantenha métodos pequenos e legíveis
- Use comentários para explicar lógica complexa
- Evite métodos com muitos parâmetros`,
    examples: [
      {
        title: 'Métodos Básicos',
        language: 'java',
        code: `public class MetodosBasicos {
    // Método sem parâmetros e sem retorno
    public static void saudacao() {
        System.out.println("Olá, mundo!");
    }
    
    // Método com parâmetros e sem retorno
    public static void saudacaoPersonalizada(String nome) {
        System.out.println("Olá, " + nome + "!");
    }
    
    // Método sem parâmetros e com retorno
    public static int obterIdade() {
        return 25;
    }
    
    // Método com parâmetros e com retorno
    public static int somar(int a, int b) {
        return a + b;
    }
    
    public static void main(String[] args) {
        saudacao();
        saudacaoPersonalizada("João");
        System.out.println("Idade: " + obterIdade());
        System.out.println("Soma: " + somar(5, 3));
    }
}`,
        explanation: 'Demonstra diferentes tipos de métodos em Java.'
      },
      {
        title: 'Sobrecarga de Métodos',
        language: 'java',
        code: `public class SobrecargaMetodos {
    // Sobrecarga: múltiplos métodos com o mesmo nome
    
    public static int somar(int a, int b) {
        return a + b;
    }
    
    public static double somar(double a, double b) {
        return a + b;
    }
    
    public static int somar(int a, int b, int c) {
        return a + b + c;
    }
    
    public static String somar(String a, String b) {
        return a + b;
    }
    
    public static void main(String[] args) {
        System.out.println("Int: " + somar(5, 3));
        System.out.println("Double: " + somar(5.5, 3.2));
        System.out.println("Três int: " + somar(5, 3, 2));
        System.out.println("String: " + somar("Olá", " Mundo"));
    }
}`,
        explanation: 'Mostra como usar sobrecarga de métodos com diferentes tipos de parâmetros.'
      },
      {
        title: 'Métodos com Lógica Complexa',
        language: 'java',
        code: `public class MetodosComplexos {
    // Verifica se um número é primo
    public static boolean ehPrimo(int numero) {
        if (numero < 2) return false;
        
        for (int i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i == 0) {
                return false;
            }
        }
        return true;
    }
    
    // Calcula fatorial
    public static int fatorial(int n) {
        if (n <= 1) return 1;
        return n * fatorial(n - 1); // Recursão
    }
    
    // Encontra o maior número em um array
    public static int maiorNumero(int[] numeros) {
        int maior = numeros[0];
        for (int numero : numeros) {
            if (numero > maior) {
                maior = numero;
            }
        }
        return maior;
    }
    
    public static void main(String[] args) {
        System.out.println("7 é primo? " + ehPrimo(7));
        System.out.println("Fatorial de 5: " + fatorial(5));
        System.out.println("Maior: " + maiorNumero(new int[]{10, 50, 30}));
    }
}`,
        explanation: 'Demonstra métodos com lógica mais complexa, incluindo recursão.'
      }
    ],
    challenges: [
      {
        id: 'java-met-1',
        title: 'Método de Potência',
        description: 'Crie um método que calcula a potência de um número (base^expoente)',
        difficulty: 'medium',
        hints: ['Use um loop ou recursão', 'Multiplique a base pelo expoente vezes', 'Retorne o resultado'],
        expectedOutput: 'Potência de 2^3 = 8'
      },
      {
        id: 'java-met-2',
        title: 'Método de Fibonacci',
        description: 'Crie um método que retorna o n-ésimo número de Fibonacci',
        difficulty: 'hard',
        hints: ['Use recursão ou loop', 'Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13...', 'Cada número é a soma dos dois anteriores'],
        expectedOutput: 'Fibonacci(7) = 13'
      },
      {
        id: 'java-met-3',
        title: 'Método de Validação',
        description: 'Crie um método que valida se um email é válido (contém @ e .)',
        difficulty: 'medium',
        hints: ['Use contains() ou indexOf()', 'Verifique se @ vem antes de .', 'Retorne boolean'],
        expectedOutput: 'joao@email.com é válido'
      }
    ],
    resources: [
      { title: 'Methods in Java', url: 'https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html', type: 'documentation' },
      { title: 'Java Methods', url: 'https://www.w3schools.com/java/java_methods.asp', type: 'tutorial' },
      { title: 'Method Overloading in Java', url: 'https://www.youtube.com/watch?v=WfBzWWWJEpE', type: 'video' }
    ],
    relatedConcepts: ['java-variables', 'java-control-flow', 'java-arrays']
  },

  'java-oop-intro': {
    id: 'java-oop-intro',
    title: 'Introdução a Programação Orientada a Objetos',
    description: 'Aprenda os conceitos fundamentais de POO em Java',
    difficulty: 'intermediate',
    content: `# Introdução a Programação Orientada a Objetos (POO)

Programação Orientada a Objetos é um paradigma de programação que organiza o código em torno de "objetos" que contêm dados (atributos) e comportamentos (métodos).

## O que é um Objeto?

Um objeto é uma instância de uma classe. Ele contém:
- **Atributos**: Dados/propriedades do objeto
- **Métodos**: Comportamentos/ações do objeto

Exemplo: Um carro é um objeto com atributos (cor, marca, velocidade) e métodos (acelerar, frear).

## O que é uma Classe?

Uma classe é um modelo ou blueprint para criar objetos. Define a estrutura e comportamento dos objetos.

\`\`\`java
public class Carro {
    // Atributos
    String cor;
    String marca;
    int velocidade;
    
    // Método
    void acelerar() {
        velocidade += 10;
    }
}
\`\`\`

## Os 4 Pilares da POO

### 1. Encapsulamento
Esconder os detalhes internos de um objeto e fornecer uma interface pública.

### 2. Herança
Criar novas classes baseadas em classes existentes, reutilizando código.

### 3. Polimorfismo
Objetos de diferentes classes podem responder ao mesmo método de formas diferentes.

### 4. Abstração
Representar características essenciais de um objeto, escondendo complexidade.

## Vantagens da POO

- **Modularidade**: Código organizado em objetos independentes
- **Reutilização**: Classes podem ser reutilizadas
- **Manutenção**: Código mais fácil de entender e modificar
- **Escalabilidade**: Projetos grandes são mais gerenciáveis
- **Segurança**: Encapsulamento protege dados

## Conceitos Importantes

### Instanciação
Criar um objeto a partir de uma classe:

\`\`\`java
Carro meuCarro = new Carro();
\`\`\`

### Construtor
Método especial que é chamado quando um objeto é criado:

\`\`\`java
public class Carro {
    String cor;
    
    public Carro(String cor) {
        this.cor = cor;
    }
}
\`\`\`

### Modificadores de Acesso
- **public**: Acessível de qualquer lugar
- **private**: Acessível apenas dentro da classe
- **protected**: Acessível na classe e subclasses
- **(sem modificador)**: Acessível no pacote`,
    examples: [
      {
        title: 'Criando uma Classe Simples',
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
        System.out.println("Olá, meu nome é " + nome + " e tenho " + idade + " anos");
    }
    
    public int obterIdade() {
        return idade;
    }
}

// Uso
public class Main {
    public static void main(String[] args) {
        Pessoa pessoa = new Pessoa("João", 25);
        pessoa.apresentar();
    }
}`,
        explanation: 'Demonstra como criar uma classe simples com atributos, construtor e métodos.'
      },
      {
        title: 'Classe com Getters e Setters',
        language: 'java',
        code: `public class Carro {
    private String marca;
    private String modelo;
    private int velocidade;
    
    public Carro(String marca, String modelo) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidade = 0;
    }
    
    // Getters
    public String getMarca() {
        return marca;
    }
    
    public String getModelo() {
        return modelo;
    }
    
    public int getVelocidade() {
        return velocidade;
    }
    
    // Setters
    public void setMarca(String marca) {
        this.marca = marca;
    }
    
    public void setVelocidade(int velocidade) {
        if (velocidade >= 0) {
            this.velocidade = velocidade;
        }
    }
    
    // Métodos
    public void acelerar() {
        velocidade += 10;
    }
    
    public void frear() {
        if (velocidade > 0) {
            velocidade -= 10;
        }
    }
}`,
        explanation: 'Mostra como usar getters e setters para acessar e modificar atributos privados.'
      },
      {
        title: 'Múltiplos Objetos',
        language: 'java',
        code: `public class Estudante {
    private String nome;
    private double nota;
    
    public Estudante(String nome, double nota) {
        this.nome = nome;
        this.nota = nota;
    }
    
    public void exibir() {
        System.out.println("Nome: " + nome + ", Nota: " + nota);
    }
}

public class Main {
    public static void main(String[] args) {
        // Criando múltiplos objetos
        Estudante[] estudantes = new Estudante[3];
        
        estudantes[0] = new Estudante("João", 8.5);
        estudantes[1] = new Estudante("Maria", 9.0);
        estudantes[2] = new Estudante("Pedro", 7.5);
        
        // Exibindo todos
        for (Estudante estudante : estudantes) {
            estudante.exibir();
        }
    }
}`,
        explanation: 'Demonstra como criar e trabalhar com múltiplos objetos.'
      }
    ],
    challenges: [
      {
        id: 'java-oop-1',
        title: 'Classe Conta Bancária',
        description: 'Crie uma classe ContaBancaria com saldo, depósito e saque',
        difficulty: 'medium',
        hints: ['Atributos: titular, saldo', 'Métodos: depositar(), sacar(), obterSaldo()', 'Valide saques (não pode sacar mais que o saldo)'],
        expectedOutput: 'Saldo inicial: 0, Após depósito: 1000, Após saque: 800'
      },
      {
        id: 'java-oop-2',
        title: 'Classe Livro',
        description: 'Crie uma classe Livro com título, autor, páginas e método para exibir informações',
        difficulty: 'easy',
        hints: ['Atributos: titulo, autor, paginas', 'Construtor que inicializa os atributos', 'Método exibir() que imprime as informações'],
        expectedOutput: 'Título: Clean Code, Autor: Robert Martin, Páginas: 464'
      },
      {
        id: 'java-oop-3',
        title: 'Classe Retângulo',
        description: 'Crie uma classe Retângulo com largura, altura e métodos para calcular área e perímetro',
        difficulty: 'medium',
        hints: ['Atributos: largura, altura', 'Métodos: calcularArea(), calcularPerimetro()', 'Área = largura * altura, Perímetro = 2 * (largura + altura)'],
        expectedOutput: 'Área: 20, Perímetro: 18'
      }
    ],
    resources: [
      { title: 'Object-Oriented Programming Concepts', url: 'https://docs.oracle.com/javase/tutorial/java/concepts/', type: 'documentation' },
      { title: 'Classes and Objects in Java', url: 'https://www.w3schools.com/java/java_oop.asp', type: 'tutorial' },
      { title: 'OOP Concepts in Java', url: 'https://www.youtube.com/watch?v=xk4_1vDrwOo', type: 'video' }
    ],
    relatedConcepts: ['java-methods', 'java-oop-inheritance', 'java-oop-polymorphism']
  }
};

export function getConceptById(id: string): Concept | undefined {
  return conceptsDataExpanded[id];
}

export function getAllConcepts(): Concept[] {
  return Object.values(conceptsDataExpanded);
}

export function getConceptsByDifficulty(difficulty: 'beginner' | 'intermediate' | 'advanced'): Concept[] {
  return Object.values(conceptsDataExpanded).filter(c => c.difficulty === difficulty);
}

export function searchConcepts(query: string): Concept[] {
  const lowerQuery = query.toLowerCase();
  return Object.values(conceptsDataExpanded).filter(c => 
    c.title.toLowerCase().includes(lowerQuery) ||
    c.description.toLowerCase().includes(lowerQuery)
  );
}

import { conceptsDataAdvanced } from './conceptsDataAdvanced';

export const allConceptsData: Record<string, Concept> = {
  ...conceptsDataExpanded,
  ...conceptsDataAdvanced
};
