class Attractor {
  constructor(x, y, m) {
    this.pos = createVector(x, y);
    this.mass = m;
    this.r = sqrt(this.mass) * 6;
    this.g = 10;
  }

  attract(mover) {
    let force = p5.Vector.sub(this.pos, mover.pos);
    let distanceSq = constrain(force.magSq(), 100, 1000);
    let G = this.g;
    let strength = (G * (this.mass * mover.mass)) / distanceSq;
    force.setMag(strength);

    mover.applyForce(force);
  }

  show() {
    noStroke();
    fill(127,255,255);
    ellipse(this.pos.x, this.pos.y, this.r * 2);
  }
}
