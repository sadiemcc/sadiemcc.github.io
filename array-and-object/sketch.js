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

let K = 13;
let Q = 12;
let J = 11;
let A = 1;
let chosenSuit = [];
let chosenNumber = [];
let gameState = "startScreen";
let cardBase = {
  cardWidth: 135,
  cardHeight: 200
};

function preload(){
  cardBack = loadImage("images/playingCardBack.png");
  heartSymbol = loadImage("images/heartSymbol.png");
  diamondSymbol = loadImage("images/diamondSymbol.png");
  spadeSymbol = loadImage("images/spadeSymbol.png");
  clubSymbol = loadImage("images/clubsSymbol.png");
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
  if (keyCode === 73 && gameState === "startScreen"){
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
    text("*FYI; ACES ARE 1, JACKS ARE 11, QUEENS ARE 12, KINGS ARE 13*", width/2, height/2+300);
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
  rect(width/2, 720, 500, 200);
  textAlign(CENTER);
  textSize(70);
  fill(255, 161, 66);
  text("PLAY!", width/2, height/2+275);
  rectMode(CORNER);
}

function spawnCard() {
  let card = {
    suits: ["hearts", "diamonds", "spades", "clubs"],
    number: [A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K],
  };
  chosenSuit.push(random(card.suits));
  chosenNumber.push(random(card.number));
  console.log(chosenNumber);
  console.log(chosenSuit);
  image(cardBack, width/2-150, height/2-250, 250, 350);
}

//ROUND 1//
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
    textAlign(CENTER);
    textSize(100);
    text("RED OR BLACK?", width/2, 150);
  }
  let sidebar = {
    x: 0,
    y: 0,
    rectWidth: 200,
    rectHeight: height,
  };
  fill(190, 225, 158);
  rect(sidebar.x, sidebar.y, sidebar.rectWidth, sidebar.rectHeight);
  fill(178, 211, 148);
  rect(20, 20, 160, 225);
  rectMode(CENTER);
  rect(100, height/2, 160, 225);
  rect(100, height- 135, 160, 225);
  textAlign(CENTER);
  textSize(25);
  fill(137, 162, 114);
  text("ROUND 1", 100, 135);
  text("ROUND 2", 100, height/2+10);
  text("ROUND 3", 100, height-125);
  rectMode(CORNER);
}

