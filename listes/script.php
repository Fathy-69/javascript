<?php
// Déclaration d'une liste (tableaux en PHP)
$ma_liste = [1, 2, 3, 4, 5];
$ma_liste2 = ["Alice", "Bob", "Charlie"];

echo "Ma liste : ";
print_r($ma_liste);

echo "Ma liste 2 : ";
print_r($ma_liste2);

// Accéder à un élément
echo "Premier élément : " . $ma_liste[0] . "\n";
echo "Troisième élément : " . $ma_liste[2] . "\n";
echo "Deuxième élément de ma_liste2 : " . $ma_liste2[1] . "\n";

// Modifier un élément
$ma_liste[2] = 10;
echo "Après modification : ";
print_r($ma_liste);

// Ajouter un élément
$ma_liste[] = 6;
echo "Après ajout : ";
print_r($ma_liste);

// Supprimer un élément
unset($ma_liste[1]);
echo "Après suppression : ";
print_r($ma_liste);

// Longueur
echo "Longueur : " . count($ma_liste) . "\n";

// Parcourir avec for
echo "Parcours avec for :\n";
for ($i = 0; $i < count($ma_liste); $i++) {
    echo "Index $i : " . $ma_liste[$i] . "\n";
}

// Parcourir avec foreach
echo "Parcours avec foreach :\n";
foreach ($ma_liste as $element) {
    echo $element . "\n";
}

// Vérifier présence
if (in_array(10, $ma_liste)) {
    echo "10 est dans ma_liste\n";
} else {
    echo "10 n'est pas dans ma_liste\n";
}

// Concaténation
$ma_liste3 = array_merge($ma_liste, $ma_liste2);
echo "Concaténation : ";
print_r($ma_liste3);

// Trier
sort($ma_liste);
echo "Liste triée : ";
print_r($ma_liste);

// Inverser
$ma_liste = array_reverse($ma_liste);
echo "Liste inversée : ";
print_r($ma_liste);

// Index d’un élément
$index_bob = array_search("Bob", $ma_liste2);
echo "Index de Bob : $index_bob\n";

// Compter occurrences
$count_1 = array_count_values($ma_liste)[1] ?? 0;
echo "Nombre de 1 : $count_1\n";

// Vider la liste
$ma_liste = [];
echo "Liste vidée : ";
print_r($ma_liste);
?>