// // Your web app's Firebase configuration
// var firebaseConfig = {
//   apiKey: "AIzaSyBran0xXdut8OdU3r-Oy_Ttiv5OF03vXZs",
//   authDomain: "colegio-c0abc.firebaseapp.com",
//   databaseURL: "https://colegio-c0abc.firebaseio.com",
//   projectId: "colegio-c0abc",
//   storageBucket: "colegio-c0abc.appspot.com",
//   messagingSenderId: "936630945602",
//   appId: "1:936630945602:web:725198002a696bae922adb",
//   measurementId: "G-KCJQBKSF0D"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// const turma = "turmaA"
// let db = firebase.firestore();

// Pegar todos os dados da coleção 
// db.collection("turmaA").get()
//   .then((snapshot) => {
//     snapshot.forEach((doc) => {
//       let aluno = doc.data()
//       console.log(aluno.nome);

//     })
//   })

// Pegar apenas um dado da coleção turmaA do id GwbcANPuN9ybSRyAjN4T
// let docRef = db.collection("turmaA").doc("GwbcANPuN9ybSRyAjN4T")
// docRef.get().then((doc) => {
//   let aluno = doc.data()
//   console.log(aluno);

// })

// Pegando os dados utilizando o where
// db.collection("turmaA").where("nome", "==", "La").get()
//   .then(snapshot => {
//     snapshot.forEach((doc) => {
//       let aluno = doc.data()
//       console.log(aluno);
//     })

//   })

// Adicionar itens no firebase
// db.collection(turma).add({
//   nome: "Cam",
//   sobrenome: "Arão",
//   notas: {
//     nota1: 10,
//     nota2: 9
//   }
// }).then(doc => {
//   console.log("Documento inserido com sucesso: ", doc)
// }).catch(err => {
//   console.log(err)
// })

// Setando o id e adicionando o arquivo ou modificando um arquivo ELE SOBRESCREVE O DADO
// db.collection(turma).doc("NovoAluno").set({
//   nome: "Maio",
//   sobrenome: "Nese",
//   notas: {
//     nota1: 10,
//     nota2: 10
//   }
// }).then(() => {
//   console.log("Documento inserido com sucesso: ")
// }).catch(err => {
//   console.log(err)
// })

// Editando um arquivo ou adicionando campos sem ele sobrescrever o que já existe 
// db.collection(turma).doc("MjCA0T9ZPN3oBc988crf").update({
//   notas: {
//     nota1: 8,
//     nota2: 9
//   }
// })
//   .then(() => {
//     console.log("Documento alterado com sucesso: ")
//   }).catch(err => {
//     console.log(err)
//   })

// Editando arrays sem ele sobrescrever o que já existe 
// db.collection(turma).doc("MjCA0T9ZPN3oBc988crf").update({

//   cidades: firebase.firestore.FieldValue.arrayUnion("Belo Horizonte", "Rio de Janeiro")
//   //Para remover
//   //cidades: firebase.firestore.FieldValue.arrayRemove("Belo Horizonte", "Rio de Janeiro")

// })
//   .then(() => {
//     console.log("Documento alterado com sucesso: ")
//   }).catch(err => {
//     console.log(err)
//   })

// Incrementando no arquivo ja existente 
// db.collection(turma).doc("MjCA0T9ZPN3oBc988crf").update({
//   "notas.nota1": firebase.firestore.FieldValue.increment(1)
// })
//   .then(() => {
//     console.log("Documento alterado com sucesso: ")
//   }).catch(err => {
//     console.log(err)
//   })

// Busca a atualização em tempo real pode ser utilizada para todos os docs ou para um especifio ou no where
// o onSnapshot funciona como um observador do dado 
// db.collection(turma).onSnapshot(snapshot => {

//   snapshot.forEach(doc => {

//     let alunos = doc.data()
//     console.log(alunos);
    
    
//   });

// })

// Apagar um campo 
// db.collection(turma).doc("jtxAhRTKY7I2JJIfIMXC").update({
//   sobrenome: firebase.firestore.FieldValue.delete()
// })
// .then(()=>{
//   console.log("ok");
  
// }).catch((e)=>{
//   console.log("erro",e);
  
// })

// Apagar todo o documento
// db.collection(turma).doc('jtxAhRTKY7I2JJIfIMXC').delete()
// .then(()=>{
//   console.log("ok");
  
// })
// .catch((e)=>{
//   console.log(e);
  
// })
