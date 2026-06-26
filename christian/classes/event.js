class Event {
  //déclaration des propriétés qui seront définies comme propriétés d'instance dans le constructeur (facultatif mais bonne pratique)
  titre;
  date;
  description;
  //définition de propriétés statiques
    //static ABCD = "abbbbb";
  //définition de propriétés de classe
  //planete = "spherique";
    //définition du constructeur
    constructor(titre, date, description) {
    this.titre = titre;
    this.date = new Date(date);
    this.description = description;
    }
  //définition de méthodes statiques
  //static action() {
 //   console.log("dfqdsgdgdgqgdgds.")
 // }
 //définition de méthodes d'instance
    affEvent() {
    let dateFormated = this.date.toLocaleDateString("fr-FR"); //Nous formatons la date avec la locale française.
    console.log(`-------- ${dateFormated} --------\nTitre de l’évènement : ${this.titre}\nDescription : ${this.description}`);
  }
}
const event = new Event("rdvmedical", "2023-12-10T14:30:00", "visite medicale");
event.affEvent();