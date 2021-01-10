
 const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Dustbin1,Dustbin2,Dustbin3
function preload()

{

	
}

function setup() {
	createCanvas(800, 700);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("yellow")

  
	
	engine = Engine.create();
	world = engine.world;
	
	
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
   Engine.run(engine);
                      
   Engine.run(engine); 

  Dustbin1 = new Dustbin(543,620,15,80);
  Dustbin2 = new Dustbin(590,653,80,15);
  Dustbin3 = new Dustbin(637,620,15,80);
  paper1 = new Paper(200,400,2);
	
	

}



 function draw() {
  rectMode(CENTER);
  background(0);
  Dustbin1.display();
  Dustbin2.display();
  Dustbin3.display();
  paper1.display();

  drawSprites();
 
}
function keyPressed(){

  if(keyCode === UP_ARROW){
  
Matter.paper1.applyForce(paper1.body,paper1.body.position,{x:12,y:-13})
  
  }
}
