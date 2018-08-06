alert("学籍番号とパスワードを入力してください。\n　学籍番号：zm18000\n　パスワード：josai");
function login() {
  if (document.getElementById("gakuseki").value == "zm18000" && document.getElementById("password").value == "josai") {
    location.href = "musi.html";
  } else {
    alert("IDまたはパスワードが違います");
  }

}