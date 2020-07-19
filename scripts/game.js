const newColorsButton = document.querySelector("#new-colors-btn");
const easyButton = document.querySelector("#easy-btn");
const hardButton = document.querySelector("#hard-btn");
const rgbValue = document.querySelector(".rgb-value");
const squareContainer = document.querySelector(".square-container");
const gameStatus = document.querySelector("#game-status");
const jumbotron = document.querySelector(".jumbotron");

newColorsButton.addEventListener("click", generateNewColors);
easyButton.addEventListener("click", easyMode);
hardButton.addEventListener("click", hardMode);
squareContainer.addEventListener("click", checkAnswer);


function generateNewColors() {
    const squares = document.querySelectorAll(".square");
    
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = `rgb(${String(getRandomRGBNumber())}, ${String(getRandomRGBNumber())}, ${String(getRandomRGBNumber())})`
    }
    gameStatus.textContent = "choose color!"
    jumbotron.style.backgroundColor = "rgb(70, 110, 185)";
    chooseRGBValue();
}

function easyMode() {
    squareContainer.querySelectorAll('*').forEach(n => n.remove());

    hardButton.style.backgroundColor = "rgb(255, 255, 255, 0)";
    easyButton.style.backgroundColor = "rgb(240, 133, 133)";
    jumbotron.style.backgroundColor = "rgb(70, 110, 185)";
    
    for(let i = 0; i < 3; i++) {
        let square = document.createElement("div");
        square.className = "square";
        squareContainer.appendChild(square);
    }
    generateNewColors();
    chooseRGBValue();
}

function hardMode() {
    squareContainer.querySelectorAll('*').forEach(n => n.remove());

    easyButton.style.backgroundColor = "rgb(255, 255, 255, 0)";
    hardButton.style.backgroundColor = "rgb(240, 133, 133)";
    jumbotron.style.backgroundColor = "rgb(70, 110, 185)";
    
    for(let i = 0; i < 6; i++) {
        let square = document.createElement("div");
        square.className = "square";
        squareContainer.appendChild(square);
    }
    generateNewColors();
    chooseRGBValue();
}

function checkAnswer(event) {
    let answer = event.target.style.backgroundColor;

    if(answer == rgbValue.textContent) {
        gameStatus.textContent = "correct!";
        jumbotron.style.background = answer;
    } else {
        event.target.style.background = "#232323";
        gameStatus.textContent = "try again";
    }
}

function getRandomRGBNumber() {
    let min = Math.ceil(0);
    let max = Math.floor(255);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function chooseRGBValue() {
    const squares = document.querySelectorAll(".square");
    
    let rgbAnswer = squares[getRandomNumber(0, squares.length - 1)].style.backgroundColor;
    rgbValue.textContent = rgbAnswer;
    
}

hardMode();