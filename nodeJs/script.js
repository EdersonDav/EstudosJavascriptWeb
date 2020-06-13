// let a = 10;
// let b = 100;
// let c = a + b;
// console.log(c);

// Argumentos

//process.argv retorna os argumentos que eu passo na hora de chamar o node
//o primeiro e o segundo são strings por isso que eu os ignoro com slice e pego do segundo em diante
let args = process.argv.slice(2)

let a = Number(args[0]);
let b = Number(args[1]);

let c = (a, b) => {
  return a + b
}

console.log(c(a, b));
