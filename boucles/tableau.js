let fruits = ["pomme", "banane", "kiwi"];
let taille = fruits.length;
console.log(taille);
let premierFruit = fruits[0];
console.log(premierFruit);
let dernierFruit = fruits[fruits.length - 1];
console.log(dernierFruit);
fruits.push("orange");
console.log(fruits);
fruits.unshift("fraise");
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.shift();
console.log(fruits);
fruits.splice(1, 1); // supprime le deuxième élément du tableau
console.log(fruits);
fruits.splice(1, 0, "melon"); // ajoute "melon" à la position 1 sans supprimer d'élément
console.log(fruits);
let indexKiwi = fruits.indexOf("kiwi");
console.log(indexKiwi);
let indexPomme = fruits.indexOf("pomme");
console.log(indexPomme);
let indexMangue = fruits.indexOf("mangue");
console.log(indexMangue); // retourne -1 car "mangue" n'est pas dans le tableau     
console.table(fruits); // affiche le tableau sous forme de table    
