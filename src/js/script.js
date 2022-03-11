let pcScore = 0;
let playerScore = 0;
let draws = 0;

let scoreBoard = document.getElementById("scoreBoard");
let weaponsObj = {
  Pedra: {
    Pedra: "draw",
    Papel: "lose",
    Tesoura: "win",
  },
  Tesoura: {
    Pedra: "lose",
    Papel: "win",
    Tesoura: "draw",
  },
  Papel: {
    Pedra: "win",
    Papel: "draw",
    Tesoura: "lose",
  },
};

function checkValues(value) {
  const choices = ["Pedra", "Papel", "Tesoura"];
  const num = Math.floor(Math.random() * 3);

  let pcChoice = choices[num];

  switch (weaponsObj[value][pcChoice]) {
    case "win":
      scoreBoard.style.cssText = "color: green";
      scoreBoard.innerHTML = "Você ganhou!";
      playerScore++;
      break;
    case "lose":
      scoreBoard.style.cssText = "color: red";
      scoreBoard.innerHTML = "Você perdeu!";
      pcScore++;
      break;
    default:
      scoreBoard.style.cssText = "color: gray";
      scoreBoard.innerHTML = "Empate!";
      draws++;
      break;
  }

  document.getElementById("displayPlayer").innerHTML = value;
  document.getElementById("displayPC").innerHTML = pcChoice;
  document.getElementById("pcScore").innerHTML = pcScore;
  document.getElementById("playerScore").innerHTML = playerScore;
  document.getElementById("drawScore").innerHTML = draws;
}
