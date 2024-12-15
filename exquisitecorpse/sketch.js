function setup() {
  let hatColor = color(255);
  var canvas= createCanvas(400, 600);
  canvas.parent('canvas');
   background(220);
   drawFull(hatColor);
}

function drawFull(hatColor) {
  DrawHat(hatColor);
  DrawLeg();
  DrawFace();
  feet();
  
  push()
    rectMode(CENTER);
    angleMode(DEGREES);
    drawBody(200,240)
   pop()
}
function drawBody(x,y){
  //blue Hair below shoulders
  // fill(0, 102, 204);
  noStroke();
  // rect(x,y-40,300,60);
  //arm
  fill(255, 224, 189);
  ellipse(x-80,y,40,120);
  ellipse(x+80,y,40,120);
  //vest
  fill(99,51,25);
  rect(x,y,160,120);
  //neck
  fill(255, 224, 189);
  circle(x,y-60,45);
  }
function DrawFace(){
  push()
    translate(200, 265);
    noStroke()
    // Head
    push();
      fill('#4CBB17');
      ellipse(0, -147, 160, 100); // Frog's head
    pop()
    push()
    fill(34, 139, 34); // Green color
    ellipse(0, -150, 150, 100); // Head outline
    pop();
  

    // Eyes
    push();
      fill('grey');
      ellipse(-30, -200, 40, 45); // Left eye
      ellipse(30, -200, 40, 45); // Right eye
    pop();

    fill(255); // White color for eyes
    ellipse(-30, -200, 40, 40); // Left eye
    ellipse(30, -200, 40, 40); // Right eye

    // Pupils
    fill(0); // Black color
    ellipse(-30, -200, 20, 20); // Left pupil
    ellipse(30, -200, 20, 20); // Right pupil
  pop()
  push()
    translate(200, 265);
    // Mouth
    noFill();
    stroke(1);
    strokeWeight(3);
    arc(0, -160, 60, 40, 0, PI); // Mouth
  pop()
  }
function DrawHat(hatColor){
   push();
  rectMode(CORNER)
  angleMode(RADIANS)
  translate(130,80); 
  rotate(-PI / 12); 
  fill(hatColor);
  noStroke();
  triangle(0, 0, 90, 0, 60, -80); 
  pop();

}
function DrawLeg(){
    push()  
  translate(35,0)
    beginShape()
    fill(0,0,0)
    vertex(94,300)
     bezierVertex(87,342,95,414,100,450); 
      vertex(100,450)
      vertex(150,450)
     vertex(158,379)
     vertex(170,450)
     vertex(226,450)
     bezierVertex(240,400,245,340,240, 300); 
     vertex(240, 300)
     vertex(94,300) 
    endShape();

    push()
    beginShape()
    stroke("white")
    vertex(157,303)
     bezierVertex(158,314,165,314,170,305); 
      vertex(170,305)
     bezierVertex(180,314,182,314,184,303); 
    endShape();
    pop()
pop()

  }
function feet(){
  push()
  fill('pink')
  rect(0,500,400,150)
  pop()
  push()
  fill(0)
  rect(140,450,25,40)
  quad(140,490,110,540,160,510,165,490)
  triangle(150,490,160,530,165,490)
  pop()
  
  push()
  fill(0)
  rect(240,450,26,40)
  quad(240,480,266,490,290,540, 240,510)
  triangle(240,490,240,535,265,490)
  pop()
  
}
function mouseMoved() {
    hatColor = color(random(255), random(255), random(255));
  drawFull(hatColor)
  }