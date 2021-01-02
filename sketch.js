var fixedRect, movingRect;
var block1,block2

function setup() {
  createCanvas(1200,800);
   fixedRect = createSprite(400, 100, 50, 80);
 fixedRect.shapeColor = "red";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "red";
  movingRect.debug = true;

  block1 = createSprite(200, 100, 50, 80);
  block1.shapeColor = "orange";
  block1.debug = true;
  block2 = createSprite(200, 800,80,30);
  block2.shapeColor = "orange";
  block2.debug = true;

  block1.velocityY = +5;
  block2.velocityY = -5;

 movingRect.velocityY = -5;
  fixedRect.velocityY=+5;
 
}

function draw() {
  background(0,0,0);  
 bounceOff(block1,block2);
 bounceOff(movingRect,fixedRect);

 

  drawSprites();
}
