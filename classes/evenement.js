class Evenement {
    //définition du constructeur
    constructor(date, evenement) {
    this.date = date;
    this.evenement = evenement;
  }
//méthodes d'instance
  getResume() {
    console.log(this.date.getDate() + "/" + (this.date.getMonth() + 1) + " : " + this.evenement)
  }
}

const dt = new Date(2023, 9, 20);

const event = new Evenement(dt, "rdv medical");

event.getResume(); //appel de la méthode