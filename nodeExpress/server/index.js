const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

// //File static in folder client, if in client contains index server return index else server not return
// app.use("/getmethod", express.static(path.resolve(__dirname, "client")));

// // app.get("/", (req, res) => {
// //   res.send("Hello World GET");
// // });
// // app.post("/", (req, res) => {
// //   res.send("Hello World POST");
// // });
// // app.put("/", (req, res) => {
// //   res.send("Hello World PUT");
// // });
// // app.delete("/", (req, res) => {
// //   res.send("Hello World DELETE");
// // });

// //Middleware
// //hello é um middleware que retorna um hello world
// let hello = (req, res) => {
//   res.send("Hello World");
// };

// //consoleMehod é um middleware que escreve no console o metodo que está sendo requisitado
// let consoleMehod = (req, res, next) => {
//   console.log(req.method);
//   //O next serve para que o middleware faço o que tem que fazer e passe para o proximo middleware
//   next();
//   //Se eu quiser apontar um erro eu posso passar um parametro para o next
//   //Esse next com parametro retornará um erro e não irá para o proximo middleware
//   //next("Erro");
// };

// //consoleBody é um middleware que escreve no console o corpo da requisição
// let consoleBody = (req, res, next) => {
//   console.log(req.body);
//   next();
// };

// //O use é usado quando a gente quer sempre passar por um middleware, independente do metodo que for utilizado
// //Esse middleware bodyParser trabalha a requisição para uma forma visivel
// app.use("/", bodyParser.json());
// app.use("/", consoleBody);

// app.get("/", hello);
// app.post("/", hello);

// app.use(bodyParser.urlencoded());

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

// app.get("/alunos", (req, res) => {
//   res.json(JSON.stringify(alunos));
// });

//Usando o body
// app.get("/aluno", (req, res) => {
//   console.log(req.body);
//   let result = Number(req.body.id);
//   let aluno;
//   alunos.forEach((al) => {
//     if (result == al.id) {
//       aluno = al;
//     }
//   });
//   console.log(aluno);
//   res.json(aluno);
// });

//Usando os params da url
// app.get("/aluno/:id", (req, res) => {
//   console.log(req.params.id);
//   let result = Number(req.params.id);
//   let aluno;
//   alunos.forEach((al) => {
//     if (result == al.id) {
//       aluno = al;
//     }
//   });
//   console.log(aluno);
//   res.json(aluno);
// });

const routs = require("./routes/routes.js");

app.use(bodyParser.urlencoded());

app.use("/", routs);

app.get("/", (req, res) => {
  res.send("Hello World");
});

//Init server
app.listen(PORT, () => {
  console.log(`Server runing on port ${PORT}`);
});
