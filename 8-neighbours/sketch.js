// Rectangle Neighbours Demo

const CELL_SIZE = 300;
let grid;
let rows;
let columns;

function setup() {
  createCanvas(windowWidth, windowHeight);
  columns = Math.floor(width/CELL_SIZE);
  rows = Math.floor(height/CELL_SIZE);
  grid = generateRandomGrid(columns, rows);
}

function draw() {
  background(220);
  displayGrid();
}

function mousePressed(){
  let x = Math.floor(mouseX/CELL_SIZE);
  let y = Math.floor(mouseY/CELL_SIZE);

  //self
  toggleCell(x, y);

  //neighbours
  toggleCell(x+1, y);
  toggleCell(x-1, y);
  toggleCell(x, y-1);
  toggleCell(x, y+1);
}

function toggleCell(x, y){
  //make sure toggled cell exists
  if (x >= 0 && x < columns && y >= 0 && y < rows){
    if (grid[y][x] === 0){
      grid[y][x] = 1;
    }
    else if (grid[y][x] === 1){
      grid[y][x] = 0;
    }
  }
}

function keyPressed(){
  if (key === "r"){
    grid = generateRandomGrid(columns, rows);
  }
  else if (key === "e"){
    grid = generateEmptyGrid(columns, rows);
  }
}

function displayGrid(){
  for (let y = 0; y < rows; y++){
    for (let x = 0; x < columns; x++){
      if (grid[y][x] === 0){
        fill("pink");
      }
      else if (grid[y][x] === 1){
        fill("black");
      }
      square(x*CELL_SIZE, y*CELL_SIZE, CELL_SIZE);
    }
  }
}

function generateRandomGrid(columns, rows){
  let newGrid = [];
  for (let y = 0; y < rows; y++){
    newGrid.push([]);
    for (let x = 0; x < columns; x++){
      // random 0 or 1
      if (random(100) < 50){
        newGrid[y].push(0);
      }
      else {
        newGrid[y].push(1);
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