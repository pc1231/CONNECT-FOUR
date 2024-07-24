// constants--------------------------------------




//---------Variables(State)------------------
let board, turn, winner, tie


// Cached Element References
const squareEls = document.querySelectorAll('.sqr')
const messageEl = document.getElementById('message')

//------Functions--------------
init()

function init() {
// allows us to change turns. after finishing add more need around 42 
board = ['','X','','X','','','O','','']
turn = 'X'
winner = false
tie = false
render()
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
    }

    }
     // use backticks to make the shorcut instead of putting all 42 turns
        //render whos turn it is
      //  !winner = (winner === false)


//-------Event Listeners---------------
