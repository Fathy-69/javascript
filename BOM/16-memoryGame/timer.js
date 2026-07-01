// =====================
// 2. Chronomètre
// =====================

let seconds = 0;
let timer;
let timerStarted = false;

function startTimer() {
  timer = setInterval(() => {
    seconds++;

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    document.getElementById("timer").textContent =
      `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
}

function resetTimer() {
  clearInterval(timer);
  seconds = 0;
  timerStarted = false;
  document.getElementById("timer").textContent = "00:00";
}

