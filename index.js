// src/netlify/functions/server.js
const express = require("express");
const serverless = require("serverless-http");
const app = express();

app.get("/api/hello", (req, res) => {
  res.send({ message: "Hello, Netlify!" });
});

module.exports.handler = serverless(app);
