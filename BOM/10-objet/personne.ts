//Exercice
// Interface Personne
interface Personne {
  nom: string;
  age: number;
  adresse: string;
  email: string;
}
// Alias de type Utilisateur
type Utilisateur = {
  nom: string;
  age: number;
  adresse: string;
  email: string;
}
// Objet client
let client: Personne = { 
nom: "Alex", 
age: 35, 
adresse: "123 rue de la Victoire", 
email: "alex@gmail.com" 
};
// Objet utilisateur
let utilisateur: Utilisateur = {
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