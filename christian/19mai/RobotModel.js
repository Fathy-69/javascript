//classe ES6
class robot {
  constructor(nom, modele) {  /* 2 paramètres pour le constructeur de la classe robot*/
    this.nom = nom;
    this.modele = modele;
  } 
  allumer () {
    console.log(this.nom + " est prêt !"); /* ou console.log(` ${this.nom} est prêt !`);*/
  }
}
const r2d2 = new robot("R2D2" ,"droïde astromech"); /*nouvelle instance de la classe robot avec les paramètres nom et modele*/
r2d2.allumer();
const astro = new robot("Astro", "droïde de protocole");
astro.allumer();
