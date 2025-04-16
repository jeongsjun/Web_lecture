const express = require('express');
const http = require('http');
var app = express();
const server = http.createServer(app).listen(80);

app.get('/test', function (req, res) {
  res.send("hello world");
});

app.get('/test2', function (req, res) {
  res.send("hello world2");
});

app.get('/test3', function (req, res) {
  res.send("hello world3");
});

app.get('/', function (req, res) {
  res.sendfile("main.html");
});
