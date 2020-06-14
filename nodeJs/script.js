// let a = 10;
// let b = 100;
// let c = a + b;
// console.log(c);

// Argumentos

//process.argv retorna os argumentos que eu passo na hora de chamar o node
//o primeiro e o segundo são strings por isso que eu os ignoro com slice e pego do segundo em diante
let args = process.argv.slice(2)

//Importando o objeto calc  
let calc = require("./calc.js")
let a = Number(args[1]);
let b = Number(args[2]);
let c

if (args[0] == "s") {
  c = calc.soma(a, b)
} else if (args[0] == "m") {
  c = calc.mult(a, b)
} else {
  c = "Opção invalida"
}

console.log(c);
