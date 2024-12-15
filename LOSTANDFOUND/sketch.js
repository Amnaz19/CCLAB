function setup() {
  var canvas= createCanvas(400, 400);
  canvas.parent('canvas');
  
}

function draw() {
  background('#FFFFC5'); 
  
  // Watch straps
  fill('black');
  rect(185, 240, 29, 100);
  rect(185, 60, 30, 100);  
  
  //switch
  rect(242, 200, 4, 5); 
  circle(200, 200, 2.5); 
  
  fill('#4d7785'); 
  circle(200, 203, 85) 
   fill('#ADD8E6'); 
  circle(200, 200, 85) 
  
  push()
  //////
    fill('#486e48'); 
  circle(198, 200, 60.5); 
    fill('#486e48'); 
  circle(201, 200, 60.2); 
  noStroke();
  fill('#90EE90'); 
  circle(200, 200, 60); 
  //////
  pop()
  
  textSize(5); 
  fill('black');
  text('SWATCH', 190, 192); 
  
  //watch clasp
  fill('black');
  rect(180, 350, 40, 25)
  rect (200, 50, 3, 30)
  fill ('#505152')
  rect (180, 80, 40, 10)
  fill ('black')
  rect (180, 80, 40, 8)
  fill('#FFFFC5')
  rect(190, 350, 20, 10) 

  
  //Clock hands
  stroke(0);
  line(200, 200, 200, 220); 
  line(200, 200, 180, 210); 
  
  // Small rounded rectangles at the bottom
  noStroke()
  fill('#FFFFC5'); 
  rect(195, 280, 8, 3, 6) 
  rect(195, 288, 8, 3, 6)
  rect(195, 296, 8, 3, 6)
  rect(195, 304, 8, 3, 6)
}