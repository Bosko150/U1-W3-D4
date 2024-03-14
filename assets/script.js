//creo 76 celle per la tombola

const generateCells = function () {
  const table = document.createElement("div");
  table.className = "mainTable";
  document.body.appendChild(table);
  for (let i = 1; i <= 76; i++) {
    const cellDiv = document.createElement("div");
    cellDiv.className = "cellNum";

    const cellH3 = document.createElement("h3");
    cellH3.id = `num${i}`;
    cellH3.innerText = i;
    cellDiv.appendChild(cellH3);
    table.appendChild(cellDiv);
  }
};
generateCells();

//bottone per estrarre (generare) un numero random tra 1 e 76
const btnDiv = document.createElement("div");
btnDiv.className = "btnDiv";
const btn = document.createElement("button");
btn.innerText = "ESTRAI UN NUOVO NUMERO";
btn.className = "randomNumBtn";
const numBox = document.createElement("h2");
numBox.className = "numBox";
document.body.appendChild(btnDiv);
btnDiv.appendChild(btn);
btnDiv.appendChild(numBox);

btn.addEventListener("click", function () {
  let randomNumber = Math.floor(Math.random() * 76) + 1;
  numBox.innerText = randomNumber;
  const cell = document.getElementById(`num${randomNumber}`);
  cell.parentNode.classList.add("selectedNum");
});
