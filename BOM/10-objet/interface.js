"use strict";
/***********************************************************************
 *              INTERFACES ET ALIAS (TYPE) EN TYPESCRIPT
 ***********************************************************************/
/***********************************************************************
 * Création d'un objet respectant l'interface
 ***********************************************************************/
const person1 = {
    name: "John",
    age: 30,
    sayHello() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};
person1.sayHello();
const tshirt = {
    nom: "T-shirt",
    prix: 19.99,
    disponible: true
};
console.log(tshirt);
/*
Création d'un objet respectant l'interface PersonAge.

La propriété role utilise l'alias UserRole.
*/
const personneAge = {
    name: "Alice",
    age: 28,
    role: "user"
};
console.log(personneAge);
const pair = {
    first: "one",
    second: 2
};
console.log(pair.first);
console.log(pair.second);
/*
Création d'un objet respectant l'interface Dog.

L'objet doit contenir :
- les propriétés héritées de Animal
- les propriétés ajoutées par Dog
*/
const toutou = {
    name: "Flipper",
    age: 3,
    breed: "Labrador",
    makeSound() {
        console.log(`${this.name} aboie : Wouf !`);
    }
};
toutou.makeSound();
console.log(toutou);
const employee = {
    name: "John",
    age: 30,
    department: "Sales"
};
console.log(employee);
const myMap = new Map();
myMap.set("one", 1);
myMap.set("two", 2);
console.log(myMap.get("one"));
class DogClass {
    name;
    constructor(name) {
        this.name = name;
    }
    speak() {
        return "Woof!";
    }
}
const dog = new DogClass("Rufus");
console.log(dog.speak());
const pairInterface = {
    first: "one",
    second: 2
};
console.log(pairInterface.first);
console.log(pairInterface.second);
/***********************************************************************
 * 10. Alias VS Interface
 ***********************************************************************/
/*
INTERFACE
---------
✔ Décrit la forme d'un objet.
✔ Peut être étendue avec extends.
✔ Peut être implémentée par une classe.

Exemple :
interface Animal {
   name: string;
}

class Dog implements Animal {
}



TYPE (Alias)
------------

✔ Permet de créer un nouveau nom pour un type.
✔ Peut représenter :
- un objet
- un type primitif
- une union
- une intersection
- un tuple
- un type générique

Exemples :

type Age = number;
type Status = "success" | "error";
type Point = [number, number];
type Employee = Person & {
    department: string;
};



Quand utiliser quoi ?
----------------------

Utiliser une interface :

✔ pour décrire des objets
✔ pour les classes
✔ pour les API
✔ lorsque l'on souhaite utiliser extends

Utiliser un alias (type) :

✔ pour les unions

type Status = "open" | "closed";

✔ pour les tuples

type Point = [number, number];

✔ pour les intersections

type Employee = Person & {
   department: string;
};

✔ pour renommer un type complexe
type NumberMap = Map<string, number>;
*/ 
