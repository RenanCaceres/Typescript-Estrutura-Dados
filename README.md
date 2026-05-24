# 📘 Projeto TypeScript: Lista Duplamente Encadeada

## 🛠️ 1. Configuração do Ambiente

---

## 📝 2. Sintaxe Básica do TypeScript

```typescript
// Tipos primitivos
const nome: string = "TypeScript";
const versao: number = 5.0;
const ativo: boolean = true;

// Interface
interface Pessoa {
  nome: string;
  idade: number;
  email?: string; // opcional
}

// Enum
enum Status { Ativo = "ATIVO", Inativo = "INATIVO" }

// Generics
function identidade<T>(valor: T): T {
  return valor;
}
```

---

## 🌍 3. Hello World

```typescript
function helloWorld(): void {
  console.log("Hello, World!");
}
helloWorld();
```

```bash
npm run build && npm start
```

---

## 🔗 4. Lista Duplamente Encadeada

Diferente da lista simples, cada nó possui ponteiros para o **próximo** e o **anterior**, permitindo percorrimento nos dois sentidos e remoção eficiente sem percorrer a lista toda.

```
null ← [Abacaxi] ⇄ [Banana] ⇄ [Cereja] → null
         ↑ cabeca                  ↑ cauda
```

### Nó

```typescript
class No<T> {
  valor: T;
  proximo: No<T> | null = null;
  anterior: No<T> | null = null;
}
```

### Métodos disponíveis

| Método              | Descrição                              |
|---------------------|----------------------------------------|
| `inserir(v)`        | Insere no final                        |
| `inserirNoInicio(v)`| Insere no início                       |
| `inserirEm(i, v)`   | Insere em posição específica           |
| `ler(i)`            | Lê o valor no índice `i`              |
| `percorrer()`       | Exibe do início ao fim (→)            |
| `percorrerInverso()`| Exibe do fim ao início (←)            |
| `buscar(v)`         | Retorna o índice do valor              |
| `editar(i, v)`      | Substitui o valor na posição `i`      |
| `excluir(i)`        | Remove o nó na posição `i`            |

### Exemplo

```typescript
const lista = new ListaDuplamenteEncadeada<string>();

lista.inserir("Banana");
lista.inserirNoInicio("Abacaxi");
lista.inserirEm(1, "Melancia");

lista.percorrer();
// 📋 [3 elementos] Abacaxi ⇄ Melancia ⇄ Banana

lista.percorrerInverso();
// 🔃 [inverso] Banana ⇄ Melancia ⇄ Abacaxi

lista.editar(0, "Caju");
lista.excluir(1);
lista.percorrer();
// 📋 [2 elementos] Caju ⇄ Banana
```

---

## 📚 Referências
- [TypeScript Docs](https://www.typescriptlang.org/docs/)
- [TypeScript Playground](https://www.typescriptlang.org/play)
