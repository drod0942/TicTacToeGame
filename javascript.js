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
let xIsNext = true;


//event for when a cell is clicked
const handleClick = (e) => {
    const classList = e.target.classList;
    
    //Makes sure the same box isnt clicked so it doesnt add two classes
    if (!gameStart || classList[1] === 'x' || classList[1] === 'o') {
        return;
      }

    //makes sure to add a class of x or O when a box is clicked

    if (xIsNext) {
        classList.add('x');
      } else {
        classList.add('o');
      }

  };
  

resetD.addEventListener('click', handleR);


for (const cellD of cellDivs) {
    cellD.addEventListener('click', handleClick)
  }