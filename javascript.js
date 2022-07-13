
//Grabbing all the elements from the HTML to change
const resetD = document.querySelector('.reset');
const cellDivs = document.querySelectorAll('.grid-cell');
const statusD = document.querySelector('.status');


class game{

    start(){
        this.openingScreen('start-screen', false);
        this.openingScreen('screen', true);

    }

    openingScreen(id,toggle) {
        let element = document.getElementById(id);
        let display = (toggle) ? 'block' : 'none';
        element.style.display = display;
    }
    
}


let Init = new game();

function startGame(){
    Init.start();
}

//Beyon here are functions for events when the cells are clicked and when the reset button is pressed

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
    //We Want index 1 because we want to know if it is an x, an o, or nothing
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
  //they exist or if undefined, and then if they are equal to other combos

  if (tLeft && tLeft === tMiddle && tLeft === tRight) { 
        winner(tLeft);
        cellDivs[0].classList.add('won');
        cellDivs[1].classList.add('won');
        cellDivs[2].classList.add('won');
  } else if (mLeft && mLeft === mMiddle && mLeft === mRight) {
        winner(mLeft);
        cellDivs[3].classList.add('won');
        cellDivs[4].classList.add('won');
        cellDivs[5].classList.add('won');
  } else if (bLeft && bLeft === bMiddle && bLeft === bRight) {
        winner(bLeft);
        cellDivs[6].classList.add('won');
        cellDivs[7].classList.add('won');
        cellDivs[8].classList.add('won');
  } else if (tLeft && tLeft === mLeft && tLeft === bLeft) {
        winner(tLeft);
        cellDivs[0].classList.add('won');
        cellDivs[3].classList.add('won');
        cellDivs[6].classList.add('won');
  }else if (tRight && tRight === mRight && tRight === bRight) {
        winner(tRight);
        cellDivs[2].classList.add('won');
        cellDivs[5].classList.add('won');
        cellDivs[8].classList.add('won');
  }  else if (tRight && tRight === mMiddle && tRight === bLeft) {
        winner(tRight);
        cellDivs[2].classList.add('won');
        cellDivs[4].classList.add('won');
        cellDivs[6].classList.add('won');
    }   else if (tMiddle && tMiddle === mMiddle && tMiddle === bMiddle) {
        winner(tMiddle);
        cellDivs[1].classList.add('won');
        cellDivs[4].classList.add('won');
        cellDivs[7].classList.add('won');
    } else if (tLeft && tLeft === mMiddle && tLeft === bRight) {
        winner(tLeft);
        cellDivs[0].classList.add('won');
        cellDivs[4].classList.add('won');
        cellDivs[8].classList.add('won');
  } else if (tLeft && tMiddle && tRight && mLeft && mMiddle && mRight && bLeft && bMiddle && bRight) {
        gameStart = false;
        statusD.innerHTML = 'Game is tied!';
  } else {

        xNext = !xNext; //if xNext is true, change it to false, meaning its O's turn

        if (xNext) {
            statusD.innerHTML = 'X is next';
        } else {
            statusD.innerHTML = 'O is next';
        }

    }

}

//event handler for when reset is clicked
resetD.addEventListener('click', function(){

    xNext = true;
    statusD.innerHTML = 'X is next';
  
    for (const i of cellDivs) {
      i.classList.remove('x');
      i.classList.remove('o');
      i.classList.remove('won');
    }
    gameStart = true;

});


for (const cellD of cellDivs) {

    //event for when a cell is clicked
    cellD.addEventListener('click', function(event){

      const classList = event.target.classList;
      //Makes sure the same box isnt clicked so it doesnt add two classes 
      //Also Makes sure that boxes are clickable if the game is done.
      if (classList[1] === 'x' || classList[1] === 'o' || !gameStart) {
          return;
        }
  
      //makes sure to add a class of x or O when a box is clicked
  
      if (xNext == true) {
          classList.add('x');
          checkGame();
  
        } else {
          classList.add('o');
          checkGame();
        }
  

    })

  }