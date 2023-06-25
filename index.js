let random = Math.trunc(Math.random() * 20) + 1;
const startBtn = document.querySelector(".entry--btn");
let entry = document.querySelector(".entry");
const mainGame = document.querySelector(".main--game");
const againBtn = document.querySelector(".again");
const guessBtn = document.querySelector(".guess--btn");
let replay = document.querySelector(".replay--container");

let input = Number(document.querySelector(".input").value);
let missingNum = document.querySelector(".missing--num");
let start = document.querySelector(".start");
let scoreBoard = document.querySelector(".score");
let yes = document.querySelector(".yes");
let no = document.querySelector(".no");
let score = 20;

const highest = document.querySelector(".highest");
// implementing the lets start section
startBtn.addEventListener("click", function () {
  score = 20;
  scoreBoard.textContent = score;

  replay.style.display = "none";
  mainGame.style.opacity = "1";
  input = Number((document.querySelector(".input").value = ""));
  entry.style.display = "none";
  mainGame.style.display = "block";
  start.textContent = " guess a number?";
  missingNum = document.querySelector(".missing--num").textContent = "?";
  missingNum.style.width = "7.8rem";

  highest.textContent = 0;

  // missingNum = document.querySelector(".missing--num").textContent = "?";
  // missingNum.style.width = "7.8rem";
  // input = Number((document.querySelector(".input").value = ""));
});

// implementing the playing section
guessBtn.addEventListener("click", function () {
  missingNum = document.querySelector(".missing--num");
  input = Number(document.querySelector(".input").value);
  scoreBoard = document.querySelector(".score");

  if (!input) {
    start.textContent = "try guessing !!";
    start.style.color = "red";
  } else if (input === random) {
    mainGame.style.backgroundColor = "green";
    start.textContent = " that's correct !!";
    highest.textContent = score;
    missingNum.textContent = random;
    missingNum.style.width = "20rem";
  } else if (input > random) {
    if (score > 1) {
      start.textContent = " too high !!";
      start.style.color = "white";
      score--;
      scoreBoard.textContent = score;
      console.log("click");
    } else {
      mainGame.style.opacity = "0.5";
      start.textContent = " you lost !!";
      score = 0;
      scoreBoard.textContent = score;
      replay.style.display = "block";
    }
  } else if (input < random) {
    if (score > 1) {
      start.textContent = " too low !!";
      start.style.color = "white";
      score--;
      scoreBoard.textContent = score;
      console.log("click");
    } else {
      mainGame.style.opacity = "0.5";
      start.textContent = " you lost !!";
      score = 0;
      scoreBoard.textContent = score;
      replay.style.display = "block";
    }
  }
});

// implementing the again button
againBtn.addEventListener("click", function () {
  score = 20;
  random = Math.trunc(Math.random() * 20) + 1;
  start.textContent = " Start Guessing !!";
  missingNum.style.width = "7.8rem";
  missingNum = document.querySelector(".missing--num").textContent = "?";
  input = Number((document.querySelector(".input").value = ""));
  scoreBoard.textContent = score;
  mainGame.style.backgroundColor = "black";
  replay.style.display = "none";
});
yes.addEventListener("click", function () {
  mainGame.style.opacity = "1";
  score = 20;
  random = Math.trunc(Math.random() * 20) + 1;
  missingNum.textContent = "?";
  scoreBoard.textContent = score;
  input = Number((document.querySelector(".input").value = ""));
  highest.textContent = 0;
  mainGame.style.backgroundColor = "black";
  replay.style.display = "none";
});
no.addEventListener("click", function () {
  entry.style.display = "block";
});
