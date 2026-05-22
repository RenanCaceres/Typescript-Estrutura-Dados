// ESTRUTURA DO NÓ
class Node<T> {
    dados: T;                   // Valor armazenado
    proximo: Node<T> | null;    // Ponteiro para o próximo nó
    anterior: Node<T> | null;   // Ponteiro para o nó anterior

    // Inicialização do nó
    constructor(dados: T) {
        this.dados = dados;     // Armazena o dado recebido dentro do nó
        this.proximo = null;    // No início não aponta para ninguém
        this.anterior = null;   // No início não aponta para ninguém
    }
}

class ListaDuplamenteEncadeada<T> {
    inicio: Node<T> | null;     // Primeiro nó
    fim: Node<T> | null;        // Último nó

    // Inicializa a lista vazia (equivalente ao cria_lista())
    constructor() {
        this.inicio = null;
        this.fim = null;
    }

    inserirInicio(dados: T): boolean {
        // Cria novo nó
        const no = new Node(dados);

        // Lista vazia, então o novo nó é único
        if (this.inicio === null) {
            this.inicio = no;
            this.fim = no;
            return true;
        }

        // Liga o novo nó ao antigo início
        no.proximo = this.inicio;   // Novo nó aponta para o antigo início
        this.inicio.anterior = no;  // Antigo início aponta de volta para o novo
        this.inicio = no;           // Atualiza o início

        return true;
    }

    inserirFinal(dados: T): boolean {
        const no = new Node(dados);

        if (this.inicio === null) {
            this.inicio = no;
            this.fim = no;
            return true;
        }

        no.anterior = this.fim;

        if (this.fim !== null) {
            this.fim.proximo = no;
        }
        this.fim = no;

        return true;
    }

    imprimirLista(): void {
        if (this.inicio === null) {
            console.log("A lista está vazia");
            return;
        }

        let atual: Node<T> | null = this.inicio;

        console.log("\n* LISTA *\n");

        while (atual !== null) {
            console.log(atual.dados);
            atual = atual.proximo;
        }
    }
    
    buscaElemento(dados: T): Node<T> | null{
         let atual = this.inicio;
 
    while (atual !== null) {
        if (atual.dados === valor) {
            return atual;
        }
        atual = atual.proximo; 
    }
 
    return null;
    }

edita_elemento(valorAntigo: T, novoValor: T): boolean {
    const no = this.busca_elemento(valorAntigo);
 
    if (no === null) return false;
 
    no.dados = novoValor;
    return true;
}
 
remove_inicio(): T | null {
    if (this.inicio === null) return null;
 
    const removido = this.inicio;
 
    if (this.inicio === this.fim) {
        this.inicio = null; 
        this.fim = null;
        return removido.dados;
    }
 
    this.inicio = this.inicio.proximo;
 
    if (this.inicio !== null) {
        this.inicio.anterior = null;
    }
 
    return removido.dados;
}
 
remove_final(): T | null {
    if (this.fim === null) return null;
 
    const removido = this.fim;
 
    if (this.inicio === this.fim){
        this.inicio = null;
        this.fim = null;
        return removido.dados;
    }
 
    this.fim = this.fim.anterior;
 
    if (this.fim !== null) { 
        this.fim.proximo = null;
    }
 
    return removido.dados;
}
 
remove_meio(valor: T): boolean {
    const no = this.busca_elemento(valor);
 
    if (no === null) return false;
 
    if (no === this.inicio) {
        this.remove_inicio();
        return true;
    }
 
    if (no === this.fim) {
        this.remove_final();
        return true;
    }
 
    const anterior = no.anterior;
    const proximo =  no.proximo;
    
    if (anterior) anterior.proximo = proximo;
    if (proximo)  proximo.anterior = anterior;
 
    return true;
}
}

export default ListaDuplamenteEncadeada;