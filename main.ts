import ListaDuplamenteEncadeada from "./listaDuplamenteEncadeada";

const lista = new ListaDuplamenteEncadeada<number>();

console.log("\n==== INSERÇÃO NO FINAL ====");
lista.inserirFinal(10);
lista.inserirFinal(20);
lista.inserirFinal(30);
console.log("\n==== LISTA COMPLETA ====");
lista.imprimirLista();

console.log("\n==== INSERÇÃO NO INICIO ====");
lista.inserirInicio(5);
lista.imprimirLista();