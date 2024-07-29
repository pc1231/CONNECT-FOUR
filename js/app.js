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
    [18, 25, 32, 39], [19, 26, 33, 40], [20, 27, 34, 41]
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
    if (
      (board[0] && board[0] === board[1] && board[0] === board[2] && board[0] === board[3]) ||
      (board[1] && board[1] === board[2] && board[1] === board[3] && board[1] === board[4]) ||
      (board[2] && board[2] === board[3] && board[2] === board[4] && board[2] === board[5]) ||
      (board[6] && board[6] === board[7] && board[6] === board[8] && board[6] === board[9]) ||
      (board[7] && board[7] === board[8] && board[7] === board[9] && board[7] === board[10]) ||
      (board[8] && board[8] === board[9] && board[8] === board[10] && board[8] === board[11]) ||
      (board[12] && board[12] === board[13] && board[12] === board[14] && board[12] === board[15]) ||
      (board[13] && board[13] === board[14] && board[13] === board[15] && board[13] === board[16]) ||
      (board[14] && board[14] === board[15] && board[14] === board[16] && board[14] === board[17]) ||
      (board[18] && board[18] === board[19] && board[18] === board[20] && board[18] === board[21]) ||
      (board[19] && board[19] === board[20] && board[19] === board[21] && board[19] === board[22]) ||
      (board[20] && board[20] === board[21] && board[20] === board[22] && board[20] === board[23]) ||
      (board[24] && board[24] === board[25] && board[24] === board[26] && board[24] === board[27]) ||
      (board[25] && board[25] === board[26] && board[25] === board[27] && board[25] === board[28]) ||
      (board[26] && board[26] === board[27] && board[26] === board[28] && board[26] === board[29]) ||
      (board[30] && board[30] === board[31] && board[30] === board[32] && board[30] === board[33]) ||
      (board[31] && board[31] === board[32] && board[31] === board[33] && board[31] === board[34]) ||
      (board[32] && board[32] === board[33] && board[32] === board[34] && board[32] === board[35]) ||
      (board[36] && board[36] === board[37] && board[36] === board[38] && board[36] === board[39]) ||
      (board[37] && board[37] === board[38] && board[37] === board[39] && board[37] === board[40]) ||
      (board[38] && board[38] === board[39] && board[38] === board[40] && board[38] === board[41]) ||
      (board[0] && board[0] === board[6] && board[0] === board[12] && board[0] === board[18]) ||
      (board[6] && board[6] === board[12] && board[6] === board[18] && board[6] === board[24]) ||
      (board[12] && board[12] === board[18] && board[12] === board[24] && board[12] === board[30]) ||
      (board[1] && board[1] === board[7] && board[1] === board[13] && board[1] === board[19]) ||
      (board[7] && board[7] === board[13] && board[7] === board[19] && board[7] === board[25]) ||
      (board[13] && board[13] === board[19] && board[13] === board[25] && board[13] === board[31]) ||
      (board[2] && board[2] === board[8] && board[2] === board[14] && board[2] === board[20]) ||
      (board[8] && board[8] === board[14] && board[8] === board[20] && board[8] === board[26]) ||
      (board[14] && board[14] === board[20] && board[14] === board[26] && board[14] === board[32]) ||
      (board[3] && board[3] === board[9] && board[3] === board[15] && board[3] === board[21]) ||
      (board[9] && board[9] === board[15] && board[9] === board[21] && board[9] === board[27]) ||
      (board[15] && board[15] === board[21] && board[15] === board[27] && board[15] === board[33]) ||
      (board[4] && board[4] === board[10] && board[4] === board[16] && board[4] === board[22]) ||
      (board[10] && board[10] === board[16] && board[10] === board[22] && board[10] === board[28]) ||
      (board[16] && board[16] === board[22] && board[16] === board[28] && board[16] === board[34]) ||
      (board[5] && board[5] === board[11] && board[5] === board[17] && board[5] === board[23]) ||
      (board[11] && board[11] === board[17] && board[11] === board[23] && board[11] === board[29]) ||
      (board[17] && board[17] === board[23] && board[17] === board[29] && board[17] === board[35]) ||
      (board[18] && board[18] === board[24] && board[18] === board[30] && board[18] === board[36]) ||
      (board[19] && board[19] === board[25] && board[19] === board[31] && board[19] === board[37]) ||
      (board[20] && board[20] === board[26] && board[20] === board[32] && board[20] === board[38]) ||
      (board[21] && board[21] === board[27] && board[21] === board[33] && board[21] === board[39]) ||
      (board[22] && board[22] === board[28] && board[22] === board[34] && board[22] === board[40]) ||
      (board[23] && board[23] === board[29] && board[23] === board[35] && board[23] === board[41]) ||
      (board[18] && board[18] === board[13] && board[18] === board[8] && board[18] === board[3]) ||
      (board[19] && board[19] === board[14] && board[19] === board[9] && board[19] === board[4]) ||
      (board[20] && board[20] === board[15] && board[20] === board[10] && board[20] === board[5]) ||
      (board[24] && board[24] === board[19] && board[24] === board[14] && board[24] === board[9]) ||
      (board[25] && board[25] === board[20] && board[25] === board[15] && board[25] === board[10]) ||
      (board[26] && board[26] === board[21] && board[26] === board[16] && board[26] === board[11]) ||
      (board[30] && board[30] === board[25] && board[30] === board[20] && board[30] === board[15]) ||
      (board[31] && board[31] === board[26] && board[31] === board[21] && board[31] === board[16]) ||
      (board[32] && board[32] === board[27] && board[32] === board[22] && board[32] === board[17]) ||
      (board[0] && board[0] === board[7] && board[0] === board[14] && board[0] === board[21]) ||
      (board[1] && board[1] === board[8] && board[1] === board[15] && board[1] === board[22]) ||
      (board[2] && board[2] === board[9] && board[2] === board[16] && board[2] === board[23]) ||
      (board[6] && board[6] === board[13] && board[6] === board[20] && board[6] === board[27]) ||
      (board[7] && board[7] === board[14] && board[7] === board[21] && board[7] === board[28]) ||
      (board[8] && board[8] === board[15] && board[8] === board[22] && board[8] === board[29]) ||
      (board[12] && board[12] === board[19] && board[12] === board[26] && board[12] === board[33]) ||
      (board[13] && board[13] === board[20] && board[13] === board[27] && board[13] === board[34]) ||
      (board[14] && board[14] === board[21] && board[14] === board[28] && board[14] === board[35]) ||
      (board[18] && board[18] === board[25] && board[18] === board[32] && board[18] === board[39]) ||
      (board[19] && board[19] === board[26] && board[19] === board[33] && board[19] === board[40]) ||
      (board[20] && board[20] === board[27] && board[20] === board[34] && board[20] === board[41])
    ) {
      winner = true;
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
  
  