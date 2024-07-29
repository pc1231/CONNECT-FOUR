const winningCombos = [
    [0, 1, 2, 3], [1, 2, 3, 4], [2, 3, 4, 5],
    [6, 7, 8, 9], [7, 8, 9, 10], [8, 9, 10, 11],
    [12, 13, 14, 15], [13, 14, 15, 16], [14, 15, 16, 17],
    [18, 19, 20, 21], [19, 20, 21, 22], [20, 21, 22, 23],
    [24, 25, 26, 27], [25, 26, 27, 28], [26, 27, 28, 29],
    [30, 31, 32, 33], [31, 32, 33, 34], [32, 33, 34, 35],
    [36, 37, 38, 39], [37, 38, 39, 40], [38, 39, 40, 41],
    [0, 6, 12, 18], [6, 12, 18, 24], [12, 18, 24, 30],
    [1, 7, 13, 19], [7, 13, 19, 25], [13, 19, 25, 31],
    [2, 8, 14, 20], [8, 14, 20, 26], [14, 20, 26, 32],
    [3, 9, 15, 21], [9, 15, 21, 27], [15, 21, 27, 33],
    [4, 10, 16, 22], [10, 16, 22, 28], [16, 22, 28, 34],
    [5, 11, 17, 23], [11, 17, 23, 29], [17, 23, 29, 35],
    [18, 24, 30, 36], [19, 25, 31, 37], [20, 26, 32, 38],
    [21, 27, 33, 39], [22, 28, 34, 40], [23, 29, 35, 41],
    [18, 13, 8, 3], [19, 14, 9, 4], [20, 15, 10, 5],
    [24, 19, 14, 9], [25, 20, 15, 10], [26, 21, 16, 11],
    [30, 25, 20, 15], [31, 26, 21, 16], [32, 27, 22, 17],
    [0, 7, 14, 21], [1, 8, 15, 22], [2, 9, 16, 23],
    [6, 13, 20, 27], [7, 14, 21, 28], [8, 15, 22, 29],
    [12, 19, 26, 33], [13, 20, 27, 34], [14, 21, 28, 35],
    [18, 25, 32, 39], [19, 26, 33, 40], [20, 27, 34, 41], [36,31,26,21]
  ];
  
  let board, turn, winner, tie;
  
  const squareEls = document.querySelectorAll('.sqr');
  const messageEl = document.getElementById('message');
  const resetBtnEl = document.getElementById('reset');
  
  init();
  
  function init() {
    board = [
      '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
      '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
      '', '', '', '', '', '', '', ''
    ];
    turn = 'X';
    winner = false
    tie = false
    render();
  }
  
  function render() {
    updateBoard();
    updateMessage();
  }
  
  function updateBoard() {
    board.forEach((cell, idx) => {  
      if (cell === 'X') {
        squareEls[idx].textContent = '🔴';
        squareEls[idx].style.backgroundColor = 'red';
      } else if (cell === 'O') {
        squareEls[idx].textContent = '🔵';
        squareEls[idx].style.backgroundColor = 'blue';
      } else { 
        squareEls[idx].textContent = '';
        squareEls[idx].style.backgroundColor = 'white';
      }   
    });
  }
  
  function updateMessage() {
    if (!winner && !tie) {
      messageEl.textContent = `It is ${turn === 'X' ? '🔴' : '🔵'}'s turn`;
    } else if (!winner && tie) {
      messageEl.textContent = 'No Winner';
    } else {
      messageEl.textContent = `${turn === 'X' ? '🔴' : '🔵'} wins the game!`;
    }
  }
  
  function handleClick(evt) { 
    const squareIndex = parseInt(evt.target.id);
    if (board[squareIndex] === 'X' || board[squareIndex] === 'O' || winner) {
      return;
    }
    placePiece(squareIndex);
    checkForWinner();
    checkForTie();
    switchPlayerTurn();
    render();
  }
  
  function placePiece(index) {
    board[index] = turn;   
  }
  
  function checkForWinner() {
    for (const combo of winningCombos) {
      const [a, b, c, d] = combo;
      if (board[a] && board[a] === board[b] && board[a] === board[c] && board[a] === board[d]) {
        winner = true;  
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
  
  squareEls.forEach((squareEl) => {
    squareEl.addEventListener('click', handleClick);
  });
  resetBtnEl.addEventListener('click', init);
  