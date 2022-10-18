const canvas = document.querySelector(".canvas");
const btn = document.querySelector(".btn");

canvas.addEventListener("mousedown", (e) => mouseClick(e));

if (canvas.getContext) {
  const ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.moveTo(75, 50);
  ctx.lineTo(100, 75);
  ctx.lineTo(100, 25);
  ctx.stroke();
}

const mouseClick = (e) => {
  console.log("x", e.offsetX);
  console.log("y", e.offsetY);
};
