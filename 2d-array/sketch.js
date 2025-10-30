// 2D Array
// Simon Says (original or to choose color where color showed)
// Make grids (easy = 9 spots, medium = 16 spots, hard = 25 spots)

let grid;
let columns;
let rows;
let easyCellSize = 4;
let mediumCellSize = 5;
let hardCellSize = 6;
let gameState = "easyLevel";

function setup() {
  createCanvas(windowWidth, windowHeight);
  easyGrid(columns, rows);
}

function draw() {
  background(220);
}

function easyGrid(columns, rows){
  for (let y= 0; y < easyCellSize; y++){
    for (let x= 0; x < easyCellSize; x++){
      fill("pink");
      square(x * cellSize, y * cellSize, cellSize);
    }
  }
}

function mediumGrid(columns, rows){

}

function hardGrid(columns, rows){

}