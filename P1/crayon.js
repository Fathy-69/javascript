/*1.1Déclarez une liste appelée « crayons » et ajoutez 3 couleurs de votre choix. Quel est le type de cette variable ?*/
let crayons = ["rouge", "bleu", "vert"];
console.log(crayons); // Affiche la liste des crayons
console.log(typeof crayons); // Affiche le type de la variable (object, car les tableaux sont des objets en JavaScript)
/*1.2. Écrivez une boucle « for » qui parcourt la liste de crayons et affiche chaque couleur.*/

for (const element of crayons) {
    console.log(element); // Affiche chaque couleur de la liste
}
 /* 1.3. Écrivez une instruction if-else qui affiche « Crayon rare » si la couleur est « bleu », « Crayon commun » si la couleur est « rouge » et « Crayon extra » autrement.*/

crayons.forEach((crayon) => {
    if (crayon === "bleu") {
        console.log("Crayon rare");
    } else if (crayon === "rouge") {
        console.log("Crayon commun");
    } else {
        console.log("Crayon extra");
    }
});
/*2.1. Écrivez une fonction appelée « ajouterCouleur » qui prend une liste et une couleur en arguments et ajoute la couleur à la liste.*/
function ajouterCouleur(liste, couleur) {
    liste.push(couleur); // Ajoute la couleur à la liste
}
ajouterCouleur(crayons, "jaune"); // Ajoute "jaune" à la liste des crayons
console.log(crayons); // Affiche la liste mise à jour des crayons
/*2.2. Écrivez une fonction appelée « supprimerCouleur » qui prend une liste et une couleur en arguments et supprime la couleur de la liste.*/
function supprimerCouleur(liste, couleur) {
    const index = liste.indexOf(couleur); // Trouve l'index de la couleur dans la liste
    if (index !== -1) {
        liste.splice(index, 1); // Supprime la couleur de la liste si elle existe
    }
}
supprimerCouleur(crayons, "vert"); // Supprime "vert" de la liste des crayons
console.log(crayons); // Affiche la liste mise à jour des crayons
/*2.3. Écrivez une fonction appelée « rechercherCouleur » qui prend une liste et une couleur en arguments. Elle renvoie « True » si la couleur est dans la liste et « False » sinon. Utilisez une boucle pour parcourir la liste.*/
function rechercherCouleur(liste, couleur) {
    for (const element of liste) {
        if (element === couleur) {
            return true; // Renvoie true si la couleur est trouvée dans la liste
        }
    }
    return false; // Renvoie false si la couleur n'est pas trouvée dans la liste
}
console.log(rechercherCouleur(crayons, "bleu")); // Affiche true, car "bleu" est dans la liste
console.log(rechercherCouleur(crayons, "vert")); // Affiche false, car "vert" a été supprimé de la liste        
