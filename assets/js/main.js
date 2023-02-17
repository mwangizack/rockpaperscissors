// caching the DOM - storing reference points for future use
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector("#scoreboard");
const result_div = document.querySelector(".result p");
const result_p = document.getElementById("result-statement");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const computerChoiceIndex = Math.floor(Math.random() * choices.length);
  //console.log(computerChoiceIndex);
  return choices[computerChoiceIndex];
}

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_div.innerHTML =
    userChoice + " defeats " + computerChoice + ". You win!";
  result_p.style.color = "#31b43a";
  document.getElementById('scoreboard').classList.add('green-glow');
  setTimeout(() => document.getElementById('scoreboard').classList.remove('green-glow'), 500);
}

function lose(userChoice, computerChoice) {
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  userScore_span.innerHTML = userScore;
  result_div.innerHTML =
    userChoice + " loses to " + computerChoice + ". You lose!";
  result_p.style.color = "#fc121b";
  document.getElementById('scoreboard').classList.add('red-glow');
  setTimeout(() => document.getElementById('scoreboard').classList.remove('red-glow'), 500);
}

function draw(userChoice, computerChoice) {
  result_div.innerHTML =
    computerChoice + " matches " + userChoice + ". It's a draw!";
  result_p.style.color = "#FFFAFA";
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "RockScissors":
    case "PaperRock":
    case "ScissorsPaper":
      win(userChoice, computerChoice);
      break;
    case "RockPaper":
    case "PaperScissors":
    case "ScissorsRock":
      lose(userChoice, computerChoice);
      break;
    case "RockRock":
    case "PaperPaper":
    case "ScissorsScissors":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", () => {
    game("Rock");
  });

  paper_div.addEventListener("click", () => {
    game("Paper");
  });

  scissors_div.addEventListener("click", () => {
    game("Scissors");
  });
}

main();
