const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvasm,angle;
var palyer, archer,playerBase, playerArcher,base,board;
var baseimage,arrowimage,boardimage,playerimage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  boardimage = loadImage("./assets/board.png");
 

}

function setup() {
  canvas = createCanvas(windowWidth,windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  //create player base body
 var options = {
    isStatic: true
  };

  playerBase = Bodies.rectangle(width-1500,height-490,200,200,options);
   World.add(world, playerBase);

   board = Bodies.rectangle(width-250,height-750,250,250,options);
   World.add(world, board);


     angle = 270;
    archer = new Archer(width-1380,height-680,150,210,angle);
}

function draw() {
  image(backgroundImg,0,0,windowWidth,windowHeight);
  Engine.update(engine);

  text(mouseX+','+mouseY,mouseX,mouseY);

  

  image(boardimage,board.position.x,board.position.y,250,250);

  push();
  imageMode(CENTER);
  image(baseimage,playerBase.position.x,playerBase.position.y,250,200);
  pop();
 
  
   archer.display();
  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
}
