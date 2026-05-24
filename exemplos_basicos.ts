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
const soma = (a: number, b: number): number => a + b;

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
console.log(`Soma 5 + 3 = ${soma(5, 3)}`);

console.log("\n=== CONDICIONAIS ===");
verificaIdade(10);
verificaIdade(25);
verificaIdade(70);
console.log(`Dia 3: ${getTipoDia(3)}`);
console.log(`Dia 7: ${getTipoDia(7)}`);

console.log("\n=== LOOPS ===");
exemplosLoops();