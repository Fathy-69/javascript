// 1. Les variables

// var nom = "Christian"; 
// var est une ancienne façon de déclarer une variable, 
// il est recommandé d'utiliser let ou const à la place

const nomFormateur = "Christian"; 
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


let invité=["Jean","Paul","Jacques","Michel","Sophie","Marie","Isabelle","Lucie","Claire","Julie"];
let nomUtilisateur="Bob";
if (invité.includes(nomUtilisateur)) {
    console.log("Bienvenue " + nomUtilisateur + " !");
} else {
    console.log("Désolé, vous n'êtes pas sur la liste des invités.");
}

invité.shift("");

console.log(invité);
invité.unshift("Delphine");

console.log(invité);
console.log("Il y a " + invité.length + " invités dans la liste.");
console.log(invité.indexOf("Bob") );

const monTitre = document.querySelector("h1");
let nouveauMessage = "Bienvenue sur notre site2 " + nomFormateur;
monTitre.textContent = nouveauMessage;
let clics = 0;
const affichages = document.querySelector("h1");
clics += 1;
affichages.textContent = "Nombre de clics : " + clics;