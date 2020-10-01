const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var paperObject, dustbin, ground;

function setup() {
	createCanvas(windowWidth, 400);


	engine = Engine.create();
	world = engine.world;

	//creating paper objects
	paperObject = new Paper(200, 350);

	//creating dustbins
	dustbin = new Dustbin(windowWidth-110, 345);

	//creating grounds
	ground = new Ground(width / 2, height - 30);

	//running engine
	Engine.run(engine);


	
}

function draw() {
	rectMode(CENTER);
	background(0);

	//displaying paper objects
	paperObject.display();

	//displaying bustbins
	dustbin.display();

	//displaying grounds
	ground.display();

	drawSprites();
    
}

function keyPressed() {
	if (keyCode == UP_ARROW) {
		Body.applyForce(paperObject.body, paperObject.body.position, { x: 90, y: -85 });
	}
}
