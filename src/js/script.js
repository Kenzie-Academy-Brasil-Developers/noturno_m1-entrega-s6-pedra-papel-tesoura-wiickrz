const choiceObj = new Map();
choiceObj.set(0, "Pedra");
choiceObj.set(1, "Papel");
choiceObj.set(2, "Tesoura");
const displayResult = document.querySelector("#result");
const displayPlayerChoice = document.querySelector("#playerChoice");
const displayComputerChoice = document.querySelector("#computerChoice");
const drawScore = document.querySelector("#drawScore");
const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");

let drawPoints = 0;
let playerPoints = 0;
let computerPoints = 0;

drawScore.innerHTML = drawPoints;

let result = "Aguardando jogada";
displayResult.innerHTML = result;

let playerChoiceValue = "";
displayPlayerChoice.innerHTML = playerChoiceValue;

let computerChoiceValue = "";
displayComputerChoice.innerHTML = computerChoiceValue;


const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(0);
    max = Math.floor(choiceObj.size);
    const output = Math.floor(Math.random() * (max - min));
    let computerChoiceValue = choiceObj.get(output);
    displayComputerChoice.innerHTML = computerChoiceValue;
    
    const playerChoice = document.querySelector("li");
    playerChoice.onclick = (e) => {
        let playerChoiceValue = e.target.innerText;
        displayPlayerChoice.innerHTML = playerChoiceValue;
        
        if (playerChoiceValue === computerChoiceValue) {
            result = "Empate!";
            drawPoints ++;
            displayResult.innerHTML = result;
            drawScore.innerHTML = drawPoints;
        }
    };
    return result;
};

const btnPedra = document.getElementById("btnPedra");
btnPedra.addEventListener("click", getRandomIntInclusive);

const btnPapel = document.getElementById("btnPapel");
btnPapel.addEventListener("click", getRandomIntInclusive);

const btnTesoura = document.getElementById("btnTesoura");
btnTesoura.addEventListener("click", getRandomIntInclusive);

const btnReset = document.getElementById("btnReset");
btnTesoura.addEventListener("click", resetScore);
