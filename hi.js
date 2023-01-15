alert("javascript is working!");

const options = document.querySelectorAll(".options");
let playerScore = 0;
let compScore = 0;

options.forEach((option) => {
  //each time u click
  option.addEventListener("click", function () {
    //TO DO: process user click
    const pChoice = this.textContent;

    const arrayOptions = ["Rock", "Paper", "Scissors"];
    const cChoice =
      arrayOptions[Math.floor(Math.random() * arrayOptions.length)];

    compareInputs(pChoice, cChoice);
    updateScore();
    if (checkWinner()) {
      playerScore = compScore = 0;
      updateScore();
    }
  });
});

const compareInputs = (pChoice, cChoice) => {
  if (pChoice === "Rock" && cChoice === "Rock") {
    alert("You both tied!");
  } else if (pChoice === "Paper" && cChoice === "Paper") {
    alert("You both tied!");
  } else if (pChoice === "Scissors" && cChoice === "Scissors") {
    alert("You both tied!");

    //Comp wins
  } else if (pChoice === "Rock" && cChoice === "Paper") {
    compScore++;
    alert("You lost!");
  } else if (pChoice === "Paper" && cChoice === "Scissors") {
    compScore++;
    alert("You lost!");
  } else if (pChoice === "Scissors" && cChoice === "Rock") {
    compScore++;
    alert("You lost!");

    //Player wins
  } else if (pChoice === "Rock" && cChoice === "Scissors") {
    playerScore++;
    alert("You won! Rock crushes Scissors");
  } else if (pChoice === "Paper" && cChoice === "Rock") {
    playerScore++;
    alert("You won! Paper covers Rock");
  } else if (pChoice === "Scissors" && cChoice === "Paper") {
    playerScore++;
    alert("You won! Scissors cuts Paper");
  }
};

function updateScore() {
  document.getElementById("p-score").textContent = playerScore;
  document.getElementById("c-score").textContent = compScore;
}

function checkWinner() {
  if (playerScore === 5 || compScore === 5) {
    const winner =
      playerScore === 5
        ? "You win the game! Congratulations!"
        : "Computer wins the game! Try again next time!";
    alert(winner);
    return true;
  }
  return false;
}
