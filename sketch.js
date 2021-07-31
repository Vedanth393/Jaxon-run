var track,Jaxon;
var trackImg,Jaxon_runner;
function preload(){
  Jaxon_runner=loadAnimation("Runner-1.png")
  
  trackImg=loadImage("path.png")
}

function setup(){

  createCanvas(400,400)
 
track=createSprite(200,200)
track.addImage(trackImg)
track.velocityY = 4;
track.scale=1.2;

Jaxon = createSprite(180,300,30,20)
Jaxon.addAnimation("running",Jaxon_runner);
Jaxon.scale=0.1
}

function draw(){
if(track.y>400){
  track.y=height/2;
}
drawSprites()
edeges= createEdgeSprites();
Jaxon.X=World.mouseX
}
