const express = require("express");
const app = express();

app.get("/", (request, response) => {
  let news = new Date();
  response.send(
    `${news.getDate()}-${news.getMonth() + 1}-${news.getFullYear()}`
  );
});

module.exports = app;
