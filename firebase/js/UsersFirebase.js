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

// let auth = firebase.auth()
// let email = "Testn@testn.com"
// let password = "123555"

// //Criando um novo usuario
// function createUser(email,password){
//   auth.createUserWithEmailAndPassword(email,password).then(doc=>{
//     console.log(doc)
//   }).catch((e)=>{
//     console.log(e)
//   })
// }

// //Logando com um usuario
// function login(email, password){

//   //Persistencia de dados
//   //LOCAL => fica logado em todas as janelas
//   //SESSION => só para aquela janela especifica
//   //NONE => Quando atualizar a janela já sai 
//   //auth.setPersistence(firebase.auth.Auth.Persistence.>=Colocar o tipo de persistencia<=)
//   auth.setPersistence(firebase.auth.Auth.Persistence.NONE).then(()=>{
//     auth.signInWithEmailAndPassword(email,password)
//     .then(login=>{
//       console.log(auth.currentUser)
//     }).catch(e=>{
//       console.log(e);
      
//     })
//   }).catch(er=>{
//     console.log(er);
    
//   })
  
// }

// //Verifica quem esta logado
// // let userCurrent = auth.currentUser;
// // console.log(userCurrent);

// //Observador para ver quando o usuario fica logado
// function observador(){
//   auth.onAuthStateChanged(user=>{
//     if(user){
//       console.log(user);
      
//     }else{
//       console.log(("no user"));
      
//     }
//   })
// }

// //Deslogando com o usuario
// function logout(){
//   auth.signOut().then().catch(e=>{
//     console.log(e);
    
//   })
// }

// //Fazer logout depois de dois segundos para desparar o observador(onAuthStateChanged) quando logar e quando sair 
// //setTimeout(logout, 2000);

// //Fazendo login auterando a persistencia dos dados
// //setTimeout(login(email, password), 2000);
// observador()
