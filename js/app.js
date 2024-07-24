// constants--------------------------------------
const winningCombos = [
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[2,4,6]
[0,4,8]
]
// inspect allows us to see the each squares specific number


//---------Variables(State)------------------
let board, turn, winner, tie


// Cached Element References
const squareEls = document.querySelectorAll('.sqr')
const messageEl = document.getElementById('message')

//------Functions--------------
init()

function init() {
// allows us to change turns. after finishing add more need around 42 
board = ['','','','','','','','','']
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
        messageEl.textContent = 'game over'
    // if theres a winner
    } else {
        messageEl.textContent = `${turn} wins the game!`

    }
}
// handle function muse take into account a winner and tie.
function handleClick(evt) { 
console.log(evt.target)
//using parse int is better practice for numbers
const squareIndex = parseInt(evt.target.id)
console.log(squareIndex, typeof squareIndex );
}
     // use backticks to make the shorcut instead of putting all 42 turns
        //render whos turn it is
      //  !winner = (winner === false)


//-------Event Listeners---------------
// use a bubble to select the whole div class
squareEls.forEach((squareEl) => {
squareEl.addEventListener('click', handleClick)  
})