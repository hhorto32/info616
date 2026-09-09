function setup(){
textOutput();
  createCanvas(700, 700);
  background(125, 192, 121);
  
}
let value = "yellow";
function draw(){
    
    fill(value);
    stroke("pink");
    strokeWeight(15);
square(170, 120, 250);
ellipse(300, 200, 30, 100);
ellipse(300, 300, 30, 100);
ellipse(250, 250, 100, 30);
ellipse(350, 250, 100, 30);
circle(300, 250, 15);

  }

function mouseClicked() {
  if (value === "yellow") {
    value = "orange";
  } else {
    value = "yellow";
  }
}