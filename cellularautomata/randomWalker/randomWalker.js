let mover;

function setup() {
  createCanvas(800, 800);
  background(0);
  mover = new Mover(400, 400);
}

function draw() {
  mover.update();
  mover.show();
}
