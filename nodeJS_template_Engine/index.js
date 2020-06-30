const express = require("express");
const fs = require("fs");
const app = express();

let user = {
  id: 0,
  name: "Ederson",
  phone: "(11)1111111111",
};
function render(data, obj) {
  for (key in obj) {
    data = data.replace(`{${key}}`, obj[key]);
  }
  return data;
}

app.get("/", (req, res) => {
  fs.readFile("./templates/user.html", "UTF8", (error, data) => {
    if (!error) {
      res.send(render(data, user));
    }
  });
});

app.listen(3000, () => {});
