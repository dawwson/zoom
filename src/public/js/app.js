// 클라이언트 사이드 JS

const messageList = document.querySelector("ul");
const messageForm = document.querySelector("form");

// socket = 서버로의 연결
const socket = new WebSocket(`ws://${window.location.host}`);

socket.addEventListener("open", () => {
  // 연결이 열리면 실행
  console.log("Connected to Server ✅");
});

socket.addEventListener("message", (message) => {
  // 연결된 서버로부터 메세지를 받으면 실행
  console.log("New message: ", message.data);
});

socket.addEventListener("close", () => {
  // 서버가 종료되어 연결이 종료되면 실행
  console.log("Disconnected from Server ❌");
});

function handleSubmit(event) {
  event.preventDefault();

  const input = messageForm.querySelector("input");
  socket.send(input.value);
}
messageForm.addEventListener("submit", handleSubmit);
