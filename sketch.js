const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1000,500);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(500,200,300,20);
    platform = new Ground(800, 300, 200, 20);

    box1 = new Box(500,195,70,70);
    box2 = new Box(520,195,70,70);



    box3 = new Box(510,195,70,70);
    box4 = new Box(530,160,70,70);
    

    

    box5 = new Box(480,160,70,70);
    box6 = new Box(506,130,70,70);
    box7 = new Box (800,290,70,70)
    box8 = new Box (800,290,70,70);

    bird = new Bird(100,100);

   // log6 = new Log(230,180,80, PI/2);
    slingShot = new Sling(bird.body,{x:200,y:200});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();

    

    box3.display();
    box4.display();
    

    box5.display();
    box6.display();
    box7.display();
    box8.display();
    bird.display();
    platform.display();
    //log6.display();
    slingShot.display();    
}

function mouseDragged(){

    Matter.Body.setPosition(bird.body,{x: mouseX,y: mouseY});

}

function mouseReleased (){

slingShot.fly();

}

function keyPressed(){
    if(keyCode === 32){
    slingshot.attach(bird.body);
    }
}