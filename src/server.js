import express from "express";

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => res.render("home"));
app.get("/*", (req, res) => res.redirect("/")); // 다른 url로 접근해도 "/"로 리다이렉트 해줌

app.listen("3000", () => {
  console.log("Listening on 3000");
});
