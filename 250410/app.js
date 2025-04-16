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

app.get('/array', function (req, res) {
  res.sendfile("array.html");
});

app.get('/array1', function (req, res) {
  res.sendfile("array1.html");
});

app.get('/array2', function (req, res) {
  res.sendfile("array2.html");
});

app.get('/369game', function (req, res) {
  res.sendfile("369game.html");
});

console.log("backend") // 터미널에 찍힘
