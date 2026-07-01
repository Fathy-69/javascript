// =====================
//4. Initialisation
// =====================

function initGame() {

  gameBoard.innerHTML = "";

  let allCards = duplicateArray(cards);
  allCards = shuffleArray(allCards);

  allCards.forEach((card) => {
    gameBoard.appendChild(createCard(card));
  });
}

// =====================
// 5. Nouvelle partie
// =====================

function resetGame() {

  selectedCards = [];
  matchedPairs = 0;
  lockBoard = false;

  resetTimer();

  initGame();
}