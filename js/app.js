let board, turn, winner, tie;

const circleEls = document.querySelectorAll('.circle');
const messageEl = document.getElementById('message');
const resetBtnEl = document.getElementById('reset');

init();
function init() {
    board = Array(42).fill('X');
    turn = 'X';
    winner = false;
    tie = false;
    render();
}
function render() {
    updateBoard();
    updateMessage();
}

function updateBoard() {
    board.forEach((cell, idx) => {
        if (cell === 'X') {
            circleEls[idx].style.backgroundColor = 'red';
        } else if (cell === 'O') {
            circleEls[idx].style.backgroundColor = 'blue';
        } else {
            circleEls[idx].style.backgroundColor = 'white';
        }
    });
}

function updateMessage() {
    if (!winner && !tie) {
        messageEl.textContent = `It is ${turn === 'X' ? 'red' : 'blue'}'s turn`;
    } else if (!winner && tie) {
        messageEl.textContent = 'No Winner';
    } else {
        messageEl.textContent = `${turn === 'X' ? 'red' : 'blue'} wins the game!`;
    }
}


circleEls.forEach((circleEl) => {
    circleEl.addEventListener('click', handleClick);
});
resetBtnEl.addEventListener('click', init);
