//alert("Hello World")

//Console
//console.log("Hello World");

//Variaveis
/*var a;

a = "Hello World";
b = "Ola Mundo";

b = a;

console.log(b);*/

//Tipos de dados
/*
var a = "Sting";

var b = 1;

console.log(a);
console.log(b);

console.log("1"+"1");
console.log(1+1);
*/

//Operadores

/*var a = 10;
var b = 15;

var c = 30;
 c++;
console.log(c); */  

//Atribuiçãoes
/*
var a = 30;

a+=2;

console.log(a);*/

//Operadores comarativos
/*
var a = 3;
var b = 3;

console.log(a === b);
*/

//Operadores logicos
/*var a = true;
var b = false;
console.log(a && b);
console.log(a || b);*/

//Estuturas condicionais
//IF ELSE
/*
var idade = 19;

if(idade >= 18){

    console.log("pode");

}else{

    console.log("não pode");

}*/

//SWITCH
/*
var nota1 = 10, nota2 = 8;

var media = (nota1 + nota2)/2;

var conceito = "";

if(media >= 8 ){
    conceito = "Otimo";
}else if(media >= 6.5 ){
    conceito = "Bom";
}else{
    conceito = "Ruim";
}

console.log(media);
console.log(conceito);

var final = "";

switch(conceito){
    case "Otimo":
        final = "Parabéns"
    break;
    case "Bom":
        final = "Legal"
    break;
    default:
        final = "Precisa melhorar"
}

console.log(final);
*/

//FOR WHILE
/*
for(var i = 0 ; i <= 5 ; i++){
    console.log(i)
}

var j = 0;

while(j <=5){
    console.log(j);
    j++;
}*/

//Arrey
/*
var alunos = new Array();
var vetor = [];
console.log(vetor)

alunos = ["Ederson", "Maria", "Ana", "Pedro", "Rafaela"];
alunos[5] = "José"

for(var aluno of alunos){

    console.log(aluno);
}*/

//Funções
/*
var lo =  (item) => {
    console.log(item)
}

lo("Hello World")

function media (n1,n2){
    var media = (n1 + n2) / 2

    return media;
}

var resultado = media(10,8)

lo(resultado)

function saudacao(){
    return "Oi"
}

var oi = saudacao;

lo(oi());*/

//Tudo até aqui 
/*
var nomes = ["Ederson", "Maria", "Ana", "Pedro"]
var n1 = [10,9,8.5,7.5]
var n2 = [9,7,5,7]

var media = (n1,n2) =>{
    return (n1 + n2)/2
}

function status (nota) {
    if(nota >=7){
        return "Aprovado"
    }else{
        return "Reprovado"
    }
}

for(var i in nomes){
    var notaFinal = media(n1[i],n2[i])
    console.log(`${nomes[i]} - ${n1[i]} - ${n2[i]} - ${notaFinal} - ${status(notaFinal)}`)
}
*/

//Objeto
/*
var pessoa = {
    nome:"Ederson",
    idade:24,
    altura:1.82
}

pessoa.peso = 100

pessoa["profissão"] = "Desenvolvedor"

console.log(pessoa)
*/

//Objetos e métodos
/*
var aluno = {
    nome:"Pedro",
    notas:[10,5],
    media:calcMedia
}

var aluno1 = {
    nome:"Ana",
    notas:[10,10],
    media:calcMedia
}

function calcMedia(){
    return (this.notas[0] + this.notas[1])/2
}

console.log(aluno.nome)
console.log(aluno.media())

console.log(aluno1.nome)
console.log(aluno1.media())*/

//Objetos e construtores
/*
function construtor (nome, idade, peso, sobrenome){
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    this.sobrenome = sobrenome;

    this.nomeCompleto = function (){
        return this.nome + " " + this.sobrenome 
    }
}

var ederson = new construtor("Ederson",24,100,"Silva")

console.log(ederson.nomeCompleto())*/

//Datas
/*
var d = new Date(1608999999999);
console.log(d.getFullYear())*/