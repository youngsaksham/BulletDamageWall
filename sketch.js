//bullet wickWall test
//when damage < 100 color is green; 
//when damage < 200 color is yellow;
//when damage < 300 color is red;


var bullet, bullet1, bullet2, wall, brockwall1, brockwall2, backwall;
var wickWall, damage;
var boy;
 
function setup() {
  createCanvas(900,400); 

  boy = createSprite(850,200,10,100);
  bullet = createSprite(200,200,30,7);
  bullet.velocityX = 10;
  bullet.shapeColor = "black";

  bullet1 = createSprite(-600,200,30,7);
  bullet1.velocityX = 10;
  bullet1.shapeColor = "black";

  bullet2 = createSprite(-1400,200,30,7);
  bullet2.velocityX = 10;
  bullet2.shapeColor = "black";

  wall = createSprite(600, 200, 10,200);
  wall.shapeColor = "brown";

  wickWall = random(2,23);

  backwall = createSprite(700,200, 10,200);
  backwall.shapeColor = "brown";
  backwall.visible = false;

  brockwall1 = createSprite(600, 120, 10,100);
  brockwall1.shapeColor = "brown";
  brockwall1.visible = false;

  brockwall2 = createSprite(600, 280, 10,100);
  brockwall2.shapeColor = "brown";
  brockwall2.visible = false;

 

}

function draw() {
  background(255,255,255);
  if(collide(wall, bullet, bullet1, bullet2)){
 if(bullet.y > 400 ){
wall.visible = true;
 }    
  } 
  rekuvryOfWall(); 
  
  drawSprites();
}

function collide(object1, object2, object3, object4){
  if(object2.x-object1.x < object1.width/2+object2.width/2 &&
    object1.x-object2.x < object1.width/2+object2.width/2 && 
    object2.y-object1.y < object1.width/2+object2.height/2 &&
    object1.y-object2.y < object1.width/2+object2.height/2 ||
    object3.x-object1.x < object1.width/2+object3.width/2 &&
    object1.x-object3.x < object1.width/2+object3.width/2 && 
    object3.y-object1.y < object1.width/2+object3.height/2 &&
    object1.y-object3.y < object1.width/2+object3.height/2 ||
    object4.x-object1.x < object1.width/2+object4.width/2 &&
    object1.x-object4.x < object1.width/2+object4.width/2 && 
    object4.y-object1.y < object1.width/2+object4.height/2 &&
    object1.y-object4.y < object1.width/2+object4.height/2){

      if(object2.x-object1.x < object1.width/2+object2.width/2 &&
        object1.x-object2.x < object1.width/2+object2.width/2 && 
        object2.y-object1.y < object1.width/2+object2.height/2 &&
        object1.y-object2.y < object1.width/2+object2.height/2){
object2.velocityX = 0;
object2.velocityY = 5;
backwall.visible = true;
boy.velocityX = -5;

wall.visible = false;
        }
        
if(object3.x-object1.x < object1.width/2+object3.width/2 &&
  object1.x-object3.x < object1.width/2+object3.width/2 && 
  object3.y-object1.y < object1.width/2+object3.height/2 &&
  object1.y-object3.y < object1.width/2+object3.height/2){
object3.velocityX = 0;
object3.velocityY = 5;
boy.velocityX = -5;
brockwall1.visible = true;
brockwall2.visible = true;
wall.visible = false;
backwall.visible = false;

} 

if(object4.x-object1.x < object1.width/2+object4.width/2 &&
  object1.x-object4.x < object1.width/2+object4.width/2 && 
  object4.y-object1.y < object1.width/2+object4.height/2 &&
  object1.y-object4.y < object1.width/2+object4.height/2){
object4.velocityX = 0;
object4.velocityY = 5;
 wall.visible = true;
backwall.visible = false;
brockwall1.visible = false;
brockwall2.visible = false;

  }
}
}
function rekuvryOfWall(){
  if(boy.x-wall.x < wall.width/2+boy.width/2 &&
    wall.x-boy.x < wall.width/2+boy.width/2 && 
    boy.y-wall.y < wall.width/2+boy.height/2 &&
    wall.y-boy.y < wall.width/2+boy.height/2 ){
wall.visible = true;
backwall.visible = false;
brockwall1.visible = false;
brockwall2.visible = false;
boy.velocityX = 5;
    }
}