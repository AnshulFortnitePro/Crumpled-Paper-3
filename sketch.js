
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground, gameState,engine, world,dustbin,paper,paperImage, dustbinImage, launcherObject;

function preload(){
  dustbinImage = loadImage("Dustbin.png")
  paperImage = loadImage("paper.png");
}

function setup() {
  createCanvas(800, 400);
  rectMode(CENTER);

  gameState = "start";

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  dustbin = new DustBin(580, 365, 100, 10);
  paper = new Paper(130, 280, 10);

 ground = new Ground(width/2, 380, width, 20);
 
 sling = new SlingShot(paper.body,{x:300,y:300})

}

function draw() {

  Engine.update(engine);

  if (gameState === "start") {
    background("black");
    textSize(20);
    fill("red");
	text("This Game will teach you the importance of throwing away your trash.", 50, 200)
	text("        Press Up Arrow to Start, and Up to throw away the trash.", 50, 240)
	
    if (keyCode === UP_ARROW) {
      gameState = "play"
    }
  }

  if (gameState === "play") {
    rectMode(CENTER);
    background("cyan");
   
    
  
   
    

     ground.display();
  
     imageMode(CENTER);
     image(paperImage, paper.body.position.x, paper.body.position.y, 50,50);
     paper.display();
     
     dustbin.display();
     image(dustbinImage, 580, 320, 123,100);

    
 
    mouseDragged();
    mouseReleased();
    sling.display();

  }
}

function mouseDragged(){

  Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY});
}


function mouseReleased(){
  
  sling.fly();
}