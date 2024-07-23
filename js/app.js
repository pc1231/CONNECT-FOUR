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
board = ['','X','','','O','','','','']
turn = 'X'
winner = false
tie = false
render()
}
//render displays the state of the game
function render() {
updateBoard()
}
function updateBoard() {
    //element inside the space squares
    // function else if that allows for turns
    board.forEach((cell, idx) => {  
            if (cell === 'X') {
 squareEls[idx].textContent = 'X'
        } else if (cell === 'O') {
       squareEls[idx].textContent = 'O'
        } else { 
            squareEls[idx].textContent = ''
        }    
    })
}

//-------Event Listeners---------------
