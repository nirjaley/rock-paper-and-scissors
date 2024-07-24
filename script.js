// Initialize player and computer scores
let playerScore = 0;
let computerScore = 0;

// Function to play the game
function play(playerChoice) {
    // Define the possible choices
    const choices = ['rock', 'paper', 'scissors'];
    
    // Randomly select the computer's choice
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    
    let result; // Variable to store the result of the game
    
    // Determine the result based on player and computer choices
    if (playerChoice === computerChoice) {
        result = "It's a draw!";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = "You win!";
        playerScore++; // Display player score if player wins
    } else {
        result = "Computer wins!";
        computerScore++; // Display computer score if computer wins
    }

    // Display the result and the choices
    document.getElementById('result').innerHTML = `You chose ${playerChoice}. Computer chose ${computerChoice}. ${result}`;
    
    // Display the updated scores
    document.getElementById('score').innerHTML = `Score: You ${playerScore} - ${computerScore} Computer`;
}
