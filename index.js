const boxes = document.querySelectorAll(".box");
const trn = document.querySelector(".trn");
let currentPlayer = "X";

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (!box.textContent && !checkWinner()) {
      box.textContent = currentPlayer;

      if (checkWinner()) {
        alert(`Player ${currentPlayer} wins!`);
        resetBoard();
      } else if ([...boxes].every((box) => box.textContent)) {
        alert("It's a draw!");
        resetBoard();
      } else {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        updateTurnDisplay();
      }
    }
  });
});

function updateTurnDisplay() {
  trn.textContent =
    currentPlayer === "X" ? "Player One's Turn" : "Player Two's Turn";
}

function checkWinner() {
  const winningCombos = [
    ["b1", "b2", "b3"],
    ["b4", "b5", "b6"],
    ["b7", "b8", "b9"],
    ["b1", "b4", "b7"],
    ["b2", "b5", "b8"],
    ["b3", "b6", "b9"],
    ["b1", "b5", "b9"],
    ["b3", "b5", "b7"],
  ];

  for (const combo of winningCombos) {
    const [a, b, c] = combo;
    if (
      document.getElementById(a).textContent &&
      document.getElementById(a).textContent ===
        document.getElementById(b).textContent &&
      document.getElementById(b).textContent ===
        document.getElementById(c).textContent
    ) {
      return true;
    }
  }
  return false;
}

function resetBoard() {
  boxes.forEach((box) => {
    box.textContent = " ";
  });
  currentPlayer = "X";
  updateTurnDisplay();
}
