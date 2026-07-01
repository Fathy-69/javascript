// =====================
// 3. Fonctions du jeu
// =====================

function createCard(cardUrl) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.dataset.value = cardUrl;

  const img = document.createElement("img");
  img.classList.add("card-content");
  img.src = cardUrl;

  card.appendChild(img);

  card.addEventListener("click", onCardClick);

  return card;
}

function onCardClick(e) {

  if (lockBoard) return;

  const card = e.currentTarget;

  if (card.classList.contains("flip")) return;
  if (card.classList.contains("matched")) return;
  // Démarrage du chrono au premier clic
  if (!timerStarted) {
    startTimer();
    timerStarted = true;
  }

  card.classList.add("flip");
  selectedCards.push(card);

  if (selectedCards.length !== 2) return;

  lockBoard = true;

  setTimeout(() => {

    if (
      selectedCards[0].dataset.value ===
      selectedCards[1].dataset.value
    ) {

      selectedCards[0].classList.add("matched");
      selectedCards[1].classList.add("matched");

      matchedPairs++;

     if (matchedPairs === cards.length) {
        stopTimer();
        saveScore(seconds);
        const best = getBestScore();
        const average = getAverageScore();

            setTimeout(() => {
            alert(`🎉 Bravo ! Temps : ${document.getElementById("timer").textContent}

            🥇 Meilleur score : ${best}s

            📊 Moyenne : ${average}s`
        );
    }, 300);
}

    } else {

      selectedCards[0].classList.remove("flip");
      selectedCards[1].classList.remove("flip");

    }

    selectedCards = [];
    lockBoard = false;

  }, 1000);
}




  