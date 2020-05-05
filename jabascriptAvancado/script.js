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
