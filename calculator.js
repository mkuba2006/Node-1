const express = require("express");
const app = express();
app.get("/", function (raq, res) {
  res.send("<h1>Hello Guys</h1>");
});

app.listen(3000, function () {
  console.log("started on port 3000");
});
