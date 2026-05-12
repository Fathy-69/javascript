console.log("Le script shadow.js est bien chargé et prêt !");

const personnage = {
  pseudo: "Shadow",
  pointsDeVie: 100,
  niveau: 1,
  subirDegats: function() {
    this.pointsDeVie -= 10;
    if (this.pointsDeVie < 0) {
      this.pointsDeVie = 0; // Empêche les PV de descendre sous 0
    }
  },
  seSoigner: function() {
    this.pointsDeVie += 10;
    if (this.pointsDeVie > 100) {
      this.pointsDeVie = 100; // Limite les points de vie à 100
    }
  }
};

const affichageHp = document.querySelector("#hp");
const boutonDegats = document.querySelector("#btn-attack");
const boutonSoigner = document.querySelector("#btn-soigner");
//fonction de mise à jour des points de vie affichés
function actualiserVue() {
  affichageHp.textContent = "PV : " + personnage.pointsDeVie + "/100";
 //condition:personnage faible
  if (personnage.pointsDeVie <= 20) {
    affichageHp.style.color = "red";
  } else {
    affichageHp.style.color = "black";
  }
}
boutonDegats.addEventListener("click", function() {
  personnage.subirDegats();//on change les points de vie du personnage
  actualiserVue(); //on met à jour l'affichage après le changement
  console.log("Aïe ! Dégâts subis. PV actuels : " + personnage.pointsDeVie);
});
// se soigner

boutonSoigner.addEventListener("click", function() {
  personnage.seSoigner();
  actualiserVue();
  console.log("Ouf ! Soins reçus. PV actuels : " + personnage.pointsDeVie);
});