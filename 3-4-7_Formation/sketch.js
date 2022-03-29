let star_density = 3;
let star_vertices = 7;
let num_circles = star_vertices - star_density;
let circumference_multiple = star_density/star_vertices;
 
let R = 225;
let r = R * circumference_multiple;
let theta = 0;
let d = 70;
let speed = 0.01;

function setup() {
  createCanvas(500, 500);
  background(200,200,255);
}
 
function draw() {
  background(200,200,255, 20);
  noFill();
 
  //outer circle
  stroke(255);
  ellipse(width/2, height/2,R*2,R*2);
  translate(width/2, height/2);

  for (let i = 0; i < num_circles; i++) {
    let x = (R-r)*cos(theta + i*2*Math.PI / num_circles);
    let y = (R-r)*sin(theta + i*2*Math.PI / num_circles);
    drawInnerCircle(x,y);
  }
 
  theta += speed;
}
 
function drawInnerCircle(xPos,yPos) {
  //inner circle
  // ellipse(xPos,yPos,r*2,r*2);
  
  //drawing points
  for (let i = 0; i < star_density; i++) {
    let x = xPos + d*cos((R-r)*theta/r + i*2*Math.PI/star_density);
    let y = yPos - d*sin((R-r)*theta/r + i*2*Math.PI/star_density);
    if (i === 0) stroke(0);
    else stroke(255);
    ellipse(x,y,3,3);
  }
}
