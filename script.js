"use strict";
let xNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);
  //
  if (!guess) {
    document.querySelector(".message").textContent = "No number!!!";
  } else if (guess === xNumber) {
    document.querySelector(".message").textContent = "YOU WIN!!!";
    document.querySelector(".check").style.visibility = "hidden";
    document.querySelector("body").style.backgroundColor = "Green";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = xNumber;
    if (highscore < score) {
      document.querySelector(".highscore").textContent = score;
    }
  } else if (guess < 1 || guess > 20) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        "Number must be between 1 and 20";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".score").textContent = 0;
      document.querySelector(".message").textContent = "YOU LOST";
      document.querySelector(".check").style.visibility = "hidden";
    }
  } else if (guess < xNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".score").textContent = 0;
      document.querySelector(".message").textContent = "YOU LOST";
      document.querySelector(".check").style.visibility = "hidden";
    }
  } else if (guess > xNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too high";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".score").textContent = 0;
      document.querySelector(".message").textContent = "YOU LOST";
      document.querySelector(".check").style.visibility = "hidden";
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".score").textContent = 20;
  document.querySelector(".check").style.visibility = "visible";
  document.querySelector("body").style.backgroundColor = "Black";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
});
