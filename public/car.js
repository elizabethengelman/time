let floorY;
let wallX;
let zeroX = 0;
let zeroY = 0;
let xOffsetDirection = 1;
let xOffset = 20;
let secondsElapsed;
let time = 1000; //1000 ms == 1 second
let nextChange = time;
let xPosition = 30;

function setup() {
  createCanvas(640, 480);
  background("#F3F3F3");
  floorY = height - height / 4;
  wallX = width - width / 6;
  drawCar();
}

function draw() {
  background("#F3F3F3");
  drawHorizontalLine();
  drawVerticalLine();
  drawDiagonalLine();
  drawCar();
}

function drawHorizontalLine() {
  line(zeroX, floorY, wallX, floorY);
}

function drawVerticalLine() {
  line(wallX, zeroY, wallX, floorY);
}

function drawDiagonalLine() {
  const x2 = width;
  const y2 = height;
  line(wallX, floorY, width, height);
}

tl = 20;
tr = 15;
br = 15;
bl = 5;
function drawCar() {
  const carWidth = 60;
  const carHeight = 45;
  console.log("xpos", xPosition);
  console.log(xOffset);
  if (millis() > nextChange) {
    nextChange = millis() + time;
    xPosition = xPosition + xOffset;
  }

  if (xPosition >= 470 || xPosition <= 1) {
    xOffset = xOffset * -1;
    switchLeftAndRight();
  }

  rect(xPosition, floorY - carHeight / 3, carWidth, carHeight, tl, tr, br, bl);
}

function switchLeftAndRight() {
  if (tl === 20) {
    tl = 15;
  } else {
    tl = 20;
  }

  if (tr === 15) {
    tr = 20;
  } else {
    tr = 15;
  }

  if (br === 15) {
    br = 5;
  } else {
    br = 15;
  }

  if (bl === 5) {
    bl = 15;
  } else {
    bl = 5;
  }
}
