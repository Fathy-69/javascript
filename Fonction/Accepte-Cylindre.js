// Définition de pi
const pi = Math.PI;

// Définition du volume minimum accepté pour l’expérience
const volumeMinimum = 450;

// Définition du rayon minimum accepté pour l’expérience
const rayonMinimum = 7;

// Retourne le volume d’un cylindre
function calculVolumeCylindre(rayon, hauteur) {
  return pi * rayon * rayon * hauteur;
}

// Retourne vrai si le cylindre est accepté, faux sinon
function accepteCylindre(rayon, hauteur) {
  return (
    calculVolumeCylindre(rayon, hauteur) > volumeMinimum &&
    rayon > rayonMinimum
  );
}

// Informe l’utilisateur par un message
function informe(accepte) {
  return accepte
    ? "Cylindre adapté pour l’expérience"
    : "Cylindre rejeté";
}

// Filtre un cylindre
function filtreCylindre(rayon, hauteur) {
  return informe(accepteCylindre(rayon, hauteur));
}

// Tests
console.log(informe(accepteCylindre(7, 3)));
console.log(filtreCylindre(7, 3));

console.log(informe(accepteCylindre(2, 3)));
console.log(filtreCylindre(2, 3));
