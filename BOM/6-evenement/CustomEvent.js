// Création de l'événement personnalisé avec des données
const monEvenement = new CustomEvent('monEvenement', {
  detail: {
    message: 'Bonjour tout le monde !'
  }
});

// Ajout d'un écouteur d'événement pour l'événement personnalisé avec des données
document.addEventListener('monEvenement', (event) => {
  console.log(`Message reçu : ${event.detail.message}`);
  console.log('L\'événement personnalisé a été déclenché !');
});

// Déclenchement de l'événement personnalisé avec des données
document.dispatchEvent(monEvenement);

//=========================================================================================================
//JavaScript qui écoute l'événement keyup pour détecter quand l'utilisateur a appuyé sur la touche « Entrée » :
const input = document.getElementById("myInput");
document.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    console.log('La touche Entrée a été pressée !');
    alert("afficher le contenu de l'input: " + input.value);
  }else{alert("Event.key: " + event.key);}  
});
//==========Propagation d'événements============/

         //=========Capture et propagation======//
const button = document.querySelector("button");
button.addEventListener("click",() => {
        alert("Bouton cliqué");
    },
    { capture: true }
);
             //=========La capture d'événements======//
const parent = document.querySelector('#parent');
const enfant = document.querySelector('#enfant');

parent.addEventListener('click', function() { 
  console.log('Parent');//enfant puis parent
});
//parent.addEventListener('click', function() {  
// console.log('Parent');
//}, true);//parent puis enfant

enfant.addEventListener('click', function() {
  console.log('Enfant');
  event.stopPropagation();//===========Empêcher la propagation d'événements=
});             

//Si nous enlevons la ligne ‘event.stopPropagation();
//  alors nous aurons dans la console « Enfant », puis « Parent ».

//===================La méthode event.preventDefault()
const boutonInscription = document.querySelector('#bouton-inscription');
boutonInscription.addEventListener('click', function(event) {
  event.preventDefault();
  // code pour valider les données du formulaire
});
const champEmail = document.querySelector('#champ-email');
champEmail.addEventListener('input', function() {
  // Vérifier si l'adresse e-mail est valide.
});