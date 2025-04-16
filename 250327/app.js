const express = require('express');
const http = require('http');
var app = express();
const server = http.createServer(app).listen(80);

app.get('/test', function (req, res) {
  res.send("hello world");
});

app.get('/main', function (req, res) {
  res.sendfile("main.html");
});

app.get('/login', function (req, res) {
  res.sendfile("login.html");
});

app.get('/inputNum', function (req, res) {
  res.sendfile("inputNum.html");
});

app.get('/for', function (req, res) {
  res.sendfile("for.html");
});

app.get('/star', function (req, res) {
  res.sendfile("star.html");
});

console.log("backend") // 터미널에 찍힘
