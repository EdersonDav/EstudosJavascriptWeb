import express from "express";
import fs from "fs";
import path from "path";
const app = express();

const users = [
  {
    id: 0,
    name: "Ederson",
    phone: "11 - 123456789",
  },
  {
    id: 1,
    name: "Ederson",
    phone: "11 - 123456789",
  },
  {
    id: 2,
    name: "Ederson",
    phone: "11 - 123456789",
  },
];

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { users });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.listen(5000, () => {
  console.log("Server Runing Port 5000");
});
