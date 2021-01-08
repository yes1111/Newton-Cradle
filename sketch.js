
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	b1 = new Bob(250,150,50)
	b2 = new Bob(260,150,50)
	b3 = new Bob(270,150,50)
	b4 = new Bob(280,150,50)
	b5 = new Bob(290,150,50)

	roof = new Roof(400,20,600,20)
	
	r1 = new Rope(b1.body,roof.body)
	r2 = new Rope(b2.body,roof.body)
	r3 = new Rope(b3.body,roof.body)
	r4 = new Rope(b4.body,roof.body)
	r5 = new Rope(b5.body,roof.body)

	Engine.run(engine);

	
  
}


function draw() {
  rectMode(CENTER);
  background("lightBlue");
  

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  roof.display();
  r1.display();
  r2.display();
  r3.display();
  r4.display();
  r5.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyDown === UP_ARROW){
		Matter.Body.applyForce(b1.body,{x:100,y:-100})
	}
}

