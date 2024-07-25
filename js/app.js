// constants--------------------------------------
    const winningCombos = [
        // Horizontal
        [0, 1, 2, 3], [1, 2, 3, 4], [2, 3, 4, 5], [3, 4, 5, 6],
        [7, 8, 9, 10], [8, 9, 10, 11], [9, 10, 11, 12], [10, 11, 12, 13],
        [14, 15, 16, 17], [15, 16, 17, 18], [16, 17, 18, 19], [17, 18, 19, 20],
        [21, 22, 23, 24], [22, 23, 24, 25], [23, 24, 25, 26], [24, 25, 26, 27],
        [28, 29, 30, 31], [29, 30, 31, 32], [30, 31, 32, 33], [31, 32, 33, 34],
        [35, 36, 37, 38], [36, 37, 38, 39], [37, 38, 39, 40], [38, 39, 40, 41]
      ];
      
// inspect allows us to see the each squares specific number
//---------Variables(State)------------------
let board, turn, winner, tie

// Cached Element References
const squareEls = document.querySelectorAll('.sqr')
const messageEl = document.getElementById('message')
// reset
const resetBtnEl = document.getElementById('reset')
console.log(resetBtnEl);
//------Functions--------------
init()

function init() {
// allows us to change turns. after finishing add more need around 42 
board = ['','','','','','','','','','','','','','','',
'','','','','','','','','','','','',
'','','','','','','','','','','','','','','',]
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
    } // IF THERES A TIE
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
    if ((board[0] !== '' && board[0] === board[1] && board[0] === board[2]) ||
        (board[3] !== '' && board[3] === board[4] && board[3] === board[5]) ||
        (board[6] !== '' && board[6] === board[7] && board[6] === board[8]) ||
        (board[0] !== '' && board[0] === board[3] && board[0] === board[6]) ||
        (board[1] !== '' && board[1] === board[4] && board[1] === board[7]) ||
        (board[2] !== '' && board[2] === board[5] && board[2] === board[8]) ||
        (board[0] !== '' && board[0] === board[4] && board[0] === board[8]) ||
        (board[2] !== '' && board[2] === board[4] && board[2] === board[6])
      )
      {
      winner = true  
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