//___________________
//Selecionando elementos

// setInterval(() => {
//   $(".titulo").hide()
//   setTimeout(() => {
//     $(".titulo").show()
//   }, 100)
// }, 1000)

// setInterval(() => {
//   document.querySelector(".titulo").style.display = "none"
//   setTimeout(() => {
//     document.querySelector(".titulo").style.display = "block"
//   }, 100)
// }, 1000)

//___________________
//Adicionando eventos

// $(document).mouseleave(() => {
//   console.log("Não saia")
// })

// document.addEventListener("mouseleave", () => {
//   console.log("Não saia")
// })

//_________________
//Animações

// $("#green").mouseenter(() => {
//   $("#green").animate({
//     width: 500,
//     height: 500
//   }, 100)
// })
// $("#green").mouseleave(() => {
//   $("#green").animate({
//     width: 300,
//     height: 300
//   }, 100)
// })

//______________________
//Callbak

// function callBack() {
//   $("#red").show(2000)
// }

// $("#button").click(() => {
//   $("#green").hide(2000, callBack)
// })

//______________________
//Selecionando items filhos

//Pegando apenas o .item2 que é filho da #lista1
//$("#lista1 > .item2").hide()

//O find é possivel capturar os elementos filhos netos e etc, no children só é possivel capturar o filho

//Fazendo a mesma coisa atraves di find
// var lista1 = $("#lista1")
// lista1.find(".item2").hide()

//Pegando todos os elementos filhos da lista 1
// console.log(lista1.children())

//______________________
//Encadeamento
//O jquery sempre retorna o resultado da função 
//sendo o proprio objeto por isso é possivel sempre encadear funções
//let lista1 = $("#lista1").slideUp(2000).slideDown(1000).fadeOut(1000).fadeIn(1000)

//______________________
//Lendo elementos

//Par pegar apenas o texto
// console.log($('#lista1').text())

//Para pegar todo o html
// console.log($('#lista1').html())

//Para pegar de um input
// console.log($('#novo').val())

//Pegando o atributo nome do input
// console.log($('#novo').attr("name"))

//______________________
//Manupulando elementos

//Modificando o texto
// console.log($('h1').text("Lista e compras"))

//Modificando o HTML
// $('#lista1').html('<li class="item1">Item 1</li>')
// //ou 
// let lista = ''
// for(let i = 0; i<=10; i++){
//   lista += `<li class="item${i}">Item ${i}</li>`
// }
// $('#lista1').html(lista)

//Mudando o valor do atributo, mudando o name de novo (que o que está no html) para lista
// console.log($('#novo').attr("name", "lista"))

//Adicionando um atributo no html, adicionando o atributo name nos li's
//console.log($('li').attr("name", "item"))

//Mudando o atributos name dos li's, mas para cada li um nome diferente
// $('li').attr("name", (i,oValue)=>{
//   //O parametro i serve como um contador 
//   //O parametro oValue é o valor antigo dos itens idenpendente do nome deles
//   return oValue+i
// })

//Definindo o tamanho e o type do input
// $('input').attr("maxlength", 5).attr("type", 'password')

//______________________
//Selecionando elementos pelo atributo

//Selecionando elemento 2 pelo atributo key
// $("[key = 2]").fadeOut(2000)
// console.log($("[key = 2]"))


//______________________
//Remover elementos

//Removento a lista toda
// $("#lista1").remove()

//Removendo todos os elementos filhos da lista
// $("#lista1").empty()

//Removento um item especifico da lista
//$("#lista1").find('[key = 2]').remove()

//Removento mais de um item especifico da lista
// $("#lista1").find('[key = 2], [key = 4]').remove()
//ou
// $("li").remove("[key = 2], [key = 4]")

//______________________
//Adicionando elementos sem apagar os que tem

//Guardando o valor antigo em uma variavel e adicionando o novo depois
// let lista1  = $("#lista1")

// let otValue = lista1.html()

// lista1.html(otValue + "<li class='item' > Test </li>")

//Adicionando do jeito mais facil, no final
// $("#lista1").append("<li class='item' > Test </li>")

//Adicionando do jeito mais facil, no inicio
// $("#lista1").prepend("<li class='item' > Test </li>")

//Adicionando depois do fechamento do elemento, no caso ul
// $("#lista1").after("<li class='item' > Test </li>")

//Adicionando antes da abertura do elemento, no caso ul
// $("#lista1").before("<li class='item' > Test </li>")

//______________________
//Editando CSS

//Adicionando a classe
// setTimeout(() => {
//   $('h1').addClass("bg-blue")
// }, 1000);

// //removendo a classe
// setTimeout(() => {
//   $('h1').removeClass("bg-blue")
// }, 2000);

//Utilizando o togglo para fazer a mesma coisa do anterior
// setInterval(() => {
//   $('h1').toggleClass("bg-blue")
// }, 1000);

//Peggando um eleento do css e modificando o valor dele
// $('h1').css("font-size", "26px")
//Mais de um item
// $('h1').css({"font-size": "26px",
//             "background-color": "red"})

//______________________
//Dimensões
// let largura, altura, larguraComPadding, alturaComPadding
// let box = $(".box")

//Pegando os valores
// largura = box.width()
// altura = box.height()
// larguraComPadding = box.innerWidth()
// alturaComPadding = box.innerHeight()
// console.log("largura = ", largura);
// console.log("altura = ", altura);
// console.log("largura com padding = ", larguraComPadding);
// console.log("altura com padding = ", alturaComPadding);

//Alterando o valor
// largura = box.width(200)
// altura = box.height(200)

//______________________
//Elementos irmãos 
// let selected = $("#div3")

//Selecionando todos os irmãos menos o que foi passado no parametro
// console.log(selected.siblings());

//Pegando um irmão especifico
// console.log(selected.siblings("#div5"));

//Pegando os elementos que estão depois do que foi selecionado
// console.log(selected.nextAll())

//Pegando um elemento especifico que está depois do que foi selecionado
// console.log(selected.nextAll("#div5"))

//Pegando só o proximo
// console.log(selected.next())

//Pegando só o antecessor
// console.log(selected.prev())

//Pegando todos os antecessores
// console.log(selected.prevAll())

//Pegando os proximos até o elemento que eu quero
//No caso está pegando um depois da div1 até um antes da div4
// console.log($("#div1").nextUntil("#div4"));

//______________________
//Filter, Last, First e Eq

// let selected = $("div")

//Filtrando todas as divs que tem a classe cinza
// console.log(selected.filter(".cinza"));

//Peganso só o primeiro elemento que tem a classe cinza
// console.log(selected.filter(".cinza").first());

//Peganso só o ultimo elemento que tem a classe cinza
// console.log(selected.filter(".cinza").last());

//Peganso todos os elementos que não tem a classe cinza
// console.log(selected.not(".cinza"));

//Peganso o elemento atravez do index da div
// console.log(selected.eq(8));
