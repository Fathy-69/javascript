//Getters et Setters
class Produit {
  constructor(marque) {
    this._marque = marque;
  }
  //définition du getter
  get marque() {
    return this._marque;
  }
  //définition du setter
  set marque(value) {
    this._marque = value;
  }
}
produit = new Produit("HP");
console.log(produit.marque);
produit.marque = "Acer" ;
console.log(produit.marque);