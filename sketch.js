const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world,box1;

function setup() {
  createCanvas(800,370);
  engine = Engine.create();
  world=engine.world;

  box1=new Box(200,300,50,50);
  box2=new Box(240,100,50,100);
  box2.color="yellow";
  console.log(box1);

  ground1 = new Ground(100,height,1700,70);

}
  

function draw() {
  background("black"); 
  Engine.update(engine);
  
  box1.display_box();
  box2.display_box();
  ground1.display_ground();
}