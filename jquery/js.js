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
