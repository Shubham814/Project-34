const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var world,engine;

var hero;
var line1;
var ground1;
var bg;
var enemy;
var block1,block2,block3,block4,block5,black6;
var block7,block8,block9,block10,block11;
var block12,block13,block14,block15;
var block16,block17,block18,block19,block20,block21;
var block22,block23,block24,block25;
var block26,block27,block28,block29,block30,block31,block32;

function preload() {
//preload the images here
bg = loadImage("GamingBackground.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
 
  engine = Engine.create();
  world = engine.world;

  ground1 = new ground(500,550,1250,20);

  hero = new heroClass(100,100,300,150);

  enemy = new enemyClass(1000 ,300,200,250);
  //enemy.visible = false;

  line1 = new launcher(hero.body,{x:250,y:250});

  //first layer
  block1 = new block(770,500,50,50);
  block2 = new block(770,450,50,50);
  block3 = new block(770,400,50,50);
  block4 = new block(770,350,50,50);
  block5 = new block(770,300,50,50);
  block6 = new block(770,250,50,50);
  //second layer
  block7 = new block(700,500,50,50);
  block8 = new block(700,450,50,50);
  block9 = new block(700,400,50,50);
  block10 = new block(700,350,50,50);
  block11 = new block(700,300,50,50);
  block12 = new block(700,250,50,50);
  block13 = new block(700,200,50,50);
  block14 = new block(700,150,50,50);
  //third layer
  block15 = new block(630,500,50,50);
  block16 = new block(630,450,50,50);
  block17 = new block(630,400,50,50);
  block18 = new block(630,350,50,50);
  block19 = new block(630,300,50,50);
  block20 = new block(630,250,50,50);
  block21 = new block(630,200,50,50);
  //fourth layer
  block22 = new block(540,500,50,50);
  block23 = new block(540,450,50,50);
  block24= new block(540,400,50,50);
  block25= new block(540,350,50,50);
  //fifth layer
  block26= new block(470,500,50,50);
  block27= new block(470,450,50,50);
  block28= new block(470,400,50,50);
  block29= new block(470,350,50,50);
  block30= new block(470,300,50,50);
  block31= new block(470,250,50,50);
  block32= new block(470,200,50,50);
  

 

}

function draw() {
  background(bg);
  Engine.update(engine);

  //fill(255);
  //text(mouseX + "," + mouseY,20,20);

  
  line1.display();
  hero.display();
  enemy.display();
  ground1.display();
  //
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  //
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  //
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  //
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  //
  block26.display();
  block27.display();
  block28.display();
  block29.display();
  block30.display();
  block31.display();
  block32.display();
  
  
  

}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{ x: mouseX , y: mouseY});
}

