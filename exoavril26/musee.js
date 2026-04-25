/* Nous sommes un musée, nous avons un robot qui doit demander l'age des visiteurs * afin
de leur donner le prix de leurs billets. * * Prix adulte: 12 € => age adulte > 12 ans. * Prix enfant:
6 € => age enfant est entre 12 ans (compris) et 5 ans (compris) => 12 >= age >= 5 * Prix
bambin: gratuit => age < 5 ans  */   

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Quel est votre âge ? ", (input) => {
  let age = parseInt(input);

  if (age > 12) {
    console.log("Prix : 12 €");
  } else if (age >= 5) {
    console.log("Prix : 6 €");
  } else {
    console.log("Gratuit");
  }

  rl.close();
});