const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Entrez un nombre : ", (input) => {
  let nombre = Number(input);

  for (let i = 2; i <= nombre; i++) {
    let estPremier = true;

    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        estPremier = false;
        break;
      }
    }

    if (estPremier) {
      console.log(i);
    }
  }

  rl.close();
});


