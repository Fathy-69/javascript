const panier = [];

export function ajouterAuPanier(article) {
    panier.push(article);
    console.log(`Taille du panier : ${panier.length}`);
}

/*Objectif : Lier les modules avec une petite interaction DOM.

Fichier boutique.js : Créez un tableau panier = []. Créez et exportez une fonction ajouterAuPanier(article) qui pousse l'article dans le tableau et affiche la taille du panier avec .length dans la console.

Fichier main.js : Importez la fonction. Sélectionnez un bouton dans le HTML avec querySelector et ajoutez un écouteur d'événement click qui appelle ajouterAuPanier("Livre").
LaTeX est un système de composition de documents très utilisé pour les rapports, mémoires et documents scientifiques.
*/
