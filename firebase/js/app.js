// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCco3z2RAMG0HbiP8NqabYIR0sRcBLFX0A",
  authDomain: "colegio-1bbde.firebaseapp.com",
  databaseURL: "https://colegio-1bbde.firebaseio.com",
  projectId: "colegio-1bbde",
  storageBucket: "colegio-1bbde.appspot.com",
  messagingSenderId: "345288311207",
  appId: "1:345288311207:web:92886734f09526b6fbf682"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();

console.log(firebase);
db.collection("turmaA").get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log(doc);
    })
  });


