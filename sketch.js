var cat1,cat2,cat3,cat3,cat4;
var garden;
varmouse1,mouse2,mouse3,mouse4;
var background1;

function preload() {
    //load the images here
    cat = loadImage("images/cat1.png");   
    catRunning = loadAnimation("images/cat2.png","images/cat3.png");
    catSad = loadImage("images/cat4.png");
    garden = loadImage("images/garden.png");
    mouseStanding = loadImage("images/mouse1.png");
    mouseTeasing = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouselast=loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
   // background("blue");
    //create tom and jerry sprites here
   background1 = createSprite(500,400,10,50);
   background1.addImage(garden);
  // background1.scale = 0.5;

  cat1 = createSprite(700,660)
  cat1.addImage(cat);
  cat1.scale = 0.1;

  mouse1 = createSprite(100,660)
  mouse1.addImage(mouseStanding);
  mouse1.scale = 0.1;

}
function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

if(keyDown("LEFT_ARROW")){

cat1.velocityX = -5;
cat1.addAnimation("cat",catRunning);
cat1.changeAnimation("cat");
mouse1.addAnimation( "mouse",mouseTeasing);
mouse1.changeAnimation("mouse");
}

if(cat1.x-mouse1.x<cat1.width/2-mouse1.width/2){

    cat1.velocityX = 0;
    cat1.x=170;
    cat1.y=700;
    cat1.scale=0.05;
    mouse1.addAnimation("mouse",mouselast);
    mouse1.changeAnimation("mouse");
    cat1.addAnimation("catworry",catSad);
    cat1.changeAnimation("catworry");
}

    drawSprites();
}


