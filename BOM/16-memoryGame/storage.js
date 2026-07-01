// storage.js

const STORAGE_KEY = "memoryScores";


function saveScore(score) {

    const scores = getScores();

    scores.push(score);

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(scores)
    );
}


function getScores() {

    return JSON.parse(
        localStorage.getItem(STORAGE_KEY)
    ) || [];

}


function getBestScore() {

    const scores = getScores();

    if (scores.length === 0) {
        return null;
    }

    return Math.min(...scores);
}


function getAverageScore() {

    const scores = getScores();

    if (scores.length === 0) {
        return null;
    }

    const total = scores.reduce(
        (sum, score) => sum + score,
        0
    );

    return Math.round(total / scores.length);
}