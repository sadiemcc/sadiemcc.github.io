let theBallArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  spawnBall(width/2, height/2);
  // randomColor();
}

function draw() {
  background("black");
  moveCircle();
  showCircle();
  bounceIfNeeded();

  //console.log(y);
}

function mousePressed(){
  spawnBall(mouseX, mouseY);
}

function spawnBall(_x, _y){
  let newBall = {
    x: _x,
    y: _y,
    xSpeed: random(-3, 3),
    ySpeed: random(-3, 3),
    radius: random(25, 75),
    r: random(255),
    g: random(255),
    b: random(255),
  };
  theBallArray.push(newBall);
}

function moveCircle() {
  for (let ball of theBallArray){
    ball.x = ball.x + ball.xSpeed;
    ball.y += ball.ySpeed;
  }
}

function bounceIfNeeded(){
  for (let ball of theBallArray){
    if (ball.x < 0 + ball.radius || ball.x > width - ball.radius) {
      ball.xSpeed = ball.xSpeed * -1;
      randomColor(ball);
    }
    if (ball.y < 0 + ball.radius || ball.y > height - ball.radius) {
      ball.ySpeed = ball.ySpeed * -1;
      randomColor(ball);
    }
  }
}

function randomColor(theBall){
  theBall.r = random(255);
  theBall.g = random(255);
  theBall.b = random(255);
}

function showCircle(){
  for (let ball of theBallArray){
    fill(ball.r, ball.g, ball.b);
    circle(ball.x, ball.y, ball.radius); 
  }
}

//randomize color when hits a wall.