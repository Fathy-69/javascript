const Menu = (() => {
  let instance;
 

  function createInstance() {
    return  {
        pizza: 10,
        hamburger: 8,
        salade: 6,
      };
  }
 
  
  return {
    getInstance : function() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();


const menu1  = Menu.getInstance();
const menu2  = Menu.getInstance();

console.log(menu1 === menu2);
//===============decorator================================
// Objet commande
const commande = {
  plats: {}
};

// Classe
class CommandeWrapper {
  constructor(commande) {
    this.commande = commande;
  }

  ajouterPlat(plat, quantite) {
    this.commande.plats[plat] =
      (this.commande.plats[plat] || 0) + quantite;
  }
}
// Création du wrapper
const wrapper = new CommandeWrapper(commande);
// Ajout de plats
wrapper.ajouterPlat("pizza", 2);
// Affichage
console.log(commande.plats);

wrapper.ajouterPlat("pizza", 2);
wrapper.ajouterPlat("pizza", 1);
wrapper.ajouterPlat("burger", 3);

console.log(commande.plats);

//===========================strategy=======================
class Commande {
constructor() {
this.plats = {};
}
}
 
class CommandeFactory {
static creerCommande() {
return new Commande();
}
}
 
const commande1 = CommandeFactory.creerCommande();
console.log(commande1);
const commande2 = CommandeFactory.creerCommande();
console.log(commande2);
console.log(commande1 === commande2); // false

//==================================Template==================
class Commande3 {
  constructor(plats) {
    this.plats = plats;
  }

   finaliserCommande() {
    this.choisirPlats();
    this.preparerPlats();
    this.servirPlats();
  }


  choisirPlats() { }
  preparerPlats() { }
  servirPlats() { }
}

class CommandeSurPlace extends Commande3 {
  choisirPlats() {
    console.log("Le client a choisi les plats suivants : ", this.plats);
  }
  preparerPlats() {
    console.log("La cuisine prépare les plats.");
  }
  servirPlats() {
    console.log("Les plats sont servis à la table du client.");
  }
}

class CommandeALivrer extends Commande3 {
  choisirPlats() {
    console.log("Le client a choisi les plats suivants pour la livraison : ", this.plats);
  }
  preparerPlats() {
    console.log("La cuisine prépare les plats pour la livraison.");
  }
  servirPlats() {
    console.log("Les plats sont prêts pour la livraison.");
  }
}

const commandeSurPlace = new CommandeSurPlace(['pizza', 'hamburger']);
commandeSurPlace.finaliserCommande();

const commandeALivrer = new CommandeALivrer(['salade']);
commandeALivrer.finaliserCommande();