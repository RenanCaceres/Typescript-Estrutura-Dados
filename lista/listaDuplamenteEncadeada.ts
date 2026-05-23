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

    // Insere um novo nó no início da lista - retorna true se inseriu com sucesso
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

    // Insere um novo nó no final da lista - retorna true se inseriu com sucesso
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

    // Percorre a lista do início ao fim exibindo cada elemento
    imprimirLista(): void {
        if (this.inicio === null) {
            console.log("A lista está vazia");
            return;
        }

        let atual: Node<T> | null = this.inicio;

        while (atual !== null) {
            console.log(atual.dados);
            atual = atual.proximo;
        }
    }
    
    // Busca um elemento na lista pelo valor - retorna o nó encontrado ou null se não existir
    buscaElemento(dados: T): Node<T> | null {
        if (this.inicio === null) {
            console.log("A lista está vazia");
            return null;
        }

        let atual: Node<T> | null = this.inicio;

        while (atual !== null) {
            if (atual.dados === dados) {
                console.log("Elemento encontrado: ", atual.dados);
                return atual;
            }
            
            atual = atual.proximo; 
        }
 
        console.log("O elemento nao foi encontrado");
        return null;
    }

    // Substitui um valor existente por um novo - retorna true se editou, false se não encontrou
    editaElemento(dadosAntigos: T, dadosNovos: T): boolean {
        const no = this.buscaElemento(dadosAntigos);
 
        if (no === null) return false;
 
        no.dados = dadosNovos;
        console.log("O elemento foi editado com sucesso");

        return true;
    }
 
    // Remove o primeiro nó da lista - retorna true se removeu, false se lista vazia
    removeInicio(): boolean {
        if (this.inicio === null) {
            console.log("A lista esta vazia");
            return false;
        }
        
        if (this.inicio === this.fim) {
            this.inicio = null; 
            this.fim = null;
            return true;
        }
 
        this.inicio = this.inicio.proximo;
 
        if (this.inicio !== null) {
            this.inicio.anterior = null;
        }
 
        return true;
    }
 
    // Remove o último nó da lista - retorna true se removeu, false se lista vazia
    removeFinal(): boolean {
        if (this.fim === null) {
            console.log("A lista esta vazia");
            return false;
        }
 
        if (this.inicio === this.fim){
            this.inicio = null;
            this.fim = null;
            return true;
        }
 
        this.fim = this.fim.anterior;
 
        if (this.fim !== null) { 
            this.fim.proximo = null;
        }
 
        return true;
    }
 
    // Remove um nó pelo valor, independente da posição - retorna true se removeu, false se não encontrou
    removeMeio(dados: T): boolean {
        if (this.inicio === null) {
            console.log("A lista esta vazia");
            return false;
        }
 
        let atual: Node<T> | null = this.inicio;

        while (atual !== null) {
            if (atual.dados === dados) {
                if (atual.anterior !== null) {
                    atual.anterior.proximo = atual.proximo;
                }
                else {
                    this.inicio = atual.proximo;
                }

                if (atual.proximo !== null) {
                    atual.proximo.anterior = atual.anterior;
                }
                else {
                    this.fim = atual.anterior;
                }

                console.log("Elemento removido: ", dados);
                return true;
            }

            atual = atual.proximo;
        }

        console.log("O elemento nao foi encontrado");
        return false;
    }
}

export default ListaDuplamenteEncadeada;