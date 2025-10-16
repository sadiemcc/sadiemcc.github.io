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

let chosenSuit = [];
let chosenNumber = [];
let gameState = "startScreen";

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  titleScreen();
  // spawnCard();
  // redOrBlack();
  // higherOrLower();
  // insideOrOutside();
  // whatSuit();
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
  rect(690, 620, 550, 200);
  textAlign(CENTER);
  textSize(70);
  fill(255, 161, 66);
  text("PLAY!", width/2, height/2+275);
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
}

function redOrBlack() {
  if (gameState === "round1"){
    let redButton = {
      x1: 300,
      y1: 500,
      buttonWidth: 250,
      buttonHeight: 100
    };
    let blackButton = {
      x1: 1000,
      y1: 500,
      buttonWidth: 250,
      buttonHeight: 100
    };
    fill(255, 0, 0);
    rect(redButton.x1, redButton.y1, redButton.buttonWidth, redButton.buttonHeight);
    fill(0);
    rect(blackButton.x1, blackButton.y1, blackButton.buttonWidth, blackButton.buttonHeight);
  }
}

function higherOrLower(){
  gameState = "round2";
  let redButton = {
    x1: 300,
    y1: 500,
    buttonWidth: 250,
    buttonHeight: 100
  };
  let blackButton = {
    x1: 1000,
    y1: 500,
    buttonWidth: 250,
    buttonHeight: 100
  };
  fill(255, 0, 0);
  rect(redButton.x1, redButton.y1, redButton.buttonWidth, redButton.buttonHeight);
  fill(0);
  rect(blackButton.x1, blackButton.y1, blackButton.buttonWidth, blackButton.buttonHeight);
}

function insideOrOutside(){
  gameState = "round3";
  let redButton = {
    x1: 300,
    y1: 500,
    buttonWidth: 250,
    buttonHeight: 100
  };
  let blackButton = {
    x1: 1000,
    y1: 500,
    buttonWidth: 250,
    buttonHeight: 100
  };
  fill(255, 0, 0);
  rect(redButton.x1, redButton.y1, redButton.buttonWidth, redButton.buttonHeight);
  fill(0);
  rect(blackButton.x1, blackButton.y1, blackButton.buttonWidth, blackButton.buttonHeight);
}

function whatSuit(){
  gameState = "round4";
  let redButton = {
    x1: 300,
    y1: 500,
    buttonWidth: 250,
    buttonHeight: 100
  };
  let blackButton = {
    x1: 1000,
    y1: 500,
    buttonWidth: 250,
    buttonHeight: 100
  };
  fill(255, 0, 0);
  rect(redButton.x1, redButton.y1, redButton.buttonWidth, redButton.buttonHeight);
  fill(0);
  rect(blackButton.x1, blackButton.y1, blackButton.buttonWidth, blackButton.buttonHeight);
}

function transitionScreens(){
  if (gameState === "wrongRestart"){
    clear();
    textSize(50);
    fill(0);
    text("DEALER WINS", 100, 100);
    text("Click to restart", 200, 200);
  }
  else if (gameState === "nextRound"){
    //"correct!" text
  }
}

//NOT WORKING PROPERLY//
function mousePressed(){
  //CODE FOR PLAY BUTTON//
  if (mouseX > 690 && mouseX < 1240 && mouseY > 620 && mouseY < 820 && gameState === "startScreen"){
    clear();
    gameState = "round1";
    redOrBlack();
  }

  //BUTTONS FOR 1ST ROUND//
  if (mouseX > 300 && mouseX < 550 && mouseY > 500 && mouseY < 600 && chosenSuit[0] === "hearts" && gameState === "round1" || mouseX > 300 && mouseX < 550 && mouseY > 500 && mouseY < 600 && chosenSuit[0] === "diamonds" && gameState === "round1") {
    console.log(true);
    gameState = "round2";
  }
  else if (mouseX > 1000 && mouseX < 1250 && mouseY > 500 && mouseY < 600 && chosenSuit[0] === "clubs" && gameState === "round1" || mouseX > 1000 && mouseX < 1250 && mouseY > 500 && mouseY < 600 && chosenSuit[0] === "spades" && gameState === "round1") {
    console.log(true);
    gameState = "round2";
  }
  else if (mouseX > 300 && mouseX < 550 && mouseY > 500 && mouseY < 600 && chosenSuit[0] !== "hearts" && gameState === "round1" || mouseX > 300 && mouseX < 550 && mouseY > 500 && mouseY < 600 && chosenSuit[0] !== "diamonds" && gameState === "round1") {
    console.log(false);
    gameState = "wrongRestart";
  }
  else if (mouseX > 1000 && mouseX < 1250 && mouseY > 500 && mouseY < 600 && chosenSuit[0] !== "clubs" && gameState === "round1" || mouseX > 1000 && mouseX < 1250 && mouseY > 500 && mouseY < 600 && chosenSuit[0] !== "spades" && gameState === "round1") {
    console.log(false);
    gameState = "wrongRestart";
  }

  //BUTTONS FOR 2ND ROUND//
  // if (mouseX > 300 && mouseX < 550 && mouseY > 500 && mouseY < 600 && chosenNumber[0] < chosenNumber[1] && gameState === "round2") {
  //   console.log(true);
  //   gameState = "round3";
  // }
  // else if (mouseX > 1000 && mouseX < 1250 && mouseY > 500 && mouseY < 600 && chosenNumber[0] > chosenNumber[1] && gameState === "round2") {
  //   console.log(true);
  //   gameState = "round3";
  // }
  // else{
  //   console.log(false);
  //   gameState = "round3";
  // }

  //BUTTONS FOR 3RD ROUND//
  // if (mouseX > 300 && mouseX < 550 && mouseY > 500 && mouseY < 600 && chosenNumber[2] < chosenNumber[1] && chosenNumber[2] > chosenNumber[0] && gameState === "round3") {
  //   console.log(true);
  //   gameState = "round4";
  // }
  // else if (mouseX > 1000 && mouseX < 1250 && mouseY > 500 && mouseY < 600 && chosenNumber[2] > chosenNumber[1] || mouseX > 1000 && mouseX < 1250 && mouseY > 500 && mouseY < 600 && chosenNumber[2] < chosenNumber[0] && gameState === "round3") {
  //   console.log(true);
  //   gameState = "round4";
  // }
  // else{
  //   console.log(false);
  //   gameState = "round4";
  // }

  //BUTTONS FOR 4TH ROUND//

}