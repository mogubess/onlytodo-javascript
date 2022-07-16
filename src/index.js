import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // div生成
  const div = document.createElement("div");
  div.className = "list-row";
  console.log(div);

  //liタグ生成
  const li = document.createElement("li");
  li.innerText = inputText;

  //divタグの子要素
  div.appendChild(li);

  document.getElementById("incomplete-list").appendChild(div);

  // alert(inputText);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
