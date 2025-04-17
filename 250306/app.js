// app.js 백엔드

// 서버를 만들기 위해서 가져다 쓰는 코드
const express = require('express'); //express라는 변수에 express를 가져다 쓰겠다.
const http = require('http');
var app = express();
const server = http.createServer(app).listen(80); // 80포트로 요청과 응답을 받는다.

// 요청과 응답 코드
app.get('/test', function (req, res) { // 'test'라는 요청이 오면
  res.send("hello world"); // 'hello world'라는 텍스트를 응답으로 보내줘라
});

app.get('/test2', function (req, res) { // 'test2'라는 요청이 오면
  res.send("hello world2"); // 'hello world2'라는 텍스트를 응답으로 보내줘라
});

app.get('/test3', function (req, res) { // 'test3'라는 요청이 오면
  res.send("hello world3");  // 'hello world3'라는 텍스트를 응답으로 보내줘라
});

app.get('/', function (req, res) { // 'main'이라는 요청이 오면
  res.sendfile("main.html"); // 'main.html'파일을 응답으로 보냄
});
