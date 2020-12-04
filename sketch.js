var bullet, wall, thickness;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  thickness = random(22,83)
  bullet = createSprite(50,200,50,50);
  wall = createSprite(1200,200,thickness,height/2)
  wall.shapeColor = ((80,80,80));

  speed = random(223,321);
  weight = random(32,52);

  bullet.velocityX = speed;
}

function draw() {
  background(33,47,60);
  
  if(abs(bullet.x-wall.x) <= (bullet.width/2 + wall.width/2)){
    bullet.velocityX = 0;
    var deformation = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
     if(deformation < 10){
       bullet.shapeColor = ("green");
     }
     if(deformation < 10){
       bullet.shapeColor = ("red");
     }
  }
  stroke(50,229,229);
  fill(50,229,229);
  textSize(30);
  text("Press ctrl+r to get different colours",500,350);
  drawSprites();


}