/*
=========================================================
LISTA DUPLAMENTE ENCADEADA EM TYPESCRIPT
=========================================================

Uma lista duplamente encadeada é uma estrutura onde:

Cada nó possui:
- um valor
- referência para o próximo nó
- referência para o nó anterior

Exemplo visual:

NULL <- [10] <-> [20] <-> [30] -> NULL

=========================================================
*/


/*
=========================================================
CLASSE NODE
=========================================================

A classe Node representa UM ÚNICO NÓ da lista.

Cada nó guarda:
- valor
- próximo nó
- nó anterior
*/
class Node<T> {

  /*
  -------------------------------------------------------
  valor
  -------------------------------------------------------

  Guarda o dado armazenado no nó.

  O <T> significa GENERIC.
  Isso permite usar qualquer tipo:
  - number
  - string
  - boolean
  - objetos
  etc.
  */
  valor: T;

  /*
  -------------------------------------------------------
  proximo
  -------------------------------------------------------

  Guarda a referência para o próximo nó.

  Pode ser:
  - outro Node
  - null

  null significa:
  "não existe próximo"
  */
  proximo: Node<T> | null;

  /*
  -------------------------------------------------------
  anterior
  -------------------------------------------------------

  Guarda a referência para o nó anterior.

  Também pode ser:
  - outro Node
  - null
  */
  anterior: Node<T> | null;

  /*
  -------------------------------------------------------
  CONSTRUCTOR
  -------------------------------------------------------

  É executado quando criamos um novo nó.
  */
  constructor(valor: T) {

    /*
    Guarda o valor recebido dentro do nó.
    */
    this.valor = valor;

    /*
    Inicialmente o nó não aponta para ninguém.
    */
    this.proximo = null;

    /*
    Inicialmente também não possui anterior.
    */
    this.anterior = null;
  }
}



/*
=========================================================
CLASSE DA LISTA
=========================================================

Essa classe controla toda a lista.

Ela sabe:
- quem é o primeiro nó
- quem é o último nó
- inserir
- remover
- percorrer
*/
class ListaDuplamenteEncadeada<T> {

  /*
  -------------------------------------------------------
  inicio
  -------------------------------------------------------

  Guarda o PRIMEIRO nó da lista.
  */
  inicio: Node<T> | null;

  /*
  -------------------------------------------------------
  fim
  -------------------------------------------------------

  Guarda o ÚLTIMO nó da lista.
  */
  fim: Node<T> | null;

  /*
  -------------------------------------------------------
  CONSTRUCTOR
  -------------------------------------------------------

  Quando a lista nasce:
  - ela está vazia
  - não existe início
  - não existe fim
  */
  constructor() {

    this.inicio = null;

    this.fim = null;
  }



  /*
  =========================================================
  MÉTODO ADICIONAR
  =========================================================

  Adiciona um novo elemento NO FINAL da lista.
  */
  adicionar(valor: T): void {

    /*
    Cria um novo nó.
    */
    const novo = new Node(valor);

    /*
    -------------------------------------------------------
    VERIFICA SE A LISTA ESTÁ VAZIA
    -------------------------------------------------------
    */
    if (this.inicio === null) {

      /*
      Se estiver vazia:
      - o novo nó será o início
      - o novo nó será o fim
      */

      this.inicio = novo;

      this.fim = novo;

      /*
      Encerra o método.
      */
      return;
    }

    /*
    -------------------------------------------------------
    LIGAÇÕES ENTRE NÓS
    -------------------------------------------------------
    */

    /*
    O anterior do novo nó será o antigo fim.
    */
    novo.anterior = this.fim;

    /*
    Se existir um fim...
    */
    if (this.fim !== null) {

      /*
      O próximo do antigo fim será o novo nó.
      */
      this.fim.proximo = novo;
    }

    /*
    Atualiza o fim da lista.
    */
    this.fim = novo;
  }



  /*
  =========================================================
  MÉTODO IMPRIMIR
  =========================================================

  Percorre a lista do começo para o final.
  */
  imprimir(): void {

    /*
    Começamos pelo início da lista.
    */
    let atual = this.inicio;

    console.log("======== LISTA NORMAL ========");

    /*
    Enquanto existir um nó...
    */
    while (atual !== null) {

      /*
      Mostra o valor do nó atual.
      */
      console.log(atual.valor);

      /*
      Anda para o próximo nó.
      */
      atual = atual.proximo;
    }
  }



  /*
  =========================================================
  MÉTODO IMPRIMIR REVERSO
  =========================================================

  Percorre a lista do fim para o início.
  */
  imprimirReverso(): void {

    /*
    Começamos pelo fim.
    */
    let atual = this.fim;

    console.log("======== LISTA REVERSA ========");

    /*
    Enquanto existir um nó...
    */
    while (atual !== null) {

      /*
      Mostra o valor atual.
      */
      console.log(atual.valor);

      /*
      Anda para trás.
      */
      atual = atual.anterior;
    }
  }



  /*
  =========================================================
  MÉTODO REMOVER
  =========================================================

  Remove um elemento da lista.
  */
  remover(valor: T): void {

    /*
    Começa procurando pelo início.
    */
    let atual = this.inicio;

    /*
    Percorre toda a lista.
    */
    while (atual !== null) {

      /*
      Verifica se encontrou o valor.
      */
      if (atual.valor === valor) {

        /*
        ---------------------------------------------------
        AJUSTANDO O NÓ ANTERIOR
        ---------------------------------------------------
        */

        /*
        Se existir nó anterior...
        */
        if (atual.anterior !== null) {

          /*
          O próximo do anterior
          passa a apontar para o próximo do atual.
          */
          atual.anterior.proximo = atual.proximo;

        } else {

          /*
          Se NÃO existe anterior,
          então estamos removendo o início.
          */

          this.inicio = atual.proximo;
        }



        /*
        ---------------------------------------------------
        AJUSTANDO O PRÓXIMO NÓ
        ---------------------------------------------------
        */

        /*
        Se existir próximo...
        */
        if (atual.proximo !== null) {

          /*
          O anterior do próximo
          passa a apontar para o anterior do atual.
          */
          atual.proximo.anterior = atual.anterior;

        } else {

          /*
          Se NÃO existe próximo,
          estamos removendo o último nó.
          */

          this.fim = atual.anterior;
        }

        /*
        Elemento removido.
        */
        console.log(`Valor ${valor} removido.`);

        return;
      }

      /*
      Vai para o próximo nó.
      */
      atual = atual.proximo;
    }

    /*
    Se chegou aqui,
    o valor não foi encontrado.
    */
    console.log(`Valor ${valor} não encontrado.`);
  }
}



/*
=========================================================
TESTANDO A LISTA
=========================================================
*/

/*
Cria uma nova lista de números.
*/
const lista = new ListaDuplamenteEncadeada<number>();



/*
=========================================================
ADICIONANDO ELEMENTOS
=========================================================
*/

lista.adicionar(10);

lista.adicionar(20);

lista.adicionar(30);

lista.adicionar(40);



/*
=========================================================
IMPRIMINDO NORMAL
=========================================================
*/

lista.imprimir();



/*
=========================================================
IMPRIMINDO REVERSO
=========================================================
*/

lista.imprimirReverso();



/*
=========================================================
REMOVENDO ELEMENTO
=========================================================
*/

lista.remover(20);



/*
=========================================================
IMPRIMINDO NOVAMENTE
=========================================================
*/

lista.imprimir();



/*
=========================================================
ESTRUTURA FINAL
=========================================================

Depois da remoção do 20:

NULL <- [10] <-> [30] <-> [40] -> NULL

=========================================================
*/
