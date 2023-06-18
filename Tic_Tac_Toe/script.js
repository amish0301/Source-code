console.log("Welcome to Tic Tac Toe Game");

// audio files
const music = new Audio("#");
const turnTone = new Audio("click.mp3");
const winnerTone = new Audio("win.wav");
const resetTone = new Audio("resetClick.mp3")

// variables :
let turn = "X";

// functions:
const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};

const checkWin = () => {
  let boxtexts = document.getElementsByClassName("boxText");

  // wining possibility indexes and strike line co-ordinate + angle
  let wins = [
    [0, 1, 2, 5, 5, 0],
    [3, 4, 5, 5, 15, 0],
    [6, 7, 8, 5, 25, 0],
    [0, 3, 6, -5, 15, 90],
    [1, 4, 7, 5, 15, 90],
    [2, 5, 8, 15, 15, 90],
    [0, 4, 8, 5, 15, 45],
    [2, 4, 6, 5, 15, 135],
  ];

  wins.forEach((e) => {
    if (
      boxtexts[e[0]].innerHTML !== "" &&
      boxtexts[e[0]].innerHTML === boxtexts[e[1]].innerHTML &&
      boxtexts[e[1]].innerHTML === boxtexts[e[2]].innerHTML
    ) {
      winnerTone.play();

      document.getElementsByClassName("winBox")[0].innerHTML =
        boxtexts[e[0]].innerHTML + " Won!!";
      document
        .querySelector(".imgBox")
        .getElementsByTagName("img")[0].style.width = "200px";

      // strike logic
      document.querySelector(".strike").style.width = "20vw";
      document.querySelector(
        ".strike"
      ).style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
    }
  });
};

// Main Logic
let boxes = document.getElementsByClassName("gameBox");
Array.from(boxes).forEach((ele) => {
  let boxtext = ele.querySelector(".boxText");
  ele.addEventListener("click", () => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      turn = changeTurn();
      turnTone.play();
      checkWin();

      document.getElementsByClassName(
        "info"
      )[0].innerText = `Turn for : ${turn}`;
    }
  });
});


// RESET Button Logic :
reset.addEventListener("click", () => {

  resetTone.play(); 
  let boxtexts = document.getElementsByClassName("boxText");
  Array.from(boxtexts).forEach((e) => {
    e.innerHTML = "";
  });

  turn = "X";

  // remove result of prev. player
  document.querySelector(".winBox").innerHTML = "";
  document.getElementsByClassName("info")[0].innerText = `Turn for : ${turn}`;

  // remove GIF
  document.querySelector(".imgBox").getElementsByTagName("img")[0].style.width =
    "0px";

  // remove strike
  document.querySelector(".strike").style.width = "0px";
});
