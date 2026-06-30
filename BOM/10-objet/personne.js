"use strict";
// Objet client
let client = {
    nom: "Alex",
    age: 35,
    adresse: "123 rue de la Victoire",
    email: "alex@gmail.com"
};
// Objet utilisateur
let utilisateur = {
    nom: "Alex",
    age: 35,
    adresse: "123 rue de la Victoire",
    email: "alex@gmail.com"
};
// Modification de l’email de l’utilisateur
utilisateur.email = "alex123@gmail.com";
// Affichage des propriétés des deux objets
console.log("Client :", client); // Client : { nom: 'Alex', age: 35, adresse: '123 rue de la Victoire', email: ’alex@gmail.com'}
console.log("Utilisateur :", utilisateur); // Client : { nom: 'Alex', age: 35, adresse: '123 rue de la Victoire', email: ’alex123@gmail.com'}
