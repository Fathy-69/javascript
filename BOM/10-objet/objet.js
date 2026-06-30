"use strict";
/***********************************************************************
 *                  LES OBJETS EN TYPESCRIPT
 ***********************************************************************/
/*
Un objet est une structure de données qui permet de regrouper
plusieurs informations (appelées propriétés) ainsi que des
fonctions (appelées méthodes).

Un objet est constitué de paires :

clé : valeur

Exemple :

nom : "John"
âge : 30
*/
/***********************************************************************
 * 1. Déclaration d'un objet
 ***********************************************************************/
let person = {
    name: "John",
    age: 30,
    greeting: function () {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};
/***********************************************************************
 * 2. Utilisation de l'objet
 ***********************************************************************/
/*
On accède :

- aux propriétés avec un point (.)
- aux méthodes avec des parenthèses ()
*/
console.log(person.name);
console.log(person.age);
person.greeting();
/***********************************************************************
 * 4. Création d'un objet avec une interface
 ***********************************************************************/
let personInterface = {
    name: "Alice",
    age: 28,
    greeting() {
        console.log(`Bonjour, je m'appelle ${this.name} et j'ai ${this.age} ans.`);
    }
};
personInterface.greeting();
/***********************************************************************
 * 5. Création d'objets à partir d'une classe
 ***********************************************************************/
/*
Contrairement à une interface, une classe contient :

✔ des propriétés
✔ un constructeur
✔ des méthodes

On crée ensuite un objet grâce au mot-clé :

new
*/
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
/***********************************************************************
 * 6. Instanciation d'une classe
 ***********************************************************************/
/*
Créer un objet à partir d'une classe
s'appelle l'instanciation.
*/
const personClass = new Person("John", 30);
personClass.sayHello();
/***********************************************************************
 * Création de l'objet imbriqué
 ***********************************************************************/
const personAddress = {
    name: "John",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Anytown",
        postalCode: "12345"
    }
};
/***********************************************************************
 * Accéder aux propriétés de l'objet imbriqué
 ***********************************************************************/
console.log(personAddress.address.street);
console.log(personAddress.address.city);
console.log(personAddress.address.postalCode);
/*
Résultat :
123 Main St
Anytown
12345
*/
/***********************************************************************
 * 8. Résumé
 ***********************************************************************/
/*
Il existe plusieurs façons de créer un objet en TypeScript.

--------------------------------------------------

1. Objet simple

let personne = {
    nom: "Alice",
    age: 25
};

✔ rapide
✔ idéal pour de petits objets

--------------------------------------------------

2. Objet avec interface

interface PersonInterface {
    name: string;
    age: number;

}

let personne: PersonInterface = { ... }

✔ garantit la structure
✔ très utilisé dans les API
✔ facilite la maintenance

--------------------------------------------------

3. Objet créé à partir d'une classe

class Person {
    constructor(...) {}
}

const personne = new Person(...);
✔ permet d'utiliser un constructeur
✔ permet de créer plusieurs objets
✔ peut contenir de nombreuses méthodes

--------------------------------------------------

4. Objet imbriqué

Person

└── Address

✔ permet de représenter des données complexes

Exemple :

Person
│
├── nom
├── âge
└── adresse
      ├── rue
      ├── ville
      └── code postal

--------------------------------------------------

À retenir

Objet simple :
→ stocke des données.

Interface :
→ décrit la forme d'un objet.

Classe :
→ sert à fabriquer des objets.

Objet imbriqué :
→ un objet contenant un ou plusieurs autres objets.
*/ 
