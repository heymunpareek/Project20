var bgImg, bg;
var tomImg, tom, tomAnimation, finaltommy;
var jerryImg, jerry, jerryAnimation, finaljerry;
function preload() {
    //load the images here
    bgImg = loadImage("garden.png");
    tomImg = loadImage("cat1.png");
    tomAnimation = loadAnimation("cat2.png", "cat3.png");
    finaltommy = loadImage("cat4.png");

    jerryImg = loadImage("mouse1.png");
    jerryAnimation = loadAnimation("mouse2.png", "mouse3.png");
    finaljerry = loadImage("mouse4.png");
}

function setup(){    
    createCanvas(1000,800);
    bg = createSprite(500,400,10,10);
    bg.addImage("bground", bgImg); 
    bg.scale = 1.2;

    //tom and jerry sprites
    
    tom = createSprite(700,680,10,10);
    tom.addImage("tommy", tomImg);
    tom.addAnimation("tommyAnimation", tomAnimation);
    tom.addImage("tommystatue", finaltommy);
    tom.scale = 0.1;

    
    jerry = createSprite(200, 680, 10, 10);
    jerry.addImage("jerrys", jerryImg);
    jerry.addImage("funnyjerry", finaljerry);
    jerry.addAnimation("jerryAnimation", jerryAnimation);
    jerry.scale = 0.1;
    
    


}

function draw() {

    background(0);
    movement();
    stopMovement();
    drawSprites();
}


function movement(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW) {
      tom.velocityX = -5;      
      tom.changeAnimation("tommyAnimation");
      jerry.changeAnimation("jerryAnimation")
  }


}
function stopMovement() {
    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x < (tom.width - jerry.width)/2)
    {
        tom.changeAnimation("tommystatue")
        tom.velocityX = 0;
        jerry.changeAnimation("funnyjerry");
        jerry.velocityX = 0;
    }
}
