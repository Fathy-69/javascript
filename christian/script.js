/* 1. Les variables

// var nom = "Christian"; 
// var est une ancienne façon de déclarer une variable, 
// il est recommandé d'utiliser let ou const à la place

*/const nomFormateur = "Christian"; /*
// const est utilisé pour les variables qui ne changent pas

let score = 0; 
// let est utilisé pour les variables qui peuvent changer


// 2. Afficher les variables dans la console et dans une alerte

console.log("Bienvenue dans le cours de : " + nomFormateur);

// alert fonctionne uniquement dans le navigateur
alert("Bienvenue dans le cours de : " + nomFormateur);


// 3. Sélectionner un élément HTML et modifier son contenu

const titrePrincipal = document.getElementById("titre");

// Vérifier si l’élément existe avant de modifier


// 4. Modifier après 2 secondes
setTimeout(function () {
  if (titrePrincipal) {
    titrePrincipal.innerText = "Le JavaScript c'est génial !";
    titrePrincipal.style.color = "orange";
  }
}, 2000);


//  5. Récupérer le bouton
const bouton = document.getElementById("monBouton");

//  6. Fonction au clic
function saluer() {
  alert("Merci d'avoir cliqué");
}

//  7. Ajouter l'événement
bouton.addEventListener("click", saluer);
if (titrePrincipal) {
  titrePrincipal.textContent = "Bienvenue " + nomFormateur;
}
// 8. Les tableaux et les méthodes

let invite=["Jean","Paul","Jacques","Michel","Sophie","Marie","Isabelle","Lucie","Claire","Julie"];
let nomUtilisateur="Bob";
if (invite.includes(nomUtilisateur)) {
    console.log("Bienvenue " + nomUtilisateur + " !");
} else {
    console.log("Désolé, vous n'êtes pas sur la liste des invités.");
}

invite.shift("");
console.table(invite);
console.log(invite);
invite.unshift("Delphine");
console.log(invite);
console.log("Il y a " + invite.length + " invités dans la liste.");
console.log(invite.indexOf("Michel") );
console.table(invite.slice(2, 5));

const monTitre = document.querySelector("h1");
let nouveauMessage = "Bienvenue sur notre site " + nomFormateur;
monTitre.textContent = nouveauMessage;

let clics = 0;
const affichages = document.querySelector("h1");
clics += 1;
affichages.textContent = "Nombre de clics : " + clics;*/
// 9. Les objets
/*const utilisateur = { 
  nom: "Sophie",
  age: 30,
  estConnecte: true,
  saluer: function() {
    console.log("Bonjour, je m'appelle " + this.nom);
  }
};
console.log(utilisateur.age);
let proprieteCherchee = "nom";
console.log(utilisateur[proprieteCherchee]);
utilisateur.saluer();

for (let cle in utilisateur) {
  console.log("l'utilisateur contient cette propriété :" + cle + " : " +" et cette valeur--> "+ utilisateur[cle]);
}*/

/*const voiture = {
  marque: "Toyota",
  modele: "Corolla",
  annee: 2020,
  demarrer: function() {
    console.log("La voiture démarre !");
  }
};

const livre = {
  titre: "Le JavaScript pour les nuls",
  auteur: "John Doe",
  pages: 300,
  lire: function() {
    console.log("Vous lisez le livre : " + this.titre);
  }*/

   //javascript
   const saluer = function(nom) { 
   return"Bonjour, " + nom + " !";
   }
   //ES6-ECMAScript 6
    const saluerES6 = (nom) => {
    return "Bonjour, " + nom + " !";
    }
    //version encore plus concise
    const saluerES6Concise = nom => "Bonjour, " + nom + " !";
    
    console.log(saluer("Alice"));
    console.log(saluerES6("Bob"));
    console.log(saluerES6Concise("Charlie"));
    const user = "Hichem";
    const points = 100;
    const message = `Bienvenue, ${user},Tu as ${points} points !`;
    console.log(message);
   
    const bienvenue = function(user) { 
        return `Bienvenue, ${user.nom} !`;
     }
      const bienvenueES6 = (user) => `Bienvenue, ${user.nom} !`;
      console.log(bienvenue({nom: "Alice"}));
      console.log(bienvenueES6({nom: "Bob"}));  
const base = [1,2,3];
const complet = [...base,4,5,6];
const copie = [4,5,...base];
console.log(complet);
console.log(copie);

//classe ES6
class robot {
  constructor(nom, modele) {  /* 2 paramètres pour le constructeur de la classe robot*/
    this.nom = nom;
    this.modele = modele;
  } 
  allumer () {
    console.log(this.nom + " est prêt !"); /* ou console.log(` ${this.nom} est prêt !`);*/
  }
}
const r2d2 = new robot("R2D2" ,"droïde astromech"); /*nouvelle instance de la classe robot avec les paramètres nom et modele*/
r2d2.allumer();
const astro = new robot("Astro", "droïde de protocole");
astro.allumer();
