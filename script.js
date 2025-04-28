const playerOne = document.querySelector(".playerOne");
const playerTwo = document.querySelector(".playerTwo");
const scoreOne = document.querySelector(".scoreOne");
const scoreTwo = document.querySelector(".scoreTwo");
const currentOne = document.querySelector(".curentOne");
const currentTwo = document.querySelector(".curentTwo");
const dice = document.querySelector(".dice");
const btnNew = document.querySelector(".btnNew");
const btnRoll = document.querySelector(".btnRoll");
const btnHold = document.querySelector(".btnHold");
const One = document.querySelector(".One");
const Two = document.querySelector(".Two");

let scores, currentScore, activePlayer, playing;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = "One";
  playing = true;

  scoreOne.textContent = 0;
  scoreTwo.textContent = 0;
  currentOne.textContent = 0;
  currentTwo.textContent = 0;

  dice.classList.add("hidden");
  playerOne.classList.remove("playerWinner");
  playerTwo.classList.remove("playerWinner");
  playerOne.classList.add("playerActive");
  playerTwo.classList.remove("playerActive");
  One.style.display = "none";
  Two.style.display = "none";
};
init();
const switchPlayer = function () {
  document.querySelector(`.curent${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === "One" ? "Two" : "One";
  playerOne.classList.toggle("playerActive");
  playerTwo.classList.toggle("playerActive");
};

btnRoll.addEventListener("click", function () {
  if (playing) {
    const diceValue = Math.floor(Math.random() * 6) + 1;

    dice.classList.remove("hidden");
    dice.src = `dice-${diceValue}.svg`;
    if (diceValue !== 1) {
      currentScore += diceValue;
      document.querySelector(`.curent${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    if (activePlayer == "One") {
      scores[0] += currentScore;
      document.querySelector(`.score${activePlayer}`).textContent = scores[0];
    }
    if (activePlayer == "Two") {
      scores[1] += currentScore;
      document.querySelector(`.score${activePlayer}`).textContent = scores[1];
    }

    if (scores[0] >= 100 || scores[1] >= 100) {
      playing = false;
      dice.classList.add("hidden");
      document
        .querySelector(`.player${activePlayer}`)
        .classList.add("playerWinner");
      document
        .querySelector(`.player${activePlayer}`)
        .classList.remove("playerActive");
      document.querySelector(`.${activePlayer}`).style.display = "block";
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", init);
