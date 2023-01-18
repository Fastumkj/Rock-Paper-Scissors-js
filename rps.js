alert("BATTLE OF THE 3 HAND SIGNS!!");

const options = document.querySelectorAll(".options"); //querySelectorAll() returns an array of objects with all the HTML elements
//querySelector() returns the single object with the first HTML element.
const scores = {
  player: 0,
  ai: 0,
};

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
      scores.player = scores.ai = 0;
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
    scores.ai++;
    alert("You lost!");
  } else if (pChoice === "Paper" && cChoice === "Scissors") {
    scores.ai++;
    alert("You lost!");
  } else if (pChoice === "Scissors" && cChoice === "Rock") {
    scores.ai++;
    alert("You lost!");

    //Player wins
  } else if (pChoice === "Rock" && cChoice === "Scissors") {
    scores.player++;
    alert("You won! Rock crushes Scissors");
  } else if (pChoice === "Paper" && cChoice === "Rock") {
    scores.player++;
    alert("You won! Paper covers Rock");
  } else if (pChoice === "Scissors" && cChoice === "Paper") {
    scores.player++;
    alert("You won! Scissors cuts Paper");
  }
};

function updateScore() {
  document.getElementById("p-score").textContent = scores.player;
  document.getElementById("c-score").textContent = scores.ai;
}

function checkWinner() {
  if (scores.player === 5 || scores.ai === 5) {
    const winner =
      scores.player === 5
        ? "You hooman won the game! Congratulations!"
        : "You hooman just lost the game! Try again next year.";
    alert(winner);
    return true;
  }
  return false;
}
