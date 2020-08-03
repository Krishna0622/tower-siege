const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

function setup() {
  engine = Engine.create();
    world = engine.world;
  createCanvas(800,400);
  box1 = new Box(450,260,40,40);
  box2 = new Box(500,260,40,40);
  box3 = new Box(550,260,40,40);
  box4 = new Box(525,210,40,40);
  box5 = new Box(475,210,40,40);
  box6 = new Box(500,160,40,40);
  bullet1 = new Bullet(100,200);
  stand1 = new Block(500,300,200,10);
  sling = new slingshot(bullet1.body,{x:100,y:200});
}

function draw() {
  background(255,255,255);  
  stand1.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  bullet1.display();
  sling.display();
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(bullet1.body,{x:mouseX,y:mouseY});

}

function mouseReleased(){
   sling.fly();   
}