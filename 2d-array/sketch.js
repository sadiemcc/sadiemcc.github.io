// 2D Array
// Simon Says (original or to choose color where color showed)
// Make grids (easy = 9 spots, medium = 16 spots, hard = 25 spots)
// Show grid, easy grid, medium grid, hard grid

let theEasyGrid = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
let theMediumGrid = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]];
let theHardGrid = [[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0]];
let cellSize;
let easyGrid;
let medGrid;
let hardGrid;
const EASY_CELL = theEasyGrid.length;
const MED_CELL = theMediumGrid.length;
const HARD_CELL = theHardGrid.length;
let gameState = "mediumMode";

function setup() {
  createCanvas(windowWidth, windowHeight);
  if (width < height && gameState === "easyMode"){
    cellSize = width/EASY_CELL;
  }
  else if (width > height && gameState === "easyMode"){
    cellSize = height/EASY_CELL;
  }
  else if (width < height && gameState === "mediumMode"){
    cellSize = width/MED_CELL;
  }
  else if (width > height && gameState === "mediumMode"){
    cellSize = height/MED_CELL;
  }
  else if (width < height && gameState === "hardMode"){
    cellSize = width/HARD_CELL;
  }
  else if (width > height && gameState === "hardMode"){
    cellSize = height/HARD_CELL;
  }
  easyGrid = generateGrid(EASY_CELL, EASY_CELL);
  medGrid = generateGrid(MED_CELL, MED_CELL);
  hardGrid = generateGrid(HARD_CELL, HARD_CELL);
}

function draw() {
  background(220);
  showHardGrid();
}

function showEasyGrid(){
  for (let y= 0; y < EASY_CELL; y++){
    for (let x= 0; x < EASY_CELL; x++){
      if (theEasyGrid[y][x] === 1){
        fill("black");
      }
      else if (theEasyGrid[y][x] === 0){
        fill("pink");
      }
      square(x * cellSize, y * cellSize, cellSize);
    }
  }
}

function showMedGrid(){
  for (let y= 0; y < MED_CELL; y++){
    for (let x= 0; x < MED_CELL; x++){
      if (theMediumGrid[y][x] === 0){
        fill("pink");
      }
      square(x * cellSize, y * cellSize, cellSize);
    }
  }
}

function showHardGrid(){
  for (let y= 0; y < HARD_CELL; y++){
    for (let x= 0; x < HARD_CELL; x++){
      if (theHardGrid[y][x] === 0){
        fill("pink");
      }
      square(x * cellSize, y * cellSize, cellSize);
    }
  }
}

function generateGrid(columns, rows){
  let newGrid = [];
  for (let y = 0; y < rows; y++){
    newGrid.push([]);
    for (let x = 0; x < columns; x++){
      newGrid[y].push(0);
    }
  }
  return newGrid;
}

