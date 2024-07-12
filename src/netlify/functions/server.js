// src/netlify/functions/server.js
const express = require("express");
const serverless = require("serverless-http");
const app = express();

app.get("/api/hello", (req, res) => {
  res.send({ message: "Hello, Netlify!" });
});

app.get("/api", (req, res) => {
  res.send({ message: "Hello, Netlify!" });
});

app.get("/.netlify/functions/server", (req, res) => {
  res.send({ message: "Hello, Netlify!  /.netlify/functions/server" });
});

app.get("/.netlify/functions/server", (req, res) => {
  res.send({ message: "/ hello" });
});

module.exports.handler = serverless(app);
