// ============================================================
//  SINTAXE BÁSICA
// ============================================================
 
const nome: string = "TypeScript";
const versao: number = 5.0;
const ativo: boolean = true;
 
const linguagens: string[] = ["TypeScript", "JavaScript", "Python"];
const coordenada: [number, number] = [10, 20];
 
enum Status {
  Ativo = "ATIVO",
  Inativo = "INATIVO",
}
 
interface Pessoa {
  nome: string;
  idade: number;
  email?: string;
}
 
function identidade<T>(valor: T): T {
  return valor;
}
 
console.log(`\nSintaxe básica:`);
console.log(`Nome: ${nome}, Versão: ${versao}, Ativo: ${ativo}`);
console.log(`Linguagens: ${linguagens.join(", ")}`);
console.log(`Status: ${Status.Ativo}`);
console.log(`Genérico: ${identidade<number>(42)}`);

// ============================================================
//  EXEMPLOS BÁSICOS
// ============================================================
const message_hello: string = "Hello, World!";
console.log(message_hello);

// 1. Funçoes
function saudacao(nome: string): string {
    return `Olá, ${nome}!`;
}

// Função com parâmetro opcional
function boasVindas(nome: string, sobrenome?: string): string {
    if (sobrenome) {
        return `Bem-vindo, ${nome} ${sobrenome}`;
    }
    return `Bem-vindo, ${nome}`;
}

// Função arrow
const soma_val = (a: number, b: number): number => a + b;

// 2. CONDICIONAIS
function verificaIdade(idade: number): void {
    if (idade < 12) {
        console.log("Criança");
    } else if (idade < 18) {
        console.log("Adolescente");
    } else if (idade < 60) {
        console.log("Adulto");
    } else {
        console.log("Idoso");
    }
}

// Switch
function getTipoDia(dia: number): string {
    switch (dia) {
        case 1: case 2: case 3: case 4: case 5:
            return "Dia útil";
        case 6: case 7:
            return "Fim de semana";
        default:
            return "Dia inválido";
    }
}

// 3. LOOPS
function exemplosLoops(): void {
    // for tradicional
    console.log("Loop for:");
    for (let i = 1; i <= 5; i++) {
        console.log(`  i = ${i}`);
    }

    // while
    console.log("Loop while:");
    let contador = 1;
    while (contador <= 3) {
        console.log(`  contador = ${contador}`);
        contador++;
    }

    // for...of (arrays)
    const frutas = ["maçã", "banana", "laranja"];
    console.log("Loop for...of:");
    for (const fruta of frutas) {
        console.log(`  fruta: ${fruta}`);
    }

    // forEach
    console.log("forEach:");
    frutas.forEach((fruta, index) => {
        console.log(`  ${index}: ${fruta}`);
    });
}

// EXECUÇÃO DOS EXEMPLOS
console.log("=== FUNÇÕES ===");
console.log(saudacao("Maria"));
console.log(boasVindas("João"));
console.log(boasVindas("Ana", "Silva"));
console.log(`Soma 5 + 3 = ${soma_val(5, 3)}`);

console.log("\n=== CONDICIONAIS ===");
verificaIdade(10);
verificaIdade(25);
verificaIdade(70);
console.log(`Dia 3: ${getTipoDia(3)}`);
console.log(`Dia 7: ${getTipoDia(7)}`);

console.log("\n=== LOOPS ===");
exemplosLoops();

// ============================================================
//  LISTA
// ============================================================
// ESTRUTURA DO NÓ
class No<T> {
    dados: T;                   // Valor armazenado
    proximo: No<T> | null;    // Ponteiro para o próximo nó
    anterior: No<T> | null;   // Ponteiro para o nó anterior

    // Inicialização do nó
    constructor(dados: T) {
        this.dados = dados;     // Armazena o dado recebido dentro do nó
        this.proximo = null;    // No início não aponta para ninguém
        this.anterior = null;   // No início não aponta para ninguém
    }
}

class ListaDuplamenteEncadeada<T> {
    private inicio: No<T> | null;     // Primeiro nó
    private fim: No<T> | null;        // Último nó

    // Inicializa a lista vazia (equivalente ao cria_lista())
    constructor() {
        this.inicio = null;
        this.fim = null;
    }

    // Insere um novo nó no início da lista - retorna true se inseriu com sucesso
    inserirInicio(dados: T): boolean {
        // Cria novo nó
        const no = new No(dados);

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
        const no = new No(dados);

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

        let atual: No<T> | null = this.inicio;

        while (atual !== null) {
            console.log(atual.dados);
            atual = atual.proximo;
        }
    }
    
    // Busca um elemento na lista pelo valor - retorna o nó encontrado ou null se não existir
    buscaElemento(dados: T): No<T> | null {
        if (this.inicio === null) {
            console.log("A lista está vazia");
            return null;
        }

        let atual: No<T> | null = this.inicio;

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
 
        let atual: No<T> | null = this.inicio;

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

// ============================================================
//  TESTES DAS FUNÇÕES RELACIONADAS A LISTA
// ============================================================
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
console.log("\n==== LISTA COMPLETA ====");
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