var firebaseConfig = {
  apiKey: "AIzaSyD3G3_gRHLJiyUp_75LeAXWT3qSk7zc5VE",
  authDomain: "storagebr-11dde.firebaseapp.com",
  databaseURL: "https://storagebr-11dde.firebaseio.com",
  projectId: "storagebr-11dde",
  storageBucket: "storagebr-11dde.appspot.com",
  messagingSenderId: "509925889480",
  appId: "1:509925889480:web:d59d5de81090d5fd699cfd",
  measurementId: "G-ZK0WBM8QM6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const storage = firebase.storage();

//Criando referencia para o storage
const ref = storage.ref("/images");

//Listando os arquivos da pasta images do firebase
// ref.listAll().then(res => {
//   console.log(res.items);
//   //Pegando a url da imgem 
//   res.items[0].getDownloadURL().then(url => {
//     console.log(url)
//   });
// })

//Criando um referencia filha
// const refFile = ref.child("h.jpg")
// refFile.getDownloadURL().then(url => {
//   console.log(url)
// });

// //Pegando o arquivo pai do arquivo que eu pesquisei
// const fileParent = refFile.parent;
// fileParent.listAll().then(res => {
//   console.log(res.items);

// })

// //O root manda para apasta raiz
// ref.root.listAll().then(res => {
//   console.log(res.items);

// })

//Pegando o nome do arquivo 
// console.log(ref.name);

// //Pegando o caminho completo
// console.log(ref.fullPath);

//Fazendo Upload 

const fileInput = document.getElementById("file")

fileInput.addEventListener("change", (e) => {
  //Pegando o arquivo do upload
  const file = e.target.files[0];

  //Mandando para o firebase
  ref.child(file.name).put(file).then((snapshot) => {
    console.log(snapshot)
  })
})
