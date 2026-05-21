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
    inicio: Node<T> | null;
    fim: Node<T> | null;

    // Inicializa a lista vazia
    constructor() {
        this.inicio = null;
        this.fim = null;
    }

    inserirInicio(dados: T): boolean {
        // Cria novo nó
        const no = new Node(dados);

        // Lista vazia
        if (this.inicio == null) {
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

    inserirFinal() {

    }

    imprimirLista() {

    }
}