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

app.get('/star', function (req, res) {
  res.sendfile("star.html");
});

app.get('/star2', function (req, res) {
  res.sendfile("star2.html");
});

app.get('/star3', function (req, res) {
  res.sendfile("star3.html");
});

app.get('/gugudan', function (req, res) {
  res.sendfile("gugudan.html");
});

console.log("backend") // 터미널에 찍힘
