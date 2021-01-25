const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player;
var wall;
var border;
var maze;
var lives=5;
var invis;
var boss1;
var boss2;
var slider;
var bossImg;
var playerImg;
var trophy,trophyImg;
var win,winImg;

function preload(){
  bossImg=loadImage("monster.png");
  playerImg=loadImage("smiley.png");
  trophyImg=loadImage("trophy.png");
  winImg=loadImage("win.png");
}

function setup() {

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  canvas=createCanvas(1200,800);

  wall1 = createSprite(5,400,10,800);
  wall2 = createSprite(595,375,10,750);
  wall3 = createSprite(300,5,600,10);
  wall4 = createSprite(300,795,600,10);
  wall1.shapeColor="black";
  wall2.shapeColor="black";
  wall3.shapeColor="black";
  wall4.shapeColor="black";

  wall5 = createSprite(605,375,10,750);
  wall6 = createSprite(1195,400,10,800);
  wall7 = createSprite(900,5,600,10);
  wall8 = createSprite(900,795,600,10);
  wall5.shapeColor="red";
  wall6.shapeColor="red";
  wall7.shapeColor="red";
  wall8.shapeColor="red";

  border1 = createSprite(935,95,530,10);
  border1.shapeColor="red";
  border2 = createSprite(900,45,10,100);
  border2.shapeColor="red";
  border3 = createSprite(870,295,530,10);
  border3.shapeColor="red";
  border4 = createSprite(275,545,530,10);
  border4.shapeColor="black";
  border5 = createSprite(325,745,530,10);
  border5.shapeColor="black";

  invis1 = createSprite(640,95,60,10);
  invis2 = createSprite(1163,295,55,10);
  invis3 = createSprite(565,545,50,10);
  invis4 = createSprite(35,745,50,10);
  invis1.shapeColor="white";
  invis2.shapeColor="white";
  invis3.shapeColor="white";
  invis4.shapeColor="white";

  maze1 = createSprite(200,60,10,160);
  maze2 = createSprite(105,200,200,10);

  maze3 = createSprite(250,200,10,100);
  maze4 = createSprite(155,250,200,10);
  maze5 = createSprite(400,50,300,10);
  maze6 = createSprite(350,100,200,10);
  maze7 = createSprite(450,77.5,10,55);
  maze8 = createSprite(550,100,80,10);
  maze9 = createSprite(490,150,100,10);
  maze10 = createSprite(490,200,200,10);
  maze11 = createSprite(490,250,100,10);
  maze12 = createSprite(390,200,10,100);
  maze13 = createSprite(320,235,10,170);
  maze14 = createSprite(415,315,200,10);
  maze15 = createSprite(135,315,260,10);
  maze16 = createSprite(235,375,460,10);
  maze17 = createSprite(560,375,65,10);
  maze18 = createSprite(470,350,10,60);
  maze19 = createSprite(325,435,530,10);

  maze1.shapeColor="black";
  maze2.shapeColor="black";
  maze3.shapeColor="black";
  maze4.shapeColor="black";
  maze5.shapeColor="black";
  maze6.shapeColor="black";
  maze7.shapeColor="black";
  maze8.shapeColor="black";
  maze9.shapeColor="black";
  maze10.shapeColor="black";
  maze11.shapeColor="black";
  maze12.shapeColor="black";
  maze13.shapeColor="black";
  maze14.shapeColor="black";
  maze15.shapeColor="black";
  maze16.shapeColor="black";
  maze17.shapeColor="black";
  maze18.shapeColor="black";
  maze19.shapeColor="black";

  slider1 = createSprite(150,460,10,40);
  slider2 = createSprite(300,520,10,40);
  slider3 = createSprite(450,460,10,40);
  slider1.shapeColor="red";
  slider2.shapeColor="red";
  slider3.shapeColor="red";
  slider1.velocityY=3;
  slider2.velocityY=3;
  slider3.velocityY=3;


  slider4 = createSprite(650,400,80,10);
  slider5 = createSprite(1150,500,80,10);
  slider6 = createSprite(650,600,80,10);
  slider7 = createSprite(1150,700,80,10);
  slider4.shapeColor="black";
  slider5.shapeColor="black";
  slider6.shapeColor="black";
  slider7.shapeColor="black";
  slider4.velocityX=10;
  slider5.velocityX=-10;
  slider6.velocityX=10;
  slider7.velocityX=-10;

  boss1 = createSprite(900,150,60,60);
  boss1.velocityX=5;
  boss1.velocityY=4;
  boss1.addImage(bossImg);
  boss1.scale=0.2;

  boss2 = createSprite(300,700,50,50);
  boss2.velocityX=3;
  boss2.velocityY=2;
  boss2.addImage(bossImg);
  boss2.scale=0.3;

  player = createSprite(100,100,20,20);
  player.addImage(playerImg);
  player.scale=0.05;

  trophy = createSprite(800,50,10,10);
  trophy.addImage(trophyImg);
  trophy.scale=0.05;

  

  

  



  

  /*wall1 = new Wall(5,400,10,800,"black");
  wall2 = new Wall(595,375,10,750,"black");
  wall3 = new Wall(300,5,600,10,"black");
  wall4 = new Wall(300,795,600,10,"black");

  wall5 = new Wall(605,375,10,750,"red");
  wall6 = new Wall(1195,400,10,800,"red");
  wall7 = new Wall(900,5,600,10,"red");
  wall8 = new Wall(900,795,600,10,"red");

  border1 = new Wall(940,105,520,10,"red");*/
  

}

