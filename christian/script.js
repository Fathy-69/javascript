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

const personnage = {
  pseudo: "Shadow",
  pointsDeVie: 100,
  niveau: 1,
  subirDegats: function() {
    this.pointsDeVie -= 10;
  },
  seSoigner: function() {
    this.pointsDeVie += 10;
    if (this.pointsDeVie > 100) {
      this.pointsDeVie = 100; // Limite les points de vie à 100
    }
  }
};

const affichageHp = document.querySelector("#hp");
const boutonDegats = document.querySelector("#btn-attack");
const boutonSoigner = document.querySelector("#btn-soigner");
//fonction de mise à jour des points de vie affichés
function actualiserVue() {
  affichageHp.textContent = "PV : " + personnage.pointsDeVie + "/100";
 //condition:personnage faible
  if (personnage.pointsDeVie <= 20) {
    affichageHp.style.color = "red";
  } else {
    affichageHp.style.color = "black";
  }
}
boutonDegats.addEventListener("click", function() {
  personnage.subirDegats();//on change les points de vie du personnage
  actualiserVue(); //on met à jour l'affichage après le changement
});
// se soigner

boutonSoigner.addEventListener("click", function() {
  personnage.seSoigner();
  actualiserVue();
});

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