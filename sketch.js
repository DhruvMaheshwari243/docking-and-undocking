var issImg, spacebgImg,spacecraft1Img,spacecraft2Img,spacecraft3Img,spacecraft4Img;
var iss, hasDocked = false, spacecraft;
function preload(){
issImg = loadImage("images/iss.png");
spacebgImg = loadImage("images/spacebg.jpg")
spacecraft1Img = loadImage("images/spacecraft1.png")
spacecraft2Img = loadImage("images/spacecraft2.png")
spacecraft3Img = loadImage("images/spacecraft3.png")
spacecraft4Img = loadImage("images/spacecraft4.png")
}

function setup() {
  createCanvas(800,400);
  iss = createSprite(400, 100, 50, 50);
  iss.addImage(issImg);
  iss.scale = 0.5;

  spacecraft = createSprite(400, 150, 50, 50)
  spacecraft.addImage(spacecraft1Img);
  spacecraft.scale = 0.1;
}

function draw() {
  background(spacebgImg);  

  if(!hasDocked){
   // spacecraft.x = Math.round(random(200,400));
   if(keyDown(37)){
    spacecraft.addImage(spacecraft3Img);
    spacecraft.x = spacecraft.x-5;
   }

   if(keyDown(39)){
    spacecraft.addImage(spacecraft4Img);
    spacecraft.x = spacecraft.x+5;
   }

   if(keyDown(38)){
    spacecraft.y = spacecraft.y-5;
   }

   if(keyDown(40)){
    spacecraft.addImage(spacecraft2Img);
    spacecraft.y = spacecraft.y+5;
   }

  
  }

  drawSprites();
}