function setup() {
  var canvas= createCanvas(600, 600);
  canvas.parent('canvas');
  noFill();
}

function draw() {
  background(125);
  
  
  drawPattern(6, 30);
  drawPattern(30, 6);
}

function drawPattern(x, y) {
  for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 100; j++) {
      let size = dist(mouseX, mouseY, i * x, j * y) / 10;  
      
    
      if (mouseX < width / 2) {
        stroke(255, 0, 0); 
        circle(i * x, j * y, size + x + y);  
      } 
     
      else {
        stroke(0, 0, 255);  
        circle(i * x, j * y, x + y);  
      }
    }
  }
}
