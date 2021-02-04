var fixedRect, movingRect;
var o1,o2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  
  o1 = createSprite(100,250,50,50);
  o1.shapeColor = "blue";
 

  o2 = createSprite(250,250,100,100);
  o2.shapeColor = "yellow";
  o2.velocityX = -3;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;


  
  if(isTouching(o1,movingRect)){
 o1.shapeColor = "white";
 
  }

  else{
   o1.shapeColor = "yellow";
  }
  bounceOff(fixedRect,movingRect);
  drawSprites();
  
}







