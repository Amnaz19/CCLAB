function setup() {
  var canvas= createCanvas(600, 600);
  canvas.parent('canvas');
}


function draw() {
let moneyData = [30,13, 24, 15, 60, 38, 27,]
  background(220);
  for(let i = 0; i<100; i++){
    line(0, i*10, 600, i*10)
    line(i*10, 0, i*10, 600)
    
  }
  for(let i=0;i<moneyData.length;i++){
    frameRate(5)
    drawData(moneyData[i], i*100)
     drawData(moneyData[i], i*500)
  }
     for(let i = 0; i<200; i++){
      frameRate(2)
       fill('black')
    rect(int(random(0,60))*10, int(random(0,60))*10, 10, 10)}
     //  fill('red')
     // rect(int(random(0,60))*10, int(random(0,60))*10, 10, 10)}
    
//   }


function drawData(x,y){
  let multiplier = 0
  let fillColor = 'red'
  let Sqsize = 5
  if(x<20){
    fillColor = lerpColor(color(0,0,255), color(255,255,255),0.66);
    multiplier = 20
  }
 else if (x>20 && x<40){
    fillColor = 'purple'
    multiplier = 50
    Sqsize = 20
     }
  else{
    fillColor = lerpColor(color(255,255,255), color(255,0,0),0.66);
    multiplier = 100
    Sqsize = 100
  }
  let modX = random(x+5, x+multiplier+5)
  let modY = random(y+5, y+multiplier+5)
  fill(fillColor)
  rect(modY,modX,Sqsize,Sqsize)
}
}