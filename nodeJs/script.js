// let a = 10;
// let b = 100;
// let c = a + b;
// console.log(c);

//process.argv retorna os argumentos que eu passo na hora de chamar o node
//o primeiro e o segundo são strings por isso que eu os ignoro com slice e pego do segundo em diante
// let args = process.argv.slice(2)

//Importando o objeto calc  
// let calc = require("./calc.js")
// let a = Number(args[1]);
// let b = Number(args[2]);
// let c

// if (args[0] == "s") {
//   c = calc.soma(a, b)
// } else if (args[0] == "m") {
//   c = calc.mult(a, b)
// } else {
//   c = "Opção invalida"
// }
// console.log(c);

//Importando o modulo de arquivos do node
// let fs = require("fs")

//writeFile é uma função que cria um arquivo 
// fs.writeFile(
//   'NomeDoArquivo.txt',//Nome e tipo do arquivo
//   'Escrevendo dentro do arquivo',//Texto escrito no arquivo
//   (error) => {//Função que retornaa um erro se não der certo
//     //Se der erro
//     if (error) {
//       throw error
//     } else {
//       console.log("Arquivo criado com sucesso");
//     }
//   }
// )

//appendFile é uma função que concatena um novo texto no arquivo
// fs.appendFile(
//   'NomeDoArquivo.txt',//O arquivo onde vai ser adicionado o texto
//   ' Mais texto no arquivo',//Adicionando texto no arquivo
//   (error) => {//Função que retornaa um erro se não der certo
//     //Se der erro
//     if (error) {
//       throw error
//     } else {
//       console.log("Texto adicionado com sucesso");
//     }
//   }
// )

//unlink é uma função que apaga o arquivo
// fs.unlink(
//   'NomeDoArquivo.txt',//O arquivo que sera apagado
//   (error) => {//Função que retornaa um erro se não der certo
//     //Se der erro
//     if (error) {
//       throw error
//     } else {
//       console.log("Arquivo apagado com sucesso");
//     }
//   }
// )

//rename é uma função que renomeia o arquivo
// fs.rename(
//   'NomeDoArquivo.txt',//O arquivo que sera renomeado
//   'NovoNomeDoArquivo.pdf',//O novo nome 
//   (error) => {//Função que retornaa um erro se não der certo
//     //Se der erro
//     if (error) {
//       throw error
//     } else {
//       console.log("Arquivo renomeado com sucesso");
//     }
//   }
// )

//readFile é uma função que lê o arquivo
// fs.readFile(
//   'NovoNomeDoArquivo.pdf',//O novo nome 
//   "UTF8",//Passando o tipo do arquivo que eu quero que retorne se não ele retorna Buffer
//   (error, data) => {//Função que retorna um erro se não der certo ou retorna o que foi lido
//     //Se der erro
//     if (error) {
//       throw error
//     } else {
//       //Se não der o erro =, o data é oq esta escrito no arquivo
//       console.log(data);
//     }
//   }
// )

let args = process.argv.slice(2)
let fs = require("fs")

let fileName = args[0]

fs.readFile(fileName, "UTF8", (error, data) => {
  if (error) throw error;
  fs.writeFile("Uppercase" + fileName, data.toUpperCase(), (error) => {
    if (error) throw error;
    console.log("Novo arquivo criado com sucesso");

  })
})
