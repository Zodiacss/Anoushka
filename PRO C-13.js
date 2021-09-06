var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function createApples() {
  apple=createSprite(random(50,350),40,10,10);
  spawnApples.mouseX

  console.log(frameCount);

 function preload(){
   apple.loadImage(apple.png);
 }
  //add image to apple sprite
apple.addImage(apple.png)
}

// velocity to apple
apple.velocityX= -4
mouseX.apple

//spawning the apple
spawnApples()

//give lifetime to apple
apple.lifetime(100);

var select_sprites= Math.round(random(1,2));
if(frameCount % 80 == 0) {
  if(select_sprites == 1){
    //call create apples function
    function createApples()
   }
   else {
     //call leaves function
     function leaves ()
   }
}

apples.lifetime(100);
leaves.lifetime(100);

function setup(){
  createCanvas(400,400);
   
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);


  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
  
}
