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
