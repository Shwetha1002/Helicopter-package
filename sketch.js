var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, red_box1, reb_box2, red_box3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

const Body = Matter.Body;


function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	red_box1 = createSprite(400,660,200,20)
	red_box2 = createSprite(300,610,20,100)
	red_box3 = createSprite(500,610,20,100)
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	
	//packageBody.isStatic = true;
	

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.1, isStatic: true});
	
	
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  red_box1.shapeColor = "red"
  red_box2.shapeColor = "red"
  red_box3.shapeColor = "red"
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody, false)
	//packageBody.isStatic = false;
    
  }
}



