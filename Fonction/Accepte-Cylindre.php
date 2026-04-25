<?php
// Définition de pi
$pi = pi();

// Constantes
$volume_minimum = 450;
$rayon_minimum = 7;

// Volume d’un cylindre
function calculVolumeCylindre($rayon, $hauteur) {
    global $pi;
    return $pi * $rayon * $rayon * $hauteur;
}

// Vérifie si accepté
function accepteCylindre($rayon, $hauteur) {
    global $volume_minimum, $rayon_minimum;

    return (calculVolumeCylindre($rayon, $hauteur) > $volume_minimum && $rayon > $rayon_minimum);
}

// Message utilisateur
function informe($accepte) {
    return $accepte
        ? "Cylindre adapté pour l’expérience"
        : "Cylindre rejeté";
}

// Fonction globale
function filtre_cylindre($rayon, $hauteur) {
    return informe(accepteCylindre($rayon, $hauteur));
}
// Tests
echo informe(accepteCylindre(7, 3)) . PHP_EOL;
echo filtre_cylindre(7, 3) . PHP_EOL;

echo informe(accepteCylindre(2, 3)) . PHP_EOL;
echo filtre_cylindre(2, 3) . PHP_EOL;

echo informe(accepteCylindre(7, 10)) . PHP_EOL;
echo filtre_cylindre(7, 10) . PHP_EOL;
?>