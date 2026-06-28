//===================== Tableaux et matrices =====================

// Tableaux
let monTableau1: number[] = [1, 2, 3, 4, 5];
let monTableau2: string[] = ["a", "b", "c"];
let monTableau3: any[] = [1, "a", 3, 4, 5];

// Matrices
let maMatrice1: number[][] = [
    [1, 2],
    [3, 4]
];

let maMatrice2: string[][] = [
    ["a", "b"],
    ["c", "d"]
];

let maMatrice3: any[][] = [
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

let monTableau4: Array<number> = [1, 2, 3, 4, 5];
let monTableau5: Array<string> = ["a", "b", "c"];
let monTableau6: Array<any> = [1, "a", 3, 4, 5];

console.log(monTableau4[0]);
console.log(monTableau5[1]);
console.log(monTableau6[2]);


//===================== Tuples =====================

// Déclaration et initialisation
let monTuple1: [string, number] = ["Hello", 2026];
let monTuple2: [number, string, boolean] = [2026, "Bonjour", true];

// Tuple vs tableau générique
let monTuple: [number, boolean, number, string] = [2026, true, 21, "word"];

let monTableau: Array<string | number | boolean> = [
    2026,
    true,
    21,
    "word"
]; // Le symbole | signifie "ou" (type union).

// Accès aux éléments des tuples
let string1: string = monTuple1[0];
let number1: number = monTuple1[1];

console.log(monTuple1[0]);
console.log(monTuple1[1]);

console.log(monTuple2[0]);
console.log(monTuple2[1]);


// Tableau de tuples
let tableauTuple: [string, number][] = [
    ["Alex", 20],
    ["Fred", 35],
    ["John", 26],
    ["Ali", 32]
];


//===================== Enum =====================

// Déclaration d'une énumération
enum Couleur {
    Rouge = 0,
    Orange = 1,
    Jaune,
    Vert,
    Bleu,
    Indigo,
    Violet
}

enum JourSemaine {
    Lundi = 1,
    Mardi,
    Mercredi,
    Jeudi,
    Vendredi,
    Samedi,
    Dimanche
}

enum JourSemaine2 {
    Jour1 = "Lundi",
    Jour2 = "Mardi",
    Jour3 = "Mercredi",
    Jour4 = "Jeudi",
    Jour5 = "Vendredi",
    Jour6 = "Samedi",
    Jour7 = "Dimanche"
}

// Accès par le nom
console.log(Couleur.Rouge);      // 0
console.log(Couleur.Vert);       // 3
console.log(Couleur.Indigo);     // 5
console.log(Couleur.Violet);     // 6

console.log(JourSemaine.Lundi);      // 1
console.log(JourSemaine.Mardi);      // 2
console.log(JourSemaine.Jeudi);      // 4
console.log(JourSemaine.Dimanche);   // 7

console.log(JourSemaine2.Jour1);     // Lundi
console.log(JourSemaine2.Jour2);     // Mardi
console.log(JourSemaine2.Jour5);     // Vendredi
console.log(JourSemaine2.Jour7);     // Dimanche


// Accès par la valeur numérique
console.log(Couleur[0]); // Rouge
console.log(Couleur[4]); // Bleu
console.log(Couleur.Orange); // 1

console.log(JourSemaine.Lundi); // 1
console.log(JourSemaine2.Jour4); // Jeudi
console.log(JourSemaine2.Jour7); // Dimanche