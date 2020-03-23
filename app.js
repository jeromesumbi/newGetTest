const http = require("http");
const express = require("express");
const uuid = require("uuid");
const hostname = "127.0.0.1";
const port = process.env.port || 8080;

const logger = require("./middleware/logger");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger);
app.use("/api/member", require("./routes/api/app"));
app.listen(port, hostname, () => {
  console.log(`Server is working on http://${hostname}:${port}`);
});
