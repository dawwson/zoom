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

// 받은 메세지를 연결된 소켓에게 모두 전달해주기 위해 저장함
const sockets = [];

wss.on("connection", (socket) => {
  // socket = 연결된 브라우저 정보를 담은 객체
  sockets.push(socket);
  console.log("Connected to Browser ✅");

  socket.on("close", () => {
    // 브라우저 창을 닫아버리서 연결이 종료되면 실행
    console.log("Disconnected from the Browser ❌");
  });

  socket.on("message", (message) => {
    // 연결된 브라우저로부터 메세지를 받으면 실행
    const { type, payload } = JSON.parse(message.toString());

    switch (type) {
      // nickname에 대한 메세지면 연결된 socket에 nickname property 지정
      case "nickname":
        socket["nickname"] = payload;
        break;
      // 새로운 메세지면 연결된 모든 socket으로 메세지 전송
      case "newMessage":
        sockets.forEach((anotherSocket) => {
          // 메세지를 보낸 socket의 nickname과 함께 전송
          const messageToAll = `${socket.nickname}: ${payload}`;
          anotherSocket.send(messageToAll);
        });
        break;
    }
  });
});

server.listen(3000, () => {
  // 같은 포트에서 두 프로토콜을 모두 사용할 수 있음
  console.log("Listening on http://localhost:3000");
});
