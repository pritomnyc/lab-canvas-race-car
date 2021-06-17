const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

// canvas.width = 500;
// canvas.height = 700;

const roadBackground = new Image();
roadBackground.src = "./images/road.png";

// const carIcon = new Image();
// carIcon.src = "./images/car.png";

roadBackground.onload = function () {
  ctx.drawImage(roadBackground, 0, 0, canvas.width, canvas.height);
};

window.onload = () => {
  document.querySelector("start-button").onclick = function (event) {
    startGame();
  };

  function startGame() {
    ctx.drawImage(roadBackground, 0, 0, canvas.width, canvas.height);
  }

  class Car {
    constructor(imag, x, y, w, h) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.img = img;
    }

    draw = () => {
      ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    };
  }

  let img = new Image();
  img.src = "./images/car.png";
  let carIcon = new Car(
    img,
    0,
    0,
    canvas.width / 2 - 50,
    canvas.height / 2 - 50
  );
};
