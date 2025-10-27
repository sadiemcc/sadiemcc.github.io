// Grid Demo
// 2D arrays

//hardcoded
// let theGrid = [[1, 0, 1, 0],
//                [0, 0, 1, 1],
//                [1, 1, 0, 0],
//                [0, 1, 0, 1]];
// const SQUARE_DIMENTIONS = theGrid.length;

//randomized
let theGrid;
const SQUARE_DIMENTIONS = 4;

let cellSize;

function setup() {
  createCanvas(windowWidth, windowHeight);
  if (width < height){
    cellSize = width/SQUARE_DIMENTIONS;
  }
  else{
    cellSize = height/SQUARE_DIMENTIONS;
  }
  theGrid = generateRandomGrid(SQUARE_DIMENTIONS, SQUARE_DIMENTIONS);
}

function draw() {
  background(220);
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

function generateRandomGrid(columns, rows){
  let newGrid = [];
  for (let y = 0; y < rows; y++){
    newGrid.push([]);
    for (let x = 0; x < columns; x++){
      if (random(100) < 50){
        newGrid[y].push(0);
      }
      else{
        newGrid[y].push(1);
      }
    }
  }
  return newGrid;
}