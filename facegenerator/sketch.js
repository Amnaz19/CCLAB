
let noseColor;

function setup() {
  createCanvas(400, 400);
  noseColor = color(random(255), random(255), random(255)); // Assign a random color for the nose
  noStroke();
  var canvas= createCanvas(400, 400);
  canvas.parent('canvas');
}

function draw() {
  background('white');
//   //push()
//   noFill()
//   beginShape()
//    vertex(200, 150); // Middle point
//  // bezierVertex(20, 60, 200, 100, 150, 200);// left ear
//  vertex(200, 150); // Middle point
//   bezierVertex(20, 60, 200, 100, 300, 200);// right ear
//   endShape(CLOSE);
fill('#A9A9A9')
  line(130, 100, 120, 170)// left ear
  line(130, 100, 190, 170)
  line(270, 100, 280, 170) // right ear
  line(270, 100, 210, 170)
  
  // Face
  fill('#A9A9A9');
  ellipse(200, 200, 200, 150); 

  // Eyes
  push();
  noStroke();
  fill("#6699CC");
  ellipse(158, 200, 30, 30);
  ellipse(232, 200, 30, 30);

  fill("#ADD8E6");
  ellipse(160, 200, 30, 30);
  ellipse(230, 200, 30, 30);

  fill("black");
  let xp=1-abs(200 - mouseX)/200
  let yp=1-abs(200 - mouseY)/200
   let xq=1-(200 - mouseX)/200
  let yq=1-(200 - mouseY)/200
 // ellipse(160, 195, 20, 20);
  ellipse(160+5*xq, 195+5*yq, 5+15*(xp), 5+15*(xp)); //bk eye ball left
  ellipse(230+5*xq, 195+5*yq, 5+15*(xp), 5+15*(xp));// bk eyeball rt
  //ellipse(230, 195, 20, 20);

  pop();

  // Nose 
  nose(200, 220, 10);
  line(200, 230, 200, 240)
  line(200, 240, 220, 245)
  line(200, 240, 180, 245)

  // Ears 
  stroke('black');
  //line(120, 120, 60, 60); // Left ear
  //line(280, 120, 340, 60); // Right ear
}

// nose
function nose(x, y, size) {
  fill(noseColor);
  beginShape();
  vertex(x, y); // Middle point
  bezierVertex(x + size / 2, y - size, x + size, y, x, y + size * 0.8);
  bezierVertex(x - size, y, x - size / 2, y - size, x, y);
  endShape(CLOSE);
  
    stroke('black');

  // Left side whiskers
  line(130, 220, 70, 200); // Middle whisker
  line(130, 225, 70, 230); // Lower whisker
  line(130, 230, 70, 260); // Upper whisker

  // Right side whiskers
  line(320, 200, 260, 220); // Middle whisker
  line(320, 230, 260, 225); // Lower whisker
  line(320, 260, 260, 230); // Upper whisker
}

// Mouse click to change nose color
function mouseClicked() {
  noseColor = color(random(255), random(255), random(255)); 
}
  