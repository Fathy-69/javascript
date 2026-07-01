/* exported duplicateArray, shuffleArray */

function duplicateArray(array) {
    return [...array, ...array];
}

function shuffleArray(array) {
    return [...array].sort(() => Math.random() - 0.5);
}

