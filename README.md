# 📘 Projeto TypeScript: Lista Duplamente Encadeada

## 📝 1. Sintaxe Básica do TypeScript

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

## 🌍 2. Hello World 

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

## 🔗 3. Lista Duplamente Encadeada

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

| Método                   | Descrição                              |
|------------------------- |----------------------------------------|
| `inserirNoInicio(v)`                           | Insere no início                           |
| `inserirFinal(dados: T)`                       | Insere no final                            |
| `imprimirLista()`                              | Exibe do início ao fim (→)                 |
| `buscaElemento(dados: T)`                      | Busca um elemento na lista pelo valor      |
| `editaElemento(dadosAntigos: T, dadosNovos: T)`| Substitui o dado diretamente no nó         |
| `removeInicio()`                               | Remove o primeiro nó da lista              |
| `removeFinal()`                                | Remove o último nó da lista                |
| `removeMeio()`                                 | Remove um nó pelo valor                    

### Exemplo

```typescript
const lista = new ListaDuplamenteEncadeada<string>();

lista.inserirNoFinal("Banana");
lista.inserirNoFinal("Abacaxi");
lista.inserirNoInicio("Melancia");

lista.imprimirLista();
// 📋 [3 elementos] Melancia ⇄ Banana ⇄ Abacaxi

lista.editaElemento(0, "Caju");
lista.removeFinal(1);
lista.imprimirLista();
// 📋 [2 elementos] Caju ⇄ Abacaxi
```

---

## 📚 Referências
- [TypeScript Docs](https://www.typescriptlang.org/docs/)
- [TypeScript Playground](https://www.typescriptlang.org/play)
