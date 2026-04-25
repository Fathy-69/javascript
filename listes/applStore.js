/* Question 1:tableau*/

let Produits = ["Macbook", "Iphone", "Apple Watch", "AirPods", "Ipad"];  
console.log(Produits);
ventes = [300, 1083, 128, 4568, 34];
console.log(ventes);
Prix = [999.99, 899.99, 929.00, 169.99, 1149.99];
console.log(Prix);
/* Question 2 : ajout d'un élément à la fin de la liste */
Produits.push("Imac");
ventes.push(46);
Prix.push(2699.66);
console.log(Produits);
console.log(ventes);
console.log(Prix);
/* Question 3 : modifier des éléments  de ventes*/
ventes[0] = 270 ;
ventes[1] = 678; 
ventes[2] = 144;
ventes[3] = 5000;
ventes[4] = 109; 
ventes[5] = 46; 
console.log(ventes);
let totalVentes = [];
let n = ventes.length;
for (let i = 0; i < n-1; i++) {
  totalVentes.push(ventes[i] * Prix[i]);
}
console.log(totalVentes);
let maxVentes = Math.max(...totalVentes);
let indexMaxVentes = totalVentes.indexOf(maxVentes);
console.log("Le produit avec le chiffre d'affaires le plus élevé est :", Produits[indexMaxVentes]); 

/*methode 2*/
let maxVentes2 = -1;
let indexMaxVentes2 = -1;
for (let i = 0; i < n-1; i++) {
  let chiffreAffaires = ventes[i] * Prix[i];
  if (chiffreAffaires > maxVentes2) {
    maxVentes2 = chiffreAffaires;
    indexMaxVentes2 = i;
  }
}
console.log("Le chiffre d'affaires le plus élevé est :", maxVentes2);