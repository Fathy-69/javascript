const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let invites = ["Ali", "Jean", "Christiane", "Yassine"];

rl.question("Entrez un nom : ", (input) => {
  const nom = input.trim(); // enlève les espaces

  if (invites.includes(nom)) {
    console.log(`${nom} est invité à la fête.`);
  } else {
    console.log(`${nom} n'est pas invité à la fête.`);
  }
  invites.shift(); // supprime le premier élément du tableau
  console.log("Liste des invités après suppression du premier élément :", invites);     
  console.table(invites); // affiche le tableau sous forme de table
  invites.push("Sophie"); // ajoute un nouvel invité à la fin du tableau
  invites.unshift("Marc"); // ajoute un nouvel invité au début du tableau
  console.log("Liste des invités après ajout de Marc et Sophie :", invites);
  console.table(invites); // affiche le tableau mis à jour sous forme de table
  troisiemeInvite = invites[2]; // accède au troisième invité du tableau
  console.log("Le troisième invité est :", troisiemeInvite);
  console.log(invites.indexOf("Yassine")); // affiche l'index de Yassine dans le tableau
    rl.close();
});
