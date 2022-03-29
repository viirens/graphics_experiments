let movers = [];
let clicked = false;
let clickCount = 0;
let attractor;
let cord;
let createdVec;
let slider;
let button;
let canvas;


function setup() {
  let canvasDiv = document.getElementById('canvasWrapper');
  let width = canvasDiv.offsetWidth;
  let height = canvasDiv.offsetHeight;

  canvas = createCanvas(width, height - 100);
  canvas.position((windowWidth - canvas.width) / 2, (windowHeight - canvas.height) / 2);
  canvas.parent("canvasWrapper");
  attractor = new Attractor(width/2, height/2 - 50, 50);
  slider = createSlider(0, 30, 10);
  slider.parent("canvasWrapper");
  slider.id("slider");
  slider.position(windowWidth / 2 - canvas.width / 2, windowHeight / 2 + canvas.height / 2);
  button = createButton("clear");
  button.mousePressed(buttPress);
  button.parent("canvasWrapper");
  button.id("button");
  button.position(
    windowWidth / 2 - canvas.width / 2 + 140,
    windowHeight / 2 + canvas.height / 2
  );
}

function draw() {
  background((15, 15, 15));
  rectMode(CENTER);

  text("G" + " - " + slider.value(), 180, height - 10, 350, 20);
  
  attractor.g = slider.value();

  for (let mover of movers) {
    mover.update();
    mover.show();
    attractor.attract(mover);
  }

  attractor.show();
  
  if ((clicked == true && clickCount == 0) || clickCount == 1)
    ellipse(cord[0], cord[1], 5, 5);

  if (clicked == true && clickCount == 2) {
    ellipse(cord[0], cord[1], 5, 5);
    ellipse(cord[2], cord[3], 5, 5);
    stroke(0, 255, 0, 100);
    line(cord[0], cord[1], cord[2], cord[3]);
    let pointA = createVector(cord[0], cord[1]);
    let pointB = createVector(cord[2], cord[3]);
    createdVec = p5.Vector.sub(pointB, pointA);
    let dist = p5.Vector.dist(pointB, pointA);
    createdVec.normalize();
    let m = random(20, 150);
    let ranMover = new Mover(cord[0], cord[1], m, createdVec, dist);
    movers.push(ranMover);
    clicked = false;
    
  }
}

function buttPress() {
  movers = [];
}

function windowResized() {
  let canvasDiv = document.getElementById('canvasWrapper');
  let width = canvasDiv.offsetWidth;
  let height = canvasDiv.offsetHeight;
  resizeCanvas(width,height-100);
  console.log(width, height);
  attractor = new Attractor(width/2, height/2 - 50, 50);
  slider.position(windowWidth / 2 - canvas.width / 2, windowHeight / 2 + canvas.height / 2);
  button.position(
    windowWidth / 2 - canvas.width / 2 + 140,
    windowHeight / 2 + canvas.height / 2
  );
}

function mouseClicked() {
  if (mouseX <= canvas.width && mouseY <= canvas.height && mouseX >= 0 && mouseY >= 0) {
    clicked = true;
    fill(255);
    if (clickCount > 1) {
      clickCount = 0;
      cord = [];
    }
    if (clickCount == 0) cord = [mouseX, mouseY];
    else if (clickCount == 1) cord.push(mouseX, mouseY);

    // prevent default
    console.log(cord);
    clickCount++;
  }
  return false;
}
