//Instance with all the info of the game
const game = new Game();

//Load images
function preload() {
  backgroundImage = loadImage("images/lisbon.jpg");
  van = loadImage("/images/car.png");
  thief = loadImage("/images/thief.jpg");
  pastel = loadImage("/images/pastel.jpg");
}

function draw() {
  game.draw();
}

//set up canvas
function setup() {
  createCanvas(WIDTH, HEIGHT);
  game.setup();
}

//checks if we press a key
function keyPressed() {
  game.keyPressed();
}
