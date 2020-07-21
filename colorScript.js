let numOfSquares = 6;

let squares = document.querySelectorAll('.square');
let colorDisplay = document.getElementById('colorDisplayed');
let messageDisplay = document.getElementById('messageDisplayed');
let header = document.getElementById('header');
let modeButtons = document.querySelectorAll('.game-mode')
let resetButton = document.getElementById('restart-btn')

let randomColors = [];
let colorChosen = '';

chooseRandomColors(numOfSquares);
assignColors();


// Guessing Logic
for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', function () {
        if (this.style.backgroundColor === colorChosen) {
            messageDisplay.textContent = 'Correct!';
            resetButton.textContent = 'Play Again?';
            assignCorrectColor();

        } else {
            messageDisplay.textContent = 'Try Again!';
            this.style.backgroundColor = '#484F56';
        }
    });
}

// Creating click events for modeButtons
for (let i = 0; i < modeButtons.length; i++) {
    if (modeButtons[i].textContent === 'Easy') {
        modeButtons[i].addEventListener('click', () => {
            for (let i = 0; i < modeButtons.length; i++) {
                modeButtons[i].classList.remove('selected');
            }
            modeButtons[i].classList.add('selected');
            numOfSquares = 3;
            reset();
        });
    } 
    else if(modeButtons[i].textContent === 'Hard') {
        modeButtons[i].addEventListener('click', () => {
            for (let i = 0; i < modeButtons.length; i++) {
                modeButtons[i].classList.remove('selected');
            }
            modeButtons[i].classList.add('selected');
            numOfSquares = 6;
            reset();
        });
    } 
    else {
        modeButtons[i].addEventListener('click', () => {
            for (let i = 0; i < modeButtons.length; i++) {
                modeButtons[i].classList.remove('selected');
            }
            modeButtons[i].classList.add('selected');
            numOfSquares = 9;
            reset();
        });
    }
}


// Reset Button
resetButton.addEventListener('click', reset);


// Creates random colors and returns array to randomColors variable
function chooseRandomColors(num) {
    randomColors = [];

    for (let i = 0; i < num; i++) {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);

        randomColors.push(`rgb(${r}, ${g}, ${b})`);
    }
    colorChosen = randomColors[Math.floor(Math.random() * numOfSquares)];
}

// Sets background color of the squares
function assignColors() {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = randomColors[i];
        if (!squares[i].style.backgroundColor) {
            squares[i].style.backgroundColor = '#484F56';
        }
        colorDisplay.textContent = colorChosen.toUpperCase();
    }
}

function assignCorrectColor() {
    for (let i = 0; i < numOfSquares; i++) {
        squares[i].style.backgroundColor = colorChosen
    }

    header.style.backgroundColor = colorChosen;
}

// Resets the game of colors
function reset() {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.background = 'none';
    }

    chooseRandomColors(numOfSquares);
    assignColors();
    messageDisplay.textContent = '';
    resetButton.textContent = 'New Colors';
    header.style.backgroundColor = '#333ee3';


}