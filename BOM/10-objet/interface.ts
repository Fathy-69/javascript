/***********************************************************************
 *              INTERFACES ET ALIAS (TYPE) EN TYPESCRIPT
 ***********************************************************************/

/*
En TypeScript, il existe deux façons de décrire un type :

✔ interface
✔ type (alias)

Ces deux outils permettent de définir la forme des données,
mais ils ne s'utilisent pas exactement dans les mêmes situations.
*/


/***********************************************************************
 * 1. Les interfaces
 ***********************************************************************/

/*
Une interface décrit la structure qu'un objet doit respecter.
Elle ne contient aucune donnée.
Elle définit uniquement :

✔ les propriétés
✔ leur type
✔ les méthodes obligatoires
*/

interface Person {
  name: string;
  age: number;
  sayHello(): void;
}

/***********************************************************************
 * Création d'un objet respectant l'interface
 ***********************************************************************/

const person1: Person = {
  name: "John",
  age: 30,
  sayHello() {

    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );

  }

};

person1.sayHello();


/***********************************************************************
 * 2. Les propriétés optionnelles
 ***********************************************************************/

/*
Le symbole ? signifie que la propriété est facultative.

L'objet peut la posséder...

...ou non.
*/

interface Produit {
  nom: string;
  prix: number;
  description?: string;
  disponible: boolean;
}
const tshirt: Produit = {
  nom: "T-shirt",
  prix: 19.99,
  disponible: true
};
console.log(tshirt);

/***********************************************************************
 * 3. Les alias de type (type)
 ***********************************************************************/

/*
Le mot-clé "type" permet de créer un alias.

Un alias donne un nom plus explicite à un type
et permet de rendre le code plus lisible.

Les alias sont particulièrement utiles pour :
- des types complexes
- des unions
- des objets personnalisés
- des concepts métier
*/


// Alias représentant un rôle utilisateur
type UserRole = "admin" | "user" | "guest";


interface PersonAge {

  name: string;

  age: number;

  role: UserRole;

}


/*
Création d'un objet respectant l'interface PersonAge.

La propriété role utilise l'alias UserRole.
*/

const personneAge: PersonAge = {

  name: "Alice",

  age: 28,

  role: "user"

};


console.log(personneAge);
/***********************************************************************
 * 4. Alias générique
 ***********************************************************************/

/*
Un alias peut être générique.

T et U représentent des types qui seront
remplacés lors de l'utilisation.
*/

type Pair<T, U> = {
  first: T;
  second: U;
};
const pair: Pair<string, number> = {
  first: "one",
  second: 2
};
console.log(pair.first);
console.log(pair.second);


/***********************************************************************
 * 5. Une interface peut être étendue
 ***********************************************************************/

/*
Une interface peut hériter d'une autre interface.
On utilise le mot-clé :
extends

Ici :

Dog est un Animal.
L'interface Dog récupère automatiquement :
- name
- age
et ajoute sa propre propriété :
- breed
*/


interface Animal {
  name: string;
  age: number;
  makeSound(): void;
}


interface Dog extends Animal {
  breed: string;
}


/*
Création d'un objet respectant l'interface Dog.

L'objet doit contenir :
- les propriétés héritées de Animal
- les propriétés ajoutées par Dog
*/

const toutou: Dog = {

  name: "Flipper",
  age: 3,
  breed: "Labrador",
  makeSound() {
    console.log(`${this.name} aboie : Wouf !`);
  }
};
toutou.makeSound();
console.log(toutou);

/***********************************************************************
 * 6. Les types peuvent aussi être étendus
 ***********************************************************************/

/*
Les alias utilisent l'opérateur :

&
(intersection)

pour fusionner plusieurs types.
*/

type PersonType = {
  name: string;
  age: number;
};
type Employee = PersonType & {
  department: string;
};
const employee: Employee = {
  name: "John",
  age: 30,
  department: "Sales"
};
console.log(employee);

/***********************************************************************
 * 7. Les alias permettent aussi de renommer des types complexes
 ***********************************************************************/

/*
Au lieu d'écrire plusieurs fois :

Map<string, number>
on peut lui donner un nom.
*/
type NumberMap = Map<string, number>;
const myMap: NumberMap = new Map();
myMap.set("one", 1);
myMap.set("two", 2);
console.log(myMap.get("one"));

/***********************************************************************
 * 8. Les interfaces peuvent être implémentées par des classes
 ***********************************************************************/

/*
Une classe peut respecter une interface.
On utilise :
implements
*/
interface AnimalInterface {
  name: string;
  speak(): string;
}
class DogClass implements AnimalInterface {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  speak(): string {
    return "Woof!";
  }
}
const dog: AnimalInterface = new DogClass("Rufus");
console.log(dog.speak());

/***********************************************************************
 * 9. Les interfaces génériques
 ***********************************************************************/
/*
Une interface peut également être générique.
*/
interface PairInterface<T, U> {
  first: T;
  second: U;
}
const pairInterface: PairInterface<string, number> = {
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