//BIND
/*
function ageName(){

  console.log(this.name)
  console.log(this.age)

}

let pessoas=[
  {
  name:"Ederson",
  age:24 + " years",
  presentation: ageName
  },
  {
  name:"Rafaela",
  age:25+ " years",
  presentation: ageName
  }
]

for(pessoa of pessoas){
  pessoa.presentation()
}

let functionBind = ageName.bind(pessoas[0])
functionBind()
*/

//Arrow
/* Função comm apenas um parametro
let dobro = x => 2 * x

console.log(dobro(10))

*/

//Callback
/*
let users = ["Ederson"]

function add (user){
  users.push(user)
}

function listUsers(insert, userName){
  if (users.includes(userName)){
    console.log(users)
  }else{

    //Callback
    insert(userName)
    //

    console.log(users)
  }
}

listUsers(add,"Laercio")
*/

//Promise
/*
let listOfUsers = ["Ederson"]

function add (user){

  let promise = new Promise(function(resolve, reject){


    setTimeout(()=>{
      listOfUsers.push(user)
      let error = false

      if(!error){
        resolve()
      }else{
        reject({msg: "errroorororroor"})
      }

    },1000)

  })

  return promise

}

function listUsers(){

  console.log(listOfUsers)

}

add("Laercio")
  .then(listUsers)
*/


//Async Await
/*
let listOfUsers = ["Ederson"]

function add (user){

  let promise = new Promise(function(resolve, reject){


    setTimeout(()=>{
      listOfUsers.push(user)
      let error = false

      if(!error){
        resolve()
      }else{
        reject({msg: "errroorororroor"})
      }

    },1000)

  })

  return promise

}

function listUsers(){

  console.log(listOfUsers)

}

async function assimEmaisFacil(){
  await add("Rafaela")
  listUsers()
}

assimEmaisFacil()
*/

//Filter
/*
function criarAluno(nome,idade){
  return{nome,idade}
}

let pessoas = [
  criarAluno("Laercio",54),
  criarAluno("Maria",55),
  criarAluno("Ederson",24),
  criarAluno("Rafaela",25)
]
function menor(pessoas){
  return pessoas.idade<30
}
console.log(pessoas.filter(menor))
*/

//Map
/*
function criarAluno(nome, idade) {
  return { nome, idade }
}

let pessoas = [
  criarAluno("Laercio", 54),
  criarAluno("Maria", 55),
  criarAluno("Ederson", 24),
  criarAluno("Rafaela", 25)
]

function pessoasMaisVelhas(pessoas) {
  return criarAluno(pessoas.nome, pessoas.idade + 5)
}

let novoArray = pessoas.map(pessoasMaisVelhas)
*/

//Reduce
/*
function criarAluno(nome, idade) {
  return { nome, idade }
}

let pessoas = [
  criarAluno("Laercio", 54),
  criarAluno("Maria", 55),
  criarAluno("Ederson", 24),
  criarAluno("Rafaela", 25)
]

let todosNomes = (total, pessoas) => {
  return total + pessoas.nome + ", "
}

console.log(pessoas.reduce(todosNomes, ""))
*/

// Desafio
/*
function criarAluno(nome, idade) {
  return { nome, idade }
}

let pessoas = [
  criarAluno("Laercio", 54),
  criarAluno("Maria", 55),
  criarAluno("Ederson", 24),
  criarAluno("Rafaela", 25)
]

function pessoasMaisVelhas(pessoas) {
  return criarAluno(pessoas.nome, pessoas.idade + 5)
}

let novoArrayUsandoMap = pessoas.map(pessoasMaisVelhas)

let novoArrayDesafio = []
let desafio = function desafio(pessoas) {
  for (pessoa of pessoas) {
    let arr = {
      nome: pessoa.nome,
      idade: pessoa.idade + 5
    }
    novoArrayDesafio.push(arr)
  }
  return novoArrayDesafio
}

console.log(novoArrayUsandoMap)
console.log(desafio(pessoas))

let todosNomes = (total, pessoas) => {
  return total + pessoas.idade
}

console.log(pessoas.reduce(todosNomes, 0))

function desafioReduce(pessoas) {
  let todos = 0
  for (pessoa of pessoas) {
    todos += pessoa.idade
  }

  console.log(todos)
}

desafioReduce(pessoas)
*/

//Fetch
/*
let url = "https://api.exchangeratesapi.io/latest?base=USD&symbols=BRL"
let valorDolar
fetch(url)
  .then((resp) => {
    return resp.json()
  })
  .then((date) => {
    valorDolar = date.rates.BRL
    console.log(valorDolar)
  })



function buscarCEP() {
  let digitaCEP = document.getElementById("CEP")
  let CEP = digitaCEP.value
  let p = document.querySelector("p")

  let urlCorreio = `https://viacep.com.br/ws/${CEP}/json/`

  fetch(urlCorreio)
    .then(resp => resp.json())
    .then(d => {
      let rua = d.logradouro
      let cidade = d.localidade
      let bairro = d.bairro
      let estado = d.uf
      let cep = d.cep

      p.innerHTML = `<p> rua: ${rua} </p>
                      <p> cidade: ${cidade} </p>
                      <p> bairro: ${bairro} </p>
                      <p> estado: ${estado} </p>
                      <p> cep: ${cep} </p>`
    })
}
*/
