/*Le caractère du milieu : 
1renvoyer le caractère du milieu d'une chaine si elle est
impair les deux du milieu si elle est paire*/
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function caractereDuMilieu() {
  rl.question("Entrez une chaîne de caractères : ", (input) => {
    const longueur = input.length;
    let resultat;

    if (longueur % 2 === 0) {
      // paire : deux caractères du milieu
      const milieu1 = Math.floor(longueur / 2) - 1;
      const milieu2 = Math.floor(longueur / 2);
      resultat = input[milieu1] + input[milieu2];
    } else {
      // impair : un caractère du milieu
      const milieu = Math.floor(longueur / 2);
      resultat = input[milieu];
    }

    console.log("Caractère(s) du milieu :", resultat);
    rl.close();
  });
}

caractereDuMilieu();    