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

app.get('/table', function (req, res) {
  res.sendfile("table.html");
})

app.get('/signup', function (req, res) {
  res.sendfile("signup.html")
})

app.get('/write', function (req, res) {
  res.sendfile("write.html")
})

app.get('/resume', function (req, res) {
  res.sendfile("resume.html")
})
console.log("backend") // 터미널에 찍힘
