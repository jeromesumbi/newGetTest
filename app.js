const http = require("http");
const express = require("express");
const app = express();

const hostname = "127.0.0.1";
const port = process.env.port || 8080;

app.get("/", (req, res) => {
  res.send("He");
});

app.listen(port, hostname, () => {
  console.log(`Server is working on http://${hostname}:${port}`);
});