function higherOrLower(){
  background(166,196,138);
  spawnCard();
  if (chosenNumber[1] === chosenNumber[0]){
    chosenNumber.pop(chosenNumber[1]);
    chosenSuit.pop(chosenSuit[1]);
    spawnCard();
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
  textAlign(CENTER);
  textSize(100);
  text("HIGHER OR LOWER?", width/2, 150);
  let sidebar = {
    x: 0,
    y: 0,
    rectWidth: 200,
    rectHeight: height,
  };
  fill(190, 225, 158);
  rect(sidebar.x, sidebar.y, sidebar.rectWidth, sidebar.rectHeight);
  fill(178, 211, 148);
  rect(20, 20, 160, 225);
  rectMode(CENTER);
  rect(100, height/2, 160, 225);
  rect(100, height- 135, 160, 225);
  textAlign(CENTER);
  textSize(25);
  fill(137, 162, 114);
  text("ROUND 1", 100, 135);
  text("ROUND 2", 100, height/2+10);
  text("ROUND 3", 100, height-125);
  rectMode(CORNER);
  fill(255);
  rect(32.5, 32.5, cardBase.cardWidth, cardBase.cardHeight);
  if (chosenSuit[0] === "hearts"){
    image(heartSymbol, 68, 105, 65, 65);
    fill(255,0,0);
    textSize(35);
    text(chosenNumber[0], 55, 70);
  }
  else if (chosenSuit[0] === "diamonds"){
    image(diamondSymbol, 68, 105, 65, 65);
    fill(255,0,0);
    textSize(35);
    text(chosenNumber[0], 55, 70);
  }
  else if (chosenSuit[0] === "spades"){
    image(spadeSymbol, 68, 105, 65, 65);
    fill(0);
    textSize(35);
    text(chosenNumber[0], 55, 70);
  }
  else if (chosenSuit[0] === "clubs"){
    image(clubSymbol, 68, 105, 65, 65);
    fill(0);
    textSize(35);
    text(chosenNumber[0], 55, 70);
  }
}

function insideOrOutside(){
  background(166,196,138);
  spawnCard();
  for (nums in chosenNumber){
    if (chosenNumber[2] === chosenNumber[1] || chosenNumber[2] === chosenNumber[0]){
      chosenNumber.pop(chosenNumber[2]);
      chosenSuit.pop(chosenSuit[2]);
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
  textAlign(CENTER);
  textSize(100);
  text("INSIDE OR OUTSIDE?", width/2, 150);
  let sidebar = {
    x: 0,
    y: 0,
    rectWidth: 200,
    rectHeight: height,
  };
  fill(190, 225, 158);
  rect(sidebar.x, sidebar.y, sidebar.rectWidth, sidebar.rectHeight);
  fill(178, 211, 148);
  rect(20, 20, 160, 225);
  rectMode(CENTER);
  rect(100, height/2, 160, 225);
  rect(100, height- 135, 160, 225);
  textAlign(CENTER);
  textSize(25);
  fill(137, 162, 114);
  text("ROUND 1", 100, 135);
  text("ROUND 2", 100, height/2+10);
  text("ROUND 3", 100, height-125);
  rectMode(CORNER);

  fill(255);
  rect(32.5, 32.5, cardBase.cardWidth, cardBase.cardHeight);
  rectMode(CENTER);
  rect(100, height/2, cardBase.cardWidth, cardBase.cardHeight);
  rectMode(CORNER);

  if (chosenSuit[0] === "hearts"){
    image(heartSymbol, 68, 105, 65, 65);
    fill(255,0,0);
    textSize(35);
    text(chosenNumber[0], 55, 70);
  }
  else if (chosenSuit[0] === "diamonds"){
    image(diamondSymbol, 68, 105, 65, 65);
    fill(255,0,0);
    textSize(35);
    text(chosenNumber[0], 55, 70);
  }
  else if (chosenSuit[0] === "spades"){
    image(spadeSymbol, 68, 105, 65, 65);
    fill(0);
    textSize(35);
    text(chosenNumber[0], 55, 70);
  }
  else if (chosenSuit[0] === "clubs"){
    image(clubSymbol, 68, 105, 65, 65);
    fill(0);
    textSize(35);
    text(chosenNumber[0], 55, 70);
  }
  if (chosenSuit[1] === "hearts"){
    image(heartSymbol, 68, height/2-32.5, 65, 65);
    fill(255,0,0);
    textSize(35);
    text(chosenNumber[1], 55, 415);
  }
  else if (chosenSuit[1] === "diamonds"){
    image(diamondSymbol, 68, height/2-32.5, 65, 65);
    fill(255,0,0);
    textSize(35);
    text(chosenNumber[1], 55, 415);
  }
  else if (chosenSuit[1] === "spades"){
    image(spadeSymbol, 68, height/2-32.5, 65, 65);
    fill(0);
    textSize(35);
    text(chosenNumber[1], 55, 415);
  }
  else if (chosenSuit[1] === "clubs"){
    image(clubSymbol, 68, height/2-32.5, 65, 65);
    fill(0);
    textSize(35);
    text(chosenNumber[1], 55, 415);
  }
}

function whatSuit(){
  background(166,196,138);
  spawnCard();
  gameState = "round4";
  let heartButton = {
    x1: width/2-475,
    y1: 650,
    buttonWidth: 150,
    buttonHeight: 150
  };
  let diamondButton = {
    x1: width/2-225,
    y1: 650,
    buttonWidth: 150,
    buttonHeight: 150
  };
  let spadeButton = {
    x1: width/2+25,
    y1: 650,
    buttonWidth: 150,
    buttonHeight: 150
  };
  let clubButton = {
    x1: width/2+275,
    y1: 650,
    buttonWidth: 150,
    buttonHeight: 150
  };
  fill(255, 0, 0);
  rect(heartButton.x1, heartButton.y1, heartButton.buttonWidth, heartButton.buttonHeight);
  image(heartSymbol, heartButton.x1+25, heartButton.y1+25, 100, 100);
  fill(0);
  rect(diamondButton.x1, diamondButton.y1, diamondButton.buttonWidth, diamondButton.buttonHeight);
  image(diamondSymbol, diamondButton.x1+25, diamondButton.y1+25, 100, 100);
  fill(255, 0, 0);
  rect(spadeButton.x1, spadeButton.y1, spadeButton.buttonWidth, spadeButton.buttonHeight);
  image(spadeSymbol, spadeButton.x1+25, spadeButton.y1+25, 100, 100);
  fill(0);
  rect(clubButton.x1, clubButton.y1, clubButton.buttonWidth, clubButton.buttonHeight);
  image(clubSymbol, clubButton.x1+25, clubButton.y1+25, 100, 100);
  textAlign(CENTER);
  textSize(100);
  text("WHAT SUIT?", width/2, 150);
  let sidebar = {
    x: 0,
    y: 0,
    rectWidth: 200,
    rectHeight: height,
  };
  fill(190, 225, 158);
  rect(sidebar.x, sidebar.y, sidebar.rectWidth, sidebar.rectHeight);
  fill(178, 211, 148);
  rect(20, 20, 160, 225);
  rectMode(CENTER);
  rect(100, height/2, 160, 225);
  rect(100, height- 135, 160, 225);
  textAlign(CENTER);
  textSize(25);
  fill(137, 162, 114);
  text("ROUND 1", 100, 135);
  text("ROUND 2", 100, height/2+10);
  text("ROUND 3", 100, height-125);
  rectMode(CORNER);

  fill(255);
  rect(32.5, 32.5, cardBase.cardWidth, cardBase.cardHeight);
  rectMode(CENTER);
  rect(100, height/2, cardBase.cardWidth, cardBase.cardHeight);
  rect(100, height-135, cardBase.cardWidth, cardBase.cardHeight);

  if (chosenSuit[0] === "hearts"){
    image(heartSymbol, 68, 105, 65, 65);
    fill(255,0,0);
    textSize(35);
    text(chosenNumber[0], 55, 70);
  }
  else if (chosenSuit[0] === "diamonds"){
    image(diamondSymbol, 68, 105, 65, 65);
    fill(255,0,0);
    textSize(35);
    text(chosenNumber[0], 55, 70);
  }
  else if (chosenSuit[0] === "spades"){
    image(spadeSymbol, 68, 105, 65, 65);
    fill(0);
    textSize(35);
    text(chosenNumber[0], 55, 70);
  }
  else if (chosenSuit[0] === "clubs"){
    image(clubSymbol, 68, 105, 65, 65);
    fill(0);
    textSize(35);
    text(chosenNumber[0], 55, 70);
  }
  if (chosenSuit[1] === "hearts"){
    image(heartSymbol, 68, height/2-32.5, 65, 65);
    fill(255,0,0);
    textSize(35);
    text(chosenNumber[1], 55, 415);
  }
  else if (chosenSuit[1] === "diamonds"){
    image(diamondSymbol, 68, height/2-32.5, 65, 65);
    fill(255,0,0);
    textSize(35);
    text(chosenNumber[1], 55, 415);
  }
  else if (chosenSuit[1] === "spades"){
    image(spadeSymbol, 68, height/2-32.5, 65, 65);
    fill(0);
    textSize(35);
    text(chosenNumber[1], 55, 415);
  }
  else if (chosenSuit[1] === "clubs"){
    image(clubSymbol, 68, height/2-32.5, 65, 65);
    fill(0);
    textSize(35);
    text(chosenNumber[1], 55, 415);
  }
  if (chosenSuit[2] === "hearts"){
    image(heartSymbol, 68, height-165, 65, 65);
    fill(255,0,0);
    textSize(35);
    text(chosenNumber[2], 55, height-200);
  }
  else if (chosenSuit[2] === "diamonds"){
    image(diamondSymbol, 68, height-165, 65, 65);
    fill(255,0,0);
    textSize(35);
    text(chosenNumber[2], 55, height-200);
  }
  else if (chosenSuit[2] === "spades"){
    image(spadeSymbol, 68, height-165, 65, 65);
    fill(0);
    textSize(35);
    text(chosenNumber[2], 55, height-200);
  }
  else if (chosenSuit[2] === "clubs"){
    image(clubSymbol, 68, height-165, 65, 65);
    fill(0);
    textSize(35);
    text(chosenNumber[2], 55, height-200);
  }
}

function winnerScreen(){
  background(255, 230, 167);
  textAlign(CENTER);
  textSize(75);
  fill(0);
  text("CONGRATULATIONS!", width/2, height/2 - 200);
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
    fill(0);
    textSize(20);
    text("Click to continue", width/2, height/2+205);
  }
  else if (gameState === "youWin"){
    winnerScreen();
  }
}

function mousePressed(){
  //CODE FOR PLAY BUTTON//
  if (mouseX > width/2-250 && mouseX < width/2+250 && mouseY > 620 && mouseY < 820 && gameState === "startScreen"){
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
  else if (gameState === "youWin"){
    clear();
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
  if (mouseX > redButton.x1 && mouseX < redButton.x1+redButton.buttonWidth && mouseY > redButton.y1 && mouseY < redButton.y1+redButton.buttonHeight && chosenNumber[2] < chosenNumber[1] && chosenNumber[2] > chosenNumber[0] && gameState === "round3" || mouseX > redButton.x1 && mouseX < redButton.x1+redButton.buttonWidth && mouseY > redButton.y1 && mouseY < redButton.y1+redButton.buttonHeight && chosenNumber[2] > chosenNumber[1] && chosenNumber[2] < chosenNumber[0] && gameState === "round3") {
    console.log(true);
    gameState = "goTo4";
  }
  //OUTSIDE//
  else if (mouseX > blackButton.x1 && mouseX < blackButton.x1+blackButton.buttonWidth && mouseY > blackButton.y1 && mouseY < blackButton.y1+blackButton.buttonHeight && chosenNumber[2] > chosenNumber[1] && chosenNumber[2] > chosenNumber[0] && gameState === "round3" || mouseX > blackButton.x1 && mouseX < blackButton.x1+blackButton.buttonWidth && mouseY > blackButton.y1 && mouseY < blackButton.y1+blackButton.buttonHeight && chosenNumber[2] < chosenNumber[1] && chosenNumber[2] < chosenNumber[0] && gameState === "round3") {
    console.log(true);
    gameState = "goTo4";
  }
  else if (mouseX > redButton.x1 && mouseX < redButton.x1+redButton.buttonWidth && mouseY > redButton.y1 && mouseY < redButton.y1+redButton.buttonHeight && chosenNumber[2] > chosenNumber[1] && chosenNumber[2] > chosenNumber[0] && gameState === "round3" || mouseX > redButton.x1 && mouseX < redButton.x1+redButton.buttonWidth && mouseY > redButton.y1 && mouseY < redButton.y1+redButton.buttonHeight && chosenNumber[2] < chosenNumber[1] && chosenNumber[2] < chosenNumber[0] && gameState === "round3") {
    console.log(false);
    gameState = "wrongRestart";
  }
  else if (mouseX > blackButton.x1 && mouseX < blackButton.x1+blackButton.buttonWidth && mouseY > blackButton.y1 && mouseY < blackButton.y1+blackButton.buttonHeight && chosenNumber[2] < chosenNumber[1] && chosenNumber[2] > chosenNumber[0] && gameState === "round3") {
    console.log(false);
    gameState = "wrongRestart";
  }
  //BUTTONS FOR 4TH ROUND//
  let heartButton = {
    x1: width/2-475,
    y1: 650,
    buttonWidth: 150,
    buttonHeight: 150
  };
  let diamondButton = {
    x1: width/2-225,
    y1: 650,
    buttonWidth: 150,
    buttonHeight: 150
  };
  let spadeButton = {
    x1: width/2+25,
    y1: 650,
    buttonWidth: 150,
    buttonHeight: 150
  };
  let clubButton = {
    x1: width/2+275,
    y1: 650,
    buttonWidth: 150,
    buttonHeight: 150
  };
  if (mouseX > heartButton.x1 && mouseX < heartButton.x1+heartButton.buttonWidth && mouseY > heartButton.y1 && mouseY < heartButton.y1+heartButton.buttonHeight && chosenSuit[3] === "hearts" && gameState === "round4") {
    console.log(true);
    gameState = "youWin";
  }
  else if (mouseX > diamondButton.x1 && mouseX < diamondButton.x1+diamondButton.buttonWidth && mouseY > diamondButton.y1 && mouseY < diamondButton.y1+diamondButton.buttonHeight && chosenSuit[3] === "diamonds" && gameState === "round4"){
    console.log(true);
    gameState = "youWin";
  }
  else if (mouseX > spadeButton.x1 && mouseX < spadeButton.x1+spadeButton.buttonWidth && mouseY > spadeButton.y1 && spadeButton.y1+spadeButton.buttonHeight && chosenSuit[3] === "spades" && gameState === "round4"){
    console.log(true);
    gameState = "youWin";
  }
  else if (mouseX > clubButton.x1 && mouseX < clubButton.x1+clubButton.buttonWidth && mouseY > clubButton.y1 && mouseY < clubButton.y1+clubButton.buttonHeight && chosenSuit[3] === "clubs" && gameState === "round4"){
    console.log(true);
    gameState = "youWin";
  }
  else if (gameState === "round4" && mouseX > heartButton.x1 && mouseX < heartButton.x1+heartButton.buttonWidth && mouseY > heartButton.y1 && mouseY < heartButton.y1+heartButton.buttonHeight && chosenSuit[3] !== "hearts" || gameState === "round4" && mouseX > diamondButton.x1 && mouseX < diamondButton.x1+diamondButton.buttonWidth && mouseY > diamondButton.y1 && mouseY < diamondButton.y1+diamondButton.buttonHeight && chosenSuit[3] !== "diamonds" || gameState === "round4" && mouseX > spadeButton.x1 && mouseX < spadeButton.x1+spadeButton.buttonWidth && mouseY > spadeButton.y1 && spadeButton.y1+spadeButton.buttonHeight && chosenSuit[3] !== "spades" || gameState === "round4" && mouseX > clubButton.x1 && mouseX < clubButton.x1+clubButton.buttonWidth && mouseY > clubButton.y1 && mouseY < clubButton.y1+clubButton.buttonHeight && chosenSuit[3] !== "clubs"){
    console.log(false);
    gameState = "wrongRestart";
  }
}