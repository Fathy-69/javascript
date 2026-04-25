/**
* Résumé de la demande :
* - entrés user via prompt => notes sur 100
* - Stocker les entrées de manière temporaire => Tableau []
* - controle de répétition de saisi
* - sortie moyenne des notes sur 20
*/

/**
* demander plusieurs fois des notes à l'user => je dois répéter la demande => je dois donc faire une boucle
* et enregistrer plusieurs notes => stocker plusieurs valeurs => Array
*/
let notes = [];
let continuer = true;

while (continuer) {
  let input = prompt("Entrez une note sur 100 (ou tapez 'stop' pour terminer) :");
  
  if (input.toLowerCase() === "stop") {
    continuer = false;
  } else {
    let note = parseFloat(input);
    
    if (!isNaN(note) && note >= 0 && note <= 100) {
      notes.push(note);
    } else {
      console.log("Veuillez entrer une note valide entre 0 et 100.");
    }
  }
}

if (notes.length > 0) {
  let somme = notes.reduce((acc, val) => acc + val, 0);
  let moyenneSur20 = (somme / notes.length) * 20 / 100;
  console.log(`La moyenne des notes sur 20 est : ${moyenneSur20.toFixed(2)}`);
} else {
  console.log("Aucune note n'a été saisie.");
}       