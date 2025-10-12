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

//make an array of each suit and all cards, shuffle array, pop card off when used so no doubles
//make a spawn card function

let chosenSuit = [];
let chosenNumber = [];
let gameState = "startScreen";

function setup() {
  createCanvas(windowWidth, windowHeight);
  spawnCard();
  redOrBlack();
}

function draw() {
//   background(220);
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

function redOrBlack(){
    let redButton = {
        x1: 300,
        y1: 500,
        buttonWidth: 250,
        buttonHeight:100
    };
    let blackButton = {
        x1: 1000,
        y1: 500,
        buttonWidth: 250,
        buttonHeight:100
    };
    fill(255,0,0);
    rect(redButton.x1, redButton.y1, redButton.buttonWidth, redButton.buttonHeight);
    fill(0)
    rect(blackButton.x1, blackButton.y1, blackButton.buttonWidth, blackButton.buttonHeight);
}

function mousePressed(){
    if (mouseX > 300 && mouseX < 550 && mouseY > 500 && mouseY < 600 && chosenSuit[0] === "hearts" && gameState === "startScreen"|| mouseX > 300 && mouseX < 550 && mouseY > 500 && mouseY < 600 && chosenSuit[0] === "diamonds" && gameState === "startScreen"){
        console.log(true);
    }
    else if (mouseX > 1000 && mouseX < 1250 && mouseY > 500 && mouseY < 600 && chosenSuit[0] === "clubs" && gameState === "startScreen"|| mouseX > 300 && mouseX < 550 && mouseY > 500 && mouseY < 600 && chosenSuit[0] === "spades" && gameState === "startScreen"){
        console.log(true);
    }
    else{
        console.log(false);
    }
}