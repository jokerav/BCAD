const canvas = document.querySelector(".canvas");
const btn = document.querySelector(".btn");
let points = { x1: null, y1: null, x2: null, y2: null };
const mouseClick = (e) => {
  if (!points.x1 && !points.y1) {
    points.x1 = e.offsetX;
    points.y1 = e.offsetY;
  } else {
    points.x2 = e.offsetX;
    points.y2 = e.offsetY;
  }
  if (points.x1 && points.y1 && points.x2 && points.y2) {
    drawLine(points.x1, points.y1, points.x2, points.y2);
  }
  console.log("x", e.offsetX);
  console.log("y", e.offsetY);
  console.log(points);
};

canvas.addEventListener("mousedown", (e) => mouseClick(e));

function drawLine(x1, y1, x2, y2) {
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    // ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    console.log("drawLine", points);
    resetPoints();
  }
}

function resetPoints() {
  (points.x1 = null),
    (points.y1 = null),
    (points.x2 = null),
    (points.y2 = null);
}
