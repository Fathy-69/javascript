<?php

echo "--- Question 1 ---\n";
//1.1 Déclarez une liste appelée « crayons » et ajoutez 3 couleurs de votre choix. Quel est le type de cette variable ?//
$crayons = ["rouge", "bleu", "vert"];
echo "Type de la variable : " . gettype($crayons) . "\n"; // Affiche "array"

echo "--- Question 2 ---\n";

// 1.2. Écrivez une boucle « for » qui parcourt la liste de crayons et affiche chaque couleur.
$crayons = ["rouge", "bleu", "vert"];
for ($i = 0; $i < count($crayons); $i++) {
    echo $crayons[$i] . "\n";
}

echo "--- Question 3 ---\n";
//1.3. Écrivez une instruction if-else qui affiche « Crayon rare » si la couleur est « bleu », « Crayon commun » si la couleur est « rouge » et « Crayon extra » autrement.

$crayons = ["rouge", "bleu", "vert"];

foreach ($crayons as $crayon) {
    if ($crayon === "bleu") {
        echo "Crayon rare\n";
    } elseif ($crayon === "rouge") {
        echo "Crayon commun\n";
    } else {
        echo "Crayon extra\n";
    }
}
//2.1. Écrivez une fonction appelée « ajouterCouleur » qui prend une liste et une couleur en arguments et ajoute la couleur à la liste.
function ajouterCouleur(&$liste, $couleur) {
    $liste[] = $couleur;
}
$crayons = ["rouge", "bleu", "vert"];
ajouterCouleur($crayons, "jaune");
print_r($crayons); // Affiche ["rouge", "bleu", "vert", "jaune"]
//2.2. Écrivez une fonction appelée « supprimerCouleur » qui prend une liste et une couleur en arguments et supprime la couleur de la liste.

function supprimerCouleur(&$liste, $couleur) {
    $index = array_search($couleur, $liste);
    if ($index !== false) {
        unset($liste[$index]);
        // Réindexer le tableau après suppression
        $liste = array_values($liste);
    }
}
$crayons = ["rouge", "bleu", "vert", "jaune"];
supprimerCouleur($crayons, "bleu");
print_r($crayons); // Affiche ["rouge", "vert", "jaune"]
  //2.3. Écrivez une fonction appelée « rechercherCouleur » qui prend une liste et une couleur en arguments. Elle renvoie « True » si la couleur est dans la liste et « False » sinon. Utilisez une boucle pour parcourir la liste.
function rechercherCouleur($liste, $couleur) {
    foreach ($liste as $item) {
        if ($item === $couleur) {
            return true;
        }
    }
    return false;
}
$crayons = ["rouge", "vert", "jaune"];
$resultat = rechercherCouleur($crayons, "vert");
echo $resultat ? "True\n" : "False\n"; // Affiche "True"
$resultat = rechercherCouleur($crayons, "bleu");
echo $resultat ? "True\n" : "False\n"; // Affiche "False"

?>
