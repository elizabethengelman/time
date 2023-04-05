let tumbler, x, y, sides, len, angle;
const birthDate = new Date("May 27, 1985 23:31:00");
const sketchCreated = new Date("April 5, 2023 08:30:00");

function setup() {
  new Canvas(800, 400);
  world.gravity.y = 10;

  x = width * 0.5;
  y = height * 0.5;
  sides = 5;
  len = height / sides;
  angle = 360 / sides;

  // let s = [len, angle, len, -angle, len, angle, sides];
  let s = [len, angle, len, -angle, len, angle, sides];
  // tumbler = new Sprite(x, y, s, "kinematic");
  tumbler = new Sprite(x, y, s, "kinematic");

  allSprites.remove(tumbler);
  const seconds = Math.floor((sketchCreated - birthDate) / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const years = Math.floor(days / 365);
  for (let i = 0; i < years; i++) {
    console.log("here");
    dropSprite();
  }
}

function draw() {
  clear();

  push();
  strokeWeight(8);
  strokeJoin(ROUND);
  stroke("#ed225d");
  tumbler.draw();
  pop();

  allSprites.draw();
}

function dropSprite() {
  len = (height * 0.1) / sides;
  let penta = new Sprite(width / 2, height / 8, [len, angle, sides]);
  penta.color = "#c0eeff";
}

function mousePressed() {
  dropSprite();
}
