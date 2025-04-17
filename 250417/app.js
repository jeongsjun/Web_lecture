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

app.get('/arrayEx1', function (req, res) {
  res.sendfile("arrayEx1.html");
});

app.get('/arrayEx2', function (req, res) {
  res.sendfile("arrayEx2.html");
});

app.get('/arrayEx3', function (req, res) {
  res.sendfile("arrayEx3.html");
});

app.get('/radio', function (req, res) {
  res.sendfile("radio.html");
});

app.get('/radioEx1', function (req, res) {
  res.sendfile("radioEx1.html");
});


console.log("backend") // 터미널에 찍힘
