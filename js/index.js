// DOM Elements

const xElement = `<i class="fa-solid fa-x c-black"></i>`;
const oElement = `<i class="fa-solid fa-o c-white"></i>`;

const xWin = document.getElementById("x-win");
const oWin = document.getElementById("o-win");

const btn = document.getElementById("btn");
btn.addEventListener("click", () => newGame());

// Initialize
let turn = "x";

let counterX = 0;
let counterO = 0;

let counter = 0;

let statusOfGame = "";
let delay = 500;

const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    if (e.currentTarget.innerHTML === "") {
      e.currentTarget.innerHTML = turn === "x" ? xElement : oElement;
      checkWinner();
      turn = turn == "x" ? "o" : "x";
    }
  });
});

function startGame() {
  turn = "x";
  statusOfGame = "";
  counter = 0;
  boxes.forEach((box) => {
    box.innerHTML = "";
  });
}

startGame();

// To Start A New Game
function newGame() {
  counterX = 0;
  counterO = 0;

  xWin.innerHTML = counterX;
  oWin.innerHTML = counterO;

  startGame();
}

// To Check Winner
function checkWinner() {
  // First Row
  if (
    boxes[0].innerHTML === boxes[1].innerHTML &&
    boxes[0].innerHTML === boxes[2].innerHTML
  ) {
    if (boxes[0].innerHTML === xElement) {
      counterX++;
      xWin.innerHTML = counterX;
      statusOfGame = "X Win";
      setTimeout(() => {
        popup(statusOfGame);
        startGame();
      }, delay);
    } else if (boxes[0].innerHTML === oElement) {
      counterO++;
      oWin.innerHTML = counterO;
      statusOfGame = "O Win";
      setTimeout(() => {
        popup(statusOfGame);
        startGame();
      }, delay);
    }
  }
  // Seconed Row
  if (
    boxes[3].innerHTML === boxes[4].innerHTML &&
    boxes[3].innerHTML === boxes[5].innerHTML
  ) {
    if (boxes[3].innerHTML === xElement) {
      counterX++;
      xWin.innerHTML = counterX;
      statusOfGame = "X Win";
      setTimeout(() => {
        popup(statusOfGame);
        startGame();
      }, delay);
    } else if (boxes[3].innerHTML === oElement) {
      counterO++;
      oWin.innerHTML = counterO;
      statusOfGame = "O Win";
      setTimeout(() => {
        popup(statusOfGame);
        startGame();
      }, delay);
    }
  }
  // Third Row
  if (
    boxes[6].innerHTML === boxes[7].innerHTML &&
    boxes[6].innerHTML === boxes[8].innerHTML
  ) {
    if (boxes[6].innerHTML === xElement) {
      counterX++;
      xWin.innerHTML = counterX;
      statusOfGame = "X Win";
      setTimeout(() => {
        popup(statusOfGame);
        startGame();
      }, delay);
    } else if (boxes[6].innerHTML === oElement) {
      counterO++;
      oWin.innerHTML = counterO;
      statusOfGame = "O Win";
      setTimeout(() => {
        popup(statusOfGame);
        startGame();
      }, delay);
    }
  }
  // First Column
  if (
    boxes[0].innerHTML === boxes[3].innerHTML &&
    boxes[0].innerHTML === boxes[6].innerHTML
  ) {
    if (boxes[0].innerHTML === xElement) {
      counterX++;
      xWin.innerHTML = counterX;
      statusOfGame = "X Win";
      setTimeout(() => {
        popup(statusOfGame);
        startGame();
      }, delay);
    } else if (boxes[0].innerHTML === oElement) {
      counterO++;
      oWin.innerHTML = counterO;
      statusOfGame = "O Win";
      setTimeout(() => {
        popup(statusOfGame);
        startGame();
      }, delay);
    }
  }
  // Seconed Column
  if (
    boxes[1].innerHTML === boxes[4].innerHTML &&
    boxes[1].innerHTML === boxes[7].innerHTML
  ) {
    if (boxes[1].innerHTML === xElement) {
      counterX++;
      xWin.innerHTML = counterX;
      statusOfGame = "X Win";
      setTimeout(() => {
        popup(statusOfGame);
        startGame();
      }, delay);
    } else if (boxes[1].innerHTML === oElement) {
      counterO++;
      oWin.innerHTML = counterO;
      statusOfGame = "O Win";
      setTimeout(() => {
        popup(statusOfGame);
        startGame();
      }, delay);
    }
  }
  // Third Column
  if (
    boxes[2].innerHTML === boxes[5].innerHTML &&
    boxes[2].innerHTML === boxes[8].innerHTML
  ) {
    if (boxes[2].innerHTML === xElement) {
      counterX++;
      xWin.innerHTML = counterX;
      statusOfGame = "X Win";
      setTimeout(() => {
        popup(statusOfGame);
        startGame();
      }, delay);
    } else if (boxes[2].innerHTML === oElement) {
      counterO++;
      oWin.innerHTML = counterO;
      statusOfGame = "O Win";
      setTimeout(() => {
        popup(statusOfGame);
        startGame();
      }, delay);
    }
  }
  // First Diagonal
  if (
    boxes[0].innerHTML === boxes[4].innerHTML &&
    boxes[0].innerHTML === boxes[8].innerHTML
  ) {
    if (boxes[0].innerHTML === xElement) {
      counterX++;
      xWin.innerHTML = counterX;
      statusOfGame = "X Win";
      setTimeout(() => {
        popup(statusOfGame);
        startGame();
      }, 1000);
    } else if (boxes[0].innerHTML === oElement) {
      counterO++;
      oWin.innerHTML = counterO;
      statusOfGame = "O Win";
      setTimeout(() => {
        popup(statusOfGame);
        startGame();
      }, delay);
    }
  }
  // Seconed Diagonal
  if (
    boxes[2].innerHTML === boxes[4].innerHTML &&
    boxes[2].innerHTML === boxes[6].innerHTML
  ) {
    if (boxes[2].innerHTML === xElement) {
      counterX++;
      xWin.innerHTML = counterX;
      statusOfGame = "X Win";
      setTimeout(() => {
        popup(statusOfGame);
        startGame();
      }, delay);
    } else if (boxes[2].innerHTML === oElement) {
      counterO++;
      oWin.innerHTML = counterO;
      statusOfGame = "O Win";
      setTimeout(() => {
        popup(statusOfGame);
        startGame();
      }, delay);
    }
  }

  // Draw
  if (!statusOfGame) {
    counter = 0;
    boxes.forEach((box) => (box.innerHTML != "" ? counter++ : null));
    if (counter === boxes.length) {
      statusOfGame = "Draw";
      setTimeout(() => {
        popup(statusOfGame);
        startGame();
      }, delay);
    }
  }
}

function popup(status) {
  const span = document.createElement("span");
  span.append(document.createTextNode(status));

  span.className = "popup";

  span.style = `

  `;

  document.getElementById("game-container").append(span);

  setTimeout(() => span.remove(), delay + 1000);
}
