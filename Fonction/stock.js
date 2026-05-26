let stock = 4029;
let solde = 0;
function vendre(nbProduits, priceUnitaire) {
  stock -= nbProduits;
  let total = (nbProduits * priceUnitaire);
  solde += total;
  return total;
}
console.log(vendre(104, 10.50)); //1092
console.log(stock); //3925
console.log(solde); //1092


let stock = 4029;
let solde = 0;
function vendre(nbProduits, priceUnitaire) {
  stock -= nbProduits;
  let total = (nbProduits * priceUnitaire);
  solde += total;
  return total;
}
function infosMagasin() {
  let message = "Stock du magasin : " + stock + " produits\nSolde total : " + solde + " euros";
  console.log (message);
  return message;
}
console.log(vendre(104, 10.50)); //1092
console.log(stock); //3925
console.log(solde); //1092
infosMagasin(); //Stock du magasin : 3925 produits
//Solde total : 1092 euros