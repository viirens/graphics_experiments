class Mover {
  constructor(x, y, m, vel, dist) {
    this.pos = createVector(x, y);
    this.vel = vel;
    //initial velocity
    this.vel.mult(dist / 20);
    this.acc = createVector(0, 0);
    this.mass = m;
    this.r = sqrt(this.mass) * 2;
  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.vel.add(f);
  }

  update() {
    // let mouse = createVector(mouseX, mouseY);
    // this.acc = p5.Vector.sub(mouse, this.pos);
    // this.acc.setMag(0.1);

    this.vel.add(this.acc);
    // this.vel.limit(10);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  show() {
    stroke(127,255,255);
    strokeWeight(2);
    fill(127,255,255, 150);
    rectMode(CENTER);
    rect(this.pos.x, this.pos.y, this.r, this.r);
  }
}
