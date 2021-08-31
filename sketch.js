var sea, seaImg;
var ship, ship_img;

function preload(){
  seaImg = loadImage("sea.png");
  ship_img = loadAnimation("ship-1.png","ship-2.png","ship-1.png","ship-1.png");
}



function setup()
{
  createCanvas(800,400);
   
  sea = createSprite(0,250,50,50);
  sea.addImage("sea moving", seaImg);
  sea.velocityX = "-2";
  sea.scale=0.5;

  ship = createSprite(200,200,6,6);
  ship.addAnimation("ship moving", ship_img);
  ship.scale = 0.4

}



function draw() 
{
  background("blue");
  
  if(sea.x < 0){
    sea.x = sea.width/4;
  }

  drawSprites();

}

