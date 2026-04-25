/* déclaration d'une liste */
let maListe = [1, 2, 3, 4, 5];
let maListe2 = ["Alice", "Bob", "Charlie"];
console.log("Ma liste :", maListe);
console.log("Ma liste 2 :", maListe2);

/* accès à un élément de la liste */
console.log("Premier élément :", maListe[0]); // 1
console.log("Troisième élément :", maListe[2]); // 3
console.log("Dernier élément :", maListe[maListe.length - 1]); // 5

/* modification d'un élément de la liste */
maListe[1] = 42; // change le 2 en 42
console.log("Liste modifiée :", maListe);

/* ajout d'un élément à la fin de la liste */
maListe.push(6);
console.log("Liste après ajout :", maListe);

/* suppression du dernier élément de la liste */
maListe.pop();
console.log("Liste après suppression :", maListe);

/* longueur de la liste */
console.log("Longueur de la liste :", maListe.length);

/* itération sur les éléments de la liste */
console.log("Itération sur la liste :");
for (let i = 0; i < maListe.length; i++) {
  console.log(maListe[i]);
}

/* itération avec for...of */
console.log("Itération avec for...of :");
for (let element of maListe) {
  console.log(element);
}

/* vérification de la présence d'un élément */
console.log("La liste contient-elle 42 ?", maListe.includes(42)); // true
console.log("La liste contient-elle 10 ?", maListe.includes(10)); // false

/* concaténation de listes */
let listeConcatenee = maListe.concat(maListe2);
console.log("Liste concaténée :", listeConcatenee);

/* tri d'une liste */
maListe.sort((a, b) => a - b); // tri numérique
console.log("Liste triée :", maListe);

/* inverser une liste */
maListe.reverse();
console.log("Liste inversée :", maListe);

/* trouver l'index d'un élément */
console.log("Index de 42 :", maListe.indexOf(42)); // 0
console.log("Index de 10 :", maListe.indexOf(10)); // -1 (non trouvé)

/* compter le nombre d'occurrences d'un élément */
console.log("Nombre d'occurrences de 42 :", maListe.filter(x => x === 42).length); // 1
console.log("Nombre d'occurrences de 10 :", maListe.filter(x => x === 10).length); // 0

/* vider une liste */
maListe.length = 0;
console.log("Liste vidée :", maListe);  