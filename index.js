const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.send("HEllO WORLD!!");
});
app.listen(3001, () => {
  console.log("Server started!");
});
