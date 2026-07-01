// =====================
// 1. Déclaration des variables globales
// =====================
const cards = [
  "https://picsum.photos/id/237/100/100",
  "https://picsum.photos/id/238/100/100",
  "https://picsum.photos/id/239/100/100",
  "https://picsum.photos/id/240/100/100",
  "https://picsum.photos/id/241/100/100",
  "https://picsum.photos/id/242/100/100",
  "https://picsum.photos/id/243/100/100",
  "https://picsum.photos/id/244/100/100",
];

const gameBoard = document.getElementById("game-board");
const restartBtn = document.getElementById("restart-btn");

let selectedCards = [];
let matchedPairs = 0;
let lockBoard = false;


  
resetGame();

restartBtn.addEventListener("click", resetGame);

