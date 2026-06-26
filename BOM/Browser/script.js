//==window.open()==//
/*const button = document.getElementById("bouton");

button.addEventListener('click', () => {
  window.open("destination.html", 'destination', 'width=500, height=500');
});

//---------------------fenetre.close()---------------------------//

const button = document.getElementById("bouton");
button.addEventListener('click', () => {
  let fenetre = window.open("destination.html", 'destination', 'width=500, height=500');

  fenetre.addEventListener('load', () => {
    let button2 = fenetre.document.getElementById('bouton2');

    button2.addEventListener('click', () => {
      fenetre.close();
    });
  });
});

//-------------------------Méthode alert()----------------------
const button = document.getElementById("bouton");
button.addEventListener('click', () => {
  window.alert("Message"); //ou alert("Message")
});

//----------------------Méthode prompt()-------------------------
const button = document.createElement('button');
button.addEventListener('click', () => {
  let mot = window.prompt("Quel mot afficher ?", "mot de votre choix");
  window.alert(mot);
});

//-----------------Méthode BONJOUR()----------------------//

/*const button = document.getElementById("bouton");

button.addEventListener('click', () => {
  window.alert("Bonjour, bienvenue sur mon site ! "); //ou alert("Message")
});*/

//==solution==/ /dès que la page s'ouvre
/*window.addEventListener('load', function() {
alert("Bonjour, bienvenue sur mon site !");
});*/

//-------------------Bienvenue Peter------------------/
/*let nom = prompt("Quel est votre nom ?");
console.log("Bienvenue " + nom);*/

//-------------page 500x500----------------------/
/*button.addEventListener('click', () => {
  window.open("https://www.google.com", 'google', 'width=500, height=500');
})
let close = document.createElement('button');

close.innerHTML = "close";

document.body.appendChild(close);
var fenetre = window.open("https://www.google.com", 'google', 'width=500, height=500');
close.addEventListener('click', () => {
fenetre.close();
})
//--------------ouvrir  une url-----------------/
let open = document.createElement('button');
open.innerHTML = "open";
document.body.appendChild(open);
open.addEventListener('click', () => {
  window.open(url);
});
console.log(screen.height
);


//-------------L’objet screen-------------//
console.log(screen.width);
console.log(screen.height);
console.log(screen.availWidth);
console.log(screen.availHeight);
console.log(screen.colorDepth);
console.log(screen.pixelDepth);
//==Nous pouvons donc accéder aux propriétés de screen en spécifiant le mot window avant screen :==//
console.log(window.screen.width);
console.log(window.screen.height);
console.log(window.screen.availWidth);
console.log(window.screen.availHeight);
console.log(window.screen.colorDepth);
console.log(window.screen.pixelDepth);

//Affichage de propriétés de window.location (le mot window est facultatif)
console.log(window.location.href);
console.log(window.location.protocol);
console.log(window.location.host);
console.log(window.location.pathname);
//window.location.assign('destination.html');
//window.location.replace('destination.html');
//window.location.reload();
//console.log(location.toString());

//======================L’objet window.history=================================//
//history.forward();//history.forward() : charge la page suivante dans l’historique du navigateur,
//history.back(); //history.back() : charge la page précédente dans l’historique du navigateur,
//history.go(3); //charge la page située n positions dans l’historique du navigateur.
//history.length;

let destination = document.getElementById('destination');
const forward = document.getElementById('forward');
destination.addEventListener('click', () => {
destination = window.location.assign('destination.html');
});

forward.addEventListener('click', () => {
window.history.forward();
});

//--- les méthodes back() et forward().--/

const destination = document.getElementById('destination');

const forward = document.getElementById('forward');

destination.addEventListener('click', () => {
destination = window.location.assign('destination.html');
});

forward.addEventListener('click', () => {
window.history.forward();
});
window.alert(history.length);

// document.cookie = "clé=value ; expires=date_d'expiration ; path=chemin ; domain=domaine ; secure"

//création d’un objet Date pour créer une date d’expiration :

const dateExp = new Date();
dateExp.setMonth(dateExp.getMonth() + 1); //nous ajoutons 1 mois à la date
//nous interrogeons l’utilisateur sur son username et son mdp avec window.prompt()
const username = prompt("Username");
const mdp = prompt("Mot de passe");
const name = prompt("Nom");
//creation des cookies
document.cookie = `username=${username} ; expires=${dateExp.toUTCString()}`;
document.cookie = `mdp=${mdp} ; expires=${dateExp.toUTCString()}`; 
document.cookie =`name=${name}; expires=${dateExp.toUTCString()}`;

//la largeur de l’écran de l’utilisateur dans la console.
console.log(window.screen.width);

//rediriger l’utilisateur vers la page google.com en ajoutant une entrée dans l’historique,(ASSIGN) quand le bouton open est cliqué.
let open = document.createElement('button');
open.innerHTML = "open";
document.body.appendChild(open);
open.addEventListener('click', () => {
  window.location.assign('https://www.google.com');
})



//Utilisez l’objet location pour rediriger l’utilisateur vers la page google.com sans ajouter d’entrée dans l’historique(REPLACE), quand le bouton open est cliqué.
let open = document.createElement('button');
open.innerHTML = "open";
document.body.appendChild(open);
open.addEventListener('click', () => {
  window.location.replace('https://www.google.com');
});*/

//COOKIE
//document.cookie
let expDate = new Date();
expDate .setMonth(expDate .getMonth() + 1);
//creation des cookies et sa recuperation
let expirationDate = new Date();
expirationDate.setHours(expirationDate.getHours() + 1);

Document.cookie = "username=user1; expires=" + expirationDate.toUTCString();

let valeurDuCookie;
let tableau = Document.cookie.split(';');
valeurDuCookie = tableau[0];
console.log(valeurDuCookie);