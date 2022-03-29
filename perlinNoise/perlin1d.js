var inc = 0.003;
var start = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  stroke(0, 255, 0);

  beginShape();
  var xoff = start;
  for (var x = 0; x < width; x++) {
    stroke(0, 255, 0);
    var y = noise(xoff) * height;
    vertex(x, y);
    fill(0, 255, 0);
    xoff += inc;
  }

  vertex(width, height);
  vertex(0, height);
  endShape();
  start += inc;
}
