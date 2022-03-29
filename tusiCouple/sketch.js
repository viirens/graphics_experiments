function setup() {
  createCanvas(600, 600);
}

let angle = 0;
let angle2 = 1.57;

function draw() {
  background(151);
  translate(300, 300);
  
  let r1 = 100;
  let x1 = 0;
  let y1 = 0;
  
  stroke(200,200,255);
  strokeWeight(2);

  line(0, -100, 0, 100);
  line(-100, 0, 100, 0);
  line(-100, -100, 100, 100);
  line(100, -100, -100, 100);

  stroke(255);
  strokeWeight(2);
  noFill();

  ellipse(x1, y1, r1*2, r1*2);
  
  let r2 = r1 * .5;
  
  let rsum = r1 - r2;
  
  let x2 = x1 + rsum * cos(angle);
  let y2 = y1 + rsum * sin(angle);

  stroke(255);

  ellipse(x2, y2, r2*2, r2*2);
  
  strokeWeight(10);
  //center of second circle
  // point(r2*cos(angle), r2*sin(angle));

  //points on perimeter
  // point(r2*cos(angle * -1) + 50, r2*sin(angle * -1));
  translate(r2*cos(angle), r2*sin(angle));
  stroke(50);

  point(r2*sin(angle), r2*cos(angle));
  point(r2 * cos(angle * -1), r2 * sin(angle *-1));

  point(r2*sin(angle + PI), r2*cos(angle + PI));
  point(r2*sin(angle + 3/2*PI), r2*cos(angle + 3/2*PI));

  angle += 0.015;
}