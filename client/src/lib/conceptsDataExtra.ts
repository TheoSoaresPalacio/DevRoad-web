import { Concept } from './conceptsDataExpanded';

export const conceptsDataExtra: Record<string, Concept> = {
  // ==================== JAVA - AVANÇADO ====================
  'java-design-patterns': {
    id: 'java-design-patterns',
    title: 'Design Patterns em Java',
    description: 'Aprenda os principais padrões de design usados em Java',
    difficulty: 'advanced',
    content: `# Design Patterns em Java

Design Patterns são soluções reutilizáveis para problemas comuns em programação. São como receitas que você pode seguir para resolver certos problemas de design.

## Padrões Criacionais

### Singleton
Garante que uma classe tenha apenas uma instância e fornece um ponto de acesso global a ela.

\`\`\`java
public class Singleton {
    private static Singleton instance;
    
    private Singleton() {}
    
    public static synchronized Singleton getInstance() {
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }
}
\`\`\`

### Factory
Fornece uma interface para criar objetos sem especificar suas classes concretas.

### Builder
Separa a construção de um objeto complexo de sua representação.

## Padrões Estruturais

### Adapter
Converte a interface de uma classe em outra interface esperada pelos clientes.

### Decorator
Adiciona responsabilidades adicionais a um objeto dinamicamente.

### Facade
Fornece uma interface unificada para um conjunto de interfaces em um subsistema.

## Padrões Comportamentais

### Observer
Define uma dependência um-para-muitos entre objetos de forma que quando um objeto muda de estado, todos os seus dependentes são notificados automaticamente.

### Strategy
Define uma família de algoritmos, encapsula cada um e os torna intercambiáveis.

### State
Permite que um objeto altere seu comportamento quando seu estado interno muda.`,
    examples: [
      {
        title: 'Padrão Factory',
        language: 'java',
        code: `interface Animal {
    void makeSound();
}

class Dog implements Animal {
    public void makeSound() {
        System.out.println("Woof!");
    }
}

class Cat implements Animal {
    public void makeSound() {
        System.out.println("Meow!");
    }
}

class AnimalFactory {
    public static Animal createAnimal(String type) {
        if (type.equals("dog")) {
            return new Dog();
        } else if (type.equals("cat")) {
            return new Cat();
        }
        return null;
    }
}`,
        explanation: 'Exemplo de Factory Pattern para criar diferentes tipos de animais.'
      }
    ],
    challenges: [
      {
        id: 'dp-1',
        title: 'Implementar Singleton',
        description: 'Crie uma classe Singleton thread-safe',
        difficulty: 'medium',
        hints: ['Use synchronized', 'Crie construtor privado'],
        expectedOutput: 'Singleton funcionando corretamente'
      }
    ],
    resources: [
      { title: 'Design Patterns', url: 'https://refactoring.guru/design-patterns', type: 'documentation' },
      { title: 'Java Design Patterns', url: 'https://www.baeldung.com/design-patterns-in-java', type: 'tutorial' }
    ],
    relatedConcepts: ['java-oop-intro', 'java-oop-inheritance']
  },

  'java-concurrency': {
    id: 'java-concurrency',
    title: 'Concorrência em Java',
    description: 'Aprenda programação concorrente com threads e sincronização',
    difficulty: 'advanced',
    content: `# Concorrência em Java

Concorrência permite que múltiplas tarefas sejam executadas simultaneamente. Java fornece suporte nativo através de threads.

## Threads Básicas

Uma thread é uma unidade leve de execução dentro de um processo.

\`\`\`java
class MyThread extends Thread {
    public void run() {
        System.out.println("Thread executando");
    }
}

// Usar
MyThread thread = new MyThread();
thread.start();
\`\`\`

## Sincronização

Quando múltiplas threads acessam o mesmo recurso, pode haver conflitos.

\`\`\`java
public synchronized void metodoSeguro() {
    // Apenas uma thread por vez
}
\`\`\`

## ExecutorService

Gerencia um pool de threads automaticamente.

\`\`\`java
ExecutorService executor = Executors.newFixedThreadPool(10);
executor.submit(() -> System.out.println("Task"));
executor.shutdown();
\`\`\`

## Problemas Comuns

- **Deadlock**: Threads esperando uma pela outra indefinidamente
- **Race Condition**: Resultado depende da ordem de execução
- **Starvation**: Uma thread nunca consegue executar`,
    examples: [
      {
        title: 'Thread Segura com Sincronização',
        language: 'java',
        code: `public class Counter {
    private int count = 0;
    
    public synchronized void increment() {
        count++;
    }
    
    public synchronized int getCount() {
        return count;
    }
}

// Uso
Counter counter = new Counter();
for (int i = 0; i < 1000; i++) {
    new Thread(() -> counter.increment()).start();
}`,
        explanation: 'Exemplo de sincronização para evitar race conditions.'
      }
    ],
    challenges: [
      {
        id: 'conc-1',
        title: 'Produtor-Consumidor',
        description: 'Implemente padrão produtor-consumidor com threads',
        difficulty: 'hard',
        hints: ['Use wait() e notify()', 'Sincronize acesso', 'Use queue'],
        expectedOutput: 'Produtor e consumidor sincronizados'
      }
    ],
    resources: [
      { title: 'Java Concurrency', url: 'https://docs.oracle.com/javase/tutorial/essential/concurrency/', type: 'documentation' },
      { title: 'Concurrency in Practice', url: 'https://www.baeldung.com/java-concurrency', type: 'tutorial' }
    ],
    relatedConcepts: ['java-intro', 'java-methods']
  },

  'java-reflection': {
    id: 'java-reflection',
    title: 'Reflection API em Java',
    description: 'Inspecione e manipule classes em tempo de execução',
    difficulty: 'advanced',
    content: `# Reflection API em Java

Reflection permite inspecionar e modificar classes, métodos e campos em tempo de execução.

## Obtendo Informações de Classe

\`\`\`java
Class<?> clazz = String.class;
// ou
Class<?> clazz = Class.forName("java.lang.String");

// Métodos
Method[] methods = clazz.getDeclaredMethods();

// Campos
Field[] fields = clazz.getDeclaredFields();

// Construtores
Constructor<?>[] constructors = clazz.getDeclaredConstructors();
\`\`\`

## Criando Instâncias Dinamicamente

\`\`\`java
Class<?> clazz = Class.forName("com.example.MyClass");
Object instance = clazz.getDeclaredConstructor().newInstance();
\`\`\`

## Invocando Métodos Dinamicamente

\`\`\`java
Method method = clazz.getMethod("myMethod", String.class);
method.invoke(instance, "argument");
\`\`\`

## Annotations

Você pode ler annotations em tempo de execução.

\`\`\`java
@Retention(RetentionPolicy.RUNTIME)
public @interface MyAnnotation {
    String value();
}

// Ler annotation
MyAnnotation annotation = clazz.getAnnotation(MyAnnotation.class);
\`\`\``,
    examples: [
      {
        title: 'Inspecionar Classe',
        language: 'java',
        code: `public class ReflectionExample {
    public static void main(String[] args) throws Exception {
        Class<?> clazz = String.class;
        
        System.out.println("Classe: " + clazz.getName());
        System.out.println("Métodos:");
        for (Method method : clazz.getDeclaredMethods()) {
            System.out.println("  - " + method.getName());
        }
        
        System.out.println("Campos:");
        for (Field field : clazz.getDeclaredFields()) {
            System.out.println("  - " + field.getName());
        }
    }
}`,
        explanation: 'Exemplo de inspeção de classe usando Reflection.'
      }
    ],
    challenges: [
      {
        id: 'refl-1',
        title: 'Criar Instância Dinamicamente',
        description: 'Use Reflection para criar instâncias de classe',
        difficulty: 'medium',
        hints: ['Use Class.forName()', 'Use getDeclaredConstructor()', 'Use newInstance()'],
        expectedOutput: 'Instância criada dinamicamente'
      }
    ],
    resources: [
      { title: 'Reflection API', url: 'https://docs.oracle.com/javase/tutorial/reflect/', type: 'documentation' },
      { title: 'Java Reflection Guide', url: 'https://www.baeldung.com/java-reflection', type: 'tutorial' }
    ],
    relatedConcepts: ['java-oop-intro', 'java-oop-inheritance']
  },

  // ==================== BANCO DE DADOS ====================
  'database-normalization': {
    id: 'database-normalization',
    title: 'Normalização de Banco de Dados',
    description: 'Aprenda as formas normais e como estruturar dados eficientemente',
    difficulty: 'intermediate',
    content: `# Normalização de Banco de Dados

Normalização é o processo de organizar dados em um banco de dados para reduzir redundância e melhorar integridade.

## Primeira Forma Normal (1NF)

- Cada coluna contém apenas valores atômicos
- Não há grupos repetidos

## Segunda Forma Normal (2NF)

- Satisfaz 1NF
- Todos os atributos não-chave dependem totalmente da chave primária

## Terceira Forma Normal (3NF)

- Satisfaz 2NF
- Nenhum atributo não-chave depende de outro atributo não-chave

## Exemplo

Antes (não normalizado):
\`\`\`
Alunos
- ID
- Nome
- Telefone1, Telefone2, Telefone3
\`\`\`

Depois (normalizado):
\`\`\`
Alunos
- ID
- Nome

Telefones
- ID
- AlunoID
- Telefone
\`\`\``,
    examples: [
      {
        title: 'Estrutura Normalizada',
        language: 'sql',
        code: `-- Forma não normalizada
CREATE TABLE Pedidos (
    id INT PRIMARY KEY,
    cliente_nome VARCHAR(100),
    cliente_email VARCHAR(100),
    produtos VARCHAR(500)  -- Múltiplos produtos em uma coluna
);

-- Forma normalizada
CREATE TABLE Clientes (
    id INT PRIMARY KEY,
    nome VARCHAR(100),
    email VARCHAR(100)
);

CREATE TABLE Pedidos (
    id INT PRIMARY KEY,
    cliente_id INT,
    data DATE,
    FOREIGN KEY (cliente_id) REFERENCES Clientes(id)
);

CREATE TABLE PedidoItens (
    id INT PRIMARY KEY,
    pedido_id INT,
    produto_id INT,
    quantidade INT,
    FOREIGN KEY (pedido_id) REFERENCES Pedidos(id)
);`,
        explanation: 'Exemplo de normalização de banco de dados.'
      }
    ],
    challenges: [
      {
        id: 'norm-1',
        title: 'Normalizar Banco de Dados',
        description: 'Normalize um banco de dados não normalizado',
        difficulty: 'medium',
        hints: ['Identifique redundâncias', 'Crie tabelas separadas', 'Use foreign keys'],
        expectedOutput: 'Banco de dados normalizado'
      }
    ],
    resources: [
      { title: 'Database Normalization', url: 'https://www.oracle.com/database/what-is-database-normalization/', type: 'documentation' },
      { title: 'Normalization Tutorial', url: 'https://www.tutorialspoint.com/dbms/database_normalization.htm', type: 'tutorial' }
    ],
    relatedConcepts: ['database-intro', 'database-sql']
  },

  // ==================== SEGURANÇA ====================
  'security-authentication': {
    id: 'security-authentication',
    title: 'Autenticação e Autorização',
    description: 'Aprenda sobre segurança de autenticação e autorização',
    difficulty: 'intermediate',
    content: `# Autenticação e Autorização

## Autenticação

Autenticação é o processo de verificar a identidade de um usuário.

### Métodos Comuns

- **Senha**: Usuário e senha
- **Token**: JWT, OAuth
- **Biometria**: Impressão digital, reconhecimento facial
- **Multi-fator**: Combinação de métodos

### Boas Práticas

- Nunca armazene senhas em texto plano
- Use hash (bcrypt, Argon2)
- Implemente rate limiting
- Use HTTPS

## Autorização

Autorização é o processo de determinar o que um usuário autenticado pode fazer.

### Modelos

- **RBAC** (Role-Based Access Control): Baseado em papéis
- **ABAC** (Attribute-Based Access Control): Baseado em atributos
- **PBAC** (Policy-Based Access Control): Baseado em políticas

### Exemplo RBAC

\`\`\`java
public class User {
    private String username;
    private Set<Role> roles;
    
    public boolean hasRole(Role role) {
        return roles.contains(role);
    }
}
\`\`\`

## JWT (JSON Web Token)

Token auto-contido que inclui informações do usuário.

\`\`\`
Header.Payload.Signature
\`\`\``,
    examples: [
      {
        title: 'Autenticação com JWT',
        language: 'java',
        code: `import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

public class JWTUtil {
    private static final String SECRET = "minha-chave-secreta";
    
    public static String generateToken(String username) {
        return Jwts.builder()
            .setSubject(username)
            .setIssuedAt(new Date())
            .setExpiration(new Date(System.currentTimeMillis() + 3600000))
            .signWith(SignatureAlgorithm.HS512, SECRET)
            .compact();
    }
    
    public static String validateToken(String token) {
        return Jwts.parser()
            .setSigningKey(SECRET)
            .parseClaimsJws(token)
            .getBody()
            .getSubject();
    }
}`,
        explanation: 'Exemplo de geração e validação de JWT.'
      }
    ],
    challenges: [
      {
        id: 'sec-1',
        title: 'Implementar Autenticação',
        description: 'Crie um sistema de autenticação com JWT',
        difficulty: 'hard',
        hints: ['Gere tokens', 'Valide tokens', 'Implemente refresh'],
        expectedOutput: 'Sistema de autenticação funcional'
      }
    ],
    resources: [
      { title: 'OWASP Authentication', url: 'https://owasp.org/www-community/attacks/authentication', type: 'documentation' },
      { title: 'JWT Guide', url: 'https://jwt.io/introduction', type: 'tutorial' }
    ],
    relatedConcepts: ['backend-spring-intro', 'backend-database']
  },

  // ==================== PERFORMANCE ====================
  'performance-optimization': {
    id: 'performance-optimization',
    title: 'Otimização de Performance',
    description: 'Aprenda técnicas para otimizar performance de aplicações',
    difficulty: 'advanced',
    content: `# Otimização de Performance

## Profiling

Identifique gargalos usando profilers.

\`\`\`java
// Medir tempo de execução
long start = System.currentTimeMillis();
// código
long end = System.currentTimeMillis();
System.out.println("Tempo: " + (end - start) + "ms");
\`\`\`

## Caching

Armazene resultados para evitar recomputação.

\`\`\`java
@Cacheable("users")
public User getUser(Long id) {
    return userRepository.findById(id);
}
\`\`\`

## Lazy Loading

Carregue dados sob demanda.

## Connection Pooling

Reutilize conexões de banco de dados.

\`\`\`java
HikariConfig config = new HikariConfig();
config.setMaximumPoolSize(20);
\`\`\`

## Índices de Banco de Dados

Acelere queries com índices.

\`\`\`sql
CREATE INDEX idx_email ON users(email);
\`\`\`

## Compressão

Comprima dados em trânsito.

## Async Processing

Processe tarefas assincronamente.`,
    examples: [
      {
        title: 'Cache com Spring',
        language: 'java',
        code: `import org.springframework.cache.annotation.Cacheable;
import org.springframework.cache.annotation.CacheEvict;

@Service
public class UserService {
    
    @Cacheable("users")
    public User getUserById(Long id) {
        // Consulta custosa
        return userRepository.findById(id).orElse(null);
    }
    
    @CacheEvict("users")
    public void updateUser(User user) {
        userRepository.save(user);
    }
}`,
        explanation: 'Exemplo de caching com Spring Framework.'
      }
    ],
    challenges: [
      {
        id: 'perf-1',
        title: 'Otimizar Query',
        description: 'Otimize uma query lenta com índices',
        difficulty: 'medium',
        hints: ['Analise plano de execução', 'Crie índices', 'Reescreva query'],
        expectedOutput: 'Query otimizada'
      }
    ],
    resources: [
      { title: 'Performance Tuning', url: 'https://docs.oracle.com/javase/tutorial/performance/', type: 'documentation' },
      { title: 'Java Performance', url: 'https://www.baeldung.com/java-performance-optimization', type: 'tutorial' }
    ],
    relatedConcepts: ['database-sql', 'backend-spring-intro']
  },

  // ==================== TESTES ====================
  'testing-unit': {
    id: 'testing-unit',
    title: 'Testes Unitários',
    description: 'Aprenda a escrever testes unitários com JUnit e Mockito',
    difficulty: 'intermediate',
    content: `# Testes Unitários em Java

## JUnit

Framework padrão para testes em Java.

\`\`\`java
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class CalculatorTest {
    
    @Test
    public void testAdd() {
        Calculator calc = new Calculator();
        assertEquals(4, calc.add(2, 2));
    }
    
    @Test
    public void testDivideByZero() {
        Calculator calc = new Calculator();
        assertThrows(ArithmeticException.class, () -> calc.divide(10, 0));
    }
}
\`\`\`

## Mockito

Crie mocks para testes isolados.

\`\`\`java
import static org.mockito.Mockito.*;

@Test
public void testUserService() {
    UserRepository mockRepo = mock(UserRepository.class);
    when(mockRepo.findById(1L)).thenReturn(new User("John"));
    
    UserService service = new UserService(mockRepo);
    User user = service.getUser(1L);
    
    assertEquals("John", user.getName());
    verify(mockRepo).findById(1L);
}
\`\`\`

## Assertions

- assertEquals: Verifica igualdade
- assertTrue/assertFalse: Verifica booleano
- assertNull/assertNotNull: Verifica null
- assertThrows: Verifica exceção
- assertArrayEquals: Compara arrays`,
    examples: [
      {
        title: 'Teste com Mockito',
        language: 'java',
        code: `import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

public class OrderServiceTest {
    
    @Mock
    private PaymentService paymentService;
    
    @Test
    public void testProcessOrder() {
        MockitoAnnotations.openMocks(this);
        
        when(paymentService.processPayment(100.0))
            .thenReturn(true);
        
        OrderService orderService = new OrderService(paymentService);
        boolean result = orderService.processOrder(100.0);
        
        assertTrue(result);
        verify(paymentService).processPayment(100.0);
    }
}`,
        explanation: 'Exemplo de teste com Mockito.'
      }
    ],
    challenges: [
      {
        id: 'test-1',
        title: 'Escrever Testes',
        description: 'Escreva testes unitários para uma classe',
        difficulty: 'medium',
        hints: ['Use @Test', 'Use assertEquals', 'Teste casos extremos'],
        expectedOutput: 'Testes passando'
      }
    ],
    resources: [
      { title: 'JUnit 5 Guide', url: 'https://junit.org/junit5/docs/current/user-guide/', type: 'documentation' },
      { title: 'Mockito Tutorial', url: 'https://www.baeldung.com/mockito-series', type: 'tutorial' }
    ],
    relatedConcepts: ['java-methods', 'java-oop-intro']
  }
};
