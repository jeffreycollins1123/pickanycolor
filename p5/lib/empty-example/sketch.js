
var red = 0;

function setup() {
  // put setup code here
  createCanvas(500,500);
  background("#003366");
}

function draw() {
 // put drawing code here
  fill(red,green,blue);
  ellipse(230,230,150,150);

 fill(0,255,255);
textSize(32);
text('Pick a color! Any color!', 10, 30);

}
function mousePressed(){
  red = random(0,255);
  green = random(0,255);
  blue = random(0,255);
}

