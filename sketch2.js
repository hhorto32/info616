function setup() {
  createCanvas(600, 400);
  colorMode(HSB);
  noStroke();

  // Top color
  // Hue: 100°, Saturation: 90%, Brightness: 100%
  let colorA = color(1, 90, 100);

  // Bottom color
  // Hue: 250°, Saturation: 80%, Brightness: 20%
  let colorB = color(250, 80, 20);

  // Number of stripes
  let stripeCount = 15;

  // Divide height of canvas by number of stripes
  let stripeHeight = height / stripeCount;

  // Start at top of canvas,
  // repeat until at the bottom
  // move down by stripeHeight each time,
  for (let y = 0; y < height; y += stripeHeight) {
    // Convert y position to number between
    // 0 (top of canvas) and 1 (bottom of canvas)
    let fadeAmount = y / height;

    // Interpolate color
    let betweenColor = lerpColor(colorA, colorB, fadeAmount);

    // Draw stripe
    fill(betweenColor);
    rect(0, y, width, stripeHeight);
  }

  // Draw text labels
  let margin = 5;
  let boxWidth = 60;
  let cornerRadius = 5;
  textAlign(CENTER, CENTER);
  fill(255);
  rect(margin, margin, boxWidth, stripeHeight - margin * 2, cornerRadius);
  fill(0);
  text('Color A', margin, margin, boxWidth, stripeHeight - margin * 2);
  fill(255);
  rect(
    5,
    height - stripeHeight + margin,
    boxWidth,
    stripeHeight - margin * 2,
    cornerRadius
  );
  fill(0);
  text(
    'Color B',
    5,
    height - stripeHeight + margin,
    60,
    stripeHeight - margin * 2
  );
}
let value = "yellow";
function draw(){
    
    fill(value);
    stroke("orange");
    strokeWeight(15);
    circle(510,80,100); 
  }

function mouseClicked() {
  if (value === "yellow") {
    value = "orange";
  } else {
    value = "yellow";
  }
}
