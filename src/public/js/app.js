// 클라이언트 사이드 JS

// socket = 서버로의 연결
const socket = new WebSocket(`ws://${window.location.host}`);

socket.addEventListener("open", () => {
  // 연결이 열리면 실행
  console.log("Connected to Server ✅");
});

socket.addEventListener("message", (message) => {
  // 연결된 서버로부터 메세지를 받으면 실행
  console.log("Just got this: ", message, " from the server");
});

socket.addEventListener("close", () => {
  // 서버가 종료되어 연결이 종료되면 실행
  console.log("Disconnected from Server ❌");
});

// 5초 후에 메세지 전송
setTimeout(() => {
  socket.send("hello from the browser");
}, 5000);
