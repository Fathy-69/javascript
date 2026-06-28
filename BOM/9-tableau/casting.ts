//Il existe 2 types de castings en TypeScript : le casting implicite et le casting explicite.

//=============================IMPLICITE===========================
let a: number = 5;
let b: string = "10";

// Le nombre est converti automatiquement en chaîne
let c: string = a + b;

console.log(c); // Affiche "510"

//=============================EXPLICITE====================
//utilisant l'opérateur as
 let a1: any = "5";
let b1: number = a as number; // convertit explicitement 'a' en un nombre en utilisant l'opérateur "as"
console.log(b1); // Affiche 5
//utilisant des crochets d'angle<>
let a2: any = "5";
let b2: number = <number>a; // converti 'a' en un nombre en utilisant des crochets d'angle < >
console.log(b2); // Affiche 5

//====================Le casting implicite et explicite=======================

// Tableau de nombres
const nombres = [1, 2, 3, 4, 5];
// Fonction qui multiplie chaque nombre par un facteur donné
function multiplierNombres(nombres: string[], facteur: number): string[] {
  const resultat: string[] = [];
  nombres.forEach(nombre => {
    const resultatMultiplication = Number(nombre) * facteur;
    resultat.push(resultatMultiplication.toString());
  });
  return resultat;
}
// Appel de la fonction avec le tableau de nombres
const facteur = 2;
const nombresEnChaineDeCaracteres = nombres.map(nombre => nombre.toString());
const resultatsMultiplication = multiplierNombres(nombresEnChaineDeCaracteres as string[], facteur);
const resultats = resultatsMultiplication.map(resultat => Number(resultat)) as number[];
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
enum Jours {
Lundi = 1,
Mardi,
Mercredi,
Jeudi,
Vendredi,
Samedi,
Dimanche
}
// Création fonction nommée obtenirJour
function obtenirJour(nombre: number): string {
  return Jours[nombre];
}
console.log(obtenirJour(1)); // Lundi


//exercice2
function benef(prixVt: number, cFab: number): void {
  let benef: number = prixVt - cFab;
  if (benef > 0) {
    console.log(`Le bénéfice est de : ${benef} €`);
  } else if (benef < 0) { 
    console.log(`Les pertes sont de : ${benef} €`);
  } else {
    console.log(`Pas de bénéfice : ${benef} €`);
  }
}
benef(167, 167); // affiche "Pas de bénéfice : 0 €"