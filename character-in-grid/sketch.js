// Rectangle Neighbours Demo

const CELL_SIZE = 50;
const OPEN_TILE = 0;
const IMPASSIBLE = 1;
const PLAYER = 9;
let grid;
let rows;
let columns;
let thePlayer = {
  x: 0,
  y: 0
};

function setup() {
  createCanvas(windowWidth * 0.9, windowHeight * 0.9);
  columns = Math.floor(width/CELL_SIZE);
  rows = Math.floor(height/CELL_SIZE);
  grid = generateRandomGrid(columns, rows);

  //add player to grid
  grid[thePlayer.y][thePlayer.x] = PLAYER;
}

function draw() {
  background("navy");
  displayGrid();
}

function mousePressed(){
  let x = Math.floor(mouseX/CELL_SIZE);
  let y = Math.floor(mouseY/CELL_SIZE);

  //self
  toggleCell(x, y);
}

function toggleCell(x, y){
  //make sure toggled cell exists
  if (x >= 0 && x < columns && y >= 0 && y < rows){
    if (grid[y][x] === OPEN_TILE){
      grid[y][x] = IMPASSIBLE;
    }
    else if (grid[y][x] === IMPASSIBLE){
      grid[y][x] = OPEN_TILE;
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
  else if (key === "w"){
    movePlayer(thePlayer.x, thePlayer.y - 1);
  }
  else if (key === "s"){
    movePlayer(thePlayer.x, thePlayer.y + 1);
  }
  else if (key === "d"){
    movePlayer(thePlayer.x + 1, thePlayer.y);
  }
  else if (key === "a"){
    movePlayer(thePlayer.x - 1, thePlayer.y);
  }
}

function movePlayer(x, y){
  if (x >= 0 && x < columns && y >= 0 && y < rows && grid[y][x] === OPEN_TILE){
    //previous position
    let oldX = thePlayer.x;
    let oldY = thePlayer.y;
  
    //moving player location
    thePlayer.x = x;
    thePlayer.y = y;
  
    //putting player on grid
    grid[thePlayer.y][thePlayer.x] = PLAYER;
  
    //reset old spot to be open tile
    grid[oldY][oldX] = OPEN_TILE;
  }
}

function displayGrid(){
  for (let y = 0; y < rows; y++){
    for (let x = 0; x < columns; x++){
      if (grid[y][x] === OPEN_TILE){
        fill("pink");
      }
      else if (grid[y][x] === IMPASSIBLE){
        fill("black");
      }
      else if (grid[y][x] === PLAYER){
        fill("green");
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
        newGrid[y].push(OPEN_TILE);
      }
      else {
        newGrid[y].push(IMPASSIBLE);
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
      newGrid[y].push(OPEN_TILE);
    }
  }
  return newGrid;
}