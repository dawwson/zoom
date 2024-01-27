// 클라이언트 사이드 JS

const socket = io();

/*
const nicknameForm = document.querySelector("#nickname");
const messageForm = document.querySelector("#message");
const messageList = document.querySelector("ul");

// socket = 서버로의 연결
const socket = new WebSocket(`ws://${window.location.host}`);

function makeMessage(type, payload) {
  const message = { type, payload };
  return JSON.stringify(message);
}

socket.addEventListener("open", () => {
  // 연결이 열리면 실행
  console.log("Connected to Server ✅");
});

socket.addEventListener("message", (message) => {
  // 연결된 서버로부터 메세지를 받으면 실행
  const li = document.createElement("li");
  li.innerText = message.data;
  messageList.append(li);
});

socket.addEventListener("close", () => {
  // 서버가 종료되어 연결이 종료되면 실행
  console.log("Disconnected from Server ❌");
});

function handleNicknameSubmit(event) {
  // 브라우저 기본 동작(새로고침) 방지
  event.preventDefault();

  // 입력값 백엔드로 전송
  const input = nicknameForm.querySelector("input");
  const message = makeMessage("nickname", input.value);
  socket.send(message);

  // 입력창 초기화
  input.value = "";
}

function handleMessageSubmit(event) {
  // 브라우저 기본 동작(새로고침) 방지
  event.preventDefault();

  // 입력값 백엔드로 전송
  const input = messageForm.querySelector("input");
  const message = makeMessage("newMessage", input.value);
  socket.send(message);

  // 입력창 초기화
  input.value = "";
}

nicknameForm.addEventListener("submit", handleNicknameSubmit);
messageForm.addEventListener("submit", handleMessageSubmit);
*/
