// 서버 오픈하는 문법
const express = require("express"); // express 라이브러리를 첨부.
const app = express(); // 첨부한 express 라이브러리를 객체화.

// cors 적용하는 문법
var cors = require("cors");
app.use(cors());

app.listen(8080, function () {
  console.log("listening on 8080");
}); // listen. 컴퓨터에 서버를 열 수 있음. 첫번째 파라미터는 포트번호, 두번째 파라미터는 띄운후 실행할 코드.

app.get("/pet", function (req, res) {
  res.send("펫용품 쇼핑할 수 있는 페이지");
});

app.get("/beauty", function (req, res) {
  res.send("뷰티용품 쇼핑할 수 있는 페이지");
});

//   /만 두면 초기홈페이지에 접속하게 됨.  / sendFile을 하면 html파일을 response해줄수 있음. sendFile(__dirname + 가져올 html파일)
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

// 요청(request)는 사용자가 직접 입력한 값.
// res.json은 response의 값이 json이란 것을 명확하게 보여주고 싶을 때 사용.
// API를 직접 만들고 싶을 때 사용.
app.get("/sound/:name", function (req, res) {
  const { name } = req.params;

  if (name == "dog") {
    res.json({ sound: "멍멍" });
  } else if (name == "cat") {
    res.json({ sound: "야옹" });
  } else {
    res.json({ sound: "알 수 없음" });
  }
});
