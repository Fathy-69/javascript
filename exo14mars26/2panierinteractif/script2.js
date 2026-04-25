let prixArticle = Number(prompt("Entrez le prix de l'article :"));
let quantite = Number(prompt("Entrez la quantité :"));

let totalPanier = prixArticle * quantite;

let coupon = true;

if (coupon) {
    totalPanier -= 5;
}

if (totalPanier > 30) {
    console.log("Total : " + totalPanier + "€ - Frais de port offerts !");
} else {
    console.log("Total : " + totalPanier + "€ - Frais de port non offerts.");
}
