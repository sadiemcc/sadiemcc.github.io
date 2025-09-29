//the nail salon
//Sadie McConnell
//CompSci30
//09/25/2025

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
let rectX = 25;

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

function setup() {
  createCanvas(660, 600);
  pg = createGraphics(660, 600);
  background(179, 206, 229);
  homeScreen();
}

function draw() {  
  startScreenStuff();
  swapScenes();
  image(pg, 0, 0);
}

function startScreenStuff() {
  textSize(50);
  text("the nail salon", 50, 150);
  noFill();
  rect(75, 400, 90, 120);
  rect(215, 400, 90, 120);
  rect(355, 400, 90, 120);
  rect(495, 400, 90, 120);
}

function swapScenes() {
  // natural (n)
  if (keyIsDown(78) && state === "shapeselect") {
    clear();
    noStroke();
    fill(255);
    rect(0, 0, 660, 600);
    state = "painttime";
    image(nathand, 25, 200, 600, 300);
    toolbar();
  }
  // oval (o)
  if (keyIsDown(79) && state === "shapeselect") {
    clear();
    noStroke();
    fill(255);
    rect(0, 0, 660, 600);
    state = "painttime";
    image(ovahand, 25, 200, 600, 300);
    toolbar();
  }
  // squared (s)
  if (keyIsDown(83) && state === "shapeselect") {
    clear();
    noStroke();
    fill(255);
    rect(0, 0, 660, 600);
    state = "painttime";
    image(squhand, 37, 200, 600, 300);
    toolbar();
  }
  // pointed (p)
  if (keyIsDown(80) && state === "shapeselect") {
    clear();
    noStroke();
    fill(255);
    rect(0, 0, 660, 600);
    state = "painttime";
    image(poihand, 25, 200, 600, 300);
    toolbar();
  }
}

function homeScreen() {
  image(natural, 93, 400, width * 0.08, height * 0.2);
  text("type 'n' for natural", 73, 390);
  image(oval, 235, 400, width * 0.08, height * 0.2);
  text("type 'o' for oval", 220, 390);
  image(squared, 375, 400, width * 0.08, height * 0.2);
  text("type 's' for squared", 349, 390);
  image(pointed, 515, 405, width * 0.08, height * 0.2);
  text("type 'p' for pointed", 490, 390);
}

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

function mouseClicked() {
  if (state === "painttime" && mouseY < 100 + brush / 2) {
    if (mouseX > 25 && mouseX < 50 && mouseY > 25 && mouseY < 75) {
      penColor = "red";
    }
    if (mouseX > 65 && mouseX < 90 && mouseY > 25 && mouseY < 75) {
      penColor = "orange";
    }
    if (mouseX > 105 && mouseX < 130 && mouseY > 25 && mouseY < 75) {
      penColor = "yellow";
    }
    if (mouseX > 145 && mouseX < 170 && mouseY > 25 && mouseY < 75) {
      penColor = "green";
    }
    if (mouseX > 185 && mouseX < 210 && mouseY > 25 && mouseY < 75) {
      penColor = "blue";
    }
    if (mouseX > 225 && mouseX < 250 && mouseY > 25 && mouseY < 75) {
      penColor = "purple";
    }
    if (mouseX > 265 && mouseX < 290 && mouseY > 25 && mouseY < 75) {
      penColor = "pink";
    }
    if (mouseX > 305 && mouseX < 330 && mouseY > 25 && mouseY < 75) {
      penColor = "brown";
    }
    if (mouseX > 345 && mouseX < 370 && mouseY > 25 && mouseY < 75) {
      penColor = "gray";
    }
    if (mouseX > 385 && mouseX < 410 && mouseY > 25 && mouseY < 75) {
      penColor = "black";
    }
    if (mouseX > 425 && mouseX < 450 && mouseY > 25 && mouseY < 75) {
      penColor = "white";
    }
  }
}

//PAINTING ONLY
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

function toolbar() {
  fill(147, 102, 57);
  rect(0, 0, 660, 100);

  textSize(16);
  fill("black");
  text("UP and DOWN arrow keys", 460, 35);
  text("to change your brush size", 460, 50);
  
  for (let swatch = 0; swatch < 11; swatch++){
    fill(theColors[swatch]);
    rect(rectX, 25, 25, 50);
    rectX = rectX + 40;
  }  
}