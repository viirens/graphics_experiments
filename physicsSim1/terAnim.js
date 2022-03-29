let v;
let t;

class realBall {

  constructor(x, y, m) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.mass = m;
    this.r = sqrt(this.mass) * 10;
  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acc.add(f);
  }

  edges() {
    if (this.pos.y >= height - this.r) {
      this.pos.y = height - this.r;
      this.vel.y *= -1;
    }

    if (this.pos.x >= width - this.r) {
      this.pos.x = width - this.r;
      this.vel.x *= -1;
    } else if (this.pos.x <= this.r) {
      this.pos.x = this.r;
      this.vel.x *= -1;
    }
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
    v = p5.Vector.random2D();
    t = p5.Vector.random2D();
    v.mult(random(0, 90));
    t.mult(random(50, 100));
  }

  show() {
    stroke(0, 255, 0);
    fill(0, 50, 0);
    strokeWeight(1);
    ellipse(this.pos.x, this.pos.y, this.r * 2);
    push();
    translate(this.pos.x, this.pos.y);
    var distOrig = random(0.2, 0.5);
    line(v.x * distOrig, v.y * distOrig, v.x, v.y);
    line(t.x * distOrig, t.y * distOrig, t.x, t.y);
    pop();
  }
}
