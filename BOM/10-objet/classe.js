"use strict";
/***********************************************************************
 *                  LES CLASSES EN TYPESCRIPT
 ***********************************************************************/
/*
Une classe est un modèle (plan) qui permet de créer des objets.

Une classe contient généralement :
- des propriétés (variables)
- un constructeur
- des méthodes (fonctions)

On crée ensuite des objets à partir de cette classe grâce au mot-clé new.
*/
/***********************************************************************
 * 1. Déclaration d'une classe
 ***********************************************************************/
class Car {
    // Propriétés de la classe
    make;
    model;
    year;
    // Constructeur
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    // Méthode
    drive() {
        console.log(`Driving a ${this.make} ${this.model} from ${this.year}`);
    }
}
/***********************************************************************
 * 2. Instanciation (création d'un objet)
 ***********************************************************************/
const myCar = new Car("Tesla", "Model S", 2022);
myCar.drive();
/*
Résultat :

Driving a Tesla Model S from 2022
*/
/***********************************************************************
 * 3. Deuxième exemple : une classe Plat
 ***********************************************************************/
class Plat {
    nom;
    prix;
    ingredients;
    constructor(nom, prix, ingredients) {
        this.nom = nom;
        this.prix = prix;
        this.ingredients = ingredients;
    }
    afficherDetails() {
        console.log(`Plat : ${this.nom}`);
        console.log(`Prix : ${this.prix} €`);
        console.log(`Ingrédients : ${this.ingredients.join(", ")}`);
    }
}
const plat1 = new Plat("Salade César", 12.5, ["salade", "sauce", "croûtons"]);
plat1.afficherDetails();
/***********************************************************************
 * 4. Les constructeurs
 ***********************************************************************/
/*
Le constructeur est automatiquement appelé lorsque
l'on crée un objet avec le mot-clé new.

Il sert à initialiser les propriétés de l'objet.
*/
class Person {
    nom;
    age;
    constructor(nom, age) {
        this.nom = nom;
        this.age = age;
    }
}
const personne = new Person("Jordan", 30);
console.log(personne.nom);
console.log(personne.age);
/***********************************************************************
 * 5. L'héritage (extends)
 ***********************************************************************/
/*
L'héritage permet de créer une nouvelle classe
à partir d'une classe existante.

Relation :

Chat est un Animal

Employé est une Personne

On utilise le mot-clé :

extends
*/
class Employe extends Person {
    salaire;
    constructor(nom, age, salaire) {
        // Appelle le constructeur de Person
        super(nom, age);
        this.salaire = salaire;
    }
}
const employe = new Employe("Alice", 28, 2500);
console.log(employe);
/***********************************************************************
 * 6. Exemple complet d'héritage
 ***********************************************************************/
class Animal {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    makeSound() {
        console.log(`${this.name} fait un bruit.`);
    }
}
class Dog extends Animal {
    breed;
    constructor(name, age, breed) {
        super(name, age);
        this.breed = breed;
    }
    // Redéfinition (override)
    makeSound() {
        console.log(`${this.name} aboie : Wouf !`);
    }
}
const myDog = new Dog("Rufus", 3, "Labrador");
myDog.makeSound();
/***********************************************************************
 * 7. Les méthodes statiques
 ***********************************************************************/
/*
Une méthode statique appartient à la classe
et non aux objets.

On l'appelle directement sur la classe.
*/
class MathUtils {
    static add(a, b) {
        return a + b;
    }
}
const somme = MathUtils.add(5, 8);
console.log(somme);
/***********************************************************************
 * 8. Les classes abstraites
 ***********************************************************************/
/*
Une classe abstraite sert uniquement de modèle.

On ne peut pas créer directement un objet.

❌ new Shape()

Impossible.

Une classe enfant doit obligatoirement
implémenter les méthodes abstraites.
*/
class Shape {
}
class Circle extends Shape {
    radius;
    constructor(radius) {
        super();
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius ** 2;
    }
}
const myCircle = new Circle(5);
console.log(myCircle.calculateArea());
/***********************************************************************
 * 10. Implémentation d'une interface
 ***********************************************************************/
class Cat {
    name;
    numberOfLegs;
    constructor(name) {
        this.name = name;
        this.numberOfLegs = 4;
    }
    makeSound() {
        console.log("Meow !");
    }
}
const chat = new Cat("Mimi");
chat.makeSound();
/***********************************************************************
 * 11. Héritage VS Interface
 ***********************************************************************/
/*
HERITAGE

Animal
   ↑
  Dog

Dog EST UN Animal.

Le code est réutilisé grâce à extends.



INTERFACE

          IAnimal
             ↑
            Cat

Cat respecte le contrat IAnimal.

Le code n'est pas hérité.

On utilise implements.



extends
--------

✔ relation "est un"

✔ réutilise du code

✔ une seule classe parente



implements
-----------

✔ relation "peut faire"

✔ impose un contrat

✔ plusieurs interfaces possibles

Exemple :

class Canard implements IAnimal, INageur, IVolant {

}
*/ 
