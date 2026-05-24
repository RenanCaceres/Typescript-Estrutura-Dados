# 📘 Projeto TypeScript — Lista Encadeada

Projeto desenvolvido para a atividade acadêmica de apresentação de linguagem de programação.

---

## 🛠️ 1. Configuração do Ambiente de Desenvolvimento

### Pré-requisitos

- **Node.js** (versão 18 ou superior) — [nodejs.org](https://nodejs.org)
- **npm** (instalado junto com o Node.js)
- **Editor recomendado**: VS Code — [code.visualstudio.com](https://code.visualstudio.com)

---

## 📝 2. Sintaxe Básica do TypeScript

TypeScript é um **superset tipado** do JavaScript. Todo código JavaScript válido é TypeScript válido.

### Tipos Primitivos

```typescript
const nome: string = "TypeScript";
const versao: number = 5.0;
const ativo: boolean = true;
```

### Arrays e Tuplas

```typescript
const frutas: string[] = ["maçã", "banana"];
const coordenada: [number, number] = [10, 20];
```

### Interface

```typescript
interface Pessoa {
  nome: string;
  idade: number;
  email?: string; // campo opcional
}
```

### Enum

```typescript
enum Direcao {
  Norte = "NORTE",
  Sul   = "SUL",
}
```

### Generics

```typescript
function identidade<T>(valor: T): T {
  return valor;
}
```

### Classes

```typescript
class Animal {
  constructor(private nome: string) {}

  falar(): void {
    console.log(`${this.nome} fez um som.`);
  }
}
```

---

## 🌍 3. Hello World

```typescript
function helloWorld(): void {
  console.log("Hello, World!");
  console.log("Bem-vindo ao TypeScript!");
}

helloWorld();
```

**Executar:**

```bash
# Compilar e rodar
npm run build && npm start

# Ou rodar diretamente (requer ts-node)
npm run dev
```

---

## 🔗 4. Lista Encadeada

Implementação de uma **Lista Encadeada Genérica** com os seguintes métodos:

| Método          | Descrição                                   |
|-----------------|---------------------------------------------|
| `inserir(v)`    | Insere ao final da lista                    |
| `inserirEm(i,v)`| Insere em posição específica                |
| `ler(i)`        | Lê o valor no índice `i`                    |
| `percorrer()`   | Exibe todos os elementos                    |
| `buscar(v)`     | Retorna o índice do valor buscado           |
| `editar(i, v)`  | Substitui o valor na posição `i`            |
| `excluir(i)`    | Remove o elemento na posição `i`            |

### Exemplo de uso

```typescript
const lista = new ListaEncadeada<string>();

lista.inserir("Maçã");
lista.inserir("Banana");
lista.inserir("Cereja");

lista.percorrer();
// 📋 Lista [3 elementos]: Maçã → Banana → Cereja

lista.editar(1, "Melancia");
lista.excluir(0);

lista.percorrer();
// 📋 Lista [2 elementos]: Melancia → Cereja
```

---

## ▶️ Como executar

```bash
# Instalar dependências
npm install

# Compilar TypeScript
npm run build

# Executar
npm start
```

Saída esperada no terminal:

```
Hello, World!
Bem-vindo ao TypeScript!

========================================
  LISTA ENCADEADA — DEMONSTRAÇÃO
========================================

--- Inserção ---
✅ Inserido: Maçã
✅ Inserido: Banana
...
```

---

## 📁 Estrutura do Projeto

```
projeto-typescript/
├── src/
│   └── index.ts        # Código principal
├── dist/               # Código compilado (gerado pelo tsc)
├── package.json
├── tsconfig.json
└── README.md
```

---

## 📚 Referências

- [Documentação oficial TypeScript](https://www.typescriptlang.org/docs/)
- [TypeScript Playground](https://www.typescriptlang.org/play)
- [Node.js](https://nodejs.org)
