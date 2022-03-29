let ball;
let ball2;

function setup() {
  c = createCanvas(400, 400);
  c.position(0, 0);
  ball2 = new realBall(width / 4, height / 3, 2);
  ball = new realBall(width * 0.75, height / 3, 0.5);
}

function draw() {
  background(0);

  if (mouseIsPressed) {
    let wind = createVector(0.1, 0);
    ball.applyForce(wind);
    ball2.applyForce(wind);
  }

  let gravity = createVector(0, 0.2);
  let weightA = p5.Vector.mult(gravity, ball.mass);
  let weightB = p5.Vector.mult(gravity, ball2.mass);
  ball.applyForce(weightA);
  ball2.applyForce(weightB);

  ball2.update();
  ball2.edges();
  ball.update();
  ball.edges();
  ball2.show();
  ball.show();
}
