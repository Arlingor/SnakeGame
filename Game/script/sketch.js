var s;
var scl = 20;

var food;

function setup() {
  centerCanvas();
  s = new Snake();
  frameRate(15);
  pickLocation();
}

function  centerCanvas() {
  var cnv = createCanvas(800, 600);
  cnv.parent('sketch-holder');
}

function pickLocation() {
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
  
}

function mousePressed() {
  s.total++;
}

function draw() {
  background(50);
  tint(20);  
  if (s.eat(food)) {
    pickLocation();
  }
  s.death();

  if(s.death()){
    scoreboard();
  }

  s.update();
  s.show();

 fill(255, 0, 100);
  rect(food.x, food.y, scl, scl);
}

function scoreboard(){
  
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    s.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    s.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    s.dir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    s.dir(-1, 0);
  }
}