// Recursion Visual Demo
// Sierpinski Triangle

let initialTriangle = [
  {x: 800, y: 50},
  {x: 50, y: 900},
  {x: 1550, y: 900}
];

let theDepth = 0;
let theColors = ["pink", "green", "orange", "cyan", "yellow", "purple", "white", "blue"];

function setup() {
  createCanvas(windowWidth, windowHeight);
  sierpinski(initialTriangle, theDepth);
}

function draw() {
  // background(220);
}

function mousePressed(){
  if (theDepth < 7){
    theDepth++;
    background("white");
    sierpinski(initialTriangle, theDepth); 
  }
  
}

function sierpinski(points, depth){
  fill(theColors[depth]);
  triangle(points[0].x, points[0].y,
           points[1].x, points[1].y,
           points[2].x, points[2].y,
  );
  if (depth > 0){
   sierpinski([points[0],
              midpoint(points[0], points[1]),
              midpoint(points[0], points[2])],
              depth-1); 

    sierpinski([points[1],
              midpoint(points[0], points[1]),
              midpoint(points[1], points[2])],
              depth-1); 

    sierpinski([points[2],
              midpoint(points[0], points[2]),
              midpoint(points[1], points[2])],
              depth-1); 
  }
}

function midpoint(point1, point2){
  let midX = (point1.x + point2.x)/2;
  let midY = (point1.y + point2.y)/2;
  return {x:midX, y:midY};
}