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

function handleFile(req, res, callback) {
  let path = url.parse(req.url).pathname;

  if (path == "" || path == "/") {
    path = "/index.html";
  }
  let fileName = `.${path}`;

  fs.readFile(fileName, (error, data) => {
    if (error) {
      if (callback) {
        if (!callback(req, res)) {
          res.writeHead(404, { "Content-Type": "text/plain" });
          res.end("404 - Not Found");
        }
      }
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    }
  });
}

function handleRequest(req, res) {
  let path = url.parse(req.url).pathname;
  let met = req.method;
  console.log(met);
  if (met == "PUT") {
    res.writeHead(404, { "Content-Type": "text/plain" });
  }
  if (path == "/test") {
    res.end("Teste");
    return true;
  }
  return false;
}

http
  .createServer((request, response) => {
    handleFile(request, response, handleRequest);
  })
  .listen(3000, (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Servidor rodando na porta 3000");
    }
  });
