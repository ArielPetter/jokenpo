const result = document.querySelector(".winner");
const myScore = document.getElementById("human-score");
const botScore = document.getElementById("bot-score");

let humanScore = 0;
let machineScore = 0;

const playHuman = (humanChoice) => {
  playTheGame(humanChoice, playMachine());
};

const playMachine = () => {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
};

const playTheGame = (human, machine) => {
  console.log("Humano: " + human, "Bot: " + machine);

  if (human === machine) {
    result.innerHTML = "Deu empate &#129393;";
  } else if (
    (human === "paper" && machine === "rock") ||
    (human === "rock" && machine === "scissors") ||
    (human === "scissors" && machine === "paper")
  ) {
    humanScore += 1;
    myScore.innerHTML = humanScore;
    result.innerHTML = "Você ganhou &#129395;";
  } else {
    machineScore += 1;
    botScore.innerHTML = machineScore;
    result.innerHTML = "Você perdeu &#128546;";
  }
};
