import { Concept } from './conceptsDataExpanded';

export const conceptsDataAdvanced: Record<string, Concept> = {
  // ==================== JAVA - AVANÇADO ====================
  'java-oop-inheritance': {
    id: 'java-oop-inheritance',
    title: 'Herança em Java',
    description: 'Aprenda como reutilizar código através de herança',
    difficulty: 'intermediate',
    content: `# Herança em Java

Herança permite que uma classe herde atributos e métodos de outra classe. É um dos pilares da POO e promove reutilização de código.

## Conceitos Básicos

### Classe Pai (Superclasse)
A classe que fornece os atributos e métodos a serem herdados.

### Classe Filha (Subclasse)
A classe que herda de outra classe.

## Sintaxe

\`\`\`java
public class ClasseFilha extends ClassePai {
    // Código específico da classe filha
}
\`\`\`

## Tipos de Herança

### 1. Herança Simples
Uma classe herda de apenas uma classe.

### 2. Herança Multinível
Uma classe herda de outra que herda de outra.

### 3. Herança Hierárquica
Múltiplas classes herdam de uma mesma classe.

## Palavra-chave super

Usada para acessar membros da classe pai:

\`\`\`java
super.metodo();
super(parametros); // Chama construtor da classe pai
\`\`\`

## Sobrescrita de Métodos

Quando uma classe filha fornece uma implementação específica de um método da classe pai.

\`\`\`java
@Override
public void metodo() {
    // Implementação específica
}
\`\`\`

## Modificadores de Acesso em Herança

- **public**: Acessível em qualquer lugar
- **protected**: Acessível na classe e subclasses
- **private**: Não acessível em subclasses
- **(sem modificador)**: Acessível no pacote`,
    examples: [
      {
        title: 'Herança Simples',
        language: 'java',
        code: `// Classe pai
public class Animal {
    protected String nome;
    
    public Animal(String nome) {
        this.nome = nome;
    }
    
    public void fazer Som() {
        System.out.println("Som genérico");
    }
}

// Classe filha
public class Cachorro extends Animal {
    public Cachorro(String nome) {
        super(nome);
    }
    
    @Override
    public void fazerSom() {
        System.out.println(nome + " faz: Au au!");
    }
}

// Uso
public class Main {
    public static void main(String[] args) {
        Cachorro dog = new Cachorro("Rex");
        dog.fazerSom();
    }
}`,
        explanation: 'Demonstra herança simples com sobrescrita de método.'
      },
      {
        title: 'Herança Multinível',
        language: 'java',
        code: `public class Veiculo {
    protected String marca;
    
    public Veiculo(String marca) {
        this.marca = marca;
    }
}

public class Automovel extends Veiculo {
    protected int portas;
    
    public Automovel(String marca, int portas) {
        super(marca);
        this.portas = portas;
    }
}

public class Carro extends Automovel {
    private String tipo; // SUV, Sedan, etc
    
    public Carro(String marca, int portas, String tipo) {
        super(marca, portas);
        this.tipo = tipo;
    }
    
    public void exibir() {
        System.out.println("Marca: " + marca + ", Portas: " + portas + ", Tipo: " + tipo);
    }
}`,
        explanation: 'Mostra herança em múltiplos níveis.'
      }
    ],
    challenges: [
      {
        id: 'java-inh-1',
        title: 'Hierarquia de Funcionários',
        description: 'Crie uma hierarquia com Funcionário, Gerente e Desenvolvedor',
        difficulty: 'medium',
        hints: ['Classe Funcionário com nome e salário', 'Gerente estende Funcionário', 'Desenvolvedor estende Funcionário'],
        expectedOutput: 'Funcionário: João, Salário: 3000'
      }
    ],
    resources: [
      { title: 'Inheritance in Java', url: 'https://docs.oracle.com/javase/tutorial/java/IandI/subclasses.html', type: 'documentation' },
      { title: 'Java Inheritance', url: 'https://www.w3schools.com/java/java_inheritance.asp', type: 'tutorial' }
    ],
    relatedConcepts: ['java-oop-intro', 'java-oop-polymorphism']
  },

  'java-oop-polymorphism': {
    id: 'java-oop-polymorphism',
    title: 'Polimorfismo em Java',
    description: 'Aprenda como objetos diferentes podem responder ao mesmo método',
    difficulty: 'intermediate',
    content: `# Polimorfismo em Java

Polimorfismo significa "muitas formas". Permite que objetos de diferentes classes respondam ao mesmo método de formas diferentes.

## Tipos de Polimorfismo

### 1. Polimorfismo de Compilação (Sobrecarga)
Múltiplos métodos com o mesmo nome mas parâmetros diferentes.

### 2. Polimorfismo de Execução (Sobrescrita)
Subclasses fornecem implementações específicas de métodos da classe pai.

## Referência Polimórfica

Uma variável de um tipo pai pode referenciar objetos de tipos filhos:

\`\`\`java
Animal animal = new Cachorro(); // Referência polimórfica
animal.fazerSom(); // Chama o método do Cachorro
\`\`\`

## Vantagens

- Flexibilidade e extensibilidade
- Código mais genérico e reutilizável
- Fácil adicionar novos tipos sem alterar código existente`,
    examples: [
      {
        title: 'Polimorfismo com Referência',
        language: 'java',
        code: `public class Animal {
    public void fazerSom() {
        System.out.println("Som genérico");
    }
}

public class Cachorro extends Animal {
    @Override
    public void fazerSom() {
        System.out.println("Au au!");
    }
}

public class Gato extends Animal {
    @Override
    public void fazerSom() {
        System.out.println("Miau!");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal[] animais = new Animal[2];
        animais[0] = new Cachorro();
        animais[1] = new Gato();
        
        for (Animal animal : animais) {
            animal.fazerSom(); // Polimorfismo!
        }
    }
}`,
        explanation: 'Demonstra polimorfismo com referências de classe pai.'
      }
    ],
    challenges: [
      {
        id: 'java-poly-1',
        title: 'Sistema de Formas',
        description: 'Crie uma hierarquia de formas geométricas com cálculo de área',
        difficulty: 'hard',
        hints: ['Classe Forma abstrata', 'Subclasses: Retângulo, Círculo, Triângulo', 'Cada uma com seu método calcularArea()'],
        expectedOutput: 'Área do retângulo: 20, Área do círculo: 78.5'
      }
    ],
    resources: [
      { title: 'Polymorphism in Java', url: 'https://docs.oracle.com/javase/tutorial/java/IandI/polymorphism.html', type: 'documentation' },
      { title: 'Java Polymorphism', url: 'https://www.w3schools.com/java/java_polymorphism.asp', type: 'tutorial' }
    ],
    relatedConcepts: ['java-oop-intro', 'java-oop-inheritance']
  },

  'java-exceptions': {
    id: 'java-exceptions',
    title: 'Tratamento de Exceções',
    description: 'Aprenda a lidar com erros e exceções em Java',
    difficulty: 'intermediate',
    content: `# Tratamento de Exceções em Java

Exceções são eventos que ocorrem durante a execução de um programa que interrompem o fluxo normal. Java fornece um mecanismo robusto para tratar exceções.

## Hierarquia de Exceções

- **Throwable**: Classe base
  - **Exception**: Exceções que podem ser tratadas
  - **Error**: Erros graves do sistema

## Tipos de Exceções

### Exceções Verificadas (Checked)
Devem ser tratadas ou declaradas. Exemplos: IOException, SQLException

### Exceções Não Verificadas (Unchecked)
Não precisam ser tratadas. Exemplos: NullPointerException, ArrayIndexOutOfBoundsException

## Blocos try-catch-finally

\`\`\`java
try {
    // Código que pode lançar exceção
} catch (TipoExcecao e) {
    // Tratamento da exceção
} finally {
    // Código sempre executado
}
\`\`\`

## Lançando Exceções

\`\`\`java
throw new Exception("Mensagem de erro");
\`\`\`

## Declarando Exceções

\`\`\`java
public void metodo() throws IOException {
    // Método pode lançar IOException
}
\`\`\``,
    examples: [
      {
        title: 'Try-Catch Básico',
        language: 'java',
        code: `public class TratamentoExcecao {
    public static void main(String[] args) {
        try {
            int[] numeros = {1, 2, 3};
            System.out.println(numeros[5]); // Erro!
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Erro: Índice fora dos limites");
            System.out.println("Mensagem: " + e.getMessage());
        }
    }
}`,
        explanation: 'Demonstra tratamento básico de exceção.'
      },
      {
        title: 'Try-Catch-Finally',
        language: 'java',
        code: `public class TryCatchFinally {
    public static void main(String[] args) {
        try {
            String texto = "123abc";
            int numero = Integer.parseInt(texto);
        } catch (NumberFormatException e) {
            System.out.println("Erro: Formato de número inválido");
        } finally {
            System.out.println("Bloco finally sempre executa");
        }
    }
}`,
        explanation: 'Mostra o uso de finally para código que sempre deve executar.'
      }
    ],
    challenges: [
      {
        id: 'java-exc-1',
        title: 'Validação de Entrada',
        description: 'Crie um programa que valida entrada do usuário e trata exceções',
        difficulty: 'medium',
        hints: ['Use try-catch', 'Trate NumberFormatException', 'Valide se número está em intervalo válido'],
        expectedOutput: 'Número válido: 50'
      }
    ],
    resources: [
      { title: 'Exceptions in Java', url: 'https://docs.oracle.com/javase/tutorial/essential/exceptions/', type: 'documentation' },
      { title: 'Java Exception Handling', url: 'https://www.w3schools.com/java/java_try_catch.asp', type: 'tutorial' }
    ],
    relatedConcepts: ['java-oop-intro', 'java-methods']
  },

  'java-collections': {
    id: 'java-collections',
    title: 'Coleções em Java',
    description: 'Aprenda sobre ArrayList, HashMap, HashSet e outras coleções',
    difficulty: 'intermediate',
    content: `# Coleções em Java

Coleções são estruturas de dados que armazenam múltiplos objetos. Java fornece um framework completo de coleções.

## Interfaces Principais

### List
Coleção ordenada que permite duplicatas.
- ArrayList
- LinkedList
- Vector

### Set
Coleção que não permite duplicatas.
- HashSet
- TreeSet
- LinkedHashSet

### Map
Coleção de pares chave-valor.
- HashMap
- TreeMap
- LinkedHashMap

## ArrayList

\`\`\`java
ArrayList<String> lista = new ArrayList<>();
lista.add("João");
lista.add("Maria");
lista.get(0); // "João"
lista.remove(0);
lista.size(); // 1
\`\`\`

## HashMap

\`\`\`java
HashMap<String, Integer> mapa = new HashMap<>();
mapa.put("João", 25);
mapa.put("Maria", 30);
mapa.get("João"); // 25
\`\`\`

## HashSet

\`\`\`java
HashSet<String> conjunto = new HashSet<>();
conjunto.add("Java");
conjunto.add("Python");
conjunto.add("Java"); // Não adiciona duplicata
\`\`\``,
    examples: [
      {
        title: 'ArrayList',
        language: 'java',
        code: `import java.util.ArrayList;

public class ArrayListExemplo {
    public static void main(String[] args) {
        ArrayList<String> frutas = new ArrayList<>();
        
        frutas.add("Maçã");
        frutas.add("Banana");
        frutas.add("Laranja");
        
        System.out.println("Tamanho: " + frutas.size());
        System.out.println("Primeira fruta: " + frutas.get(0));
        
        for (String fruta : frutas) {
            System.out.println(fruta);
        }
        
        frutas.remove(1);
        System.out.println("Após remover: " + frutas.size());
    }
}`,
        explanation: 'Demonstra operações básicas com ArrayList.'
      },
      {
        title: 'HashMap',
        language: 'java',
        code: `import java.util.HashMap;

public class HashMapExemplo {
    public static void main(String[] args) {
        HashMap<String, Integer> notas = new HashMap<>();
        
        notas.put("João", 85);
        notas.put("Maria", 90);
        notas.put("Pedro", 78);
        
        System.out.println("Nota de João: " + notas.get("João"));
        System.out.println("Tamanho: " + notas.size());
        
        for (String nome : notas.keySet()) {
            System.out.println(nome + ": " + notas.get(nome));
        }
    }
}`,
        explanation: 'Mostra como usar HashMap para armazenar pares chave-valor.'
      }
    ],
    challenges: [
      {
        id: 'java-col-1',
        title: 'Contagem de Palavras',
        description: 'Crie um programa que conta a frequência de palavras usando HashMap',
        difficulty: 'hard',
        hints: ['Use HashMap<String, Integer>', 'Itere sobre as palavras', 'Incremente a contagem para cada palavra'],
        expectedOutput: 'java: 3, python: 2, javascript: 1'
      }
    ],
    resources: [
      { title: 'Collections Framework', url: 'https://docs.oracle.com/javase/tutorial/collections/', type: 'documentation' },
      { title: 'Java Collections', url: 'https://www.w3schools.com/java/java_arraylist.asp', type: 'tutorial' }
    ],
    relatedConcepts: ['java-arrays', 'java-oop-intro']
  },

  // ==================== BACK-END ====================
  'backend-rest-api': {
    id: 'backend-rest-api',
    title: 'Construindo REST APIs',
    description: 'Aprenda a criar APIs RESTful profissionais',
    difficulty: 'intermediate',
    content: `# Construindo REST APIs

REST (Representational State Transfer) é um estilo arquitetural para criar web services escaláveis.

## Princípios REST

### 1. Cliente-Servidor
Separação clara entre cliente e servidor.

### 2. Stateless
Cada requisição contém todas as informações necessárias.

### 3. Cacheable
Respostas devem ser cacheáveis quando apropriado.

### 4. Uniform Interface
Interface consistente entre cliente e servidor.

## Métodos HTTP

- **GET**: Recuperar dados
- **POST**: Criar novo recurso
- **PUT**: Atualizar recurso existente
- **DELETE**: Remover recurso
- **PATCH**: Atualizar parcialmente

## Códigos de Status HTTP

- **200**: OK - Requisição bem-sucedida
- **201**: Created - Recurso criado
- **400**: Bad Request - Requisição inválida
- **401**: Unauthorized - Não autenticado
- **404**: Not Found - Recurso não encontrado
- **500**: Internal Server Error - Erro do servidor

## Estrutura de uma API REST

\`\`\`
GET    /api/usuarios        - Lista todos os usuários
POST   /api/usuarios        - Cria novo usuário
GET    /api/usuarios/{id}   - Obtém usuário específico
PUT    /api/usuarios/{id}   - Atualiza usuário
DELETE /api/usuarios/{id}   - Deleta usuário
\`\`\`

## Boas Práticas

- Use substantivos para recursos (não verbos)
- Use HTTP methods apropriados
- Retorne dados em JSON
- Use versionamento de API (/api/v1/)
- Implemente paginação para grandes conjuntos
- Use autenticação e autorização
- Documente sua API`,
    examples: [
      {
        title: 'API REST com Spring Boot',
        language: 'java',
        code: `import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/usuarios")
public class UsuarioController {
    private List<Usuario> usuarios = new ArrayList<>();
    
    @GetMapping
    public List<Usuario> listarTodos() {
        return usuarios;
    }
    
    @GetMapping("/{id}")
    public Usuario obterPorId(@PathVariable Long id) {
        return usuarios.stream()
            .filter(u -> u.getId().equals(id))
            .findFirst()
            .orElse(null);
    }
    
    @PostMapping
    public Usuario criar(@RequestBody Usuario usuario) {
        usuarios.add(usuario);
        return usuario;
    }
    
    @DeleteMapping("/{id}")
    public void deletar(@PathVariable Long id) {
        usuarios.removeIf(u -> u.getId().equals(id));
    }
}`,
        explanation: 'Exemplo de API REST com Spring Boot.'
      }
    ],
    challenges: [
      {
        id: 'backend-api-1',
        title: 'API de Tarefas',
        description: 'Crie uma API REST para gerenciar tarefas',
        difficulty: 'hard',
        hints: ['Endpoints: GET /tarefas, POST /tarefas, PUT /tarefas/{id}, DELETE /tarefas/{id}', 'Use Spring Boot', 'Retorne JSON'],
        expectedOutput: 'API funcionando com CRUD completo'
      }
    ],
    resources: [
      { title: 'REST API Best Practices', url: 'https://restfulapi.net/', type: 'documentation' },
      { title: 'Spring Boot REST API', url: 'https://spring.io/guides/gs/rest-service/', type: 'tutorial' }
    ],
    relatedConcepts: ['backend-database', 'backend-authentication']
  },

  'backend-database': {
    id: 'backend-database',
    title: 'Trabalhando com Bancos de Dados',
    description: 'Aprenda SQL, JDBC e ORM em Java',
    difficulty: 'intermediate',
    content: `# Trabalhando com Bancos de Dados em Java

## SQL Básico

### CREATE
\`\`\`sql
CREATE TABLE usuarios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
    email VARCHAR(100),
    idade INT
);
\`\`\`

### SELECT
\`\`\`sql
SELECT * FROM usuarios;
SELECT nome, email FROM usuarios WHERE idade > 18;
\`\`\`

### INSERT
\`\`\`sql
INSERT INTO usuarios (nome, email, idade) VALUES ('João', 'joao@email.com', 25);
\`\`\`

### UPDATE
\`\`\`sql
UPDATE usuarios SET idade = 26 WHERE id = 1;
\`\`\`

### DELETE
\`\`\`sql
DELETE FROM usuarios WHERE id = 1;
\`\`\`

## JDBC (Java Database Connectivity)

Permite conectar e executar operações em bancos de dados.

## JPA/Hibernate

Framework ORM que mapeia objetos Java para tabelas de banco de dados.

## Boas Práticas

- Use prepared statements para evitar SQL injection
- Implemente transações
- Use índices para melhorar performance
- Normalize o banco de dados
- Faça backup regularmente`,
    examples: [
      {
        title: 'Conexão JDBC',
        language: 'java',
        code: `import java.sql.*;

public class ConexaoDB {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/meudb";
        String usuario = "root";
        String senha = "senha";
        
        try {
            Connection conexao = DriverManager.getConnection(url, usuario, senha);
            
            String sql = "SELECT * FROM usuarios";
            Statement stmt = conexao.createStatement();
            ResultSet rs = stmt.executeQuery(sql);
            
            while (rs.next()) {
                System.out.println("ID: " + rs.getInt("id"));
                System.out.println("Nome: " + rs.getString("nome"));
            }
            
            conexao.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}`,
        explanation: 'Demonstra conexão básica com banco de dados usando JDBC.'
      }
    ],
    challenges: [
      {
        id: 'backend-db-1',
        title: 'Sistema de Biblioteca',
        description: 'Crie um banco de dados para gerenciar livros e empréstimos',
        difficulty: 'hard',
        hints: ['Tabelas: livros, usuarios, emprestimos', 'Use relacionamentos', 'Implemente CRUD'],
        expectedOutput: 'Banco de dados funcional com operações CRUD'
      }
    ],
    resources: [
      { title: 'SQL Tutorial', url: 'https://www.w3schools.com/sql/', type: 'tutorial' },
      { title: 'JDBC Tutorial', url: 'https://docs.oracle.com/javase/tutorial/jdbc/', type: 'documentation' }
    ],
    relatedConcepts: ['backend-rest-api', 'java-oop-intro']
  },

  // ==================== FRONT-END ====================
  'frontend-html-css': {
    id: 'frontend-html-css',
    title: 'HTML e CSS Fundamentais',
    description: 'Aprenda a estruturar e estilizar páginas web',
    difficulty: 'beginner',
    content: `# HTML e CSS Fundamentais

## HTML (HyperText Markup Language)

HTML é a linguagem de marcação usada para criar a estrutura de páginas web.

### Estrutura Básica

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <title>Minha Página</title>
</head>
<body>
    <h1>Bem-vindo</h1>
    <p>Este é um parágrafo</p>
</body>
</html>
\`\`\`

### Tags Importantes

- \`<h1> a <h6>\`: Títulos
- \`<p>\`: Parágrafo
- \`<div>\`: Divisão/container
- \`<a>\`: Link
- \`<img>\`: Imagem
- \`<form>\`: Formulário
- \`<input>\`: Campo de entrada
- \`<button>\`: Botão

## CSS (Cascading Style Sheets)

CSS é usado para estilizar elementos HTML.

### Seletores

- \`.classe\`: Seleciona por classe
- \`#id\`: Seleciona por ID
- \`elemento\`: Seleciona por tag
- \`elemento.classe\`: Combina seletores

### Propriedades Comuns

- \`color\`: Cor do texto
- \`background-color\`: Cor de fundo
- \`font-size\`: Tamanho da fonte
- \`padding\`: Espaço interno
- \`margin\`: Espaço externo
- \`border\`: Borda
- \`display\`: Como o elemento é exibido (block, inline, flex)

## Flexbox

Sistema de layout moderno para criar interfaces responsivas.

\`\`\`css
.container {
    display: flex;
    justify-content: center;
    align-items: center;
}
\`\`\`

## Grid

Sistema de layout em grade para designs complexos.

\`\`\`css
.grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
}
\`\`\``,
    examples: [
      {
        title: 'Página HTML Básica',
        language: 'html',
        code: `<!DOCTYPE html>
<html>
<head>
    <title>Meu Site</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #f0f0f0;
        }
        h1 {
            color: #333;
        }
        .container {
            background-color: white;
            padding: 20px;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Bem-vindo ao Meu Site</h1>
        <p>Este é um parágrafo de exemplo.</p>
        <a href="https://example.com">Clique aqui</a>
    </div>
</body>
</html>`,
        explanation: 'Exemplo de página HTML com CSS embutido.'
      }
    ],
    challenges: [
      {
        id: 'frontend-html-1',
        title: 'Página de Portfólio',
        description: 'Crie uma página de portfólio com HTML e CSS',
        difficulty: 'easy',
        hints: ['Use HTML semântico', 'Estilize com CSS', 'Inclua seções: sobre, projetos, contato'],
        expectedOutput: 'Página de portfólio responsiva'
      }
    ],
    resources: [
      { title: 'HTML Tutorial', url: 'https://www.w3schools.com/html/', type: 'tutorial' },
      { title: 'CSS Tutorial', url: 'https://www.w3schools.com/css/', type: 'tutorial' }
    ],
    relatedConcepts: ['frontend-javascript', 'frontend-react']
  },

  'frontend-javascript': {
    id: 'frontend-javascript',
    title: 'JavaScript Essencial',
    description: 'Aprenda JavaScript para interatividade web',
    difficulty: 'beginner',
    content: `# JavaScript Essencial

JavaScript é a linguagem de programação da web que adiciona interatividade às páginas.

## Variáveis

\`\`\`javascript
let nome = "João";
const idade = 25;
var cidade = "São Paulo"; // Evitar usar var
\`\`\`

## Tipos de Dados

- String: "texto"
- Number: 42, 3.14
- Boolean: true, false
- Array: [1, 2, 3]
- Object: {nome: "João", idade: 25}
- null, undefined

## Funções

\`\`\`javascript
function somar(a, b) {
    return a + b;
}

const multiplicar = (a, b) => a * b; // Arrow function
\`\`\`

## DOM (Document Object Model)

Permite manipular elementos HTML.

\`\`\`javascript
document.getElementById('id');
document.querySelector('.classe');
element.addEventListener('click', funcao);
\`\`\`

## Async/Await

Para operações assíncronas.

\`\`\`javascript
async function buscarDados() {
    const resposta = await fetch('url');
    const dados = await resposta.json();
    return dados;
}
\`\`\``,
    examples: [
      {
        title: 'Manipulação do DOM',
        language: 'javascript',
        code: `// Selecionar elementos
const botao = document.getElementById('meuBotao');
const paragrafos = document.querySelectorAll('p');

// Adicionar event listener
botao.addEventListener('click', function() {
    alert('Botão clicado!');
});

// Modificar conteúdo
document.getElementById('titulo').textContent = 'Novo Título';

// Adicionar classe
botao.classList.add('ativo');

// Criar elemento
const novoDiv = document.createElement('div');
novoDiv.textContent = 'Novo conteúdo';
document.body.appendChild(novoDiv);`,
        explanation: 'Demonstra manipulação básica do DOM com JavaScript.'
      }
    ],
    challenges: [
      {
        id: 'frontend-js-1',
        title: 'Calculadora Interativa',
        description: 'Crie uma calculadora com HTML, CSS e JavaScript',
        difficulty: 'medium',
        hints: ['Use buttons para números', 'Use addEventListener para cliques', 'Calcule e exiba resultado'],
        expectedOutput: 'Calculadora funcional'
      }
    ],
    resources: [
      { title: 'JavaScript Tutorial', url: 'https://www.w3schools.com/js/', type: 'tutorial' },
      { title: 'MDN JavaScript Guide', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide', type: 'documentation' }
    ],
    relatedConcepts: ['frontend-html-css', 'frontend-react']
  },

  'frontend-react': {
    id: 'frontend-react',
    title: 'React para Interfaces Modernas',
    description: 'Aprenda React para construir interfaces dinâmicas',
    difficulty: 'intermediate',
    content: `# React para Interfaces Modernas

React é uma biblioteca JavaScript para construir interfaces de usuário com componentes reutilizáveis.

## Conceitos Fundamentais

### Componentes
Blocos reutilizáveis que retornam JSX.

\`\`\`javascript
function Botao() {
    return <button>Clique aqui</button>;
}
\`\`\`

### JSX
Sintaxe que parece HTML mas é JavaScript.

\`\`\`javascript
const elemento = <h1>Olá, {nome}!</h1>;
\`\`\`

### Props
Propriedades passadas para componentes.

\`\`\`javascript
function Saudacao(props) {
    return <h1>Olá, {props.nome}!</h1>;
}

<Saudacao nome="João" />
\`\`\`

### State
Dados que podem mudar dentro de um componente.

\`\`\`javascript
const [contador, setContador] = useState(0);
\`\`\`

### Hooks
Funções que permitem usar state e outros recursos.

- useState: Gerenciar state
- useEffect: Efeitos colaterais
- useContext: Compartilhar dados
- useReducer: Gerenciar state complexo

## Ciclo de Vida

- Montagem: Componente é criado
- Atualização: Props ou state mudam
- Desmontagem: Componente é removido`,
    examples: [
      {
        title: 'Componente com State',
        language: 'javascript',
        code: `import { useState } from 'react';

function Contador() {
    const [numero, setNumero] = useState(0);
    
    return (
        <div>
            <p>Contador: {numero}</p>
            <button onClick={() => setNumero(numero + 1)}>
                Incrementar
            </button>
            <button onClick={() => setNumero(numero - 1)}>
                Decrementar
            </button>
        </div>
    );
}

export default Contador;`,
        explanation: 'Componente React com state usando useState hook.'
      }
    ],
    challenges: [
      {
        id: 'frontend-react-1',
        title: 'Lista de Tarefas',
        description: 'Crie uma lista de tarefas com React',
        difficulty: 'hard',
        hints: ['Use useState para gerenciar tarefas', 'Implemente adicionar, remover e marcar como completo', 'Use map para renderizar lista'],
        expectedOutput: 'Lista de tarefas funcional'
      }
    ],
    resources: [
      { title: 'React Documentation', url: 'https://react.dev/', type: 'documentation' },
      { title: 'React Tutorial', url: 'https://www.w3schools.com/react/', type: 'tutorial' }
    ],
    relatedConcepts: ['frontend-javascript', 'frontend-html-css']
  },

  // ==================== MATEMÁTICA ====================
  'math-algebra': {
    id: 'math-algebra',
    title: 'Álgebra Fundamental',
    description: 'Aprenda conceitos básicos de álgebra',
    difficulty: 'beginner',
    content: `# Álgebra Fundamental

Álgebra é a branch da matemática que usa símbolos para representar números e relações.

## Variáveis e Expressões

Uma variável é um símbolo (geralmente uma letra) que representa um número desconhecido.

Exemplos:
- x + 5 = 12
- 2y - 3 = 7

## Equações Lineares

Uma equação linear tem a forma ax + b = c

Resolver: x = (c - b) / a

## Sistemas de Equações

Múltiplas equações com múltiplas variáveis.

\`\`\`
x + y = 5
x - y = 1
\`\`\`

Solução: x = 3, y = 2

## Fatoração

Decompor uma expressão em seus fatores.

x² + 5x + 6 = (x + 2)(x + 3)

## Polinômios

Expressões com múltiplos termos.

P(x) = ax² + bx + c`,
    examples: [
      {
        title: 'Resolvendo Equações',
        language: 'java',
        code: `public class ResolverEquacao {
    // Resolve ax + b = c
    public static double resolverLinear(double a, double b, double c) {
        return (c - b) / a;
    }
    
    // Resolve ax² + bx + c = 0 (fórmula de Bhaskara)
    public static void resolverQuadratica(double a, double b, double c) {
        double discriminante = b * b - 4 * a * c;
        
        if (discriminante < 0) {
            System.out.println("Sem raízes reais");
        } else if (discriminante == 0) {
            double x = -b / (2 * a);
            System.out.println("Uma raiz: " + x);
        } else {
            double x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
            double x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
            System.out.println("Raízes: " + x1 + " e " + x2);
        }
    }
}`,
        explanation: 'Demonstra resolução de equações lineares e quadráticas.'
      }
    ],
    challenges: [
      {
        id: 'math-alg-1',
        title: 'Resolver Sistema de Equações',
        description: 'Resolva um sistema 2x2 de equações lineares',
        difficulty: 'medium',
        hints: ['Use método de substituição ou eliminação', 'Implemente em Java', 'Retorne x e y'],
        expectedOutput: 'x = 3, y = 2'
      }
    ],
    resources: [
      { title: 'Algebra Basics', url: 'https://www.khanacademy.org/math/algebra1', type: 'tutorial' },
      { title: 'Linear Equations', url: 'https://www.w3schools.com/python/python_math.asp', type: 'tutorial' }
    ],
    relatedConcepts: ['math-geometry', 'math-calculus']
  },

  // ==================== INGLÊS ====================
  'english-grammar': {
    id: 'english-grammar',
    title: 'Gramática Inglesa Essencial',
    description: 'Aprenda os fundamentos da gramática em inglês',
    difficulty: 'beginner',
    content: `# Gramática Inglesa Essencial

## Partes da Oração

### Nouns (Substantivos)
Palavras que nomeiam pessoas, lugares, coisas.
- Exemplos: book, teacher, city

### Verbs (Verbos)
Palavras que expressam ações.
- Exemplos: run, eat, study

### Adjectives (Adjetivos)
Palavras que descrevem nouns.
- Exemplos: big, beautiful, fast

### Adverbs (Advérbios)
Palavras que modificam verbs, adjectives ou outros adverbs.
- Exemplos: quickly, very, well

## Tempos Verbais

### Present Simple
Ações habituais ou fatos.
- I work
- She works

### Past Simple
Ações completadas no passado.
- I worked
- She worked

### Future Simple
Ações futuras.
- I will work
- She will work

### Present Continuous
Ações acontecendo agora.
- I am working
- She is working

## Estrutura de Sentença

Subject + Verb + Object

Exemplo: I eat an apple.

## Perguntas

Do/Does + Subject + Verb?

Exemplo: Do you like coffee?`,
    examples: [
      {
        title: 'Tempos Verbais',
        language: 'text',
        code: `Present Simple:
- I go to school
- She goes to school
- They go to school

Past Simple:
- I went to school
- She went to school
- They went to school

Future Simple:
- I will go to school
- She will go to school
- They will go to school

Present Continuous:
- I am going to school
- She is going to school
- They are going to school`,
        explanation: 'Exemplos de diferentes tempos verbais em inglês.'
      }
    ],
    challenges: [
      {
        id: 'english-gram-1',
        title: 'Conjugar Verbos',
        description: 'Conjugue verbos em diferentes tempos',
        difficulty: 'easy',
        hints: ['Escolha um verbo', 'Conjugue em Present, Past e Future', 'Use formas corretas'],
        expectedOutput: 'I go, I went, I will go'
      }
    ],
    resources: [
      { title: 'English Grammar', url: 'https://www.w3schools.com/english/', type: 'tutorial' },
      { title: 'Grammar Lessons', url: 'https://www.bbc.com/learningenglish/english/course/beginner', type: 'tutorial' }
    ],
    relatedConcepts: ['english-vocabulary', 'english-conversation']
  }
};

export function getAdvancedConceptById(id: string): Concept | undefined {
  return conceptsDataAdvanced[id];
}

export function getAllAdvancedConcepts(): Concept[] {
  return Object.values(conceptsDataAdvanced);
}
