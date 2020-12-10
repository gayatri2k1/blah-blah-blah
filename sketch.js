var fixed, moving 
var object1, object2,object3,object4;


function setup() {
  createCanvas(800,600);
 
  fixed = createSprite(400,300,80,80)
  fixed.debug = true
  moving = createSprite(200,300,80,80)
  moving.debug = true
  
  object1.debug = true
  object2 = createSprite(100,200,80,80)
  object2.debug = true
  object3 = createSprite(100,300,80,80)
  object3.debug = true
  object4 = createSprite(100,400,80,80)
  object1 = createSprite(100,100,80,80)
  object4.debug = true
  
  object3.velocityX=5
  fixed.velocityX=-3
  
}

function draw() {
  background(25);
  moving.x = mouseX
  moving.y = mouseY
  
//distance b/w the rectangle
console.log(fixed.x - moving.x)
console.log(fixed.width /2 + moving.width/2)

if(touching(moving,object4)){
  object4.shapeColor ="red"
  moving.shapeColor = "red"
}
else{
  object4.shapeColor ="pink"
  moving.shapeColor = "pink"
}

  bounce(object3,fixed)

  drawSprites();
}

