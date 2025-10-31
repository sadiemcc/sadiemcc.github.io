// 2D Array
// Simon Says (original or to choose color where color showed)
// Make grids (easy = 9 spots, medium = 16 spots, hard = 25 spots)
// Show grid, easy grid, medium grid, hard grid

let gameState = "easyMode";
let theGrid;
let previousPressed;
const EASY_DIMENTIONS = 3;
const MED_DIMENTIONS = 4;
const HARD_DIMENTIONS = 5;

let cellSize;

function setup() {
  createCanvas(windowWidth * 0.9, windowHeight * 0.9);
  if (width < height && gameState === "easyMode"){
    cellSize = width/EASY_DIMENTIONS;
  }
  else if (width > height && gameState === "easyMode"){
    cellSize = height/EASY_DIMENTIONS;
  }
  theGrid = generateGrid(EASY_DIMENTIONS, EASY_DIMENTIONS);
}

function draw() {
  background("navy");
  showGrid();
}

function showGrid(){
  for (let y= 0; y < EASY_DIMENTIONS; y++){
    for (let x= 0; x < EASY_DIMENTIONS; x++){
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