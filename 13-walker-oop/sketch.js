// Walker OOP

class Walker {
  constructor(x, y, theColor){
    this.x = x;
    this.y = y;
    this.color = theColor;
    this.speed = 10;
    this.radius = 5;
  }

  display(){
    noStroke();
    fill(this.color);
    circle(this.x, this.y, this.radius*2);
  }

  move(){
    let choice = random(100);
    if (choice < 25){
      //up
      this.y -= this.speed;
    }
    else if (choice < 50){
      //down
      this.y += this.speed;
    }
    else if (choice < 75){
      //left
      this.x -= this.speed;
    }
    else {
      //right
      this.x += this.speed;
    }
  }
}

// let goose = new Walker(200, 300, "pink");
// let george = new Walker(400, 500, "orange");
let theWalkers = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // background(220);
  // goose.move();
  // george.move();

  // goose.display();
  // george.display();

  for (let myWalker of theWalkers){
    myWalker.move();
    myWalker.display();
  }
}

function mousePressed(){
  spawnWalker(mouseX, mouseY);
}

function spawnWalker(x, y){
  let r = random(255);
  let g = random(255);
  let b = random(255);
  let someColor = color(r, g, b);
  let someWalker = new Walker(x, y, someColor);
  theWalkers.push(someWalker);
}