import ListaDuplamenteEncadeada from "./listaDuplamenteEncadeada";

// Cria a lista
const lista = new ListaDuplamenteEncadeada<number>();

// ========================
// INSERÇÃO
// ========================
console.log("\n==== INSERÇÃO NO FINAL ====");
lista.inserirFinal(10);
lista.inserirFinal(20);
lista.inserirFinal(30);
console.log("\n==== LISTA COMPLETA ====");
lista.imprimirLista();

console.log("\n==== INSERÇÃO NO INICIO ====");
lista.inserirInicio(5);
lista.imprimirLista();

// ========================
// LEITURA
// ========================
console.log("\n==== BUSCA ====");
lista.buscaElemento(20);

// ========================
// EDIÇÃO
// ========================
console.log("\n==== EDIÇÃO ====");
lista.editaElemento(20, 99);
lista.imprimirLista();

// ========================
// EXCLUSÃO
// ========================
console.log("\n==== REMOÇÃO DO INÍCIO ====");
lista.removeInicio();
lista.imprimirLista();

console.log("\n==== REMOÇÃO DO FINAL ====");
lista.removeFinal();
lista.imprimirLista();

console.log("\n==== REMOÇÃO DO MEIO ====");
lista.removeMeio(30);
lista.imprimirLista();