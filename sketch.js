var rect1,rect2,rect3,rect1sprite,rect2sprite,rect3sprite;
var ball;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 400);
	rect1sprite=createSprite(1200,350,200,20);
	rect1sprite.shapeColor="white";
	rect2sprite=createSprite(1310,310,20,100);
	rect2sprite.shapeColor="white";
	rect3sprite=createSprite(1090,310,20,100);
	rect3sprite.shapeColor="white";
	engine = Engine.create();
	world = engine.world;
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor="yellow";
	ball= new Ball(100,100);

	//Create the Bodies Here.
	rect1=Bodies.rectangle(1200,350,200,20);
	rect2=Bodies.rectangle(1310,310,20,100);
	rect3=Bodies.rectangle(1090,310,20,100);
	ground = Bodies.rectangle(width/2, 350, width, 10 , {isStatic:true} );

	Engine.run(engine);
	World.add(world,rect1);
	World.add(world,rect2);
	World.add(world,rect3);
	World.add(world,ground);
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball.display();
  drawSprites();
 
}



