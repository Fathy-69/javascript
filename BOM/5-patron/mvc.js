//=======================MVC EN JAVASCRIPTE====================
// Modèle
class Model {
  constructor() {
    this.data = [];
  }

  addData(item) {
    this.data.push(item);
  }

  getData() {
    return this.data;
  }
}

// Vue
class View {
  constructor() {}

  render(data) {
    console.log(`Données actuelles : ${JSON.stringify(data)}`);
  }
}

// Contrôleur
class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  addData(item) {
    this.model.addData(item);
    this.view.render(this.model.getData());
  }
}

// Utilisation du MVC
const model = new Model();
const view = new View();
const controller = new Controller(model, view);

// Ajout de données
controller.addData("Donnée 1");
controller.addData("Donnée 2");
controller.addData("Donnée 3");
// Affichage des données
view.render(model.getData()); // Données actuelles : ["Donnée 1", "Donnée 2", "Donnée 3"]   


//=====COMMANDE EN JAVASCRIPTE====================
// Récepteur
class Receiver {
  

  action() {
    console.log("Action effectuée.");
  }
}

// Commande
class Command {
  constructor(receiver) {
    this.receiver = receiver;
  }

  execute() {
    console.log("Commande exécutée.");
    this.receiver.action();
  }

  undo() {
    console.log("Commande annulée.");
  }
}

// Invocateur
class Invoker {
  constructor() {
    this.commands = [];
  }

  setCommand(command) {
    this.commands.push(command);
  }

  executeCommands() {
    this.commands.forEach((command) => {
      command.execute();
    });
  }

  undoCommands() {
    this.commands.reverse().forEach((command) => {
      command.undo();
    });
  }
}

// Utilisation de Command
const receiver = new Receiver();
const command1 = new Command(receiver);
const command2 = new Command(receiver);
const invoker = new Invoker();

// Configuration des commandes pour l’invocateur
invoker.setCommand(command1);
invoker.setCommand(command2);

// Exécution des commandes
invoker.executeCommands();

// Annulation des commandes
invoker.undoCommands();

//==================UN OBJET ITERATEUR DE TYPE PERSONITERATOR===============
class PersonCollection {
  constructor() {
    this.persons = [];
  }

  addPerson(person) {
    this.persons.push(person);
  }

  getIterator() {
    return new PersonIterator(this.persons);
  }
}


class PersonIterator {
  constructor(persons) {
    this.index = 0;
    this.persons = persons;
  }

  hasNext() {
    return this.index < this.persons.length;
  }

  next() {
    const person = this.persons[this.index];
    this.index++;
    return person;
  }
}


class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const personCollection = new PersonCollection();
personCollection.addPerson(new Person("Alice", 25));
personCollection.addPerson(new Person("Bob", 30));
personCollection.addPerson(new Person("Charlie", 35));

const iterator = personCollection.getIterator();

while (iterator.hasNext()) {
  const person = iterator.next();
  console.log(person.name + ", " + person.age + " ans");
}

//=============conception Memento en JavaScript, nous avons besoin de 2 éléments principaux : l’objet Memento et l’objet Caretaker.
class Memento {
  constructor(state) {
    this.state = state;
  }

  getState() {
    return this.state;
  }

  setState(state) {
    this.state = state;
  }
}

class Caretaker {
  constructor(originator) {
    this.originator = originator;
    this.mementos = [];
  }

  save() {
    const state = this.originator.getState();
    const memento = new Memento(state);
    this.mementos.push(memento);
  }

  undo() {
    const memento = this.mementos.pop();
    this.originator.setState(memento.getState());
  }
}

class Originator {
  constructor(state) {
    this.state = state;
  }

  getState() {
    return this.state;
  }

  setState(state) {
    this.state = state;
  }
}

const originator = new Originator("état initial");
const caretaker = new Caretaker(originator);

console.log(originator.getState());  // affiche "état initial"

caretaker.save();
originator.setState("état modifié");
caretaker.save();

console.log(originator.getState()); // affiche "état modifié"

caretaker.undo();
console.log(originator.getState()); // affiche "état initial"

//=============utilisation de RxJS pour créer un Observable qui émet des nombres aléatoires toutes les secondes =========
const { Observable } = rxjs;

const observable = new Observable((observer) => {

    const intervalId = setInterval(() => {
        observer.next(Math.random());
    }, 1000);

    // Fonction de nettoyage
    return () => {
        clearInterval(intervalId);
        console.log("Intervalle arrêté.");
    };
});

const subscription = observable.subscribe((value) => {
    console.log(value);
});

// Arrêt après 5 secondes
setTimeout(() => {
    subscription.unsubscribe();
    console.log("Observation terminée.");
}, 5000);
//============BehaviourSubject est un type spécial d’Observable provenant de la bibliothèque RxJS. Il est particulièrement utile lorsque nous avons besoin de partager une valeur qui peut changer au fil du temps entre plusieurs observateurs.//

const { BehaviorSubject } = rxjs;

// Création du BehaviorSubject avec une valeur initiale
const subject = new BehaviorSubject("Hello");

// Premier observateur
const observer1 = {
    next: (value) => {
        console.log("Observer 1 :", value);
    }
};

// Deuxième observateur
const observer2 = {
    next: (value) => {
        console.log("Observer 2 :", value);
    }
};

// Abonnement du premier observateur
const subscription1 = subject.subscribe(observer1);

// Émission d'une nouvelle valeur
subject.next("World");

// Abonnement du deuxième observateur
const subscription2 = subject.subscribe(observer2);

// Nouvelle valeur
subject.next("RxJS");

// Désabonnement
subscription1.unsubscribe();
subscription2.unsubscribe();

// ======== L'opérateur from() permet de créer un Observable à partir
// d'un tableau, d'une chaîne de caractères, d'une Promise, etc.

const { from } = rxjs;

// Crée un tableau
const items = [1, 2, 3, 4, 5];

// Crée un Observable à partir du tableau
const observablefrom = from(items);

// Un observateur qui affiche les valeurs émises
const observer = {
  next: value => console.log(value),
  error : err => console.error(err),
  complete: () => console.log('Terminé'),
};

// S’abonne à l’Observable et affiche les valeurs émises
observablefrom.subscribe(observer);
// Affiche :
// 1
// 2
// 3
// 4
// 5
// Terminé