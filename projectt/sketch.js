const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var gameState = "onSling";


function setup(){
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,500,1200,20);
    plat1 = new Ground(800,300,175,20);
    box1 = new Box(800,275,50,50);
    box2 = new Box(850,275,50,50);
    box3 = new Box(750,275,50,50);
    box4 = new Box(780,225,50,50);
    box5 = new Box(820,225,50,50);
    box6 = new Box(800,165,50,50);
    plat2 = new Ground(800,90,120,20);
    box7 = new Box(800,50,50,50);
    projectile = new Proj(200,350,40,40);
    slingshot = new SlingShot(projectile.body,{x:200, y:350});
}

function draw(){
   background(0);
    noStroke();
   

    Engine.update(engine);
    //strokeWeight(4);
   ground.display();
   plat1.display();
   box1.display();
   box2.display();
   box3.display();
   box4.display();
   box5.display();
   box6.display();
   box7.display();
   plat2.display();
   slingshot.display();
   projectile.display();
   
   
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(projectile.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(projectile.body);
        gameState = "onSling";
        Matter.Body.setVelocity(projectile.body,{x:0,y:0});
        Matter.Body.setPosition(projectile.body,{x:200,y:350});
    }
}
