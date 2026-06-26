class Ecouteur {

  //déclaration des propriétés qui seront définies comme propriétés d'instance dans le constructeur (facultatif mais bonne pratique)

  marque;
  sansFil;
  price;

  //définition de propriétés statiques
  
  //static OBJETS_PRIS_EN_CHARGE = "ordinateurs";

  //définition de propriétés de classe

  boite = true;
  nbEcouteurs = 2;

  //définition du constructeur

  constructor(marque, sansFil, price) {
    this.marque = marque;
    this.sansFil = sansFil;
    this.prix = price;
  }
  //définition de méthodes statiques
  
  //définition de méthodes d'instance
  fiche() {
    for(let property in this){
        console.log(property + " : " + this[property]);
     }
   }
}
const ecouteurs1 = new Ecouteur("JBL", true, 50);
ecouteurs1.fiche();
console.log ("\n")
const ecouteurs2 = new Ecouteur("Bose", "false", 20);
ecouteurs2.fiche();
