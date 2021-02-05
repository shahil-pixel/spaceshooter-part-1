
var player,enemy;
var gamestate = "play";


function preload(){
  backgroundImg = loadImage("background.png");
  rocketImg = loadImage("rocket.png");
  enemyImg = loadImage("enemy.png");
  pbul = loadImage("pbullet.jpg");
  ebul = loadImage("ebullet.png");
}

function setup() {
  createCanvas(600, 600);
  
player = createSprite(300,540,50,50);
player.addImage(rocketImg);
player.scale = 0.5
  
enemy = createSprite(300,100,50,50);
  enemy.addImage(enemyImg)
  enemy.scale = 0.8

}

function draw() {
  background(backgroundImg);
  if(gamestate === "play"){
  if(keyDown(RIGHT_ARROW)){
    player.x += 7 
  }
  
  if(keyDown(LEFT_ARROW)){
    player.x -= 7
    }
    
  if(keyWentDown("SPACE")){
     Pbullets()
  }
   Ebullets()
}

  drawSprites();
}

function Pbullets(){
  var Pbullet = createSprite(100,360,15,15);
  Pbullet.addImage(pbul);
  Pbullet.y = 488;
  Pbullet.x = player.x;
  Pbullet.velocityY = Math.round(random(-5,-8));
 
}

function Ebullets(){
  
  
  var Ebullet = createSprite(100,90,15,15);
  
  Ebullet.scale = 0.2;
  
  Ebullet.addImage(ebul);
  
  Ebullet.y = 170;
  
  Ebullet.x = enemy.x;
  
//Ebullet.velocityY = 5;
  
}