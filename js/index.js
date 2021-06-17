const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 700;

const background = new Image();
background.src = "./images/road.png";

background.onload = function () {
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
};

window.onload = () => {
  document.querySelector("start-button").onclick = function (event) {
    startGame();
  };

  function startGame() {
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  }
};
