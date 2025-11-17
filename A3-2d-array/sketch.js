// 2D Array
// Memorize the grid and redraw it after within 5 seconds
// The code is messy and the game is not how i'd like it to be, but thats okay. ive been sick and thats not an excuse just an explaination. not my best work but either way im happy 

let gameState = "hardMode";
let theGrid;
const SQUARE_DIMENTIONS = 4;
let previousPressed;
let lastSwitched = 0;
let shownDuration = 5000;
let drawDuration = 10000;
let cellSize;
let previousRound = [];
let previousDrawn = [];
let prevDrawn;
let prevRound;
let state = "shown";

function setup() {
  createCanvas(windowWidth * 0.9, windowHeight * 0.9);
  if (width < height && gameState === "hardMode"){
    cellSize = width/SQUARE_DIMENTIONS;
  }
  else if (width > height && gameState === "hardMode"){
    cellSize = height/SQUARE_DIMENTIONS;
  }
  theGrid = generateRandomGrid(SQUARE_DIMENTIONS, SQUARE_DIMENTIONS);
  previousRound.push(theGrid);
  words();
}

function draw() {
  passingTime();
  showGrid();
}

function passingTime(){
  if (millis() > lastSwitched + shownDuration && state === "shown"){
    lastSwitched = millis();
    state = "drawing";
    theGrid = generateEmptyGrid(SQUARE_DIMENTIONS, SQUARE_DIMENTIONS);
  }
  else if (millis() > lastSwitched + drawDuration && state === "drawing"){
    submitDrawing();
  }
}

function showGrid(){
  for (let y= 0; y < SQUARE_DIMENTIONS; y++){
    for (let x= 0; x < SQUARE_DIMENTIONS; x++){
      if (theGrid[y][x] === 1){
        fill("black");
      }
      else if (theGrid[y][x] === 0){
        fill("pink");
      }
      square(x * cellSize, y * cellSize, cellSize);
    }
  }
}

function mousePressed(){
  let x = Math.floor(mouseX/cellSize);
  let y = Math.floor(mouseY/cellSize);

  if (state === "drawing"){
    toggleCell(x, y);
  }
}

function keyPressed(){
  if (key === " " && state === "drawing"){
    submitDrawing();
  }
}

function submitDrawing(){
  previousDrawn.push(theGrid);
  console.log(previousDrawn);
  console.log(previousRound);
  
  if (previousRound[0] === previousDrawn[0]){
    background("green");
  }
  else if (previousRound !== previousDrawn){
    state = "loss";
  }
}

function toggleCell(x, y){
  if (theGrid[y][x] === 1){
    theGrid[y][x] = 0;
  }
  else if (theGrid[y][x] === 0){
    theGrid[y][x] = 1;
  }
}

function generateRandomGrid(columns, rows){
  let newGrid = [];
  for (let y = 0; y < rows; y++){
    newGrid.push([]);
    for (let x = 0; x < columns; x++){
      if (random(100) < 50){
        newGrid[y].push(1);
      }
      else{
        newGrid[y].push(0);
      }
    }
  }
  return newGrid;
}

function generateEmptyGrid(columns, rows){
  let newGrid = [];
  for (let y = 0; y < rows; y++){
    newGrid.push([]);
    for (let x = 0; x < columns; x++){
      newGrid[y].push(0);
    }
  }
  return newGrid;
}

function words(){
  textSize(75);
  text("Memory Game", width/2+100, height/2-200);
  textSize(35);
  text("The grid will show a pattern.", width/2+100, height/2-100);
  text("Memorize it and redraw it when", width/2+100, height/2-50);
  text(" the grid turns clear.", width/2+100, height/2);
}