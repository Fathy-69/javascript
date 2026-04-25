const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Entrez un nombre : ", (input) => {
  let n = Number(input);

  let plusPetit = null;
 // 1. trouver le plus petit diviseur
  for (let i = 2; i <= n; i++) {
    if (n % i === 0) {
      plusPetit = i;
      break;
    }
  }

  // 2. calculer le plus grand diviseur
  if (plusPetit !== null) {
    let plusGrand = n / plusPetit;

    console.log("Plus petit diviseur :", plusPetit);
    console.log("Plus grand diviseur :", plusGrand);
  } else {
    console.log("Aucun diviseur trouvé (nombre invalide)");
  }

rl.close();
});


