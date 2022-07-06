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