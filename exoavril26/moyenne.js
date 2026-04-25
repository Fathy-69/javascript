/*Objectif
Demander plusieurs notes (/100)
Calculer la moyenne sur 20
Indices
utiliser une boucle while ou for
utiliser un tableau (array)
calculer la somme des notes
diviser la somme par le nombre de notes pour obtenir la moyenne */
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let notes = [];
function demanderNote() {
  rl.question("Entrez une note (/100) ou 'stop' : ", (input) => {
    const saisie = input.trim().toLowerCase();

    if (saisie === "stop") {

        let somme = 0;

      for (let note of notes) {
        somme += note;
      }

      let moyenne = notes.length > 0 ? somme / notes.length : 0;

      console.log("Notes :", notes);
      console.log("Moyenne sur 100 :", moyenne);
      console.log("Moyenne sur 20 :", moyenne / 5);
     
      rl.close();
      return;
    }

    const note = parseFloat(saisie);

    if (!isNaN(note)) {
      notes.push(note);
      console.log("Note ajoutée :", note);
    } else {
      console.log("Entrée invalide");
    }

    demanderNote(); // relance proprement
  });
}

demanderNote();
