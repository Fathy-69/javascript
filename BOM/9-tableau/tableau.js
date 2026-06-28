"use strict";
//===================== Tableaux et matrices =====================
// Tableaux
let monTableau1 = [1, 2, 3, 4, 5];
let monTableau2 = ["a", "b", "c"];
let monTableau3 = [1, "a", 3, 4, 5];
// Matrices
let maMatrice1 = [
    [1, 2],
    [3, 4]
];
let maMatrice2 = [
    ["a", "b"],
    ["c", "d"]
];
let maMatrice3 = [
    [1, "a"],
    [3, 4]
];
// Accès aux éléments des tableaux et matrices
console.log(monTableau1[0]);
console.log(monTableau2[1]);
console.log(monTableau3[2]);
console.log(maMatrice1[0][1]);
console.log(maMatrice2[1][0]);
console.log(maMatrice3[0][1]);
//===================== Tableaux génériques =====================
let monTableau4 = [1, 2, 3, 4, 5];
let monTableau5 = ["a", "b", "c"];
let monTableau6 = [1, "a", 3, 4, 5];
console.log(monTableau4[0]);
console.log(monTableau5[1]);
console.log(monTableau6[2]);
//===================== Tuples =====================
// Déclaration et initialisation
let monTuple1 = ["Hello", 2026];
let monTuple2 = [2026, "Bonjour", true];
// Tuple vs tableau générique
let monTuple = [2026, true, 21, "word"];
let monTableau = [
    2026,
    true,
    21,
    "word"
]; // Le symbole | signifie "ou" (type union).
// Accès aux éléments des tuples
let string1 = monTuple1[0];
let number1 = monTuple1[1];
console.log(monTuple1[0]);
console.log(monTuple1[1]);
console.log(monTuple2[0]);
console.log(monTuple2[1]);
// Tableau de tuples
let tableauTuple = [
    ["Alex", 20],
    ["Fred", 35],
    ["John", 26],
    ["Ali", 32]
];
//===================== Enum =====================
// Déclaration d'une énumération
var Couleur;
(function (Couleur) {
    Couleur[Couleur["Rouge"] = 0] = "Rouge";
    Couleur[Couleur["Orange"] = 1] = "Orange";
    Couleur[Couleur["Jaune"] = 2] = "Jaune";
    Couleur[Couleur["Vert"] = 3] = "Vert";
    Couleur[Couleur["Bleu"] = 4] = "Bleu";
    Couleur[Couleur["Indigo"] = 5] = "Indigo";
    Couleur[Couleur["Violet"] = 6] = "Violet";
})(Couleur || (Couleur = {}));
var JourSemaine;
(function (JourSemaine) {
    JourSemaine[JourSemaine["Lundi"] = 1] = "Lundi";
    JourSemaine[JourSemaine["Mardi"] = 2] = "Mardi";
    JourSemaine[JourSemaine["Mercredi"] = 3] = "Mercredi";
    JourSemaine[JourSemaine["Jeudi"] = 4] = "Jeudi";
    JourSemaine[JourSemaine["Vendredi"] = 5] = "Vendredi";
    JourSemaine[JourSemaine["Samedi"] = 6] = "Samedi";
    JourSemaine[JourSemaine["Dimanche"] = 7] = "Dimanche";
})(JourSemaine || (JourSemaine = {}));
var JourSemaine2;
(function (JourSemaine2) {
    JourSemaine2["Jour1"] = "Lundi";
    JourSemaine2["Jour2"] = "Mardi";
    JourSemaine2["Jour3"] = "Mercredi";
    JourSemaine2["Jour4"] = "Jeudi";
    JourSemaine2["Jour5"] = "Vendredi";
    JourSemaine2["Jour6"] = "Samedi";
    JourSemaine2["Jour7"] = "Dimanche";
})(JourSemaine2 || (JourSemaine2 = {}));
// Accès par le nom
console.log(Couleur.Rouge); // 0
console.log(Couleur.Vert); // 3
console.log(Couleur.Indigo); // 5
console.log(Couleur.Violet); // 6
console.log(JourSemaine.Lundi); // 1
console.log(JourSemaine.Mardi); // 2
console.log(JourSemaine.Jeudi); // 4
console.log(JourSemaine.Dimanche); // 7
console.log(JourSemaine2.Jour1); // Lundi
console.log(JourSemaine2.Jour2); // Mardi
console.log(JourSemaine2.Jour5); // Vendredi
console.log(JourSemaine2.Jour7); // Dimanche
// Accès par la valeur numérique
console.log(Couleur[0]); // Rouge
console.log(Couleur[4]); // Bleu
console.log(Couleur.Orange); // 1
console.log(JourSemaine.Lundi); // 1
console.log(JourSemaine2.Jour4); // Jeudi
console.log(JourSemaine2.Jour7); // Dimanche
