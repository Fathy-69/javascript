//Exercice 2 : Imaginez un système de panier d'achat :

//On a un prixArticle = 20.On a une quantite = 2.

//On calcule le total (Arithmétique). On applique une réduction de 5€ si le client a un coupon (Assignation).

//On vérifie si le total est supérieur à 30€ pour offrir les frais de port (Comparaison).
let prixArticle = 20;
let quantite = 2;
let totalPanier = prixArticle * quantite; 
let coupon = true; // le client a un coupon
if (coupon==true && totalPanier > 30) {
    totalPanier -= 5; // appliquer la réduction de 5€
    console.log("Réduction appliquée. Total du panier : " + totalPanier + "€");
}   else if (totalPanier > 30) {
    console.log("Total du panier : " + totalPanier + "€. Frais de port offerts !");
} else {
    console.log("Total du panier : " + totalPanier + "€. Frais de port non offerts.");  
    }   
