
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}

   dustbin= new dustbin (200,300,50,50);
   crumbledPaper= new paper (100,200,50,50);



   function keypresed() {
   if (keyCode === UP_ARROW){
	 Matter.body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})
        }
   }

   dustbin.display();
   crumbledPaper.display();
function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



