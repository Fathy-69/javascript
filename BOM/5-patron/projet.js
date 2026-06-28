//Utilisez le patron Singleton pour créer une classe « Projet » qui contient une liste de tâches. //
class Projet {
// Déclaration de la propriété statique et privée pour stocker l'instance
static #instance;

constructor() {

// Vérifier si une instance existe déjà
if (Projet.#instance) {
// Si une instance existe, retourner cette instance
return Projet.#instance;
}

// Initialisation des propriétés de l'instance
this._taches = [];

// Stocker cette instance dans la propriété statique privée
Projet.#instance = this;
}

// Méthode statique pour obtenir l'instance du singleton
static getInstance() {
if (!Projet.#instance) {
// Si aucune instance n'existe, en créer une nouvelle
Projet.#instance = new Projet();
}
// Retourner l'instance unique
return Projet.#instance;
}

// Exemple de méthode pour manipuler l'état de l'objet
ajouterTache(tache) {
this._taches.push(tache);
}

// Exemple de méthode pour récupérer les tâches
obtenirTaches() {
return this._taches;
}
}

// Utilisation du Singleton
const projet1 = Projet.getInstance();
projet1.ajouterTache('Tâche 1');

const projet2 = Projet.getInstance();
console.log(projet2.obtenirTaches()); // ["Tâche 1"]

console.log(projet1 === projet2); // true


//================================TACHE=====================
class Tache {
constructor(titre, description, statut = 'en attente') {
this._titre = titre;
this._description = description;
this._statut = statut;
}

get titre() {
return this._titre;
}

get statut() {
return this._statut;
}

set statut(nouveauStatut) {
this._statut = nouveauStatut;
}
}

// Utilisation de la classe Tache
  const tache1 = new Tache('Tâche 1', 'Description de la tâche 1');
  console.log(tache1.titre); // 'Tâche 1'
  console.log(tache1.statut); // 'en attente'
  tache1.statut = 'en cours';
  console.log(tache1.statut); // 'en cours'     

//=============RxJS pour crer une Observable==============================

const { BehaviorSubject } = rxjs;
// ou import { BehaviorSubject } from 'rxjs';

class Tache {
constructor(titre, description, statut = `en attente`) {
    this._titre = titre;
    this._description = description;
    this._statut = statut;
    this._subject = new BehaviorSubject({ titre: this._titre, statut: this._statut });
  }
}

//…
set statut(nouveauStatut) {
this._statut = nouveauStatut;
this._subject.next({ titre: this._titre, statut : this._statut });
}

subscribe(observer) {
this._subject.subscribe(observer);
}
}

const tache = new Tache('Tache 1', 'Description');
const observer = {
next: data => console.log(`La tâche "${data.titre}" a un nouveau statut : ${data.statut}`),
error: err => console.error(err),
complete: () => console.log('Terminé')
};

tache.subscribe(observer);
tache.statut = 'en cours';


