"use strict";
//exercice2
class Voiture {
    marque;
    modele;
    annee;
    prixJournalier;
    disponible;
    constructor(marque, modele, annee, prixJournalier, disponible) {
        this.marque = marque;
        this.modele = modele;
        this.annee = annee;
        this.prixJournalier = prixJournalier;
        this.disponible = disponible;
    }
    estDisponible() {
        return this.disponible;
    }
}
class VoitureCompacte extends Voiture {
    nombreDePortes;
    constructor(marque, modele, annee, prixJournalier, disponible, nombreDePortes) {
        super(marque, modele, annee, prixJournalier, disponible);
        this.nombreDePortes = nombreDePortes;
    }
}
class VoitureBerline extends Voiture {
    nombreDePlaces;
    constructor(marque, modele, annee, prixJournalier, disponible, nombreDePlaces) {
        super(marque, modele, annee, prixJournalier, disponible);
        this.nombreDePlaces = nombreDePlaces;
    }
}
class VoitureSUV extends Voiture {
    capaciteDeRemorquage;
    constructor(marque, modele, annee, prixJournalier, disponible, capaciteDeRemorquage) {
        super(marque, modele, annee, prixJournalier, disponible);
        this.capaciteDeRemorquage = capaciteDeRemorquage;
    }
}
class Client {
    nom;
    prenom;
    adresse;
    numTel;
    constructor(nom, prenom, adresse, numTel) {
        this.nom = nom;
        this.prenom = prenom;
        this.adresse = adresse;
        this.numTel = numTel;
    }
    afficherDetails() {
        console.log(`Nom: ${this.nom}, Prenom: ${this.prenom}, Adresse: ${this.adresse}, Numero de telephone: ${this.numTel}`);
    }
}
// Exemple d’utilisation des classes
const voiture1 = new VoitureCompacte("Renault", "Clio", 2020, 50, true, 5);
const voiture2 = new VoitureBerline("Peugeot", "308", 2019, 70, false, 4);
const voiture3 = new VoitureSUV("Ford", "Explorer", 2021, 100, true, 2000);
const client1 = new Client("Dupont", "Jean", "15 rue des Lilas, Paris", "01 23 45 67 89");
const client2 = new Client("Martin", "Sophie", "10 avenue des Champs Elysées, Paris", "06 12 34 56 78");
console.log(voiture1.marque); //Renault
console.log(voiture1.estDisponible()); // true
console.log(voiture2.marque); // Peugeot
console.log(voiture2.estDisponible()); //false
console.log(voiture3.capaciteDeRemorquage); // 2000
client1.afficherDetails(); //Nom: Dupont, Prenom: Jean, Adresse: 15 rue des Lilas,
// Paris, Numero de telephone: 01 23 45 67 89
