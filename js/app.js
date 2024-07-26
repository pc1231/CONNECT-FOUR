// constants--------------------------------------
const winningCombos = [
// horizontal
  [0, 1, 2, 3], [1, 2, 3, 4], [2, 3, 4, 5],
    [6, 7, 8, 9], [7, 8, 9, 10], [8, 9, 10, 11],
    [12, 13, 14, 15], [13, 14, 15, 16], [14, 15, 16, 17],
    [18, 19, 20, 21], [19, 20, 21, 22], [20, 21, 22, 23],
    [24, 25, 26, 27], [25, 26, 27, 28], [26, 27, 28, 29],
    [30, 31, 32, 33], [31, 32, 33, 34], [32, 33, 34, 35],
    [36, 37, 38, 39], [37, 38, 39, 40], [38, 39, 40, 41],
    // vertical combinations
    [0, 6, 12, 18], [6, 12, 18, 24], [12, 18, 24, 30],
    [1, 7, 13, 19], [7, 13, 19, 25], [13, 19, 25, 31],
    [2, 8, 14, 20], [8, 14, 20, 26], [14, 20, 26, 32],
    [3, 9, 15, 21], [9, 15, 21, 27], [15, 21, 27, 33],
    [4, 10, 16, 22], [10, 16, 22, 28], [16, 22, 28, 34],
    [5, 11, 17, 23], [11, 17, 23, 29], [17, 23, 29, 35],
    [18, 24, 30, 36], [19, 25, 31, 37], [20, 26, 32, 38],
    [21, 27, 33, 39], [22, 28, 34, 40], [23, 29, 35, 41]
  ];
// inspect allows us to see the each squares specific number
//---------Variables(State)------------------
let board, turn, winner, tie

// Cached Element References
const squareEls = document.querySelectorAll('.sqr')
const messageEl = document.getElementById('message')
// reset
const resetBtnEl = document.getElementById('reset')
//------Functions--------------
init()

function init() {
// allows us to change turns. after finishing add more need around 42 
board = ['','','','','','','','','','','','','','','',
'','','','','','','','','','','','',
'','','','','','','','','','','','','','','']
turn = 'X'
// false and true without the string makes it a boolean type
winner = false;
tie = false;
render()
// render updates the board based on the state based on users click.
}
//render displays the state of the game
function render() {
updateBoard()
updateMessage()
}
function updateBoard() {
    //element inside the space squares
    // function else if that allows for turns
    board.forEach((cell, idx) => {  
            if (cell === 'X') {
 squareEls[idx].textContent = 'X'
 // use this to make the choices change color 
 // make for connect four 
 //squareEls[idx].style.backgroundColor = 'red'
        } else if (cell === 'O') {
       squareEls[idx].textContent = 'O'
      // squareEls[idx].style.backgroundColor = 'blue'
        } else { 
            squareEls[idx].textContent = ''
            squareEls[idx].style.backgroundColor = 'White'
        }   
    })
}
   function updateMessage() {
    if (!winner &&!tie) {
        messageEl.textContent = `It is ${turn}'s turn`
    } 
    // IF THERES A TIE
    else if (!winner && tie) {
        messageEl.textContent = 'No Winner '
    // if theres a winner
    } else {
        messageEl.textContent = `${turn} wins the game!`

    }
}
// handle function muse take into account a winner and tie.
function handleClick(evt) { 

//using parse int is better practice for numbers
const squareIndex = parseInt(evt.target.id)
if (board[squareIndex] === 'X' || board[squareIndex] === 'O' ||
    winner) {
    return
    }
placePiece(squareIndex)

 // checking for winner ()
 checkForWinner()
 checkForTie()
 switchPlayerTurn()
 render()
}
     // use backticks to make the shorcut instead of putting all 42 turns
        //render whos turn it is
      //  !winner = (winner === false)
    function placePiece(index) {
        board[index] = turn   
    } 
    // we need 42 check for winner condition for connect four.
    
function checkForWinner() {
    // Hard-coding horizontal winning combinations
    if (
      // Row 1
      (board[0] && board[0] === board[1] && board[0] === board[2] && board[0] === board[3]) ||
      (board[1] && board[1] === board[2] && board[1] === board[3] && board[1] === board[4]) ||
      (board[2] && board[2] === board[3] && board[2] === board[4] && board[2] === board[5]) ||
      // Row 2
      (board[6] && board[6] === board[7] && board[6] === board[8] && board[6] === board[9]) ||
      (board[7] && board[7] === board[8] && board[7] === board[9] && board[7] === board[10]) ||
      (board[8] && board[8] === board[9] && board[8] === board[10] && board[8] === board[11]) ||
      // Row 3
      (board[12] && board[12] === board[13] && board[12] === board[14] && board[12] === board[15]) ||
      (board[13] && board[13] === board[14] && board[13] === board[15] && board[13] === board[16]) ||
      (board[14] && board[14] === board[15] && board[14] === board[16] && board[14] === board[17]) ||
      // Row 4
      (board[18] && board[18] === board[19] && board[18] === board[20] && board[18] === board[21]) ||
      (board[19] && board[19] === board[20] && board[19] === board[21] && board[19] === board[22]) ||
      (board[20] && board[20] === board[21] && board[20] === board[22] && board[20] === board[23]) ||
      // Row 5
      (board[24] && board[24] === board[25] && board[24] === board[26] && board[24] === board[27]) ||
      (board[25] && board[25] === board[26] && board[25] === board[27] && board[25] === board[28]) ||
      (board[26] && board[26] === board[27] && board[26] === board[28] && board[26] === board[29]) ||
      // Row 6
      (board[30] && board[30] === board[31] && board[30] === board[32] && board[30] === board[33]) ||
      (board[31] && board[31] === board[32] && board[31] === board[33] && board[31] === board[34]) ||
      (board[32] && board[32] === board[33] && board[32] === board[34] && board[32] === board[35]) ||
      // Row 7
      (board[36] && board[36] === board[37] && board[36] === board[38] && board[36] === board[39]) ||
      (board[37] && board[37] === board[38] && board[37] === board[39] && board[37] === board[40]) ||
      (board[38] && board[38] === board[39] && board[38] === board[40] && board[38] === board[41]) ||
        // vertical combinations
        // column 1 
        (board[0] && board[0] === board[6] && board[0] === board[12] && board[0] === board[18])
    ) {
      winner = true;
    }
  }
    //  checking for tie function
    function checkForTie() {
    if (winner) {
    return
    }
    // board wont stop checking for a tie
 if (!board.includes('')) {
    tie = true
 }
}
function switchPlayerTurn() {
   if(winner) {
    return
   } 
   if (turn === 'X') {
    turn = 'O'
   } else {
   turn ='X'
    }
    // turn = turn ==='X' ? 'O' : 'X'

}
//-------Event Listeners---------------
// use a bubble to select the whole div class
squareEls.forEach((squareEl) => {
squareEl.addEventListener('click', handleClick)  
})
resetBtnEl.addEventListener('click', init)