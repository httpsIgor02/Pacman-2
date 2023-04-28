var pacman, lowerWall, upperWall, leftWall, walls, wall

function setup() {
  createCanvas(1200, 550);
  
  pacman= createSprite(50,50);
  //lowerWall= createSprite(550,450,1200,40);
  //upperWall= createSprite(550,20,1200,40);
  //leftWall= createSprite(15,235,40,390);

  walls = [
    {x: 550,y:550,w:1200,h:40},
    {x:550,y:20,w:1200,h:40},
    {x:20,y:20,w:40,h:1200},
  ]

  for(var i in walls){
    var wall = 
    createSprite(walls[i].x,walls[i].y,walls[i].w,walls[i].h)
  }
}

function draw() {
  // Fill the canvas with light gray, covering up previous images
  background(220);

  // Set the fill color to dark gray
  fill(50);
  // Draws a circle that follows the mouse
  if (keyDown("right")){
    pacman.x +=5
  }

  if (keyDown("left")){
    pacman.x -=5
  }

  if (keyDown("up")){
    pacman.y -=5
  }

  if (keyDown("down")){
    pacman.y +=5
  }
  

  drawSprites();
}