function draw() {

  background("white");
  Engine.update(engine);
  createEdgeSprites();

  if (keyDown("right")) {
    player.x = player.x+3;
  }
  
  if (keyDown("left")) {
    player.x = player.x-3;
  }
  
  if (keyDown("up")) {
    player.y = player.y-3;
  }
  
  if (keyDown("down")) {
    player.y = player.y+3;
  }

  player.bounceOff(wall1);
  player.bounceOff(wall2);
  player.bounceOff(wall3);
  player.bounceOff(wall4);
  player.bounceOff(wall5);
  player.bounceOff(wall6);
  player.bounceOff(wall7);
  player.bounceOff(wall8);

  player.bounceOff(border1);
  player.bounceOff(border2);
  player.bounceOff(border3);
  player.bounceOff(border4);
  player.bounceOff(border5);

  player.bounceOff(maze1);
  player.bounceOff(maze2);
  player.bounceOff(maze3);
  player.bounceOff(maze4);
  player.bounceOff(maze5);
  player.bounceOff(maze6);
  player.bounceOff(maze7);
  player.bounceOff(maze8);
  player.bounceOff(maze9);
  player.bounceOff(maze10);
  player.bounceOff(maze11);
  player.bounceOff(maze12);
  player.bounceOff(maze13);
  player.bounceOff(maze14);
  player.bounceOff(maze15);
  player.bounceOff(maze16);
  player.bounceOff(maze17);
  player.bounceOff(maze18);
  player.bounceOff(maze19);

  //player.bounceOff(slider1);
  //player.bounceOff(slider2);
  //player.bounceOff(slider3);
  //player.bounceOff(slider4);
  //player.bounceOff(slider5);
  //player.bounceOff(slider6);
  //player.bounceOff(slider7);

  //player.bounceOff(boss1);
  //player.bounceOff(boss2);

  slider1.bounceOff(maze19);
  slider1.bounceOff(border4);

  slider2.bounceOff(maze19);
  slider2.bounceOff(border4);

  slider3.bounceOff(maze19);
  slider3.bounceOff(border4);

  slider4.bounceOff(wall5);
  slider4.bounceOff(wall6);

  slider5.bounceOff(wall5);
  slider5.bounceOff(wall6);

  slider6.bounceOff(wall5);
  slider6.bounceOff(wall6);

  slider7.bounceOff(wall5);
  slider7.bounceOff(wall6);

  boss1.bounceOff(wall5);
  boss1.bounceOff(wall6);
  boss1.bounceOff(border1);
  boss1.bounceOff(border3);
  boss1.bounceOff(invis1);
  boss1.bounceOff(invis2);

  boss2.bounceOff(wall1);
  boss2.bounceOff(wall2);
  boss2.bounceOff(border4);
  boss2.bounceOff(border5);
  boss2.bounceOff(invis3);
  boss2.bounceOff(invis4);

  if(player.isTouching(slider1)){
    lives=lives-1;
    player.x=100;
    player.y=100;
  }
  if(player.isTouching(slider2)){
    lives=lives-1;
    player.x=100;
    player.y=100;
  }
  if(player.isTouching(slider3)){
    lives=lives-1;
    player.x=100;
    player.y=100;
  }
  if(player.isTouching(slider4)){
    lives=lives-1;
    player.x=100;
    player.y=100;
  }
  if(player.isTouching(slider5)){
    lives=lives-1;
    player.x=100;
    player.y=100;
  }
  if(player.isTouching(slider6)){
    lives=lives-1;
    player.x=100;
    player.y=100;
  }
  if(player.isTouching(slider7)){
    lives=lives-1;
    player.x=100;
    player.y=100;
  }
  if(player.isTouching(boss1)){
    lives=lives-1;
    player.x=100;
    player.y=100;
  }
  if(player.isTouching(boss2)){
    lives=lives-1;
    player.x=100;
    player.y=100;
  }

  if(player.isTouching(trophy)){
    var black = createSprite (600,400,1200,800);
    win = createSprite(600,400,10,10);
    win.addImage(winImg);
  }


  line(150,435,150,545);
  line(150,435,150,545);
  line(150,435,150,545);

  line(300,435,300,545);
  line(300,435,300,545);
  line(300,435,300,545);

  line(450,435,450,545);
  line(450,435,450,545);
  line(450,435,450,545);

  line(600,400,1200,400);
  line(600,400,1200,400);
  line(600,400,1200,400);

  line(600,500,1200,500);
  line(600,500,1200,500);
  line(600,500,1200,500);

  line(600,600,1200,600);
  line(600,600,1200,600);
  line(600,600,1200,600);

  line(600,700,1200,700);
  line(600,700,1200,700);
  line(600,700,1200,700);

  fill("black");
  textSize(30)
  text("Ultimate Escape",940,50);

  textSize(20)
  text("Lives : "+lives,1010,75);

  drawSprites();
}