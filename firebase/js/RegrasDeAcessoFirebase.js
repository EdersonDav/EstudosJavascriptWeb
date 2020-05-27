// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBran0xXdut8OdU3r-Oy_Ttiv5OF03vXZs",
  authDomain: "colegio-c0abc.firebaseapp.com",
  databaseURL: "https://colegio-c0abc.firebaseio.com",
  projectId: "colegio-c0abc",
  storageBucket: "colegio-c0abc.appspot.com",
  messagingSenderId: "936630945602",
  appId: "1:936630945602:web:725198002a696bae922adb",
  measurementId: "G-KCJQBKSF0D"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const lista = "lista"
let db = firebase.firestore();

let auth = firebase.auth()
let email = "Testn@testn.com"
let password = "123555"

function lerLista(){
  db.collection(lista).get()
  .then(snapshot=>{
    snapshot.forEach(item=>{
      console.log(item.data())
    })
  }).catch(er=>{
    console.log(er)
  })
}

function adicionarItemNaLista(nome){
  db.collection(lista).add({
    item: nome
  }).then(()=>{
    console.log("item "+ nome +" adicionado");
  }).catch((er)=>{
    console.log(er);
    
  })
}

function setItem(nome,id){
  db.collection(lista).doc(id).set({
    Item: nome
  }).then(()=>{
    console.log("Item setado")
  }).catch((er)=>{
    console.log(er)
  })
}

//Logando com um usuario
function login(email, password){

  auth.signInWithEmailAndPassword(email,password)
  .then(login=>{
    console.log(auth.currentUser)
    //Adicionando o item depois de logado
    adicionarItemNaLista("Maionese")
  }).catch(e=>{
    console.log(e);
    
  })
  
}
//Logando para depois adicionar o item
//login(email, password)

//Firebase configuração 

//Permitindo ler mas não escrever 
// rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read: if true;
//       allow write: if false;
//     }
//   }
// }

//Permitindo ler mas escrever só se estiver logado 
// rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read: if true;
//       allow write: if request.auth.uid != null;
//     }
//   }
// }

//Permitindo ler mas escrever só se estiver logado com um usuario especifico
// rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read: if true;
//       allow write: if request.auth.uid == 'K9NMwtvCVOaOYNrwEQWLDVe7QpS2';
//     }
//   }
// }
