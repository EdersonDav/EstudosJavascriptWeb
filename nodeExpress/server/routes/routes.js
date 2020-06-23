const express = require("express");
const routs = express.Router();

let alunos = [
  { id: 0, nome: "Jose" },
  { id: 1, nome: "Ana" },
  { id: 2, nome: "Pedro" },
  { id: 3, nome: "Maria" },
];

//Return for params
routs.get("/alunos/:id", (req, res, next) => {
  console.log(req.params.id);
  let id = req.params.id;
  let alumn;
  alunos.forEach((al) => {
    if (al.id == id) {
      alumn = al;
    }
  });
  if (alumn) {
    res.json(alumn);
  } else {
    next();
  }
});

//Return for query
routs.get("/alunos", (req, res, next) => {
  console.log(req.query.id);
  let id = req.query.id;
  let alumn;
  alunos.forEach((al) => {
    if (al.id == id) {
      alumn = al;
    }
  });
  if (alumn) {
    res.json(alumn);
  } else {
    next();
  }
});

//Return for body
routs.get("/alunos", (req, res, next) => {
  console.log(req.body.id);
  let id = req.body.id;
  let alumn;
  alunos.forEach((al) => {
    if (al.id == id) {
      alumn = al;
    }
  });
  if (alumn) {
    res.json(alumn);
  } else {
    res.send("Alumn not found");
  }
});

//Return all alumn
routs.get("/alunos/all", (req, res) => {
  res.json(alunos);
});

module.exports = routs;
