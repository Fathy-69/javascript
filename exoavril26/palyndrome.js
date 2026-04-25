/* exo 4 : le palyndrome : * faire une fonction qui nous indique si le mot
est un palyndrome ou non, exemple : kayak est un palyndrome
 1- Créer la fonction. 
2-Faire un "retournement" des lettres. 
3- Savoir si le retournement est égale a la valeur initiale. */
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function estPalyndrome(mot) {
  const motNettoye = mot.replace(/[^a-zA-Z]/g, "").toLowerCase();
  const motRetourne = motNettoye.split("").reverse().join("");
  return motNettoye === motRetourne;
}

rl.question("Entrez un mot pour vérifier s'il est un palyndrome : ", (input) => {
  if (estPalyndrome(input)) {
    console.log(`"${input}" est un palyndrome.`);
  } else {
    console.log(`"${input}" n'est pas un palyndrome.`);
  }
  rl.close();
}); 


