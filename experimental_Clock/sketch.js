let plusX; 
let plusY; 
let plusVisible = false; 
function setup() {
  createCanvas(600, 600); 
  var canvas= createCanvas(600, 600);
  canvas.parent('canvas');
}


function draw() {
  background(0);
  let s = second();  
  let m = minute();  
  let h = hour(); 

 
  noStroke();
  fill(128, 128, 128, 60);
  circle(width / 2, height / 2, 500); 
  // Circle for seconds
  let secondSize;
  if (s < 30) {
    secondSize = map(s, 0, 29, 100, 300); // Grow the circle
  } else {
    secondSize = map(s, 30, 59, 300, 100); // Shrink the circle
  }
  
  fill(255, 0, 20);  // Red for seconds
  ellipse(width / 2, height / 2, secondSize, secondSize);  // Draw seconds circle

  // Circle for minutes
  let minuteSize;
  if (m < 30) {
    minuteSize = map(m, 0, 29, 150, 450); // Grow the circle
  } else {
    minuteSize = map(m, 30, 59, 450, 150); // Shrink the circle
  }
  
  fill(0, 255, 0, 60);  // Green for minutes
  ellipse(width / 2, height / 2, minuteSize, minuteSize);  // Draw minutes circle

  // Circle for hours
  let hourSize;
  if (h < 12) {
    hourSize = map(h, 0, 11, 250, 500); // Grow the circle
  } else {
    hourSize = map(h, 12, 23, 500, 250); // Shrink the circle
  }
  
  fill(0, 0, 255, 40);  // Blue for hours
  ellipse(width / 2, height / 2, hourSize, hourSize);  // Draw hours circle
  
  // Small center dot
  noStroke();
  fill('blue');
  circle(width / 2, height / 2, 20); 
  fill('white');
  circle(width / 2, height / 2, 10); 

  if (plusVisible) {
    drawPlus(plusX, plusY, 20); // Draw plus sign at stored position
  }
}


function drawPlus(x, y, size) {
  fill(255, 255, 0); // Yellow color for the plus sign
  noStroke();
  rectMode(CENTER); // Set rectangle mode to center
  rect(x, y, size, size / 5); // Horizontal bar of the plus
  rect(x, y, size / 5, size); // Vertical bar of the plus
}

// Function to handle mouse press event
function mousePressed() {
  plusX = mouseX; 
  plusY = mouseY; 
  plusVisible = true; 
}
