class Ordinateur {

  //déclaration des propriétés qui seront définies comme propriétés d'instance dans le constructeur (facultatif mais bonne pratique)

  marque;
  ram;
  stockage;

  //définition de propriétés statiques
  
  static OBJETS_PRIS_EN_CHARGE = "ordinateurs";

  //définition de propriétés de classe

  type = "laptop";
  clavier = "azerty";

  //définition du constructeur

  constructor(marque, ram, stockage) {
    this.marque = marque;
    this.ram = ram;
    this.stockage = stockage;
  }
  //définition de méthodes statiques
  static definition() {
    console.log("Les ordinateurs sont des machines automatisées permettant le traitement d'informations.")
  }
  //définition de méthodes d'instance
  ficheProduit() {
    console.log("Marque : " + this.marque + "\n" + "Mémoire vive : " + this.ram + "\n" + "Stockage : " + this.stockage);
  }
  calcPrice() {
    return this.ram * 100 + this.stockage * 2;
  }
  addRam(value) {
    return this.ram += value;    
  }
}

let monOrdi = new Ordinateur("Apple", 8, 512);
let monOrdi2 = new Ordinateur("HP", 16, 256);

console.log(monOrdi.marque); //Apple
console.log(monOrdi2.marque); //HP
console.log(monOrdi.type) ; //"laptop"
console.log(monOrdi2.type) ; //"laptop"
Ordinateur.definition(); //appel de la méthode statique
monOrdi.ficheProduit();
monOrdi2.ficheProduit();
console.log(monOrdi.calcPrice());
console.log(monOrdi2.calcPrice());
console.log(monOrdi.addRam(8));



