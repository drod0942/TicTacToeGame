class game{

    start(){
        this.toggleScreen('start-screen', false);
        this.toggleScreen('screen', true);

    }

    toggleScreen(id,toggle) {
        let element = document.getElementById(id);
        let display = (toggle) ? 'block' : 'none';
        element.style.display = display;
    }
}


let Init = new game();

function startGame(){
    Init.start();
}

//Grabbing all the elements from the HTML to change
const statusD = document.querySelector('.status');
const resetD = document.querySelector('.reset');
const cellDivs = document.querySelectorAll('.grid-cell');
let gameStart = true;
let xNext = true;


//Functions to Update the Game And Check for Winner
function winner(letter){

    gameStart = false;
    if (letter === 'x') {
      statusD.innerHTML = `X has won!`;
    } else {
      statusD.innerHTML = `O has won!`;
    }

  }


function checkGame(){
    //We Want index 2 because we want to know if it is an x, an o, or nothing
    const tLeft = cellDivs[0].classList[1];
    const tMiddle = cellDivs[1].classList[1];
    const tRight = cellDivs[2].classList[1];
    const mLeft = cellDivs[3].classList[1];
    const mMiddle = cellDivs[4].classList[1];
    const mRight = cellDivs[5].classList[1];
    const bLeft = cellDivs[6].classList[1];
    const bMiddle = cellDivs[7].classList[1];
    const bRight = cellDivs[8].classList[1];


  // check every way they can win, first we check if 
  //they exist and then if they are equal to other combos

  if (tLeft && tLeft === tMiddle && tLeft === tRight) { 
        winner(tLeft);
  } else if (mLeft && mLeft === mMiddle && mLeft === mRight) {
        winner(mLeft);
  } else if (bLeft && bLeft === bMiddle && bLeft === bRight) {
        winner(bLeft);
  } else if (tLeft && tLeft === mLeft && tLeft === bLeft) {
        winner(tLeft);
  } else if (tMiddle && tMiddle === mMiddle && tMiddle === bMiddle) {
        winner(tMiddle);
  } else if (tRight && tRight === mRight && tRight === bRight) {
        winner(tRight);
  } else if (tLeft && tLeft === mMiddle && tLeft === bRight) {
        winner(tLeft);
  } else if (tRight && tRight === mMiddle && tRight === bLeft) {
        winner(tRight);
  } else if (tLeft && tMiddle && tRight && mLeft && mMiddle && mRight && bLeft && bMiddle && bRight) {
        gameStart = false;
        statusD.innerHTML = 'Game is tied!';
  } else {

        xNext = !xNext;

        if (xNext) {
            statusD.innerHTML = 'X is next';
        } else {
            statusD.innerHTML = 'O is next';
        }

    }

}


//event for when reset is clicked
function handleR(){

    xNext = true;
    statusD.innerHTML = 'X is next';

    for (const cells of cellDivs) {
      cells.classList.remove('x');
      cells.classList.remove('o');
      cells.classList.remove('won');
    }
    gameStart = true;

}


//event for when a cell is clicked

function handleClick(evnt){
    
    const classList = evnt.target.classList;

    //Makes sure the same box isnt clicked so it doesnt add two classes
    if (!gameStart || classList[1] === 'x' || classList[1] === 'o') {
        return;
      }

    //makes sure to add a class of x or O when a box is clicked

    if (xNext) {
        classList.add('x');
        checkGame();

      } else {
        classList.add('o');
        checkGame();
      }

  };
  

resetD.addEventListener('click', handleR);


for (const cellD of cellDivs) {
    cellD.addEventListener('click', handleClick)
  }