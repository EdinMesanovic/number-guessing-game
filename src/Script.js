let num = Math.trunc(Math.random() * 100) + 1;

let att = 10;
let guesses = [];

const clear = () => {
  document.querySelector(".input-field").value = "";
};

function init() {
  num = Math.trunc(Math.random() * 100) + 1;

  document.querySelector(".message").classList.add("hidden");
  att = 10;
  document.querySelector(".score").textContent = att;
  guesses = [];
  document.querySelector(".guesses-span").textContent = guesses;
  document.querySelector(".start-btn").classList.add("hidden");
  document.querySelector(".input-field").value = "";
}

const newGame = () => {
  init();
};

const reset = () => {
  init();
};

const check = () => {
  const guess = Number(document.querySelector(".input-field").value);

  document.querySelector(".message").classList.remove("hidden");
  document.querySelector(".input-field").value = "";

  function dom() {
    document.querySelector(".message").classList.add("bg-info");
    document.querySelector(".message").classList.remove("bg-danger");
    document.querySelector(".message").classList.remove("bg-succes");
    guesses.push(guess);
    att--;
    document.querySelector(".guesses-span").textContent = guesses;
    document.querySelector(".score").textContent = att;
  }

  function gameOver() {
    document.querySelector(".message").textContent = "GAME OVER";
    document.querySelector(".message").classList.add("bg-warning");
    document.querySelector(".score").textContent = 0;
    document.querySelector(".start-btn").classList.remove("hidden");
    guesses.push(guess);
  }

  if (guess !== num) {
    if (guess < num) {
      if (att > 1) {
        document.querySelector(".message").textContent =
          "UPS!Last guess was too low";
        dom();
        document.querySelector(".message").classList.add("bg-info");
        document.querySelector(".message").classList.remove("bg-warning");
        document.querySelector(".message").classList.remove("bg-danger");
      } else {
        gameOver();
      }
    } else {
      if (att > 1) {
        document.querySelector(".message").textContent =
          "UPS!Last guess was too high";
        dom();
        document.querySelector(".message").classList.add("bg-danger");
        document.querySelector(".message").classList.remove("bg-info");
        document.querySelector(".message").classList.remove("bg-warning");
      } else {
        gameOver();
      }
    }
  } else {
    let score = Number(document.querySelector(".high-score").textContent);

    document.querySelector(".message").textContent =
      "Congratulations! You got it right";
    if (att > score) {
      document.querySelector(".high-score").textContent = att;
    }
    document.querySelector(".input-field").value = guess;
    document.querySelector(".message").classList.add("bg-succes");
    document.querySelector(".start-btn").classList.remove("hidden");
  }
};

export { check, clear, reset, newGame };
