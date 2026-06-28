//==================== Fonction classique ====================

function add(a: number, b: number): number {
    return a + b;
}

let result1 = add(4, 3);
console.log(result1); // 7


//==================== Paramètres optionnels ====================

function greetOptionnel(name?: string): void {
    if (name) {
        console.log(`Bonjour, ${name} !`);
    } else {
        console.log("Bonjour !");
    }
}

greetOptionnel();
greetOptionnel("Alice");


//==================== Paramètres par défaut ====================

function greetDefault(name: string = "Monde"): void {
    console.log(`Bonjour, ${name} !`);
}

greetDefault();
greetDefault("Alice");


//==================== Fonction renvoyant un tableau ====================

function getColors(): string[] {
    return ["rouge", "vert", "bleu"];
}

let colors = getColors();
console.log(colors);


//==================== Fonction renvoyant un objet ====================

function getPerson(): { name: string; age: number } {
    return {
        name: "Alice",
        age: 30
    };
}

let person = getPerson();
console.log(person);


//==================== Fonction renvoyant une fonction ====================

function getMultiplier(factor: number): (x: number) => number {
    return function (x: number): number {
        return x * factor;
    };
}

let multiplyBy2 = getMultiplier(2);

let result2 = multiplyBy2(3);

console.log(result2); // 6


//==================== Fonction anonyme ====================

let sum1 = function (a: number, b: number): number {
    return a + b;
};

let result3 = sum1(3, 4);

console.log(result3); // 7


//==================== Fonction fléchée ====================

let sum2 = (a: number, b: number): number => a + b;

let result4 = sum2(3, 4);

console.log(result4); // 7

let double = (x: number): number => x * 2;

console.log(double(5)); // 10


//==================== Fonction anonyme et fonction fléchée ====================

let numbers = [1, 2, 3, 4, 5];

// Fonction anonyme
let evenNumbers = numbers.filter(function (n) {
    return n % 2 === 0;
});

// Fonction fléchée
let squaredNumbers = numbers.map(n => n * n);

console.log(evenNumbers);    // [2,4]
console.log(squaredNumbers); // [1,4,9,16,25]


//==================== Fonction générique ====================

function inverserTableau<T>(tableau: T[]): T[] {
    return tableau.reverse();
}

const tableau1 = [1, 2, 3, 4, 5];
const tableau2 = ["a", "b", "c", "d", "e"];

console.log(inverserTableau(tableau1)); // [5,4,3,2,1]
console.log(inverserTableau(tableau2)); // ["e","d","c","b","a"]