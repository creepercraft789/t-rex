var trex, trex_running, edges;
var groundImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200);
  
  //crea el Trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  edges = createEdgeSprites();
  
  //añade escala y posición al Trex
  trex.scale = 0.5;
  trex.x = 50
}


function draw(){
  //establece un color de fondo 
  background("white");
  
  //ingresa la posición y del Trex
  console.log(trex.y)
  
  //salta cuando se presiona la barra espaciadora
  if(keyDown("space")){
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.5;
  
  //evita que el Trex caiga
  trex.collide(edges[3])
  drawSprites();
}