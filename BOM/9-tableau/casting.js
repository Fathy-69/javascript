"use strict";
//Il existe 2 types de castings en TypeScript : le casting implicite et le casting explicite.
//=============================IMPLICITE===========================
let a = 5;
let b = "10";
// Le nombre est converti automatiquement en chaîne
let c = a + b;
console.log(c); // Affiche "510"
//=============================EXPLICITE====================
//utilisant l'opérateur as
let a1 = "5";
let b1 = a; // convertit explicitement 'a' en un nombre en utilisant l'opérateur "as"
console.log(b1); // Affiche 5
//utilisant des crochets d'angle<>
let a2 = "5";
let b2 = a; // converti 'a' en un nombre en utilisant des crochets d'angle < >
console.log(b2); // Affiche 5
//====================Le casting implicite et explicite=======================
// Tableau de nombres
const nombres = [1, 2, 3, 4, 5];
// Fonction qui multiplie chaque nombre par un facteur donné
function multiplierNombres(nombres, facteur) {
    const resultat = [];
    nombres.forEach(nombre => {
        const resultatMultiplication = Number(nombre) * facteur;
        resultat.push(resultatMultiplication.toString());
    });
    return resultat;
}
// Appel de la fonction avec le tableau de nombres
const facteur = 2;
const nombresEnChaineDeCaracteres = nombres.map(nombre => nombre.toString());
const resultatsMultiplication = multiplierNombres(nombresEnChaineDeCaracteres, facteur);
const resultats = resultatsMultiplication.map(resultat => Number(resultat));
// Affichage des résultats
console.log(nombres); // [1, 2, 3, 4, 5]
console.log(resultats); // [2, 4, 6, 8, 10]
//Dans cet exemple, nous avons d'abord converti le tableau de nombres
// en un tableau de chaînes de caractères en utilisant la méthode map 
// et la méthode toString. Nous avons ensuite appelé la fonction 
// multiplierNombres avec le tableau de chaînes de caractères en utilisant
//  le casting explicite as string[].
//La fonction a renvoyé un tableau de chaînes de caractères représentant les résultats de la multiplication, que nous avons ensuite converti en un tableau de nombres en utilisant la méthode map et la méthode Number, suivie du casting implicite as number[].
//En résumé, le casting explicite et le casting implicite sont des techniques
//  utiles pour manipuler des données de différents types en TypeScript, 
// mais il est important de les utiliser avec précaution pour éviter 
// les erreurs de type.
//exercice1
// Déclaration énumération nommée Jours
var Jours;
(function (Jours) {
    Jours[Jours["Lundi"] = 1] = "Lundi";
    Jours[Jours["Mardi"] = 2] = "Mardi";
    Jours[Jours["Mercredi"] = 3] = "Mercredi";
    Jours[Jours["Jeudi"] = 4] = "Jeudi";
    Jours[Jours["Vendredi"] = 5] = "Vendredi";
    Jours[Jours["Samedi"] = 6] = "Samedi";
    Jours[Jours["Dimanche"] = 7] = "Dimanche";
})(Jours || (Jours = {}));
// Création fonction nommée obtenirJour
function obtenirJour(nombre) {
    return Jours[nombre];
}
console.log(obtenirJour(1)); // Lundi
//exercice2
function benef(prixVt, cFab) {
    let benef = prixVt - cFab;
    if (benef > 0) {
        console.log(`Le bénéfice est de : ${benef} €`);
    }
    else if (benef < 0) {
        console.log(`Les pertes sont de : ${benef} €`);
    }
    else {
        console.log(`Pas de bénéfice : ${benef} €`);
    }
}
benef(167, 167); // affiche "Pas de bénéfice : 0 €"
