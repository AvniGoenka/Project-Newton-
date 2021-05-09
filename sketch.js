
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObj1,bobObj2,bobObj3,bobObj4,bobObj5;
var ropeObj1,ropeObj2,ropeObj3,ropeObj4,ropeObj5;
var roofObj;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    bobObj1= new Bob(300,400,30)
	bobObj2= new Bob(240,400,30)
    bobObj3= new Bob(180,400,30)
    bobObj4= new Bob(360,400,30)
    bobObj5= new Bob(420,400,30)

    ropeObj1= new Rope(bobObj1.body,{x:300,y:200})
	ropeObj2= new Rope(bobObj2.body,{x:240,y:200})
    ropeObj3= new Rope(bobObj3.body,{x:180,y:200})
    ropeObj4= new Rope(bobObj4.body,{x:360,y:200})
    ropeObj5= new Rope(bobObj5.body,{x:420,y:200})
    
	roofObj= new Roof(300,200,500,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('lightblue');
  bobObj1.display();
  bobObj2.display();
  bobObj3.display();
  bobObj4.display();
  bobObj5.display();

  ropeObj1.display();
  ropeObj2.display();
  ropeObj3.display();
  ropeObj4.display();
  ropeObj5.display();

  roofObj.display();
  drawSprites();
 
}

function keyPressed(){
	console.log(keyCode)
 if(keyCode===32){
  Matter.Body.applyForce(bobObj5.body,bobObj5.body.position,{x:500,y:-500})
  console.log("keycode")
 }
}


