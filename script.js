let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;
// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random()*10);
}

const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
  if (humanGuess > 9 || humanGuess < 0) {
    alert("Your guess can't be less than 0 or greater than 9");
    document.getElementById('human-guess').value = '';
    document.getElementById("human-guess").focus();
    compareGuesses = (humanGuess, computerGuess, targetGuess);
  } else {
      const humanDifference = Math.abs(targetGuess - humanGuess);
      const computerDifference = Math.abs(targetGuess - computerGuess);
      return humanDifference <= computerDifference;
  }
}

const updateScore = winner => {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
}

const advanceRound = () => currentRoundNumber++;
