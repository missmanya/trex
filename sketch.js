
var trex ,trex_running;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
groundImage = loadImage("ground2.png");
cloudImage = loadImage("cloud.png")
}

function setup(){
  createCanvas(600,200);
  trex =creatSprite(80,30,20,10);
  trex.addAnimation("running",trex_running);
  
ground.addImage("ground",groundImage);
ground =creatSprite(200,200,400,30);
trex.scale =0.5;
trex.x =50;
  //create a trex sprite
ground.velocityY =-4;
}

function draw(){
  background(220);
 
  if(keydown("space")){
    trex.velocityY =-10
  }
trex.velocityY = trex.velocityY+10;
trex.collide(ground);
if(ground.x<0){
  ground.x =0;
}
spawncloud();
drawSprites()
}

function spawncloud(){
console.log(frameCount)
if(frameCount % 60 === 0){
  cloud = creatSprite(600,100,40,10)
cloud.addImage(cloudImage)
clous.y = Math.round(random(10,60))
cloud.scale =0,4
cloud.velocityY = -3
}
}