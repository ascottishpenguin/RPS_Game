//document.getElementById("rock").addEventListener("click")
let scorePlayer = 0;
let scoreComputer = 0;

function playRound(playerSelection) {
    const computerSelectionType = ['rock', 'paper', 'scissors'];
    const i = Math.floor(Math.random() * 3)
    let computerSelection = computerSelectionType[i]
    if (playerSelection == 'rock' && computerSelection == 'rock' || playerSelection == 'paper' && computerSelection == 'paper' || playerSelection == 'scissors' && computerSelection == 'scissors') {
        document.getElementById("results").textContent = "Computer chose "+computerSelection+"! It's a draw!"
    }
    else if (playerSelection == 'rock' &&  computerSelection == 'paper' || playerSelection == 'paper' && computerSelection == 'scissors' || playerSelection == 'scissors' && computerSelection == 'rock')  {
        document.getElementById("results").textContent = "Computer chose "+computerSelection+"! You Lose!"
        scoreComputer += 1
        document.getElementById("computerscore").textContent = scoreComputer
    } 
    else if (playerSelection == 'rock' &&  computerSelection == 'scissors' || playerSelection == 'paper' && computerSelection == 'rock' || playerSelection == 'scissors' && computerSelection == 'paper')  {
        document.getElementById("results").textContent = "Computer chose "+computerSelection+"! You Win!"
        scorePlayer += 1
        document.getElementById("playerscore").textContent = scorePlayer
    } 
        
}



const playerSelection = 'rock'
const computerSelection = computerPlay()
