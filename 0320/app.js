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

app.get('/js', function (req, res) {
  res.sendfile("js.html");
});

app.get('/express1', function (req, res) {
  res.sendfile("express1.html");
});

console.log("backend") // 터미널에 찍힘
