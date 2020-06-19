// const http = require("http");

// http
//   .createServer((request, response) => {
//     //Cabeçalho da response, 200 = OK, tipo texto puro
//     //response.writeHead(200, { "Content-Type": "text/plain" });

//     //Cabeçalho da response, 200 = OK, tipo texto HTML
//     response.writeHead(200, { "Content-Type": "text/html" });

//     //Mensagem da response
//     response.end("<h1>Hello World</h1>");

//     //Porta 3000
//   })
//   .listen(3000, (error) => {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log("Servidor rodando na porta 3000");
//     }
//   });

const http = require("http");
const url = require("url");
const fs = require("fs");

http
  .createServer((request, response) => {
    let path = url.parse(request.url).pathname;
    if (path == "" || path == "/") {
      path = "/index.html";
    }
    let fileName = `.${path}`;
    fs.readFile(fileName, (error, data) => {
      if (error) {
        response.writeHead(404, { "Content-Type": "text/plain" });
        response.end("404 - Not Found");
      } else {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.end(data);
      }
    });
  })
  .listen(3000, (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Servidor rodando na porta 3000");
    }
  });
