/*Le cryptage : * à partir d'une table de
cryptage de voyelle (un tableau qui représente les correspondance que vous voulez) * crypter
toute les voyelles d'une chaine rentré via le prompt. Renvoyer la même chaine via alert en
crypté 
Objectif:remplacer les voyelles d’un mot
Exemple : a → 1    e → 2    i → 3    o → 4    u → 5
Indices:
Utilise un tableau ou un objet
Parcours la chaîne de caractères
Remplace les voyelles par les correspondances
Affiche le résultat*/
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const cryptage = {
  a: "1",
  e: "2",
  i: "3",
  o: "4",
  u: "5"
};

function crypterChaine() {
  rl.question("Entrez une chaîne à crypter : ", (input) => {
    let resultat = "";

    for (let char of input) {
      if (cryptage[char.toLowerCase()]) {
        resultat += cryptage[char.toLowerCase()];
      } else {
        resultat += char;
      }
    }

    console.log("Chaîne cryptée :", resultat);
    rl.close();
  });
}

crypterChaine();        