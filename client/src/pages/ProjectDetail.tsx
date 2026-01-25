import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import CodeBlock from "@/components/CodeBlock";
import { ChevronLeft, ChevronRight, CheckCircle2, AlertCircle, Lightbulb } from "lucide-react";
import { useRoute } from "wouter";
import { Link } from "wouter";

interface ProjectData {
  id: string;
  stage: number;
  title: string;
  description: string;
  difficulty: "Iniciante" | "Intermediário" | "Avançado";
  learningObjectives: string[];
  concepts: string[];
  prerequisites: string[];
  estimatedTime: string;
  fullDescription: string;
  tasks: Array<{
    id: number;
    title: string;
    description: string;
  }>;
  codeExample: string;
  challenges: Array<{
    id: number;
    title: string;
    description: string;
    difficulty: string;
  }>;
  resources: Array<{
    title: string;
    url: string;
    type: string;
  }>;
}

const projectsData: Record<string, ProjectData> = {
  "0.1": {
    id: "0.1",
    stage: 0,
    title: "Calculadora Simples",
    description: "Crie um programa que realiza operações aritméticas básicas com dois números.",
    difficulty: "Iniciante",
    learningObjectives: [
      "Compreender tipos de dados primitivos em Java",
      "Declarar e inicializar variáveis",
      "Realizar operações aritméticas básicas",
      "Usar condicionais para validação",
      "Exibir resultados formatados",
    ],
    concepts: ["Tipos de Dados", "Variáveis", "Operadores Aritméticos", "Condicionais", "System.out.println()"],
    prerequisites: ["Ter Java JDK instalado", "Conhecer o básico de sintaxe Java"],
    estimatedTime: "1-2 horas",
    fullDescription:
      "Este projeto introduz os conceitos fundamentais de programação em Java. Você criará um programa simples que realiza as quatro operações aritméticas básicas (adição, subtração, multiplicação e divisão) entre dois números. O foco é aprender como declarar variáveis, usar operadores e exibir resultados de forma clara.",
    tasks: [
      {
        id: 1,
        title: "Declaração de Variáveis",
        description: "Declare variáveis para armazenar dois números e o resultado das operações.",
      },
      {
        id: 2,
        title: "Operações Aritméticas",
        description: "Implemente as quatro operações básicas (adição, subtração, multiplicação, divisão).",
      },
      {
        id: 3,
        title: "Tratamento de Divisão por Zero",
        description: "Adicione uma verificação para evitar divisão por zero usando um condicional.",
      },
      {
        id: 4,
        title: "Exibição de Resultados",
        description: "Use System.out.println() para exibir os resultados de forma formatada e clara.",
      },
    ],
    codeExample: `public class Calculadora {
    public static void main(String[] args) {
        // Declaração de variáveis
        int numero1 = 10;
        int numero2 = 5;
        
        // Operações aritméticas
        int soma = numero1 + numero2;
        int diferenca = numero1 - numero2;
        int produto = numero1 * numero2;
        
        // Exibição de resultados
        System.out.println("Número 1: " + numero1);
        System.out.println("Número 2: " + numero2);
        System.out.println("Soma: " + soma);
        System.out.println("Diferença: " + diferenca);
        System.out.println("Produto: " + produto);
        
        // Divisão com validação
        if (numero2 != 0) {
            int quociente = numero1 / numero2;
            System.out.println("Divisão: " + quociente);
        } else {
            System.out.println("Erro: Não é possível dividir por zero!");
        }
    }
}`,
    challenges: [
      {
        id: 1,
        title: "Calculadora com Entrada do Usuário",
        description: "Modifique o programa para ler dois números do usuário usando Scanner.",
        difficulty: "Intermediário",
      },
      {
        id: 2,
        title: "Operação de Módulo",
        description: "Adicione a operação de módulo (resto da divisão) ao seu programa.",
        difficulty: "Iniciante",
      },
      {
        id: 3,
        title: "Calculadora com Menu",
        description: "Crie um menu que permite ao usuário escolher qual operação deseja realizar.",
        difficulty: "Intermediário",
      },
      {
        id: 4,
        title: "Histórico de Cálculos",
        description: "Mantenha um histórico das últimas 5 operações realizadas.",
        difficulty: "Avançado",
      },
    ],
    resources: [
      {
        title: "Documentação Java - Tipos Primitivos",
        url: "https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",
        type: "Documentação",
      },
      {
        title: "Tutorial - Operadores em Java",
        url: "https://www.w3schools.com/java/java_operators.asp",
        type: "Tutorial",
      },
    ],
  },
  "1.1": {
    id: "1.1",
    stage: 1,
    title: "Jogo de Adivinhação",
    description: "Crie um jogo onde o usuário tenta adivinhar um número aleatório gerado pelo programa.",
    difficulty: "Iniciante",
    learningObjectives: [
      "Gerar números aleatórios",
      "Usar loops while para repetição",
      "Implementar condicionais para comparação",
      "Ler entrada do usuário",
      "Contar iterações",
    ],
    concepts: ["Loops while", "Condicionais if-else", "Math.random()", "Scanner", "Contadores"],
    prerequisites: ["Compreender tipos de dados", "Conhecer operadores de comparação"],
    estimatedTime: "2-3 horas",
    fullDescription:
      "Este projeto aplica estruturas de controle (loops e condicionais) para criar um jogo interativo. O programa gera um número aleatório entre 1 e 100, e o usuário tenta adivinhar. A cada tentativa, o programa fornece dicas se o número é maior ou menor que a tentativa. O jogo continua até o usuário acertar.",
    tasks: [
      {
        id: 1,
        title: "Geração de Número Aleatório",
        description: "Use Math.random() ou java.util.Random para gerar um número entre 1 e 100.",
      },
      {
        id: 2,
        title: "Loop de Tentativas",
        description: "Implemente um loop while que continua até o usuário acertar o número.",
      },
      {
        id: 3,
        title: "Dicas Interativas",
        description: "Forneça dicas dizendo se o número é maior ou menor que a tentativa.",
      },
      {
        id: 4,
        title: "Contador de Tentativas",
        description: "Conte quantas tentativas foram necessárias e exiba ao final.",
      },
    ],
    codeExample: `import java.util.Random;
import java.util.Scanner;

public class JogoAdivinhacao {
    public static void main(String[] args) {
        Random random = new Random();
        int numeroSecreto = random.nextInt(100) + 1;
        int tentativa = 0;
        int contador = 0;
        
        Scanner scanner = new Scanner(System.in);
        
        System.out.println("Bem-vindo ao Jogo de Adivinhação!");
        System.out.println("Pense em um número entre 1 e 100.");
        
        while (tentativa != numeroSecreto) {
            System.out.print("Digite seu palpite: ");
            tentativa = scanner.nextInt();
            contador++;
            
            if (tentativa < numeroSecreto) {
                System.out.println("Muito baixo! Tente novamente.");
            } else if (tentativa > numeroSecreto) {
                System.out.println("Muito alto! Tente novamente.");
            } else {
                System.out.println("Parabéns! Você acertou em " + contador + " tentativas!");
            }
        }
        
        scanner.close();
    }
}`,
    challenges: [
      {
        id: 1,
        title: "Limite de Tentativas",
        description: "Adicione um limite de 10 tentativas. Se o usuário não acertar, o jogo termina.",
        difficulty: "Intermediário",
      },
      {
        id: 2,
        title: "Níveis de Dificuldade",
        description: "Crie diferentes níveis (Fácil: 1-50, Médio: 1-100, Difícil: 1-1000).",
        difficulty: "Intermediário",
      },
      {
        id: 3,
        title: "Placar",
        description: "Mantenha um placar com as melhores pontuações do jogador.",
        difficulty: "Avançado",
      },
    ],
    resources: [
      {
        title: "Java Random Class",
        url: "https://docs.oracle.com/javase/8/docs/api/java/util/Random.html",
        type: "Documentação",
      },
      {
        title: "Loops em Java",
        url: "https://www.w3schools.com/java/java_while_loop.asp",
        type: "Tutorial",
      },
    ],
  },
  "1.2": {
    id: "1.2",
    stage: 1,
    title: "Tabuada Interativa",
    description: "Crie um programa que exibe a tabuada de um número escolhido pelo usuário.",
    difficulty: "Iniciante",
    learningObjectives: [
      "Usar loops for para iteração",
      "Ler entrada do usuário",
      "Validar entrada",
      "Formatar saída",
      "Usar operadores aritméticos",
    ],
    concepts: ["Loops for", "Scanner", "Validação", "Formatação de String", "Operadores"],
    prerequisites: ["Compreender loops", "Conhecer operadores aritméticos"],
    estimatedTime: "1-2 horas",
    fullDescription:
      "Este projeto reforça o uso de loops for e condicionais. O programa solicita um número ao usuário e exibe sua tabuada de 1 a 10 de forma clara e organizada. Você aprenderá a validar entrada de usuário e formatar saída de forma legível.",
    tasks: [
      {
        id: 1,
        title: "Entrada do Usuário",
        description: "Use Scanner para ler um número do usuário.",
      },
      {
        id: 2,
        title: "Loop for",
        description: "Use um loop for para gerar a tabuada de 1 a 10.",
      },
      {
        id: 3,
        title: "Validação",
        description: "Valide se o número está dentro de um intervalo aceitável (1-12).",
      },
      {
        id: 4,
        title: "Formatação",
        description: "Exiba a tabuada de forma clara e organizada.",
      },
    ],
    codeExample: `import java.util.Scanner;

public class Tabuada {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Digite um número (1-12): ");
        int numero = scanner.nextInt();
        
        // Validação
        if (numero < 1 || numero > 12) {
            System.out.println("Número inválido! Digite um número entre 1 e 12.");
            return;
        }
        
        // Exibir tabuada
        System.out.println("\\nTabuada do " + numero + ":");
        System.out.println("==================");
        
        for (int i = 1; i <= 10; i++) {
            int resultado = numero * i;
            System.out.printf("%d x %d = %d%n", numero, i, resultado);
        }
        
        scanner.close();
    }
}`,
    challenges: [
      {
        id: 1,
        title: "Tabuada Invertida",
        description: "Exiba a tabuada de forma invertida (de 10 a 1).",
        difficulty: "Iniciante",
      },
      {
        id: 2,
        title: "Múltiplas Tabuadas",
        description: "Permita que o usuário escolha dois números e exiba a tabuada entre eles.",
        difficulty: "Intermediário",
      },
      {
        id: 3,
        title: "Tabuada com Cores",
        description: "Use ANSI codes para colorir a saída da tabuada.",
        difficulty: "Intermediário",
      },
    ],
    resources: [
      {
        title: "Java for Loop",
        url: "https://www.w3schools.com/java/java_for_loop.asp",
        type: "Tutorial",
      },
      {
        title: "String Formatting em Java",
        url: "https://docs.oracle.com/javase/tutorial/i18n/resbundle/propfile.html",
        type: "Documentação",
      },
    ],
  },
  "2.1": {
    id: "2.1",
    stage: 2,
    title: "Gerenciador de Notas",
    description: "Crie um programa que armazena e calcula a média de notas de alunos.",
    difficulty: "Iniciante",
    learningObjectives: [
      "Trabalhar com arrays",
      "Iterar sobre arrays",
      "Calcular média",
      "Encontrar máximo e mínimo",
      "Usar loops for-each",
    ],
    concepts: ["Arrays", "Loops for", "for-each", "Cálculos", "Formatação"],
    prerequisites: ["Compreender arrays", "Conhecer loops"],
    estimatedTime: "2-3 horas",
    fullDescription:
      "Este projeto trabalha com arrays para armazenar múltiplos valores. Você criará um programa que armazena as notas de alunos, calcula a média, encontra a maior e menor nota, e exibe estatísticas. Este é um passo importante para trabalhar com coleções de dados.",
    tasks: [
      {
        id: 1,
        title: "Array de Notas",
        description: "Declare um array para armazenar as notas.",
      },
      {
        id: 2,
        title: "Cálculo de Média",
        description: "Implemente um método para calcular a média das notas.",
      },
      {
        id: 3,
        title: "Busca de Maior/Menor",
        description: "Encontre a maior e menor nota do array.",
      },
      {
        id: 4,
        title: "Formatação",
        description: "Exiba os resultados com duas casas decimais.",
      },
    ],
    codeExample: `public class GerenciadorNotas {
    public static void main(String[] args) {
        double[] notas = {7.5, 8.0, 9.5, 6.0, 8.5};
        
        // Calcular soma
        double soma = 0;
        for (double nota : notas) {
            soma += nota;
        }
        
        // Calcular média
        double media = soma / notas.length;
        
        // Encontrar máximo e mínimo
        double maiorNota = notas[0];
        double menorNota = notas[0];
        
        for (double nota : notas) {
            if (nota > maiorNota) {
                maiorNota = nota;
            }
            if (nota < menorNota) {
                menorNota = nota;
            }
        }
        
        // Exibir resultados
        System.out.printf("Média: %.2f%n", media);
        System.out.printf("Maior nota: %.2f%n", maiorNota);
        System.out.printf("Menor nota: %.2f%n", menorNota);
        System.out.println("Total de alunos: " + notas.length);
    }
}`,
    challenges: [
      {
        id: 1,
        title: "Entrada de Usuário",
        description: "Modifique para ler as notas do usuário via Scanner.",
        difficulty: "Intermediário",
      },
      {
        id: 2,
        title: "Notas Acima da Média",
        description: "Conte quantas notas estão acima da média.",
        difficulty: "Intermediário",
      },
      {
        id: 3,
        title: "Relatório Detalhado",
        description: "Crie um relatório com estatísticas completas (mediana, desvio padrão, etc).",
        difficulty: "Avançado",
      },
    ],
    resources: [
      {
        title: "Arrays em Java",
        url: "https://docs.oracle.com/javase/tutorial/java/nutsandbolts/arrays.html",
        type: "Documentação",
      },
      {
        title: "for-each Loop",
        url: "https://www.w3schools.com/java/java_foreach_loop.asp",
        type: "Tutorial",
      },
    ],
  },
  "2.2": {
    id: "2.2",
    stage: 2,
    title: "Manipulador de Strings",
    description: "Crie um programa que realiza diversas operações com strings.",
    difficulty: "Iniciante",
    learningObjectives: [
      "Usar métodos de String",
      "Iterar sobre caracteres",
      "Validar padrões",
      "Manipular texto",
      "Usar loops com strings",
    ],
    concepts: ["Strings", "Métodos de String", "Loops", "Caracteres", "Validação"],
    prerequisites: ["Compreender strings", "Conhecer loops"],
    estimatedTime: "2-3 horas",
    fullDescription:
      "Este projeto trabalha com manipulação de strings, um conceito fundamental em programação. Você aprenderá a usar métodos úteis de String, iterar sobre caracteres e realizar operações comuns como verificar palíndromos, inverter strings e contar caracteres.",
    tasks: [
      {
        id: 1,
        title: "Inversão de String",
        description: "Inverta uma string caractere por caractere.",
      },
      {
        id: 2,
        title: "Verificação de Palíndromo",
        description: "Verifique se uma string é um palíndromo.",
      },
      {
        id: 3,
        title: "Contagem de Caracteres",
        description: "Conte quantas vezes um caractere específico aparece.",
      },
      {
        id: 4,
        title: "Remoção de Espaços",
        description: "Remova espaços em branco desnecessários.",
      },
    ],
    codeExample: `public class ManipuladorStrings {
    public static void main(String[] args) {
        String texto = "java é incrível";
        
        // Inverter string
        String invertida = new StringBuilder(texto).reverse().toString();
        System.out.println("Invertida: " + invertida);
        
        // Verificar palíndromo
        String semEspacos = texto.replaceAll(" ", "").toLowerCase();
        String invertidaSemEspacos = new StringBuilder(semEspacos).reverse().toString();
        boolean ehPalindromo = semEspacos.equals(invertidaSemEspacos);
        System.out.println("É palíndromo: " + ehPalindromo);
        
        // Contar caractere
        char alvo = 'a';
        int contagem = 0;
        for (char c : texto.toCharArray()) {
            if (c == alvo) {
                contagem++;
            }
        }
        System.out.println("Letra '" + alvo + "' aparece " + contagem + " vezes");
        
        // Remover espaços
        String semEspacosExtra = texto.trim();
        System.out.println("Sem espaços: " + semEspacosExtra);
    }
}`,
    challenges: [
      {
        id: 1,
        title: "Anagrama",
        description: "Verifique se duas strings são anagramas uma da outra.",
        difficulty: "Intermediário",
      },
      {
        id: 2,
        title: "Contagem de Palavras",
        description: "Conte quantas palavras existem em uma string.",
        difficulty: "Intermediário",
      },
      {
        id: 3,
        title: "Compressor de String",
        description: "Comprima uma string representando caracteres repetidos (ex: 'aaa' -> 'a3').",
        difficulty: "Avançado",
      },
    ],
    resources: [
      {
        title: "Documentação String Java",
        url: "https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",
        type: "Documentação",
      },
      {
        title: "Métodos de String",
        url: "https://www.w3schools.com/java/java_strings.asp",
        type: "Tutorial",
      },
    ],
  },
  "3.1": {
    id: "3.1",
    stage: 3,
    title: "Biblioteca de Funções Matemáticas",
    description: "Crie uma classe com métodos para operações matemáticas comuns.",
    difficulty: "Intermediário",
    learningObjectives: [
      "Criar métodos reutilizáveis",
      "Usar recursão",
      "Sobrecarregar métodos",
      "Trabalhar com retorno de valores",
      "Organizar código em classes",
    ],
    concepts: ["Métodos", "Recursão", "Sobrecarga", "Retorno de Valores", "Organização"],
    prerequisites: ["Compreender métodos", "Conhecer loops"],
    estimatedTime: "3-4 horas",
    fullDescription:
      "Este projeto trabalha com criação de métodos reutilizáveis e recursão. Você criará uma classe com métodos para calcular fatorial, sequência de Fibonacci, potência e máximo divisor comum. Aprenderá também sobre sobrecarga de métodos.",
    tasks: [
      {
        id: 1,
        title: "Método Fatorial",
        description: "Calcule o fatorial de um número usando recursão.",
      },
      {
        id: 2,
        title: "Método Fibonacci",
        description: "Gere a sequência de Fibonacci até um número específico.",
      },
      {
        id: 3,
        title: "Método de Potência",
        description: "Calcule a potência de um número.",
      },
      {
        id: 4,
        title: "Método de MDC",
        description: "Calcule o máximo divisor comum entre dois números.",
      },
    ],
    codeExample: `public class FuncoesMat {
    // Fatorial recursivo
    public static int fatorial(int n) {
        if (n <= 1) {
            return 1;
        }
        return n * fatorial(n - 1);
    }
    
    // Fibonacci recursivo
    public static long fibonacci(int n) {
        if (n <= 1) {
            return n;
        }
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
    
    // Potência
    public static double potencia(double base, int expoente) {
        return Math.pow(base, expoente);
    }
    
    // Máximo Divisor Comum
    public static int mdc(int a, int b) {
        if (b == 0) {
            return a;
        }
        return mdc(b, a % b);
    }
    
    public static void main(String[] args) {
        System.out.println("5! = " + fatorial(5));
        System.out.println("Fibonacci(10) = " + fibonacci(10));
        System.out.println("2^8 = " + potencia(2, 8));
        System.out.println("MDC(48, 18) = " + mdc(48, 18));
    }
}`,
    challenges: [
      {
        id: 1,
        title: "Fibonacci Iterativo",
        description: "Implemente Fibonacci de forma iterativa (mais eficiente).",
        difficulty: "Intermediário",
      },
      {
        id: 2,
        title: "Números Primos",
        description: "Crie um método para verificar se um número é primo.",
        difficulty: "Intermediário",
      },
      {
        id: 3,
        title: "Memoização",
        description: "Use memoização para otimizar o cálculo de Fibonacci.",
        difficulty: "Avançado",
      },
    ],
    resources: [
      {
        title: "Recursão em Java",
        url: "https://www.w3schools.com/java/java_recursion.asp",
        type: "Tutorial",
      },
      {
        title: "Métodos em Java",
        url: "https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",
        type: "Documentação",
      },
    ],
  },
  "3.2": {
    id: "3.2",
    stage: 3,
    title: "Sistema de Validação",
    description: "Crie métodos para validar diferentes tipos de entrada.",
    difficulty: "Intermediário",
    learningObjectives: [
      "Criar validadores reutilizáveis",
      "Usar expressões regulares básicas",
      "Trabalhar com strings",
      "Retornar booleanos",
      "Organizar código",
    ],
    concepts: ["Métodos", "Validação", "Strings", "Booleanos", "Organização"],
    prerequisites: ["Compreender métodos", "Conhecer strings"],
    estimatedTime: "3-4 horas",
    fullDescription:
      "Este projeto ensina a criar métodos de validação reutilizáveis. Você criará validadores para email, senha, CPF e data. Aprenderá técnicas de validação e como organizar código de forma modular.",
    tasks: [
      {
        id: 1,
        title: "Validação de Email",
        description: "Verifique se um email tem formato válido.",
      },
      {
        id: 2,
        title: "Validação de Senha",
        description: "Verifique força de senha (comprimento, caracteres especiais).",
      },
      {
        id: 3,
        title: "Validação de CPF",
        description: "Valide um CPF brasileiro.",
      },
      {
        id: 4,
        title: "Validação de Data",
        description: "Verifique se uma data é válida.",
      },
    ],
    codeExample: `public class Validador {
    // Validar email
    public static boolean validarEmail(String email) {
        return email.contains("@") && email.contains(".");
    }
    
    // Validar senha
    public static boolean validarSenha(String senha) {
        if (senha.length() < 8) {
            return false;
        }
        boolean temMaiuscula = !senha.equals(senha.toLowerCase());
        boolean temMinuscula = !senha.equals(senha.toUpperCase());
        boolean temNumero = senha.matches(".*\\\\d.*");
        
        return temMaiuscula && temMinuscula && temNumero;
    }
    
    // Validar CPF (simplificado)
    public static boolean validarCPF(String cpf) {
        cpf = cpf.replaceAll("[^0-9]", "");
        return cpf.length() == 11;
    }
    
    // Validar data
    public static boolean validarData(int dia, int mes, int ano) {
        if (mes < 1 || mes > 12) return false;
        if (dia < 1 || dia > 31) return false;
        if ((mes == 4 || mes == 6 || mes == 9 || mes == 11) && dia > 30) return false;
        if (mes == 2 && dia > 29) return false;
        return true;
    }
    
    public static void main(String[] args) {
        System.out.println("Email válido: " + validarEmail("user@example.com"));
        System.out.println("Senha forte: " + validarSenha("Senha123"));
        System.out.println("Data válida: " + validarData(25, 12, 2024));
    }
}`,
    challenges: [
      {
        id: 1,
        title: "Validação de Telefone",
        description: "Crie um validador para números de telefone.",
        difficulty: "Intermediário",
      },
      {
        id: 2,
        title: "Validação de URL",
        description: "Valide se uma string é uma URL válida.",
        difficulty: "Intermediário",
      },
      {
        id: 3,
        title: "Regex Avançado",
        description: "Use expressões regulares para validações mais robustas.",
        difficulty: "Avançado",
      },
    ],
    resources: [
      {
        title: "Regex em Java",
        url: "https://docs.oracle.com/javase/tutorial/i18n/resbundle/propfile.html",
        type: "Documentação",
      },
      {
        title: "Validação de Dados",
        url: "https://www.w3schools.com/java/java_user_input.asp",
        type: "Tutorial",
      },
    ],
  },
  "4.1": {
    id: "4.1",
    stage: 4,
    title: "Sistema de Cadastro Simples",
    description: "Crie classes que representam entidades do mundo real com encapsulamento.",
    difficulty: "Intermediário",
    learningObjectives: [
      "Criar classes com atributos e métodos",
      "Implementar encapsulamento",
      "Usar construtores",
      "Criar getters e setters",
      "Validar dados",
    ],
    concepts: ["Classes", "Objetos", "Encapsulamento", "Construtores", "Getters/Setters"],
    prerequisites: ["Compreender POO básica", "Conhecer métodos"],
    estimatedTime: "3-4 horas",
    fullDescription:
      "Este projeto marca o início da Programação Orientada a Objetos. Você criará classes que representam entidades do mundo real (Pessoa e ContaBancaria) com encapsulamento adequado. Aprenderá a usar construtores, getters e setters.",
    tasks: [
      {
        id: 1,
        title: "Classe Pessoa",
        description: "Crie a classe Pessoa com atributos nome, idade e altura.",
      },
      {
        id: 2,
        title: "Classe ContaBancaria",
        description: "Crie a classe ContaBancaria com atributos numeroConta, saldo e titular.",
      },
      {
        id: 3,
        title: "Encapsulamento",
        description: "Defina todos os atributos como private e crie getters/setters.",
      },
      {
        id: 4,
        title: "Métodos de Comportamento",
        description: "Implemente depositar() e sacar() com validação.",
      },
    ],
    codeExample: `public class Pessoa {
    private String nome;
    private int idade;
    private double altura;
    
    public Pessoa(String nome, int idade, double altura) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
    }
    
    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }
    
    public int getIdade() { return idade; }
    public void setIdade(int idade) { 
        if (idade > 0) this.idade = idade; 
    }
    
    public double getAltura() { return altura; }
    public void setAltura(double altura) { 
        if (altura > 0) this.altura = altura; 
    }
}

public class ContaBancaria {
    private String numeroConta;
    private double saldo;
    private Pessoa titular;
    
    public ContaBancaria(String numeroConta, Pessoa titular) {
        this.numeroConta = numeroConta;
        this.titular = titular;
        this.saldo = 0.0;
    }
    
    public void depositar(double valor) {
        if (valor > 0) {
            saldo += valor;
            System.out.println("Depósito de R$" + valor + " realizado.");
        }
    }
    
    public void sacar(double valor) {
        if (valor > 0 && valor <= saldo) {
            saldo -= valor;
            System.out.println("Saque de R$" + valor + " realizado.");
        } else {
            System.out.println("Saldo insuficiente!");
        }
    }
    
    public double getSaldo() { return saldo; }
}`,
    challenges: [
      {
        id: 1,
        title: "Múltiplas Contas",
        description: "Crie um sistema que gerencia múltiplas contas bancárias.",
        difficulty: "Intermediário",
      },
      {
        id: 2,
        title: "Histórico de Transações",
        description: "Mantenha um histórico de todas as transações realizadas.",
        difficulty: "Intermediário",
      },
      {
        id: 3,
        title: "Transferência",
        description: "Implemente a funcionalidade de transferência entre contas.",
        difficulty: "Avançado",
      },
    ],
    resources: [
      {
        title: "Classes e Objetos em Java",
        url: "https://docs.oracle.com/javase/tutorial/java/javaOO/classes.html",
        type: "Documentação",
      },
      {
        title: "Encapsulamento",
        url: "https://www.w3schools.com/java/java_encapsulation.asp",
        type: "Tutorial",
      },
    ],
  },
  "5.1": {
    id: "5.1",
    stage: 5,
    title: "Sistema de Gerenciamento de Funcionários",
    description: "Gerencie diferentes tipos de funcionários com herança e polimorfismo.",
    difficulty: "Intermediário",
    learningObjectives: [
      "Implementar herança",
      "Usar sobrescrita de métodos",
      "Aplicar polimorfismo",
      "Trabalhar com ArrayList",
      "Usar @Override",
    ],
    concepts: ["Herança", "Polimorfismo", "Sobrescrita", "@Override", "ArrayList"],
    prerequisites: ["Compreender classes e objetos", "Conhecer encapsulamento"],
    estimatedTime: "4-5 horas",
    fullDescription:
      "Este projeto aplica os pilares da POO: herança e polimorfismo. Você criará uma hierarquia de classes onde Gerente e Desenvolvedor herdam de Funcionario. Cada tipo terá seu próprio cálculo de salário com bônus específicos.",
    tasks: [
      {
        id: 1,
        title: "Classe Funcionario",
        description: "Crie a superclasse Funcionario com atributos básicos.",
      },
      {
        id: 2,
        title: "Classe Gerente",
        description: "Crie a subclasse Gerente que herda de Funcionario.",
      },
      {
        id: 3,
        title: "Classe Desenvolvedor",
        description: "Crie a subclasse Desenvolvedor que herda de Funcionario.",
      },
      {
        id: 4,
        title: "Polimorfismo",
        description: "Use ArrayList e polimorfismo para gerenciar funcionários.",
      },
    ],
    codeExample: `public class Funcionario {
    protected String nome;
    protected String cpf;
    protected double salarioBase;
    
    public Funcionario(String nome, String cpf, double salarioBase) {
        this.nome = nome;
        this.cpf = cpf;
        this.salarioBase = salarioBase;
    }
    
    public double calcularSalario() {
        return salarioBase;
    }
    
    public String getNome() { return nome; }
}

public class Gerente extends Funcionario {
    private String senha;
    
    public Gerente(String nome, String cpf, double salarioBase, String senha) {
        super(nome, cpf, salarioBase);
        this.senha = senha;
    }
    
    @Override
    public double calcularSalario() {
        return super.calcularSalario() * 1.10; // 10% de bônus
    }
}

public class Desenvolvedor extends Funcionario {
    public Desenvolvedor(String nome, String cpf, double salarioBase) {
        super(nome, cpf, salarioBase);
    }
    
    @Override
    public double calcularSalario() {
        return super.calcularSalario() * 1.05; // 5% de bônus
    }
}

// Uso com polimorfismo
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<Funcionario> funcionarios = new ArrayList<>();
        
        funcionarios.add(new Gerente("João", "123.456.789-00", 5000, "senha123"));
        funcionarios.add(new Desenvolvedor("Maria", "987.654.321-00", 4000));
        
        for (Funcionario f : funcionarios) {
            System.out.println(f.getNome() + ": R$" + f.calcularSalario());
        }
    }
}`,
    challenges: [
      {
        id: 1,
        title: "Estagiário",
        description: "Adicione a classe Estagiario com bônus de 2%.",
        difficulty: "Intermediário",
      },
      {
        id: 2,
        title: "Cálculo de Impostos",
        description: "Implemente cálculo de impostos sobre o salário.",
        difficulty: "Intermediário",
      },
      {
        id: 3,
        title: "Relatório de Folha",
        description: "Crie um relatório completo da folha de pagamento.",
        difficulty: "Avançado",
      },
    ],
    resources: [
      {
        title: "Herança em Java",
        url: "https://docs.oracle.com/javase/tutorial/java/IandI/subclasses.html",
        type: "Documentação",
      },
      {
        title: "Polimorfismo",
        url: "https://www.w3schools.com/java/java_polymorphism.asp",
        type: "Tutorial",
      },
    ],
  },
  "6.1": {
    id: "6.1",
    stage: 6,
    title: "Simulador de Formas Geométricas",
    description: "Implemente formas geométricas com interfaces e classes abstratas.",
    difficulty: "Avançado",
    learningObjectives: [
      "Criar interfaces",
      "Usar classes abstratas",
      "Implementar múltiplas interfaces",
      "Usar coleções avançadas",
      "Tratar exceções",
    ],
    concepts: ["Interfaces", "Classes Abstratas", "Coleções", "Exceções", "Polimorfismo Avançado"],
    prerequisites: ["Compreender herança e polimorfismo", "Conhecer ArrayList"],
    estimatedTime: "5-6 horas",
    fullDescription:
      "Este projeto marca o pico de aprendizado em POO. Você criará uma hierarquia de formas geométricas usando interfaces e classes abstratas. Aprenderá a trabalhar com coleções, tratar exceções e aplicar polimorfismo avançado.",
    tasks: [
      {
        id: 1,
        title: "Interface FormaGeometrica",
        description: "Crie a interface que define o contrato para formas.",
      },
      {
        id: 2,
        title: "Classe Abstrata Figura",
        description: "Crie a classe abstrata que implementa a interface.",
      },
      {
        id: 3,
        title: "Classes Concretas",
        description: "Implemente Circulo e Retangulo.",
      },
      {
        id: 4,
        title: "Tratamento de Exceções",
        description: "Adicione validação e tratamento de exceções.",
      },
    ],
    codeExample: `public interface FormaGeometrica {
    double calcularArea();
}

public abstract class Figura implements FormaGeometrica {
    public abstract String desenhar();
}

public class Circulo extends Figura {
    private double raio;
    
    public Circulo(double raio) {
        if (raio < 0) {
            throw new IllegalArgumentException("Raio não pode ser negativo");
        }
        this.raio = raio;
    }
    
    @Override
    public double calcularArea() {
        return Math.PI * Math.pow(raio, 2);
    }
    
    @Override
    public String desenhar() {
        return "Desenhando um círculo de raio " + raio;
    }
}

public class Retangulo extends Figura {
    private double largura;
    private double altura;
    
    public Retangulo(double largura, double altura) {
        if (largura < 0 || altura < 0) {
            throw new IllegalArgumentException("Dimensões não podem ser negativas");
        }
        this.largura = largura;
        this.altura = altura;
    }
    
    @Override
    public double calcularArea() {
        return largura * altura;
    }
    
    @Override
    public String desenhar() {
        return "Desenhando um retângulo " + largura + "x" + altura;
    }
}

// Uso
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<FormaGeometrica> formas = new ArrayList<>();
        
        try {
            formas.add(new Circulo(5));
            formas.add(new Retangulo(4, 6));
            
            for (FormaGeometrica forma : formas) {
                System.out.println("Área: " + forma.calcularArea());
            }
        } catch (IllegalArgumentException e) {
            System.out.println("Erro: " + e.getMessage());
        }
    }
}`,
    challenges: [
      {
        id: 1,
        title: "Triângulo",
        description: "Adicione a classe Triangulo.",
        difficulty: "Intermediário",
      },
      {
        id: 2,
        title: "Cálculo de Perímetro",
        description: "Adicione método para calcular perímetro.",
        difficulty: "Intermediário",
      },
      {
        id: 3,
        title: "Comparação de Formas",
        description: "Implemente comparação entre formas por área.",
        difficulty: "Avançado",
      },
    ],
    resources: [
      {
        title: "Interfaces em Java",
        url: "https://docs.oracle.com/javase/tutorial/java/IandI/createinterface.html",
        type: "Documentação",
      },
      {
        title: "Classes Abstratas",
        url: "https://www.w3schools.com/java/java_abstract.asp",
        type: "Tutorial",
      },
    ],
  },
};

