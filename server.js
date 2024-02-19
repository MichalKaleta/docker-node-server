const path = require("path");
const http = require("http");
const fs = require("node:fs");

const data = fs.readFileSync("./data.json");
console.log("hej3!");

const server = http.createServer((req, res) => {
  if (req.url === "/api") {
    res.stausCode = 200;
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/json");
    res.end(data);
  }
});

server.listen(3000);
