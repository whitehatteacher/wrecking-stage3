const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, ball;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18;
var hang;
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(200,height,2000,20);

    box1= new Box(500,350,90,90);
    box2= new Box(300,350,90,90);
    box3= new Box(400,350,90,90);

    box4= new Box(500,300,90,90);
    box5= new Box(300,300,90,90);
    box6= new Box(400,300,90,90);

    box7= new Box(500,250,90,90);
    box8= new Box(300,250,90,90);
    box9= new Box(400,250,90,90);

    box10= new Box(500,200,90,90);
    box11= new Box(300,200,90,90);
    box12= new Box(400,200,90,90);

    box13= new Box(500,150,90,90);
    box14= new Box(300,150,90,90);
    box15= new Box(400,150,90,90);

    box16= new Box(500,100,90,90);
    box17= new Box(300,100,90,90);
    box18= new Box(400,100,90,90);

    ball = new Ball(130, 230, 80, 80);

    hang = new Hang(ball.body, {x:80, y:100});
}

function draw(){
    background("teal");
    Engine.update(engine);
   ground.display();

   box1.display();
   box2.display();
   box3.display();
   box4.display();
   box5.display();
   box6.display();
   box7.display();
   box8.display();
   box9.display();
   box10.display();
   box11.display();
   box12.display();
   box13.display();
   box14.display();
   box15.display();
   box16.display();
   box17.display();
   box18.display();

   ball.display();

   hang.display();
}
function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}