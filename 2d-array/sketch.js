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
  
}

function draw() {
  passingTime();
  background("navy");
  showGrid();
}

function passingTime(){
  if (millis() > lastSwitched + shownDuration && state === "shown"){
    generateRandomGrid();
    lastSwitched = millis();
    theGrid = generateRandomGrid(SQUARE_DIMENTIONS, SQUARE_DIMENTIONS);
    state = "drawing";
    previousRound.push(theGrid);
    console.log(previousRound);
  }
  else if (millis() > lastSwitched + drawDuration && state === "drawing"){
    generateEmptyGrid();
    lastSwitched = millis();
    theGrid = generateEmptyGrid(SQUARE_DIMENTIONS, SQUARE_DIMENTIONS);
    previousDrawn.push(theGrid);
    console.log(previousDrawn);
    state = "check";
  }
  else if (millis() > lastSwitched + checkDuration && state === "check"){
    clear();
    lastSwitched = millis();
    if (previousRound[theGrid] === previousDrawn[theGrid]){
      clear();
      textAlign(CENTER);
      text("TEST", width/2, height/2);
    }
    else if (previousRound !== previousDrawn){
      text("NOPE", width/2, height/2);
    }
    state = "shown";
  }
  previousDrawn = [];
  previousRound = [];
  console.log(state);
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

  if (state === "shown" || state === "check"){
    toggleCell(x, y);
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