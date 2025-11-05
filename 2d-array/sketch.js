// 2D Array
// Memorize the grid and redraw it after within 5 seconds

let gameState = "hardMode";
let theGrid = [[0, 0, 0, 0],
               [0, 0, 0, 0],
               [0, 0, 0, 0],
               [0, 0, 0, 0]];
const SQUARE_DIMENTIONS = theGrid.length;
let previousPressed;
let lastSwitched = 0;
let shownDuration = 5000;
let drawDuration = 8000;
let cellSize;
let previousRound = [];
let state = "drawing";

function setup() {
  createCanvas(windowWidth * 0.9, windowHeight * 0.9);
  if (width < height && gameState === "hardMode"){
    cellSize = width/SQUARE_DIMENTIONS;
  }
  else if (width > height && gameState === "hardMode"){
    cellSize = height/SQUARE_DIMENTIONS;
  }
 
}

function draw() {
  
  passingTime();
  background("navy");
  showGrid();
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

  toggleCell(x, y);
}

function toggleCell(x, y){
  if (theGrid[y][x] === 1){
    theGrid[y][x] = 0;
  }
  else if (theGrid[y][x] === 0){
    theGrid[y][x] = 1;
  }
}

function passingTime(){
  if (millis() > lastSwitched + shownDuration && state === "drawing"){
    generateRandomGrid();
    lastSwitched = millis();
    theGrid = generateRandomGrid(SQUARE_DIMENTIONS, SQUARE_DIMENTIONS);
    let state = "shown";
  }
  else if (millis() > lastSwitched + drawDuration && state === "shown"){
    generateEmptyGrid();
    lastSwitched = millis();
    theGrid = generateEmptyGrid(SQUARE_DIMENTIONS, SQUARE_DIMENTIONS);
    let state = "drawing";
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