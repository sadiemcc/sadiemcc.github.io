// 2D Array
// Memorize the grid and redraw it after within 5 seconds
// The code is messy and the game is not how i'd like it to be, but thats okay. ive been sick and thats not an excuse just an explaination. not my best work but either way im happy 

let gameState = "hardMode";
let theGrid;
const SQUARE_DIMENTIONS = 4;
let previousPressed;
let lastSwitched = 0;
let shownDuration = 5000;
let drawDuration = 6500;
let checkDuration = 8000;
let cellSize;
let previousRound = [];
let previousDrawn = [];
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
}

function draw() {
  passingTime();
  background("navy");
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
    clear();
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