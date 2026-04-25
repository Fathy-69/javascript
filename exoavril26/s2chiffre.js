/*Le retour de la somme : * faite une fonction qui retourne sous forme de
string la somme de tous les nombres fournit via une unique chaine de caractère 
 exemple :
'526382' => '26' => '8' 
je peux travailler directement avec la chaine 
je peux travailler à l'aide des tableaux 
Indices
Parcours la chaîne
Convertis chaque caractère en nombre*/ 
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function sommeChaine() {
  rl.question("Entrez une chaîne de chiffres : ", (input) => {
    let somme = 0;

    for (let char of input) {
      const chiffre = parseInt(char);
      if (!isNaN(chiffre)) {
        somme += chiffre;
      }
    }

     // réduire jusqu’à un seul chiffre
    while (somme >= 10) {
      let temp = 0;

      for (let digit of String(somme)) {
        temp += parseInt(digit);
      }

      somme = temp;
    }
    console.log("La somme des chiffres est :", somme);
    rl.close();
  });
}

sommeChaine();  