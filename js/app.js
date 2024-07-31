const winningCombos = [
    [0, 1, 2, 3], [1, 2, 3, 4], [2, 3, 4, 5],
    [6, 7, 8, 9], [7, 8, 9, 10], [8, 9, 10, 11],
    [12, 13, 14, 15], [13, 14, 15, 16], [14, 15, 16, 17],
    [18, 19, 20, 21], [19, 20, 21, 22], [20, 21, 22, 23],
    [24, 25, 26, 27], [25, 26, 27, 28], [26, 27, 28, 29],
    [30, 31, 32, 33], [31, 32, 33, 34], [32, 33, 34, 35],
    [36, 37, 38, 39], [37, 38, 39, 40], [38, 39, 40, 41],
    [0, 6, 12, 18], [6, 12, 18, 24], [12, 18, 24, 30], [18, 24, 30, 36],
    [1, 7, 13, 19], [7, 13, 19, 25], [13, 19, 25, 31], [19, 25, 31, 37],
    [2, 8, 14, 20], [8, 14, 20, 26], [14, 20, 26, 32], [20, 26, 32, 38],
    [3, 9, 15, 21], [9, 15, 21, 27], [15, 21, 27, 33], [21, 27, 33, 39],
    [4, 10, 16, 22], [10, 16, 22, 28], [16, 22, 28, 34], [22, 28, 34, 40],
    [5, 11, 17, 23], [11, 17, 23, 29], [17, 23, 29, 35], [23, 29, 35, 41],
    [0, 7, 14, 21], [1, 8, 15, 22], [2, 9, 16, 23], [3, 10, 17, 24],
    [6, 13, 20, 27], [7, 14, 21, 28], [8, 15, 22, 29], [9, 16, 23, 30],
    [12, 19, 26, 33], [13, 20, 27, 34], [14, 21, 28, 35], [15, 22, 29, 36],
    [18, 25, 32, 39], [19, 26, 33, 40], [20, 27, 34, 41],
    [3, 9, 15, 21], [2, 8, 14, 20], [1, 7, 13, 19], [0, 6, 12, 18],
    [9, 15, 21, 27], [8, 14, 20, 26], [7, 13, 19, 25], [6, 12, 18, 24],
    [15, 21, 27, 33], [14, 20, 26, 32], [13, 19, 25, 31], [12, 18, 24, 30],
    [21, 27, 33, 39], [20, 26, 32, 38], [19, 25, 31, 37], [18, 24, 30, 36]
];

let board, turn, winner, tie;

const circleEls = document.querySelectorAll('.circle');
const messageEl = document.getElementById('message');
const resetBtnEl = document.getElementById('reset');

init();

function init() {
    board = Array(42).fill('');
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

function handleClick(evt) {
    const circleIndex = parseInt(evt.target.id);
    const column = circleIndex % 7;

    if (!isValidMove(column) || winner) return;

    placePiece(column);
    checkForWinner();
    checkForTie();
    switchPlayerTurn();
    render();
}

function isValidMove(column) {
    for (let row = 5; row >= 0; row--) {
        const index = row * 7 + column;
        if (board[index] === '') {
            return true;
        }
    }
    return false;
}

function placePiece(column) {
    for (let row = 5; row >= 0; row--) {
        const index = row * 7 + column;
        if (board[index] === '') {
            board[index] = turn;
            return; 
        }
    }
}

function checkForWinner() {
    for (const combo of winningCombos) {
        const [a, b, c, d] = combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c] && board[a] === board[d]) {
            winner = true;
            return; 
        }
    }
}

function checkForTie() {
    if (winner) return;
    if (!board.includes('')) {
        tie = true;
    }
}

function switchPlayerTurn() {
    if (winner) return;
    turn = turn === 'X' ? 'O' : 'X';
}

circleEls.forEach((circleEl) => {
    circleEl.addEventListener('click', handleClick);
});
resetBtnEl.addEventListener('click', init);
