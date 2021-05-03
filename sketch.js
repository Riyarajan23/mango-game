
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
var mango,mango2,mango3,mango4
var tree,treeImage
function preload()
{
	treeImage=loadImage("tree.png")
}

function setup() {
	createCanvas(800, 700);
tree=createSprite(600,500,200,220)
tree.addImage(treeImage)
tree.scale=0.5
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
mango1=new Mango(430,480,20,20)
mango2=new Mango(515,360,20,20)
mango3=new Mango(780,455,20,20)
mango4=new Mango(700,490,20,20)
stone=new Stone(100,100,20,20)
boy=new Boy(100,620,100,220)
ground=new Ground(400,680,800,20)
rope=new Rope(stone.body,{x:70,y:620})
//tree=new Tree(600,500,400,420)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
  drawSprites();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  boy.display();
  stone.display();
  rope.display();
  ground.display();
  //tree.display();
  detectCollision (mango1,stone)
  detectCollision (mango2,stone)
  detectCollision (mango3,stone)
  detectCollision (mango4,stone)
  
  
}

function mouseDragged(){
    
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    rope.fly();
   
}

function keyPressed(){
    if(keyCode === 32){
        rope.attach(stone.body);
    }
}

function detectCollision (box,box1){
	boxbodyposition=box.body.position
	box1bodyposition=box1.body.position
	var distance=dist (boxbodyposition.x,boxbodyposition.y,box1bodyposition.x,box1bodyposition.y)
	if (distance<=box.width+box1.width){
		Matter.Body.setStatic (box.body,false)
	}
}