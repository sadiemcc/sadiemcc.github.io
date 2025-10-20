// Ride the Bus Card Game
// Sadie McConnell
// Comp Sci 30
// 10/10/25

// RULES
// Round 1 : give one card face down, player guesses if it's red or black
// Round 2 : player guesses if the next face down card is higher or lower than previous card
// Round 3 : player guesses if the next face down card is "inside or outside" (in between previous cards or outside)
// Round 4 : player guesses what suit the last face down card is
// if player gets it wrong, dealer wins and reset game if some button 

//gamestates = startScreen(title and instructions prompt), instructions(the instructions), round1(red or black), round2(higher or lower), round3(inside or outside), round4(guessing what suit), wrongRestart(when the dealer would win and the player would restart the whole game), nextRound(a "correct! next round..." screen to transition to next round), winner(complete all levels perfectly)

//FIND OUT HOW TO ADD FRONTS OF CARDS

let chosenSuit = [];
let chosenNumber = [];
let gameState = "startScreen";

function preload(){
  cardBack = loadImage("images/playingCardBack.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  titleScreen();
}

function draw() {
  transitionScreens();
}

function keyPressed(){
  if (keyCode === 73){
    gameState = "instructions";
    fill("white");
    rect(100, 100, width-200, height-200);

    textSize(40);
    fill(0);
    textAlign(CENTER);
    text("INSTRUCTIONS", width/2, height/2 - 300);

    textSize(30);
    text("Round 1: Guess if the face-down card is red (hearts or diamonds) or if it's black (spades or clubs)", width/2, height/2-200);
    text("Round 2: Guess if the face-down card is higher or lower than your previous card", width/2, height/2-100);
    text("Round 3: Guess if the face-down card is inside or outside your previous cards", width/2, height/2);
    text("Round 4: Guess what suit the face-down card is", width/2, height/2+100);
    text("Dealer wins if you lose at any round", width/2, height/2+200);
    textSize(20);
    text("*FYI; ACES ARE EQUIVALENT TO 1, JACKS ARE 11, QUEENS ARE 12, KINGS ARE 13*", width/2, height/2+300);
    text("Press esc to close instructions", width/2, height/2+350);
  }
  if (keyCode === ESCAPE && gameState === "instructions"){
    titleScreen();
  }
}

function titleScreen(){
  gameState = "startScreen";
  clear();
  background(255, 230, 167);
  textSize(100);
  textAlign(CENTER, BASELINE);
  text("RIDE THE BUS", width/2, height/2-150);
  textSize(25);
  text("For instructions, press 'i'.", width/2, height/2);

  fill(255, 212, 109);
  rectMode(CENTER);
  rect(width/2, 720, 550, 200);
  textAlign(CENTER);
  textSize(70);
  fill(255, 161, 66);
  text("PLAY!", width/2, height/2+275);
  rectMode(CORNER);
}

function spawnCard() {
  let card = {
    suits: ["hearts", "diamonds", "spades", "clubs"],
    number: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
  };
  chosenSuit.push(random(card.suits));
  chosenNumber.push(random(card.number));
  console.log(chosenNumber);
  console.log(chosenSuit);
  image(cardBack, width/2-175, height/2-250, 250, 350);
}

function redOrBlack() {
  background(166,196,138);
  spawnCard();
  if (gameState === "round1"){
    let redButton = {
      x1: 300,
      y1: 650,
      buttonWidth: 350,
      buttonHeight: 150
    };
    let blackButton = {
      x1: width-700,
      y1: 650,
      buttonWidth: 350,
      buttonHeight: 150
    };
    fill(255, 0, 0);
    rect(redButton.x1, redButton.y1, redButton.buttonWidth, redButton.buttonHeight);
    fill(0);
    rect(blackButton.x1, blackButton.y1, blackButton.buttonWidth, blackButton.buttonHeight);
  }
}

function higherOrLower(){
  background(166,196,138);
  spawnCard();
  for (let n = 0; n < chosenNumber; n++){
    if (chosenNumber[1] === chosenNumber[0]){
      chosenNumber.pop();
      chosenSuit.pop();
      spawnCard();
    }
  }
  gameState = "round2";
  let redButton = {
    x1: 300,
    y1: 650,
    buttonWidth: 350,
    buttonHeight: 150
  };
  let blackButton = {
    x1: width-700,
    y1: 650,
    buttonWidth: 350,
    buttonHeight: 150
  };
  fill(255, 0, 0);
  rect(redButton.x1, redButton.y1, redButton.buttonWidth, redButton.buttonHeight);
  fill(0);
  rect(blackButton.x1, blackButton.y1, blackButton.buttonWidth, blackButton.buttonHeight);
}

function insideOrOutside(){
  background(166,196,138);
  spawnCard();
  for (let n = 0; n < chosenNumber; n++){
    if (chosenNumber[2] === chosenNumber[0] || chosenNumber[2] === chosenNumber[1]){
      chosenNumber.pop();
      chosenSuit.pop();
      spawnCard();
    }
  }
  gameState = "round3";
  let redButton = {
    x1: 300,
    y1: 650,
    buttonWidth: 350,
    buttonHeight: 150
  };
  let blackButton = {
    x1: width-700,
    y1: 650,
    buttonWidth: 350,
    buttonHeight: 150
  };
  fill(255, 0, 0);
  rect(redButton.x1, redButton.y1, redButton.buttonWidth, redButton.buttonHeight);
  fill(0);
  rect(blackButton.x1, blackButton.y1, blackButton.buttonWidth, blackButton.buttonHeight);
}

function whatSuit(){
  background(166,196,138);
  spawnCard();
  gameState = "round4";
  let redButton = {
    x1: 300,
    y1: 650,
    buttonWidth: 350,
    buttonHeight: 150
  };
  let blackButton = {
    x1: width-700,
    y1: 650,
    buttonWidth: 350,
    buttonHeight: 150
  };
  fill(255, 0, 0);
  rect(redButton.x1, redButton.y1, redButton.buttonWidth, redButton.buttonHeight);
  fill(0);
  rect(blackButton.x1, blackButton.y1, blackButton.buttonWidth, blackButton.buttonHeight);
}

function transitionScreens(){
  if (gameState === "wrongRestart"){
    clear();
    background(255, 230, 167);
    textSize(50);
    fill(0);
    textAlign(CENTER);
    text("DEALER WINS", width/2, height/2);
    textSize(20);
    text("Click to restart", width/2, height/2+200);
  }
  else if (gameState === "goTo2" || gameState === "goTo3" || gameState === "goTo4"){
    clear();
    background(166,196,138);
    textSize(50);
    fill(0);
    textAlign(CENTER, BASELINE);
    text("CORRECT!", width/2, height/2);
    textAlign(CENTER);
    textSize(20);
    text("Click to continue", width/2, height/2+200);
  }
}

function mousePressed(){
  //CODE FOR PLAY BUTTON//
  if (mouseX > width/2-275 && mouseX < width/2+275 && mouseY > 620 && mouseY < 820 && gameState === "startScreen"){
    clear();
    gameState = "round1";
    redOrBlack();
  }

  //CODE FOR RESETTING//
  if (gameState === "wrongRestart"){
    chosenSuit = [];
    chosenNumber = [];
    titleScreen();
  }

  //CODE FOR CONTINUING TO NEXT ROUND//
  if (gameState === "goTo2"){
    clear();
    higherOrLower();
  }
  else if (gameState === "goTo3"){
    clear();
    insideOrOutside();
  }
  else if (gameState === "goTo4"){
    clear();
    whatSuit();
  }

  //BUTTONS FOR 1ST ROUND//
  let redButton = {
    x1: 300,
    y1: 650,
    buttonWidth: 350,
    buttonHeight: 150
  };
  let blackButton = {
    x1: width-700,
    y1: 650,
    buttonWidth: 350,
    buttonHeight: 150
  };
  if (mouseX > redButton.x1 && mouseX < redButton.x1+redButton.buttonWidth && mouseY > redButton.y1 && mouseY < redButton.y1+redButton.buttonHeight && chosenSuit[0] === "hearts" && gameState === "round1" || mouseX > redButton.x1 && mouseX < redButton.x1+redButton.buttonWidth && mouseY > redButton.y1 && mouseY < redButton.y1+redButton.buttonHeight && chosenSuit[0] === "diamonds" && gameState === "round1") {
    console.log(true);
    gameState = "goTo2";
  }
  else if (mouseX > blackButton.x1 && mouseX < blackButton.x1+blackButton.buttonWidth && mouseY > blackButton.y1 && mouseY < blackButton.y1+blackButton.buttonHeight && chosenSuit[0] === "clubs" && gameState === "round1" || mouseX > blackButton.x1 && mouseX < blackButton.x1+blackButton.buttonWidth && mouseY > blackButton.y1 && mouseY < blackButton.y1+blackButton.buttonHeight && chosenSuit[0] === "spades" && gameState === "round1") {
    console.log(true);
    gameState = "goTo2";
  }
  else if (mouseX > redButton.x1 && mouseX < redButton.x1+redButton.buttonWidth && mouseY > redButton.y1 && mouseY < redButton.y1+redButton.buttonHeight && chosenSuit[0] === "spades" && gameState === "round1" || mouseX > redButton.x1 && mouseX < redButton.x1+redButton.buttonWidth && mouseY > redButton.y1 && mouseY < redButton.y1+redButton.buttonHeight && chosenSuit[0] === "clubs" && gameState === "round1") {
    console.log(false);
    gameState = "wrongRestart";
  }
  else if (mouseX > blackButton.x1 && mouseX < blackButton.x1+blackButton.buttonWidth && mouseY > blackButton.y1 && mouseY < blackButton.y1+blackButton.buttonHeight && chosenSuit[0] === "hearts" && gameState === "round1" || mouseX > blackButton.x1 && mouseX < blackButton.x1+blackButton.buttonWidth && mouseY > blackButton.y1 && mouseY < blackButton.y1+blackButton.buttonHeight && chosenSuit[0] === "diamonds" && gameState === "round1") {
    console.log(false);
    gameState = "wrongRestart";
  }

  //BUTTONS FOR 2ND ROUND//
  //LEFT BUTTON//
  if (mouseX > redButton.x1 && mouseX < redButton.x1+redButton.buttonWidth && mouseY > redButton.y1 && mouseY < redButton.y1+redButton.buttonHeight && chosenNumber[0] < chosenNumber[1] && gameState === "round2") {
    console.log(true);
    gameState = "goTo3";
  }
  //RIGHT BUTTON//
  else if (mouseX > blackButton.x1 && mouseX < blackButton.x1+blackButton.buttonWidth && mouseY > blackButton.y1 && mouseY < blackButton.y1+blackButton.buttonHeight && chosenNumber[0] > chosenNumber[1] && gameState === "round2") {
    console.log(true);
    gameState = "goTo3";
  }
  //LEFT BUTTON//
  else if (mouseX > redButton.x1 && mouseX < redButton.x1+redButton.buttonWidth && mouseY > redButton.y1 && mouseY < redButton.y1+redButton.buttonHeight && chosenNumber[0] > chosenNumber[1] && gameState === "round2") {
    console.log(false);
    gameState = "wrongRestart";
  }
  //RIGHT BUTTON//
  else if (mouseX > blackButton.x1 && mouseX < blackButton.x1+blackButton.buttonWidth && mouseY > blackButton.y1 && mouseY < blackButton.y1+blackButton.buttonHeight && chosenNumber[0] < chosenNumber[1] && gameState === "round2") {
    console.log(false);
    gameState = "wrongRestart";
  }

  //BUTTONS FOR 3RD ROUND//
  //INSIDE//
  if (mouseX > redButton.x1 && mouseX < redButton.x1+redButton.buttonWidth && mouseY > redButton.y1 && mouseY < redButton.y1+redButton.buttonHeight && chosenNumber[2] < chosenNumber[1] && chosenNumber[2] > chosenNumber[0] && gameState === "round3") {
    console.log(true);
    gameState = "goTo4";
  }
  //OUTSIDE//
  else if (mouseX > blackButton.x1 && mouseX < blackButton.x1+blackButton.buttonWidth && mouseY > blackButton.y1 && mouseY < blackButton.y1+blackButton.buttonHeight && chosenNumber[2] > chosenNumber[1] && chosenNumber[2] > chosenNumber[0] && gameState === "round3" || mouseX > blackButton.x1 && mouseX < blackButton.x1+blackButton.buttonWidth && mouseY > blackButton.y1 && mouseY < blackButton.y1+blackButton.buttonHeight && chosenNumber[2] < chosenNumber[1] && chosenNumber[2] < chosenNumber[0] && gameState === "round3" || mouseX > blackButton.x1 && mouseX < blackButton.x1+blackButton.buttonWidth && mouseY > blackButton.y1 && mouseY < blackButton.y1+blackButton.buttonHeight && chosenNumber[2] > chosenNumber[1] && chosenNumber[2] < chosenNumber[0] && gameState === "round3") {
    console.log(true);
    gameState = "goTo4";
  }
  else if (mouseX > redButton.x1 && mouseX < redButton.x1+redButton.buttonWidth && mouseY > redButton.y1 && mouseY < redButton.y1+redButton.buttonHeight && chosenNumber[2] > chosenNumber[1] && chosenNumber[2] > chosenNumber[0] && gameState === "round3" || mouseX > redButton.x1 && mouseX < redButton.x1+redButton.buttonWidth && mouseY > redButton.y1 && mouseY < redButton.y1+redButton.buttonHeight && chosenNumber[2] < chosenNumber[1] && chosenNumber[2] < chosenNumber[0] && gameState === "round3" || mouseX > redButton.x1 && mouseX < redButton.x1+redButton.buttonWidth && mouseY > redButton.y1 && mouseY < redButton.y1+redButton.buttonHeight && chosenNumber[2] > chosenNumber[1] && chosenNumber[2] < chosenNumber[0] && gameState === "round3") {
    console.log(false);
    gameState = "wrongRestart";
  }
  else if (mouseX > blackButton.x1 && mouseX < blackButton.x1+blackButton.buttonWidth && mouseY > blackButton.y1 && mouseY < blackButton.y1+blackButton.buttonHeight && chosenNumber[2] < chosenNumber[1] && chosenNumber[2] > chosenNumber[0] && gameState === "round3") {
    console.log(false);
    gameState = "wrongRestart";
  }
  //BUTTONS FOR 4TH ROUND//
  //if (button dimentions && chosenSuit === "hearts"){
  // return true;
  // *make some sort of winning screen*
  //}
  //else if (button dimentions && chosenSuit === "diamonds"){
  // return true;
  // *make some sort of winning screen*
  //}
  //else if (button dimentions && chosenSuit === "spades"){
  // return true;
  // *make some sort of winning screen*
  //}
  //else if (button dimentions && chosenSuit === "clubs"){
  // return true;
  // *make some sort of winning screen*
  //}
  //else if (button dimentions && chosenSuit === "hearts" || button dimentions && chosenSuit === "diamonds" || button dimentions && chosenSuit === "spades" || button dimentions && chosenSuit === "clubs"){
  // return false;
  // gameState = "wrongRestart";
  //}
}