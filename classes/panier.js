class Ecouteur {

  //propriétés de classe
  
  boite = true;
  nbEcouteurs = 2;

  //constructeur et propriétés d'instance

  constructor(marque, sansFil, price) {
    this.marque = marque;
    this.sansFil = sansFil;
    this.prix = price;
  }
  
  fiche() {
    for(let property in this) {
      console.log(property + " : " + this[property]); 
    }
  }
}

const ecouteurs1 = new Ecouteur("JBL", true, 50);
const ecouteurs2 = new Ecouteur("Bose", "false", 20);

class Panier {

  //propriété statique
  
  static contenu = new Array();

  //méthodes statiques

  static addToPanier(obj) {
    this.contenu.push(obj);
  }
static rmToPanier(obj) {
    this.contenu.splice(this.contenu.indexOf(obj), 1);
  } //on utilise la méthode splice pour retire 1 item à partir de l'index de l'item ayant pour valeur obj

  static affPanier() {
    for(let produit of this.contenu) {
      console.log (produit.marque);
    }
  }
}

Panier.addToPanier(ecouteurs1); //On ajoute l'objet ecouteurs1 du panier

Panier.addToPanier(ecouteurs2); //On ajoute l'objet ecouteurs2 du panier

Panier.rmToPanier(ecouteurs1);  //On retire écouteur1 du panier

Panier.affPanier(); //On affiche la marque de tous les objets présents dans le panier