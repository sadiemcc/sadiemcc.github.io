//the nail salon
//Sadie McConnell
//CompSci30
//10/02/2025

//EXTRA FOR EXPERTS PROPOSAL:
//using a graphics object (drawing on the graphics object and only appearing when it's time to draw)

//global variables
let natural;
let nathand;
let oval;
let ovahand;
let squared;
let squhand;
let pointed;
let poihand;
let pg;
let state = "shapeselect";
let brush = 5;
let penColor = "black";
let theColors = ["red", "orange", "yellow", "green", "blue", "purple", "pink", "brown", "gray", "black", "white"];
let theColorsState = "black";
let rectX = 50;
let rectBorder = 0;

//image preloading
function preload() {
  natural = loadImage("natural.png");
  nathand = loadImage("nathand.png");
  oval = loadImage("oval.png");
  ovahand = loadImage("ovahand.png");
  squared = loadImage("squared.png");
  squhand = loadImage("squhand.png");
  pointed = loadImage("pointed.png");
  poihand = loadImage("poihand.png");
}

//setup
function setup() {
  createCanvas(windowWidth, windowHeight);
  pg = createGraphics(windowWidth, windowHeight);
  background(179, 206, 229);
  homeScreen();
}

//draw
function draw() {  
  startScreenStuff();
  swapScenes();
  image(pg, 0, 0);
}

//title name and border around nail types
function startScreenStuff() {
  textSize(100);
  text("the nail salon", 100, 250);
  noFill();
  rect(windowWidth/6, windowHeight/2, width*0.09, height * 0.4);
  rect(windowWidth/6*2, windowHeight/2, width*0.08, height * 0.4);
  rect(windowWidth/6*3, windowHeight/2, width*0.09, height * 0.4);
  rect(windowWidth/6*4, windowHeight/2, width*0.08, height * 0.4);
}

//nail types and keybind selections
function homeScreen() {
  textSize(25);
  image(natural, windowWidth/6, windowHeight/2, width*0.09, height * 0.4);
  text("type 'n' for natural", windowWidth/6, windowHeight/2.1);
  image(oval, windowWidth/6*2, windowHeight/2, width*0.08, height * 0.4);
  text("type 'o' for oval", windowWidth/6*2, windowHeight/2.1);
  image(squared, windowWidth/6*3, windowHeight/2, width*0.09, height * 0.4);
  text("type 's' for squared", windowWidth/6*3, windowHeight/2.1);
  image(pointed, windowWidth/6*4, windowHeight/2, width*0.08, height * 0.4);
  text("type 'p' for pointed", windowWidth/6*4, windowHeight/2.1);
}

//swapping to painting scene
function swapScenes() {
  // natural (n)
  if (keyIsDown(78) && state === "shapeselect") {
    clear();
    noStroke();
    fill(255);
    rect(0, 0, windowWidth, windowHeight);
    state = "painttime";
    image(nathand, 25, 200, windowWidth-100, windowHeight-300);
    toolbar();
  }
  // oval (o)
  if (keyIsDown(79) && state === "shapeselect") {
    clear();
    noStroke();
    fill(255);
    rect(0, 0, windowWidth, windowHeight);
    state = "painttime";
    image(ovahand, 25, 200, windowWidth-100, windowHeight-300);
    toolbar();
  }
  // squared (s)
  if (keyIsDown(83) && state === "shapeselect") {
    clear();
    noStroke();
    fill(255);
    rect(0, 0, windowWidth, windowHeight);
    state = "painttime";
    image(squhand, 37, 200, windowWidth-100, windowHeight-300);
    toolbar();
  }
  // pointed (p)
  if (keyIsDown(80) && state === "shapeselect") {
    clear();
    noStroke();
    fill(255);
    rect(0, 0, windowWidth, windowHeight);
    state = "painttime";
    image(poihand, 25, 200, windowWidth-100, windowHeight-300);
    toolbar();
  }
}

//changing brush size
function keyPressed() {
  if (state === "painttime") {
    if (keyCode === UP_ARROW) {
      brush = brush + 1;
    }
    if (keyCode === DOWN_ARROW) {
      if (brush <= 1) {
        brush = 1;
      }
      if (brush > 1) {
        brush = brush - 1;
      }
    }
  }
}

//brush color selection
function mouseClicked() {
  if (state === "painttime" && mouseY < 100 + brush / 2) {
    if (mouseX > 50 && mouseX < 100 && mouseY > 25 && mouseY < 75) {
      penColor = "red";
    }
    else if (mouseX > 150 && mouseX < 200 && mouseY > 25 && mouseY < 75) {
      penColor = "orange";
    }
    else if (mouseX > 250 && mouseX < 300 && mouseY > 25 && mouseY < 75) {
      penColor = "yellow";
    }
    else if (mouseX > 350 && mouseX < 400 && mouseY > 25 && mouseY < 75) {
      penColor = "green";
    }
    else if (mouseX > 450 && mouseX < 500 && mouseY > 25 && mouseY < 75) {
      penColor = "blue";
    }
    else if (mouseX > 550 && mouseX < 600 && mouseY > 25 && mouseY < 75) {
      penColor = "purple";
    }
    else if (mouseX > 650 && mouseX < 700 && mouseY > 25 && mouseY < 75) {
      penColor = "pink";
    }
    else if (mouseX > 750 && mouseX < 800 && mouseY > 25 && mouseY < 75) {
      penColor = "brown";
    }
    else if (mouseX > 850 && mouseX < 900 && mouseY > 25 && mouseY < 75) {
      penColor = "gray";
    }
    else if (mouseX > 950 && mouseX < 1000 && mouseY > 25 && mouseY < 75) {
      penColor = "black";
    }
    else if (mouseX > 1050 && mouseX < 1100 && mouseY > 25 && mouseY < 75) {
      penColor = "white";
    }
  }
}

//painting (on a graphics "screen"[kind of like drawing on a clear plastic sheet and only appearing when called upon])
function mouseDragged() {
  if (state === "painttime" && mouseY > 100 + brush / 2) {
    pg.noStroke();
    pg.circle(mouseX, mouseY, brush);
    pg.strokeWeight(brush);
    pg.stroke(penColor);
    pg.fill(penColor);
    pg.line(pmouseX, pmouseY, mouseX, mouseY);
  }
}

//top toolbar menu thingie 
function toolbar() {
  fill(147, 102, 57);
  rect(0, 0, windowWidth, 100);

  textSize(16);
  fill("black");
  text("UP and DOWN arrow keys", 1150, 35);
  text("to change your brush size", 1150, 50);
  
  for (let swatch = 0; swatch < 11; swatch++){
    fill(theColors[swatch]);
    rect(rectX, 25, 50, 50);
    rectX = rectX + 100;
  }  
}