export default function ProjectDetail() {
  const [, params] = useRoute("/project/:id");
  const projectId = params?.id;
  const project = projectId ? projectsData[projectId] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-white">
        <div className="container py-12">
          <div className="text-center">
            <h1 className="font-display text-3xl text-gray-900 mb-4">Projeto não encontrado</h1>
            <Link href="/">
              <Button className="bg-blue-600 hover:bg-blue-700">Voltar para Home</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-40">
        <div className="container py-4">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ChevronLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-sm font-mono text-blue-600">Projeto {project.id}</span>
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    project.difficulty === "Iniciante"
                      ? "bg-green-100 text-green-700"
                      : project.difficulty === "Intermediário"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                  }`}
                >
                  {project.difficulty}
                </span>
              </div>
              <h1 className="font-display text-3xl text-gray-900">{project.title}</h1>
              <p className="text-gray-600 mt-2">{project.description}</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <Card className="p-6 border border-gray-200">
              <h2 className="font-display text-2xl text-gray-900 mb-4">Visão Geral</h2>
              <p className="text-gray-700 mb-6">{project.fullDescription}</p>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Tempo Estimado</h3>
                  <p className="text-gray-600">{project.estimatedTime}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Conceitos</h3>
                  <p className="text-gray-600">{project.concepts.length} conceitos</p>
                </div>
              </div>
            </Card>

            {/* Learning Objectives */}
            <Card className="p-6 border border-gray-200">
              <h2 className="font-display text-2xl text-gray-900 mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
                Objetivos de Aprendizado
              </h2>
              <ul className="space-y-3">
                {project.learningObjectives.map((objective, idx) => (
                  <li key={idx} className="flex gap-3 text-gray-700">
                    <span className="text-blue-600 font-semibold flex-shrink-0">✓</span>
                    <span>{objective}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Prerequisites */}
            <Card className="p-6 border border-gray-200">
              <h2 className="font-display text-2xl text-gray-900 mb-4 flex items-center gap-2">
                <AlertCircle className="w-6 h-6 text-orange-600" />
                Pré-requisitos
              </h2>
              <ul className="space-y-2">
                {project.prerequisites.map((prereq, idx) => (
                  <li key={idx} className="text-gray-700 flex gap-2">
                    <span className="text-orange-600">•</span>
                    <span>{prereq}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Concepts */}
            <Card className="p-6 border border-gray-200">
              <h2 className="font-display text-2xl text-gray-900 mb-4">Conceitos Abordados</h2>
              <div className="flex flex-wrap gap-2">
                {project.concepts.map((concept) => (
                  <span key={concept} className="text-sm font-mono bg-blue-100 text-blue-800 px-3 py-1 rounded">
                    {concept}
                  </span>
                ))}
              </div>
            </Card>

            {/* Tasks */}
            <Card className="p-6 border border-gray-200">
              <h2 className="font-display text-2xl text-gray-900 mb-4">Tarefas</h2>
              <div className="space-y-4">
                {project.tasks.map((task) => (
                  <div key={task.id} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="flex items-start gap-3">
                      <span className="text-lg font-bold text-blue-600 flex-shrink-0">{task.id}</span>
                      <div>
                        <h3 className="font-semibold text-gray-900">{task.title}</h3>
                        <p className="text-gray-600 text-sm mt-1">{task.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Code Example */}
            <Card className="p-6 border border-gray-200">
              <h2 className="font-display text-2xl text-gray-900 mb-4">Exemplo de Código</h2>
              <CodeBlock code={project.codeExample} title={`${project.title}.java`} />
            </Card>

            {/* Challenges */}
            <Card className="p-6 border border-gray-200">
              <h2 className="font-display text-2xl text-gray-900 mb-4 flex items-center gap-2">
                <Lightbulb className="w-6 h-6 text-yellow-600" />
                Desafios Adicionais
              </h2>
              <div className="space-y-4">
                {project.challenges.map((challenge) => (
                  <div key={challenge.id} className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">{challenge.title}</h3>
                      <span
                        className={`text-xs font-semibold px-2 py-1 rounded ${
                          challenge.difficulty === "Iniciante"
                            ? "bg-green-100 text-green-700"
                            : challenge.difficulty === "Intermediário"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-red-100 text-red-700"
                        }`}
                      >
                        {challenge.difficulty}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">{challenge.description}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Resources */}
            <Card className="p-6 border border-gray-200">
              <h2 className="font-display text-2xl text-gray-900 mb-4">Recursos Úteis</h2>
              <div className="space-y-3">
                {project.resources.map((resource, idx) => (
                  <a
                    key={idx}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3 bg-blue-50 rounded-lg border border-blue-200 hover:bg-blue-100 transition-colors"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-blue-900">{resource.title}</h3>
                        <p className="text-xs text-blue-700 mt-1">{resource.type}</p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-blue-600 flex-shrink-0 mt-1" />
                    </div>
                  </a>
                ))}
              </div>
            </Card>
          </div>

          {/* Right Sidebar - Quick Info */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Quick Stats */}
              <Card className="p-6 border border-gray-200 bg-gradient-to-br from-blue-50 to-blue-100">
                <h3 className="font-semibold text-gray-900 mb-4">Informações Rápidas</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600">Estágio</p>
                    <p className="font-semibold text-gray-900">Estágio {project.stage}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Dificuldade</p>
                    <p className="font-semibold text-gray-900">{project.difficulty}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Tarefas</p>
                    <p className="font-semibold text-gray-900">{project.tasks.length} tarefas</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Tempo Estimado</p>
                    <p className="font-semibold text-gray-900">{project.estimatedTime}</p>
                  </div>
                </div>
              </Card>

              {/* Start Button */}
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg transition-colors duration-200">
                Começar Projeto
              </Button>

              {/* Tips */}
              <Card className="p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4">💡 Dicas</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Comece com o exemplo de código</li>
                  <li>• Complete todas as tarefas antes de avançar</li>
                  <li>• Tente os desafios adicionais</li>
                  <li>• Consulte os recursos quando tiver dúvidas</li>
                </ul>
              </Card>

              {/* Progress */}
              <Card className="p-6 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4">Seu Progresso</h3>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">0%</div>
                  <p className="text-sm text-gray-600">Não iniciado</p>
                </div>
              </Card>
            </div>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50 mt-16">
        <div className="container py-8">
          <div className="text-center text-sm text-gray-600">
            <p>&copy; 2026 Java Complete Roadmap. Desenvolvido com foco em educação.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
