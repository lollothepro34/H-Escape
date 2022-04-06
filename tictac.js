const statusDisplay = document.querySelector('.game--status');eActive = true;
let currentPlayer = "X";
let gameState = ["", "", "", "", "", "", "", "", ""];
const winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => `Game ended in a draw!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;
statusDisplay.innerHTML = currentPlayerTurn();
function handleCellPlayed() {
}
function handlePlayerChange() {
}
function handleResultValidation() {
}
function handleCellClick() {
}
function handleRestartGame() {
}
document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
document.querySelector('.game--restart').addEventListener('click', handleRestartGame);

function handleCellClick(clickedCellEvent) {
     const clickedCell = clickedCellEvent.target;
     const clickedCellIndex = parseInt(
          clickedCell.getAttribute('data-cell-index')
        );
    
        if (gameState[clickedCellIndex] !== "" || !gameActive) {
            return;
        }
   
        handleCellPlayed(clickedCell, clickedCellIndex);
        handleResultValidation();
    }