// 서버 사이드 JS

import http from "http";
import WebSocket from "ws";
import express from "express";

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => res.render("home"));
app.get("/*", (req, res) => res.redirect("/")); // 다른 url로 접근해도 "/"로 리다이렉트 해줌

// HTTP 서버 위에서 WebSocket 서버를 만듦(Not mandatory: ws 서버만 만들어도 됨)
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on("connection", (socket) => {
  // socket = 연결된 브라우저
  console.log(socket);
});

server.listen(3000, () => {
  // 같은 포트에서 두 프로토콜을 모두 사용할 수 있음
  console.log("Listening on http://localhost:3000");
});
