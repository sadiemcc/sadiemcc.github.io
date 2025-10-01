// Traffic Light Starter Code
// Your Name Here
// The Date Here

// GOAL: make a 'traffic light' simulator. For now, just have the light
// changing according to time. You may want to investigate the millis()
// function at https://p5js.org/reference/#/p5/millis

let lightColor = 'red';
let lastSwitched = 0;
let greenDuration = 4000;
let redDuration = 3000;
let yellowDuration = 1000;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);
  updateLights();
  drawOutlineOfLights();
  showLights();
}

function updateLights(){
  if (millis() > lastSwitched + redDuration && lightColor === 'red'){
    lightColor = 'green';
    lastSwitched = millis();
  }
  else if (millis() > lastSwitched + greenDuration && lightColor === 'green'){
    lightColor = 'yellow';
    lastSwitched = millis();
  }
  else if (millis() > lastSwitched + yellowDuration && lightColor === 'yellow'){
    lightColor ='red';
    lastSwitched = millis();
  }
}

function drawOutlineOfLights() {
  //box
  rectMode(CENTER);
  fill(0);
  rect(width/2, height/2, 75, 200, 10);

  //lights
  fill(255);
  ellipse(width/2, height/2 - 65, 50, 50); //top
  ellipse(width/2, height/2, 50, 50); //middle
  ellipse(width/2, height/2 + 65, 50, 50); //bottom
}

function showLights(){
  if (lightColor === 'red'){
    fill('red');
    ellipse(width/2, height/2 - 65, 50, 50);
  }

  if (lightColor === 'yellow'){
    fill('yellow');
    ellipse(width/2, height/2, 50, 50);
  }

  if (lightColor === 'green'){
    fill('green');
    ellipse(width/2, height/2 + 65, 50, 50);
  }
}

