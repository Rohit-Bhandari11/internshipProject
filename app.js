const express = require("express");
const app = express();

const mongoose = require("mongoose");

const namesArr = ["Rohit", "Sanjeev", "Nitish"];

mongoose.connect("mongodb://127.0.0.1:27017/internPractice").then(() => {
  console.log("database connected");
});

app.get("/", (req, res) => {
  res.send("welcome to Node.js Server");
});

app.get("/about", (req, res) => {
  res.send("Rohit Bhandari, MCA");
});

app.get("/users", (req, res) => {
  res.json({ names: namesArr });
});

app.listen(3000, () => {
  console.log("Listening at pot 3000");
});
