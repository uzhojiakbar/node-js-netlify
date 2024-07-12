// src/netlify/functions/server.js
const express = require("express");
const serverless = require("serverless-http");
const app = express();

// API endpoint
app.get("/api/hello", (req, res) => {
  res.send({ message: "Hello, Netlify!" });
});

// Create handler for Netlify function
module.exports.handler = serverless(app);
